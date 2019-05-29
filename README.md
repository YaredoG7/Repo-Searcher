# Angular Git-Hub repo name searcher

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

Angualr CLI has been generated with the latest version of Node (v10.15.3)

## Usage

- Clone this repository to your machine 
```node
npm install
```
- ng serve --open

## What is included

I have used [GitHub API](https://api.github.com/) to search for repositories by name and display the relevant iformation with in the search page. 
- The search can be done dynamically on every keystroke, but due to [Rate Limiting](https://developer.github.com/v3/#rate-limiting) I have used a delay to before calling endpoints

- If a repo is selected **checkbox** then you are able to view the other pages of the application

- The Diagram page plots a D3 diagram for displaying Forks, Score, Star-gazers and some other fileds

- The issues page displays a table of available issues for the selected repo and a link to vist the git-hub page

## Test

I have created unit tests via [Karma](https://karma-runner.github.io) for two relevant components, **The API service** and the **Search Component** my intention here is to show how unit-tesing in angular goes. 

### Other info

For interfacing the api with the app I have used [Adapter pattern](https://en.wikipedia.org/wiki/Adapter_pattern) of **GoF** with static method inside the model class.

