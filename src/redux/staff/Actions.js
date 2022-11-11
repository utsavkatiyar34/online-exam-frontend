import { LIST_ERROR, LIST_LOADING, LIST_SUCCESS, LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, 
  PROFILE_ERROR, PROFILE_LOADING, PROFILE_SUCCESS, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS, STAFF_LOGOUT } from "./ActionTypes";

//For Signup
export const signupLoading = () => {
    return {
      type: SIGNUP_LOADING,
    }
};

export const signupSuccess = (payload) =>{
    return {
       type: SIGNUP_SUCCESS,
       payload,
    }
};

export const signupError = () =>{
    return {
       type: SIGNUP_ERROR,
    }
};

//For login
export const loginLoading = () => {
    return {
      type: LOGIN_LOADING,
    };
  };

  export const loginSuccess = (payload) => {
    return {
      type: LOGIN_SUCCESS,
      payload
    };
  };

  export const loginError = () =>{
    return {
      type: LOGIN_ERROR,
    }
  };

  //For profile fetch
  export const profileLoading = () =>{
    return {
       type: PROFILE_LOADING,
    }
  };

  export const profileSuccess = (payload) =>{
    return {
       type: PROFILE_SUCCESS,
       payload,
    }
  };

  export const profileError = () =>{
    return {
        type: PROFILE_ERROR,
    }
  }

  //To fetch list of all students
  export const listLoading = () =>{
    return {
       type: LIST_LOADING,
    }
  };

  export const listSuccess = (payload) =>{
    return {
       type: LIST_SUCCESS,
       payload,
    }
  };

  export const listError = () =>{
    return {
        type: LIST_ERROR,
    }
  }
  export const staffLogout = () =>{
    return {
        type: STAFF_LOGOUT,
    }
  }