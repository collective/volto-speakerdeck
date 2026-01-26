import React from 'react';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import iconSVG from '@plone-collective/volto-speakerdeck/icons/speakerdeck.svg';
import type { SpeakerDeckOEmbedResponse } from '../../../types/oembed';
import './Style.less';

interface SpeakerdeckWrapperProps {
  ratio?: number;
  html?: string;
  size?: string;
}

const SpeakerdeckWrapper: React.FC<SpeakerdeckWrapperProps> = ({
  ratio,
  html,
  size,
}) => {
  const style = { aspectRatio: ratio };
  return (
    <div
      className={`speakerdeck-wrapper block-${size}`}
      style={style}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

interface SpeakerdeckViewProps {
  isEditMode?: boolean;
  speakerdeckOembed?: SpeakerDeckOEmbedResponse;
  styles?: {
    align?: string;
    size?: string;
  };
  className?: string;
}

const SpeakerdeckView: React.FC<SpeakerdeckViewProps> = (props) => {
  const { isEditMode, speakerdeckOembed, styles, className } = props;
  const { align = 'center', size = 'm' } = styles || {};

  return speakerdeckOembed ? (
    <div className={`block speakerdeck ${className} align-${align}`}>
      {isEditMode && <div className={'overlay'}> </div>}
      <SpeakerdeckWrapper size={size} {...speakerdeckOembed} />
    </div>
  ) : (
    <div className={`block speakerdeck ${className} align-full`}>
      <div className={'block-placeholder'}>
        <Icon
          name={iconSVG}
          className="blockIcon"
          size={'50px'}
          color={'#009287'}
        />
      </div>
    </div>
  );
};

export default SpeakerdeckView;
