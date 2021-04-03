export enum AUTH {
  CLEAN_REDUCER = "CLEAN/REDUCER/START",

  LOGIN_START = "LOGIN/START",
  LOGIN_REQUEST = "LOGIN/REQUEST",
  LOGIN_SUCCESS = "LOGIN/SUCCESS",
  LOGIN_FAILURE = "LOGIN/FAILURE",

  GOOGLE_LOGIN_START = "GOOGLE/LOGIN/START",
  GOOGLE_LOGIN_REQUEST = "GOOGLE/LOGIN/REQUEST",
  GOOGLE_LOGIN_SUCCESS = "GOOGLE/LOGIN/SUCCESS",
  GOOGLE_LOGIN_FAILURE = "GOOGLE/LOGIN/FAILURE",

  FACEBOOK_LOGIN_START = "FACEBOOK/LOGIN/START",
  FACEBOOK_LOGIN_REQUEST = "FACEBOOK/LOGIN/REQUEST",
  FACEBOOK_LOGIN_SUCCESS = "FACEBOOK/LOGIN/SUCCESS",
  FACEBOOK_LOGIN_FAILURE = "FACEBOOK/LOGIN/FAILURE",

  REGISTER_START = "REGISTER/START",
  REGISTER_REQUEST = "REGISTER/REQUEST",
  REGISTER_SUCCESS = "REGISTER/SUCCESS",
  REGISTER_FAILURE = "REGISTER/FAILURE",

  ACTIVATION_START = "ACTIVATION/START",
  ACTIVATION_REQUEST = "ACTIVATION/REQUEST",
  ACTIVATION_SUCCESS = "ACTIVATION/SUCCESS",
  ACTIVATION_FAILURE = "ACTIVATION/FAILURE",

  LOGOUT_REQUEST = "LOGOUT/REQUEST",
  LOGOUT_SUCCESS = "LOGOUT/SUCCESS",
  LOGOUT_FAILURE = "LOGOUT/FAILURE",

  LOAD_USER_START = "LOAD/USER/START",
  LOAD_USER_REQUEST = "LOAD/USER/REQUEST",
  LOAD_USER_SUCCESS = "LOAD/USER/SUCCESS",
  LOAD_USER_FAILURE = "LOAD/USER/FAILURE",

  FORGOT_PASSWORD_START = "FORGOT/PASSWORD/START",
  FORGOT_PASSWORD_REQUEST = "FORGOT/PASSWORD/REQUEST",
  FORGOT_PASSWORD_SUCCESS = "FORGOT/PASSWORD/SUCCESS",
  FORGOT_PASSWORD_FAILURE = "FORGOT/PASSWORD/FAILURE",

  RESET_PASSWORD_START = "RESET/PASSWORD/START",
  RESET_PASSWORD_REQUEST = "RESET/PASSWORD/REQUEST",
  RESET_PASSWORD_SUCCESS = "RESET/PASSWORD/SUCCESS",
  RESET_PASSWORD_FAILURE = "RESET/PASSWORD/FAILURE",
}
