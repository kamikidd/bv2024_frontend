import { useFetchMedia } from "../../utils/useFetchMedia";
import styles from "./topictabcomp.module.css";
const TopicTabComp = ({ imgid, picName }) => {
  const media = useFetchMedia(imgid, "imgs/topics/gesundheit.png");

  return (
    <div className={`${styles.topic_pic_Container}`}>
      <div className={`${styles.topic_pic}`}>
        <img src={media} alt={picName} />
        <div className={`${styles.topic_pic_caption}`}>
          <div className={`${styles.topic_pic_text}`}>{picName}</div>
        </div>
      </div>
    </div>
  );
};

export default TopicTabComp;
