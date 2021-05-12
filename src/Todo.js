import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import "./Todo.css";
import db from "./firebase";

function Todo(props) {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemText primary={props.todo.todo} secondary="Dummy Deadline" />
      </ListItem>
      <Button
        onClick={(event) => {
          db.collection("todos").doc(props.todo.id).delete();
        }}
      >
        DELETE
      </Button>
    </List>
  );
}

export default Todo;
