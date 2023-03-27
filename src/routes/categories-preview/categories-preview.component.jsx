import { Fragment, useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../contexts/categories.context";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const categories = Object.keys(categoriesMap);

  return (
    <Fragment >
      {categories.map((title) => {
        const firstFourItems = categoriesMap[title].slice(0, 4);
        return (
          <CategoryPreview
            key={title}
            title={title}
            products={firstFourItems}
          />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
