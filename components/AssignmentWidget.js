import React, {Component} from 'react';
import {ListItem, Text, Button, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';
import {ScrollView, View, TextInput} from 'react-native';

class AssignmentWidget extends Component {
    static navigationOptions = {title: 'Assignment'};

    constructor(props) {
        super(props);
        this.state = {title: 'Title', description: 'Descriptions', points: 0, answer: '', link: '', lessonId: 0}
    }

    updateForm(newState) {
        this.setState(newState);
    }

    componentDidMount() {
        const {navigation} = this.props;
        const lessonId = navigation.getParam("lessonId");
        this.setState({lessonId: lessonId});
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
                        <Button	backgroundColor="#FF0000" color="white" title="Cancel"
                                   onPress={() => this.props.navigation.navigate('Widgets', {lessonId: this.state.lessonId}) }/>
                        <Button	backgroundColor="#1E90FF" color="white" title="Submit"/>
                    </View>
                </View>

                <Button title="Add Assignment"
                        backgroundColor="green"
                        onPress={() => this.props.navigation.navigate('ScreenA') } />

            </ScrollView>
        )
    }

}

export default AssignmentWidget;