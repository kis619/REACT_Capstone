import { createSelector } from "reselect";
import { CategoriesState } from "./categories.reducer";
import { CategoryMap } from "./categories.types";
import { RootState } from "../store";

const selectCategoryReducer = (state: RootState): CategoriesState => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categoriesArray
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);

export const selectCategiesMap = createSelector(
  [selectCategories],
  (categoriesArray): CategoryMap =>
    categoriesArray.reduce((acc: CategoryMap, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
