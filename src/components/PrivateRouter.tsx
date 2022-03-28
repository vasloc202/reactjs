import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticate } from "../utils/localStorage";

type PrivateRouterProps = {
  children: JSX.Element;
};

const PrivateRouter = (props: PrivateRouterProps) => {
  const {
    user: {role}
  } = isAuthenticate();
  if (!role) {
    return <Navigate to="/" />;
  } 
  return props.children;
};

export default PrivateRouter;
