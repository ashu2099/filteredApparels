import "./CardThumbnail.css";

export default function CardThumbnail(props) {
  return (
    <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="card p-0 h-100 shadow-sm">
        <img src={props.cardDetails.searchImage} className="card-img-top" alt={props.cardDetails.additionalInfo}/>
        <div className="card-body border-top">
          <h5 className="card-title">{props.cardDetails.brand}</h5>
          <p className="card-text">{props.cardDetails.productName}</p>
        </div>
      </div>
    </div>
  );
}
