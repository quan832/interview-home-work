import React from "react";
import "./css/login.css";
import FormLogin from "../../components/Login/FormLogin/FormLogin";

export default function Login() {
  return (
    <main class="d-flex align-items-center py-3 py-md-0 col-md-12 main-login">
      <div class="container">
        <div className="card login-card ">
          <div className="row no-gutters">
            <FormLogin />
          </div>
        </div>
      </div>
    </main>
  );
}
