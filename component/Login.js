import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { myFetch } from './utils';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            pwd: '',
            isloading: false
        }
    }
    userhandle = (text) => {
        this.setState({ username: text })
    }
    pwdhandle = (text) => {
        this.setState({ pwd: text })
    }
    login = () => {
        this.setState({ isloading: true })
        myFetch.post('/login', {
            username: this.state.username,
            pwd: this.state.pwd
        }
        ).then(res => {
            console.log(res.data)
            AsyncStorage.setItem('user', JSON.stringify(res.data))
                .then(() => {
                    this.setState({ isloading: false })
                    Actions.index();
                })
        })
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View
                    style={{ alignItems: 'center' }}>
                    <View
                        style={{
                            width: '80%',
                            marginRight: 10,
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingLeft: 20,
                        }}>
                        <Icon name="user" size={30} color={'red'} />
                        <TextInput placeholder="用户名"
                            onChangeText={this.userhandle}
                            style={{ marginLeft: 10, fontSize: 16 }}
                        />
                    </View>
                    <View
                        style={{
                            width: '80%',
                            marginRight: 10,
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingLeft: 20,
                        }}>
                        <Icon name="lock" size={30} color={'red'} />
                        <TextInput
                            onChangeText={this.pwdhandle}
                            placeholder="密码"
                            secureTextEntry={true}
                            style={{ marginLeft: 13, fontSize: 16 }}
                        />
                    </View>
                    <TouchableOpacity
                        style={{
                            width: '80%',
                            height: 50,
                            backgroundColor: 'grey',
                            marginTop: 200,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 25
                        }}
                        onPress={this.login}>
                        <Text style={{ fontSize: 24, color: 'white' }}>登陆</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: '80%',
                            height: 50,
                            backgroundColor: '#ccc',
                            marginTop: 30,
                            marginBottom: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 25
                        }}
                        onPress={Actions.register}>
                        <Text style={{ fontSize: 24, color: 'white' }}>注册</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.isloading
                        ? <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: 'green', fontSize: 16 }}>正在登录...</Text>
                        </View>
                        : null
                }
            </View>
        );
    }
}