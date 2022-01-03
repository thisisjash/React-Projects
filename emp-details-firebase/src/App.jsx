import React, { useState } from "react";
import ScrollArea from "react-scrollbar/dist/no-css";
import data from "./data";
import List from "./list";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <section className="tool-bar">
          <h3>Employee Details</h3>
          <h4>Number of Employees - {people.length}</h4>
          <button onClick={() => console.log("I AM CLICKED")}>Add New Employee</button>
          <button onClick={() => setPeople([])}>Clear All</button>
        </section>
      </section>

      <section className="container">
        <List people={people} />
      </section>
    </main>
  );
};

export default App;
