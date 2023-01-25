import { useNavigate } from 'react-router-dom';

const ChatBody = ({ messages }) => {
    const navigate = useNavigate();

    const handleLeaveChat = () => {
        localStorage.removeItem('userName');
        navigate('/');
        window.location.reload();
    };

    return (
        <>
            <header>
                <p>Time to chat!</p>
                <button onClick={handleLeaveChat}>
                    Exit Chat
                </button>
            </header>

            {/*This shows messages sent from you*/}
            <div>
                {messages.map((message) =>
                    message.name === localStorage.getItem('userName') ? (
                        <div key={message.id}>
                            <p>You</p>
                            <div>
                                <p>{message.text}</p>
                            </div>
                        </div>
                    ) : (
                        <div key={message.id}>
                            <p>{message.name}</p>
                            <div>
                                <p>{message.text}</p>
                            </div>
                        </div>
                    )
                )}
                {/*This is triggered when a user is typing*/}
                <div>
                    <p>Someone is typing...</p>
                </div>
            </div>
        </>
    );
};

export default ChatBody;
