import css from './index.module.css';

function Searchbar() {
  return (
    <div>
      Searchbar
      <header className={css.searchbar}>
        <form className={css.searchForm}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </div>
  );
}

export default Searchbar;
