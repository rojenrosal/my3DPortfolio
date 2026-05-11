export type StoreCategory =
  | "Fashion"
  | "Travel"
  | "Home"
  | "Tech"
  | "Food"
  | "Health"
  | "Kids"
  | "Sports";

export type Store = {
  slug: string;
  name: string;
  category: StoreCategory;
  cashbackRate: number;
  description: string;
  terms: string[];
  featured?: boolean;
  trending?: boolean;
  initials: string;
  accent: string;
};

export type TransactionStatus = "pending" | "confirmed" | "paid";

export type Transaction = {
  id: string;
  storeSlug: string;
  storeName: string;
  orderTotal: number;
  cashback: number;
  status: TransactionStatus;
  date: string;
};

export type Membership = {
  name: string;
  price: number;
  period: "month" | "year" | "one-off";
  perks: string[];
  highlight?: boolean;
};

export type PrizeDraw = {
  title: string;
  subtitle: string;
  value: number;
  drawDate: string;
  entriesEarned: number;
};
