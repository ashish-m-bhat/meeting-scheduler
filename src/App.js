import { Redirect, Route, Switch } from "react-router";
import MeetingRoom from "./Components/MeetingRoom";
import './UI/App.css';

/*
  We have multiple meeting rooms. Each room has a roomId and each page is dedicated to the meeting room with the id
  For Ex: /room2 is for Meeting room room2
  As of now, the homepage is for room1
*/

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact>
          <MeetingRoom />
        </Route>
        <Route path='/room1'>
          <Redirect to='/' />
        </Route>
        <Route path='/room2' exact>
          <MeetingRoom />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
