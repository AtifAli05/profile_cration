import { ApiCall } from "./ApiCall";
let localnode = process.env.REACT_APP_LOCAL_SERVER_URL;

export const onLoginSystem = (obj) => {
    const queryParam = `user/login`;
    let path = localnode + queryParam;
    return ApiCall(path, "post", obj);
  };
  export const postProfileData = (obj) => {
    const queryParam = `postDatawithImage`;
    let path = localnode + queryParam;
    return ApiCall(path, "post", obj,"",true);
  };

  export const updateUserData = (obj) => {
    const queryParam = `updateUserData`;
    let path = localnode + queryParam;
    return ApiCall(path, "post", obj,"",true);
  };
  export const getProfileData = (obj) => {
    const queryParam = `getProfileData`;
    let path = localnode + queryParam;
    return ApiCall(path, "post", obj,"",true);
  };