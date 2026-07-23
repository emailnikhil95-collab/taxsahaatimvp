import type { PlanId } from "@/lib/filing/types";

export type { PlanId };

export interface Plan {
  id: PlanId;
  name: string;
  price: number;
  originalPrice?: number;
  priceLabel: string;
  description: string;
  features: string[];
  recommended?: boolean;
  comingSoon?: boolean;
  comingSoonFeatures?: string[];
  buttonText?: string;
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
  normal: {
    id: "normal",
    name: "Price 1",
    price: 339,
    originalPrice: 999,
    priceLabel: "₹339",
    description: "For simple salaried users who want AI-guided filing checks.",
    recommended: false,
    buttonText: "Buy 1",
    features: [
      "Upload Form 16",
      "Regime comparison",
      "Mismatch check",
      "Capital Gain / F&O Calculation",
    ],
  },
  pro: {
    id: "pro",
    name: "Price 2",
    price: 339,
    originalPrice: 1999,
    priceLabel: "₹339",
    description: "For users who want deeper AI checks, mismatch review, capital gains alerts, and priority companion guidance.",
    recommended: true,
    buttonText: "Buy 2",
    features: [
      "Your person CA (AI Assisted Model)",
      "Pro - level mismatch checkers",
      "Capital Gain / Futures & Options",
      "Regime comparison",
      "Item 3",
      "Dedicated Support",
      "Item 5",
    ],
  },
  b2b_20: {
    id: "b2b_20",
    name: "20 Applications",
    price: 4999,
    originalPrice: 7180,
    priceLabel: "₹4,999",
    description: "For CAs & HRs. 20 filing credits.",
    features: ["Assign filings to clients", "Credit wallet", "Bulk dashboard"],
  },
  b2b_40: {
    id: "b2b_40",
    name: "40 Applications",
    price: 8999,
    originalPrice: 14360,
    priceLabel: "₹8,999",
    description: "For CAs & HRs. 40 filing credits.",
    features: ["Assign filings to clients", "Credit wallet", "Bulk dashboard"],
  },
  b2b_100: {
    id: "b2b_100",
    name: "100 Applications",
    price: 16999,
    originalPrice: 35900,
    priceLabel: "₹16,999",
    description: "For CAs & HRs. 100 filing credits.",
    features: ["Assign filings to clients", "Credit wallet", "Bulk dashboard"],
  },
  diy: {
    id: "diy",
    name: "Professional (Legacy)",
    price: 499,
    priceLabel: "₹499",
    description: "Legacy plan.",
    features: [],
  },
  ai_smart: {
    id: "ai_smart",
    name: "AI Smart (Legacy)",
    price: 349,
    priceLabel: "₹349",
    description: "Legacy plan.",
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
  PLANS.normal,
  PLANS.pro,
];

export function getPlan(id: PlanId): Plan {
  return PLANS[id];
}
