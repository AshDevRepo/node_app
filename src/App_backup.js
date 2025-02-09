import React, { useState } from 'react';
import data from './data.json';
import './App.css';
import MaterialTable from 'material-table';


const App = () => {

     const [commentsDetails] = useState({
        columns:[      
            { title: 'Workflow', field: 'workflow', width: 350, cellStyle: {whiteSpace:'nowrap'}},
            { title: 'Team', field: 'Team' },
            { title: 'Schedule', field: 'Schedule' },
            { title: 'Created By', field: 'CreatedBy', width: 200 },
            { title: 'Created TimeStamp', field: 'CreatedTimeStamp' },
            { title: 'Updated By', field: 'UpdatedBy', width: 200 },
            { title: 'Updated TimeStamp', field: 'UpdatedTimeStamp' },
         ]});    
   
   return (
      <div className="App">
        <header className="App-header">          
          <h1 className="App-title">Work Flows</h1>
        </header>      
       <MaterialTable style={{margin: "15px"}}
            title="Workflow Details" 
            columns={commentsDetails.columns}    
            data={data}
            actions={[               
                {
                  icon: 'delete',
                  tooltip: 'Delete Record',
                  onClick: (event, rowData) => console.log(rowData)
                }
              ]}
            options={{
                selection:true,
                actionsColumnIndex: -1,
                headerStyle: {
                backgroundColor: '#01579b',
                color: '#FFF'                
            },            
            rowStyle: (rowData, index) => {
                if(index % 2){
                    return {backgroundColor: "#f2f2f2"}
                }
    }
         }}        
    />     
    </div>
    ); 
}
export default App;
