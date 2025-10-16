
import { quickReplies } from '../data/botData';

const QuickReplies = ({ onQuickReply, disabled }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-3 px-1">
      {quickReplies.map((reply, index) => (
        <button
          key={index}
          onClick={() => onQuickReply(reply)}
          disabled={disabled}
          className="bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs px-3 py-2 rounded-full transition-all duration-200 border border-blue-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-sm"
        >
          {reply}
        </button>
      ))}
    </div>
  );
};

export default QuickReplies;