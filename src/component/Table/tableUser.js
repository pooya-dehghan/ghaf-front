import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Room', field: 'room' },
      { title: 'Role', field: 'role' },
    ],

    data: [
      { room: 'room1', role:'teacher' },
      { room: 'room2', role:'teacher' },
      { room: 'room3', role:'student' },
      { room: 'room4', role:'teacher' },
      { room: 'room5', role:'student' },
      { room: 'room6', role:'teacher' },

    ],
  });

  return (
    <MaterialTable
      title="User Table"
      columns={state.columns}
      data={state.data}
      actions={[
          {
              icon: 'school',
              tooltip: 'Go to this class',
              onClick: (event,rowData) => {
                  alert("you clicked on " + rowData.name)
                  console.log("this is event object: ",event)
              }
          }
      ]}
    />
  );
}
