const BlogList = ({ blogs }) => {

    return ( 
        <div className="row">
            {blogs.map((blog) => (
                <div className="thumb border p-3 col-4" key={ blog.id }>
                    {blog.image && <img width="100%" src={ blog.image_url + blog.image } alt={blog.title} />}
                    <h3>{ blog.title }</h3>
                    <h3>{ blog.date }</h3>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;