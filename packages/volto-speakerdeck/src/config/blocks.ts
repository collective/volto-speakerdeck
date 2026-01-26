import type { ConfigType } from '@plone/registry';
import type { BlockConfigBase } from '@plone/types';
import SpeakerdeckBlockInfo from '@plone-collective/volto-speakerdeck/components/Blocks/Speakerdeck';

declare module '@plone/types' {
  // Altera a interface BlocksConfigData para incluir o bloco de Clima
  export interface BlocksConfigData {
    speakerdeckBlock: BlockConfigBase;
  }
}

function installLocalBlocks(config: ConfigType) {
  // Install Speakerdeck Block
  config.blocks.blocksConfig.speakerdeckBlock = SpeakerdeckBlockInfo;
  return config;
}

export default function install(config: ConfigType) {
  // Register all blocks created in this package
  installLocalBlocks(config);
  return config;
}
