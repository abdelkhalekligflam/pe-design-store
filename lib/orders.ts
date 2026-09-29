export type StoreLanguage = "en" | "fr";

export type OrderCustomer = {
  name: string;
  email: string;
};

export type StoreOrder = {
  id: string;
  product: "PE-DESIGN 11";
  amount: 99;
  currency: "USD";
  language: StoreLanguage;
  customer: OrderCustomer;
  status: "pending" | "paid" | "delivered";
};

export const PE_DESIGN_PRODUCT = {
  name: "PE-DESIGN 11" as const,
  amount: 99 as const,
  currency: "USD" as const,
};

export function createPendingOrder(
  customer: OrderCustomer,
  language: StoreLanguage = "en",
): StoreOrder {
  return {
    id: crypto.randomUUID(),
    product: PE_DESIGN_PRODUCT.name,
    amount: PE_DESIGN_PRODUCT.amount,
    currency: PE_DESIGN_PRODUCT.currency,
    language,
    customer,
    status: "pending",
  };
}
