import { useState } from "react";

export const useForm = (initialValues, onLoginHandler) => {
  const [values, setValues] = useState(initialValues);

  const changeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onLogin = (e) => {
    e.preventDefault();
    onLoginHandler(values);
  };

  return {
    values,
    changeHandler,
    onLogin,
  };
};
