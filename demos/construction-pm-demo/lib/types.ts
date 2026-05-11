export type ProjectStatus = "planning" | "in-progress" | "on-hold" | "complete";
export type Discipline = "Civil" | "Rail" | "Buildings" | "Energy" | "Water" | "Tunnelling";

export type Project = {
  id: string;
  name: string;
  client: string;
  location: string;
  discipline: Discipline;
  status: ProjectStatus;
  progress: number;
  startDate: string;
  endDate: string;
  crew: number;
  contractValue: number;
};

export type TaskStatus = "planned" | "in-progress" | "complete" | "delayed";

export type Task = {
  id: string;
  projectId: string;
  title: string;
  zone: string;
  owner: string;
  crew: string;
  start: string;
  end: string;
  status: TaskStatus;
  blocked?: boolean;
  notes?: string;
};

export type DiaryEntry = {
  id: string;
  projectId: string;
  projectName: string;
  date: string;
  author: string;
  weather: string;
  shift: "Day" | "Night" | "Weekend";
  hoursWorked: number;
  crewOnSite: number;
  plantOnSite: number;
  summary: string;
  flags: string[];
};

export type Resource = {
  id: string;
  type: "labour" | "plant" | "material";
  name: string;
  utilisation: number;
  status: "allocated" | "idle" | "maintenance";
};
