const GIT_LAB_ISSUE_CLASS_NAME = 'issue';
const GIT_LAB_ISSUE_TITLE_CLASS_NAME = 'issue-title-text';
const GIT_LAB_ISSUE_NUMBER = 'issuable-reference';

class Issue {
    title

    number

    href

    constructor(title, number, href) {
        this.title = title;
        this.number = number;
        this.href = href;
    }
}

function getIssues() {
    const issuesElements = Array.from(document.getElementsByClassName(GIT_LAB_ISSUE_CLASS_NAME));

    return issuesElements.map((issue) => {
        const title = issue.getElementsByClassName(GIT_LAB_ISSUE_TITLE_CLASS_NAME)[0].textContent.trim();
        const href = issue.getElementsByClassName(GIT_LAB_ISSUE_TITLE_CLASS_NAME)[0].href;
        const number = issue.getElementsByClassName(GIT_LAB_ISSUE_NUMBER)[0].textContent.trim();
        return new Issue(title, number, href);
    });
}

function getFormattedTextFromIssues(issues) {
    return issues.reduce((acc, issue) => {
        return acc + `${issue.number} ${issue.title} \n`;
    }, '')
}

function copyText(text) {
    return navigator.clipboard.writeText(text)
        .then(() => console.log('Text copied to clipboard'))
        .catch(err => console.error('Error in copying text: ', err))
}

function createButtonOnCopy() {
    const button = document.createElement('button');
    button.textContent = 'Скопировать отчет';

    button.onclick = () => {
        copyText(getFormattedTextFromIssues(getIssues()));
    }

    return button;
}

setTimeout(() => {
    document.body.append(createButtonOnCopy())
}, 1000)
