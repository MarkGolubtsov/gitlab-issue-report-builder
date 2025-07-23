import {Issue} from 'app/model/Issue';
import {IssueFormatter} from 'app/format/IssueFormatter';

/**
 * Формат уровня списка.
 */
export abstract class IssueListFormatter<T = undefined> {
    criteria: T

    name: string;

    protected itemFormatter: IssueFormatter;

    protected constructor(name: string, itemFormatter: IssueFormatter, criteria?: T) {
        this.name = name;
        this.itemFormatter = itemFormatter;
        this.criteria = criteria;
    }

    abstract format(issues: Issue[]): string;
}