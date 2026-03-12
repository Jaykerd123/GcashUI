import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

import Header from '../components/Header';
import ActionButton from '../components/ActionButton';
import ServiceCard from '../components/ServiceCard';
import TransactionItem from '../components/TransactionItem';

export default function GcashHome() {
  return (
    <ScrollView>

      <Header />

      <View style={styles.container}>

        <Card style={styles.balanceCard}>
          <Card.Content>
            <Text variant="titleMedium">Available Balance</Text>
            <Text variant="headlineMedium">₱12,450.00</Text>
          </Card.Content>
        </Card>

        <Text style={styles.sectionTitle}>Quick Actions</Text>

        <View style={styles.actions}>
          <ActionButton icon="send" label="Send Money" />
          <ActionButton icon="file-document" label="Pay Bills" />
        </View>

        <View style={styles.actions}>
          <ActionButton icon="cellphone" label="Buy Load" />
          <ActionButton icon="bank" label="Bank Transfer" />
        </View>

        <Text style={styles.sectionTitle}>Services</Text>

        <View style={styles.services}>
          <ServiceCard title="Cash In" />
          <ServiceCard title="GSave" />
          <ServiceCard title="GLife" />
          <ServiceCard title="GForest" />
        </View>

        <Text style={styles.sectionTitle}>Recent Activity</Text>

        <TransactionItem
          title="Sent Money"
          amount="- ₱200"
        />

        <TransactionItem
          title="Bought Load"
          amount="- ₱50"
        />

        <TransactionItem
          title="Received Money"
          amount="+ ₱500"
        />

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    padding: 15
  },

  balanceCard: {
    marginBottom: 20
  },

  sectionTitle: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  services: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }

});