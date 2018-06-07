import React from 'react'
import {Picker, Text, View, ScrollView} from 'react-native'
import TrueFalseQuestionWidget from "./TrueFalseQuestionWidget";
import MultipleChoiceQuestionWidget from "./MultipleChoiceQuestionWidget";
import EssayQuestionWidget from "./EssayQuestionWidget";
import FillInTheBlanksQuestionWidget from "./FillInTheBlanksQuestionWidget";


class QuestionEditor extends React.Component {
    static navigationOptions = {title: 'QuestionEditor'};
    constructor(props) {
        super(props);
        this.state = {
            questionType: 0
        }
    }
    render() {
        return (
            <ScrollView>
                <Picker onValueChange={(itemValue, itemIndex) => this.setState({questionType: itemValue})}
                        selectedValue={this.state.questionType}>
                    <Picker.Item value="MC" label="Multiple choice" />
                    <Picker.Item value="ES" label="Essay" />
                    <Picker.Item value="TF" label="True or false" />
                    <Picker.Item value="FB" label="Fill in the blanks" />
                </Picker>
                {this.state.questionType==='TF' && <TrueFalseQuestionWidget/>}
                {this.state.questionType==='MC' && <MultipleChoiceQuestionWidget/>}
                {this.state.questionType==='ES' && <EssayQuestionWidget/>}
                {this.state.questionType==='FB' && <FillInTheBlanksQuestionWidget/>}

            </ScrollView>
        )
    }
}

export default QuestionEditor