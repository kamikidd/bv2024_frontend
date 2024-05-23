import { useFetchMedia } from "./useFetchMedia";
import unknownstaff_pic from "../imgs/staffs/unknown.png";
const StaffPicComp = ({ imgid, staffName, position }) => {
  const media = useFetchMedia(imgid, unknownstaff_pic);

  return (
    <div className="staffPicContainer">
      <div className="staff_pic">
        <img src={media} alt={staffName}></img>
        <div className="staff_pic_caption_1">
          <div className="staff_pic_text_1">{staffName}</div>
        </div>
        <div className="staff_pic_caption_2">
          <div className="staff_pic_text_2">{position}</div>
        </div>
      </div>
    </div>
  );
};

export default StaffPicComp;
