
export class Issue {
    title: string;

    number: string;

    href: string;

    labels: string[]

    constructor(title: string, number: string, href: string, labels: string[]) {
        this.href = href;
        this.title = title;
        this.number = number;
        this.labels = labels;
    }
}