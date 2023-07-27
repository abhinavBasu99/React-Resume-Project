function SocialContact(props) {
  return (
    <p style={{ display: "flex", alignItems: "center", margin: "5px" }}>
      <img
        src={props.social.logo}
        alt={props.social.logoName}
        style={{ width: "10%" }}
      />
      {props.social.detail}
    </p>
  );
}

export default SocialContact;
