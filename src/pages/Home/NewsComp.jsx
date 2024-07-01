import DOMPurify from "dompurify";
import Spinner from "../Others/Spinner";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../../utils/fetchData";
import styles from "./newscomp.module.css";
import { formatDate } from "../../utils/helpers";
const NewsComp = () => {
  const navigate = useNavigate();

  const news = useQuery(["news", `aktuelles`, ""], fetchData);

  if (news.isLoading) {
    return <Spinner></Spinner>;
  }
  if (news.isError) {
    navigate("/NotMatch404");
  }
  return (
    <div id="landing_news">
      {news.data.map((artikel) => (
        <div key={artikel.id}>
          <div className={`${styles.news_title}`}>{artikel.title.rendered}</div>
          <div className={`${styles.news_date}`}>
            {formatDate(artikel.date.slice(0, 10))}
          </div>
          <div
            className={`${styles.news_content}`}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(artikel.content.rendered),
            }}
          ></div>
          <hr></hr>
        </div>
      ))}
    </div>
  );
};
export default NewsComp;
