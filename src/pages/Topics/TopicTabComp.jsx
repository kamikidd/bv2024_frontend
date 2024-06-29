import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../../utils/fetchData";
import Spinner from "../Others/Spinner";
import styles from "./topictabcomp.module.css";
import health_pic from "../../assets/imgs/topics/gesundheit.png";
const TopicTabComp = ({ imgid, picName }) => {
  const navigate = useNavigate();
  const media = useQuery(["topic_pic", `media`, imgid], fetchData);
  if (media.isLoading) {
    return <Spinner></Spinner>;
  }
  if (media.isError) {
    navigate("/NotMatch404");
  }
  return (
    <div className={`${styles.topic_pic_Container}`}>
      <div className={`${styles.topic_pic}`}>
        <img src={media.data.source_url ?? health_pic} alt={picName} />
        <div className={`${styles.topic_pic_caption}`}>
          <div className={`${styles.topic_pic_text}`}>{picName}</div>
        </div>
      </div>
    </div>
  );
};

export default TopicTabComp;
