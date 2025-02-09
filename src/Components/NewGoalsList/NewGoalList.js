import React from 'react';
import './NewGoalList.css';

const NewGoalLIst = (props) => {

    const addGoal = (event) => {
        event.preventDefault();
        const cData = {
            id:Math.random().toString(),
            text:`This is ${event.currentTarget.test.value}`
        }
        props.onAddChildData(cData);
    };
    return (
        <div>
            <form className="newGoalList" onSubmit={addGoal}>               
                <input id="test" type="text"/>
                <button>Add Goal</button>
            </form>

        </div>


    );
}

export default NewGoalLIst;