import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Clean room',
        day: 'August 8th at 3.00pm',
        reminder: true,
    },
    {
        id:2,
        text: 'Ride bike',
        day: 'August 8th at 5.00pm',
        reminder: true,
    },
    {
        id:1,
        text: 'Buy food',
        day: 'August 8th at 3.00pm',
        reminder: false,
    },
])

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
