const PAYPAL_API_BASE = "https://api-m.paypal.com";

function getCredentials() {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error("PayPal production credentials are missing.");
  }

  return { clientId, clientSecret };
}

async function getAccessToken() {
  const { clientId, clientSecret } = getCredentials();
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const response = await fetch(`${PAYPAL_API_BASE}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
    cache: "no-store",
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`PayPal token request failed: ${response.status} ${detail}`);
  }

  const data = (await response.json()) as { access_token: string };
  return data.access_token;
}

export async function createPayPalOrder(args: {
  internalOrderId: string;
  returnUrl: string;
  cancelUrl: string;
}) {
  const accessToken = await getAccessToken();

  const response = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "PayPal-Request-Id": `pe-design-create-${args.internalOrderId}`,
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          reference_id: args.internalOrderId,
          custom_id: args.internalOrderId,
          description: "PE-DESIGN 11 Lifetime License",
          amount: {
            currency_code: "USD",
            value: "99.00",
          },
        },
      ],
      application_context: {
        brand_name: "PE-DESIGN Store",
        user_action: "PAY_NOW",
        shipping_preference: "NO_SHIPPING",
        return_url: args.returnUrl,
        cancel_url: args.cancelUrl,
      },
    }),
    cache: "no-store",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      `PayPal create order failed: ${response.status} ${JSON.stringify(data)}`,
    );
  }

  const approveUrl = (data.links as Array<{ rel: string; href: string }> | undefined)
    ?.find((link) => link.rel === "approve")
    ?.href;

  if (!data.id || !approveUrl) {
    throw new Error("PayPal did not return a valid order approval URL.");
  }

  return {
    paypalOrderId: data.id as string,
    approveUrl,
  };
}

export async function capturePayPalOrder(paypalOrderId: string) {
  const accessToken = await getAccessToken();

  const response = await fetch(
    `${PAYPAL_API_BASE}/v2/checkout/orders/${encodeURIComponent(paypalOrderId)}/capture`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        "PayPal-Request-Id": `pe-design-capture-${paypalOrderId}`,
      },
      body: "{}",
      cache: "no-store",
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      `PayPal capture failed: ${response.status} ${JSON.stringify(data)}`,
    );
  }

  return data as {
    id: string;
    status: string;
    purchase_units?: Array<{
      reference_id?: string;
      custom_id?: string;
      payments?: {
        captures?: Array<{
          id?: string;
          status?: string;
          amount?: {
            currency_code?: string;
            value?: string;
          };
        }>;
      };
    }>;
  };
}
