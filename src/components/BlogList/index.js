// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {bloglist} = props
  console.log(bloglist)
  return (
    <ul className="blog-Container">
      {bloglist.map(each => (
        <BlogItem key={each.id} blogitem={each} />
      ))}
    </ul>
  )
}

export default BlogList
