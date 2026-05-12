cat > ~/ft17/blog/src/App.js << 'EOF'
import Header from "./components/Header";
import About from "./components/About";
import Article from "./components/Article";
import Footer from "./components/Footer";
import blog from "./blog";

function App() {
  const postComponents = blog.posts.map((post) => (
    <Article
      key={post.id}
      title={post.title}
      date={post.date}
      preview={post.preview}
    />
  ));

  return (
    <div className="App">
      <Header name={blog.name} />
      <About
        name={blog.name}
        about={blog.about}
        avatar={blog.avatar}
      />
      {postComponents}
      <Footer />
    </div>
  );
}

export default App;
EOF
