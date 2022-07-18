import React, { useState } from 'react';
import css from './Notes.module.css';
import { v4 } from 'uuid';

function NoteForm({ setNotes }) {
  const [text, setText] = useState('');

  function onSubmit(evt) {
    evt.preventDefault();

    const data = {
      content: text,
      id: v4(),
    };

    fetch('https://expressendpoint.herokuapp.com/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(data),
    })
      .then((response) => response.json())
      .then((json) => {
        setNotes(json);
      });

    evt.currentTarget.reset();
  }

  function changeHandler(evt) {
    setText(evt.currentTarget.value);
  }

  return (
    <form action='submit' onSubmit={onSubmit}>
      <span>New note</span>
      <div className={css.textForm}>
        <textarea
          cols='50'
          rows='10'
          className={css.textarea}
          onChange={changeHandler}
        ></textarea>
        <button type='submit' className={css.submit}>
          ➤
        </button>
      </div>
    </form>
  );
}

export default NoteForm;
