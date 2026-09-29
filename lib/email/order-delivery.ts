import type { StoreOrder } from "@/lib/orders";

export function getOrderDeliveryEmail(order: StoreOrder) {
  const fr = order.language === "fr";

  return {
    subject: fr
      ? `Votre commande PE-DESIGN 11 est prête — ${order.id}`
      : `Your PE-DESIGN 11 Order is Ready — ${order.id}`,
    replyToRequired: true,
    text: fr
      ? `Bonjour ${order.customer.name},

Merci pour votre commande.

Votre guide numérique PE-DESIGN 11 doit être joint à cet e-mail.

Prochaines étapes :
1. Ouvrez le guide PDF joint.
2. Téléchargez et installez PE-DESIGN 11 à partir du lien Brother Support indiqué dans le guide.
3. Trouvez votre Hardware ID.
4. Répondez directement à cet e-mail avec votre Hardware ID.
5. Votre activation sous licence vous sera envoyée par e-mail après vérification.

Commande : ${order.id}
Produit : ${order.product}
Prix : $${order.amount} ${order.currency}

Besoin d'aide ? Répondez simplement à cet e-mail.

PE-DESIGN Store

Independent software seller. Product names and trademarks belong to their respective owners.`
      : `Hi ${order.customer.name},

Thank you for your order.

Your PE-DESIGN 11 Digital Delivery & Activation Guide should be attached to this email.

Next steps:
1. Open the attached PDF guide.
2. Download and install PE-DESIGN 11 using the Brother Support link in the guide.
3. Find your Hardware ID.
4. Reply directly to this email with your Hardware ID.
5. Your licensed activation will be sent by email after verification.

Order: ${order.id}
Product: ${order.product}
Price: $${order.amount} ${order.currency}

Need help? Simply reply to this email.

PE-DESIGN Store

Independent software seller. Product names and trademarks belong to their respective owners.`,
  };
}
