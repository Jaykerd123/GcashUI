import React from 'react';
import { List } from 'react-native-paper';

export default function TransactionItem({ title, amount }) {
  return (
    <List.Item
      title={title}
      description={amount}
      left={(props) => <List.Icon {...props} icon="cash" />}
    />
  );
}