import React from "react";
import { RegisterForm } from "../../components/register/RegisterForm";
import { LoginLayout } from "../../components/login/LoginLayout";

export const RegisterPage = () => {
  return (
    <LoginLayout>
      <RegisterForm />
    </LoginLayout>
  );
};
