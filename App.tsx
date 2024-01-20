import {Provider} from 'react-redux';
import StackNavigation from './config/stacknavigation';
import store from './config/redux/store';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
}
