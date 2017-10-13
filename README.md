Date formatting
===============
Date formatting from string

Installation
------------

```git
npm install --save-dev date-formatting
```

Usage
-----
```js
const formatting = require('date-formatting');

formatting(new Date());
formatting(new Date(), 'MMM dd, yyyy hh:mma Z');
formatting(new Date(), 'MMM dd, yyyy hh:mma Z', options);
```

Default format
--------------
* `D` - Day in week (Sun-Sat)
* `DD` - Day in week (Sunday-Saturday)
* `d` - Day in month (1-31)
* `dd` - Day in month, padded (01-31)
* `M` - Month in year (1-12)
* `MM` - Month in year, padded (01-12)
* `MMM` - Month in year (Jan-Dec)
* `MMMM` - Month in year (January-December)
* `yy` - 2 digit representation of year, padded (00-99)
* `yyyy` - 4 digit representation of year
* `H` - Hour in day (0-23)
* `HH` - Hour in day, padded (00-23)
* `h` - Hour in AM/PM, (1-12)
* `hh` - Hour in AM/PM, padded (01-12)
* `m` - Minute in hour (0-59)
* `mm` - Minute in hour, padded (00-59)
* `s` - Second in minute (0-59)
* `ss` - Second in minute, padded (00-59)
* `sss` - Millisecond in second, padded (000-999)
* `a` - AM/PM marker
* `Z` - timezone offset

Default options
---------------
```js
const options = {
  monthFullNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthShortNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  daysFullNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  daysShortNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  format: {
    deyWeekMin: 'D',
    deyWeek: 'DD',
    dayMin: 'd',
    day: 'dd',
    monthMin: 'M',
    month: 'MM',
    monthShort: 'MMM',
    monthFull: 'MMMM',
    yearShort: 'yy',
    yearFull: 'yyyy',
    hourMin: 'H',
    hour: 'HH',
    hourAmPmMin: 'h',
    hourAmPm: 'hh',
    minutesMin: 'm',
    minutes: 'mm',
    secondsMin: 's',
    seconds: 'ss',
    milliseconds: 'sss',
    markerAmPm: 'a',
    timezone: 'Z'
  }
};
```