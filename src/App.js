import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import ArticlesList from "./components/ArticlesList.js";
import Login from "./components/Login.js";
import FilterBar from "./components/FilterBar.js";
import SortBar from "./components/SortBar.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <FilterBar />
      <SortBar />
      <ArticlesList />
    </div>
  );
}

export default App;
