const BlogPage = ({ blog }) => {
    return ( 
        <div className="blog-details">
            <p>{ JSON.stringify(blog) }</p>
        </div>
     );
}
 
export default BlogPage;