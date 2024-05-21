const ServicePicComp = ({ images, picName }) => {
  let servicePic = "imgs/category/forschung.png";
  if (images) {
    servicePic = images;
  }

  return (
    <div className="picContainer">
      <div className="service_pic">
        <img src={servicePic} alt={picName} />
        <div className="service_pic_caption">
          <div className="service_pic_text">{picName}</div>
        </div>
      </div>
    </div>
  );
};

export default ServicePicComp;
