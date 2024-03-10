# My Amazing Quiz App

this app is a Quiz App created in React,
this app can do the following :

-   Question and Answer for Quiz
-   Interactive UI
-   Loading the question from Fake API data/questions.json
-   Handling the Loading, Error and Ready status
-   Start new Quiz
-   Displaying Questions
-   Handing new Answers
-   Moving to the Next Question
-   Displaying Progress bar based on current index out of the question length and score points
-   Finishing the Quiz
-   Restarting the Quiz
-   Adding the Countdown timer

## Future enhancement:

-   Random Questions
-   start screen
    -   allow the user to only select a certain number of questions
    -   filter the difficulty of questions
    -   upload the highscore to the fake api, so that if user reload that could fetch the highscore and place to the state to not lose the value.
    -   store the answer in array answer instead of null.

## Other Info:

Node version : v18.16.0

In the project directory, you can run:

## Other Tools & Library

for Fake API data/cities.json

```node
npm i json-server

# add this line under the scripts under package.json
"scripts": {
    "...",
    "server": "json-server --watch data/cities.json --port 8000"
},

http://localhost:8000/questions
```

## React Features:

-   useReducer, useEffect

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
