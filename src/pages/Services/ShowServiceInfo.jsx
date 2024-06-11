import DOMPurify from "dompurify";
import styles from "./service.module.css";
const ShowServiceInfo = ({ serviceinfo }) => {
  return (
    <div>
      <div
        className={`${styles.service_content}`}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(serviceinfo),
        }}
      ></div>
    </div>
  );
};
export default ShowServiceInfo;
