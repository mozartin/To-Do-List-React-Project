To-Do List React Project

This project is a simple To-Do List application built using React and React Bootstrap. It uses the Fetch API to interact with a RESTful JSON API running on port 3100 using JSON-Server. The project allows users to add new to-dos, delete existing ones, and mark them as completed.

Getting Started
To get started, clone this repository and navigate to the project directory. Then, run the following commands to install the dependencies and start the development server:

npm install

npm start

This will start the development server on port 3000.

Note: The JSON server should also be running on port 3100. You can start it by running the following command:

json-server --watch db.json --port 3100

Features
The To-Do List application has the following features:

1. Add new to-dos: Users can add new to-dos by entering a description in the form provided. There is also validation for the field.
2. Delete existing to-dos: Users can delete existing to-dos by clicking on the delete icon next to each to-do.
3. Mark to-dos as completed: Users can mark to-dos as completed by clicking on the checkbox next to each to-do.

Built With
The To-Do List application was built using the following technologies:

React
React Bootstrap
Fetch API
JSON-Server

Author
This project was developed by Olena Beliavska.
