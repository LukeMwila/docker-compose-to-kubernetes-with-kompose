import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [toDoItems, updateToDoItems] = React.useState([]);

  React.useEffect(() => {
    const getToDoItems = async () => {
      const response = await axios.get(
        `${process.env.BACKEND_SERVICE_HOST}:${process.env.BACKEND_SERVICE_PORT}/v1/to-do`
      );

      // const items = await response.json();
      const items = await response.data;
      if (items && Array.isArray(items) && items.length) {
        updateToDoItems(items);
      }
    };
    getToDoItems();
  }, []);

  return (
    <div>
      {toDoItems && toDoItems.length
        ? toDoItems.map((item, i) => {
            return (
              <div key={i}>
                {`${item.item_name}`}
                <br />
              </div>
            );
          })
        : 'No items to be done'}
    </div>
  );
}

export default App;
