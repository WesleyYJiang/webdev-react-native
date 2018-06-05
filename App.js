import React from 'react';
import FixedHeader from './elements/FixedHeader';
import TextHeadings from './elements/TextHeadings';
import Icons from './elements/Icons';
import Exam from './elements/Exam';
import QuestionTypePicker from './elements/QuestionTypePicker'
import {Button, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import TrueFalseQuestionEditor from './elements/TrueFalseQuestionEditor';
import CourseList from './components/CourseList';
import ModuleList from './components/ModuleList';
import LessonList from './components/LessonList';



class Home extends React.Component {
    static navigationOptions = {
        title: 'Home'
    };
    constructor(props) {
        super(props)
    }

  render() {
    return (
      <ScrollView >
          <StatusBar barStyle="light-content"/>
          <Button title="Courses" onPress={() => this.props.navigation.navigate('CourseList') } />
          {/*<FixedHeader/>*/}

          {/*<Button title="Go to Screen A"*/}
                  {/*onPress={() => this.props.navigation*/}
                      {/*.navigate('ScreenA') } />*/}
          {/*<Button title="Go to Screen B"*/}
                  {/*onPress={() => this.props.navigation*/}
                      {/*.navigate('ScreenB') } />*/}

          {/*<TrueFalseQuestionEditor/>*/}

        {/*<View style={{padding: 20}}>*/}
          {/*<QuestionTypePicker/>*/}
            {/*<Exam/>*/}
            {/*<Icons/>*/}
            {/*<TextHeadings/>*/}
        {/*</View>*/}
      </ScrollView>
    );
  }
}

class ScreenA extends React.Component {
    static navigationOptions = {title: "Screen A"}
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <Text h1>Screen A</Text>
                <Button title="Go Home"
                        onPress={() =>this.props.navigation.goBack()} />
            </View>
        )
    }
}

const ScreenB = () => (
    <View>
        <Text h1>Screen B</Text>
    </View>
);

const App = createStackNavigator({
    Home,
    CourseList,
    ModuleList,
    LessonList,
    ScreenA
});


export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
