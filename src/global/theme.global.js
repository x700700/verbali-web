import {colorTheme} from "./theme.colors";

export const appTheme = {
    mainWidth: '100%',
    headerBg: '#1F2532',
    headerHeight: '90px',
    headerTopHeight: '4rem',
    headerRow1Height: '70%',
    headerColor: 'white',
    artistIconSize: 142, // px
    houseTopPadding: 40, // px

    s1: '0.3rem',
    s2: '1rem',
};

export const themeGlobal = {
    reset: {
        bg: '',
        width: 'unset',
    },
    main: {
        width: appTheme.mainWidth,
        height: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    landingPageCard: {
        width: 210,
        height: 331,
        zoom: '82%',
        previewSize: 150,
        actionsHeight: 40,
        margin: '1rem',
        bgSmartLink: 'orange',
        header: {
            padding: appTheme.s1,
            color: 'black',
            title: {
                fontSize: '21px',
                padding: appTheme.s1,
            },
            subheader: {
                fontSize: '11px',
                padding: appTheme.s1,
                paddingTop: 0,
            },
        },
        info: {
            fontSize: '12px',
            bgSmartLink: 'rgba(255,194,74,0.24)',
        },
    },
    header: {
        front: {
            height: appTheme.headerHeight,
            bg: appTheme.headerBg,
            width: '100%',
            marginBottom: '0.3rem',
            zIndex: '3',
        },
        appIcon: {
            size: '40px',
            padding: appTheme.s1,
        },
        artistIcon: {
            size: `${appTheme.artistIconSize}px`,
            padding: appTheme.s1,
            marginTop: '-4px',
        },
        marketingLevel: {
            color: appTheme.headerColor,
            alignSelf: 'center',
            textAlign: 'center',
            fontSize: '11px',
        },
        upgrade: {
            alignSelf: 'center',
            textAlign: 'center',
        },
        account: {
            alignSelf: 'center',
            textAlign: 'right',
        },
        row1: {
            height: appTheme.headerRow1Height,
            color: appTheme.headerColor,
            paddingRight: appTheme.s1,
            // marginBottom: '5px',
            // justifyContent: 'space-evenly',
            zIndex: '3',
        },
        back: {
            height: appTheme.headerHeight,
            bg: appTheme.headerBg,
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            zIndex: '1',
        },
        backTop: {
            height: appTheme.headerTopHeight,
            bg: appTheme.headerBg,
            borderBottom: '1px solid rgba(151, 151, 151, 0.5)',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            zIndex: '2',
        },
        link: {
            width: '5rem',
            iconSize: '35px',
            fontSize: '12px',
            color: colorTheme.col0_m,
            hoverColor: colorTheme.col0_l1,
            selectedColor: colorTheme.col0_l3,
        },
    },
    footer: {
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        zIndex: '9',
    },
    appError: {
        marginLeft: '11.1%',
        width: '77.8%',
    },
    house: {
        flexGrow: '1',
        bg: colorTheme.col0_l3,
        overflow: 'scroll',
        //margin: '0.25rem',
    },
    error: {
        bg: '#f8d7da',
        color: '#721c24',
    },
};
