import axios from "axios";

const API = {
  url: "https://api.ciaathletica.com.br/",
  version: "v2",
  timeout: 5000
};

export const fetchUnidades = async ({
  parApiVersion = null,
  parCodUnid = null,
  parSortByKey = null,
} = {}) => {
  const urlApiVersion = parApiVersion ? parApiVersion : API.version;
  const urlUnidades = parCodUnid
    ? `${urlApiVersion}/unidades/${parCodUnid}`
    : `${urlApiVersion}/unidades`;


  const response = await axios({
    //https://github.com/axios/axios

    // `method` is the request method to be used when making the request
    method: "get",

    baseURL: API.url,

    // `url` is the server URL that will be used for the request
    url: urlUnidades,

    // `timeout` specifies the number of milliseconds before the request times out.
    // If the request takes longer than `timeout`, the request will be aborted.
    timeout: API.timeout,

    // `params` are the URL parameters to be sent with the request
    // Must be a plain object or a URLSearchParams object
    //params: {    ID: 12345  },

    // `data` is the data to be sent as the request body
    // Only applicable for request methods 'PUT', 'POST', 'DELETE , and 'PATCH'
    // When no `transformRequest` is set, must be of one of the following types:
    // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
    // - Browser only: FormData, File, Blob
    // - Node only: Stream, Buffer
    //data: {    firstName: 'Fred'  },
    // syntax alternative to send data into the body
    // method post
    // only the value is sent, not the key
    //data: 'Country=Brasil&City=Belo Horizonte',

    // `headers` are custom headers to be sent
    //headers: { 'cache-control': 'no-cache' },

    // `responseEncoding` indicates encoding to use for decoding responses (Node.js only)
    // Note: Ignored for `responseType` of 'stream' or client-side requests
    responseEncoding: "utf8", // default

    // `validateStatus` defines whether to resolve or reject the promise for a given
    // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
    // or `undefined`), the promise will be resolved; otherwise, the promise will be
    // rejected.
    validateStatus: function (status) {
      return status >= 200 && status < 300; // default
    },

    // `maxRedirects` defines the maximum number of redirects to follow in node.js.
    // If set to 0, no redirects will be followed.
    maxRedirects: 5, // default

    // `cancelToken` specifies a cancel token that can be used to cancel the request
    // (see Cancellation section below for details)
    //cancelToken: new CancelToken(function (cancel) {}),
    //cancelToken: fetchUnidades_cancelToken.token, //Pass the cancel token to the current request
  }).catch((error) => {
    // Error
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
    throw Error("Erro na obtenção dos dados das Unidades");
  });
  /*
      {
        // `data` is the response that was provided by the server
        data: {},

        // `status` is the HTTP status code from the server response
        status: 200,

        // `statusText` is the HTTP status message from the server response
        statusText: 'OK',

        // `headers` the HTTP headers that the server responded with
        // All header names are lower cased and can be accessed using the bracket notation.
        // Example: `response.headers['content-type']`
        headers: {},

        // `config` is the config that was provided to `axios` for the request
        config: {},

        // `request` is the request that generated this response
        // It is the last ClientRequest instance in node.js (in redirects)
        // and an XMLHttpRequest instance in the browser
        request: {}
      }
    */

  const {
    data: {
      response: {
        message: { unidades },
      },
    },
  } = response;

  if (parSortByKey && unidades[0][parSortByKey] !== undefined) {
    let novo = unidades.sort((a, b) => {
      if (a[parSortByKey] > b[parSortByKey]) {
        return 1;
      }
      if (a[parSortByKey] < b[parSortByKey]) {
        return -1;
      }
      return 0;
    });
    //        console.log("Sort: " + novo);
    return novo;
  }

  //      console.log("unSort: " + unidades);
  return unidades;
};
