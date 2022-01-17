import "./register.css";
import RegisterForm from "../../components/registerForm/RegisterForm";
import Header from "../../components/header/Header";


// Handel admins info
export default function Login() {
  return (
    <>
      <Header />
      <h1 className="formTitle">Registrera dig</h1>
      <main className="main">
        <RegisterForm />
      </main>
    </>
  );
}
