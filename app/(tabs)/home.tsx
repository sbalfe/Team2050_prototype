import { StyleSheet } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { useNavigation, useRouter, useSearchParams } from 'expo-router';


type Assesment = {
  name: string;
  proportion: string;
  date: string
}

type SubjectData = {
  subject: string;
  credits: string;
  percentage: string;
  Assesments: Assesment[];
}

export default function TabOneScreen() {
  return (
   <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View>
        <Text style = {{}}>Upcoming Study</Text>
        </View>
        <View>
        <Text>Upcoming Deadlines</Text>
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
