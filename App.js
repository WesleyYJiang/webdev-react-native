import React from 'react';
import FixedHeader from './elements/FixedHeader';
import TextHeadings from './elements/TextHeadings';
import Icons from './elements/Icons';
import Exam from './elements/Exam';
import QuestionTypePicker from './elements/QuestionTypePicker'
import {StatusBar, StyleSheet, Text, View} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View >
          <StatusBar barStyle="light-content"/>
          <FixedHeader/>
        <View style={{padding: 20}}>
          <QuestionTypePicker/>
            <Exam/>
            <Icons/>
            <TextHeadings/>


        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
