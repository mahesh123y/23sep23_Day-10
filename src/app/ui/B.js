'use client'

import React from 'react'
import C from './C';

export default function B(p) {
    console.log(p)
  return (
    <div>
      <h1>B component {p.message}</h1>
      <C message="Oklabs" />
    </div>
  );
}
