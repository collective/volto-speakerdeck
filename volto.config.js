const isCI = process.env.CI;
const addons = ['@plone-collective/volto-speakerdeck'];
const theme = '';

if (isCI) {
  addons.push('@plone-collective/volto-speakerdeck:ciProfile');
}

module.exports = {
  addons,
  theme,
};
