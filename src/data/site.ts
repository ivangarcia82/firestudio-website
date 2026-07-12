// Central site configuration for Fire Studio.

export const site = {
  name: 'Fire Studio',
  whatsappNumber: '5219991234567',
  email: 'hola@firestudio.mx',
  instagram: 'https://instagram.com/firestudio.mx',
  tiktok: 'https://tiktok.com/@firestudio.mx',
  facebook: 'https://facebook.com/firestudio.mx',
};

/** Build a wa.me link with a prefilled message. */
export function waLink(message: string): string {
  const number = site.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const waHref = waLink('Hola, quiero contarles mi proyecto.');
export const mailHref = `mailto:${site.email}`;
