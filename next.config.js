const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
/** Keep the preview and production compiler outputs independent. */
module.exports = (phase) => ({
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next-dev' : '.next-production',
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
});
