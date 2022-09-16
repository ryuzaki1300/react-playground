const BlogThumb = ({ blog }) => {
    return (
        <div className="thumb border p-3 col-4">
            {blog.image && <img width="100%" src={blog.image_url + blog.image} alt={blog.title} />}
            <h3>{blog.title}</h3>
            <h3>{blog.date}</h3>
        </div>
    );
}

export default BlogThumb;