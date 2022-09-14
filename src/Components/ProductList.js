const ProductList = ({ products }) => {
    return ( 
        <div className="row">
            {products.map((product) => (
                <div className="thumb border p-3 col-4" key={ product.id }>
                    {product.thumb && <img width="100%" src={ product.thumb } alt={product.title} />}
                    <h3>{ product.title }</h3>
                    <h3>{ product.date }</h3>
                </div>
            ))}
        </div>
     );
}
 
export default ProductList;