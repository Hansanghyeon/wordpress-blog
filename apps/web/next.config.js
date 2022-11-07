const { withFaust } = require("@faustjs/next");
const withTM = require("next-transpile-modules")([]);

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust();
module.exports = withTM({
  reactStrictMode: true,
});
