import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, Footer } from './Home'
import Contact from './Contact'
import Classcomp from './Classcomp'


//jsx javascript extented
function App() {
  // var elem = React.createElement("p", {id="test"}, "create dom elem")

  // <React.Fragment> to return multiple elements
  var name = "Sarath"
  return (
    <div>
      <Classcomp title="Welcome to new page" />
      <Header />
      <Contact name="Student" id={{ name: "sarath", age: "20" }} />
      <Contact name="Teacher" id={{ name: "sarath", age: "20" }} />
      <Footer />
    </div>
  );
}

export default App;
