import css from './index.module.css';

function Button() {
  return (
    <div>
      <button className={css.button} type="button">
        Load more
      </button>
    </div>
  );
}

export default Button;
