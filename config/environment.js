'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'chef-tracker',
    environment,
    rootURL: '/',
    firebase: {
      apiKey: "AIzaSyAECsB-pDYDEpChfaV4CTlLSimdiylV4Rk",
      authDomain: "chef-tracker-2ea63.firebaseapp.com",
      databaseURL: "https://chef-tracker-2ea63.firebaseio.com",
      projectId: "chef-tracker-2ea63",
      storageBucket: "chef-tracker-2ea63.appspot.com",
      messagingSenderId: "161674311374",
      appId: "1:161674311374:web:95f568a8d4d484e9"
    },

    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
