import React from 'react'
import {ScrollView, View} from 'react-native'
import {Text, Button, CheckBox} from 'react-native-elements'
import {FormLabel, FormInput, FormValidationMessage}
    from 'react-native-elements'

class TrueFalseQuestionWidget extends React.Component {
    static navigationOptions = { title: "TrueFalseQuestionWidget"};
    constructor(props) {
        super(props);
        this.state = {
            title: 'Title',
            description: 'Description',
            points: 0,
            isTrue: true
        }
    }
    updateForm(newState) {
        this.setState(newState)
    }
    render() {
        return(
            <ScrollView>
                <FormLabel>Title</FormLabel>
                <FormInput onChangeText={
                    text => this.updateForm({title: text})
                }/>
                <FormValidationMessage>
                    Title is required
                </FormValidationMessage>

                <FormLabel>Points</FormLabel>
                <FormInput onChangeText={pt => this.updateForm({points: pt})}/>

                <FormLabel>Description</FormLabel>
                <FormInput onChangeText={
                    text => this.updateForm({description: text})
                }/>
                <FormValidationMessage>
                    Description is required
                </FormValidationMessage>

                <CheckBox onPress={() => this.updateForm({isTrue: !this.state.isTrue})}
                          checked={this.state.isTrue} title='The answer is true'/>

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
                    <CheckBox checked={false} title='True'/>
                    <CheckBox checked={false} title='False'/>
                </View>

            </ScrollView>
        )
    }
}

export default TrueFalseQuestionWidget