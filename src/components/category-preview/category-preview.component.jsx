import { useNavigate } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";
import {
  CategoryPreviewContainer,
  Preview,
  TitleLink,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();
 
  return (
    <CategoryPreviewContainer>
      <h2>
        <TitleLink to={title}>
          {title.toUpperCase()}
        </TitleLink>
      </h2>
      <Preview>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
