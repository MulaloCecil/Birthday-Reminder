import React from 'react';
import { View, Text, FlatList, StyleSheet  } from 'react-native';

function ReminderList({ reminders }) {
  return (
    <View style={styles.container}>
      <Text style={styles.reminderText}>Reminders:</Text>
      <FlatList
        data={reminders}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.reminderItem}>
            <Text style={styles.reminderTitle}>Title: {item.title}</Text>
            <Text style={styles.reminderDescription}>Description: {item.description}</Text>
            <Text style={styles.reminderDateTime}>Date: {item.date.toString()}</Text>
             <Text style={styles.reminderDateTime}>Time: {item.time.toString()}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  reminderText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom:10,
  },
  reminderItem: {
    marginBottom: 20, 
  },
  reminderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reminderDescription: {
    fontSize: 14,
  },
  reminderDateTime: {
    fontSize: 14,
  },
});

export default ReminderList;
