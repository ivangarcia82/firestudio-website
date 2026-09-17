// ============================================================
// Values Ivan has to confirm before this goes to production.
//
// Everything here renders as *nothing* while it is `null` — no visible
// "[PRICE]" placeholders on the published site. Fill a value in and the
// corresponding UI appears on its own.
// ============================================================

export type PackageId = 'launch' | 'growth' | 'scale' | 'monthly';

/**
 * TODO(ivan): confirm the price of each package and of the monthly plan.
 * Write them as display strings, e.g. `{ es: '$45,000 MXN', en: '$2,500 USD' }`.
 * While null, the packages section shows "Cotiza tu proyecto" / "Get a quote".
 */
export const packagePrices: Record<PackageId, { es: string; en: string } | null> = {
  launch: null,
  growth: null,
  scale: null,
  monthly: null,
};

/**
 * TODO(ivan): confirm the service promises before publishing them.
 * - `deliveryTime`: e.g. "desde 3 semanas" / "from 3 weeks"
 * - `supportDays`: e.g. "30 días de soporte" / "30 days of support"
 * Both stay out of the page entirely until they are confirmed.
 */
export const servicePromises: {
  deliveryTime: { es: string; en: string } | null;
  supportDays: { es: string; en: string } | null;
} = {
  deliveryTime: null,
  supportDays: null,
};
