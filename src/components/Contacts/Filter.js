import styles from './styles.module.scss';

const Filter = ({ value, onChange }) => {
  return (
    <form className={styles.form}>
      <label className={styles.label}>
        Find contact by name
        <input type="text" name="filter" value={value} onChange={onChange} />
      </label>
    </form>
  );
};

export default Filter;
