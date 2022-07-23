import Calendar from "./Components/Calendar";
import './UI/App.css';

// Initial Array
var descriptionArray = [
  {desc:'1v1', 'startTime':'09:00 am', 'endTime': '09:30 am'},
  {desc:'2v2', 'startTime':'08:00 pm', 'endTime': '10:00 pm'},
  {desc:'3v3', 'startTime':'09:35 pm', 'endTime': '10:45 pm'},
  {desc:'hehe', 'startTime':'09:10 am', 'endTime': '10:30 am'},
  {desc:'haa', 'startTime':'10:00 am', 'endTime': '11:00 am'},
];

var descriptionArray2 = [
  {desc:'1v1', 'startTime':'09:00 am', 'endTime': '10:30 am'},
  {desc:'2v2', 'startTime':'08:00 pm', 'endTime': '10:00 pm'},
  {desc:'3v3', 'startTime':'09:35 pm', 'endTime': '10:45 pm'},
  {desc:'hehe', 'startTime':'09:10 am', 'endTime': '10:30 am'},
  {desc:'haa', 'startTime':'10:00 am', 'endTime': '11:00 am'},
];

function App() {
  return (
    <div className='App'>
      <Calendar descriptionArray={descriptionArray} />
      {/* <Calendar descriptionArray={descriptionArray2} /> */}
    </div>
  );
}

export default App;
