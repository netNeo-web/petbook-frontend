import LocalizedStrings from 'react-localization';

const strings = new LocalizedStrings({
  en: {
    welcome: "Welcome to Petbook!",
    home: "Home",
    about: "About",
    contact: "Contact",
  },
  es: {
    welcome: "¡Bienvenido a Petbook!",
    home: "Inicio",
    about: "Acerca de",
    contact: "Contacto",
  },
});

// Default language
strings.setLanguage('es');

export default strings;
