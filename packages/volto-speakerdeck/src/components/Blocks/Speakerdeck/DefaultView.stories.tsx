import React from 'react';
import type { Meta, StoryObj, Decorator } from '@storybook/react';
import SpeakerdeckView from '@plone-collective/volto-speakerdeck/components/Blocks/Speakerdeck/DefaultView';
import Wrapper from '@plone/volto/storybook';
import type { SpeakerDeckOEmbedResponse } from '@plone-collective/volto-speakerdeck/helpers/data';

const speakerdeckOembed: SpeakerDeckOEmbedResponse = {
  author_name: 'Érico Andrei',
  author_url: 'https://speakerdeck.com/ericof',
  height: 399,
  html: '<iframe id="talk_frame_1101673" class="speakerdeck-iframe" src="//speakerdeck.com/player/20f4753178b54bdb9d6990961d9f551c" width="710" height="399" style="aspect-ratio:710/399; border:0; padding:0; margin:0; background:transparent;" frameborder="0" allowtransparency="true" allowfullscreen="allowfullscreen"></iframe>\n',
  provider_name: 'Speaker Deck',
  provider_url: 'https://speakerdeck.com/',
  ratio: 1.7777777777777777,
  title: 'Nem tudo é código',
  type: 'rich',
  version: 1,
  width: 710,
};

interface SpeakerdeckViewProps {
  href?: string;
  styles: {
    align?: 'center' | 'left' | 'right';
    size?: 's' | 'm' | 'l';
  };
  speakerdeckOembed?: SpeakerDeckOEmbedResponse;
}

const withWrapper: Decorator = (Story, { args }) => {
  return (
    <Wrapper anonymous>
      <div style={{ width: '1000px' }}>
        <Story {...args} />
      </div>
    </Wrapper>
  );
};

const meta: Meta<SpeakerdeckViewProps> = {
  title: 'Public/Blocks/SpeakerdeckBlock',
  component: SpeakerdeckView,
  decorators: [withWrapper],
  argTypes: {
    href: {
      name: 'URL',
      control: 'text',
    },
    align: {
      name: 'Alignment',
      control: 'select',
      options: ['center', 'left', 'right'],
    },
    size: {
      name: 'Size',
      control: 'select',
      options: ['s', 'm', 'l'],
    },
  },
  args: {
    href: 'https://speakerdeck.com/ericof/nem-tudo-e-codigo',
    styles: {
      align: 'center',
      size: 'l',
    },
    speakerdeckOembed: speakerdeckOembed,
  },
};

export default meta;

type Story = StoryObj<SpeakerdeckViewProps>;

export const Small: Story = {
  args: {
    styles: {
      size: 's',
    },
  },
};
export const Medium: Story = {
  args: {
    styles: {
      size: 'm',
    },
  },
};
export const Large: Story = {
  args: {
    styles: {
      size: 'l',
    },
  },
};
export const AlignLeft: Story = {
  args: {
    styles: {
      align: 'left',
      size: 'l',
    },
  },
};
export const AlignCenter: Story = {
  args: {
    styles: {
      align: 'center',
      size: 'l',
    },
  },
};

export const AlignRight: Story = {
  args: {
    styles: {
      align: 'right',
      size: 'l',
    },
  },
};
