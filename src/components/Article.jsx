function Article (props) {
    return (
    <>
        <h3>{props.title}</h3>
        
       <small>
        Date : {props.date}, Tags : {props.tag.join(", ")}
       </small>
    </>
    );
}

export default Article;