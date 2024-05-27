import { useFetchMedia } from "../../utils/useFetchMedia";
const ServicePicComp = ({ imgid, picName }) => {
  const media = useFetchMedia(imgid, "imgs/category/forschung.png");

  return (
    <div className="picContainer">
      <div className="service_pic">
        <img src={media} alt={picName} />
        <div className="service_pic_caption">
          <div className="service_pic_text">{picName}</div>
        </div>
      </div>
    </div>
  );
};

export default ServicePicComp;
