import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import BlogsList from "./components/BlogsList/blogslist";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import NotFound from "./components/NotFound/notfound";
import BlogItemDetails from "./components/BlogItemDetails/itemdetails";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" Component={BlogsList} />
          <Route exact path="/blogs/:id" element={<BlogItemDetails />} />
          <Route exact path="/about" Component={About} />
          <Route exact path="/contact" Component={Contact} />
          <Route exact path="/*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
