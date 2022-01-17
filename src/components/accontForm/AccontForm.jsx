import React from "./accontForm.css";

export default function AccontForm() {
  return (
    <form action="" className="accontForm" enctype="multipart/form-data">
      <div className="accontImg">
        <label htmlFor="accontAdminImg">Profilbild</label>
        <img
          className="navImg"
          src="https://randomuser.me/api/portraits/men/64.jpg"
          alt=""
        />
      </div>
      <div className="accontImgUpdate file">
        <label className="picIn updatePicBtn" htmlFor="picInAdmin">
          Ändra <i class="fas image"> </i>
        </label>
        <input
          required
          type="file"
          name="imgUpdate"
          id="picInAdmin"
          className="picInput"
          accept="image/*"
        />
      </div>
      <label htmlFor="adminNameUpdate">Användarnamn</label>
      <input
        type="text "
        required
        name="adminNameUpdate"
        id="adminNameUpdate"
        placeholder="T.e.x Johan"
      />
      <label htmlFor="adminMailUpdate">E-post</label>
      <input
        type="email"
        required
        name="adminMailUpdate"
        id="adminMailUpdate"
        placeholder="adress@gmail.com"
      />
      <label htmlFor="adminPassUpdate">Lösenord</label>
      <input
        type="password"
        required
        name="adminPassUpdate"
        id="adminPassUpdate"
        placeholder="******"
      />
      <div className="btnUp">
        <button className="submitNewItem btn bgGreen updateBtn">
          Updatera
        </button>
      </div>
    </form>
  );
}
