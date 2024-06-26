import SelectedProject4StaffDetailRight from "./SelectedProject4StaffDetailRight";
import PublicationsListComp from "./PublicationListComp";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import fetchData from "../../utils/fetchData";
import Spinner from "../Others/Spinner";
import styles from "./staffs.module.css";

const StaffDetailCompRight = ({ staff }) => {
  const navigate = useNavigate();
  const topics = staff.acf.hauptthemen.split("\r\n");
  const membership = staff.acf.mitgliedschaften.split("\r\n");
  const publications = useQuery(
    [
      "publikations",
      `publikationen`,
      `isshownonstaffdetailpage=${staff.acf.mitarbeitende_taxonomy}`,
    ],
    fetchData,
  );
  if (publications.isLoading) {
    return <Spinner></Spinner>;
  }
  if (publications.isError) {
    navigate("/NotMatch404");
  }
  return (
    <div>
      {staff.acf.ausbildung != "" ? (
        <div className={`${styles.section_box}`}>
          <h2 className={`${styles.staff_detail_title}`}>Ausbildung</h2>
          {staff.acf.ausbildung}
          <hr></hr>
        </div>
      ) : null}

      {topics != "" ? (
        <div className={`${styles.section_box}`}>
          <h2 className={`${styles.staff_detail_title}`}>Hauptthemen</h2>
          <ul>
            {topics.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
          <hr></hr>
        </div>
      ) : null}
      {staff.acf.selected_projects != "" ? (
        <div className={`${styles.section_box}`}>
          <h2 className={`${styles.staff_detail_title}`}>
            Ausgewählte Projekte
          </h2>

          <SelectedProject4StaffDetailRight
            person={staff.acf.mitarbeitende_taxonomy}
          ></SelectedProject4StaffDetailRight>
          <hr></hr>
        </div>
      ) : null}
      {staff.acf.publikationen != "" ? (
        <div className={`${styles.section_box}`}>
          <h2 className={`${styles.staff_detail_title}`}>Publikationen</h2>
          <PublicationsListComp
            publications={publications.data}
          ></PublicationsListComp>
          <hr></hr>
        </div>
      ) : null}

      {membership != "" ? (
        <div className={`${styles.section_box}`}>
          <h2 className={`${styles.staff_detail_title}`}>Mitgliedschaften</h2>
          <ul>
            {membership.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
          <hr></hr>
        </div>
      ) : null}

      <br />
    </div>
  );
};
export default StaffDetailCompRight;
