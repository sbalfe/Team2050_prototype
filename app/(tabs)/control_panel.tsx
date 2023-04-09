import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { Link, useNavigation, useRouter, useSearchParams } from 'expo-router';

export default function TabTwoScreen() {

  const router = useRouter();
  const params = useSearchParams();
  const { id = 42 } = params;
  return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text onPress={() => {
        router.push({ pathname: "/(tabs)/", params: { post: "random", id: 42 } });
      }}>test</Text>
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
