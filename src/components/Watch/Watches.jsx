import React from 'react';
import css from './Watch.module.css';
import { v4 } from 'uuid';
import WatchDisplay from './WatchDisplay';

function Watches({ watches, setWatches }) {
  return (
    <div className={css.container}>
      {watches.map((x) => {
        return (
          <div key={v4()}>
            <WatchDisplay
              name={x.name}
              timezone={x.timezone}
              watches={watches}
              setWatches={setWatches}
              id={x.id}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Watches;
