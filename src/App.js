import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookTicket from "./Component/BookTicket";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookTicket/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
