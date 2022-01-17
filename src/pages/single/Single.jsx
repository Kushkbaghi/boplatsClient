import "./single.css";
import Header from "../../components/header/Header";

import RightSidebar from "../../components/rightSidebar/RightSidebar";
import SingleItem from "../../components/singleItem/SingleItem";

// A single page which includes a item and sidebar
export default function Single() {
  return (
    <>
      <Header />
      <section className="singleItem main">
        <RightSidebar />
        <SingleItem />
      </section>
    </>
  );
}
