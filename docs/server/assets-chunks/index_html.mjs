export default `<!DOCTYPE html><html lang="en" data-beasties-container><head><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <meta charset="utf-8">
  <title>Portfolio</title>
  <base href="/portfolio/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <style>@font-face{font-family:'Poppins';font-style:italic;font-weight:100;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiAyp8kv8JHgFVrJJLmE0tMMPKzSQ.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Poppins';font-style:italic;font-weight:100;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiAyp8kv8JHgFVrJJLmE0tCMPI.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Poppins';font-style:italic;font-weight:200;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLmv1pVGdeOcEg.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Poppins';font-style:italic;font-weight:200;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLmv1pVF9eO.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Poppins';font-style:italic;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLm21lVGdeOcEg.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Poppins';font-style:italic;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLm21lVF9eO.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Poppins';font-style:italic;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiGyp8kv8JHgFVrJJLufntAKPY.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Poppins';font-style:italic;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiGyp8kv8JHgFVrJJLucHtA.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Poppins';font-style:italic;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLmg1hVGdeOcEg.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Poppins';font-style:italic;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLmg1hVF9eO.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Poppins';font-style:italic;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLmr19VGdeOcEg.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Poppins';font-style:italic;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLmr19VF9eO.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Poppins';font-style:italic;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLmy15VGdeOcEg.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Poppins';font-style:italic;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLmy15VF9eO.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Poppins';font-style:italic;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLm111VGdeOcEg.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Poppins';font-style:italic;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLm111VF9eO.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Poppins';font-style:italic;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLm81xVGdeOcEg.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Poppins';font-style:italic;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiDyp8kv8JHgFVrJJLm81xVF9eO.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Poppins';font-style:normal;font-weight:100;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiGyp8kv8JHgFVrLPTufntAKPY.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Poppins';font-style:normal;font-weight:100;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiGyp8kv8JHgFVrLPTucHtA.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Poppins';font-style:normal;font-weight:200;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLFj_Z1JlFc-K.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Poppins';font-style:normal;font-weight:200;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLFj_Z1xlFQ.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Poppins';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLDz8Z1JlFc-K.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Poppins';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLDz8Z1xlFQ.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Poppins';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiEyp8kv8JHgFVrJJnecmNE.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Poppins';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiEyp8kv8JHgFVrJJfecg.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Poppins';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLGT9Z1JlFc-K.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Poppins';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Poppins';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLEj6Z1JlFc-K.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Poppins';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Poppins';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLCz7Z1JlFc-K.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Poppins';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Poppins';font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLDD4Z1JlFc-K.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Poppins';font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLDD4Z1xlFQ.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Poppins';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLBT5Z1JlFc-K.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Poppins';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLBT5Z1xlFQ.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}</style>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" rel="stylesheet">
<style>*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1,h2,h3,h4{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button{text-transform:none}button{-webkit-appearance:button;background-color:transparent;background-image:none}h1,h2,h3,h4,p{margin:0}ul{list-style:none;margin:0;padding:0}button{cursor:pointer}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.relative{position:relative}.sticky{position:sticky}.top-0{top:0}.z-50{z-index:50}.mx-auto{margin-left:auto;margin-right:auto}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.ml-2{margin-left:.5rem}.ml-6{margin-left:1.5rem}.mr-2{margin-right:.5rem}.mr-5{margin-right:1.25rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.mt-5{margin-top:1.25rem}.flex{display:flex}.grid{display:grid}.h-40{height:10rem}.h-screen{height:100vh}.w-10{width:2.5rem}.w-full{width:100%}.max-w-3xl{max-width:48rem}.cursor-pointer{cursor:pointer}.list-inside{list-style-position:inside}.list-disc{list-style-type:disc}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-4{gap:1rem}.gap-5{gap:1.25rem}.gap-8{gap:2rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-6>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1.5rem * var(--tw-space-x-reverse));margin-left:calc(1.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))}.overflow-hidden{overflow:hidden}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.border-none{border-style:none}.bg-\\[\\#008db3\\]{--tw-bg-opacity: 1;background-color:rgb(0 141 179 / var(--tw-bg-opacity, 1))}.bg-\\[\\#0a2540\\]{--tw-bg-opacity: 1;background-color:rgb(10 37 64 / var(--tw-bg-opacity, 1))}.bg-blue-500{--tw-bg-opacity: 1;background-color:rgb(59 130 246 / var(--tw-bg-opacity, 1))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.bg-gray-800{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-cover{background-size:cover}.bg-center{background-position:center}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.px-40{padding-left:10rem;padding-right:10rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-8{padding-left:2rem;padding-right:2rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.pb-10{padding-bottom:2.5rem}.pb-3{padding-bottom:.75rem}.pb-5{padding-bottom:1.25rem}.pt-10{padding-top:2.5rem}.pt-5{padding-top:1.25rem}.text-center{text-align:center}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-5xl{font-size:3rem;line-height:1}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-bold{font-weight:700}.font-extrabold{font-weight:800}.font-medium{font-weight:500}.font-semibold{font-weight:600}.italic{font-style:italic}.leading-relaxed{line-height:1.625}.text-blue-500{--tw-text-opacity: 1;color:rgb(59 130 246 / var(--tw-text-opacity, 1))}.text-gray-300{--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.underline{text-decoration-line:underline}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-shadow{transition-property:box-shadow;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}:root{--green:#69F0AE;--green-light: #B9F6CA;--gray-light: #BDBDBD;--dark-gray: #263238;--black: #212121}*{margin:0%;box-sizing:border-box}body{font-family:Poppins,sans-serif}html{scroll-behavior:smooth}.container{max-width:1500px;margin:0 auto;outline:0px solid white}.common-gradient{background:#fff}.hover\\:scale-105:hover{--tw-scale-x: 1.05;--tw-scale-y: 1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:bg-blue-700:hover{--tw-bg-opacity: 1;background-color:rgb(29 78 216 / var(--tw-bg-opacity, 1))}.hover\\:text-blue-500:hover{--tw-text-opacity: 1;color:rgb(59 130 246 / var(--tw-text-opacity, 1))}.hover\\:text-white:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.hover\\:shadow-lg:hover{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}@media (min-width: 640px){.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (min-width: 768px){.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.md\\:px-40{padding-left:10rem;padding-right:10rem}.md\\:text-6xl{font-size:3.75rem;line-height:1}}@media (min-width: 1024px){.lg\\:grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}}
</style><link rel="stylesheet" href="styles-5I3Y2AQJ.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-5I3Y2AQJ.css"></noscript></head>
<body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click"],[]);</script>
  <app-root ng-version="19.0.0" ngh="0" ng-server-context="ssg"><app-navbar ngh="0"><div class="bg-gray-800 text-white sticky top-0 z-50 shadow-md"><nav class="flex justify-between items-center p-4"><div class="flex items-center space-x-2"><i class="fas fa-code text-blue-500"></i><span class="text-2xl font-bold text-white">Kirandeep Kaur</span></div><ul class="flex space-x-6 text-white"><li><a href="#about-me" class="hover:text-blue-500 px-4 py-2 rounded-md transition duration-300">About Me</a></li><li><a href="#work-experience" class="hover:text-blue-500 px-4 py-2 rounded-md transition duration-300">Work Experience</a></li><li><a href="#projects" class="hover:text-blue-500 px-4 py-2 rounded-md transition duration-300">Projects</a></li><li><a href="#education" class="hover:text-blue-500 px-4 py-2 rounded-md transition duration-300">Education</a></li><li><a href="#skills" class="hover:text-blue-500 px-4 py-2 rounded-md transition duration-300">Skills</a></li></ul></nav></div></app-navbar><app-baner ngh="0"><div class="h-screen flex justify-center items-center text-white text-center bg-cover bg-center" style="background-image: url('/portfolio-background.jpg');"><div class="max-w-3xl px-5"><h1 class="text-5xl md:text-6xl font-extrabold mb-6">Kirandeep Kaur</h1><p class="text-3xl mb-4">Software Developer</p><div><a href="mailto:kiran.kaur1099@gmail.com" class="mr-5 text-white underline hover:text-blue-500">kiran.kaur1099@gmail.com</a><span><a href="https://www.linkedin.com/in/kiran1308/" target="_blank" aria-label="LinkedIn" class="text-white underline hover:text-blue-500">https://www.linkedin.com/in/kiran1308/</a></span></div><div class="flex justify-center gap-5 mt-5"><button class="px-6 py-3 text-base font-bold bg-[#008db3] hover:bg-blue-700 text-white border-none rounded-md cursor-pointer transition-transform hover:scale-105 shadow-lg" jsaction="click:;">View My Work</button><button class="px-6 py-3 text-base font-bold bg-[#008db3] hover:bg-blue-700 text-white border-none rounded-md cursor-pointer transition-transform hover:scale-105 shadow-lg" jsaction="click:;">Download Resume</button></div></div></div></app-baner><app-about-me id="about-me" ngh="1"><section id="about-me"><div class="text-white bg-[#0a2540] pt-10 pb-10 px-40"><h3 class="font-bold text-3xl pb-3 text-center">About Me</h3><p class="pb-3">I am a Frontend Developer with over 3 years of experience, specializing in Angular and building dynamic, scalable web applications. I am passionate about learning and adapting to new technologies to deliver impactful, user-focused solutions.</p><p class="pb-3">Currently, I work at Zversal Pvt. Ltd., where I contribute to creating user-friendly and efficient applications. Recently, I have explored low-code platforms like Retool, showcasing my adaptability to evolving tools and requirements.</p><!----></div></section></app-about-me><app-experience id="work-experience" ngh="2"><section id="work-experience" class="pt-10 pb-5 px-8 md:px-40 bg-gray-100 common-gradient"><div class="container mx-auto"><h2 class="text-3xl font-bold mb-8 text-center text-gray-800">Work Experience</h2><div class="grid md:grid-cols-2 gap-8"><div><div class="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"><div class="flex justify-between items-center mb-2"><h4 class="text-xl font-semibold text-gray-800">Software Developer</h4><p class="text-sm text-gray-600 italic">Jun 2021 - Present</p></div><p class="text-gray-700 font-medium">Zversal Pvt. Ltd.</p><ul class="mt-4 space-y-2 text-gray-700 list-disc list-inside"><li class="leading-relaxed">Maintaining various in-house Angular projects, consistently updating functionalities to meet evolving requirements.</li><li class="leading-relaxed">Migrated project from Angular v7 to v13 to ensure future compatibility.</li><li class="leading-relaxed">Replaced Bootstrap &amp; plain CSS with TailwindCSS in two existing in-house projects.</li><li class="leading-relaxed">Enhanced functionalities within a legacy AngularJS 1.x project.</li><li class="leading-relaxed">Integrated Mixpanel analytics in assigned projects to analyze user interactions to improve app usability.</li><li class="leading-relaxed">Wrote unit test cases with Karma and Jasmine.</li><li class="leading-relaxed">Improved code-quality by integrating enhancement tools - ESLint, Prettier &amp; Husky in applications</li><li class="leading-relaxed">Working on Retool, a low-code platform to build internal tools helping the QA and business teams to automate their tasks.</li><li class="leading-relaxed">Familarized with SQL, docker and AWS services.</li><!----></ul></div><!----></div><div><div class="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"><div class="flex justify-between items-center mb-2"><h4 class="text-xl font-semibold text-gray-800">Angular Developer Intern</h4><p class="text-sm text-gray-600 italic">Jan 2021 - Jun 2021</p></div><p class="text-gray-700 font-medium">Zversal Pvt. Ltd.</p><ul class="mt-4 space-y-2 text-gray-700 list-disc list-inside"><li class="leading-relaxed">Had the opportunity to start an in-house project "Market Data on Demand" from scratch with the collaboration of UI/UX designers.</li><li class="leading-relaxed">Enhancements done in the in-house project "Vendor Management Project"</li><li class="leading-relaxed">Utilized APIs and Postman to fetch and display data on the UI.</li><li class="leading-relaxed">Learned Git, GitHub, markdown language, and wrote README files for projects.</li><!----></ul></div><!----></div></div></div></section></app-experience><app-projects id="projects" ngh="3"><section id="projects" class="pt-5 pb-5 px-40 bg-gray-100 common-gradient"><div class="container mx-auto"><h2 class="text-3xl font-bold mb-8 text-center">Projects</h2><div class="space-y-6"><div class="bg-white p-6 shadow rounded-lg"><div class="flex justify-between"><div class="flex justify-between items-center"><h3 class="text-xl font-semibold flex items-center"><span class="mr-2">📂</span> Market Data on Demand Application </h3><p class="text-sm text-gray-500 ml-6"> 06/2021-Present </p></div><button class="bg-blue-500 text-white px-2 rounded-lg" jsaction="click:;"> View Details </button></div><div class="text-sm flex"><p class="text-gray-700">Technologies:</p><span class="text-gray-500 ml-2"> Angular, GraphQL, Node.js, Go </span></div><!----></div><div class="bg-white p-6 shadow rounded-lg"><div class="flex justify-between"><div class="flex justify-between items-center"><h3 class="text-xl font-semibold flex items-center"><span class="mr-2">📂</span> gRPC Service Management Tool </h3><p class="text-sm text-gray-500 ml-6"> 08/2024-Present </p></div><button class="bg-blue-500 text-white px-2 rounded-lg" jsaction="click:;"> View Details </button></div><div class="text-sm flex"><p class="text-gray-700">Technologies:</p><span class="text-gray-500 ml-2"> Retool, gRPC </span></div><!----></div><div class="bg-white p-6 shadow rounded-lg"><div class="flex justify-between"><div class="flex justify-between items-center"><h3 class="text-xl font-semibold flex items-center"><span class="mr-2">📂</span> Vendor Management System </h3><p class="text-sm text-gray-500 ml-6"> 01/2021-Present </p></div><button class="bg-blue-500 text-white px-2 rounded-lg" jsaction="click:;"> View Details </button></div><div class="text-sm flex"><p class="text-gray-700">Technologies:</p><span class="text-gray-500 ml-2"> Angular, Java </span></div><!----></div><div class="bg-white p-6 shadow rounded-lg"><div class="flex justify-between"><div class="flex justify-between items-center"><h3 class="text-xl font-semibold flex items-center"><span class="mr-2">📂</span> Agreement App </h3><p class="text-sm text-gray-500 ml-6"> 10/2022-04/2024 </p></div><button class="bg-blue-500 text-white px-2 rounded-lg" jsaction="click:;"> View Details </button></div><div class="text-sm flex"><p class="text-gray-700">Technologies:</p><span class="text-gray-500 ml-2"> AngularJS 1.x, Java </span></div><!----></div><!----></div></div></section></app-projects><app-education id="education" ngh="0"><section id="education" class="pt-5 pb-5 px-40 bg-gray-100 common-gradient"><div class="container mx-auto"><h2 class="text-3xl font-bold mb-8 text-center">Education</h2><div class="bg-white p-6 shadow rounded-lg"><h3 class="text-2xl font-semibold">B.E in Information Technology</h3><p class="text-gray-600">UIET, Panjab University</p><p class="text-sm text-gray-500">2017 - 2021 | CGPA: 8.67</p></div></div></section></app-education><app-skills id="skills" ngh="4"><section id="skills" class="pt-5 pb-5 px-40 bg-gray-100 common-gradient"><h2 class="text-3xl font-bold mb-8 text-center">Skills</h2><div class="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"><div class="flex flex-col items-center bg-white p-4 shadow rounded"><div class="relative bg-gray-200 h-40 w-10 rounded-full overflow-hidden flex items-end justify-center"><div class="w-full rounded-full" style="height: 75%; background: linear-gradient(to top, #3b82f6, #2563eb);"></div></div><div class="mt-2 text-center"><span class="text-lg font-medium">Angular</span></div></div><div class="flex flex-col items-center bg-white p-4 shadow rounded"><div class="relative bg-gray-200 h-40 w-10 rounded-full overflow-hidden flex items-end justify-center"><div class="w-full rounded-full" style="height: 80%; background: linear-gradient(to top, #3b82f6, #2563eb);"></div></div><div class="mt-2 text-center"><span class="text-lg font-medium">Javascript</span></div></div><div class="flex flex-col items-center bg-white p-4 shadow rounded"><div class="relative bg-gray-200 h-40 w-10 rounded-full overflow-hidden flex items-end justify-center"><div class="w-full rounded-full" style="height: 70%; background: linear-gradient(to top, #f59e0b, #d97706);"></div></div><div class="mt-2 text-center"><span class="text-lg font-medium">Typescript</span></div></div><div class="flex flex-col items-center bg-white p-4 shadow rounded"><div class="relative bg-gray-200 h-40 w-10 rounded-full overflow-hidden flex items-end justify-center"><div class="w-full rounded-full" style="height: 90%; background: linear-gradient(to top, #34d399, #059669);"></div></div><div class="mt-2 text-center"><span class="text-lg font-medium">HTML</span></div></div><div class="flex flex-col items-center bg-white p-4 shadow rounded"><div class="relative bg-gray-200 h-40 w-10 rounded-full overflow-hidden flex items-end justify-center"><div class="w-full rounded-full" style="height: 80%; background: linear-gradient(to top, #3b82f6, #2563eb);"></div></div><div class="mt-2 text-center"><span class="text-lg font-medium">CSS</span></div></div><div class="flex flex-col items-center bg-white p-4 shadow rounded"><div class="relative bg-gray-200 h-40 w-10 rounded-full overflow-hidden flex items-end justify-center"><div class="w-full rounded-full" style="height: 70%; background: linear-gradient(to top, #f59e0b, #d97706);"></div></div><div class="mt-2 text-center"><span class="text-lg font-medium">Bootstrap</span></div></div><div class="flex flex-col items-center bg-white p-4 shadow rounded"><div class="relative bg-gray-200 h-40 w-10 rounded-full overflow-hidden flex items-end justify-center"><div class="w-full rounded-full" style="height: 70%; background: linear-gradient(to top, #f59e0b, #d97706);"></div></div><div class="mt-2 text-center"><span class="text-lg font-medium">TailwindCSS</span></div></div><div class="flex flex-col items-center bg-white p-4 shadow rounded"><div class="relative bg-gray-200 h-40 w-10 rounded-full overflow-hidden flex items-end justify-center"><div class="w-full rounded-full" style="height: 60%; background: linear-gradient(to top, #f59e0b, #d97706);"></div></div><div class="mt-2 text-center"><span class="text-lg font-medium">REST</span></div></div><div class="flex flex-col items-center bg-white p-4 shadow rounded"><div class="relative bg-gray-200 h-40 w-10 rounded-full overflow-hidden flex items-end justify-center"><div class="w-full rounded-full" style="height: 50%; background: linear-gradient(to top, #f87171, #e11d48);"></div></div><div class="mt-2 text-center"><span class="text-lg font-medium">Node.js</span></div></div><div class="flex flex-col items-center bg-white p-4 shadow rounded"><div class="relative bg-gray-200 h-40 w-10 rounded-full overflow-hidden flex items-end justify-center"><div class="w-full rounded-full" style="height: 50%; background: linear-gradient(to top, #f87171, #e11d48);"></div></div><div class="mt-2 text-center"><span class="text-lg font-medium">SQL</span></div></div><div class="flex flex-col items-center bg-white p-4 shadow rounded"><div class="relative bg-gray-200 h-40 w-10 rounded-full overflow-hidden flex items-end justify-center"><div class="w-full rounded-full" style="height: 70%; background: linear-gradient(to top, #f59e0b, #d97706);"></div></div><div class="mt-2 text-center"><span class="text-lg font-medium">GIT</span></div></div><div class="flex flex-col items-center bg-white p-4 shadow rounded"><div class="relative bg-gray-200 h-40 w-10 rounded-full overflow-hidden flex items-end justify-center"><div class="w-full rounded-full" style="height: 80%; background: linear-gradient(to top, #3b82f6, #2563eb);"></div></div><div class="mt-2 text-center"><span class="text-lg font-medium">Github</span></div></div><!----></div></section></app-skills><app-contact id="contact" ngh="0"><footer class="bg-gray-800 text-white py-4"><div class="container mx-auto text-center"><h4 class="text-lg font-semibold mb-4 mt-2">Let's Connect!</h4><div class="flex justify-center space-x-6 mb-4"><a href="https://www.linkedin.com/in/kiran1308/" target="_blank" class="text-gray-300 hover:text-white"><i class="fab fa-linkedin text-xl"></i></a><a href="mailto:kiran.kaur1099@gmail.com" class="text-gray-300 hover:text-white"><i class="fas fa-envelope text-xl"></i></a><a href class="text-gray-300 hover:text-white"><i class="fa-solid fa-location-dot"></i> Mohali, Punjab </a></div><p class="text-sm text-gray-400">Built with ❤️ using Angular and TailwindCSS</p></div></footer></app-contact></app-root>
<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-NWWSIMPW.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{},{"t":{"5":"t0"},"c":{"5":[{"i":"t0","r":1,"x":2}]}},{"t":{"7":"t1","10":"t3"},"c":{"7":[{"i":"t1","r":1,"t":{"10":"t2"},"c":{"10":[{"i":"t2","r":1,"x":9}]}}],"10":[{"i":"t3","r":1,"t":{"10":"t4"},"c":{"10":[{"i":"t4","r":1,"x":4}]}}]}},{"t":{"6":"t5"},"c":{"6":[{"i":"t5","r":1,"t":{"16":"t6"},"c":{"16":[]},"x":4}]}},{"t":{"5":"t7"},"c":{"5":[{"i":"t7","r":1,"x":12}]}}]}</script></body></html>`;