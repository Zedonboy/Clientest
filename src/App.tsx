import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormCreate from "./dashboard_screens/FormCreate";
import DashboardHome from "./dashboard_screens/home";
import Dashboard from "./screens/dasshbaord";
import Login from "./screens/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route index element={<DashboardHome/>}></Route>
          <Route path="form-create" element={<FormCreate/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
