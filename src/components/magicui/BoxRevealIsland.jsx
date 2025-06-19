import React from 'react';
import { BoxReveal } from './box-reveal';

export default function BoxRevealIsland(props) {
  return <BoxReveal {...props}>{props.children}</BoxReveal>;
} 