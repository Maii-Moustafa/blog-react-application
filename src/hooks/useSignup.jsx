import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const useSignUp = () => {
    //------------- state -------------
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  
 //------------- handlers -------------
  const signUp = async (user) => {
    setIsLoading(true);
    setError(null);

    await axios
      .post("http://localhost:3000" + "/signup", {
        firstname: user.firstName,
        lastName: user.lastName,
        age: user.age,
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        console.log(res);

        //save the user to local storage
        localStorage.setItem("user", JSON.stringify(res.data));

        //update authContext
        dispatch({ type: "LOGIN", payload: res.data.user });

        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
        console.log(err.message);
      });
  };

  return { signUp, isLoading, error };
};
