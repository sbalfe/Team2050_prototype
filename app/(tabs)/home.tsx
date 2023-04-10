import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { useNavigation, useRouter, useSearchParams } from 'expo-router';

export default function TabOneScreen() {

  const navigation = useNavigation();
  const router = useRouter();
  const params = useSearchParams();
  const {post, id} = params;
  return (
    <View style={styles.container}>
      <Text
        onPress={() => {
          router.push({ pathname: "/(tabs)/control_panel", params: { id : 42  } });
        }}
      >
        Go to tab two
      </Text>
      <Text>{post}</Text>
      <Text>{id}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/" />
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
