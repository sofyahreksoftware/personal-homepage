export const theme = {
  media: { tablet: 948, mobile: 480 },
  colors: {
    white: "rgba(255,255,255,1)",
    whiteLilac: "rgba(251, 251, 254, 1)",
    cornflowerBlue: "rgba(209, 213, 218, 0.3)",
    slateGray: "rgba(110, 126, 145, 1)",
    scienceBlue: "rgba(3, 102, 214, 1)",
    electricBlue: "rgba(33, 136, 255, 1)",
    iron: "rgba(229, 229, 229, 1)",
    alto: "rgba(218, 218, 218, 1)",
    mineShaft: "rgba(37, 37, 37, 1)",
    smokyGray: "rgba(54, 54, 54, 0.72)",
    black: "rgba(0, 0, 0, 1)",
    smokySteel: "rgba(54, 54, 54, 0.72)",
  },
};

export const lightTheme = {
  ...theme,
  colors: {
    backgrounds: {
      main: theme.colors.whiteLilac,
      section: theme.colors.white,
    },
    headers: {
      main: theme.colors.mineShaft,
      subheader: theme.colors.scienceBlue,
      intro: theme.colors.slateGray,
    },
    text: {
      normal: theme.colors.slateGray,
      highlighted: theme.colors.mineShaft,
    },
    bullet: theme.colors.scienceBlue,
    link: {
      background: theme.colors.scienceBlue,
      text: theme.colors.white,
      highlightedText: theme.colors.scienceBlue,
      onHover: theme.colors.electricBlue,
    },
    icon: {
      internalBorder: theme.colors.cornflowerBlue,
      externalBorder: theme.colors.slateGray,
      mainBackground: theme.colors.iron,
      background: theme.colors.slateGray,
    },
    iconsSvg: {
      normal: theme.colors.mineShaft,
      highlighted: theme.colors.scienceBlue,
      forSwitch: theme.colors.white,
    },
    underlinings: {
      header: theme.colors.iron,
      link: theme.colors.scienceBlue,
    },
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    backgrounds: {
      main: theme.colors.mineShaft,
      section: theme.colors.smokyGray,
    },
    headers: {
      main: theme.colors.white,
      subheader: theme.colors.white,
      intro: theme.colors.white,
    },
    text: {
      normal: theme.colors.white,
      highlighted: theme.colors.white,
    },
    link: {
      background: theme.colors.electricBlue,
      text: theme.colors.white,
      highlightedText: theme.colors.electricBlue,
      onHover: theme.colors.scienceBlue,
    },
    bullet: theme.colors.electricBlue,
    icon: {
      internalBorder: theme.colors.smokySteel,
      externalBorder: theme.colors.white,
      mainBackground: theme.colors.smokySteel,
      background: theme.colors.white,
    },
    iconsSvg: {
      normal: theme.colors.alto,
      highlighted: theme.colors.electricBlue,
      forSwitch: theme.colors.mineShaft,
    },
    underlinings: {
      header: theme.colors.iron,
      link: theme.colors.electricBlue,
    },
  },
};
