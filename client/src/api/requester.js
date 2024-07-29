async function requester(method, url, data) {
    const options = {};

    if(method !== 'Get') {
        options.method = method;
    }

    if(data) {
        options.headers = {
            'Content-Type': 'application/json'
        }

        options.body = JSON.stringify(data);
    }

   
      const response = await fetch(url, options);
      const result = await response.json();

      if(!response.ok) {
        console.log(result);
        throw result;
      }
      return result;
  

    
}

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');

export default {
    get,
    post,
    put,
    del
};