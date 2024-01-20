import Icon from 'react-native-vector-icons/MaterialIcons';
import {_dark} from 'rncstyles';

export default function SMIcon({name, size, color, style}: any) {
  return (
    <>
      <Icon
        name={name}
        size={size ?? 30}
        color={color ?? _dark}
        style={style}
      />
    </>
  );
}

{
  /* <SMIcon name="delete" size={30} color={rncStyle.btnPrimary} /> */
}
