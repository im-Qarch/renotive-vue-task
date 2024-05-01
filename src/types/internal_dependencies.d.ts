/**
 *  This file for declare type like
 *  - custom component
 *  - dependencies had no defined types
 *  - our internal directories and utilities, ...
 * {@link @vue/reactivity-transform}
 */
/// <reference types="vue/macros-global" />

// set correct index for plugins
declare module '@/plugins';
declare module '@/plugins/i18n.plugin';
declare module '@/plugins/icon.plugin';
// set correct index for types
declare module '@/types';
declare module '@/types/app';
declare module '@/types/product';
// set correct index for stores
declare module '@/stores';
declare module '@/stores/store';
// set correct index for assets
declare module '@/assets';
// set correct index for composables
declare module '@/composables';
// set correct index for utils
declare module '@/utils';
// set correct index for services
declare module '@/services';
// set correct index for components and router
declare module '@/components';
