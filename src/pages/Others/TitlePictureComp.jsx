import hometitle_pic from "../../assets/imgs/titlephoto/Home.png";
import servicestitle_pic from "../../assets/imgs/titlephoto/Dienstleistungen.png";
import contacttitle_pic from "../../assets/imgs/titlephoto/Kontakt.png";
import staffstitle_pic from "../../assets/imgs/titlephoto/Mitarbeitende.png";
import notmatch404_pic from "../../assets/imgs/titlephoto/NotMatch404.png";
import projects_pic from "../../assets/imgs/titlephoto/Projekte.png";
import project_pic from "../../assets/imgs/titlephoto/Projekt.png";
import topics_pic from "../../assets/imgs/titlephoto/Themen.png";
import styles from "./titlepicturecomp.module.css";

const TitlePictureComp = ({ page }) => {
  let titlePic = page.split("/", 1)[0];
  let urlbase = hometitle_pic;
  let msg = "";
  switch (titlePic) {
    case "":
      msg = "Willkommen beim Büro Vatter";
      urlbase = hometitle_pic;
      break;
    case "Projekte":
      urlbase = projects_pic;
      break;
    case "Projekt":
      urlbase = project_pic;
      break;
    case "Dienstleistungen":
      urlbase = servicestitle_pic;
      break;
    case "Mitarbeitende":
      urlbase = staffstitle_pic;
      break;
    case "Kontakt":
      urlbase = contacttitle_pic;
      break;
    case "Themen":
      urlbase = topics_pic;
      break;
    case "NotMatch404":
      urlbase = notmatch404_pic;
      break;
    default:
      msg = "";
      urlbase = hometitle_pic;
      break;
  }
  return (
    <div
      className={`${styles.titleImg}`}
      style={{
        backgroundImage: `url(${urlbase})`,
      }}
    >
      <div className={`${styles.caption}`}>
        <div>{msg}</div>
      </div>
    </div>
  );
};

export default TitlePictureComp;
