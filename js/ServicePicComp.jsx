import { useFetchMedia } from "./useFetchMedia";
// import { useQuery } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";
// import Spinner from "./Spinner";
// import fetchData from "./fetchData";
const ServicePicComp = ({ imgid, picName }) => {
  const media = useFetchMedia(imgid, "imgs/category/forschung.png");
  console.log(media);
  // const navigate = useNavigate();
  // const pic = useQuery(["pic", `media`, `${imgid}`], fetchData);
  // if (pic.isLoading) {
  //   return <Spinner></Spinner>;
  // }
  // if (pic.isError) {
  //   navigate("/NotMatch404");
  // }
  // let servicePic = "imgs/category/forschung.png";
  // let image = pic.data.source_url;
  // console.log(pic);
  // if (image) {
  //   servicePic = image;
  // }

  return (
    <div className="picContainer">
      <div className="service_pic">
        <img src={media} alt={picName} />
        <div className="service_pic_caption">
          <div className="service_pic_text">{picName}</div>
        </div>
      </div>
    </div>
  );
};

export default ServicePicComp;
