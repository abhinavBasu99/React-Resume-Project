function SubCategory(props) {
  return (
    <div style={props.style?.subCategoryDivStyle || {}}>
      <div style={{ display: "flex", justifyContent: "start", gap: "10px" }}>
        {props.subCategoryDetails.logo && (
          <img
            src={props.baseImageUrl + props.subCategoryDetails.logo}
            alt={props.subCategoryDetails.logoName}
            style={{ width: "50px" }}
          />
        )}
        <h3>{props.subCategoryDetails.title}</h3>
      </div>
      {props.subCategoryDetails.subtitle && (
        <p style={props.style.subCategorySubtitleStyle}>
          {props.subCategoryDetails.subtitle}
        </p>
      )}
      {props.subCategoryDetails.date && <p>{props.subCategoryDetails.date}</p>}
    </div>
  );
}

export default SubCategory;
