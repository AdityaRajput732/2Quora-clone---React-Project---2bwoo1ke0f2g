import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuesAnsPage from "./Components/Q&Alist/QuesAnsPage";
// import Header from "./Components/Header/Header";
import LoginPage from "./Components/LoginPage/LoginPage";
import HomePage from './Components/HomePage'
import AddQues from "./Components/AddQuesAns/AddQues";
import Addans from './Components/AddQuesAns/Addans'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/addans" element={<Addans />} />
          <Route path="/addques" element={<AddQues />} />
        </Routes>
      </BrowserRouter>
      {/* <Header /> */}
      {/* <LoginPage /> */}
      {/* <QuesAnsPage /> */}
    </div>
  );
}

export default App;
