import { useFetchMedia } from "../../utils/useFetchMedia";
import styles from "./servicepiccomp.module.css";
import forschung_pic from "../../assets/imgs/category/forschung.png";
const ServicePicComp = ({ imgid, picName }) => {
  let media = useFetchMedia(imgid, forschung_pic);
  return (
    <div className={`${styles.pic_container}`}>
      <div className={`${styles.service_pic}`}>
        <img src={media ?? forschung_pic} alt={picName} width="100%" />
        <div className={`${styles.service_pic_caption}`}>
          <div>{picName}</div>
        </div>
      </div>
    </div>
  );
};

export default ServicePicComp;
