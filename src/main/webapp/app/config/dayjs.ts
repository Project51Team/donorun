import dayjs from 'dayjs/esm';
import customParseFormat from 'dayjs/esm/plugin/customParseFormat';
import duration from 'dayjs/esm/plugin/duration';
import relativeTime from 'dayjs/esm/plugin/relativeTime';

// jhipster-needle-i18n-language-dayjs-imports - JHipster will import languages from dayjs here
import 'dayjs/esm/locale/en';
import 'dayjs/esm/locale/hy-am';
import 'dayjs/esm/locale/be';
import 'dayjs/esm/locale/bg';
import 'dayjs/esm/locale/fr';
import 'dayjs/esm/locale/de';
import 'dayjs/esm/locale/hi';
import 'dayjs/esm/locale/it';
import 'dayjs/esm/locale/pl';
import 'dayjs/esm/locale/ro';
import 'dayjs/esm/locale/ru';
import 'dayjs/esm/locale/uk';
import 'dayjs/esm/locale/uz-latn';

// DAYJS CONFIGURATION
dayjs.extend(customParseFormat);
dayjs.extend(duration);
dayjs.extend(relativeTime);
