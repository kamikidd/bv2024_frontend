import unknownstaff_pic from "../imgs/staffs/unknown.png";
const StaffPicComp = ({ image, staffName, position }) => {
  let staffPic = unknownstaff_pic;
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
