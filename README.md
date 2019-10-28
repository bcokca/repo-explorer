## App is hosted on Heroku
https://netflix-repo-explorer.herokuapp.com

## Local Deployment

```
npm install
npm start
navigate to http://localhost:3000
```



Testing the app
- Type an organization name i.e netflix click on the search button or press enter
- You will be taken to Organization Page with a list of repositories
- Here you can search a repo to narrow down the options
- You can also change the sorting by choosing an option from the dropdown
- By default items are sorted by the popularity metric
- Also if you scroll down, you are able to paginate between pages
- In order to see the details of a repository simply click on the title of one item from the list
- In the repository view only Commits tab is implemented as of now
- You can use Pre/Next pagination buttons to navigate between commit pages
- Also there is a link provided on the each item which opens a blank page for the commit diff
