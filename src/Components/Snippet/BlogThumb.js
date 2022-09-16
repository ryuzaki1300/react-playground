import { Link } from 'react-router-dom';

const BlogThumb = ({ blog }) => {
    return (
        <div className="thumb border p-3 col-4">
            <Link to={`/blog/${blog.id}`}>
                {blog.image && <img width="100%" src={blog.image_url + blog.image} alt={blog.title} />}
                <h3>{blog.title}</h3>
                <h3>{blog.date}</h3>
            </Link>
        </div>
    );
}

export default BlogThumb;