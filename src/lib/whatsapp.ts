export const WHATSAPP_PHONE = "918076754604";
export const DISPLAY_PHONE = "+91 80 76754604";
export const TEL_LINK = "tel:+918076754604";
export const EMAIL_ADDRESS = "aardhyagreennursery@gmail.com";
export const NURSERY_ADDRESS =
  "Atul Marg, Near Ace Spuire ke Samne, Amrapali Leisure Valley, Noida, Greater Noida, Uttar Pradesh 201301";
export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  NURSERY_ADDRESS
)}`;

/**
 * Generates direct WhatsApp ordering URL with customized plant message
 * Requirement 7:
 * "Hi Aardhya Green Nursery, I am interested in [Product Name]. Please share the price and availability."
 */
export function getWhatsAppOrderUrl(productName: string): string {
  const msg = `Hi Aardhya Green Nursery, I am interested in ${productName}. Please share the price and availability.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
}

/**
 * General WhatsApp inquiry URL
 * Requirement 12:
 * Pre-filled message: "Hi Aardhya Green Nursery, I want to know about your plants and home delivery options."
 */
export function getWhatsAppGeneralUrl(customMsg?: string): string {
  const defaultMsg =
    "Hi Aardhya Green Nursery, I want to know about your plants and home delivery options.";
  const msg = customMsg || defaultMsg;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
}
