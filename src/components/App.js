import React from "react";
import Overlay from "./Overlay";
import Modal from "./Modal";
import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

const App = props => {
  return (
    <div className="app-container">
      <Overlay>
        <Modal />
      </Overlay>
      <Header title="Employee Directory" />
      <SearchBar />
      <EmployeeList />
    </div>
  );
};

export default App;
