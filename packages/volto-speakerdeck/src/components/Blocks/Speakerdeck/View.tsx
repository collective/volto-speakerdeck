import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers/Extensions';
import SpeakerdeckView from '@plone-collective/volto-speakerdeck/components/Blocks/Speakerdeck/DefaultView';

const SpeakerdeckBlockView = (props) => {
  const { data, isEditMode, className } = props;
  return (
    <SpeakerdeckView {...data} isEditMode={isEditMode} className={className} />
  );
};

export default withBlockExtensions(SpeakerdeckBlockView);
