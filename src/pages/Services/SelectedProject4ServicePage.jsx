import SelectedProjectList from "../../components/SelectedProjectList";
import fetchData from "../../utils/fetchData";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../Others/Spinner";
import { useNavigate } from "react-router-dom";

const SelectedProject4ServicePage = ({ service, isshownid }) => {
  const navigate = useNavigate();
  const projects_on_service_page = useQuery(
    [
      "projects_show_on_service_page",
      `projekte`,
      `isshownonserviceinfopage=${isshownid}&service=${service}`,
    ],
    fetchData
  );
  if (projects_on_service_page.isLoading) {
    return <Spinner></Spinner>;
  }
  if (projects_on_service_page.isError) {
    navigate("/NotMatch404");
  }
  return (
    <div>
      {projects_on_service_page.data.map((project) => {
        return (
          <SelectedProjectList
            key={project.id}
            detail={project}
          ></SelectedProjectList>
        );
      })}
    </div>
  );
};
export default SelectedProject4ServicePage;
