import linkedin_logo from "../../assets/imgs/logos/linkedIn_logo_s.png";
import { Link } from "react-router-dom";
import styles from "./staffs.module.css";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../../utils/fetchData";
import Spinner from "../Others/Spinner";
import { useNavigate } from "react-router-dom";

import unknownstaff_pic from "../../assets/imgs/staffs/unknown.png";
const StaffDetailCompLeft = ({ staff }) => {
  const navigate = useNavigate();
  const information = staff.acf.otherInfo.split("\r\n");
  const media = useQuery(["staff_pic", `media`, staff.acf.imgid], fetchData);
  if (media.isLoading) {
    return <Spinner></Spinner>;
  }
  if (media.isError) {
    navigate("/NotMatch404");
  }
  return (
    <div>
      <div className={`${styles.staff_left_box}`}>
        <img
          className={`${styles.staff_detail_pic}`}
          src={media.data.source_url ?? unknownstaff_pic}
          alt="staff"
        />
        <div>
          <div className={`${styles.staff_name}`}>{staff.title.rendered}</div>
          <div className={`${styles.staff_info}`}>{staff.acf.position}</div>
          <ul className={`${styles.staff_info_position_higher}`}>
            {information.map((line, index) => (
              <ul className={`${styles.info_line}`} key={index}>
                {line}
              </ul>
            ))}
          </ul>
          <div className={`${styles.staff_detail_left_bottom_element}`}>
            <div
              className={`text_color ${styles.staff_info_position_lower} ${styles.info_link}`}
            >
              <a href={`mailto:${staff.acf.email}`}>{staff.acf.email}</a>
            </div>
            <div
              className={`text_color   ${styles.staff_info_position_lower} ${styles.info_link}`}
            >
              <a href={`tel:${staff.acf.telephone}`}>{staff.acf.telephone}</a>
            </div>
            {staff.acf.linkedin != "" ? (
              <div className={`text_color ${styles.staff_info_position_lower}`}>
                <a href={staff.acf.linkedin} className={`${styles.info_link}`}>
                  <img
                    src={linkedin_logo}
                    width="31px"
                    height="25.92px"
                    alt="LinkedIn"
                    className="symbols_small"
                  ></img>
                </a>
              </div>
            ) : null}
          </div>
        </div>

        <div className={`text_color ${styles.back_btn}`}>
          <Link to="/Mitarbeitende">Zurück zur Übersicht</Link>
        </div>
      </div>
      <br />
    </div>
  );
};
export default StaffDetailCompLeft;
