import { useState, useEffect } from "react";
// Imort the components
import Banner from "../../components/banner/Banner";
import Items from "../../components/items/Items";
import LeftSidebar from "../../components/rightSidebar/RightSidebar";
import Header from "../../components/header/Header";

import "./home.css";
import axios from "axios";
const baseUrl = 'http://localhost:3000/';


export default function Home() {
  // React hook useState to update the items
  const [items, setItems] = useState([]);

  // UseEffet to connect to database/server and get the items from there
  useEffect(() => {
    const getItems = async () => {
      // Get data from database by Axios
    const res = await axios.get(`${baseUrl}items`);
      setItems(res.data);
    };
    getItems();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <Banner />
        <main className="main">
          <LeftSidebar />
          <Items items={items}/>
        </main>
      </div>
    </>
  );
}
