import i18n from 'sveltekit-i18n';
import { dev } from '$app/environment';
import lang from './lang.json';

export const defaultLocale = 'en';

/** @type {import('sveltekit-i18n').Config} */
export const config = {
  log: {
    level: dev ? 'warn' : 'error',
  },
  translations: {
    en: { lang },
ru: { lang },
  },
  loaders: [
    {
      locale: 'en',
      key: 'navbar',
      loader: async () => (await import('./en/navbar.json')).default,
    },
    {
      locale: 'en',
      key: 'about',
      routes: ['/about'],
      loader: async () => (await import('./en/about.json')).default,
    },
    {
      locale: 'en',
      key: 'main',
      routes: ['/'],
      loader: async () => (await import('./en/main.json')).default,
    },
    {
        locale: 'en',
        key: 'portfolio',
        routes: ['/portfolio'],
        loader: async () => (await import('./en/portfolio.json')).default,
      },
    {
      locale: 'ru',
      key: 'navbar',
      loader: async () => (await import('./ru/navbar.json')).default,
    },
    {
      locale: 'ru',
      key: 'about',
      routes: ['/about'],
      loader: async () => (await import('./ru/about.json')).default,
    },
    {
      locale: 'ru',
      key: 'main',
      routes: ['/'],
      loader: async () => (await import('./ru/main.json')).default,
    },
    {
        locale: 'ru',
        key: 'portfolio',
        routes: ['/portfolio'],
        loader: async () => (await import('./ru/portfolio.json')).default,
      },
  ],
};

export const { t, loading, locales, locale, translations, loadTranslations, addTranslations, setLocale, setRoute } = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));