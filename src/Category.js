import SubCategory from "./SubCategory";

function Category(props) {
  return (
    <div
      style={props.categoryDetails.style.categoryStyle?.categoryDivStyle || {}}
    >
      <h2>
        <u>{props.categoryDetails.title}</u>
      </h2>
      {props.categoryDetails.subCategoryDetails.map((subCategory) => (
        <SubCategory
          subCategoryDetails={subCategory}
          style={props.categoryDetails.style.subCategoryStyle || {}}
        />
      ))}
    </div>
  );
}

export default Category;
