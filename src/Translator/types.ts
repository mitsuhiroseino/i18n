import { EventedConfig, EventedEventHandlers } from '@visue/core/EventedBase';
import { EventInfo } from '@visue/core/events';
import { StringFormatterConfig } from '@visue/datakit/formatters/StringFormatter';
import { FormatOptions } from '@visue/utils/string/format';
import I18nResources, { I18nResource } from '../I18nResources';
import { TRANSLATOR_EVENTS } from './constants';

/**
 * translateオプション
 */
export type TranslateOptions = Pick<FormatOptions, 'params'>;

/**
 * イベントハンドラー
 */
export type TranslatorEventHandlers = EventedEventHandlers & {
  [TRANSLATOR_EVENTS.languagechange]: (event: EventInfo<{ language: string }>) => void;
};

/**
 * コンフィグ
 */
export type TranslatorInitializeConfig<H extends TranslatorEventHandlers = TranslatorEventHandlers> = EventedConfig<H> &
  Partial<Pick<StringFormatterConfig, 'tokenBracket'>> & {
    /**
     * 初期の言語
     */
    language?: string;
    /**
     * リソース
     */
    resource?: I18nResource;
  };

/**
 * コンフィグ
 */
export type TranslatorConfig<H extends TranslatorEventHandlers = TranslatorEventHandlers> = EventedConfig<H> & {
  /**
   * リソース管理
   */
  resources?: I18nResources;
};
