import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TimeTableScreenProps {}

const TimetableScreen = (props: TimeTableScreenProps) => {
  // Create an array with 31 days
  const days = [...Array(31).keys()].map(day => day + 1);

  // Split the days into an array of rows
  const rows = [];
  let row = [];
  for (let i = 0; i < days.length; i++) {
    row.push(days[i]);
    if ((i + 1) % 7 === 0 || i === days.length - 1) {
      rows.push(row);
      row = [];
    }
  }

  return (
    <>
      <Text style = {{fontSize: 30 , color: 'red', marginLeft: 160 }}>April</Text>
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          {/* Render the squares */}
          {rows.map((row, index) => (
            <View key={index} style={styles.squareRow}>
              {row.map(day => (
                <View key={day} style={styles.square} />
              ))}
            </View>
          ))}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  rowContainer: {
    flexDirection: 'column',
    marginTop: 20,
  },
  squareRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  square: {
    width: 50,
    height: 50,
    marginRight: 10,
    backgroundColor: 'gray',
  },
});

export default TimetableScreen;