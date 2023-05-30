/*
 * Created by Asad on 30 May 2023 []
 */

import { Platform, Dimensions, StyleSheet } from 'react-native';

import { scaleFont } from './mixins';
import { colorPallet } from './colors';

// FONT FAMILY
const PlatformIOS = Platform.OS === 'ios';
export const FONT_FAMILY = 'poppins';

// FONT WEIGHT
export const FONT_WEIGHT_NORMAL = 'normal';
export const FONT_WEIGHT_BOLD = 'bold';
export const FONT_WEIGHT_600 = '600';

// FONT WEIGHT
export const FONT_STYLE_NORMAL = 'normal';
export const FONT_STYLE_ITALIC = 'italic';

// FONT SIZE
export const FONT_SIZE_24 = scaleFont(24);
export const FONT_SIZE_20 = scaleFont(20);
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);
export const FONT_SIZE_13 = scaleFont(13);
export const FONT_SIZE_10 = scaleFont(10);

// LINE HEIGHT
export const LINE_HEIGHT_32 = scaleFont(32);
export const LINE_HEIGHT_28 = scaleFont(28);
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

export const viewStyles = StyleSheet.create({
    shadow: {
        shadowColor: 'rgba(55, 57, 70, 0.08)', //R.colors.shadowColor,
        // shadowColor: 'red',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        elevation: 1,
        shadowOpacity: 1,
    },

    shadow2: {
        shadowColor:
            Platform.OS === 'android'
                ? 'rgba(0, 0, 0, 0.5)'
                : 'rgba(0, 0, 0, 0.1)',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowRadius: 4,
        shadowOpacity: 1,
        elevation: 4,
    },
    shadow3: {
        shadowColor:
            Platform.OS === 'android' ? '#373946' : 'rgba(0, 0, 0, 0.1)',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowRadius: 8,
        shadowOpacity: 1,
        elevation: 1,
    },
    shadow4: {
        shadowColor:
            Platform.OS === 'android'
                ? 'rgba(0, 0, 0, 0.5)'
                : 'rgba(0, 0, 0, 0.1)',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowRadius: 2,
        shadowOpacity: 1,
        elevation: 2,
    },
    shadow5: {
        shadowColor:
            Platform.OS === 'android'
                ? 'rgba(0, 0, 0, 0.5)'
                : 'rgba(42, 41, 97, 0.08)',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowRadius: 2,
        shadowOpacity: 0.35,
        elevation: 2,
    },
});
// responsive screen sizes
const { width: viewportWidth, height: viewportHeight } =
    Dimensions.get('window');
function wp(percentage: number) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}
function hp(percentage: number) {
    const value = (percentage * viewportHeight) / 100;
    return Math.round(value);
}
export { hp, wp };

