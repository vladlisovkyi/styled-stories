export interface ITheme {
	id: string,
	primaryColor: string,
	secondaryColor: string,
	bodyBackgroundColor: string,
	bodyFontColor: string,
}

const theme : ITheme = {
  id: "light",
  primaryColor: "#f8049c",
  secondaryColor: "#fdd54f",
  bodyBackgroundColor: "white",
  bodyFontColor: "black",
};

export default theme;
