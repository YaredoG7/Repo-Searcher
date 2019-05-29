import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(repos: any [], searchText: string): any [] {
    if(!repos) return [];
    if(!searchText) return repos;

    searchText = searchText.toLocaleLowerCase();

    return repos.filter(repo => {
      return repo.toLocaleLowerCase().includes(searchText);
    });
  }

}
