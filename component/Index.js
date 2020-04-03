import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, Dimensions, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import Button from 'react-native-button';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    searchBox: {
        height: 60,
        backgroundColor: '#f23030',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 10
    },
    sb_all: {
        flexDirection: 'row',
        color: 'white'
    },
    sb_icon: {
        height: 40,
        width: 0.15 * width,
        backgroundColor: '#fbb8b8',
        paddingTop: 7,
        paddingLeft: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20
    },
    sb_content: {
        height: 40,
        width: 0.65 * width,
        backgroundColor: '#fbb8b8',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20
    },
    sb_ri: {
        marginLeft: 20,
        marginTop: 5
    },
    bannerv: {
        height: 200
    },
    swiper: {},
    img: {
        width: width,
        height: 200,
    },
    centlist: {
        marginTop: 10,
        height: 70,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    clistpic: {
        width: 60,
        height: 60,
        marginTop: 5,
        marginLeft: 15
    },
    clisttext: {
        fontSize: 18,
        marginTop: 20,
        marginLeft: 20
    },
    clistotext: {
        fontSize: 18,
        marginTop: 20,
        marginLeft: 20,
        color: '#fbb8b8'
    },
    clistrt: {
        color: '#cecece',
        fontSize: 18,
        marginTop: 20,
        marginLeft: 260
    },
    clistrt1: {
        color: '#cecece',
        fontSize: 18,
        marginTop: 20,
        marginLeft: 265
    },
    clistrt2: {
        color: '#cecece',
        fontSize: 18,
        marginTop: 20,
        marginLeft: 225
    },
    btn: {
        width: 0.8 * width,
        height: 50,
        backgroundColor: '#f23030',
        textAlignVertical: 'center',
        color: '#fff',
        marginLeft: 0.1 * width,
        borderRadius: 10,
        marginTop: 20
    },
    ft_text: {
        fontSize: 12,
        color: '#767676',
        marginLeft: 0.38 * width,
        marginTop: 35
    }
});
export default class Index extends Component {
    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor={'#f23030'}
                />
                <View style={styles.searchBox}>
                    <View style={styles.sb_all}>
                        <View style={styles.sb_icon}>
                            <Icon name='search' size={25} color={'white'} />
                        </View>
                        <TextInput placeholder="请输入您要搜索的关键字" placeholderTextColor="white" style={styles.sb_content} />
                        <Icon name='shopping-cart' size={28} color={'white'} style={styles.sb_ri} />
                    </View>
                </View>
                <View style={styles.bannerv}>
                    <Swiper
                        style={styles.swiper}
                        height={200}
                        horizontal={true}
                        loop={true}
                        autoplay={true}
                        paginationStyle={{ bottom: 10 }}
                        showsButtons={false}
                        dot={<View style={{           //未选中的圆点样式
                            backgroundColor: 'white',
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginLeft: 10,
                            marginRight: 9,
                            marginTop: 9,
                            marginBottom: 9,
                        }} />}
                        activeDot={<View style={{    //选中的圆点样式
                            backgroundColor: '#fd0304',
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginLeft: 10,
                            marginRight: 9,
                            marginTop: 9,
                            marginBottom: 9,
                        }} />}
                    >
                        <Image source={require('../images/banner1.png')} style={styles.img} />
                        <Image source={require('../images/banner2.png')} style={styles.img} />
                        <Image source={require('../images/banner1.png')} style={styles.img} />
                    </Swiper>
                </View>
                <View style={styles.centlist}>
                    <Image source={require('../images/clist1.png')} style={styles.clistpic} />
                    <Text style={styles.clisttext}>居家维修保养</Text>
                    <Text style={styles.clistrt2}>></Text>
                </View>
                <View style={styles.centlist}>
                    <Image source={require('../images/clist2.png')} style={styles.clistpic} />
                    <Text style={styles.clisttext}>住宿优惠</Text>
                    <Text style={styles.clistrt}>></Text>
                </View>
                <View style={styles.centlist}>
                    <Image source={require('../images/clist3.png')} style={styles.clistpic} />
                    <Text style={styles.clisttext}>出行接送</Text>
                    <Text style={styles.clistrt}>></Text>
                </View>
                <View style={styles.centlist}>
                    <Image source={require('../images/clist4.png')} style={styles.clistpic} />
                    <Text style={styles.clistotext}>E族活动</Text>
                    <Text style={styles.clistrt1}>></Text>
                </View>
                <Button style={styles.btn}>发布需求</Button>
                <Text style={styles.ft_text}>©E族之家 版权所有</Text>
            </View>
        )
    }
}