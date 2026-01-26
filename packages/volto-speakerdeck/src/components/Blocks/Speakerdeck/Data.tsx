import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';
import { BlockDataForm } from '@plone/volto/components/manage/Form';
import { isValidSpeakerdeckUrl } from '@plone-collective/volto-speakerdeck/helpers/validator';
import { fetchSpeakerdeckOembed } from '@plone-collective/volto-speakerdeck/helpers/data';
import { SpeakerdeckSchema } from './schema';
import type {
  BlockData,
  LinkItem,
} from '@plone-collective/volto-speakerdeck/types/block';

interface SpeakerdeckBlockDataProps {
  data: BlockData;
  block: string;
  onChangeBlock: (block: string, data: BlockData) => void;
  blocksConfig: Record<string, unknown>;
  navRoot: string;
  contentType: string;
}

const SpeakerdeckBlockData: React.FC<SpeakerdeckBlockDataProps> = (props) => {
  const { data, block, onChangeBlock, blocksConfig, navRoot, contentType } =
    props;
  const [href, setHref] = useState<LinkItem[]>(data.href ? data.href : []);

  const dispatch = useDispatch();
  const currentHrefId = data.href ? data.href[0]['@id'] : '';
  const newHrefId = href.length > 0 ? href[0]['@id'] : '';

  useEffect(() => {
    if (newHrefId && currentHrefId !== newHrefId) {
      fetchSpeakerdeckOembed(dispatch, newHrefId).then((oembed) => {
        onChangeBlock(block, {
          ...data,
          href: href,
          speakerdeckOembed: oembed,
        });
      });
    }
  }, [newHrefId, currentHrefId, href, data, block, onChangeBlock, dispatch]);

  const intl = useIntl();
  const schema = SpeakerdeckSchema({ ...props, intl });

  const onChangeField = useCallback(
    (id: string, value: unknown) => {
      if (id === 'href' && value !== '') {
        if (
          value &&
          Array.isArray(value) &&
          value.length > 0 &&
          isValidSpeakerdeckUrl(value[0]['@id'])
        ) {
          setHref(value as LinkItem[]);
        }
      } else {
        onChangeBlock(block, {
          ...data,
          [id]: value,
        });
      }
    },
    [block, data, onChangeBlock],
  );

  return (
    <BlockDataForm
      schema={schema}
      title={schema.title}
      onChangeField={onChangeField}
      onChangeBlock={onChangeBlock}
      formData={data}
      block={block}
      blocksConfig={blocksConfig}
      navRoot={navRoot}
      contentType={contentType}
    />
  );
};

export default SpeakerdeckBlockData;
