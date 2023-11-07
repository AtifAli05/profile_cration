import axios from "axios";

export const ApiCall = (path, method, payload,obj=false,multer=false) => {
  let headers;
  console.log(multer,"fdsfsdfsdfsdfsdfs");
  if (multer)
  {
     headers = {
      "Content-Type": "multipart/formdata",
     }

  }else{
    headers = {
      Accept:"*/*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
      "Content-Type": "application/json",
  
    };
  }
  
  
  //  let tokenObj = store && store.getState()?.LoginObject;
  // if (tokenObj && tokenObj.jwt) {
  //  console.log("token>", tokenObj.jwt)
  //  headers.Authorization = "Bearer " + tokenObj.jwt
  return new Promise((resolve, reject) => {
    axios({
      method: method,

      responseType: obj ? "blob" : "",
      url: path,
      data: payload,
      headers: headers,
    })
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// }

export const PublicApiCall = (path, method, payload) => {
  let headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
    "Content-Type": "application/json",
  };
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: path,
      data: payload,
      headers: headers,
    })
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
