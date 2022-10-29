import FormLogin from "components/forms/formLogin/FormLogin";
import ContentWrapper from "components/globalComponents/contentWrapper/ContentWrapper";
import React, { FC } from "react";

const LoginPage: FC = () => {
  return (
    <ContentWrapper>
      <FormLogin />
    </ContentWrapper>
  );
};

export default LoginPage;
