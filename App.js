import React, { useEffect, useState } from 'react';
import { View, Text, AsyncStorage, Actions } from 'react-native';
import { Router, Scene, Tabs } from "react-native-router-flux";
import List from './component/List';
import Icon from 'react-native-vector-icons/FontAwesome';
import Index from './component/Index';
import Personal from './component/Personal';
import Buycar from './component/Buycar';
import Publish from './component/Publish';
import SplashScreen from 'react-native-splash-screen';
import SwiperPage from './component/SwiperPage';
import Login from './component/Login';
import Register from './component/Register';

const App = () => {
  let now = 0;
  let [isInstall, setInstall] = useState(true);
  let [isLogin, setLogin] = useState(false);

  let init = () => {
    AsyncStorage.getItem('isInstall')
      .then(res => {
        // console.log('isinstall', res)
        if (res) {
          setInstall(false);
        }
      })
    AsyncStorage.getItem('user')
      .then(res => {
        let user = JSON.parse(res)
        // console.log(user)
        if (!user) {
          SplashScreen.hide();
        }
        if (user && user.token) {
          setLogin(true);
          SplashScreen.hide();
        }
      })
  }
  useEffect(() => {
    init();
  }, [])
  let afterInstall = () => {
    setInstall(false)
  }
  if (isInstall) {
    return <View style={{ flex: 1 }}>
      <SwiperPage afterInstall={afterInstall} />
    </View>
  }

  return (
    <Router
      backAndroidHandler={() => {
        if (Actions.currentScene == 'publish') {
          return;
        }
        if (new Date().getTime() - now < 2000) {
          BackHandler.exitApp();
        } else {
          ToastAndroid.show('确定要退出吗', 100);
          now = new Date().getTime();
          return true;
        }
      }}>
      <Scene key="root">
        <Tabs
          key="tabbar"
          activeTintColor="red"
          hideNavBar
        >
          <Scene
            key="index"
            icon={({ focused }) => <Icon size={32} color={focused ? 'red' : 'black'} name='home' />}
            component={Index}
            title="首页"
            hideNavBar
          />
          <Scene
            key="apparrange"
            component={List}
            title="应用分类"
            icon={({ focused }) => <Icon size={28} color={focused ? 'red' : 'black'} name='delicious' />}
            hideNavBar
          />
          <Scene
            key="buycar"
            component={Buycar}
            title="购物车"
            icon={({ focused }) => <Icon size={28} color={focused ? 'red' : 'black'} name='shopping-basket' />}
            hideNavBar
          />
          <Scene
            key="personal"
            component={Personal}
            title="个人中心"
            icon={({ focused }) => <Icon size={28} color={focused ? 'red' : 'black'} name='user-circle' />}
            hideNavBar
          />
        </Tabs>
        <Scene
          name="我的发布"
          key="publish"
          component={Publish}
          title="我的发布"
          titleStyle={{ flex: 1, textAlign: 'center', color: 'white' }}
          renderRightButton={<View>
            <Icon
              size={28}
              color="white"
              name="info"
              style={{ marginRight: 20, marginTop: 5 }}
            />
          </View>}
          navigationBarStyle={{ backgroundColor: '#f23030' }}
          navBarButtonColor='white'
        />
        <Scene initial={!isLogin} hideNavBar key="login" component={Login} />
        <Scene key="register" hideNavBar component={Register} />
      </Scene>
    </Router>
  );
};

export default App;