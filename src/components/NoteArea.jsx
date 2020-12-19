import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Zoom from "@material-ui/core/Zoom";

export default function NoteArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function change(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function click(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          onChange={change}
          name="title"
          vlaue={note.title}
          placeholder="Enter Title"
        />

        <textarea
          onChange={change}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <Zoom in={true}>
          <Fab onClick={click}>
            <AddCircleIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
