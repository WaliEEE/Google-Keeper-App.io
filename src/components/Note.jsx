import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

export default function Note(props) {
  function deleteItem(event) {
    props.onDelete(props.id);
    event.preventDefault();
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteItem}>
        <DeleteForeverIcon />
      </button>
    </div>
  );
}
