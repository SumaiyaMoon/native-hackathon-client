import {TouchableOpacity} from 'react-native';
import rncStyles from 'rncstyles';
import SMIcon from './SMIcon';

const rncStyle: any = rncStyles;

export default function SMIconButton({onPress, name, style, size}: any) {
  return (
    <>
      <TouchableOpacity style={rncStyle.btnRounded} onPress={onPress}>
        <SMIcon size={size ?? 30} name={name} style={style} />
      </TouchableOpacity>
    </>
  );
}

{
  /* <SMIconButton
  size={40}
  onPress={() => {
    ToastAndroid.show('Working', ToastAndroid.SHORT);
  }}
  name="rocket"
/>; */
}
