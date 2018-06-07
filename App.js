import React from 'react';
import ExamWidget from './elements/ExamWidget';
import QuestionEditor from './elements/QuestionEditor'
import {Button, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import TrueFalseQuestionWidget from './elements/TrueFalseQuestionWidget';
import CourseList from './components/CourseList';
import ModuleList from './components/ModuleList';
import LessonList from './components/LessonList';
import WidgetList from "./components/WidgetList";
import QuestionList from "./components/QuestionList";
import MultipleChoiceQuestionWidget from "./elements/MultipleChoiceQuestionWidget";
import AssignmentWidget from "./components/AssignmentWidget";
import EssayQuestionWidget from "./elements/EssayQuestionWidget";
import FillInTheBlanksQuestionWidget from "./elements/FillInTheBlanksQuestionWidget";


class Home extends React.Component {
    static navigationOptions = {
        title: 'Home'
    };
    constructor(props) {
        super(props)
    }

  render() {
    return (
      <ScrollView>
          <StatusBar barStyle="light-content"/>
          <Button title="Courses" onPress={() => this.props.navigation.navigate('CourseList') } />
      </ScrollView>
    );
  }
}


const App = createStackNavigator({
    Home,
    CourseList,
    ModuleList,
    LessonList,
    WidgetList,
    QuestionList,
    TrueFalseQuestionWidget,
    MultipleChoiceQuestionWidget,
    AssignmentWidget,
    ExamWidget,
    QuestionEditor,
    EssayQuestionWidget,
    FillInTheBlanksQuestionWidget
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
