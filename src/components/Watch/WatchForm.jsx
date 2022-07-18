import React, { useState } from 'react';
import css from './Watch.module.css';
import { v4 } from 'uuid';

function WatchForm({ watches, setWatches }) {
  const [form, setForm] = useState({ name: '', timezone: '' });

  function handleSubmit(evt) {
    evt.preventDefault();
    setWatches([...watches, { ...form, id: v4() }]);
    evt.currentTarget.reset();
  }

  function nameChange(evt) {
    setForm({ ...form, name: evt.currentTarget.value });
  }

  function timezoneChange(evt) {
    setForm({ ...form, timezone: evt.currentTarget.value });
  }

  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <div className={css.col}>
        <span>Название</span>
        <input className={css.input} type='text' onChange={nameChange} />
      </div>
      <div className={css.col}>
        <span>Временная зона</span>
        <input className={css.input} type='text' onChange={timezoneChange} />
      </div>
      <button type='submit' className={css.button}>
        Добавить
      </button>
    </form>
  );
}

export default WatchForm;
