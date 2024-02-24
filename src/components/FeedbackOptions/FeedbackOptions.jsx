import style from './Feedback.Options.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className="options_list">
      {options.map((option, idx) => (
        <li className={style['options-list']} key={idx}>
          <button
            className={style.feedback_butt}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
