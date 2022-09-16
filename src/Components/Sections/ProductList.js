import ProductThumb from "Components/Snippet/ProductThumb";

const ProductList = ({ products }) => {
    return ( 
        <div className="row">
            {products.map((product) => (
                <ProductThumb product={ product } key={ product.id } />
            ))}
        </div>
     );
}
 
export default ProductList;