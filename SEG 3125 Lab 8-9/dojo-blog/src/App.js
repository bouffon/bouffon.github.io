import Navbar from "./Navbar";
import Home from "./Home";

//a component is a function, we must always return something
function App() {

  //const title = "Welcome to the new blog";
  const likes = 50;
  const link = "http://www.google.com"

  return (
    //would be just "class" if in HTMl as opposed to JSX
    <div className="App"> 

    <Navbar/>

    <div className="content">
      <Home/>
      <p>Likes {likes} times</p>

      <p>{10}</p>
      <p>{"Hello ninjas"}</p>
      <p>{[1,2,3,4,5]}</p>
      <p>{Math.random() *10}</p>

      <a href={link}>Google Site</a>
    </div>
    
    </div>
  );
}

//export the function "App" so that it can be used in other files
export default App;
