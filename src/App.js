import './App.css';
import Counter from './app/features/counter/components/Counter';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './app/common/Navbar';
import NoPage from './app/common/Nopage';
import {NewUser, DeleteUser, UpdateUser, UsersList} from "./app/features/user/components"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<UsersList />} />
          <Route path="new" element={<NewUser/>} />
          <Route path="updateuser/:id/edit" element={<UpdateUser/>} />
          <Route path="deleteuser/:id" element={<DeleteUser/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
