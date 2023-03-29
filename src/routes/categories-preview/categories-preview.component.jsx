import { Fragment } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import { selectCategory } from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategory);
  const categories = Object.keys(categoriesMap);

  return (
    <Fragment>
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
