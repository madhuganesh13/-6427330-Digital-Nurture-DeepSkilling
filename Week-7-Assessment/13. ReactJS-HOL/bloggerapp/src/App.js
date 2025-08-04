import React, { useState } from "react";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";
import "./App.css";

function App() {
  const [selected, setSelected] = useState("book");

  // Method 1: If-Else
  const renderComponentIfElse = () => {
    if (selected === "book") return <BookDetails />;
    else if (selected === "blog") return <BlogDetails />;
    else return <CourseDetails />;
  };

  // Method 2: Ternary Operator
  const renderComponentTernary = () =>
    selected === "book" ? <BookDetails /> : <CourseDetails />;

  // Method 3: Logical AND
  const renderComponentLogicalAnd = () => (
    <>
      {selected === "book" && <BookDetails />}
      {selected === "blog" && <BlogDetails />}
      {selected === "course" && <CourseDetails />}
    </>
  );

  // Method 4: Switch (inside function)
  const renderComponentSwitch = () => {
    switch (selected) {
      case "book":
        return <BookDetails />;
      case "blog":
        return <BlogDetails />;
      case "course":
        return <CourseDetails />;
      default:
        return <BookDetails />;
    }
  };

  return (
    <div className="App">
      <h1>Blogger App - Conditional Rendering</h1>

      <div>
        <button onClick={() => setSelected("book")}>Book</button>
        <button onClick={() => setSelected("blog")}>Blog</button>
        <button onClick={() => setSelected("course")}>Course</button>
      </div>

      <hr />

      <h3>Rendered using If-Else</h3>
      {renderComponentIfElse()}

      <h3>Rendered using Ternary Operator</h3>
      {renderComponentTernary()}

      <h3>Rendered using Logical AND</h3>
      {renderComponentLogicalAnd()}

      <h3>Rendered using Switch Case</h3>
      {renderComponentSwitch()}
    </div>
  );
}

export default App;
