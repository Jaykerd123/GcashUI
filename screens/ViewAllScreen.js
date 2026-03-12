import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const ServiceIcon = ({ icon, label, isNew, hasCheck }) => (
  <TouchableOpacity style={styles.serviceItem}>
    <View style={styles.iconContainer}>
       <Icon name={icon} size={32} color="#005CEE" />
       {isNew && <View style={styles.newBadge}><Text style={styles.newBadgeText}>NEW</Text></View>}
       {hasCheck && <View style={styles.checkBadge}><Icon name="check-circle" size={14} color="#005CEE" /></View>}
    </View>
    <Text style={styles.serviceLabel} numberOfLines={2}>{label}</Text>
  </TouchableOpacity>
);

export default function ViewAllScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
              <SafeAreaView style={styles.headerSafeArea}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Icon name="arrow-left" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>View All</Text>
                <View style={{width: 24}} />
              </SafeAreaView>
            </View>

            <ScrollView style={styles.scrollView}>
                
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Pay</Text>
                    <View style={styles.grid}>
                        <ServiceIcon icon="cellphone" label="Mobile Load" />
                        <ServiceIcon icon="wifi" label="Broadband Load" />
                        <ServiceIcon icon="gamepad-variant-outline" label="Non Telco Load" isNew />
                        <ServiceIcon icon="file-document-outline" label="Bills" hasCheck />

                        <ServiceIcon icon="cart-outline" label="Online" />
                        <ServiceIcon icon="bank-outline" label="Government" />
                        <ServiceIcon icon="train-car" label="Transportation" />
                    </View>
                </View>

                <View style={styles.divider} />

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Borrow</Text>
                    <View style={styles.grid}>
                        <ServiceIcon icon="hand-coin-outline" label="Borrow" />
                    </View>
                </View>

                <View style={styles.divider} />

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Grow</Text>
                    <View style={styles.grid}>
                        <ServiceIcon icon="piggy-bank-outline" label="GSave" />
                        <ServiceIcon icon="shield-check-outline" label="GInsure" />
                        <ServiceIcon icon="currency-usd-circle-outline" label="GFunds" />
                        <ServiceIcon icon="finance" label="GStocks Global" />

                        <ServiceIcon icon="chart-line" label="GStocks PH" />
                    </View>
                </View>

                <View style={styles.divider} />

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Enjoy</Text>
                    <View style={styles.grid}>
                        <ServiceIcon icon="gamepad" label="GLife" isNew />
                        <ServiceIcon icon="gift-outline" label="A+ Rewards" isNew />
                    </View>
                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        backgroundColor: '#005CEE',
        paddingTop: Platform.OS === 'android' ? 35 : 0,
    },
    headerSafeArea: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    backButton: {
        padding: 5,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    scrollView: {
        flex: 1,
    },
    section: {
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#111',
        marginBottom: 15,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    serviceItem: {
        width: '25%', // 4 columns
        alignItems: 'center',
        marginBottom: 25,
    },
    iconContainer: {
        position: 'relative',
        marginBottom: 8,
    },
    serviceLabel: {
        fontSize: 11,
        color: '#333',
        textAlign: 'center',
        paddingHorizontal: 5,
    },
    newBadge: {
        position: 'absolute',
        top: -5,
        right: -15,
        backgroundColor: '#ff3b3b',
        borderRadius: 10,
        paddingHorizontal: 4,
        paddingVertical: 1,
    },
    newBadgeText: {
        color: '#fff',
        fontSize: 7,
        fontWeight: 'bold',
    },
    checkBadge: {
        position: 'absolute',
        top: -5,
        right: -10,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    divider: {
        height: 1,
        backgroundColor: '#f0f0f0',
        marginHorizontal: 20,
    }
});
