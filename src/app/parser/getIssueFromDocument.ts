import {Issue} from "app/model/Issue";

const GIT_LAB_ISSUE_CLASS_NAME = 'issue';
const GIT_LAB_ISSUE_TITLE_CLASS_NAME = 'issue-title-text';
const GIT_LAB_ISSUE_NUMBER = 'issuable-reference';
const GIT_LAB_LABEL = 'gl-label-text';

export default function getIssueFromDocument(): Issue[] {
    const issuesElements = Array.from(document.getElementsByClassName(GIT_LAB_ISSUE_CLASS_NAME));

    return issuesElements.map((issue) => {
        const title = issue.getElementsByClassName(GIT_LAB_ISSUE_TITLE_CLASS_NAME)[0].textContent.trim();
        const href =  window.location.origin + issue.getElementsByClassName(GIT_LAB_ISSUE_TITLE_CLASS_NAME)[0].getAttribute('href');
        const number = issue.getElementsByClassName(GIT_LAB_ISSUE_NUMBER)[0].textContent.trim();
        const labels = Array.from(issue.getElementsByClassName(GIT_LAB_LABEL)).map(it => it.textContent.trim());

        return new Issue(title, number, href, labels);
    });
}