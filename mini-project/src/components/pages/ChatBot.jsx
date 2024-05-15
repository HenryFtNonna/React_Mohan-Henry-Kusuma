import React, { useState } from 'react';
import chatbotAvatar from './images/spongebob.png'; 
import userAvatar from './images/spongebobAsking.png'; 

export default function ChatBot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { text: input, user: 'User', time: new Date().toLocaleTimeString() };
        setMessages([...messages, userMessage]);
        setInput('');
        setIsLoading(true);

        const promptAwal = 'kamu adalah seorang chatbot dari DUITTT BOT, dan kamu akan membantu para user untuk mengelola keuangan mereka, user akan bertanya kepada kamu tentang keuangan dan kamu akan menjawabnya, berikut fitur-fitur dari DUITTT: Dashboard: untuk menampilkan data keuangan dari user, Tambah Data: untuk menambahkan data dari keuangan user (crud), Rekap: untuk rekapitulasi keuangan user, Search: untuk mencari data dari keuangan user berdasarkan kata kunci, dan Chat Bot: untuk menjawab pertanyaan dari user';

        const APIBody = {
            model: 'gpt-4',
            messages: [{ role: 'user', content: promptAwal + ' ' + input }]
        };

        try {
            const response = await fetch(import.meta.env.VITE_APP_OPENAI_API_URL, {
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
            const botMessage = { text: data.choices[0].message.content, user: 'DUITTT BOT', time: new Date().toLocaleTimeString() };
            setMessages(prevMessages => [...prevMessages, botMessage]);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-6 bg-base-200 min-h-screen flex flex-col justify-between chat-container">
            <div className="user-p flex items-center justify-center mb-4">
                <img src={chatbotAvatar} alt="logo" className="w-2 h-13 mr-2" />
                <h1 className="text-xl font-bold">DUITTT BOT</h1>
            </div>
            <div className="flex-1 overflow-auto mb-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`chat ${msg.user === 'User' ? 'chat-end' : 'chat-start'}`}>
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt={`${msg.user} avatar`}
                                    src={msg.user === 'User' ? userAvatar : chatbotAvatar}
                                />
                            </div>
                        </div>
                        <div className="chat-header">
                            {msg.user}
                            <time className="text-xs opacity-50 ml-2">{msg.time}</time>
                        </div>
                        <div className="chat-bubble">{msg.text}</div>
                    </div>
                ))}
                {isLoading && <div className="text-center">Bot is typing...</div>}
            </div>
            <form className="flex" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    className="input input-bordered flex-1 mr-2"
                    placeholder="Type your message here..."
                />
                <button type="submit" className="btn btn-primary">Send</button>
            </form>
        </div>
    );
}
