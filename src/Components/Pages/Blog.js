import BlogPage from "Components/Sections/BlogPage";
import useAxios from "Hooks/useAxios";
import { useParams } from "react-router-dom";

const Blog = () => {

    const { id } = useParams();

    const { data: blog, pending, error } = useAxios({
        url: 'https://lavazemjanebi.com/api/content/article',
        method: 'get',
        data: {id}
    });

    return ( 
        <div className="blog-page">
            <h3 className="text-center">Blog Page</h3>
            <BlogPage blog={ blog } />
        </div>
     );
}
 
export default Blog;