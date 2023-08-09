import React from "react";
import PageLayout from "../common/PageLayout";
import Form from "../components/Form/Form";

const Login = () => {
  return (
    <PageLayout>
      <h1 style={{textAlign: 'center', marginBottom: 18}}>Login</h1>
      <Form />
    </PageLayout>
  );
};

export default Login;
