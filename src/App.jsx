// import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./Components/UserAuth/UserContext";

import Auth from "./Pages/Auth";
import Index from "./Pages";
import New from "./Pages/New";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/signup" element={<Auth />} />
            <Route path="/users/:userId/posts" element={<Index />} />
            <Route path="/users/:userId/posts/newpost" element={<New />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
