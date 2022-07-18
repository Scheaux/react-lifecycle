import React, { useState } from 'react';
import WatchForm from './WatchForm';
import Watches from './Watches';
import { v4 } from 'uuid';

function Watch() {
  const [watches, setWatches] = useState([
    { name: 'Moscow', timezone: '-3', id: v4() },
  ]);

  return (
    <div className='wrap'>
      <WatchForm watches={watches} setWatches={setWatches} />
      <Watches watches={watches} setWatches={setWatches} />
    </div>
  );
}

export default Watch;
