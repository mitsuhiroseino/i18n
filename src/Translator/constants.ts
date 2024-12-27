import { EVENTED_EVENTS } from '@visue/core/EventedBase';

/**
 * イベント
 */
export const TRANSLATOR_EVENTS = {
  ...EVENTED_EVENTS,
  languagechange: 'languagechange',
  resourceset: 'resourceset',
} as const;
