import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'findLanguageFromKey' })
export class FindLanguageFromKeyPipe implements PipeTransform {
  private languages: { [key: string]: { name: string; rtl?: boolean } } = {
    hy: { name: 'Հայերեն' },
    by: { name: 'Беларускі' },
    bg: { name: 'Български' },
    en: { name: 'English' },
    fr: { name: 'Français' },
    de: { name: 'Deutsch' },
    hi: { name: 'हिंदी' },
    it: { name: 'Italiano' },
    pl: { name: 'Polski' },
    ro: { name: 'Română' },
    ru: { name: 'Русский' },
    ua: { name: 'Українська' },
    'uz-Latn-uz': { name: 'O`zbekcha' },
    // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
  };

  transform(lang: string): string {
    return this.languages[lang].name;
  }
}
