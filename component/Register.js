import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import { Actions } from "react-native-router-flux";
import { myFetch } from './utils';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            pwd: '',
            pwdagain: '',
        }
    }
    userhandle = (text) => {
        this.setState({ username: text })
    }
    pwdhandle = (text) => {
        this.setState({ pwd: text })
    }
    pwdagainhandle = (text) => {
        this.setState({ pwdagain: text })
    }
    register = () => {
        if (this.state.username != '' && this.state.pwd != '' && this.state.pwdagain != '') {
            if (this.state.pwd != this.state.pwdagain) {
                Alert.alert("密码不一致");
            }
            else {
                this.setState({ isloading: true })
                myFetch.post('/register', {
                    username: this.state.username,
                    pwd: this.state.pwd
                }).then(res => {
                    if (res.data.token == '1') {
                        Alert.alert('账户已存在')
                    }
                    else {
                        AsyncStorage.setItem('user', JSON.stringify(res.data))
                            .then(() => {
                                this.setState({ isloading: false })
                                Alert.alert('注册成功');
                                Actions.login();
                            })
                    }
                })
            }
        }
        else {
            Alert.alert('用户名或密码为空')
        }
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
                            style={{ marginLeft: 20, fontSize: 16 }}
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
                            paddingLeft: 20
                        }}>
                        <Icon name="tag" size={30} color={'red'} />
                        <TextInput
                            onChangeText={this.pwdhandle}
                            placeholder="密码"
                            secureTextEntry={true}
                            style={{ marginLeft: 18, fontSize: 16 }}
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
                        <Icon name="tags" size={30} color={'red'} />
                        <TextInput
                            onChangeText={this.pwdagainhandle}
                            placeholder="确认密码"
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
                        onPress={this.register}>
                        <Text style={{ fontSize: 24, color: 'white' }}>注册</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: '80%',
                            height: 50,
                            backgroundColor: '#ccc',
                            marginTop: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 25
                        }}
                        onPress={Actions.login}>
                        <Text style={{ fontSize: 24, color: 'white' }}>返回登录</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}