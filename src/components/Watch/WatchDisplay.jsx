import React, { useState, useEffect } from 'react';
import css from './Watch.module.css';
import moment from 'moment-timezone';

function WatchDisplay({ name, timezone, watches, setWatches, id }) {
  const [seconds, setSeconds] = useState(90);
  const [minutes, setMinutes] = useState(90);
  const [hours, setHours] = useState(90);

  function rotate() {
    const time = +moment().format('s');
    let val = 90 + time * 6;
    setSeconds(val);
    if (time === 0) rotateMinutes();
  }

  useEffect(() => {
    const timer = setInterval(() => rotate(), 1000);
    rotate();
    rotateMinutes();
    rotateHours();
    return () => clearInterval(timer);
  }, []);

  function rotateMinutes() {
    const time = +moment().format('m');
    let val = 90 + time * 6;
    setMinutes(val);
    if (time === 0) rotateHours();
  }

  function rotateHours() {
    let val = 90 + +moment.tz(`Etc/GMT${timezone}`).format('h') * 30;
    setHours(val);
  }

  function remover() {
    setWatches(watches.filter((x) => x.id !== id));
  }

  return (
    <div className={css.watchWrapper}>
      <h4>{name}</h4>
      <div className={css.watch}>
        <div
          className={css.wrapper}
          style={{
            transform: `rotate(${seconds}deg)`,
          }}
        >
          <div className={css.seconds}></div>
        </div>
        <div
          className={css.wrapper}
          style={{
            transform: `rotate(${minutes}deg)`,
          }}
        >
          <div className={css.minutes}></div>
        </div>
        <div
          className={css.wrapper}
          style={{
            transform: `rotate(${hours}deg)`,
          }}
        >
          <div className={css.hours}></div>
        </div>
      </div>
      <div className={css.remover} onClick={remover}>
        x
      </div>
    </div>
  );
}

export default WatchDisplay;
