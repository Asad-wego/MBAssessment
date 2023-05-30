/*
 * Created by Asad on 30 May 2023 []
 */

import { Dimensions } from 'react-native';

const WINDOW_WIDTH: number = Dimensions.get('window').width;
const guidelineBaseWidth: number = 375;

export const scaleSize = (size: number) =>
    (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = (size: number) => size; //* PixelRatio.getFontScale();

function dimensions(
    top: number,
    right = top,
    bottom = top,
    left = right,
    property: string,
) {
    let styles = {};

    styles[`${property}Top`] = top;
    styles[`${property}Right`] = right;
    styles[`${property}Bottom`] = bottom;
    styles[`${property}Left`] = left;

    return styles;
}

export function margin(
    top: number,
    right: number,
    bottom: number,
    left: number,
) {
    return dimensions(top, right, bottom, left, 'margin');
}

export function padding(
    top: number,
    right: number,
    bottom: number,
    left: number,
) {
    return dimensions(top, right, bottom, left, 'padding');
}

export function boxShadow(
    color: any,
    offset = { height: 2, width: 2 },
    radius = 8,
    opacity = 0.2,
) {
    return {
        shadowColor: color,
        shadowOffset: offset,
        shadowOpacity: opacity,
        shadowRadius: radius,
        elevation: radius,
    };
}
