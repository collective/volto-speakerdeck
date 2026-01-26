import { defineMessages, IntlShape } from 'react-intl';
import { addStyling } from '@plone/volto/helpers/Extensions/withBlockSchemaEnhancer';
import type { JSONSchema } from '@plone/types';

const messages = defineMessages({
  speakerdeckBlock: {
    id: 'Speakerdeck',
    defaultMessage: 'Speakerdeck',
  },
  deckURL: {
    id: 'URL',
    defaultMessage: 'URL',
  },
  align: {
    id: 'Alignment',
    defaultMessage: 'Alignment',
  },
  size: {
    id: 'Size',
    defaultMessage: 'Size',
  },
  styleFieldset: {
    id: 'Style',
    defaultMessage: 'Style',
  },
});

interface SchemaProps {
  intl: IntlShape;
}

export const SpeakerdeckSchema = (props: SchemaProps): JSONSchema => {
  const intl = props.intl;
  const schema = {
    title: intl.formatMessage(messages.speakerdeckBlock),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['href'],
      },
    ],
    properties: {
      href: {
        title: intl.formatMessage(messages.deckURL),
        widget: 'object_browser',
        mode: 'link',
        allowExternals: true,
      },
    },
    required: ['href'],
  };
  // Adds an empty `styles` object field under a "Styling" fieldset
  addStyling({ schema, intl });
  // Add your styling controls
  schema.properties.styles.schema.properties.align = {
    widget: 'align',
    title: 'Alignment',
    actions: ['left', 'center', 'right'],
  };
  schema.properties.styles.schema.properties.size = {
    title: intl.formatMessage(messages.size),
    widget: 'image_size',
  };
  // Add the fields to the "Styling" fieldset
  schema.properties.styles.schema.fieldsets[0].fields.push('align');
  schema.properties.styles.schema.fieldsets[0].fields.push('size');
  return schema;
};
