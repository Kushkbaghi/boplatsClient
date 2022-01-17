import "./create.css";
import Form from "../../components/form/Form";
import NavbarDesktop from "../../components/navbarDesktop/NavbarDesktop";

// Page for admin to create new item
export default function Create() {
  return (
    <>
      <NavbarDesktop />
      <h1 className="formTitle">Skapa ny </h1>
      <main className="main">
         
        <Form />
      </main>
    </>
  );
}
