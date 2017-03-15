import React from 'react';
import Map from './MapContainer';

export default function App() {
  return (
    <main>
        <header>
          <h1 id="title">Map</h1>
        </header>
      <section id="gmap">
        <Map />
      </section>
    </main>
  );
}