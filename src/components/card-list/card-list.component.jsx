import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = (props) => (
  <div className="card-list">
    {props.monsters.map((monster) => (
      <Card monster={monster} key={monster.id}></Card>
    ))}
  </div>
);
//   console.log(props);
// props.children is the content passed within <CardList></CardList> in App.js file
