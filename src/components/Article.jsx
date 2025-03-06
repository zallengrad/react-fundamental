function Article () {
    const name = "Zale";
    const titles = ["Tutorial Reactjs", "Tutorial Nextjs", "Tutorial Nodejs"];

    // titles.map(item => item)
    return (
    <>
        <div>{name}</div>
        <div>
            {titles.map((title) => {
                return (
                    <>
                        <div>{title}</div>
                        <div>{title}</div>

                    </>
                 )
            })}
        </div>
    </>
    );
}

export default Article;