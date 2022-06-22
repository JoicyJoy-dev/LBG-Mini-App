import { Types } from "../constants/actionTypes";

export const ActionCreators = {
  addUser: (user) => ({ type: Types.ADD_USER, payload: { user } }),
  updateUser: (user) => ({ type: Types.UPDATE_USER, payload: { user } }),
  loginSuccess: (user) => ({ type: Types.LOGIN_SUCCESS, payload: { user } }),
  updateProfileImaga: (image) => ({
    type: Types.UPDATE_PROFILE_PICTURE,
    payload: { image },
  }),
  formSubmissionStatus: (status) => ({
    type: Types.FORM_SUBMISSION_STATUS,
    payload: { status },
  }),
  login: (user) => ({ type: Types.LOGIN, payload: { user } }),
};
