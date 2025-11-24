import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { RootTabsParamList } from '../types/navigation';

const Tabs = createBottomTabNavigator<RootTabsParamList>();

export default function TabsNavigator() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="HomeTab" component={HomeScreen} options={{ title: 'Home' }} />
      <Tabs.Screen name="Settings" component={SettingsScreen} options={{ title: 'Config' }} />
    </Tabs.Navigator>
  );
}
