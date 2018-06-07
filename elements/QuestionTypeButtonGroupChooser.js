import React, {Component} from 'react'
import {ButtonGroup} from 'react-native-elements'
import TrueFalseQuestionWidget from "./TrueFalseQuestionWidget";
import {ScrollView, View} from "react-native";



class QuestionTypeButtonGroupChooser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedQuestionTypeIndex: 0
        };
        this.selectQuestionType = this.selectQuestionType.bind(this)
    }

    selectQuestionType = (newQuestionTypeIndex) => {
        this.setState({
            selectedQuestionTypeIndex: newQuestionTypeIndex
        })
    };
    render() {
        const questionTypes = [
            'Multiple Choice',
            'Fill in the blank',
            'Essay',
            'True or\nfalse'];
        return(
            <ScrollView>
                <ButtonGroup
                    onPress={() => this.selectQuestionType()}
                    selectedIndex={this.state.selectedQuestionTypeIndex}
                    buttons={questionTypes}
                    containerStyle={{height: 75}}/>
                {this.state.selectedQuestionTypeIndex==='True or\nfalse' && <TrueFalseQuestionWidget/>}
            </ScrollView>

        )
    }
}
export default QuestionTypeButtonGroupChooser