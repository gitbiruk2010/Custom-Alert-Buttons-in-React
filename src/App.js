// importing react to enable jsx syntax and use react features
import React from 'react';
import './App.css';
// defining alertbutton component that accepts message and children as props
const AlertButton = ({ message, children }) => {
  // attaching an onclick event handler to the button to display an alert with the message prop when clicked
  return <button onClick={() => alert(message)}>{children}</button>;
};

// defining toolbar component that renders multiple alertbutton components
const Toolbar = () => {
  // rendering at least two alertbutton components with different message and children props
  return (
    <div className="toolbar"> {/* This should apply the styling */}
      <p>Click on each buttons to see the alert message.</p>
      <AlertButton message="Today is a great day!">Message 1</AlertButton>
      <AlertButton message="Great! you have found the second message!">Message 2</AlertButton>
      <AlertButton message="The world is full of good programmers!">Message 3</AlertButton>
      <AlertButton message="This is the last button!">Message 4</AlertButton>
    </div>
    
  );
};

// main app component that integrates the toolbar with alertbutton components
function App() {
  // rendering the toolbar component within the app's return statement, showcasing the component structure and dynamic behavior
  return (
    <div className="App">
      <Toolbar />
    </div>
  );
}

// exporting app component to make it available for use in other parts of the application, like index.js
export default App;
