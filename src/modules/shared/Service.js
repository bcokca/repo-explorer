//TODO: the base url should come from an environment configuration file
const BASE_URL = "https://api.github.com";
const PARAMS = {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
};

const Service = {
  fetchRepos: function(orgName, page) {
    const url = `${BASE_URL}/orgs/${orgName}/repos?page=${page}`;
    return fetch(url, PARAMS).then(res => res.json());
  },

  searchRepos: function({orgName, searchKeyword, page, sort}) {
    const q = searchKeyword ? `${searchKeyword}+` : ''
    const url = `${BASE_URL}/search/repositories?q=${q}org:${orgName}&sort=${sort}&order=desc&page=${page}`;
    return fetch(url, PARAMS).then(res => res.json());
  },

  fetchCommits: function({orgName, repoName, page}) {
    const url = `${BASE_URL}/repos/${orgName}/${repoName}/commits?page=${page}`;
    return fetch(url, PARAMS).then(res => res.json());
  }
};

export default Service;
