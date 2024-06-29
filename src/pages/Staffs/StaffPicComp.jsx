import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../../utils/fetchData";
import Spinner from "../Others/Spinner";
import unknownstaff_pic from "../../assets/imgs/staffs/unknown.png";
import styles from "./staffpiccomp.module.css";
const StaffPicComp = ({ imgid, staffName, position }) => {
  const navigate = useNavigate();
  const media = useQuery(["staff_pic", `media`, imgid], fetchData);
  if (media.isLoading) {
    return <Spinner></Spinner>;
  }
  if (media.isError) {
    navigate("/NotMatch404");
  }
  return (
    <div className={`${styles.staff_pic_container}`}>
      <div className={`${styles.staff_pic}`}>
        <img
          className={`${styles.pic}`}
          src={media.data.source_url ?? unknownstaff_pic}
          alt={staffName}
        ></img>
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
