import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import rncStyles from 'rncstyles';
import SMButton from '../components/SMButton';
import {useSelector} from 'react-redux';
import TabBottom from '../config/tabnavigation';

const rncStyle: any = rncStyles;

const Home = ({navigation}: any) => {
  const userData: any = useSelector((state: any) => {
    state.user;
  });

  return <TabBottom />;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

export default Home;
