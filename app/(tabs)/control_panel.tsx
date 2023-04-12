import { Button, StyleSheet, TextInput, ScrollView} from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { Link, useNavigation, useRouter, useSearchParams } from 'expo-router';
import React, { useContext, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { setBadgeCountAsync } from 'expo-notifications';
import { ValueOf } from 'next/dist/shared/lib/constants';
import ModuleData from '../../types/moduleData';
import Assessment from '../../types/assesment';
import { Router } from 'next/router';



const dates: {[key: number]: string} = {
  1: '13/05/2023',
  2: '26/04/2023',
  3: '19/05/2023',
  4: '01/05/2023',
  5: '15/04/2023',
  6: '11/05/2023',
  7: '01/06/2023',
  8: '30/05/2023'
}

export default function TabTwoScreen() {
  const [data, setData] = useState<ModuleData[]>([]);
  const [assessments, setAssesments] = useState<Assessment[]>([]);
  const [moduleName, setModuleName] = useState('');
  const [credits, setCredits] = useState('');
  const [percentage, setPercentage] = useState('');

  const [name, setName] = useState('');
  const [studyHours, setStudyHours] = useState('');
  const [date, setDate] = useState('');
  const [proportion, setProportion] = useState('');
  const [dateIndex, setDateIndex] = useState<number>(1);


  const router = useRouter();

  const incrementDateIndex = () => {
    console.log(dateIndex)
    setDateIndex(dateIndex + 1)
  }

  const passData = () => {


    const value: string = JSON.stringify(data);
    router.push({ pathname: "/(tabs)/home", params: { data: value }});
  }

  const handleAddData = () => {

    if (data.length >= 4) {
      alert('You can only add up to 4 entries');
      return;
    }

    //const newData: ModuleData = { moduleName,studyHours, credits, assessments};

    setData([...data, { moduleName,studyHours, credits, assessments}]);
    


    setModuleName('');
    setCredits('');
    setPercentage('');
    setAssesments([]);
  };

  const checkRange = (value: number, lower_bound: number, upper_bound: number): boolean => {
    return !(value <= lower_bound || value >= upper_bound)
  }

  const handleAssesmentData = () => {

    /* validation checks
      - check presence of each field
      - validate range 
    */

    if (assessments.length >= 2) {
      alert('You can only add up to 2 assesments');
      return;
    }

    const proportion_n: number = parseInt(proportion);
 

    if (!checkRange(proportion_n,1,101)){
     
      alert(`proportion must be between 0-100 (percentage), value has not been set ${proportion_n}`);
      setProportion('');
    } 
  
    if (assessments.length > 0){

      // proportions of each assesment must add to 100
      if ((parseInt(assessments[0].proportion) + proportion_n) != 100) {
        alert('proportions of each assesment must equal 100');
        setProportion('');
        return;
      }
    }

    const date: string = dates[dateIndex];

    /* accumulate complete set of data */
    const assessement_data = {name, date , proportion};

    /* hardcoded dates index */
    incrementDateIndex();

    setAssesments([...assessments, assessement_data]);
  }

  const wipeData = () => {
    setData([]);
    setAssesments([]);
    setModuleName('');
    setCredits('');
    setPercentage('');
    setName('');
    setDate('');
    setProportion('');
    setDateIndex(1)
  };

  return (
    
    <View>
      <View>
        <Text>Module:</Text>
        <TextInput
          onChangeText={(value) => setModuleName(value)}
          value={moduleName}
          style={{ backgroundColor: '#f5f5f5' , width: 300}} 
        />
      </View>
      <View>
        <Text>Credits:</Text>
        <TextInput
          onChangeText={(value) => setCredits(value)}
          value={credits.toString()}
          keyboardType='numeric'
           style={{ backgroundColor: '#f5f5f5', width: 100 }} 
        />
      </View>
      <View>
        <Text>Study Hours:</Text>
        <TextInput
          onChangeText={(value) => setStudyHours(value)}
          value={studyHours}
          keyboardType='numeric'
           style={{ backgroundColor: '#f5f5f5', width: 100 }} 
        />
      </View>

      <Text style = {{fontSize: 15, color: 'pink', marginTop: 5}}>Add Assessmentss</Text> 
      <View>
        <Text>name</Text>
        <TextInput
          onChangeText={(value) => setName(value)}
          value={name}
          style={{ backgroundColor: '#f5f5f5', width: 300 }} 
        />
      </View>
      <View>
        <Text>Proportion:</Text>
        <TextInput
          onChangeText={(value) => setProportion(value)}
          value={proportion}
          keyboardType='numeric'
           style={{ backgroundColor: '#f5f5f5', width: 300 }} 
        />
      </View>
     
  
      <View>
        <Text>date (automatically assigned)</Text>
        {/* <TextInput
          onChangeText={(value) => setDate(value)}
          value={date}
          style={{ backgroundColor: '#f5f5f5' }} 
        /> */}
      </View>
      <View style = {{marginBottom: 14}}>
        <Button title='Add Assessment' onPress={handleAssesmentData} />
      </View>
      <Button title='Submit' onPress={handleAddData} />
      <Button title='Clear All Data' onPress={wipeData} />
      <Button title='go to home tab' onPress={passData} />
  


      <Text style = {{fontSize: 19, color: 'green'}}>Assessments</Text> 
      { 
      
        assessments.map((item: Assessment, index) => (
            <View style = {{marginTop: 10}} key = {index}>
              <Text>Name: {item.name}</Text>
              <Text>Proportion: {item.proportion}%</Text>
            </View>
        ))
      }


    
  

      <ScrollView style={{ height: 300 }}>
   
      {data.map((module, index) => (

          
  
        <View style = {{marginTop: 10,}} key={index}>
      
          <Text style = {{fontSize: 25, color: 'red'}} >{module.moduleName}</Text>
          <Text>Credits: {module.credits}</Text>
          <Text>Study Hours: {module.studyHours}</Text>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Assesments</Text>
          {
          module.assessments.map((assesment, index) => (
            <View style = {{marginTop: 10, marginBottom: 5}} key={index}>
              <Text>Name: {assesment.name}</Text>
              <Text>Proportion: {assesment.proportion}</Text>
              <Text>Date: {assesment.date}</Text>
            </View>
          ))}
        </View>
      ))}
      </ScrollView>
  
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
