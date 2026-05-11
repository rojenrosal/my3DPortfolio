export type EmploymentType = "Full-time" | "Part-time" | "Contract" | "Internship";
export type Workstyle = "Remote" | "Hybrid" | "On-site";
export type Seniority = "Junior" | "Mid" | "Senior" | "Lead" | "Principal";

export type Job = {
  slug: string;
  title: string;
  company: string;
  companyInitials: string;
  companyAccent: string;
  location: string;
  workstyle: Workstyle;
  employment: EmploymentType;
  seniority: Seniority;
  salaryMin: number;
  salaryMax: number;
  postedAt: string;
  applicants: number;
  description: string;
  responsibilities: string[];
  requirements: string[];
  perks: string[];
  category: "Engineering" | "Design" | "Product" | "Data" | "Marketing" | "Ops";
};

export type Application = {
  id: string;
  jobSlug: string;
  jobTitle: string;
  company: string;
  candidate: string;
  email: string;
  appliedAt: string;
  status: "new" | "reviewing" | "interview" | "offer" | "rejected";
};
