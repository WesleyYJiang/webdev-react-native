import React, {Component} from 'react';
import {ListItem, Text} from 'react-native-elements';
import {View} from 'react-native';

const quesations = [
    {	title: 'Question 1', subtitle: 'Multiple choice',
        icon: 'list'},
    {	title: 'Question 2', subtitle: 'Fill-in the blanks',
        icon: 'code'},
    {	title: 'Question 3', subtitle: 'True or false',
        icon: 'check'},
    {	title: 'Question 4', subtitle: 'Essay',
        icon: 'subject'}];


class Exam extends Component {

    render() {
        return(
            <View style={{padding: 15}}>
                <Text h2>Lists</Text>
                {quesations.map((question, index) => (
                    <ListItem
                        key={index}
                        title={question.title}
                        subtitle={question.subtitle}
                        leftIcon={{name: question.icon}}/>
                ))}



            </View>
            )
    }

}

export default Exam;