import React from 'react';
import css from './Notes.module.css';

function Note({ text, id, setNotes }) {
  function onRemove() {
    fetch(`https://expressendpoint.herokuapp.com/notes/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((json) => {
        setNotes(json);
      });
  }
  return (
    <div className={css.note}>
      <span>{text}</span>
      <div className={css.removeBtn} onClick={onRemove}></div>
    </div>
  );
}

export default Note;
