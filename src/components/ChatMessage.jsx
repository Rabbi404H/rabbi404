import React from 'react';

const ChatMessage = ({ message, isUser }) => {
  // Format message with line breaks
  const formattedMessage = message.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      {index < message.split('\n').length - 1 && <br />}
    </span>
  ));

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
          isUser
            ? 'bg-blue-500 text-white rounded-br-none'
            : 'bg-gray-100 text-gray-800 rounded-bl-none border border-gray-200'
        } shadow-sm`}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{formattedMessage}</p>
        <div className={`text-xs mt-1 ${isUser ? 'text-blue-100' : 'text-gray-500'}`}>
          {isUser ? 'You' : 'Bot'}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;