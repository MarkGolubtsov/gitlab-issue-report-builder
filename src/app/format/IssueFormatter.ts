import {Issue} from "app/model/Issue";

export interface IssueFormatter {
    name: string;

    format(issue: Issue): string
}