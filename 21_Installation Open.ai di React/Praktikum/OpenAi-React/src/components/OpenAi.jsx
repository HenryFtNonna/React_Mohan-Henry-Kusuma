import React from 'react';
import { useState } from 'react';

function OpenAi () {
    const [userInput, setUserInput] = useState(0)
    const [respond, setRespond] = useState()

    function handleChanges(data){
        console.log(data.target.value);
        setUserInput(data.target.value);
    }

    const API_KEY = '################################';

    async function handleClick(e) {
        console.log(userInput);

        e.preventDefault();

        const promptAwal =
        'kamu adalah seorang customer service bernama nazar, kamu galak suka marah-marah. jawab custemoer sesuai dengan kepribadian kamu';

        const APIBody = {
            model: 'gpt-4',
            messages: [ { role: 'user', content: `${promptAwal} + ${userInput}` } ]
        };

        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + API_KEY
                },
                body: JSON.stringify(APIBody)
            });

        if (!response.ok) {
            throw new Error('Failed to fetch');
        }

        const data = await response.json();
        console.log(data);
        setRespond(data.choices[0].message.content);

        } catch (error) {
        console.error('Error:', error);
        }
           
        } 


    return (
       <div className="flex justify-center items-center h-screen">
        <form className="max-w-sm">
            <div className="mb-5">
            <input type="text" id="name" className="mb-5 bg-gray-100 border border-gray-300 block md:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600" onChange={(data) => { handleChanges(data) }} />
            <button type="submit" className="btn btn-info" onClick={handleClick}>Submit</button>
            <p>{respond}</p>
            </div>
        </form>
        </div>
              
)
}
export default OpenAi


