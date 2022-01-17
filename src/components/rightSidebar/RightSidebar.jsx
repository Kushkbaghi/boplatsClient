import "./rightSidebar.css";

// Right sidebar för uppcomming projects
export default function LeftSidebar() {
  return (
    <aside className="rightSidebar">
      <h2>NYPRODOKTION</h2>
      <h3>Gränden, Norra Fäladen</h3>
      <img
        src="https://images.pexels.com/photos/7599735/pexels-photo-7599735.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="hus nyckel"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quam
        pariatur quo delectus ex inventore at, fuga beatae exercitationem
        molestias vitae atque accusamus, architecto nemo quasi optio sunt enim
        autem!
      </p>
      <div className="keys">
        <h4>Nyckel ord</h4>
        <ul className="keyWord">
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
      </div>
    </aside>
  );
}
