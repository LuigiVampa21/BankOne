module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets",
  transformIgnorePatterns: [
    "/node_modules/(?!@ionic/vue|@ionic/vue-router|@ionic/core|@stencil/core|ionicons)",
  ],
};
