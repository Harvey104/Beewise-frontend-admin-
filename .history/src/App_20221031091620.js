import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
