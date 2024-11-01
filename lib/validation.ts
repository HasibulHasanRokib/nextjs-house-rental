import { z } from "zod";

export const propertyFilterSchema = z.object({
  q: z.string().optional(),
  status: z.string().optional(),
  type: z.string().optional(),
  city: z.string().optional(),
  bedrooms: z.string().optional(),
  bathrooms: z.string().optional(),
  hasWoodenCeiling: z.coerce.boolean().optional(),
  hasParking: z.coerce.boolean().optional(),
  hasCentralHeating: z.coerce.boolean().optional(),
  hasAlarm: z.coerce.boolean().optional(),
  hasSwimmingPool: z.coerce.boolean().optional(),
  hasLaundryRoom: z.coerce.boolean().optional(),
});

export type PropertyFilterValue = z.infer<typeof propertyFilterSchema>;
