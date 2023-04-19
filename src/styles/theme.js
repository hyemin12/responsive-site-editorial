const breakPoint = {
  desktop: 1281,
  tablet: 1280,
  tabletPortrait: 980,
  mobile: 575,
};

const device = {
  desktop: `screen and (min-width:${breakPoint.desktop}px)`,
  tablet: `screen and (max-width:${breakPoint.tablet}px)`,
  tabletPortrait: `screen and (max-width:${breakPoint.tabletPortrait}px)`,
  mobile: `screen and (max-width:${breakPoint.mobile}px)`,
};

const color = {
  point: "#f56a6a",
  grey: "#7f888f",
  default: "#3d4449",
};

// 127,136,143
const flexBox = {
  flex: (direction = "row", align = "center", justify = "start") => `
  display:flex; 
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justify};
  `,
};

const theme = {
  device,
  color,
  flexBox,
};
export default theme;
