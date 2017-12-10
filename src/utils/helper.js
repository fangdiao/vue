import qs from 'query-string';

export const request = (url, body = '', method = 'get') => {
  if (body && method === 'get') {
    url = `${url}?${qs.stringify(body)}`;
  } else {
    body = JSON.stringify(body);
  }
  let headers = { 'Content-Type': 'application/json;charset=UTF-8' };

  let params = body && method === 'post' ? {
    method,
    headers,
    body
  } : {
    method,
    headers
  };
  return new Promise((resolve, reject) => {
    fetch(url, params).then(r => r.json())
      .then(responseData => {
        resolve(responseData);
      }).catch(err => {
      console.log(err)
      reject(err);
    });
  });
};