import ProductThumb from "Components/Snippet/ProductThumb";

const ProductList = ({ products }) => {
    return ( 
        <div className="row">
            {products.map((product) => (
                <div className="col-4" key={ product.id } >
                    <ProductThumb product={ product } />
                </div>
            ))}
        </div>
     );
}
 
export default ProductList;