import React from 'react';
import Note from './Note';
import css from './Notes.module.css';

function Notes({ notes, setNotes }) {
  function handleRefresh() {
    fetch('https://expressendpoint.herokuapp.com/notes')
      .then((response) => response.json())
      .then((json) => {
        setNotes(json);
      });
  }

  return (
    <div className={css.notesWrapper}>
      <div className={css.refreshWrapper}>
        <h1>Notes</h1>
        <div className={css.refresh} onClick={handleRefresh}></div>
      </div>
      <div className={css.notesContainer}>
        {notes.map((x) => {
          return (
            <Note key={x.id} text={x.content} id={x.id} setNotes={setNotes} />
          );
        })}
      </div>
    </div>
  );
}

export default Notes;
