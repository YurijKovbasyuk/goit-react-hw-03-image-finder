import css from './index.module.css';

function Button(props) {
  const { onClick, isLoading } = props;
  return (
    <div>
      <button
        className={css.button}
        type="button"
        onClick={onClick}
        disabled={isLoading}
      >
        {isLoading ? 'Loadaig...' : 'Load more'}
      </button>
    </div>
  );
}

export default Button;
