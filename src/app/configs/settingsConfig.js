import themesConfig from "app/configs/themesConfig";
import i18n from "../../i18n";

const settingsConfig = {
  layout: {
    style: "layout2", // layout1 layout2 layout3
    config: {
      navbar: {
        display: false,
      },
      toolbar: {
        display: false,
      },
      footer: {
        display: false,
      },
    }, // checkout default layout configs at app/theme-layouts for example  app/theme-layouts/layout1/Layout1Config.js
  },
  customScrollbars: true,
  direction: i18n.dir(i18n.options.lng) || "ltr", // rtl, ltr
  theme: {
    main: themesConfig.light9,
    navbar: themesConfig.light9,
    toolbar: themesConfig.light9,
    footer: themesConfig.light9,
  },
  /*
   To make whole app auth protected by default set defaultAuth:['admin','staff','user']
   To make whole app accessible without authorization by default set defaultAuth: null
   *** The individual route configs which has auth option won't be overridden.
   */
  defaultAuth: null,
  /*
    Default redirect url for the logged-in user,
   */
  loginRedirectUrl: "/",
};

export default settingsConfig;
