import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {HomeScreen} from "../../screens/HomeScreen";
import {Screens} from "../screens/Screens";
import {SearchScreen} from "../../screens/SearchScreen";
import {SvgBottomHome} from "../../assets/bottomTab/IconSvgBottomHome";
import {SvgBottomSearch} from "../../assets/bottomTab/IconSvgBottomSearch";
import { SvgBottomHomeActive } from "../../assets/bottomTab/IconSvgBottomHomeActive";
import { SvgBottomPlus } from "../../assets/bottomTab/IconSvgBottomPlus";
import {SharedScreen} from "../../screens/SharedScreen";
import { LikedScreen } from "../../screens/LikedScreen";
import {ProfileScreen} from "../../screens/ProfileScreen";
import {SvgBottomProfile} from "../../assets/bottomTab/IconSvgBottomProfile";
import {SvgBottomFavourite} from "../../assets/bottomTab/IconSvgBottomFavourite";

export const BottomTab = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
            <Tab.Screen
                name={Screens.HOME}
                component={HomeScreen}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({focused}) => {
                        return focused ? <SvgBottomHomeActive /> : <SvgBottomHome />
                    }
                }}
            />
            <Tab.Screen
                name={Screens.SEARCH}
                component={SearchScreen}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: (focused) => {
                        return <SvgBottomSearch />
                    }
                }}/>
            <Tab.Screen
                name={Screens.SHARED}
                component={SharedScreen}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: (focused) => {
                        return <SvgBottomPlus />
                    }
                }}/>
            <Tab.Screen
                name={Screens.LIKED}
                component={LikedScreen}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: (focused) => {
                        return <SvgBottomFavourite />
                    }
                }}/>
            <Tab.Screen
                name={Screens.PROFILE}
                component={ProfileScreen}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: (focused) => {
                        return <SvgBottomProfile />
                    }
                }}/>
        </Tab.Navigator>
    )
}
