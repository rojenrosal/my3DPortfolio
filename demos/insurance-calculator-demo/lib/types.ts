export type ProductSlug =
  | "life-cover"
  | "tpd"
  | "income-protection"
  | "trauma"
  | "funeral";

export type Product = {
  slug: ProductSlug;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  starting: number;
  payoutCap: number;
  termOptions: string[];
};

export type Frequency = "weekly" | "fortnightly" | "monthly" | "annually";

export type Policy = {
  id: string;
  productSlug: ProductSlug;
  productName: string;
  sumInsured: number;
  premium: number;
  frequency: Frequency;
  nextPaymentDate: string;
  status: "active" | "lapsed" | "pending";
};

export type Payment = {
  id: string;
  policyId: string;
  date: string;
  amount: number;
  method: "Card" | "Direct debit";
  status: "Paid" | "Pending" | "Failed";
};

export type QuoteInputs = {
  product: ProductSlug;
  age: number;
  gender: "male" | "female";
  smoker: boolean;
  sumInsured: number;
  occupation: "office" | "manual" | "high-risk";
  frequency: Frequency;
};
