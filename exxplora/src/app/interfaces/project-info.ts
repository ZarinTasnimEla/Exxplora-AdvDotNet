import { Domain } from "./domain";

export interface ProjectInfo {
    Id: number;
    Title: string;
    Description: string;
    AuthorId: number;
    Author: any;
    ProjectStatusId: number;
    ProjectStatus: any;
    CreatedDate: Date;
    StartDate?: Date;
    EndDate?: Date;
    Domains: Domain[];
    IsArchived: boolean;
  }