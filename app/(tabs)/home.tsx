import { StyleSheet } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { useNavigation, useRouter, useSearchParams } from 'expo-router';
import Assessment from '../../types/assesment';
import ModuleData from '../../types/moduleData';
import { useEffect, useState } from 'react';


export default function TabOneScreen() {


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

  const {data} = useSearchParams();

  useEffect(() => {
   
  
    if (data != undefined){
      const data_o = JSON.parse(data) as ModuleData[];

      setData(data_o);
      console.log(dataLocal[0].moduleName)

    }
  
  }, []);

  return (

      <>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
            <View>
              <Text style = {{fontSize: 20}}>Upcoming test</Text>
              <Text>Today for 1 hour</Text>
              <Text>{dataLocal[2].moduleName}</Text>
              <Text>Tomorrow for 1 hour</Text>
              <Text>{dataLocal[3].moduleName}</Text>
            </View>
            <View>
              <Text style = {{fontSize: 20}}>Upcoming  Deadlines</Text>
               <Text >In 2 weeks 3 Day</Text>
               <Text>{dataLocal[0].moduleName}</Text>
               <Text>In 1 month 2 weeks</Text>
               <Text>{dataLocal[1].moduleName}</Text>
            </View>
          </View>
      </>
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
