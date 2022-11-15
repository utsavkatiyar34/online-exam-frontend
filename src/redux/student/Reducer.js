import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_STUDENT_SUCCESS, PROFILE_LOADING,
   PROFILE_SUCCESS, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS, STUDENT_LOGOUT } from "./ActionTypes";

const initialState = {
    login: {
      loading: false,
      error: false,
      student_token: null,
    },
    signup: {
      loading: false,
      error: false,
    },
    profile: {
      loading: false,
      error: false,
      data: [],
    },
  };

export const reducer = (state = initialState, action) => {
switch (action.type) {
//Staff Signup
    case SIGNUP_LOADING:
        return {
          ...state,
          signup: {
            ...state.signup,
            loading: true,
          },
    };
    case SIGNUP_SUCCESS:
        return {
          ...state,
          signup: {
            ...state.signup,
            loading: false,
            error: false,
        },
    };
    case SIGNUP_ERROR:
        return {
          ...state,
          signup: {
            ...state.signup,
            loading: false,
            error: true,
          },
    };

    //Staff Login
    case LOGIN_LOADING:
        return {
          ...state,
          login: {
            ...state.login,
            loading: true,
          },
    };

    case LOGIN_STUDENT_SUCCESS:
        return {
          ...state,
          login: {
            ...state.login,
            loading: false,
            error: false,
            student_token: action.payload,
          },
    };

    case LOGIN_ERROR:
    return{
        ...state,
        login: { 
         ...state.login,
         loading:false,
         error:true,
        },
    };   
    
    //Profile Loading
    case PROFILE_LOADING:
        return {
          ...state,
          profile: {
            ...state.profile,
            loading: true,
          },
    };

    case PROFILE_SUCCESS:
        return {
          ...state,
          profile: {
            ...state.profile,
            loading: false,
            error: false,
            data: action.payload.data,
          },
    };

    case LOGIN_ERROR:
        return{
            ...state,
            profile: { 
             ...state.profile,
             loading:false,
             error:true,
            },
    }; 

    case STUDENT_LOGOUT:
      return{
        ...state,
        login: {
          ...state.login,
          student_token:null,
        },
      };
      
    default:
        return { ...state };
    }
};