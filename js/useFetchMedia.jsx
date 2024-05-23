import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import fetchData from "./fetchData";
export function useFetchMedia(imgid, default_media) {
  let media = default_media;
  const navigate = useNavigate();
  const pic = useQuery(["pic", `media`, imgid], fetchData);
  if (pic.isLoading) {
    return <Spinner></Spinner>;
  }
  if (pic.isError) {
    navigate("/NotMatch404");
  }
  let image = pic.data.source_url;
  if (image) {
    media = image;
  }
  return media;
}
