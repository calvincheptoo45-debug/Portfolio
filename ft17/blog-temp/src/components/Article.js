function Article(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <small>{props.date}</small>
      <p>{props.preview}</p>
    </div>
  );
}

export default Article;
