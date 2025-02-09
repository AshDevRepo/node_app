import React from 'react';
import './GoalList.css';

const GoalList = (props) => {
    console.log(props.onDyna);
    return (
        <div>
            <ul className="goal-list">
              {props.onDyna.map((item) => {
                  return <li key = {item.id}>{item.text}</li>
               })}
            </ul>
        </div>


    );
}

export default GoalList;