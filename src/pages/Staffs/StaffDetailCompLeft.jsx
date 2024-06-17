import linkedin_logo from "../../assets/imgs/logos/linkedIn_logo_s.png";
import { Link } from "react-router-dom";
import styles from "./staffs.module.css";

const StaffDetailCompLeft = ({ staff, img }) => {
  const information = staff.acf.otherInfo.split("\r\n");
  return (
    <div>
      <div className={`${styles.staff_left_box}`}>
        <img className={`${styles.staff_detail_pic}`} src={img} alt="staff" />
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
              {/* <img
              src="imgs/symbols/fi_mail.png"
              alt="email"
              className="symbols_small"
            /> */}
              {/* todo  */}
              {staff.acf.email}
            </div>
            <div className={`text_color   ${styles.staff_info_position_lower}`}>
              {/* <img
              src="imgs/symbols/phone.png"
              alt="tel"
              className="symbols_small"
            /> */}
              {staff.acf.telephone}
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
          <Link to="/Mitarbeitende">ZURÜCK</Link>
        </div>
      </div>
      <br />
    </div>
  );
};
export default StaffDetailCompLeft;
