import "./loginForm.css";
import axios from "axios";
import { useRef, useContext } from "react";
import { AdminContext } from "../../Context/LoginContext";

const baseUrl = "http://localhost:3000/check/";

export default function LoginForm() {
  // Create useRef hook to get data from form
  const adminNameRef = useRef();
  const adminPassRef = useRef();
  const { dispatch, proccessStart } = useContext(AdminContext);

  const checkInput = async (e) => {
    e.preventDefault();

    // EVENT/ACTION login is started send it to reducer
    dispatch({ type: "start" });
    try {
      const res = await axios.post(`${baseUrl}login`, {
        name: adminNameRef.current.value,
        password: adminPassRef.current.value,
      });
      // EVENT/ACTION login is success send admins data as param ro reducer
      dispatch({ type: "success", payload: res.data });
      
      
    } catch (e) {
      // EVENT/ACTION login is NOT success send it to reducer
      dispatch({ type: "wrong" });
    }
  };

  return (
    <>
      <form
        className="accontForm login"
        encType="multipart/form-data"
        onSubmit={checkInput}
      >
        <label htmlFor="adminMailUpdate">Användarnamn</label>
        <input
          type="text"
          required
          name="adminMailUpdate"
          id="adminMailUpdate"
          placeholder="kontonamn"
          ref={adminNameRef}
        />
        <label htmlFor="adminPassUpdate">Lösenord</label>
        <input
          type="password"
          required
          name="adminPassUpdate"
          id="adminPassUpdate"
          minLength={4}
          placeholder="******"
          ref={adminPassRef}
        />
        <div className="btnUp">
          <button type="submit" className="submitNewItem btn bgGreen updateBtn">
            Logga in
          </button>
        </div>
      </form>
    </>
  );
}
