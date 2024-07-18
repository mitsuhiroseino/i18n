import { EventedEvents } from '@visue/core/EventedBase';

/**
 * イベント
 */
export const I18nResourcesEvents = {
  ...EventedEvents,
  resourceset: 'resourceset',
  resourceupdate: 'resourceupdate',
} as const;
