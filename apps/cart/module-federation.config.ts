import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'cart',
  shared: () => ({
    "react": {
      "singleton": true,
      "requiredVersion": false,
    },
    'react-dom': {
      "singleton": true,
      "requiredVersion": false,
    },
  }),
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
