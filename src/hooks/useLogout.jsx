import { useAuthContext } from "./useAuthContext";

export const useLogOut = () => {
    //------------- state -------------
  const { dispatch } = useAuthContext();

  const logOut = () => {
    // 1-remove user from local storage
    localStorage.removeItem("user");

    //2-update authContext
    //dispatch logOut function
    dispatch({ type: "LOGOUT" });
  };

  return { logOut };
};
