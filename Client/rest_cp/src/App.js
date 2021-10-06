import { Route, Switch } from "react-router";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AddUser from "./Pages/AddUser";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Users from "./Pages/Users";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/userList" component={Users} />
        <Route path={["/addUser", "/editUser/:_id"]} component={AddUser} />
        <Route path="/*" component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
