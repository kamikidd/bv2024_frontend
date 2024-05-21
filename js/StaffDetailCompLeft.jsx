import linkedin_logo from "../imgs/logos/linkedIn_logo_s.png";
import { Link } from "react-router-dom";

const StaffDetailCompLeft = ({ staff }) => {
  let staffPic = "imgs/staffs/unknown.png";

  if (staff.acf.foto) {
    staffPic = staff.acf.foto_url;
  }
  const information = staff.acf.otherInfo.split("\r\n");
  return (
    <div>
      <div id="staff_box">
        <img id="staff_detail_pic" src={staffPic} alt="staff" />
        <div>
          <div id="staff_name" className="staff_info">
            {staff.title.rendered}
          </div>
          <div id="staff_position" className="staff_info">
            {staff.acf.position}
          </div>
          <ul className="staff_info_position">
            {information.map((line, index) => (
              <ul id="info_line" key={index}>
                {line}
              </ul>
            ))}
          </ul>
          <div id="staff_detail_left_bottom_element">
            <div className="text_color staff_info_position info_link">
              {/* <img
              src="imgs/symbols/fi_mail.png"
              alt="email"
              className="symbols_small"
            /> */}
              {/* todo  */}
              <a href={"/"}>{staff.acf.email} </a>
            </div>
            <div className="text_color staff_info_position ">
              {/* <img
              src="imgs/symbols/phone.png"
              alt="tel"
              className="symbols_small"
            /> */}
              {staff.acf.telephone}
            </div>
            {staff.acf.linkedin != "" ? (
              <div className="text_color staff_info_position">
                <a href={staff.acf.linkedin} className="info_link">
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

        <div id="back_btn" className="text_color">
          <Link href="/#/Mitarbeitende">ZURÜCK</Link>
        </div>
      </div>
      <br />
    </div>
  );
};
export default StaffDetailCompLeft;
