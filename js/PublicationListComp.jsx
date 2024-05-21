import PublicationsList from "./PublicationsList";
const PublicationsListComp = ({ publications }) => {
  return (
    <div>
      {publications.map((pub) => {
        return <PublicationsList key={pub.id} prop={pub}></PublicationsList>;
      })}
    </div>
  );
};
export default PublicationsListComp;
