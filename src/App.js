import React,{useState} from 'react';

import '../src/App.css';

import GoalList from './Components/GoalsList/GoalList';
import NewGoalList from './Components/NewGoalsList/NewGoalList';

const App = () => {

const [goalsData, setGoalsData] = useState([
  {id:'01', text:'Testing of Example 01 will be Replace later'},
  {id:'02', text:'Testing of Example 02 will be Replace later'},
  {id:'03', text:'Testing of Example 03 will be Replace later'},
  {id:'04', text:'Testing of Example 04 will be Replace later'}
]);  

  const onAddChildGoal = (childData) => {
    //setGoalsData(goalsData.concat(childData));
    setGoalsData((prevGoalData) => {
        return prevGoalData.concat(childData);
    });
  }

  return (   
      <div className="Goals-list">
       <h1>User Input Goal</h1><br></br>
        <NewGoalList onAddChildData={onAddChildGoal}/>
        <GoalList onDyna={goalsData}/>   
    </div>
  );
}

export default App;
