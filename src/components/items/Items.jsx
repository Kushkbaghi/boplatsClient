import "./items.css";
import Item from "../item/Item";

export default function Items({ items }) {
  return (
    <section className="items itemWidth">
      <h2>LEDIGA LÄGENHETER</h2>

      {/* By a mapfunction retun an array
       which contains item component 
      and data as props */}
      {items.map((item) => (
        <Item key={item._id} theItem={item} />
      ))}
    </section>
  );
}
