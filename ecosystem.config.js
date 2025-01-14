module.exports = {
  apps: [{
    name: 'fuse-twap-bot',
    script: 'index.js',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    // args: 'one two',
    // instances: 1,
    // autorestart: true,
    // watch: false,
    // max_memory_restart: '1G',
    time: true,
    env: {
      NODE_ENV: 'development',
      ETHEREUM_ADMIN_ACCOUNT: '',
      ETHEREUM_ADMIN_PRIVATE_KEY: '',
      ROOT_PRICE_ORACLE_CONTRACT_ADDRESS: '0xA170Dba2Cd1f68cDd7567CF70184D5492D2E8138',
      SUPPORTED_PAIRS: '0x18A797C7C70c1Bf22fDee1c09062aBA709caCf04,0x0F82E57804D0B1F6FAb2370A43dcFAd3c7cB239c,0xc76225124f3caab07f609b1d147a31de43926cd6,0x4d96369002fc5b9687ee924d458a7e5baa5df34e,0xC3f279090a47e80990Fe3a9c30d24Cb117EF91a8,0x0dACb47E00aed6AbAdE32c7B398e029393E0D848,0x73E02EAAb68a41Ea63bdae9Dbd4b7678827B2352,0x94b0a3d511b6ecdb17ebf877278ab030acb0a878,0x7ce01885a13c652241ae02ea7369ee8d466802eb,0xfd0a40bc83c5fae4203dec7e5929b446b07d1c76',
      DEFAULT_MIN_PERIOD: 1800,
      DEFAULT_DEVIATION_THRESHOLD: 0.02, 
      WEB3_HTTP_PROVIDER_URL: "http://localhost:8546",
      TWAP_UPDATE_ATTEMPT_INTERVAL_SECONDS: 60
    },
    env_production: {
      NODE_ENV: 'production',
      ETHEREUM_ADMIN_ACCOUNT: '',
      ETHEREUM_ADMIN_PRIVATE_KEY: '',
      ROOT_PRICE_ORACLE_CONTRACT_ADDRESS: '0xA170Dba2Cd1f68cDd7567CF70184D5492D2E8138',
      SUPPORTED_PAIRS: '0x18A797C7C70c1Bf22fDee1c09062aBA709caCf04,0x0F82E57804D0B1F6FAb2370A43dcFAd3c7cB239c,0xc76225124f3caab07f609b1d147a31de43926cd6,0x4d96369002fc5b9687ee924d458a7e5baa5df34e,0xC3f279090a47e80990Fe3a9c30d24Cb117EF91a8,0x0dACb47E00aed6AbAdE32c7B398e029393E0D848,0x73E02EAAb68a41Ea63bdae9Dbd4b7678827B2352,0x94b0a3d511b6ecdb17ebf877278ab030acb0a878,0x7ce01885a13c652241ae02ea7369ee8d466802eb,0xfd0a40bc83c5fae4203dec7e5929b446b07d1c76',
      DEFAULT_MIN_PERIOD: 1800,
      DEFAULT_DEVIATION_THRESHOLD: 0.02, 
      WEB3_HTTP_PROVIDER_URL: "http://localhost:8545",
      TWAP_UPDATE_ATTEMPT_INTERVAL_SECONDS: 60
    }
  }]
};
