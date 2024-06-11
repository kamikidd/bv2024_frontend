import { useFetchMedia } from "../../utils/useFetchMedia";
import styles from "./servicepiccomp.module.css";
const ServicePicComp = ({ imgid, picName }) => {
  const media = useFetchMedia(imgid, "imgs/category/forschung.png");

  return (
    <div className={`${styles.pic_container}`}>
      <div className={`${styles.service_pic}`}>
        <img src={media} alt={picName} width="100%" />
        <div className={`${styles.service_pic_caption}`}>
          <div>{picName}</div>
        </div>
      </div>
    </div>
  );
};

export default ServicePicComp;
