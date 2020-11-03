import React from 'react';


const Button = ({ answer }) => (
    <button className='bg-white p-4 text-purple-800 font-semibold rounded shadow'>{answer}</button>
)


const Questionaire = ({handleAnswer, data: {question, correct_answer, incorrect_answers}}) => {
    const shuffledAnswers = [correct_answer, ...incorrect_answers].sort( () => Math.random() - 0.5);

    return (
        <div>    
            <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
                <h2 className='text-2xl' dangerouslySetInnerHTML={{ __html: question }}>
                </h2>
            </div>

            <div className='grid grid-cols-2 gap-6 mt-6'>
                <Button className={correct_answer === shuffledAnswers[0] ? 'bg-purple-300' : ''} onClick={() => handleAnswer(shuffledAnswers[0])} answer={shuffledAnswers[0]}/>
                <Button className={correct_answer === shuffledAnswers[1] ? 'bg-purple-300' : ''} onClick={() => handleAnswer(shuffledAnswers[1])} answer={shuffledAnswers[1]}/>
                <Button className={correct_answer === shuffledAnswers[2] ? 'bg-purple-300' : ''} onClick={() => handleAnswer(shuffledAnswers[2])} answer={shuffledAnswers[2]}/>
                <Button className={correct_answer === shuffledAnswers[3] ? 'bg-purple-300' : ''} onClick={() => handleAnswer(shuffledAnswers[3])} answer={shuffledAnswers[3]}/>
            </div>
        </div>
    );
};



export default Questionaire 