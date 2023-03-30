import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { useSelector } from "react-redux";
import { selectCategiesMap } from "../../store/categories/categories.selector";
import "./category.styles.scss";

const Category = () => {
  console.log("%cRENDER CATEGORY COMPONENT", 'color: green');
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategiesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    console.log("useEffect category component");
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};
export default Category;
