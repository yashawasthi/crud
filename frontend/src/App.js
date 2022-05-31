import React from "react"
import UserList from "./components/UserList";
import {BrowserRouter,Routes,Route} from "react-router-dom" 
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
function App() {
  return (
  <BrowserRouter>
  <div>
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="add" element={<AddUser />} />
      <Route path="edit/:id" element={<EditUser />} />
    </Routes>
  </div>
  </BrowserRouter>
  
  );
}

export default App;
