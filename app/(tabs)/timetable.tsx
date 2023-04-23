import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useState, useEffect} from 'react';
import {useSearchParams } from 'expo-router';
import ModuleData from '../../types/moduleData';

interface TimeTableScreenProps {}

const TimetableScreen = (props: TimeTableScreenProps) => {

    const [dataLocal, setData] = useState<ModuleData[]>(() => {
    const defaultModuleData = {
      moduleName: '',
      studyHours: '',
      credits: '',
      assessments: [
        {
          name: '',
          proportion: '',
          date: ''
        },
      ],
    };
  
    const initialData = [];
  
    for (let i = 0; i < 4; i++) {
      initialData.push(defaultModuleData);
    }
  
    return initialData;
  });


  const days = [...Array(31).keys()].map(day => day + 1);

  const rows = [];
  let row = [];
  for (let i = 0; i < days.length; i++) {
    row.push(days[i]);
    if ((i + 1) % 7 === 0 || i === days.length - 1) {
      rows.push(row);
      row = [];
    }
  }

  const {data} = useSearchParams();

  useEffect(() => {
    if (data != undefined){
      const data_o = JSON.parse(data) as ModuleData[];
      console.log(data)
      setData(data_o);
    }
  
  }, []);

  let DayCheck = (day: any) => {
    if (day == 17){
       return <View style = {styles.square2}><Text style = {{color: 'black'}}>{day}</Text></View>
    }
    else {
      return <Text>{day}</Text>
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
                <View key={day} style = {styles.square} >
                  <Text>{DayCheck(day)}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
     <View style = {styles.key}>
        <View style = {styles.circle}/>
        <Text>{dataLocal[2].moduleName}</Text>
      </View> 
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  key: {
    flex: 1,
    backgroundColor: 'white',
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
    backgroundColor: 'white',
  },
   square2: {
    width: 50,
    height: 50,
    marginRight: 10,
    backgroundColor: 'red',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: "red",
  },
});

export default TimetableScreen;