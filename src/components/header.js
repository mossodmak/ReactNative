// import libraries for making a component
import React from 'react';
import { View, Text } from 'react-native';

// Make a component
const Header = () => {
    return (
        <View>
            <Text>Albums!</Text>
        </View>
    );           
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8'
    },
    textStyle: {
        fontSize: 40
    }
};
// Make the component available to other parts of the app
export default Header;
