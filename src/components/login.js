import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class Login extends Component {
    render() {
        return (
            <View style={{padding: 4}}>
                <Input 
                    placeholder='Username'
                    leftIcon={
                        <Icon
                            name='user'
                            size={24}
                            color='black'
                        />
                    }
                />
                <Input placeholder='Password'/>
                
                <Button style={{alignContent:"center", color:"red"}} title="Sign In" >Sign In</Button>
                <Text style={{color:"red"}}>Forgot your password?</Text> 
            </View>
        );
    };
};

export default Login;
