import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import rncStyles from 'rncstyles';
import {Get} from '../config/api-methods';
import SMCard from '../components/SMCard';
import SMTaskCard from '../components/SMTaskCard';

const rncStyle: any = rncStyles;

export default function AppTask({navigation}: any) {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Get('Tasks');
        // console.log(res.data.data);
        setData(res.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={rncStyle.bgLight}>
      <ScrollView>
        <View>
          <Text
            style={[
              rncStyle.fs3,
              rncStyle.textStart,
              rncStyle.p2,
              rncStyle.textBold,
              {color: '#756EF3'},
            ]}>
            All Tasks
          </Text>
          {data &&
            data.map((x: any, i: any) => (
              <>
                <View key={i}>
                  <SMTaskCard
                    key={i}
                    title={x.title}
                    description={x.description}
                    progress={0.25}
                    time="2 min ago"
                  />
                </View>
              </>
            ))}
        </View>
      </ScrollView>
    </View>
  );
}
