// color design tokens export
export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#E6FBFF",
    100: "#CCF7FE",
    200: "#99EEFD",
    300: "#66E6FC",
    400: "#33DDFB",
    500: "#00D5FA",
    600: "#00A0BC",
    700: "#006B7D",
    800: "#00353F",
    900: "#001519",
  },
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            login: {
              bar: "#1A1A1A",
              barFont: "#2671ab",
              box: "#1A1A1A",
              button: "#2671ab",
              buttonTextHover: "#FFFFFF",
              text: "#FFFFFF",
              textHover: "#2671ab"
            },
            primary: {
              //dark: colorTokens.primary[200],
              light: "#063152",
              main: "#2671ab",
              //light: colorTokens.primary[800],
              dark: "#4d9ddb"
            },
            neutral: {
              dark: colorTokens.grey[100],
              main: colorTokens.grey[200],
              mediumMain: colorTokens.grey[300],
              medium: colorTokens.grey[400],
              light: colorTokens.grey[700],
            },
            background: {
              default: colorTokens.grey[900],
              alt: colorTokens.grey[800],
            },
            appointment: {
              background: '#000000',
              icon: colorTokens.grey[500],
            },
            colors: {
              black: "#000000",
            },
          }
        : {
            // palette values for light mode
            login: {
              bar: "#2671ab",
              barFont: "#FFFFFF",
              box: "#d0e4f4",
              button: "#2671ab",
              buttonHover: "#e0edf8",
              buttonTextHover: "#2671ab",
              text: "#2671ab",
              textHover: "#000000"
            },
            primary: {
              //dark: colorTokens.primary[700],
              dark: "#063152",
              main: "#2671ab",
              //light: colorTokens.primary[50]
              light: "#8dc9f7"
            },
            neutral: {
              dark: colorTokens.grey[700],
              main: colorTokens.grey[500],
              mediumMain: colorTokens.grey[400],
              medium: colorTokens.grey[300],
              light: colorTokens.grey[50],
            },
            background: {
              default: colorTokens.grey[10],
              alt: colorTokens.grey[0]
            },
            appointment: {
              background: '#f0f0f0',
              icon: colorTokens.grey[500],
            },
            colors: {
              black: "#000000",
            },
          }),
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};