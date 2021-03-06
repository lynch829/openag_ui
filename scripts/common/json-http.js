import 'whatwg-fetch';
import {Effects, Task} from 'reflex';
import * as Result from '../common/result';
import {compose, constant} from '../lang/functional';

// Read a Response object to JSON.
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
const readResponseJSON = response => response.json();

export const get = url => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });
  const request = new Request(url, {
    method: 'GET',
    headers
  });
  return fetch(request).then(readResponseJSON);
}

export const post = (url, body) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });
  const request = new Request(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  });
  return fetch(request).then(readResponseJSON);
}
