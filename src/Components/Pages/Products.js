import useAxios from 'Hooks/useAxios';
import ProductList from 'Components/Sections/ProductList';

const Products = () => {
    
    const config = {
        url: 'https://lavazemjanebi.com/api/shop/product/list',
        method: 'get'
    }
    const { data:products, pending, error} = useAxios(config);

    return ( 
        <div className="page-products">
            <h3 className="text-center">Products Page</h3>
            <div className="product-list">
                {pending && <div className="loading-log text-center">Loading...</div>}
                {error && <div className="error-log text-danger text-center">{ error }</div>}
                {products && <ProductList products={products.items} /> }
            </div>
        </div>
    );
}

export default Products;