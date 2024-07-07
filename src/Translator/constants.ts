import { EventedEvents } from '@visue/core/base/EventedBase';

/**
 * イベント
 */
export const TranslatorEvents = {
  ...EventedEvents,
  languagechange: 'languagechange',
  resourceset: 'resourceset',
} as const;
