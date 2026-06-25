import type { PlanId } from "@/lib/filing/types";

export type { PlanId };

export interface Plan {
  id: PlanId;
  name: string;
  price: number;
  priceLabel: string;
  description: string;
  features: string[];
  recommended?: boolean;
  comingSoon?: boolean;
  comingSoonFeatures?: string[];
}

export const PLANS: Record<PlanId, Plan> = {
  free: {
    id: "free",
    name: "Basic",
    price: 0,
    priceLabel: "₹0",
    description: "Perfect for individuals with simple salary structures.",
    features: [
      "Tax estimate",
      "ITR form recommendation",
      "Filing checklist",
    ],
  },
  diy: {
    id: "diy",
    name: "Professional",
    price: 499,
    priceLabel: "₹499",
    description: "Advanced optimization and mismatch checks for salaried and professionals.",
    recommended: true,
    features: [
      "Form 16 import & AIS fetch",
      "Old vs new regime comparison",
      "Lawful deduction suggestions",
      "Gov portal companion guide",
    ],
  },
  // We keep ai_smart and ca definitions for type safety if they are used elsewhere,
  // but we remove them from PLAN_LIST so they don't show on UI.
  ai_smart: {
    id: "ai_smart",
    name: "AI Smart",
    price: 349,
    priceLabel: "₹349",
    description: "Mismatch engine and regime optimizer",
    features: [],
  },
  ca: {
    id: "ca",
    name: "CA Review",
    price: 2499,
    priceLabel: "₹2,499",
    description: "Optional CA review",
    features: [],
  },
};

export const PLAN_LIST: Plan[] = [
  PLANS.free,
  PLANS.diy,
];

export function getPlan(id: PlanId): Plan {
  return PLANS[id];
}
