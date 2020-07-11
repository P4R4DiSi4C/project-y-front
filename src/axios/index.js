import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:80',
});

export const handleError = (error) => {
  // Error 😨
  if (error.response) {
    /*
     * The request was made and the server responded with a
     * status code that falls out of the range of 2xx
     */
    //console.log(error.response.data);
    //console.log(error.response.headers);
    //console.log(error.response.status);
    let error_display = '';
    switch (error.response.status) {
      case 400: {
        error_display = '400 Bad Request';
        break;
      }

      case 401: {
        //Unauthorized, logout dispatch
        error_display = '401 Unauthorized';
        break;
      }

      case 404: {
        error_display = '404 Not Found';
        break;
      }

      default: {
        error_display = error.response.status;
        break;
      }
    }
    return Promise.reject(error_display);
  } else if (error.request) {
    /*
     * The request was made but no response was received, `error.request`
     * is an instance of XMLHttpRequest in the browser and an instance
     * of http.ClientRequest in Node.js
     */
    //console.log(error.request);
    return Promise.reject(error);
  } else {
    // Something happened in setting up the request and triggered an Error
    //console.log('Error', error.message);
    return Promise.reject(error);
  }
};

export const handleError2 = (err) => {
  let error = '';

  switch (err) {
    case 400: {
      error = '400 Bad Request';
      break;
    }

    case 401: {
      //Unauthorized, logout dispatch
      error = '401 Unauthorized';
      break;
    }

    case 404: {
      error = '404 Not Found';
      break;
    }

    default: {
      error = err.message;
      break;
    }
  }
  return { error, isError: true };
};

export default instance;
