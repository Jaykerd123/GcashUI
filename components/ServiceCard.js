import React from 'react';
import { Card, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function ServiceCard({ title }) {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text>{title}</Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '45%',
    margin: 5,
    alignItems: 'center'
  }
});