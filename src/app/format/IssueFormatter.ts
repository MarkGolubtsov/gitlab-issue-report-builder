import {Issue} from "app/model/Issue";

export default interface IssueFormatter {
    name: string;

    format(issue: Issue): string
}