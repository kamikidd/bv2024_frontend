import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import fetchData from "./fetchData";
import unknownstaff_pic from "../imgs/staffs/unknown.png";
const StaffPicComp = ({ imgid, staffName, position }) => {
  const navigate = useNavigate();
  const pic = useQuery(["pic", `media`, `${imgid}`], fetchData);
  if (pic.isLoading) {
    return <Spinner></Spinner>;
  }
  if (pic.isError) {
    navigate("/NotMatch404");
  }

  let staffPic = unknownstaff_pic;
  let image = pic.data.source_url;

  if (image) {
    staffPic = image;
  }

  return (
    <div className="staffPicContainer">
      <div className="staff_pic">
        <img src={staffPic} alt={staffName}></img>
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
