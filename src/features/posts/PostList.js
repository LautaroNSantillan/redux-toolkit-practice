import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";


const PostList = () => {
    const posts = useSelector(selectAllPosts)

    const renderedposts =posts.map(post => (
        <article key={post.id}>
            <h3>{post.title} </h3>
            <p> {post.content.substring(0,100)} </p>
            <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
        </article>
    ))
  return (
    <section>
        <h2>
            {renderedposts}
        </h2>
    </section>
  )
}

export default PostList