const TopicTabComp = ({ images, picName }) => {
  let topicPic = "imgs/topics/gesundheit.png";
  if (images) {
    topicPic = images;
  }

  return (
    <div className="topicPicContainer">
      <div className="topic_pic">
        <img src={topicPic} alt={picName} />
        <div className="topic_pic_caption">
          <div className="topic_pic_text">{picName}</div>
        </div>
      </div>
    </div>
  );
};

export default TopicTabComp;
