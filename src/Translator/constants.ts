import { EventedEvents } from '@visue/core/EventedBase';

/**
 * イベント
 */
export const TranslatorEvents = {
  ...EventedEvents,
  languagechange: 'languagechange',
  resourceset: 'resourceset',
} as const;
