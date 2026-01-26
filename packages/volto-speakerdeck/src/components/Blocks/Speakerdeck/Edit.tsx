import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers/Extensions';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import type { BlockData } from '../../../types/block';

import SpeakerdeckBlockData from './Data';
import SpeakerdeckBlockView from './View';

interface SpeakerdeckBlockEditProps {
  data: BlockData;
  block: string;
  selected: boolean;
  onChangeBlock: (block: string, data: BlockData) => void;
  blocksConfig?: Record<string, unknown>;
  navRoot?: string;
  contentType?: string;
  [key: string]: unknown;
}

const SpeakerdeckBlockEdit: React.FC<SpeakerdeckBlockEditProps> = (props) => {
  const { data, onChangeBlock, block, selected } = props;
  return (
    <>
      <SpeakerdeckBlockView {...props} isEditMode />
      <SidebarPortal selected={selected}>
        <SpeakerdeckBlockData
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
    </>
  );
};

export default withBlockExtensions(SpeakerdeckBlockEdit);
