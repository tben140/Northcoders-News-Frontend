import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import ArticlesList from "./components/ArticlesList.js";

function App() {
  return (
    <div className="App">
      <Header />
      <ArticlesList />
    </div>
  );
}

export default App;
