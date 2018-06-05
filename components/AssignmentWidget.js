import React, {Component} from 'react';
import {ListItem, Text, Button, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';
import {ScrollView, View, TextInput} from 'react-native';

class AssignmentWidget extends Component {
    static navigationOptions = {title: 'AssignmentWidget'};

    constructor(props) {
        super(props);
        this.state = {title: 'Title', description: 'Descriptions', points: 0, answer: '', link: ''}
    }

    updateForm(newState) {
        this.setState(newState)
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

                <View  style={{padding: 15}}>
                    <Text h2>Preview</Text>
                    <View style={{flexDirection: 'row'}}>

                        <Text h3>{this.state.title}</Text>
                        <View style={{position: 'absolute', right: 0}}>
                            <Text h3>{this.state.points}</Text>
                        </View>
                    </View>
                    <Text style={{paddingVertical: 15}}>{this.state.description}</Text>
                </View>

                <FormLabel>Essay answer</FormLabel>
                <FormInput onChangeText={text => this.updateForm({answer: text})}/>

                <FormLabel>Upload a file</FormLabel>
                <Button title='Upload'/>

                <FormLabel>Submit a link</FormLabel>
                <FormInput onChangeText={text => this.updateForm({link: text})}/>

                <View  style={{padding: 15}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Button	backgroundColor="#FF0000" color="white" title="Cancel"/>
                        <Button	backgroundColor="#1E90FF" color="white" title="Submit"/>
                    </View>
                </View>

                {/*<CheckBox onPress={() => this.updateForm({isTrue: !this.state.isTrue})}*/}
                          {/*checked={this.state.isTrue} title='The answer is true'/>*/}







                <Button title="Add Assignment" backgroundColor="green" onPress={() => this.props.navigation.navigate('ScreenA') } />

            </ScrollView>
        )
    }

}

export default AssignmentWidget;