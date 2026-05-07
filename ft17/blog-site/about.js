function About(props) {
  return (
    <aside>
      <img src={props.avatar} alt="blog profile" />
      <p>{props.about}</p>
    </aside>
  );
}

export default About;