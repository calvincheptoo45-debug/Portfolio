function About(props) {
  return (
    <div>
      <img src={props.avatar} alt={props.name} />
      <p>{props.about}</p>
    </div>
  );
}

export default About;
