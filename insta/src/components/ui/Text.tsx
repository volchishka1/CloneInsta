import React from "react";
import {TextProps, Text as RNText, StyleSheet} from "react-native";
import { Colors } from "../../styles/Colors";



export enum AgEnum {
    H1='h1',
    SUBTITLE="SUBTITLE",
    SUBTITLESTRONG="SUBTITLESTRONG",
}

interface IText extends TextProps {
    Ag: AgEnum;
    children?: string | React.ReactNode[];
    align?: "auto" | "left" | "right" | "center" | "justify";
    color?: string;
}

export const Text = (props: IText) => {
  const {Ag, color, align} = props;

  return (
      <RNText
          {...props}
          style={[
              styles[Ag],
              {
                  color: color || Colors.black,
                  textAlign: align || "auto",
              },
              props.style,
          ]}
      />
  );
}

const styles = StyleSheet.create({
    [AgEnum.H1]: {
        fontSize: 28,
        lineHeight: 34,
        letterSpacing: 0.36,
        fontWeight: "700",
    }, [AgEnum.SUBTITLE]: {
        fontSize: 12,
        lineHeight: 22,
    }, [AgEnum.SUBTITLESTRONG]: {
        fontSize: 13,
        lineHeight: 22,
        fontWeight: "bold",
    }
})

