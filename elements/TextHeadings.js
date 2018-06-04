import React from 'react'
import { View } from 'react-native'
import { Text, Divider} from 'react-native-elements'
const TextHeadings = () => (
    <View>
        <Text h1>Welcome!</Text>
        <Text h2>Heading size 2</Text>
        <Text h3>Heading size 3</Text>
        <Text h4>Heading size 4</Text>
        <Divider style={{
            backgroundColor: 'grey'
        }}/>
        <Text>
            dfsafdsafdsafdsafds
        </Text>
    </View>)
export default TextHeadings