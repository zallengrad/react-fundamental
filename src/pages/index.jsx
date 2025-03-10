import posts from "../posts.json";
import Article from "../components/Article";

function Homepage (){
    return (
        <>
            <h1>Zale Tutorial Blog</h1>
            {posts.map((blog) => (
                <Article title={blog.title} tag={blog.tags} date={blog.date} />
            ))}
        </>
    );
}

export default Homepage;