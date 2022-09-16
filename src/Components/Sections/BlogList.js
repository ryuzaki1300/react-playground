import BlogThumb from 'Components/Snippet/BlogThumb';

const BlogList = ({ blogs }) => {

    return ( 
        <div className="row">
            {blogs.map((blog) => (
                <BlogThumb blog={blog} key={ blog.id }/>
            ))}
        </div>
     );
}
 
export default BlogList;