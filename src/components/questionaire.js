import React from 'react';

const Questionaire = ({
    handleAnswer, 
    showAnswers,
    handleNextQuestion,
    data: {question, correct_answer, incorrect_answers}}) => {
    const shuffledAnswers = [correct_answer, ...incorrect_answers].sort( () => Math.random() - 0.5);

    return (
        <div className='flex flex-col'>    
            <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
                <h2 className='text-2xl' dangerouslySetInnerHTML={{ __html: question }}>
                </h2>
            </div>

            <div className='grid grid-cols-2 gap-6 mt-6'>
                {shuffledAnswers.map( (answer) => {
                    const textColor = showAnswers 
                        ? answer === correct_answer 
                            ? 'text-green-500' 
                            : 'text-red-500' 
                            : 'text-purple-700';

                    return (
                    <button className={`${textColor} bg-white p-4 font-semibold rounded shadow`}
                        onClick={() => handleAnswer(answer)} dangerouslySetInnerHTML={{ __html: answer }}>
                    </button>  
                    )
                }
            )}
            </div>

            {showAnswers && (
                <button onClick={handleNextQuestion} className="  bg-purple-800 text-white p-4 font-semibold rounded shadow my-6"> Next Question</button>
            )}
        </div>
    );
};



export default Questionaire 