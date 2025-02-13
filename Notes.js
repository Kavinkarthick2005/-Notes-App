import React, { useState } from "react";

const Note = ({ notes, addNote, deleteNote }) => {
    const [text, setText] = useState("");

    return (
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)} placeholder="New note..." />
            <button onClick={() => { addNote(text); setText(""); }}>Add</button>
            <ul>
                {notes.map((note, index) => (
                    <li key={index}>
                        {note} <button onClick={() => deleteNote(index)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Note;
