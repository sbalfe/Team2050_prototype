import { Redirect } from 'expo-router';
import { Text } from 'react-native'

interface IndexProps {}

const Index = (props: IndexProps) => {
    return (
        <>
            <Redirect href="/(tabs)/control_panel" />
        </>
    );

} 

export default Index;