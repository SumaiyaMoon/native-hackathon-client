import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native';
import rncStyles from 'rncstyles';
import AppTask from './AppTask';
import {useEffect, useState} from 'react';
import {Get} from '../config/api-methods';
import SMProjectCard from '../components/SMProjectCard';
import SMIconButton from '../components/SMIconButton';
import SMIcon from '../components/SMIcon';

const rncStyle: any = rncStyles;

export default function FeedHome({navigation}: any) {
  const formattedDate = new Date().toLocaleDateString();

  const [data, setData] = useState<any>([]);

  const GetData = () => {
    Get('projects')
      .then(res => {
        setData([...res.data]);
      })
      .catch(err => {});
  };

  useEffect(() => {
    GetData();
  }, []);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await Get('Projects');
  //       setData(res.data.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <>
      <View style={[rncStyle.h100, rncStyle.bgLight]}>
        <View>
          <ScrollView>
            <View>
              <View style={headerStyle.headerContainer}>
                {/* DrawerIcon */}
                <SMIconButton
                  name="grid-view"
                  style={headerStyle.icon}
                  size={40}
                />
                {/* Date */}
                <View style={headerStyle.dateContainer}>
                  <Text style={headerStyle.dateText}>{formattedDate}</Text>
                </View>

                {/* NotificationIcon */}
                <SMIconButton
                  name="notifications"
                  style={headerStyle.icon}
                  size={40}
                />
              </View>
              <Text
                style={[
                  rncStyle.textStart,
                  rncStyle.my1,
                  rncStyle.py1,
                  rncStyle.px2,
                  rncStyle.textBold,
                  {color: '#756EF3', fontSize: 35},
                ]}>
                Let's make a {`${'\n'}`}habit together&nbsp;🙌
              </Text>
              <View style={headerStyle.projects}>
                <Text
                  style={[
                    rncStyle.fs3,
                    rncStyle.textStart,
                    rncStyle.p2,
                    rncStyle.textBold,
                    {color: '#756EF3'},
                  ]}>
                  Projects
                </Text>
                <SMIcon
                  name="chevron-right"
                  color="#756EF3"
                  size={30}
                  onPress={() => {
                    navigation.navigate('AppProject');
                  }}
                  style={[rncStyle.p2]}
                />
              </View>
              <ScrollView horizontal>
                {data &&
                  data.map((x: any) => (
                    <SMProjectCard title={x.name} description={x.description} />
                  ))}
              </ScrollView>
              <ScrollView>
                <AppTask />
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}

const headerStyle = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 10,
    padding: 20,
  },
  icon: {
    color: '#756EF3', // Your icon color
    borderRadius: 50,
    padding: 10,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: 'white',
  },
  dateContainer: {
    flex: 1,
    alignItems: 'center',
  },
  dateText: {
    color: '#756EF3', // Your text color
    fontSize: 20,
    fontWeight: 'bold',
  },
  projects: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
