import { useQuiz } from "../contexts/QuizContext";

function StartScreen() {
    const { numQuestions, dispatch } = useQuiz();
    return (
        <div className="start">
            <h2>Welcome to Amazing Quiz!</h2>
            <h3>{numQuestions} question to test your React Mastery</h3>
            <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: "start" })}
            >
                Let's start
            </button>
        </div>
    );
}

export default StartScreen;
