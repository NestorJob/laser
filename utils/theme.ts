import plugin from 'tailwindcss/plugin';

interface Color {
  [key: number]: string;
}

export interface Colors {
  primary: Color;
  info: Color;
  success: Color;
  warning: Color;
  error: Color;
  [key: string]: Color;
}

export const colors: Colors = {
  primary: {
    100: '#cce4fb',
    200: '#99c9f7',
    300: '#66aff3',
    400: '#3394ef',
    500: '#0079eb',
    600: '#0061bc',
    700: '#00498d',
    800: '#00305e',
    900: '#00182f',
  },
  secondary: {
    50: ' #e7f2fd',
    100: '#daebfc',
    200: '#b5d8f8',
    300: '#91c4f5',
    400: '#6cb1f1',
    500: '#479dee',
    600: '#397ebe',
    700: '#2b5e8f',
    800: '#1c3f5f',
    900: '#0e1f30',
  },
  info: {
    50: '#eff2f6',
    100: '#ccd7e1',
    200: '#99afc4',
    300: '#6687a6',
    400: '#335f89',
    500: '#00376b',
    600: '#002c56',
    700: '#002140',
    800: '#00162b',
    900: '#000b15',
  },
  success: {
    100: '#ccf5f1',
    200: '#99ebe3',
    300: '#66e0d4',
    400: '#33d6c6',
    500: '#00ccb8',
    600: '#00a393',
    700: '#007a6e',
    800: '#00524a',
    900: '#002925',
  },
  warning: {
    100: '#fdf6e2',
    200: '#fbedc5',
    300: '#fae4a9',
    400: '#f8db8c',
    500: '#f6d26f',
    600: '#c5a859',
    700: '#947e43',
    800: '#62542c',
    900: '#312a16',
  },
  error: {
    100: '#f9e1e1',
    200: '#f4c3c3',
    300: '#eea4a4',
    400: '#e98686',
    500: '#e36868',
    600: '#b65353',
    700: '#883e3e',
    800: '#5b2a2a',
    900: '#2d1515',
  },
};

export const screens = {
  xs: '340px',
  sm: '640px',
  md: '960px',
  lg: '1280px',
};

export const textsPlugin = plugin(function ({ addUtilities }) {
  addUtilities({
    '.text-h1': {
      fontSize: '30px',
      lineHeight: '105%',
      '@screen xs': {
        fontSize: '36px',
      },
      '@screen sm': {
        fontSize: '42px',
      },
      '@screen md': {
        fontSize: '48px',
      },
      '@screen lg': {
        fontSize: '52px',
      },
    },
    '.text-h2': {
      fontSize: '28px',
      lineHeight: '120%',
      '@screen xs': {
        fontSize: '33px',
      },
      '@screen sm': {
        fontSize: '38px',
      },
      '@screen md': {
        fontSize: '43px',
      },
      '@screen lg': {
        fontSize: '48px',
      },
    },
    '.text-h3': {
      fontSize: '26px',
      lineHeight: '120%',
      '@screen xs': {
        fontSize: '30px',
      },
      '@screen sm': {
        fontSize: '34px',
      },
      '@screen md': {
        fontSize: '38px',
      },
      '@screen lg': {
        fontSize: '42px',
      },
    },
    '.text-h4': {
      fontSize: '24px',
      lineHeight: '120%',
      '@screen xs': {
        fontSize: '27px',
      },
      '@screen sm': {
        fontSize: '30px',
      },
      '@screen md': {
        fontSize: '33px',
      },
      '@screen lg': {
        fontSize: '36px',
      },
    },
    '.text-subtitle1': {
      fontSize: '22px',
      lineHeight: '120%',
      '@screen xs': {
        fontSize: '24px',
      },
      '@screen sm': {
        fontSize: '26px',
      },
      '@screen md': {
        fontSize: '28px',
      },
      '@screen lg': {
        fontSize: '30px',
      },
    },
    '.text-subtitle2': {
      fontSize: '20px',
      lineHeight: '120%',
      '@screen xs': {
        fontSize: '22px',
      },
      '@screen sm': {
        fontSize: '24px',
      },
      '@screen md': {
        fontSize: '26px',
      },
      '@screen lg': {
        fontSize: '28px',
      },
    },
    '.text-subtitle3': {
      fontSize: '18px',
      lineHeight: '120%',
      '@screen xs': {
        fontSize: '20px',
      },
      '@screen sm': {
        fontSize: '22px',
      },
      '@screen md': {
        fontSize: '24px',
      },
      '@screen lg': {
        fontSize: '26px',
      },
    },
    '.text-body1': {
      fontSize: '16px',
      lineHeight: '120%',
      '@screen xs': {
        fontSize: '17px',
      },
      '@screen sm': {
        fontSize: '18px',
      },
      '@screen md': {
        fontSize: '19px',
      },
      '@screen lg': {
        fontSize: '20px',
      },
    },
    '.text-body2': {
      fontSize: '14px',
      lineHeight: '120%',
      '@screen xs': {
        fontSize: '15px',
      },
      '@screen sm': {
        fontSize: '16px',
      },
      '@screen md': {
        fontSize: '17px',
      },
      '@screen lg': {
        fontSize: '18px',
      },
    },
    '.text-body3': {
      fontSize: '12px',
      lineHeight: '150%',
      '@screen xs': {
        fontSize: '13px',
      },
      '@screen sm': {
        fontSize: '14px',
      },
      '@screen md': {
        fontSize: '15px',
      },
      '@screen lg': {
        fontSize: '16px',
      },
    },
    '.text-caption': {
      fontSize: '10px',
      lineHeight: '120%',
      '@screen xs': {
        fontSize: '11px',
      },
      '@screen sm': {
        fontSize: '12px',
      },
      '@screen md': {
        fontSize: '13px',
      },
      '@screen lg': {
        fontSize: '14px',
      },
    },
  });
});

