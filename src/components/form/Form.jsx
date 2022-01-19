import "./form.css";
import { useEffect, useState, useContext } from "react";
import { AdminContext } from "../../Context/LoginContext";
import axios from "axios";

const baseUrl = "https://boplats.herokuapp.com/";
const clientUrl = "https://musing-bhaskara-fac73f.netlify.app/";

// Form for input about every item
export default function Form() {
  // Include Context states
  const { admin } = useContext(AdminContext);
  // Create useState för the items
  const [adminName, setAdmin] = useState("");
  const [address, setAddress] = useState("");
  const [town, setTown] = useState("");
  const [rent, setRent] = useState("");
  const [floor, setFloor] = useState("");
  const [room, setRoom] = useState("");
  const [area, setArea] = useState("");
  const [info, setInfo] = useState("");
  const [file, setfile] = useState(null);
  const [lastDay, setLastDay] = useState("");
  const [moveDate, setMoveDate] = useState("");

  const createNewItem = async (e) => {
    e.preventDefault();
    const setNewItem = {
      admin: admin.name,
      address,
      town,
      rent,
      floor,
      room,
      area,
      info,
      lastDay,
      file,
      moveDate,
      
    };
    // If there is any file/image
    if (file) {
      // Create new formdata object
      const data = new FormData();
      //Make it possible to upload same file with unique name
      const filename =   Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      setNewItem.image = filename;

      try {
        // Upload the file
        await axios.post(`${baseUrl}file`, data);
     
      } catch (error) {}
      try {
        // Upload new Item
        const res = await axios.post(`${baseUrl}items/`, setNewItem);
        // After uploading show the items
        window.location.replace(`/`);
        
      } catch (error) {}
    }
  
  };
  return (
    <form
      onSubmit={createNewItem}
      className="newItemForm"
      action=""
      encType="multipart/form-data"
    >
      {/* Input list  */}
      <div className="itemInputs">
      <div> 
          <label htmlFor="address ">Adress</label>
          <input onChange={(e) =>setAddress(e.target.value)} required type="text" name="address" id="address" />
          <label htmlFor="town">Stad</label>
          <input onChange={(e) =>setTown(e.target.value)}   required type="text" name="town" id="town" />
        </div>
 
        <div>
          <label htmlFor="publishDate ">Area</label>
          <input onChange={(e) =>setArea(e.target.value)} required type="number" name="publishDate" id="publishDate" />
          <label htmlFor="floor">Våning</label>
          <input onChange={(e) =>setFloor(e.target.value)}   required type="number" name="floor" id="floor" />
        </div>
        <div>
          <label htmlFor="room">Antal rum</label>
          <input onChange={(e) =>setRoom(e.target.value)}  required type="number" name="room" id="room" />
          <label htmlFor="rent">Hyra</label>
          <input onChange={(e) =>setRent(e.target.value)}  required type="number" name="rent" id="rent" />
        </div>
        <div>
          <label htmlFor="moveDate">Anmäla senast</label>
          <input onChange={(e) =>setMoveDate(e.target.value)}  required type="date" name="moveDate" id="moveDate" />
          <label htmlFor="moveDate">Tillgänglig</label>
          <input onChange={(e) =>setLastDay(e.target.value)}  required type="date" name="moveDate" id="moveDate" />
        </div>
      </div>

      {/* Textarea input */}
      <div className="textInputArea">
        <textarea
          placeholder="Information om lägenheten..."
          className="textArea"
          type="text"
          name="itemInfoInput"
          id="itemInfoInput"
          cols="30"
          rows="20"
          required
          onChange={(e) =>setInfo(e.target.value)}
        ></textarea>
      </div>

      {/* File input accept only file*/}
      <div className="picIn">
        <div className="file">
          <label htmlFor="picInItem">
            Lägg till en Bild
          </label>
          <input
            required
            type="file"
            id="picInItem"
            className="picInput"
            accept="file/*"
            onChange={(e) => setfile(e.target.files[0])}
          />
        </div>

        <button  type="submit" className="submitNewItem btn bgGreen">
          Lägg till
        </button>
      </div>
    </form>
  );
}
