"use strict";

const API_PATH = "https://api.dribbble.com/v1/";
const ACCESS_TOKEN = "1a3273bd8aadf946ca066da13dcf1639b8be7d1e217d773635d0df2bd3cd47b1";

function fetchData(URL) {
  return fetch(URL, {
    headers: {
      "Authorization": "Bearer " + ACCESS_TOKEN
    }
  }).then((response) => response.json())
};

function getShotsByType(type: string, pageNumber: ?number): ?Object {
  let URL = API_PATH + "shots/?list=" + type;

  if (pageNumber) {
    URL += "&per_page=5&page=" + pageNumber;
  }

  return fetchData(URL);
};

function fetchDefaultShots(pageNumber: ?number): ?Object {
  return getShotsByType('Defaule', pageNumber);
};

function fetchDebutsShots(pageNumber: ?number): ?Object {
  return getShotsByType('debuts', pageNumber);
};

function fetchTeamsShots(pageNumber: ?number): ?Object {
  return getShotsByType('teams', pageNumber);
};

function fetchGifShots(pageNumber: ?number): ?Object {
  return getShotsByType('animated', pageNumber);
};

function fetchResources(url: ?string): ?Object {
  return fetchData(url);
};

export {
  fetchDefaultShots,
  fetchDebutsShots,
  fetchTeamsShots,
  fetchGifShots,
  fetchResources,
};
