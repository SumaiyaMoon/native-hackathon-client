import {Image, StyleSheet, View} from 'react-native';

export default function SMAvatar({style}: any) {
  return (
    <View style={style}>
      <View style={[styles.container]}>
        <Image source={require('../assets/avatar.jpg')} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 50,
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
  },
});
