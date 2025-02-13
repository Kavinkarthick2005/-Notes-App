import React, { useState, useEffect } from "react";
import Note from "./components/Note";

const App = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        setNotes(savedNotes);
    }, []);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const addNote = (text) => {
        setNotes([...notes, text]);
    };

    const deleteNote = (index) => {
        setNotes(notes.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1>Notes App</h1>
            <Note notes={notes} addNote={addNote} deleteNote={deleteNote} />
        </div>
    );
};

export default App;
