import BlogThumb from 'Components/Snippet/BlogThumb';

const BlogList = ({ blogs }) => {

    return ( 
        <div className="row">
            {blogs.map((blog) => (
                <div className="col-4" key={ blog.id }>
                    <BlogThumb blog={blog} />
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;