import React from 'react';
import type { Meta, StoryObj, Decorator } from '@storybook/react';
import SpeakerdeckView from '@plone-collective/volto-speakerdeck/components/Blocks/Speakerdeck/DefaultView';
import Wrapper from '@plone/volto/storybook';
import type { SpeakerDeckOEmbedResponse } from '@plone-collective/volto-speakerdeck/helpers/data';

/**
 * Mock data for a Speaker Deck presentation
 * This structure represents the oEmbed response from Speaker Deck
 */
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
      <div style={{ width: '100%' }}>
        <Story {...args} />
      </div>
    </Wrapper>
  );
};

const meta: Meta<SpeakerdeckViewProps> = {
  title: 'Public/Blocks/SpeakerdeckBlock',
  component: SpeakerdeckView,
  decorators: [withWrapper],
  parameters: {
    docs: {
      description: {
        component: `
# Speaker Deck Block

The Speaker Deck block allows you to embed presentations from [Speaker Deck](https://speakerdeck.com/) into Plone pages.

## 🎥 Video Demonstration

📺 Watch the complete demo video in the **"Documentation"** section or [watch it here](https://collective.github.io/volto-speakerdeck/).

## Features

- **Responsive sizes**: Three sizes available (small, medium, large)
- **Flexible alignment**: Left, center, or right alignment
- **oEmbed integration**: Automatic metadata retrieval from presentations
- **Edit mode**: Overlay to facilitate manipulation in the editor

## How to use

1. Add the Speaker Deck block to your page
2. Paste a Speaker Deck presentation URL
3. Adjust size and alignment as needed
4. The presentation will be automatically embedded

## Main Props

- **href**: Speaker Deck presentation URL
- **styles.size**: Block size ('s' | 'm' | 'l')
- **styles.align**: Block alignment ('left' | 'center' | 'right')
- **speakerdeckOembed**: oEmbed data returned by the Speaker Deck API

## Valid URL Examples

- https://speakerdeck.com/ericof/nem-tudo-e-codigo
- https://speakerdeck.com/plone/building-modern-cms
        `,
      },
    },
  },
  argTypes: {
    href: {
      name: 'URL',
      description: 'Complete URL of the Speaker Deck presentation',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    'styles.align': {
      name: 'Alignment',
      description: 'Defines the horizontal alignment of the block on the page',
      control: 'select',
      options: ['left', 'center', 'right'],
      table: {
        type: { summary: "'left' | 'center' | 'right'" },
        defaultValue: { summary: 'center' },
      },
    },
    'styles.size': {
      name: 'Size',
      description:
        'Defines the block size. Small (s), Medium (m), or Large (l)',
      control: 'select',
      options: ['s', 'm', 'l'],
      table: {
        type: { summary: "'s' | 'm' | 'l'" },
        defaultValue: { summary: 'm' },
      },
    },
    speakerdeckOembed: {
      name: 'Speaker Deck oEmbed Data',
      description:
        'Speaker Deck oEmbed response data (usually filled automatically)',
      control: 'object',
      table: {
        type: { summary: 'SpeakerDeckOEmbedResponse' },
      },
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

/**
 * Default story showing the block in large size and centered
 */
export const Default: Story = {
  name: '🎯 Default (Large and Centered)',
  parameters: {
    docs: {
      description: {
        story:
          'Recommended default block configuration: large size with centered alignment. Ideal for highlighting important presentations.',
      },
    },
  },
};

/**
 * Examples of available sizes
 */
export const Small: Story = {
  name: '📏 Small Size',
  args: {
    styles: {
      size: 's',
      align: 'center',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Block in small size. Useful when you need to embed multiple presentations or when space is limited.',
      },
    },
  },
};

export const Medium: Story = {
  name: '📏 Medium Size',
  args: {
    styles: {
      size: 'm',
      align: 'center',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Block in medium size (default). Balances visibility and page space well.',
      },
    },
  },
};

export const Large: Story = {
  name: '📏 Large Size',
  args: {
    styles: {
      size: 'l',
      align: 'center',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Block in large size. Ideal for highlighting important presentations or when it is the main page content.',
      },
    },
  },
};

/**
 * Alignment examples
 */
export const AlignLeft: Story = {
  name: '◀️ Left Alignment',
  args: {
    styles: {
      align: 'left',
      size: 'l',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Block aligned to the left. Useful in layouts with text on the right or in multi-column pages.',
      },
    },
  },
};
export const AlignCenter: Story = {
  name: '▪️ Center Alignment',
  args: {
    styles: {
      align: 'center',
      size: 'l',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Centered block (default configuration). Offers a balanced visual and is the most common option.',
      },
    },
  },
};

export const AlignRight: Story = {
  name: '▶️ Right Alignment',
  args: {
    styles: {
      align: 'right',
      size: 'l',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Block aligned to the right. Useful in special layouts or to create visual contrast with other elements.',
      },
    },
  },
};

/**
 * Placeholder state (when there is no oEmbed data)
 */
export const Placeholder: Story = {
  name: '⭕ Placeholder',
  args: {
    href: undefined,
    speakerdeckOembed: undefined,
    styles: {
      align: 'center',
      size: 'm',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Estado inicial do bloco quando ainda não foi configurado ou quando os dados oEmbed não estão disponíveis. Mostra um ícone do Speaker Deck como placeholder.',
      },
    },
  },
};

/**
 * Modo de edição
 */
export const EditMode: Story = {
  name: '✏️ Edit Mode',
  args: {
    isEditMode: true,
    href: 'https://speakerdeck.com/ericof/nem-tudo-e-codigo',
    styles: {
      align: 'center',
      size: 'l',
    },
    speakerdeckOembed: speakerdeckOembed,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Block in edit mode, with overlay to facilitate selection and manipulation in the editor. The overlay prevents accidental interaction with the iframe.',
      },
    },
  },
};

/**
 * Practical combinations
 */
export const SmallLeftAligned: Story = {
  name: '💡 Small Left-Aligned',
  args: {
    styles: {
      align: 'left',
      size: 's',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Useful combination for sidebars or side columns. Small left-aligned block saves space.',
      },
    },
  },
};

export const MediumRightAligned: Story = {
  name: '💡 Medium Right-Aligned',
  args: {
    styles: {
      align: 'right',
      size: 'm',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Interesting combination for layouts with text on the left. The medium size maintains readability without dominating the page.',
      },
    },
  },
};
