import SelectedProjectList from "../../components/SelectedProjectList";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../../utils/fetchData";
import Spinner from "../Others/Spinner";
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
