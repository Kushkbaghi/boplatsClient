import "./accont.css";
import Header from "../../components/header/Header";
import AccontForm from "../../components/accontForm/AccontForm";

export default function Accont() {
  return (
    <>
      <Header />
      <h1 className="formTitle">Uppdatera ditt konto</h1>
      <main className="main accont">
        <AccontForm />
      </main>
    </>
  );
}
