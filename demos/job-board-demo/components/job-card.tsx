import Link from "next/link";
import { Briefcase, Clock, MapPin } from "lucide-react";
import type { Job } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { CompanyLogo } from "@/components/company-logo";
import { formatSalary, timeAgo } from "@/lib/utils";

export function JobCard({ job }: { job: Job }) {
  return (
    <Link
      href={`/jobs/${job.slug}`}
      className="group flex flex-col rounded-xl border border-border bg-card/80 p-5 transition hover:border-primary/40 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="flex items-start gap-3">
        <CompanyLogo initials={job.companyInitials} accent={job.companyAccent} />
        <div className="flex-1">
          <h3 className="text-base font-semibold leading-tight">{job.title}</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">{job.company}</p>
        </div>
        <Badge variant="outline">{job.seniority}</Badge>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <MapPin className="h-3 w-3" /> {job.location}
        </span>
        <span className="inline-flex items-center gap-1">
          <Briefcase className="h-3 w-3" /> {job.employment}
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3 w-3" /> {timeAgo(job.postedAt)}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs">
        <Badge variant="default">{job.workstyle}</Badge>
        <span className="font-medium">{formatSalary(job.salaryMin, job.salaryMax)}</span>
      </div>
    </Link>
  );
}
