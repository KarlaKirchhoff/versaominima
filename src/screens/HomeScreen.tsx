import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Home Screen</Text>

      <Button title="Ir para Perfil (Stack)" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}
