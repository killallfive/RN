import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, Dimensions, TouchableOpacity, ToastAndroid } from 'react-native'

const { width } = Dimensions.get('window');

export default class Publish extends Component {
    constructor() {
        super();
        this.state = {
            page: 1,
            data: []
        }
    }
    componentDidMount() {
        fetch('https://cnodejs.org/api/v1/topics?limit=10&page=' + this.state.page)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res.data
                })
            })
    }
    nextPage = () => {
        this.setState({
            page: this.state.page + 1
        })
        fetch('https://cnodejs.org/api/v1/topics?limit=10&page=' + this.state.page)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res.data
                })
            })
    }
    lastPage = () => {
        if (this.state.page == 1) {
            ToastAndroid.show('这已经是第一页了哦！', 2000);
        } else {
            this.setState({
                page: this.state.page - 1
            })
            fetch('https://cnodejs.org/api/v1/topics?limit=10&page=' + this.state.page)
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        data: res.data
                    })
                })
        }
    }
    _renderItemSeparatorComponent = () => (
        <View style={styles.spc}></View>
    )
    _renderFooter = () => (
        <View style={styles.footer}>
            <TouchableOpacity
                style={styles.udbtn}
                onPress={this.lastPage}
            >
                <Text style={styles.btn_txt}>上一页</Text>
            </TouchableOpacity>
            <View style={styles.txt_area}>
                <Text style={styles.page_txt}>
                    第 {this.state.page} 页
                </Text>
            </View>
            <TouchableOpacity
                style={styles.udbtn}
                onPress={this.nextPage}
            >
                <Text style={styles.btn_txt}>下一页</Text>
            </TouchableOpacity>
        </View>
    )
    render() {
        return (
            <View>
                <FlatList
                    style={styles.flatlist}
                    data={this.state.data}
                    ItemSeparatorComponent={this._renderItemSeparatorComponent}
                    ListFooterComponent={this._renderFooter}
                    renderItem={({ item }) =>
                        <View style={styles.list}>
                            {
                                (item.title.length > 15) ?
                                    (<Text style={styles.list_txt}>{item.title.substr(0, 15)}...</Text>) :
                                    (<Text style={styles.list_txt}>{item.title}</Text>)
                            }
                            <Text>{item.create_at.substr(0, 10)}</Text>
                            {
                                (item.reply_count > 0) ?
                                    (<Text style={styles.list_rp}>已回复</Text>) :
                                    (<Text style={styles.list_norp}>待回复</Text>)
                            }
                        </View>
                    }

                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    flatlist: {
        marginTop: 5
    },
    list: {
        height: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row'
    },
    list_txt: {
        width: 0.65 * width,
        fontSize: 16,
        marginLeft: 10
    },
    list_rp: {
        marginLeft: 20
    },
    list_norp: {
        marginLeft: 20,
        color: 'red'
    },
    spc: {
        height: 1,
        backgroundColor: '#c2c3c4'
    },
    footer: {
        height: 80,
        backgroundColor: 'white',
        marginTop: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    udbtn: {
        height: 40,
        width: 0.3 * width,
        backgroundColor: '#f23030',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    btn_txt: {
        color: 'white',
        fontSize: 20
    },
    txt_area: {
        height: 40,
        width: 0.2 * width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    page_txt: {
        fontSize: 18
    }
})