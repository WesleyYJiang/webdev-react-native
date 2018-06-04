import React from 'react'
import { View, Alert } from 'react-native'
import { Icon } from 'react-native-elements'
const Icons = () => (
    <View>
        <Icon
            raised
            color='#f50'
            name='heartbeat'
            type='font-awesome'
            onPress={() =>
                Alert.alert('hello')}
        />

    </View>
)
export default Icons