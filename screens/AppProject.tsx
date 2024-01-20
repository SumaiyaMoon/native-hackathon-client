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
import SMProjectCard from '../components/SMProjectCard';

const rncStyle: any = rncStyles;

export default function AppProject({navigation}: any) {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Get('Projects');
        console.log(res.data.data);
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
            Projects
          </Text>
          {data &&
            data.map((x: any, i: any) => (
              <>
                <View key={i}>
                  <SMProjectCard
                    key={i}
                    title={x.name}
                    description={x.description}
                    bgColor="white"
                    width={'96%'}
                    margin={5}
                  />
                </View>
              </>
            ))}
        </View>
      </ScrollView>
    </View>
  );
}