// FONT STYLES
export const textStyles = StyleSheet.create({
    titleBoldCenterOrange: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_24,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_32,
        // letterSpacing: 0.3,
        textAlign: 'center',
        color: colorPallet.colorBrandOrange,
    },
    titleBoldCenterWhite: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_24,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        //lineHeight: LINE_HEIGHT_32,
        // letterSpacing: 0.3,
        textAlign: 'center',
        color: colorPallet.colorGrayscaleWhite,
    },
    titleBoldLeftBlack: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_24,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_32,
        // letterSpacing: 0.3,
        color: colorPallet.colorGrayscaleBlack,
    },
    titleBoldLeftWhite: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_24,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_32,
        // letterSpacing: 0.3,
        color: colorPallet.colorGrayscaleWhite,
    },
    titleBoldRightWhite: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_24,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_32,
        // letterSpacing: 0.3,
        textAlign: 'right',
        color: colorPallet.colorGrayscaleWhite,
    },
    titleBoldRightOrange: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_24,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_32,
        // letterSpacing: 0.3,
        textAlign: 'right',
        color: colorPallet.colorBrandOrange,
    },
    titleBoldRightBlack: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_24,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_32,
        // letterSpacing: 0.3,
        textAlign: 'right',
        color: colorPallet.colorGrayscaleBlack,
    },
    titleBoldCenterBlack: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_24,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_32,
        // letterSpacing: 0.3,
        textAlign: 'center',
        color: colorPallet.colorGrayscaleBlack,
    },
    titleBoldLeftOrange: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_24,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_32,
        // letterSpacing: 0.3,
        color: colorPallet.colorBrandOrange,
    },
    title2BoldRightWhite: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_20,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_28,
        // letterSpacing: 0.25,
        textAlign: 'right',
        color: colorPallet.colorGrayscaleWhite,
    },
    title2BoldCenterError: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_20,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_28,
        // letterSpacing: 0.25,
        textAlign: 'center',
        color: colorPallet.colorStatusError,
    },
    title2BoldCenterBlackPrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_20,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_28,
        // letterSpacing: 0.25,
        textAlign: 'center',
        color: colorPallet.colorGrayscaleBlack,
    },
    title2BoldLeftWhite: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_20,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_28,
        // letterSpacing: 0.25,
        color: colorPallet.colorGrayscaleWhite,
    },
    title2BoldCenterBlackSecondary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_20,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_28,
        // letterSpacing: 0.25,
        textAlign: 'center',
        color: colorPallet.colorGrayscaleBlackWithAlpha,
    },
    title2BoldCenterWhite: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_20,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_28,
        // letterSpacing: 0.25,
        textAlign: 'center',
        color: colorPallet.colorGrayscaleWhite,
    },
    title2BoldLeftBlack: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_20,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_28,
        // letterSpacing: 0.25,
        color: colorPallet.colorGrayscaleBlack,
    },
    title2BoldRightBlack: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_20,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_28,
        // letterSpacing: 0.25,
        textAlign: 'right',
        color: colorPallet.colorGrayscaleBlack,
    },
    symbolOrganizerGroupTitle: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_20,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_24,
        // letterSpacing: 0,
        textAlign: 'right',
        color: '#000000',
    },
    bodyBoldCenterOrange: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_16,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_24,
        // letterSpacing: 0.2,
        textAlign: 'center',
        color: colorPallet.colorBrandOrange,
    },
    bodyBoldRightWhitePrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_16,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_24,
        // letterSpacing: 0.2,
        textAlign: 'right',
        color: colorPallet.colorGrayscaleWhite,
    },
    bodyBoldCenterWhitePrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_16,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_24,
        // letterSpacing: 0.2,
        textAlign: 'center',
        color: colorPallet.colorGrayscaleWhite,
    },
    bodyBoldLeftOrange: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_16,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_24,
        // letterSpacing: 0.2,
        color: colorPallet.colorBrandOrange,
    },
    bodyBoldLeftBlackPrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_16,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_24,
        // letterSpacing: 0.2,
        color: colorPallet.colorGrayscaleBlack,
    },
    bodyBoldRightOrange: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_16,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_24,
        // letterSpacing: 0.2,
        textAlign: 'right',
        color: colorPallet.colorBrandOrange,
    },
    bodyBoldLeftWhitePrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_16,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_24,
        // letterSpacing: 0.2,
        color: colorPallet.colorGrayscaleWhite,
    },
    bodyBoldCenterBlackPrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_16,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_24,
        // letterSpacing: 0.2,
        textAlign: 'center',
        color: colorPallet.colorGrayscaleBlack,
    },
    bodyBoldRightBlackPrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_16,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_24,
        // letterSpacing: 0.2,
        textAlign: 'right',
        color: colorPallet.colorGrayscaleBlack,
    },
    bodyRegularCenterBlackSecondary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_16,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_24,
        // letterSpacing: 0.2,
        textAlign: 'center',
        color: colorPallet.colorGrayscaleBlackWithAlpha,
    },
    bodyRegularCenterWhitePrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_16,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_24,
        // letterSpacing: 0.2,
        textAlign: 'center',
        color: colorPallet.colorGrayscaleWhite,
    },
    bodyRegularCenterBlackPrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_16,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_24,
        // letterSpacing: 0.2,
        textAlign: 'center',
        color: colorPallet.colorGrayscaleBlack,
    },
    bodyRegularCenterGrayPrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_16,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_24,
        // letterSpacing: 0.2,
        textAlign: 'center',
        color: colorPallet.colorGrayscaleGray,
    },
    bodyRegularLeftBlackPrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_16,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_24,
        // letterSpacing: 0.2,
        color: colorPallet.colorGrayscaleBlack,
    },
    bodyRegularLeftBlackSecondary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_16,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_24,
        // letterSpacing: 0.2,
        color: colorPallet.colorGrayscaleBlackWithAlpha,
    },
    bodyRegularRightOrange: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_16,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_24,
        // letterSpacing: 0.2,
        textAlign: 'right',
        color: colorPallet.colorBrandOrange,
    },
    bodyRegularRightWhitePrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_16,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_24,
        // letterSpacing: 0.2,
        textAlign: 'right',
        color: colorPallet.colorGrayscaleWhite,
    },
    bodyRegularRightBlackSecondary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_16,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_24,
        // letterSpacing: 0.2,
        textAlign: 'right',
        color: colorPallet.colorGrayscaleBlackWithAlpha,
    },
    bodyRegularCenterOrange: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_16,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_24,
        // letterSpacing: 0.2,
        textAlign: 'center',
        color: colorPallet.colorBrandOrange,
    },
    bodyRegularLeftWhitePrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_16,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_24,
        // letterSpacing: 0.2,
        color: colorPallet.colorGrayscaleWhite,
    },
    bodyRegularCenterWhiteSecondary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_16,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_24,
        // letterSpacing: 0.2,
        textAlign: 'center',
        color: colorPallet.colorGrayscaleWhiteWithAlpha,
    },
    bodyRegularLeftWhiteSecondary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_16,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_24,
        // letterSpacing: 0.2,
        color: colorPallet.colorGrayscaleWhiteWithAlpha,
    },
    bodyRegularLeftOrange: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_16,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_24,
        // letterSpacing: 0.2,
        color: colorPallet.colorBrandOrange,
    },
    bodyRegularRightWhiteSecondary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_16,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_24,
        // letterSpacing: 0.2,
        textAlign: 'right',
        color: colorPallet.colorGrayscaleWhiteWithAlpha,
    },
    bodyRegularRightBlackPrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_16,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_24,
        // letterSpacing: 0.2,
        textAlign: 'right',
        color: colorPallet.colorGrayscaleBlack,
    },
    body2BoldCenterWhitePrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_14,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        textAlign: 'center',
        color: colorPallet.colorGrayscaleWhite,
    },
    body2BoldLeftOrange: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_14,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        color: colorPallet.colorBrandOrange,
    },
    body2BoldLeftBlackPrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_14,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        color: colorPallet.colorGrayscaleBlack,
    },
    body2BoldCenterBlackPrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_14,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        textAlign: 'center',
        color: colorPallet.colorGrayscaleBlack,
    },
    body2BoldRightWhitePrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_14,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        textAlign: 'right',
        color: colorPallet.colorGrayscaleWhite,
    },
    body2BoldRightBlackSecondary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_14,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        textAlign: 'right',
        color: colorPallet.colorGrayscaleBlackWithAlpha,
    },
    body2BoldCenterBlackSecondary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_14,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        textAlign: 'center',
        color: colorPallet.colorGrayscaleBlackWithAlpha,
    },
    body2BoldRightOrange: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_14,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        textAlign: 'right',
        color: colorPallet.colorBrandOrange,
    },
    body2BoldLeftWhitePrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_14,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        color: colorPallet.colorGrayscaleWhite,
    },
    body2BoldLeftError: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_14,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        color: colorPallet.colorStatusError,
    },
    body2BoldRightBlackPrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_14,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        textAlign: 'right',
        color: colorPallet.colorGrayscaleBlack,
    },
    body2BoldLeftBlackSecondary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_14,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        color: colorPallet.colorGrayscaleBlackWithAlpha,
    },
    body2BoldRightWhiteSecondary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_14,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        textAlign: 'right',
        color: colorPallet.colorGrayscaleWhiteWithAlpha,
    },
    body2BoldCenterWhiteSecondary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_14,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        textAlign: 'center',
        color: colorPallet.colorGrayscaleWhiteWithAlpha,
    },
    body2BoldCenterOrange: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_14,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        textAlign: 'center',
        color: colorPallet.colorBrandOrange,
    },
    body2BoldLeftWhiteSecondary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_14,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        color: colorPallet.colorGrayscaleWhiteWithAlpha,
    },
    body2RegularRightOrange: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_14,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        textAlign: 'right',
        color: colorPallet.colorBrandOrange,
    },
    body2RegularLeftOrange: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_14,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        color: colorPallet.colorBrandOrange,
    },
    body2RegularCenterWhiteSecondary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_14,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        textAlign: 'center',
        color: colorPallet.colorGrayscaleWhiteWithAlpha,
    },
    body2RegularCenterBlackSecondary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_14,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        textAlign: 'center',
        color: colorPallet.colorGrayscaleBlackWithAlpha,
    },
    body2RegularLeftBlackSecondary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_14,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        color: colorPallet.colorGrayscaleBlackWithAlpha,
    },
    body2RegularCenterWhitePrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_14,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        textAlign: 'center',
        color: colorPallet.colorGrayscaleWhite,
    },
    body2RegularRightBlackSecondary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_14,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        textAlign: 'right',
        color: colorPallet.colorGrayscaleBlackWithAlpha,
    },
    body2RegularRightWhiteSecondary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_14,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        textAlign: 'right',
        color: colorPallet.colorGrayscaleWhiteWithAlpha,
    },
    body2RegularLeftBlackPrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_14,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        color: colorPallet.colorGrayscaleBlack,
    },
    body2RegularRightBlackPrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_14,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        textAlign: 'right',
        color: colorPallet.colorGrayscaleBlack,
    },
    body2RegularLeftWhiteSecondary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_14,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        color: colorPallet.colorGrayscaleWhiteWithAlpha,
    },
    body2RegularCenterOrange: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_14,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        textAlign: 'center',
        color: colorPallet.colorBrandOrange,
    },

    body2RegularCenterLinkOrange: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_10,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        textAlign: 'center',
        color: colorPallet.colorBrandOrange,
    },
    body2RegularCenterWhiteTimePrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_10,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        textAlign: 'right',
        color: colorPallet.colorGrayscaleWhite,
    },
    body2RegularRightWhitePrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_14,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        textAlign: 'right',
        color: colorPallet.colorGrayscaleWhite,
    },
    body2RegularLeftWhitePrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_14,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        color: colorPallet.colorGrayscaleWhite,
    },
    body2RegularCenterGrayRegular: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_12,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        color: colorPallet.colorGrayscaleGray,
    },
    body2RegularCenterBlackPrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_14,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        textAlign: 'center',
        color: colorPallet.colorGrayscaleBlack,
    },
    captionBoldRightWhitePrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_12,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_16,
        // letterSpacing: 0.15,
        textAlign: 'right',
        color: colorPallet.colorGrayscaleWhite,
    },
    captionBoldLeftWhitePrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_12,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_16,
        // letterSpacing: 0.15,
        color: colorPallet.colorGrayscaleWhite,
    },
    captionBoldCenterOrange: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_12,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_16,
        // letterSpacing: 0.15,
        textAlign: 'center',
        color: colorPallet.colorBrandOrange,
    },
    captionBoldRightBlackPrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_12,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_16,
        // letterSpacing: 0.15,
        textAlign: 'right',
        color: colorPallet.colorGrayscaleBlack,
    },
    captionBoldCenterWhitePrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_12,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_16,
        // letterSpacing: 0.15,
        textAlign: 'center',
        color: colorPallet.colorGrayscaleWhite,
    },
    captionBoldLeftOrange: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_12,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_16,
        // letterSpacing: 0.15,
        color: colorPallet.colorBrandOrange,
    },
    captionBoldRightOrange: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_12,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_16,
        // letterSpacing: 0.15,
        textAlign: 'right',
        color: colorPallet.colorBrandOrange,
    },
    captionBoldLeftBlackPrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_12,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_16,
        // letterSpacing: 0.15,
        color: colorPallet.colorGrayscaleBlack,
    },
    captionBoldCenterBlackPrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_12,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_16,
        // letterSpacing: 0.15,
        textAlign: 'center',
        color: colorPallet.colorGrayscaleBlack,
    },
    captionBoldCenterBlackSecondary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_12,
        fontWeight: FONT_WEIGHT_600,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_16,
        // letterSpacing: 0.15,
        textAlign: 'center',
        color: colorPallet.colorGrayscaleBlackWithAlpha,
    },
    captionBoldLeftWhiteSecondary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_12,
        fontWeight: FONT_WEIGHT_600,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_16,
        // letterSpacing: 0.15,
        color: colorPallet.colorGrayscaleWhiteWithAlpha,
    },
    captionBoldCenterWhiteSecondary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_12,
        fontWeight: FONT_WEIGHT_600,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_16,
        // letterSpacing: 0.15,
        textAlign: 'center',
        color: colorPallet.colorGrayscaleWhiteWithAlpha,
    },
    captionBoldRightBlackSecondary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_12,
        fontWeight: FONT_WEIGHT_600,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_16,
        // letterSpacing: 0.15,
        textAlign: 'right',
        color: colorPallet.colorGrayscaleBlackWithAlpha,
    },
    captionBoldRightWhiteSecondary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_12,
        fontWeight: FONT_WEIGHT_600,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_16,
        // letterSpacing: 0.15,
        textAlign: 'right',
        color: colorPallet.colorGrayscaleWhiteWithAlpha,
    },
    captionBoldLeftBlackSecondary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_12,
        fontWeight: FONT_WEIGHT_600,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_16,
        // letterSpacing: 0.15,
        color: colorPallet.colorGrayscaleBlackWithAlpha,
    },
    captionRegularRightOrange: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_12,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_16,
        // letterSpacing: 0.15,
        textAlign: 'right',
        color: colorPallet.colorBrandOrange,
    },
    captionRegularRightWhitePrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_12,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_16,
        // letterSpacing: 0.15,
        textAlign: 'right',
        color: colorPallet.colorGrayscaleWhite,
    },
    captionRegularRightBlackSecondary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_12,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_16,
        // letterSpacing: 0.15,
        textAlign: 'right',
        color: colorPallet.colorGrayscaleBlackWithAlpha,
    },
    captionRegularLeftError: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_12,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_16,
        // letterSpacing: 0.15,
        color: colorPallet.colorStatusError,
    },
    captionRegularRightWhiteSecondary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_12,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_16,
        // letterSpacing: 0.15,
        textAlign: 'right',
        color: colorPallet.colorGrayscaleWhiteWithAlpha,
    },
    captionRegularLeftOrange: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_12,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_16,
        // letterSpacing: 0.15,
        color: colorPallet.colorBrandOrange,
    },
    captionRegularRightBlackPrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_12,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_16,
        // letterSpacing: 0.15,
        textAlign: 'right',
        color: colorPallet.colorGrayscaleBlack,
    },
    captionRegularCenterWhitePrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_12,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_16,
        // letterSpacing: 0.15,
        textAlign: 'center',
        color: colorPallet.colorGrayscaleWhite,
    },
    captionRegularCenterOrange: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_12,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_16,
        // letterSpacing: 0.15,
        textAlign: 'center',
        color: colorPallet.colorBrandOrange,
    },
    captionRegularLeftBlackPrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_12,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_16,
        // letterSpacing: 0.15,
        color: colorPallet.colorGrayscaleBlack,
    },
    captionRegularCenterBlackSecondary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_12,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_16,
        // letterSpacing: 0.15,
        textAlign: 'center',
        color: colorPallet.colorGrayscaleBlackWithAlpha,
    },
    captionRegularCenterWhiteSecondary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_12,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_16,
        // letterSpacing: 0.15,
        textAlign: 'center',
        color: colorPallet.colorGrayscaleWhiteWithAlpha,
    },
    captionRegularLeftBlackSecondary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_12,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_16,
        // letterSpacing: 0.15,
        color: colorPallet.colorGrayscaleBlackWithAlpha,
    },
    captionRegularLeftWhitePrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_12,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_16,
        // letterSpacing: 0.15,
        color: colorPallet.colorGrayscaleWhite,
    },
    captionRegularLeftWhiteSecondary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_12,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_16,
        // letterSpacing: 0.15,
        color: colorPallet.colorGrayscaleWhiteWithAlpha,
    },
    captionRegularCenterBlackPrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_12,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_16,
        // letterSpacing: 0.15,
        textAlign: 'center',
        color: colorPallet.colorGrayscaleBlack,
    },
    captionBoldCenterOddBlackPrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_13,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_16,
        // letterSpacing: 0.15,
        textAlign: 'center',
        color: colorPallet.colorGrayscaleBlack,
    },

    body3RegularCenterPrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_10,
        fontWeight: FONT_WEIGHT_NORMAL,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        textAlign: 'center',
        color: colorPallet.colorGrayscaleBlack,
    },
    body3BoldCenterPrimary: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_10,
        fontWeight: FONT_WEIGHT_BOLD,
        fontStyle: FONT_STYLE_NORMAL,
        // lineHeight: LINE_HEIGHT_20,
        // letterSpacing: 0.18,
        textAlign: 'center',
        color: colorPallet.colorGrayscaleBlack,
    },
});
