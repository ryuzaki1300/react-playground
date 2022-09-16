import useAxios from 'Hooks/useAxios';
import BlogList from 'Components/Sections/BlogList';

const Blogs = () => {
    
    const { data:blogs, pending, error } = useAxios({
        url: "https://lavazemjanebi.com/api/shop/product/list",
        method: 'post'
    });

    return ( 
        <div className="page-contact">
            <h3 className="text-center">Blogs Page</h3>
            <div className="product-list">
                {pending && <div className="loading-log text-center">Loading...</div>}
                {error && <div className="error-log text-center">{ error }</div>}
                {blogs && <BlogList blogs={blogs.items} /> }
            </div>
        </div>
     );
}
 
export default Blogs;