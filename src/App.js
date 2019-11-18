import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import ArticlesList from "./components/ArticlesList.js";
import Login from "./components/Login.js";
import FilterAndSortBar from "./components/FilterAndSortBar.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <FilterAndSortBar />
      <ArticlesList />
    </div>
  );
}

export default App;
