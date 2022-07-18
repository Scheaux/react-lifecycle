import React, { useState, useEffect } from 'react';
import Notes from './Notes';
import NoteForm from './NoteForm';

function MainNote() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('https://expressendpoint.herokuapp.com/notes')
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setNotes(response);
      });
  }, []);

  return (
    <div className='wrap'>
      <Notes notes={notes} setNotes={setNotes} />
      <NoteForm setNotes={setNotes} />
    </div>
  );
}

export default MainNote;
