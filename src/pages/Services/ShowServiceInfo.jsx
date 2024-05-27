import DOMPurify from "dompurify";

const ShowServiceInfo = ({ serviceinfo }) => {
  return (
    <div>
      <div
        id="newscontent"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(serviceinfo),
        }}
      ></div>
    </div>
  );
};
export default ShowServiceInfo;
