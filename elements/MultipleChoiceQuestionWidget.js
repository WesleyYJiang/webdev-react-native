import React from 'react'
import {ScrollView, View} from 'react-native'
import {Text, Button, CheckBox} from 'react-native-elements'
import {FormLabel, FormInput, FormValidationMessage}
    from 'react-native-elements'

class MultipleChoiceQuestionWidget extends React.Component {
    static navigationOptions = { title: "Multiple Choice"}
    constructor(props) {
        super(props);
        this.state = {
            title: 'Title',
            description: 'Description',
            points: 0,
            tempOption: '',
            options: [],
            correctAnswer: '',
        }
    }
    updateForm(newState) {
        this.setState(newState)
    }

    updateChecked(option) {
        let newOptions = this.state.options.map((o) => {
            if(o.title !== option.title) {
                return o;
            } else {
                return {title: option.title, checked: !option.checked};
            }
        });
        this.updateForm({options: newOptions, correctAnswer: option.title});
    }

    renderOptions() {
        return (
            this.state.options.map((option) => {
                return <CheckBox title={option.title}
                                 key={option.title}
                                 checkedIcon='dot-circle-o'
                                 uncheckedIcon='circle-o'
                                 onPress={() => this.updateChecked(option)}
                                 checked={this.state.options.find((o)=> {return o == option}).checked}>
                    <Button backgroundColor="#1E90FF" color="white" title="X"/>
                </CheckBox>
            }))
    }


    render() {
        return(
            <View>
                <FormLabel>Title</FormLabel>
                <FormInput onChangeText={text => this.updateForm({title: text})}/>
                <FormValidationMessage>Title is required</FormValidationMessage>

                <FormLabel>Points</FormLabel>
                <FormInput onChangeText={pt => this.updateForm({points: pt})}/>

                <FormLabel>Description</FormLabel>
                <FormInput onChangeText={text => this.updateForm({description: text})}/>
                <FormValidationMessage>Description is required</FormValidationMessage>

                <FormLabel>Choices</FormLabel>
                <FormInput onChangeText={text => this.updateForm({tempOption: text})}/>
                <FormValidationMessage>Option detail is required</FormValidationMessage>
                <Button
                    style={{padding: 10}} backgroundColor="#1E90FF" color="white" title="Add choice"
                    onPress={() => this.updateForm(
                        {
                            options: this.state.options.concat(
                                [{title: this.state.tempOption, checked: false}]
                            )
                        })
                    }/>
                {this.renderOptions()}


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
                    {this.renderOptions()}

                </View>


            </View>
        )
    }
}

export default MultipleChoiceQuestionWidget