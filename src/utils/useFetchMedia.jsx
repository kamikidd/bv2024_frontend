import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Spinner from "../pages/Others/Spinner";
import fetchData from "./fetchData";
export function useFetchMedia(imgid) {
  const navigate = useNavigate();
  const pic = useQuery(["pic", `media`, imgid], fetchData);
  if (pic.isLoading) {
    return <Spinner></Spinner>;
  }
  if (pic.isError) {
    navigate("/NotMatch404");
  }

  let image = pic.data.source_url;
  return image;
}
