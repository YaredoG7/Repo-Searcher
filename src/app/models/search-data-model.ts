import { D3DataModel } from './d3-data-model';

export class SearchDataModel {
  constructor(
    public fullName: string,
    public url: string,
    public description: string,
    public issuesUrl: string,
    public createdAt: Date,
    public d3: D3DataModel
  ) {}

  static adapt(item: any): SearchDataModel {
    return new SearchDataModel(
      item.full_name,
      item.url,
      item.description,
      item.issues_url,
      new Date(item.created_at),
      {
        data: [
          { name: 'forks', color: '#2A293E', value: item.forks_count },
          { name: 'issues', color: '#5A3E36', value: item.open_issues_count },
          { name: 'stargazer', color: '#1f77b4', value: item.stargazers_count },
          { name: 'watchers', color: '#2ca02c', value: item.watchers_count },
          { name: 'score', color: '#9467bd', value: item.score }
        ]
      }
    );
  }
}
