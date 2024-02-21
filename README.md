# Custom-Alert-Buttons-in-React
Introduction

This React application demonstrates a simple yet dynamic interaction model using components and props. It features a Toolbar component populated with AlertButton components. Each button, when clicked, displays a unique alert message, showcasing the use of props and event handling in React.
Prerequisites

Before you begin, ensure you have the following installed:

    Node.js (v12.0.0 or higher recommended)
    npm (comes with Node.js)

Installation

To set up the project on your local machine, follow these steps:

    Clone the repository: 
    or download the source code.
    Navigate to the project directory in your terminal.
    Run npm install to install all the required dependencies.

Running the Application

After installing the dependencies, you can start the application using the following command:
Powershell
npm start

This command runs the app in development mode. Open http://localhost:3000 to view it in your browser. The page will reload if you make edits, and you will also see any lint errors in the console.
Viewing the Application

Upon running the application, you will see a toolbar with four buttons. Each button is labeled differently and, when clicked, will display an alert with a unique message. This interaction demonstrates the application's dynamic behavior through the use of React components and props.
Features Implemented

    AlertButton Component: A reusable button component that takes a message and children as props. The message prop specifies the text to display in an alert upon clicking the button, while children determine the button's visible text.
    Toolbar Component: This component renders multiple AlertButton components, each configured with unique messages and labels.
    Dynamic Interaction: Demonstrates how components can interact dynamically through props and event handling in React.
    Responsive Design: The application is styled to be visually appealing, including a highlighted toolbar, spaced buttons, and a responsive layout that adjusts to screen size.
    User Feedback: Provides immediate feedback through alert messages, enhancing the user interaction experience.

Contributing

Feel free to fork the repository and submit pull requests to contribute to this project.
