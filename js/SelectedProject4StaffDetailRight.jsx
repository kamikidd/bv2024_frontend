import SelectedProjectList from "./SelectedProjectList";
import { useQuery } from "@tanstack/react-query";
import fetchData from "./fetchData";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

const SelectedProject4StaffDetailRight = ({ person }) => {
  const navigate = useNavigate();

  const projects = useQuery(
    ["selectedprojects", `projekte`, `isshownonstaffdetailpage=${person}`],
    fetchData
  );
  if (projects.isLoading) {
    return <Spinner></Spinner>;
  }
  if (projects.isError) {
    navigate("/NotMatch404");
  }

  return (
    <div>
      {projects.data.map((project) => {
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
export default SelectedProject4StaffDetailRight;
