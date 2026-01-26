import SpeakerdeckEdit from '@plone-collective/volto-speakerdeck/components/Blocks/Speakerdeck/Edit';
import SpeakerdeckView from '@plone-collective/volto-speakerdeck/components/Blocks/Speakerdeck/View';
import { SpeakerdeckSchema } from '@plone-collective/volto-speakerdeck/components/Blocks/Speakerdeck/schema';
import SpeakerdeckSVG from '@plone-collective/volto-speakerdeck/icons/speakerdeck.svg';
import type { BlockConfigBase } from '@plone/types';

export interface SpeakerdeckBlockData {
  location?: string;
  measure?: string;
}
const SpeakerdeckBlockInfo: BlockConfigBase = {
  id: 'speakerdeckBlock',
  title: 'Speakerdeck',
  group: 'common',
  icon: SpeakerdeckSVG,
  view: SpeakerdeckView,
  edit: SpeakerdeckEdit,
  blockSchema: SpeakerdeckSchema,
  restricted: false,
  mostUsed: false,
  sidebarTab: 1,
  blockHasOwnFocusManagement: false,
};

export default SpeakerdeckBlockInfo;
