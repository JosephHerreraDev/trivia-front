import "/src/app/globals.css";
import "./categories.css";
import CategoryCard from "/components/categoryCard/categoryCard.jsx";

export default function Categories() {
  return (
    <div className="categories">
      <h1>Categorias</h1>
      <div className="category-group">
        <CategoryCard src="/images/science.svg" name="Ciencia" />
        <CategoryCard src="/images/tech.svg" name="Tecnologia" />
      </div>
    </div>
  );
}
