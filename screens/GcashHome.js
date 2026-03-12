import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Image, SafeAreaView, Dimensions } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const ActionButton = ({ icon, label, isNew, onPress, color = '#005CEE' }) => (
  <TouchableOpacity style={styles.actionButton} onPress={onPress}>
    <Icon name={icon} size={32} color={color} />
    <Text style={styles.actionLabel} numberOfLines={1}>{label}</Text>
    {isNew && <View style={styles.newBadge}><Text style={styles.newBadgeText}>NEW</Text></View>}
  </TouchableOpacity>
);

export default function GcashHome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView bounces={false} style={styles.scrollView}>
        
        {/* Header Section */}
        <View style={styles.header}>
          <SafeAreaView>
            <View style={styles.headerTop}>
              <View style={styles.profileSection}>
                <Image source={{ uri: 'https://i.pravatar.cc/100' }} style={styles.profilePic} />
                <View style={styles.greeting}>
                  <Text style={styles.greetingText}>Hello!</Text>
                </View>
              </View>
              <View style={styles.helpButton}>
                <Text style={styles.helpText}>HELP</Text>
              </View>
            </View>
            
            <View style={styles.balanceSection}>
              <View style={styles.balanceRow}>
                <Text style={styles.balanceLabel}>AVAILABLE BALANCE</Text>
                <Icon name="eye-off-outline" size={16} color="#fff" style={{marginLeft: 5}} />
              </View>
              <View style={styles.balanceAmountRow}>
                <Text style={styles.currencySymbol}>₱</Text>
                <Text style={styles.dots}> •••••</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.cashInButton}>
              <Text style={styles.cashInText}>+ Cash In</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </View>

        {/* Content Section overlapping header */}
        <View style={styles.contentContainer}>
            <View style={styles.gridContainer}>
              <View style={styles.gridRow}>
                <ActionButton icon="send" label="Send" onPress={() => navigation.navigate('Send')} />
                <ActionButton icon="cellphone" label="Load" />
                <ActionButton icon="bank" label="Transfer" />
                <ActionButton icon="file-document-outline" label="Bills" />
              </View>
              <View style={styles.gridRow}>
                <ActionButton icon="hand-coin-outline" label="Borrow" />
                <ActionButton icon="piggy-bank-outline" label="GSave" />
                <ActionButton icon="shield-check-outline" label="GInsure" />
                <ActionButton icon="sprout-outline" label="GInvest" />
              </View>
              <View style={styles.gridRow}>
                <ActionButton icon="store" label="GLife" color="#e63946" />
                <ActionButton icon="gift-outline" label="A+ Rewards" color="#d10020" />
                <ActionButton icon="pine-tree" label="GForest" color="#2a9d8f" />
                <ActionButton icon="dots-horizontal" label="View All" onPress={() => navigation.navigate('ViewAll')} />
              </View>
            </View>

            {/* Mega Deals */}
            <View style={styles.megaDealsContainer}>
               <Text style={styles.sectionTitle}>Mega Deals</Text>
               <View style={styles.dealCard}>
                 <View style={styles.dealContent}>
                    <Text style={styles.dealTitle}>Get 6%</Text>
                    <Text style={styles.dealSubtitle}>p.a. interest rate</Text>
                    <Text style={styles.dealDesc}>on your existing balance</Text>
                 </View>
                 <Image source={{ uri: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=500&q=80' }} style={styles.dealImage} />
               </View>
            </View>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f6fa' },
  scrollView: { flex: 1 },
  header: {
    backgroundColor: '#005CEE',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 70,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  profileSection: { flexDirection: 'row', alignItems: 'center' },
  profilePic: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: '#fff' },
  greeting: { marginLeft: 10 },
  greetingText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  helpButton: { backgroundColor: '#0046b8', paddingHorizontal: 15, paddingVertical: 5, borderRadius: 15 },
  helpText: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
  balanceSection: { marginTop: 25 },
  balanceRow: { flexDirection: 'row', alignItems: 'center' },
  balanceLabel: { color: '#fff', fontSize: 12, opacity: 0.8 },
  balanceAmountRow: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  currencySymbol: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  dots: { color: '#fff', fontSize: 28, letterSpacing: 2 },
  cashInButton: { position: 'absolute', right: 0, bottom: -15, backgroundColor: '#fff', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 25, shadowColor: '#000', shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.2, shadowRadius: 3, elevation: 5 },
  cashInText: { color: '#005CEE', fontWeight: 'bold', fontSize: 14 },
  
  contentContainer: {
    marginTop: -40,
    paddingHorizontal: 20,
  },
  gridContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    paddingTop: 20,
    shadowColor: '#000', shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.1, shadowRadius: 5, elevation: 5,
  },
  gridRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  actionButton: { width: '22%', alignItems: 'center' },
  actionLabel: { fontSize: 11, color: '#444', marginTop: 5, textAlign: 'center' },
  newBadge: { position: 'absolute', top: -5, right: 0, backgroundColor: 'red', borderRadius: 10, paddingHorizontal: 4, paddingVertical: 1 },
  newBadgeText: { color: '#fff', fontSize: 8, fontWeight: 'bold' },

  megaDealsContainer: { marginTop: 25, marginBottom: 30 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#111', marginBottom: 15 },
  dealCard: { backgroundColor: '#005CEE', borderRadius: 15, overflow: 'hidden', flexDirection: 'row', height: 130 },
  dealContent: { padding: 20, flex: 1, justifyContent: 'center' },
  dealTitle: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
  dealSubtitle: { color: '#fff', fontSize: 13, fontWeight: 'bold', marginTop: 2 },
  dealDesc: { color: '#fff', fontSize: 10, opacity: 0.9, marginTop: 5 },
  dealImage: { width: 130, height: '100%' },
});