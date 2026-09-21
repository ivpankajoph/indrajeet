export const WHATSAPP_PHONE = "917292009034";
export const DISPLAY_PHONE = "+91 7292009034";
export const EMAIL_ADDRESS = "patelglobalgreen9034@gmail.com";
export const NURSERY_ADDRESS =
  "Atul Marg, Near Ace Spuire ke Samne, Amrapali Leisure Valley, Noida, Greater Noida, Uttar Pradesh 201301";

/**
 * Generates direct WhatsApp ordering URL with customized plant message
 */
export function getWhatsAppOrderUrl(orderQuery: string): string {
  const msg = `Hi Patel Global Green Nursery! 🌿\nI'd like to order: *${orderQuery}*\nPlease share availability & price. 😊`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
}

/**
 * General WhatsApp inquiry URL
 */
export function getWhatsAppGeneralUrl(customMsg?: string): string {
  if (customMsg) {
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(customMsg)}`;
  }
  return `https://wa.me/${WHATSAPP_PHONE}`;
}
