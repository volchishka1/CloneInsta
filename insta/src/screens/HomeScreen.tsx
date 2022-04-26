import React from 'react';
import {SvgLogo} from '../assets/icons/IconSvgLogo';
import {SvgPlus} from "../assets/icons/IconSvgPlus";
import {SvgFavourite} from "../assets/icons/IconSvgAddFavourite";
import {SvgMessages} from "../assets/icons/IconSvgMessages";
import {Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import {AgEnum, Text} from "../components/ui/Text";
import {TextHelper} from "../helpers/TextHelper";
import {PostCard} from "../components/PostCard";
import {HistoryData} from "../store/HistoryData";
import {Colors} from '../styles/Colors';
import {HistoryHelper} from "../helpers/HistoryHelper";
import {IHistory} from "../types/HistoryTypes";

export const HomeScreen = () => {
    
    return (
        <>
            <View style={styles.tooContainer}>
                <SvgLogo/>
                <View style={styles.tooContainerIcons}>
                    <TouchableOpacity style={{marginRight: 20}}>
                        <SvgPlus/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginRight: 20}}>
                        <SvgFavourite/>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <SvgMessages/>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView>
                <ScrollView style={{marginTop: 12}} horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                    {HistoryHelper.getHistory(HistoryData).map((item: IHistory, index) => (
                        <View style={[styles.historyItemContainer, index === 0 && {marginLeft: 8}]}
                              key={item.id}>
                            <TouchableOpacity
                                style={[styles.historyItem, item.active
                                    ? styles.historyItemActive
                                    : styles.historyItemNotActive]}>
                                <Image style={styles.history} source={{uri: item.avatar}}/>
                            </TouchableOpacity>
                            <Text Ag={AgEnum.SUBTITLE}
                                  align={"center"}>{TextHelper.getUserHistoryName(item.name)}</Text>
                        </View>
                    ))}
                </ScrollView>
                {[...Array(10)].map((_, index) => (
                    <PostCard key={index}/>
                ))}

            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    tooContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop: 6

    },
    tooContainerIcons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    history: {
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
        borderWidth: 2,
        borderColor: "white",

    },
    historyItemContainer: {
        marginRight: 16,
    },
    historyItem: {
        height: 65,
        width: 65,
        borderRadius: 65,
        borderWidth: 2,
        borderColor: Colors.red,
    },
    historyItemNotActive: {
        borderColor: Colors.gray,
    },
    historyItemActive: {
        borderColor: Colors.red,
    },
})
