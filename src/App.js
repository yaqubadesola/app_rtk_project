import './App.css';
import Counter from './app/features/counter/components/Counter';
import UsersList from './app/features/user/components/UsersList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <Counter/> */}
       <UsersList/>
      </header>
    </div>
  );
}

export default App;
