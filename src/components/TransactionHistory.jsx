import TransactionHistoryItem from "./TransactionHistoryItem";
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <div className={css.container_table}>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <TransactionHistoryItem key={item.id} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
