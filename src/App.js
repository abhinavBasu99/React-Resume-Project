import candidateDetails from "./data";
import Category from "./Category";
import MainCard from "./MainCard";

function App() {
  return (
    <div style={{ backgroundColor: "white", border: "6px groove black" }}>
      <MainCard
        mainDetails={candidateDetails[0]}
        baseImageUrl={candidateDetails[2]}
      />
      {candidateDetails[1].map((category) => {
        return (
          <Category
            categoryDetails={{
              title: category[0],
              subCategoryDetails: category[1],
              style: category[2],
            }}
            baseImageUrl={candidateDetails[2]}
          />
        );
      })}
    </div>
  );
}

export default App;
