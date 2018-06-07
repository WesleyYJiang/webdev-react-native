import React from 'react'
import {ScrollView, View} from 'react-native'
import {Text, Button, CheckBox} from 'react-native-elements'
import {FormLabel, FormInput, FormValidationMessage}
    from 'react-native-elements'

class FillInTheBlanksQuestionWidget extends React.Component {
    static navigationOptions = { title: "FillInTheBlanksQuestionWidget"};
    constructor(props) {
        super(props);
        this.state = {
            title: 'Title',
            description: 'Description',
            points: 0,
            problem: '',
            formattedText: []
        }
    }
    updateForm(newState) {
        this.setState(newState)
    }

    formatText(text) {
        text = text.replace(/\[.*\]/g, ' ');
        console.log(text);
        this.updateForm({formattedText: text});
    }

    render() {
        return(
            <ScrollView>
                <FormLabel>Title</FormLabel>
                <FormInput onChangeText={text => this.updateForm({title: text})}/>
                <FormValidationMessage>Title is required</FormValidationMessage>

                <FormLabel>Points</FormLabel>
                <FormInput onChangeText={pt => this.updateForm({points: pt})}/>

                <FormLabel>Description</FormLabel>
                <FormInput onChangeText={text => this.updateForm({description: text})}/>
                <FormValidationMessage>Description is required</FormValidationMessage>

                <FormLabel>Problem</FormLabel>
                <FormInput multiline={true}
                           onChangeText={text => this.formatText(text)}/>
                <FormValidationMessage>Use [variable=value] for blanks</FormValidationMessage>

                <View  style={{padding: 15}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Button	backgroundColor="#FF0000" color="white" title="Cancel"/>
                        <Button	backgroundColor="#1E90FF" color="white" title="Submit"/>
                    </View>
                </View>




                <View style={{padding: 15}}>
                    <Text h3>Preview</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text h4>{this.state.title}</Text>
                        <View style={{position: 'absolute', right: 0}}>
                            <Text h4>{this.state.points}</Text>
                        </View>
                    </View>
                    <Text style={{paddingVertical: 15}}>{this.state.description}</Text>
                    <Text style={{paddingVertical: 15}}>{this.state.formattedText}</Text>
                    <FormInput/>
                </View>

            </ScrollView>
        )
    }
}

export default FillInTheBlanksQuestionWidget