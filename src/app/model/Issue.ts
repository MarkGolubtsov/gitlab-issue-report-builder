
export class Issue {
    title: string;

    number: string;

    href: string;


    constructor(title: string, number: string, href: string) {
        this.href = href;
        this.title = title;
        this.number = number;
    }
}