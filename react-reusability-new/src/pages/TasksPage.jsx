import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';

function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      try {
        const fakeTasks = [
          { id: 1, text: 'Buy groceries', description: 'pending' },
          { id: 2, text: 'Finish report', description: 'in-progress' },
          { id: 3, text: 'Call mom', description: 'completed' },
          { id: 4, text: 'Pay bills', description: 'pending' },
          { id: 5, text: 'Schedule meeting', description: 'pending' },
          { id: 6, text: 'Book dentist', description: 'completed' }
        ];
        setTasks(fakeTasks);
        setLoading(false);
      } catch (err) {
        setError('Failed to load tasks');
        setLoading(false);
      }
    }, 1000);
  }, []);

if (loading) {
  return <Loading size="md" message="Loading your tasks..." />;
}
  if (error) {
    return (
      <div className="p-6 m-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
        <p className="font-bold">Error</p>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-6">
        My Task List
      </h1>
      
      <ul className="space-y-3">
        {tasks.map(task => {
         
          
          return (
            <li 
              key={task.id}
              className={`p-4 border rounded-lg shadow-sm flex justify-between items-center ${
                'bg-white-50' 
              }`}
            >
              <span className={`text-lg  'text-gray-800'`}>
                {task.text}
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
               {task.description}
            </span>
            </li>
          );
        })}
      </ul>
      
    </div>
  );
}

export default TasksPage;