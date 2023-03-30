import { Fragment } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import {
  selectCategiesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/categories.selector";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategiesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const categories = Object.keys(categoriesMap);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        categories.map((title) => {
          const firstFourItems = categoriesMap[title].slice(0, 4);
          return (
            <CategoryPreview
              key={title}
              title={title}
              products={firstFourItems}
            />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
