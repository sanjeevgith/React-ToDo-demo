
import './App.css';
import Header from "./component/header";
//import ToDoItems from "./component/ToDoItems";
import Footer from "./component/Footer";
import ToDos from './component/ToDos';
import React, { useState, useEffect, Fragment } from 'react';
import AddTodo from './component/AddTodo';
import About from './component/About';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";




function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo) => {
    console.log("I am ondelete", "todo");
    // let index = todo.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }



  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length == 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo)

    // if(localStorage.getItem("todos")){
    //   localStorage.setItem("todos",json.stringify(todos));
    // }
  }

  //usestate use
  // const [todos, setTodos] = useState([
  // {
  //   sno: 1,
  //   title: "go to the market",
  //   desc: "you need to go to the market"
  // },
  // {
  //   sno: 2,
  //   title: "go to the mall",
  //   desc: "you need to go to the market"
  // },
  // {
  //   sno: 3,
  //   title: "go to the hospital",
  //   desc: "you need to go to the market"
  // },
  // {
  //   sno: 4,
  //   title: "go to the college",
  //   desc: "you need to go to the market"
  // }

  //]);
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  return (

    <>
      <Router>
        <Header title="MyToDoList" searchBar={true} />
        <Routes>
          <Route path="/" element={<><AddTodo addTodo={addTodo} /><ToDos todos={todos} onDelete={onDelete} /></>} render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <ToDos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route path='/about' element={<About />}>
          </Route>
        </Routes>


        {/* <Route/> */}

        <Footer />
      </Router>
    </>



  );
}

export default App;
