import React from "react";
import ToDoList from "./list.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="title">todos</h1>
			<ToDoList />
		</div>
	);
};

export default Home;
