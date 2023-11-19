import React, { useEffect } from 'react';
import { withThemeByClassName } from '@storybook/addon-styling';

import './styles.scss';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    nextjs: {
      navigation: {
        pathname: '/',
        query: {},
      },
    },
  },

  decorators: [
    // Adds theme switching support.
    // NOTE: requires setting "darkMode" to "class" in your tailwind config
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    (Story, context) => {
      const { theme } = context.globals;

      useEffect(() => {
        const htmlTag = document.documentElement;

        // Set the "data-mode" attribute on the iFrame html tag
        if (theme === 'dark') {
          htmlTag.classList.add('dark');
        } else {
          htmlTag.classList.remove('dark');
        }
      }, [theme]);

      return (
        // <div className="dark:bg-slate-800">
        <Story />
        // </div>
      );
    },
  ],
};

export default preview;
