import {IssueListFormatter} from 'app/format/IssueListFormatter';
import {Issue} from 'app/model/Issue';
import {IssueFormatter} from 'app/format/IssueFormatter';
import {SimpleListIssueFormat} from 'app/format/list/SimpleListIssueFormat';

export class GroupByPriorityLabelIssueListFormatter extends IssueListFormatter<string> {

    private readonly priorityLabels: string[] = import.meta.env.VITE_PRIORITY_LABELS.split(',').map(it => it.trim());

    constructor(issueFormat: IssueFormatter) {
        super('Список-метки-приоритета', issueFormat)
    }

    format(issues: Issue[]): string {
        const groupFormatter = new SimpleListIssueFormat(this.itemFormatter);

        let result = '';

        for (const label of this.priorityLabels) {
            const groupIssueList = issues.filter(it => it.labels.includes(label));

            result = result + `${label}\n ${groupFormatter.format(groupIssueList)}\n\n`
        }
        return result;
    }
}