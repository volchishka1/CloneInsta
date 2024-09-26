import React from "react";
import {Image, ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import {DataHelper} from "../helpers/DataHelper";

export const SearchScreen = () => {
    return (
        <ScrollView>
            <View style={styles.flexRow}>
                <View style={styles.topLeftContainer}>
                    {[...Array(4)].map((_, index) => (
                        <TouchableOpacity key={index}>
                            <Image style={styles.smallImage}
                                   source={{uri: "https://i.pinimg.com/736x/b1/3b/81/b13b81d79fe91e35008feeaf4c5b04d7.jpg"}}/>
                        </TouchableOpacity>
                    ))}
                </View>

                <View>
                    <Image style={styles.highImage}
                           source={{uri: "https://avatarko.ru/img/kartinka/2/zhivotnye_kot_prikol_ochki_1637.jpg"}}/>
                </View>

            </View>

            <View style={styles.centerContainer}>
                {[...Array(6)].map((_, index) => (
                    <TouchableOpacity key={index}>
                        <Image style={styles.smallImage}
                               source={{uri: "https://www.ixbt.com/img/n1/news/2021/10/2/22459ff25f8eff76bddf34124cc2c85b16f4cd4a_large.jpg"}}/>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.flexRow}>
                <View style={styles.bottomLeft}>
                    <Image style={styles.bigImage}
                           source={{uri: "https://www.ixbt.com/img/n1/news/2021/10/2/22459ff25f8eff76bddf34124cc2c85b16f4cd4a_large.jpg"}}/>
                </View>
                <View style={styles.bottomRight}>
                    {[...Array(2)].map((_, index) => (
                        <TouchableOpacity key={index}>
                            <Image style={styles.smallImage}
                                   source={{uri: "https://www.ixbt.com/img/n1/news/2021/10/2/22459ff25f8eff76bddf34124cc2c85b16f4cd4a_large.jpg"}}/>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: "row",
        justifyContent: "center",
    },
    smallImage: {
        width: DataHelper.getWidth() * 0.33,
        height: DataHelper.getWidth() * 0.33,
        marginTop: DataHelper.getWidth() * 0.003,
        marginRight: DataHelper.getWidth() * 0.002,
    },
    topLeftContainer: {
        width: DataHelper.getWidth() * 0.667,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    topRightContainer: {},
    highImage: {
        width: DataHelper.getWidth() * 0.33,
        height: DataHelper.getWidth() * 0.66,
        marginTop: DataHelper.getWidth() * 0.003,
        marginRight: DataHelper.getWidth() * 0.003,
    },
    bigImage: {
        width: DataHelper.getWidth() * 0.66,
        height: DataHelper.getWidth() * 0.66,
        marginTop: DataHelper.getWidth() * 0.003,
        marginRight: DataHelper.getWidth() * 0.003,
    },
    centerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    bottomLeft: {
        width: DataHelper.getWidth() * 0.66,
        height: DataHelper.getWidth() * 0.66,
        marginTop: DataHelper.getWidth() * 0.003,
        marginRight: DataHelper.getWidth() * 0.003,

    },
    bottomRight: {
        marginTop: DataHelper.getWidth() * 0.003,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
    }
})
