import axios from "axios";

const API = {
  url: "https://api.ciaathletica.com.br/",
  version: "v2",
  timeout: 8000,
  defaultErrorMessage:
    "Ops, ocorreu um erro, tente novamente mais tarde e caso não consiga, " +
    "entre em contato com a recepção de sua Unidade.",
  userAgent:
    "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.2 (KHTML, like Gecko) " +
    "Chrome/22.0.1216.0 Safari/537.2",
};

export const apiCall = async (objCall) => {
  /*   objCall {
    parMsgError = null,
    parResponse = null,
    parMethod = null,
    parUrl = null,
    parParams = null,
    parData = null,
    parApiVersion = null   
  } */

  if (
    objCall.parMsgError === undefined ||
    objCall.parResponse === undefined ||
    objCall.parUrl === undefined
  ) {
    objCall.parMsgError = {
      code: 500,
      message: API.defaultErrorMessage,
      debugmessage: "Server Error",
    };
    return false;
  }

  const axiosCall = async (objCall) => {
    let finalURL = objCall.parApiVersion ? objCall.parApiVersion : API.version;
    finalURL =
      finalURL + (objCall.parUrl.charAt(0) !== "/" ? "/" : "") + objCall.parUrl;

    return await axios({
      //https://github.com/axios/axios

      // `method` is the request method to be used when making the request
      method: objCall.parMethod ? objCall.parMethod : "GET",

      baseURL: API.url,

      // `url` is the server URL that will be used for the request
      url: finalURL,

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
      //headers: { 'Pragma': 'no-cache'},
      //headers: { "User-Agent": API.userAgent },

      // `responseEncoding` indicates encoding to use for decoding responses (Node.js only)
      // Note: Ignored for `responseType` of 'stream' or client-side requests
      responseEncoding: "utf8", // default

      // `validateStatus` defines whether to resolve or reject the promise for a given
      // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
      // or `undefined`), the promise will be resolved; otherwise, the promise will be
      // rejected.
      /*
        Respostas de informação (100-199),
        Respostas de sucesso (200-299),
        Redirecionamentos (300-399)
        Erros do cliente (400-499)
        Erros do servidor (500-599).
      */

      validateStatus: function (status) {
        //return status >= 200 && status < 300; // default
        return status >= 200 && status < 400; // default
        //return status === 200;
      },

      // `maxRedirects` defines the maximum number of redirects to follow in node.js.
      // If set to 0, no redirects will be followed.
      maxRedirects: 5, // default

      // `cancelToken` specifies a cancel token that can be used to cancel the request
      // (see Cancellation section below for details)
      //cancelToken: new CancelToken(function (cancel) {}),
      //cancelToken: fetchUnidades_cancelToken.token, //Pass the cancel token to the current request
    })
      .then((response) => {
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
            response: { code, message, debugmessage },
          },
        } = response;

        objCall.parResponse = {
          code: code,
          message: message,
          debugmessage: debugmessage,
        };

        return true;
      })
      .catch((error) => {
        // Error
        if (error.response) {
          /* console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers); */
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          if (
            error.response.code !== undefined &&
            error.response.message !== undefined &&
            error.response.debugmessage !== undefined
          ) {
            objCall.parResponse = {
              code: error.response.code,
              message: error.response.message,
              debugmessage: error.response.debugmessage,
            };
          } else {
            objCall.parResponse = {
              code: error.response.status,
              message: API.defaultErrorMessage,
              debugmessage: "Verificar erro pelo HTTP Status Code",
            };
          }
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          //console.log(error.request);
          //console.log(JSON.stringify(error));
          objCall.parResponse = {
            code: error.request.status,
            message: API.defaultErrorMessage,
            debugmessage: error.request.responseText
              ? `${error.request.responseText} [ ${error.message} ]`
              : `The request was made but no response was received, ` +
                `verify request [ ${error.message} ]`,
          };
        } else {
          // Something happened in setting up the request that triggered an Error
          //console.log("Error", error.message);
          objCall.parResponse = {
            code: 400,
            message: API.defaultErrorMessage,
            debugmessage: "Bad Request",
          };
        }

        //console.log(error.config);

        return false;
      });
  };

  return await axiosCall(objCall);
};
