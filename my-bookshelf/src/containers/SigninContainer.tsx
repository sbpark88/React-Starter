import React, { useCallback } from "react";
import Signin from "../conponents/Signin";
import { LoginReqType } from "../types";
import { useDispatch } from "react-redux";
import { login as loginSagaStart } from "../redux/modules/auth";
import { AppDispatch } from "../index";
import { Action } from "redux-actions";

function SigninContainer() {
  const dispatch = useDispatch<AppDispatch>();

  const login = useCallback(
    (reqData: LoginReqType) => {
      dispatch(loginSagaStart(reqData) as Action<string>);
    },
    [dispatch],
  );

  return <Signin login={login} />;
}

export default SigninContainer;
