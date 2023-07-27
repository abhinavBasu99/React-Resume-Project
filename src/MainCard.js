import SocialContact from "./SocialContact";

function MainCard(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        borderBottom: "4px dashed black",
        gap: "80px",
      }}
    >
      <div>
        <img
          src={props.mainDetails.candidatePhoto}
          alt="My Profile Pic"
          style={{ width: "180px", margin: "5px", borderRadius: "100px" }}
        />
        <h1 style={{ margin: "5px" }}>{props.mainDetails.candidateName}</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "20%",
        }}
      >
        {props.mainDetails.social.map((social) => {
          return <SocialContact social={social} />;
        })}
      </div>
    </div>
  );
}

export default MainCard;
