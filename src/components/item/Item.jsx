import { Link } from "react-router-dom";
import "./item.css";

export default function Item({ theItem }) {
  // URL from sever
  const imageUrl = "https://boplats.herokuapp.com/images/";

  console.log(imageUrl + theItem.image);
  return (
    <article key={theItem._id} className="item">
      {/* Item image */}
      <div className="itemImg">
        <img src={imageUrl + theItem.image} alt="" />
      </div>
      <div className="itemTitle">
        <h4 className="title">{theItem.address}</h4>
        <h4 className="town">{theItem.town}</h4>
      </div>
      <div className="itemInfo addDate">
        <strong className="strong">PUBLICERAD</strong>
        <p className="info">
          {new Date(theItem.createdAt).toISOString().split("T")[0]}
        </p>
      </div>
      <div className="itemInfo floor">
        <strong className="strong">VÅN</strong>
        <p className="info">{theItem.floor}</p>
      </div>
      <div className="itemInfo floor">
        <strong className="strong">HYRA</strong>
        <p className="info">{theItem.rent} kr/månader</p>
      </div>
      <div className="itemInfo room">
        <strong className="strong">RUM</strong>
        <p className="info">{theItem.room}</p>
      </div>
      <div className="itemInfo area">
        <strong className="strong">YTA</strong>
        <p className="info">{theItem.area} m²</p>
      </div>
      {/* If there is any info about last day to reg */}
      {theItem.lastDay && (
        <div className="itemInfo regDate">
          <strong className="strong">ANMÄL SENAST</strong>
          <p className="info">{theItem.lastDay}</p>
        </div>
      )}
      {/* If there is any info about movedate */}
      {theItem.moveDate && (
        <div className="itemInfo moveDate">
          <strong className="strong">TILLGÄNGLIG</strong>
          <p className="info">{theItem.moveDate}</p>
        </div>
      )}

      <Link to={`/item/${theItem._id}`} className="itemAccept bgGreen btn">
        {" "}
        LÄS mer
      </Link>
    </article>
  );
}
