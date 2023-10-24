// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogitem} = props
  const {title, publishedDate, description} = blogitem

  return (
    <li>
      <div className="blog-heading-container">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
      <hr />
    </li>
  )
}

export default BlogItem
