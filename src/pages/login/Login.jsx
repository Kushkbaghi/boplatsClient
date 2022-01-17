import "./login.css";
import LoginForm from "../../components/loginForm/LoginForm";
import Header from "../../components/header/Header";

// Handel admins info
export default function Login() {
  return (
    <>
      <Header />
      <h1 className="formTitle">Logga in</h1>
      <main className="main">
        <LoginForm />

      </main>
    </>
  );
}
