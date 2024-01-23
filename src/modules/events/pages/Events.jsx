import React from 'react';

import AlertEvent from '../components/AlertEvent/AlertEvent';
import Speecher from '../components/Speecher/Speecher';
import Donors from '../components/Donors/Donors';
import TimeEvents from '../components/TimeEvents';

export default function Events() {
  return (
    <div>
      <TimeEvents />
      <AlertEvent />
      <Speecher />
      <Donors />
    </div>
  );
}
