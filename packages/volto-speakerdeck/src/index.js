import { cloneDeep } from 'lodash';

// Block
import SpeakerdeckEdit from './components/Blocks/Speakerdeck/Edit';
import SpeakerdeckView from './components/Blocks/Speakerdeck/View';
import speakerdeckSVG from './icons/speakerdeck.svg';

const applyConfig = (config) => {
  // Set default Cors Proxy
  config.settings.corsProxy = 'https://corsproxy.io/?';
  config.blocks.blocksConfig.speakerdeckBlock = {
    id: 'speakerdeckBlock',
    title: 'Speakerdeck',
    group: 'common',
    icon: speakerdeckSVG,
    view: SpeakerdeckView,
    edit: SpeakerdeckEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    blockHasOwnFocusManagement: false,
  };

  // Add block to grid
  // Array of local blocks ids
  const localBlocks = ['speakerdeckBlock'];

  // Add Blocks to gridBlock
  // It's important to maintain the chain, and do not introduce pass by reference in
  // the internal `blocksConfig` object, so we clone the object to avoid this.
  ['gridBlock'].forEach((blockId) => {
    const block = config.blocks.blocksConfig[blockId];
    if (
      block !== undefined &&
      block.allowedBlocks !== undefined &&
      block.blocksConfig !== undefined
    ) {
      block.allowedBlocks = [...block.allowedBlocks, ...localBlocks];
      localBlocks.forEach((blockId) => {
        block.blocksConfig[blockId] = cloneDeep(
          config.blocks.blocksConfig[blockId],
        );
      });
    }
  });
  return config;
};

export const ciProfile = (config) => {
  config.settings.corsProxy = 'http://127.0.0.1:9090/';
  return config;
};

export default applyConfig;
