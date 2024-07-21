const colorNames = {
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
};

const common = {
  colorNames: { ...colorNames },
  shadow: {
    boxShadow: `0px 16px 58px 0px  ${({ colors }) => colors.violet2},
              0px -2px 50px 0px ${({ colors }) => colors.violet2}`,
  },
  mediaBreakpoints: { tablet: 948, mobile: 480 },
};

export const lightTheme = {
  ...common,
  colors: {
    backgrounds: {
      main: colorNames.whiteLilac,
      section: colorNames.white,
      link: colorNames.scienceBlue,
    },
    text: {
      main: colorNames.mineShaft,
      highlighted: colorNames.scienceBlue,
      normal: colorNames.slateGray,
    },
    bullet: colorNames.scienceBlue,
    link: {
      text: colorNames.white,
      focused: colorNames.atlanticBlue,
    },
    icons: {
      switch: {
        internalBorder: colorNames.cornflowerBlue,
        externalBorder: colorNames.slateGray,
        mainBackground: colorNames.iron,
        background: colorNames.slateGray,
      },
      simple: {
        normal: colorNames.mineShaft,
        highlighted: colorNames.scienceBlue,
        forSwitch: colorNames.white,
      },
      loading: {
        circle: colorNames.cornflowerBlue,
        path: colorNames.scienceBlue,
      },
    },
    borders: {
      header: colorNames.iron,
      link: colorNames.scienceBlue,
      card: colorNames.accentLightBlue,
    },
  },
};

export const darkTheme = {
  ...common,
  colors: {
    backgrounds: {
      main: colorNames.mineShaft,
      section: colorNames.smokyGray,
      link: colorNames.electricBlue,
    },
    text: {
      main: colorNames.white,
      highlighted: colorNames.electricBlue,
      normal: colorNames.white,
    },
    link: {
      text: colorNames.white,
      focused: colorNames.oceanBlue,
    },
    bullet: colorNames.electricBlue,
    icons: {
      switch: {
        internalBorder: colorNames.smokySteel,
        externalBorder: colorNames.white,
        mainBackground: colorNames.smokySteel,
        background: colorNames.white,
      },
      simple: {
        normal: colorNames.alto,
        highlighted: colorNames.electricBlue,
        forSwitch: colorNames.mineShaft,
      },
      loading: {
        circle: colorNames.smokyGray,
        path: colorNames.electricBlue,
      },
    },
    borders: {
      header: colorNames.iron,
      link: colorNames.electricBlue,
      card: colorNames.accentMediumBlue,
    },
  },
};
