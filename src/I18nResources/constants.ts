import { EVENTED_EVENTS } from '@visue/core/EventedBase';

/**
 * イベント
 */
export const I18N_RESOURCES_EVENTS = {
  ...EVENTED_EVENTS,
  resourceset: 'resourceset',
  resourceupdate: 'resourceupdate',
} as const;
