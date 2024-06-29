import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../../utils/fetchData";
import Spinner from "../Others/Spinner";
import styles from "./servicepiccomp.module.css";
import forschung_pic from "../../assets/imgs/category/forschung.png";

const ServicePicComp = ({ imgid, picName }) => {
  const navigate = useNavigate();
  const media = useQuery(["service_pic", `media`, imgid], fetchData);
  if (media.isLoading) {
    return <Spinner></Spinner>;
  }
  if (media.isError) {
    navigate("/NotMatch404");
  }
  return (
    <div className={`${styles.pic_container}`}>
      <div className={`${styles.service_pic}`}>
        <img
          src={media.data.source_url ?? forschung_pic}
          alt={picName}
          width="100%"
        />
        <div className={`${styles.service_pic_caption}`}>
          <div>{picName}</div>
        </div>
      </div>
    </div>
  );
};

export default ServicePicComp;
