import type { ConfigType } from '@plone/registry';

declare module '@plone/types' {
  // Update SettingsConfig to include allowed_cors_destinations
  export interface SettingsConfig {
    allowed_cors_destinations: string[];
  }
}

export default function install(config: ConfigType) {
  config.settings.allowed_cors_destinations = [
    ...(config.settings.allowed_cors_destinations || []),
    'speakerdeck.com',
  ];
  return config;
}
