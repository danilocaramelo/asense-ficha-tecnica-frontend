import api from "../../config/httpRequest";
import { setToken, setAuthotized } from "../ducks/auth";
import paths from "../../constants/paths";
import {
  setLocalStorageAuth,
  setLocalStorageToken,
} from "../../config/enviroment";

export const getToken = (credentials) => {
  return async (dispatch) => {
    api
      .post("/api/auth", credentials)
      .then(async ({ data: payload }) => {
        dispatch(setToken(payload));
        dispatch(setAuthotized(true));
        localStorage.setItem("TOKEN", payload.token);
        localStorage.setItem("AUTH", true);
      })
      .catch((err) => console.err);
  };
};

export const logout = (history) => {
  return (dispatch) => {
    setLocalStorageAuth(false);
    setLocalStorageToken(null);
    dispatch(setAuthotized(false));
    dispatch(setToken(""));
    history.replace(paths.INITIAL_PAGE);
  };
};
