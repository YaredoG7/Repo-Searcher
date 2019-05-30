export class IssuesModel {

    constructor(
     public title: string,
     public body: string,
     public state: string,
     public url: string,
    ) {}

    static adapt(item: any): IssuesModel{
        return new IssuesModel(
            item.title,
            item.body,
            item.state,
            item.html_url,
        )
    }
}