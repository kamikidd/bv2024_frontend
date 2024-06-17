import { useFetchMedia } from "../../utils/useFetchMedia";
import unknownstaff_pic from "../../assets/imgs/staffs/unknown.png";
import styles from "./staffpiccomp.module.css";
const StaffPicComp = ({ imgid, staffName, position }) => {
  const media = useFetchMedia(imgid, unknownstaff_pic);

  return (
    <div className={`${styles.staff_pic_container}`}>
      <div className={`${styles.staff_pic}`}>
        <img className={`${styles.pic}`} src={media} alt={staffName}></img>
        <div className={`${styles.staff_pic_caption_1}`}>
          <div className={`${styles.staff_pic_text_1}`}>{staffName}</div>
        </div>
        <div className={`${styles.staff_pic_caption_2}`}>
          <div className={`${styles.staff_pic_text_2}`}>{position}</div>
        </div>
      </div>
    </div>
  );
};

export default StaffPicComp;
