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
    accentLightBlue: "rgba(3, 102, 214, 0.2)",
    accentMediumBlue: "rgba(3, 102, 214, 0.5)",
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
      link: theme.commonColors.scienceBlue,
    },
    text: {
      main: theme.commonColors.mineShaft,
      highlighted: theme.commonColors.scienceBlue,
      normal: theme.commonColors.slateGray,
    },
    bullet: theme.commonColors.scienceBlue,
    link: {
      text: theme.commonColors.white,
      focused: theme.commonColors.atlanticBlue,
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
    borders: {
      header: theme.commonColors.iron,
      link: theme.commonColors.scienceBlue,
      card: theme.commonColors.accentLightBlue,
    },
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    backgrounds: {
      main: theme.commonColors.mineShaft,
      section: theme.commonColors.smokyGray,
      link: theme.commonColors.electricBlue,
    },
    text: {
      main: theme.commonColors.white,
      highlighted: theme.commonColors.electricBlue,
      normal: theme.commonColors.white,
    },
    link: {
      text: theme.commonColors.white,
      focused: theme.commonColors.oceanBlue,
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
    borders: {
      header: theme.commonColors.iron,
      link: theme.commonColors.electricBlue,
      card: theme.commonColors.accentMediumBlue,
    },
  },
};
