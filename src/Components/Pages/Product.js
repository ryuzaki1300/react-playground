import ProductPage from "Components/Sections/ProductPage";
import useAxios from 'Hooks/useAxios';
import { useParams } from 'react-router-dom';

const Product = () => {

    const { id } = useParams();

    const { data: product, pending, error } = useAxios({
        url: 'https://lavazemjanebi.com/api/shop/product?id=4126325',
        method: 'get',
        data: {id}
    });

    return ( 
        <div className="product-page">
            <h3 className="text-center">Product Page</h3>
            <ProductPage product={ product }/>
        </div>
     );
}
 
export default Product;