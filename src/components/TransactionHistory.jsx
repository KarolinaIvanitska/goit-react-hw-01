import TransactionHistoryItem from "./TransactionHistoryItem";

const TransactionHistory = ({ items }) => {
  return (
    <div>
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