export const spacingPlugin = plugin(function ({ addUtilities }) {
  interface Sizes {
    default: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
  }

  type PropertieSizes = { [key in Partial<keyof Sizes>]?: Sizes };

  type PropertieSize = keyof PropertieSizes;

  const propertieSizes: PropertieSizes = {
    xs: {
      default: '16px',
      xs: '18px',
      sm: '20px',
      md: '22px',
      lg: '24px',
    },
    sm: {
      default: '20px',
      xs: '24px',
      sm: '28px',
      md: '32px',
      lg: '36px',
    },
    md: {
      default: '26px',
      xs: '32px',
      sm: '38px',
      md: '44px',
      lg: '50px',
    },
    lg: {
      default: '34px',
      xs: '42px',
      sm: '50px',
      md: '58px',
      lg: '66px',
    },
  };

  const properties = {
    p: ['padding'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    pt: ['paddingTop'],
    pr: ['paddingRight'],
    pb: ['paddingBottom'],
    pl: ['paddingLeft'],
    m: ['margin'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
    mt: ['marginTop'],
    mr: ['marginRight'],
    mb: ['marginBottom'],
    ml: ['marginLeft'],
    '-mt': ['marginTop'],
    '-mr': ['marginRight'],
    '-mb': ['marginBottom'],
    '-ml': ['marginLeft'],
    'space-x': ['marginLeft'],
    'space-y': ['marginTop'],
    gap: ['gap'],
  };

  type Propertie = keyof typeof properties;

  type Result<T> = { [key in string]: T };

  const result: Result<string | Result<string>> = {};

  const assignValues = (propertie: Propertie, size: string) => {
    const result: Result<string> = {};
    for (const prop of properties[propertie]) {
      result[prop] =
        propertie.includes('-') && !propertie.includes('space')
          ? `-${size}`
          : size;
    }
    return result;
  };

  for (const propertie in properties) {
    for (const propertieSize in propertieSizes) {
      let name = `.${propertie}-${propertieSize}`;

      if (propertie.includes('space')) {
        name += ' > * + *';
      }

      const sizes = propertieSizes[propertieSize as PropertieSize] as Sizes;

      Object.assign(result, {
        [name]: {
          ...assignValues(propertie as Propertie, sizes.default),
          '@screen xs': assignValues(propertie as Propertie, sizes.xs),
          '@screen sm': assignValues(propertie as Propertie, sizes.sm),
          '@screen md': assignValues(propertie as Propertie, sizes.md),
          '@screen lg': assignValues(propertie as Propertie, sizes.lg),
        },
      });
    }
  }

  addUtilities(result);
});
