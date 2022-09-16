const ProductPage = ({ product }) => {

    return ( 
        <div className="product-details">
            <p>{ JSON.stringify(product) }</p>
        </div>
     );
}
 
export default ProductPage;