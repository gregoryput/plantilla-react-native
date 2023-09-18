import { DefaultTheme } from "react-native-paper";

const ThemePaper = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#000", // Cambia el color primario
    accent: "#f39c12", // Cambia el color de acento
    background: "#ecf0f1", // Cambia el color de fondo
    // ... Otros colores que quieras personalizar
    // Otros colores
    text: "#333", // Cambia el color de texto
    surface: "#fff",
    fonts: {
      regular: "Roboto-Regular", // Fuente para texto regular
      medium: "Roboto-Medium", // Fuente para texto medio
      light: "Roboto-Light", // Fuente para texto ligero
      thin: "Roboto-Thin", // Fuente para texto delgado
    },
  },
};

export default ThemePaper;
