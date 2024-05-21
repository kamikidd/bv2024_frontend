import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import Row from "react-bootstrap/Row";
import fetchData from "./fetchData";
import DOMPurify from "dompurify";
import download_symbol from "../imgs/symbols/download.png";
const DownloadPDF = (prop) => {
  console.log(prop.prop);
  const navigate = useNavigate();

  const downloads_1 = useQuery(
    ["downloads_1", `media/${prop.prop}`, ""],
    fetchData
  );

  if (downloads_1.isLoading) {
    return <Spinner></Spinner>;
  }
  if (downloads_1.isError) {
    navigate("/NotMatch404");
  }
  console.log(downloads_1.data.source_url);
  return (
    <div>
      <Row>
        <a id="download_list" href={downloads_1.data.source_url}>
          <div className="d-flex justify-content-between">
            <span
              className="symbol"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(downloads_1.data.title.rendered),
              }}
            ></span>
            <img
              src={download_symbol}
              width="24px"
              height="24px"
              alt="herunterladen"
            ></img>
          </div>
        </a>
      </Row>
    </div>
  );
};
export default DownloadPDF;