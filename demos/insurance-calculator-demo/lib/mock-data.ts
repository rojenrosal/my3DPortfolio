import type { Payment, Policy, Product, QuoteInputs } from "./types";

export const products: Product[] = [
  {
    slug: "life-cover",
    name: "Life Cover",
    tagline: "Cover for your family if the worst happens.",
    description:
      "Pays a lump sum to your nominated beneficiaries if you pass away or are diagnosed with a terminal illness.",
    features: [
      "Lump sum up to $2,000,000",
      "Worldwide cover, 24/7",
      "Terminal illness benefit included",
      "Cover from age 18 to 70",
    ],
    starting: 14.5,
    payoutCap: 2_000_000,
    termOptions: ["Stepped", "Level"],
  },
  {
    slug: "tpd",
    name: "Total &amp; Permanent Disability",
    tagline: "Support if you can't work again.",
    description:
      "Pays a lump sum if illness or injury permanently stops you from working in your usual occupation.",
    features: [
      "Lump sum up to $1,500,000",
      "Own occupation definition available",
      "Combine with Life Cover for discount",
      "Cover from age 18 to 65",
    ],
    starting: 11.2,
    payoutCap: 1_500_000,
    termOptions: ["Stepped"],
  },
  {
    slug: "income-protection",
    name: "Income Protection",
    tagline: "Replace your income while you recover.",
    description:
      "Pays a monthly benefit of up to 70% of your income if illness or injury keeps you off work.",
    features: [
      "Up to 70% of pre-tax income",
      "Benefit periods 2 years to age 65",
      "30 to 90 day waiting periods",
      "Indexed benefit available",
    ],
    starting: 28.4,
    payoutCap: 25000,
    termOptions: ["Indemnity", "Agreed value"],
  },
  {
    slug: "trauma",
    name: "Trauma Cover",
    tagline: "Lump sum for serious medical events.",
    description:
      "Pays a lump sum on diagnosis of major conditions like heart attack, stroke, or cancer.",
    features: [
      "Covers 40+ conditions",
      "Lump sum up to $1,000,000",
      "Partial benefits on early-stage conditions",
      "Pairs well with Life Cover",
    ],
    starting: 22.9,
    payoutCap: 1_000_000,
    termOptions: ["Stepped", "Level"],
  },
  {
    slug: "funeral",
    name: "Funeral Insurance",
    tagline: "Cover end-of-life expenses for your family.",
    description:
      "Provides a lump sum of up to $30,000 to cover funeral and immediate expenses.",
    features: [
      "Lump sum up to $30,000",
      "Acceptance guaranteed for eligible ages",
      "No medical exams",
      "Quick claim turnaround",
    ],
    starting: 6.4,
    payoutCap: 30_000,
    termOptions: ["Level"],
  },
];

export const policies: Policy[] = [
  {
    id: "p-1001",
    productSlug: "life-cover",
    productName: "Life Cover",
    sumInsured: 750_000,
    premium: 62.4,
    frequency: "monthly",
    nextPaymentDate: "2026-05-18",
    status: "active",
  },
  {
    id: "p-1002",
    productSlug: "income-protection",
    productName: "Income Protection",
    sumInsured: 6500,
    premium: 49.8,
    frequency: "fortnightly",
    nextPaymentDate: "2026-05-15",
    status: "active",
  },
  {
    id: "p-1003",
    productSlug: "trauma",
    productName: "Trauma Cover",
    sumInsured: 250_000,
    premium: 38.5,
    frequency: "monthly",
    nextPaymentDate: "2026-05-22",
    status: "pending",
  },
];

export const recentPayments: Payment[] = [
  {
    id: "pay-501",
    policyId: "p-1001",
    date: "2026-04-18",
    amount: 62.4,
    method: "Direct debit",
    status: "Paid",
  },
  {
    id: "pay-500",
    policyId: "p-1002",
    date: "2026-05-01",
    amount: 49.8,
    method: "Direct debit",
    status: "Paid",
  },
  {
    id: "pay-499",
    policyId: "p-1001",
    date: "2026-03-18",
    amount: 62.4,
    method: "Direct debit",
    status: "Paid",
  },
  {
    id: "pay-498",
    policyId: "p-1003",
    date: "2026-04-22",
    amount: 38.5,
    method: "Card",
    status: "Failed",
  },
  {
    id: "pay-497",
    policyId: "p-1002",
    date: "2026-04-17",
    amount: 49.8,
    method: "Direct debit",
    status: "Paid",
  },
];

export const memberSummary = {
  name: "Sam Ferreira",
  customerSince: "2023-08-04",
  policiesCount: 3,
  totalSumInsured: 1_006_500,
  monthlyOutgoing: 211.05,
};

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

const BASE_RATES: Record<string, number> = {
  "life-cover": 0.0008,
  "tpd": 0.001,
  "income-protection": 0.012,
  "trauma": 0.0024,
  "funeral": 0.002,
};

const OCCUPATION_FACTOR = {
  office: 1,
  manual: 1.25,
  "high-risk": 1.6,
};

const FREQUENCY_DIVISOR: Record<QuoteInputs["frequency"], number> = {
  weekly: 52,
  fortnightly: 26,
  monthly: 12,
  annually: 1,
};

export function calculatePremium(inputs: QuoteInputs) {
  const base = BASE_RATES[inputs.product] ?? 0.001;
  const ageFactor = 1 + Math.max(0, inputs.age - 30) * 0.025;
  const smokerFactor = inputs.smoker ? 1.45 : 1;
  const occFactor = OCCUPATION_FACTOR[inputs.occupation];
  const annual = inputs.sumInsured * base * ageFactor * smokerFactor * occFactor;
  const perPeriod = annual / FREQUENCY_DIVISOR[inputs.frequency];
  return {
    annual: Math.round(annual * 100) / 100,
    perPeriod: Math.round(perPeriod * 100) / 100,
  };
}
