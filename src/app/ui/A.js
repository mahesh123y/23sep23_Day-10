import React from 'react'
import B from './B';

export default function A(p) {
  return (
    <div>
      <h1>A component {p.message}</h1>
      <B message="Oklabs" />
    </div>
  );
}
