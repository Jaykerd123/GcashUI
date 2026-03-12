import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const SendOption = ({ icon, label, isNew, isBadgeRight, isImage }) => (
  <TouchableOpacity style={styles.optionCard}>
    <Icon name={icon} size={36} color="#005CEE" />
    <Text style={styles.optionLabel}>{label}</Text>
    {isNew && (
      <View style={isBadgeRight ? styles.newBadgeRight : styles.newBadge}>
        <Text style={styles.newBadgeText}>NEW</Text>
      </View>
    )}
  </TouchableOpacity>
);

export default function SendScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
              <SafeAreaView style={styles.headerSafeArea}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Icon name="arrow-left" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Send</Text>
                <View style={{width: 24}} /> {/* Spacer for centering */}
              </SafeAreaView>
            </View>

            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
                
                <Text style={styles.sectionTitle}>Send money to any GCash account</Text>
                <View style={styles.gridRow}>
                    <SendOption icon="send" label="Express Send" />
                    <SendOption icon="qrcode-scan" label="Send via QR" isNew />
                </View>

                <Text style={styles.sectionTitle}>Send money through our partners</Text>
                <View style={styles.gridRow}>
                    <SendOption icon="bank" label="Transfer" />
                    <SendOption icon="store" label="GCash Padala" isNew />
                </View>

                <Text style={styles.sectionTitle}>Request money from any GCash account</Text>
                <View style={styles.gridRow}>
                    <SendOption icon="qrcode" label="Generate QR" isNew />
                    <SendOption icon="arrow-down-circle-outline" label="Request Money" />
                </View>
                <View style={[styles.gridRow, { justifyContent: 'flex-start' }]}>
                    <View style={styles.optionWrapper}>
                       <SendOption icon="receipt" label="KKB" />
                    </View>
                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f6fa'
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
    scrollContent: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#003366',
        marginTop: 20,
        marginBottom: 15,
    },
    gridRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    optionWrapper: {
        width: '48%',
    },
    optionCard: {
        width: '48%',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        borderWidth: 1,
        borderColor: '#f0f0f0'
    },
    optionLabel: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10,
        textAlign: 'center'
    },
    newBadge: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#ff3b3b',
        borderRadius: 10,
        paddingHorizontal: 6,
        paddingVertical: 2,
    },
    newBadgeRight: {
        position: 'absolute',
        top: 10,
        right: -10, // if icon is cut off
    },
    newBadgeText: {
        color: '#fff',
        fontSize: 8,
        fontWeight: 'bold',
    }
});
