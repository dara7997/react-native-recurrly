import { View, Text } from 'react-native';
import {Link} from "expo-router";

const Sign_up = () => {
    return (
        <View>
            <Text>Sign_up</Text>
            <Link href="/(auth)/sign_up">Sign In</Link>
        </View>
    );
}

export default Sign_up