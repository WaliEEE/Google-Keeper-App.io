import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NoteArea from "./NoteArea";

export default function App() {
  const [notes, updateNotes] = useState([]);

  function addNote(newNote) {
    updateNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    updateNotes((prevNotes) => {
      return prevNotes.filter((notes, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <NoteArea onAdd={addNote} />
      {notes.map((single, index) => {
        return (
          <Note
            id={index}
            key={index}
            title={single.title}
            content={single.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}
