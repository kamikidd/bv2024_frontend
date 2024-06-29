import { useFetchMedia } from "../../utils/useFetchMedia";
import styles from "./topictabcomp.module.css";
import health_pic from "../../assets/imgs/topics/gesundheit.png";
const TopicTabComp = ({ imgid, picName }) => {
  const media = useFetchMedia(imgid);

  return (
    <div className={`${styles.topic_pic_Container}`}>
      <div className={`${styles.topic_pic}`}>
        <img src={media ?? health_pic} alt={picName} />
        <div className={`${styles.topic_pic_caption}`}>
          <div className={`${styles.topic_pic_text}`}>{picName}</div>
        </div>
      </div>
    </div>
  );
};

export default TopicTabComp;
