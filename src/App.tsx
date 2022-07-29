import React, { FC } from "react";
import { Button } from "antd";
import CardsList from "@Components/CardsList/CardsList";
import "./App.css";

const App: FC = () => (
  <div className="App">
    <CardsList />
  </div>
);

export default App;
