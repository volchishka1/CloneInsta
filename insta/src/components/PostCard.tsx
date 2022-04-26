import React from "react";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {SvgDots} from "../assets/icons/IconSvgDots";
import {AgEnum, Text} from "./ui/Text";
import {SvgFavourite} from "../assets/icons/IconSvgAddFavourite";
import {SvgComment} from "../assets/icons/IconSvgComment";
import {SvgSend} from "../assets/icons/IconSvgSend";
import {SvgSeeFavourite} from "../assets/icons/IconSvgSeeFavourite";

export const PostCard = () => {
    return(
        <View>
            <View style={styles.tooContainer}>
                <View style={styles.flexRow}>
                    <Image style={styles.avatar} source={{ uri: "https://sun9-31.userapi.com/s/v1/ig2/07puDBaIAtnQPdW82nTuw10WYdgWkHRzARB5gCgRSO1roVfvKNWrPWOROLnxH3rsWLcZJhoGfVcEyrBaLWOFFY6U.jpg?size=810x1080&quality=96&type=album"}}/>
                    <Text style={{marginLeft: 9}} Ag={AgEnum.SUBTITLE}>Volchishka</Text>
                </View>
                <TouchableOpacity>
                    <SvgDots />
                </TouchableOpacity>
            </View>

            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: "https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg"}}/>
            </View>
            <View style={styles.tooContainer}>
                <View style={styles.flexRow}>
                    <TouchableOpacity>
                        <SvgFavourite />
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginLeft: 14}}>
                        <SvgComment />
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginLeft: 11}}>
                        <SvgSend />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <SvgSeeFavourite />
                </TouchableOpacity>
            </View>
            <Text style={{marginLeft: 12}} Ag={AgEnum.SUBTITLESTRONG}>100 Likes</Text>
            <View>
                <Text style={{marginLeft: 12}} Ag={AgEnum.SUBTITLESTRONG}>
                    <Text Ag={AgEnum.SUBTITLESTRONG}>
                        Volchishka{" "}
                    </Text>
                     you are super cool
                </Text>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    flexRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    tooContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 8,
        paddingRight: 16,
        paddingVertical: 9
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 30/2,
    },
    imageContainer: {

    },
    image: {
        width: "100%",
        height: 375,
    }

})
