import { useFetchMedia } from "../../utils/useFetchMedia";

const TopicTabComp = ({ imgid, picName }) => {
  const media = useFetchMedia(imgid, "imgs/topics/gesundheit.png");

  return (
    <div className="topicPicContainer">
      <div className="topic_pic">
        <img src={media} alt={picName} />
        <div className="topic_pic_caption">
          <div className="topic_pic_text">{picName}</div>
        </div>
      </div>
    </div>
  );
};

export default TopicTabComp;
