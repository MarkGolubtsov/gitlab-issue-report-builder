import {Issue} from "app/model/Issue";

export default interface IssueFormatter {
    format(issue: Issue): string
}