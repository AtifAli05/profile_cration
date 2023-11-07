function LoginAction(payload) {
    return {
      type: "Login",
      payload: payload,
    };
  }
  
  function onLoginnSystem(payload) {
    return {
      type: "AuthorizationINfo",
      payload: payload,
    };
  }

  export {
    onLoginnSystem
  }