const common = {
  mediaBreakpoints: { tablet: 948, mobile: 480 },
  colorNames: {
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
  shadow: {
    boxShadow: `0px 16px 58px 0px  ${({ colors }) => colors.violet2},
              0px -2px 50px 0px ${({ colors }) => colors.violet2}`,
  },
};


export const lightTheme = {
  ...common,
  colors: {
    backgrounds: {
      main: common.colorNames.whiteLilac,
      section: common.colorNames.white,
      link: common.colorNames.scienceBlue,
    },
    text: {
      main: common.colorNames.mineShaft,
      highlighted: common.colorNames.scienceBlue,
      normal: common.colorNames.slateGray,
    },
    bullet: common.colorNames.scienceBlue,
    link: {
      text: common.colorNames.white,
      focused: common.colorNames.atlanticBlue,
    },
    icons: {
      switch: {
        internalBorder: common.colorNames.cornflowerBlue,
        externalBorder: common.colorNames.slateGray,
        mainBackground: common.colorNames.iron,
        background: common.colorNames.slateGray,
      },
      simple: {
        normal: common.colorNames.mineShaft,
        highlighted: common.colorNames.scienceBlue,
        forSwitch: common.colorNames.white,
      },
      loading: {
        circle: common.colorNames.cornflowerBlue,
        path: common.colorNames.scienceBlue,
      },
    },
    borders: {
      header: common.colorNames.iron,
      link: common.colorNames.scienceBlue,
      card: common.colorNames.accentLightBlue,
    },
  },
};

export const darkTheme = {
  ...common,
  colors: {
    backgrounds: {
      main: common.colorNames.mineShaft,
      section: common.colorNames.smokyGray,
      link: common.colorNames.electricBlue,
    },
    text: {
      main: common.colorNames.white,
      highlighted: common.colorNames.electricBlue,
      normal: common.colorNames.white,
    },
    link: {
      text: common.colorNames.white,
      focused: common.colorNames.oceanBlue,
    },
    bullet: common.colorNames.electricBlue,
    icons: {
      switch: {
        internalBorder: common.colorNames.smokySteel,
        externalBorder: common.colorNames.white,
        mainBackground: common.colorNames.smokySteel,
        background: common.colorNames.white,
      },
      simple: {
        normal: common.colorNames.alto,
        highlighted: common.colorNames.electricBlue,
        forSwitch: common.colorNames.mineShaft,
      },
      loading: {
        circle: common.colorNames.smokyGray,
        path: common.colorNames.electricBlue,
      },
    },
    borders: {
      header: common.colorNames.iron,
      link: common.colorNames.electricBlue,
      card: common.colorNames.accentMediumBlue,
    },
  },
};
