import { Button, StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { Link, useNavigation, useRouter, useSearchParams } from 'expo-router';
import React, { useState } from 'react';


const subjectOptions = ['computer graphics', 'linear algebra', 'foundations of computation', 'software project'];


type SubjectData = {
  subject: string;
  credits: string;
  percentage: string;
}
export default function TabTwoScreen() {
  const [data, setData] = useState<SubjectData[]>([]);
  const [subject, setSubject] = useState('');
  const [credits, setCredits] = useState('');
  const [percentage, setPercentage] = useState('');

  const handleAddData = () => {
    if (data.length >= 4) {
      alert('You can only add up to 4 entries');
      return;
    }
    const newData = { subject, credits, percentage };
    setData([...data, newData]);
    setSubject('');
    setCredits('');
    setPercentage('');
  };

  return (
    <View>
      <View>
        <Text>Subject:</Text>
        <TextInput
          onChangeText={(value) => setSubject(value)}
          value={subject}
           style={{ backgroundColor: '#f5f5f5' }} 
        />
      </View>
      <View>
        <Text>Credits:</Text>
        <TextInput
          onChangeText={(value) => setCredits(value)}
          value={credits}
          keyboardType='numeric'
           style={{ backgroundColor: '#f5f5f5' }} 
        />
      </View>
      <View>
        <Text>Percentage:</Text>
        <TextInput
          onChangeText={(value) => setPercentage(value)}
          value={percentage}
          keyboardType='numeric'
           style={{ backgroundColor: '#f5f5f5' }} 
        />
      </View>
      <Button title='Submit' onPress={handleAddData} />
      <Text>You can only add up to 4 entries</Text>
      <Text>Added {data.length} out of 4 entries</Text>
      {data.map((item, index) => (
        <View key={index}>
          <Text>Subject: {item.subject}</Text>
          <Text>Credits: {item.credits}</Text>
          <Text>Percentage: {item.percentage}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
