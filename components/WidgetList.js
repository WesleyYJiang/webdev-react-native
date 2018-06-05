
import React, {Component} from 'react'
import {View, Alert} from 'react-native'
import {Text, ListItem, Button} from 'react-native-elements'

class WidgetList extends Component {
    static navigationOptions = {title: 'Widgets'}
    constructor(props) {
        super(props)
        this.state = {
            widgets: [],
            courseId: 1,
            moduleId: 1
        }
    }
    componentDidMount() {
        const {navigation} = this.props;
        const lessonId = navigation.getParam("lessonId");
        fetch("http://localhost:8080/api/lesson/"+lessonId+"/widget")
            .then(response => (response.json()))
            .then(widgets => this.setState({widgets}))
    }
    render() {
        return(
            <View style={{padding: 15}}>
                {this.state.widgets.map(
                    (widget, index) => (
                        <ListItem onPress={() => this.props.navigation.navigate("QuestionList", {examId: widget.id})}
                            key={index}
                            subtitle={widget.description}
                            title={widget.title}/>))}

                    <Button title="Add Assignment"
                            buttonStyle={{backgroundColor: "#4CAF50", borderColor: "transparent"}}
                            onPress={() => this.props.navigation.navigate('AssignmentWidget') } />
                    <Button title="Add Exam"
                            buttonStyle={{backgroundColor: "#008CBA", borderColor: "transparent"}}
                            onPress={() => this.props.navigation.navigate('AssignmentWidget') } />

            </View>
        )
    }
}
export default WidgetList