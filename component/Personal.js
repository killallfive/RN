import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, Dimensions, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import { Actions } from "react-native-router-flux";

const { width } = Dimensions.get('window');
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};
const styles = StyleSheet.create({
    toptx: {
        height: 160,
        backgroundColor: '#f23030'
    },
    toux: {
        width: 0.15 * width,
        height: 0.15 * width,
        marginLeft: 0.42 * width,
        marginTop: 20,
        borderRadius: 0.07 * width
    },
    toux_t: {
        fontSize: 16,
        color: 'white',
        marginLeft: 0.37 * width,
        marginTop: 20
    },
    c_title: {
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        marginBottom: 1
    },
    c_tit_icon: {
        marginTop: 8,
        marginLeft: 20
    },
    c_tit_t: {
        fontSize: 18,
        marginTop: 12,
        marginLeft: 20
    },
    center_con: {
        width: width,
        height: 80,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    center_con1: {
        width: width,
        height: 80,
        backgroundColor: 'white',
        paddingLeft: 29
    },
    cen_con_bk: {
        width: 0.25 * width,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    ccbk_text: {
        fontSize: 16,
        marginTop: 10
    },
    c_title1: {
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        marginBottom: 1,
        marginTop: 5
    },
    ft_text: {
        fontSize: 12,
        color: '#767676',
        marginLeft: 0.38 * width,
        marginTop: 20
    },
    foot: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default class Personal extends Component {
    constructor() {
        super();
        this.state = {
            avatarSource: require('../images/touxiang.png')
        }
    }
    takephoto = () => {
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                return;
            } else if (response.error) {
                console.log('Error:', response.error);
            } else if (response.customButton) {
                console.log('custom:', response.customButton);
            } else {
                const source = { uri: response.uri };
                this.setState({
                    avatarSource: source,
                });
                this.storeData(source.uri);
            }
        });
    }
    componentDidMount() {
        AsyncStorage.getItem('image')
            .then((res) => {
                const imgsrc = { uri: res };
                if (res == null) {
                    this.setState({
                        avatarSource: require('../images/touxiang.png')
                    })
                }
                else {
                    this.setState({
                        avatarSource: imgsrc,
                    })
                }
            });
    }

    storeData = async (img) => {
        await AsyncStorage.setItem('image', img,
            () => { console.log('store success') }
        )
    }
    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor={'#f23030'}
                />
                <View style={styles.toptx}>
                    <TouchableOpacity onPress={this.takephoto}>
                        <Image source={this.state.avatarSource} style={styles.toux} />
                    </TouchableOpacity>
                    <Text style={styles.toux_t}>BINNU DHILLON</Text>
                </View>
                <View style={styles.c_title}>
                    <Icon name='child' size={30} style={styles.c_tit_icon} />
                    <Text style={styles.c_tit_t}>我的个人中心</Text>
                </View>
                <View style={styles.center_con}>
                    <View style={styles.cen_con_bk}>
                        <Icon name='cog' size={20} />
                        <Text style={styles.ccbk_text}>账户管理</Text>
                    </View>
                    <View style={styles.cen_con_bk}>
                        <Icon name='map-marker' size={20} />
                        <Text style={styles.ccbk_text}>收货地址</Text>
                    </View>
                    <View style={styles.cen_con_bk}>
                        <Icon name='info-circle' size={20} />
                        <Text style={styles.ccbk_text}>我的信息</Text>
                    </View>
                </View>
                <View style={styles.center_con}>
                    <View style={styles.cen_con_bk}>
                        <Icon name='list-alt' size={20} />
                        <Text style={styles.ccbk_text}>我的订单</Text>
                    </View>
                    <View style={styles.cen_con_bk}>
                        <Icon name='qrcode' size={20} />
                        <Text style={styles.ccbk_text}>我的二维码</Text>
                    </View>
                    <View style={styles.cen_con_bk}>
                        <Icon name='database' size={20} />
                        <Text style={styles.ccbk_text}>我的积分</Text>
                    </View>
                </View>
                <View style={styles.center_con1}>
                    <View style={styles.cen_con_bk}>
                        <Icon name='star-o' size={20} />
                        <Text style={styles.ccbk_text}>我的收藏</Text>
                    </View>
                </View>
                <View style={styles.c_title1}>
                    <Icon name='bookmark-o' size={30} style={styles.c_tit_icon} />
                    <Text style={styles.c_tit_t}>E族活动</Text>
                </View>
                <View style={styles.center_con}>
                    <View style={styles.cen_con_bk}>
                        <Icon name='plug' size={20} />
                        <Text style={styles.ccbk_text}>居家维修保养</Text>
                    </View>
                    <View style={styles.cen_con_bk}>
                        <Icon name='car' size={20} />
                        <Text style={styles.ccbk_text}>出行接送</Text>
                    </View>
                    <View style={styles.cen_con_bk}>
                        <Icon name='user' size={20} />
                        <Text style={styles.ccbk_text}>我的受赠人</Text>
                    </View>
                </View>
                <View style={styles.center_con}>
                    <View style={styles.cen_con_bk}>
                        <Icon name='hotel' size={20} />
                        <Text style={styles.ccbk_text}>我的住宿优惠</Text>
                    </View>
                    <View style={styles.cen_con_bk}>
                        <Icon name='handshake-o' size={20} />
                        <Text style={styles.ccbk_text}>我的活动</Text>
                    </View>
                    <TouchableOpacity onPress={() => Actions.publish()}>
                        <View style={styles.cen_con_bk}>
                            <Icon name='paint-brush' size={20} />
                            <Text style={styles.ccbk_text}>我的发布</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.foot}>
                    <TouchableOpacity onPress={() => {
                        AsyncStorage.getItem("user")
                            .then(res => {
                                if (res) {
                                    AsyncStorage.removeItem("user")
                                        .then((error) => console.log(error));
                                    Actions.login()
                                } else {
                                    console.log("请登录")
                                }
                            })
                    }}>
                        <Text style={{ fontSize: 16, color: "#a4a4a4" }} >BINNU DHILLON | 退出</Text>
                    </TouchableOpacity>
                </View>
                {/* <Text style={styles.ft_text}>BINNU DHILLON | 退出</Text> */}
            </View>
        )
    }
}