<!-- Axios -->
1. Axios has url in request object.
2. Axios is a stand-alone third party package that can be easily installed.
3. Axios enjoys built-in XSRF protection.
4. Axios uses the data property.
5. Axios data contains the object.
6. Axios request is ok when status is 200 and statusText is ‘OK’.
7. Axios performs automatic transforms of JSON data.
8. Axios allows cancelling request and request timeout.
9. Axios has the ability to intercept HTTP requests.
10. Axios has built-in support for download progress.
11. Axios has wide browser support.
12. Axios “GET” call ignores data content

<!-- Fetch -->
1. Fetch has no url in request object.
2. Fetch is built into most modern browsers; no installation is required as such.
3. Fetch does not.
4. Fetch uses the body property.
5. Fetch’s body has to be stringified.
6. Fetch request is ok when response object contains the ok property.
7. Fetch is a two-step process when handling JSON data- first, to make the actual request; second, to call the .json() method on the response.
8. Fetch does not.
9. Fetch, by default, doesn’t provide a way to intercept requests.
10. Fetch does not support upload progress.
11. Fetch only supports Chrome 42+, Firefox 39+, Edge 14+, and Safari 10.1+ (This is known as Backward Compatibility).
12. Fetch “GET” call can have body content

<!-- LINK -->
https://www.geeksforgeeks.org/difference-between-fetch-and-axios-js-for-making-http-requests/