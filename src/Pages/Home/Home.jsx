import React from "react";
import ReduxToDo from "../../Components/ReduxToDo/ReduxToDo";
import ReduxToDoList from "../../Components/ReduxToDoList/ReduxToDoList";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <header id="header">
        <div className="container">
          <img
            src="https://i0.wp.com/sorobindu.com/wp-content/uploads/2022/03/Sorobindu-logo-1.png"
            alt="logo"
            className="logo"
          />
          <div className="flex items-center">
            <a className="text-white min-w-[50px] font-medium" href="#">
              Home
            </a>
            <button className="log-btn btn">Login</button>
          </div>
        </div>
      </header>

      <section>
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
          <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
            <ReduxToDo></ReduxToDo>
          </div>
        </div>

        <div className="table-container">
          <ReduxToDoList></ReduxToDoList>
        </div>
      </section>
    </div>
  );
};

export default Home;
