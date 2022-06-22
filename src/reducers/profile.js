import { Types } from "../constants/actionTypes";

let lastId = 0;

// const initialState = {
//   firstName: "",
//   lastName: "",
//   dob: "",
//   aadharNumber: "",
//   panNumber: "",
//   userName: "",
//   password: "",
//   confirmPassword: "Home",
//   mailId: "",
//   phoneNumber: "",
//   nationality: "",
//   address1: "",
//   address2: "",
//   state: "",
//   city: "",
//   postalCode: "",
//   captcha: "",
//   agreed: false,
// };

const reducer = (state = [], action) => {
  switch (action.type) {
    // case Types.LOGIN:
    //   console.log("login", action.payload.user);
    //   return {
    //     ...state,
    //     profile: action.payload.user,
    //     formSubmitted: false,
    //   };

    case Types.ADD_USER:
      // return {
      //   ...state,
      //   profile: action.payload.user,
      //   formSubmitted: false,
      // };
      // console.log("payload: ", action.payload);
      return [
        ...state,
        {
          id: ++lastId,
          firstName: action.payload.user.firstName,
          lastName: action.payload.user.lastName,
          dob: action.payload.user.dob,
          gender: action.payload.user.gender,
          aadharNumber: action.payload.user.aadharNumber,
          panNumber: action.payload.user.panNumber,
          userName: action.payload.user.userName,
          password: action.payload.user.password,
          confirmPassword: action.payload.user.confirmPassword,
          mailId: action.payload.user.mailId,
          phoneNumber: action.payload.user.phoneNumber,
          nationality: action.payload.user.nationality,
          address1: action.payload.user.address1,
          address2: action.payload.user.address2,
          state: action.payload.user.state,
          city: action.payload.user.city,
          postalCode: action.payload.user.postalCode,
          captcha: action.payload.user.captcha,
          notes: action.payload.user.notes,
          agreed: action.payload.user.agreed,
        },
      ];

    case Types.UPDATE_USER:
      console.log("Update User State:", state);
      const updatedState = state.map((element) =>
        element.id === action.payload.user.id ? action.payload.user : element
      );
      state = updatedState;
      return state;

    case Types.LOGIN_SUCCESS:
      const loginUser = state.users.filter(
        (user) =>
          user.userName === action.payload.user.userName &&
          user.password === action.payload.user.password
      );
      if (loginUser.length > 0) {
        return true;
      } else return false;

    case "loadUsers":
      return state;
    // case Types.UPDATE_USER:
    //   return {

    //     ...state,
    //     profile: action.payload.user,
    //     formSubmitted: false,
    //   };
    // case Types.UPDATE_PROFILE_PICTURE:
    //   return {
    //     ...state,
    //     profileImage: action.payload.image,
    //   };
    // case Types.FORM_SUBMISSION_STATUS:
    //   return {
    //     ...state,
    //     formSubmitted: action.payload.status,
    //   };
    default:
      return state;
  }
};

export const loadUsers = (state) => state;

export default reducer;
