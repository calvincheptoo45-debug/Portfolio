function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      <small>{props.date}</small>
      <p>{props.preview}</p>
    </article>
  );
}

export default Article;