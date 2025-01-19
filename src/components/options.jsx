const Options = ({ options, onLeaveFeedback, total}) => {
  return (
    <ul className="options">
      {options.map(option => (
        <li key={option}>
          <button type="button" onClick={() => onLeaveFeedback(option)}>
            {option.charAt(0).toUpperCase() + option.slice(1)} 
          </button>
        </li>
      ))}
      {total > 0 && (
        <li>
          <button type="button" onClick={() => onLeaveFeedback("reset")}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
