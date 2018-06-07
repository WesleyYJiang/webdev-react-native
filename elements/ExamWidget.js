import React, {Component} from 'react';
import {ListItem, Text, Button} from 'react-native-elements';
import {ScrollView, View} from 'react-native';

const quesations = [
    {	title: 'Question 1', subtitle: 'Multiple choice',
        icon: 'list'},
    {	title: 'Question 2', subtitle: 'Fill-in the blanks',
        icon: 'code'},
    {	title: 'Question 3', subtitle: 'True or false',
        icon: 'check'},
    {	title: 'Question 4', subtitle: 'Essay',
        icon: 'subject'}];



class ExamWidget extends Component {
    static navigationOptions = {title: 'ExamWidget'};

    render() {
        return(
            <ScrollView style={{padding: 15}}>
                <Text h2>Lists</Text>
                {quesations.map((question, index) => (
                    <ListItem
                        key={index}
                        title={question.title}
                        subtitle={question.subtitle}
                        leftIcon={{name: question.icon}}/>
                ))}
                <Button title="Add Question" onPress={() => this.props.navigation.navigate('QuestionEditor') } />
                <Button title="Save Exam" onPress={() => this.props.navigation.navigate('QuestionEditor') } />

            </ScrollView>
            )
    }

}

export default ExamWidget;