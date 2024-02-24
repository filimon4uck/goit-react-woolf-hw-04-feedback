import style from './Statistic.module.css';
const Statistics = ({ entries, total, positivePersentage }) => {
  return (
    <div className={style.statistic_field}>
      <ul className={style.stat_list}>
        {entries.map((entry, idx) => (
          <li className={style.item} key={idx}>
            {entry[0]} : {entry[1]}
          </li>
        ))}
      </ul>
      <div className={style.summ}>
        <span>Total: {total}</span>
        <span>Positive persentage: {positivePersentage}%</span>
      </div>
    </div>
  );
};
export default Statistics;
