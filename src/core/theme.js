export const theme = {
  media: { tablet: 948, mobile: 480 },
  commonColors: {
    white: "rgba(255, 255, 255, 1)",
    whiteLilac: "rgba(251, 251, 254, 1)",
    iron: "rgba(229, 229, 229, 1)",
    alto: "rgba(218, 218, 218, 1)",
    atlanticBlue: "rgba(140, 194, 255, 1)",
    forestMist: "rgba(20, 70, 32, 0.2)",
    oceanBlue: "rgba(109, 147, 190, 1)",
    cornflowerBlue: "rgba(209, 213, 218, 0.3)",
    mistGray: "rgba(209, 213, 218, 0.3)",
    slateGray: "rgba(110, 126, 145, 1)",
    electricBlue: "rgba(33, 136, 255, 1)",
    scienceBlue: "rgba(3, 102, 214, 1)",
    smokyGray: "rgba(54, 54, 54, 0.72)",
    smokySteel: "rgba(54, 54, 54, 0.72)",
    mineShaft: "rgba(37, 37, 37, 1)",
    black: "rgba(0, 0, 0, 1)",
    violet2: "rgba(9, 10, 51, 0.03)",
    violet: "rgba(9, 10, 51, 0.02)",
  },
};
export const lightTheme = {
  ...theme,
  colors: {
    backgrounds: {
      main: theme.commonColors.whiteLilac,
      section: theme.commonColors.white,
    },
    headers: {
      main: theme.commonColors.mineShaft,
      subheader: theme.commonColors.scienceBlue,
      intro: theme.commonColors.slateGray,
    },
    text: {
      normal: theme.commonColors.slateGray,
      highlighted: theme.commonColors.mineShaft,
    },
    bullet: theme.commonColors.scienceBlue,
    link: {
      background: theme.commonColors.scienceBlue,
      text: theme.commonColors.white,
      highlightedText: theme.commonColors.scienceBlue,
      onHover: theme.commonColors.electricBlue,
      shadowFocus: theme.commonColors.atlanticBlue,
    },
    icons: {
      switch: {
        internalBorder: theme.commonColors.cornflowerBlue,
        externalBorder: theme.commonColors.slateGray,
        mainBackground: theme.commonColors.iron,
        background: theme.commonColors.slateGray,
      },
      simple: {
        normal: theme.commonColors.mineShaft,
        highlighted: theme.commonColors.scienceBlue,
        forSwitch: theme.commonColors.white,
      },
      loading: {
        circle: theme.commonColors.cornflowerBlue,
        path: theme.commonColors.scienceBlue,
      },
    },
    underlinings: {
      header: theme.commonColors.iron,
      link: theme.commonColors.scienceBlue,
    },
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    backgrounds: {
      main: theme.commonColors.mineShaft,
      section: theme.commonColors.smokyGray,
    },
    headers: {
      main: theme.commonColors.white,
      subheader: theme.commonColors.white,
      intro: theme.commonColors.white,
    },
    text: {
      normal: theme.commonColors.white,
      highlighted: theme.commonColors.white,
    },
    link: {
      background: theme.commonColors.electricBlue,
      text: theme.commonColors.white,
      highlightedText: theme.commonColors.electricBlue,
      onHover: theme.commonColors.scienceBlue,
      shadowFocus: theme.commonColors.oceanBlue,
    },
    bullet: theme.commonColors.electricBlue,
    icons: {
      switch: {
        internalBorder: theme.commonColors.smokySteel,
        externalBorder: theme.commonColors.white,
        mainBackground: theme.commonColors.smokySteel,
        background: theme.commonColors.white,
      },
      simple: {
        normal: theme.commonColors.alto,
        highlighted: theme.commonColors.electricBlue,
        forSwitch: theme.commonColors.mineShaft,
      },
      loading: {
        circle: theme.commonColors.smokyGray,
        path: theme.commonColors.electricBlue,
      },
    },
    underlinings: {
      header: theme.commonColors.iron,
      link: theme.commonColors.electricBlue,
    },
  },
};
