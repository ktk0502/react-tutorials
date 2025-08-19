import './App.css';
import Form from './components/Form';
import { useQuery } from '@tanstack/react-query';

function App() {
  const {data} = useQuery({
    queryKey: ['todos'],
          queryFn: async () => {
        const response = await fetch('http://localhost:8000/todo');
        return response.json();
      }
  });
  console.log('data:',data);
  return (
    <div className="App">
      <Form/>
              <ul>
          {data && data.data && data.data.map((todo, index) => (
            <li key={todo.createdAt}>{todo.title}</li>
          ))}
        </ul>
    </div>
  );
}

export default App;
