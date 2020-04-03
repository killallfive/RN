import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Dimensions, Image, ScrollView, StatusBar } from 'react-native';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    box_top: {
        backgroundColor: 'white',
        borderBottomColor: '#d5dbdf',
        borderBottomWidth: 1
    },
    searchBar: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    searchBox: {
        width: 0.7 * width,
        height: 40,
        paddingLeft: 20,
        backgroundColor: '#edeeef'
    },
    searchPngBox: {
        width: 0.08 * width,
        height: 40,
        paddingTop: 10,
        backgroundColor: '#edeeef'
    },
    searchBoxPng: {
        width: 20,
        height: 20,
    },
    box_bottom: {
        height: 60,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    bottom_text: {
        width: 0.2 * width,
        alignItems: 'center',
        paddingTop: 20
    },
    bottom_pic: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    },
    bottom_piece: {
        width: 0.45 * width,
        height: 290,
        backgroundColor: 'white',
        marginTop: 10
    },
    bottom_piece_pic: {
        width: 0.25 * width,
        height: 160,
        marginLeft: 40,
        marginTop: 20
    }
});

export default class List extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.box_top}>
                    <View style={styles.searchBar}>
                        <TextInput placeholder="请输入商品名称" style={styles.searchBox} />
                        <View style={styles.searchPngBox}>
                            <Image style={styles.searchBoxPng} source={require('../images/searchbox.png')} />
                        </View>
                    </View>
                </View>
                <View style={styles.box_bottom}>
                    <View style={styles.bottom_text}>
                        <Text style={{ color: '#a0a0a0' }}>综合</Text>
                    </View>
                    <View style={styles.bottom_text}>
                        <Text style={{ color: '#a0a0a0' }}>销量</Text>
                    </View>
                    <View style={styles.bottom_text}>
                        <Text style={{ color: '#a0a0a0' }}>新品</Text>
                    </View>
                    <View style={styles.bottom_text}>
                        <Text style={{ color: '#a0a0a0' }}>价格</Text>
                    </View>
                    <View style={styles.bottom_text}>
                        <Text style={{ color: '#a0a0a0' }}>信用</Text>
                    </View>
                </View>
                <View style={styles.bottom_pic}>
                    <View style={styles.bottom_piece}>
                        <Image style={styles.bottom_piece_pic} source={require('../images/pic1.png')} />
                        <Text style={{ marginLeft: 10, marginTop: 15, fontSize: 13, color: '#a0a0a0' }}>Oishi/上好佳玉米卷20包膨化休</Text>
                        <Text style={{ marginLeft: 10, marginTop: 5, fontSize: 13, color: '#a0a0a0' }}>闲食品Oishi/上好佳</Text>
                        <Text style={{ marginLeft: 10, marginTop: 15, fontSize: 13, color: 'red' }}>36.00</Text>
                    </View>
                    <View style={styles.bottom_piece}>
                        <Image style={styles.bottom_piece_pic} source={require('../images/pic2.png')} />
                        <Text style={{ marginLeft: 10, marginTop: 15, fontSize: 13, color: '#a0a0a0' }}>Oishi/上好佳玉米卷20包膨化休</Text>
                        <Text style={{ marginLeft: 10, marginTop: 5, fontSize: 13, color: '#a0a0a0' }}>闲食品Oishi/上好佳</Text>
                        <Text style={{ marginLeft: 10, marginTop: 15, fontSize: 13, color: 'red' }}>36.00</Text>
                    </View>
                    <View style={styles.bottom_piece}>
                        <Image style={styles.bottom_piece_pic} source={require('../images/pic1.png')} />
                        <Text style={{ marginLeft: 10, marginTop: 15, fontSize: 13, color: '#a0a0a0' }}>Oishi/上好佳玉米卷20包膨化休</Text>
                        <Text style={{ marginLeft: 10, marginTop: 5, fontSize: 13, color: '#a0a0a0' }}>闲食品Oishi/上好佳</Text>
                        <Text style={{ marginLeft: 10, marginTop: 15, fontSize: 13, color: 'red' }}>36.00</Text>
                    </View>
                    <View style={styles.bottom_piece}>
                        <Image style={styles.bottom_piece_pic} source={require('../images/pic2.png')} />
                        <Text style={{ marginLeft: 10, marginTop: 15, fontSize: 13, color: '#a0a0a0' }}>Oishi/上好佳玉米卷20包膨化休</Text>
                        <Text style={{ marginLeft: 10, marginTop: 5, fontSize: 13, color: '#a0a0a0' }}>闲食品Oishi/上好佳</Text>
                        <Text style={{ marginLeft: 10, marginTop: 15, fontSize: 13, color: 'red' }}>36.00</Text>
                    </View>
                    <View style={styles.bottom_piece}>
                        <Image style={styles.bottom_piece_pic} source={require('../images/pic1.png')} />
                        <Text style={{ marginLeft: 10, marginTop: 15, fontSize: 13, color: '#a0a0a0' }}>Oishi/上好佳玉米卷20包膨化休</Text>
                        <Text style={{ marginLeft: 10, marginTop: 5, fontSize: 13, color: '#a0a0a0' }}>闲食品Oishi/上好佳</Text>
                        <Text style={{ marginLeft: 10, marginTop: 15, fontSize: 13, color: 'red' }}>36.00</Text>
                    </View>
                    <View style={styles.bottom_piece}>
                        <Image style={styles.bottom_piece_pic} source={require('../images/pic2.png')} />
                        <Text style={{ marginLeft: 10, marginTop: 15, fontSize: 13, color: '#a0a0a0' }}>Oishi/上好佳玉米卷20包膨化休</Text>
                        <Text style={{ marginLeft: 10, marginTop: 5, fontSize: 13, color: '#a0a0a0' }}>闲食品Oishi/上好佳</Text>
                        <Text style={{ marginLeft: 10, marginTop: 15, fontSize: 13, color: 'red' }}>36.00</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
