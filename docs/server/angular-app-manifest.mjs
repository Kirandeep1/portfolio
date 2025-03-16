
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  }
],
  assets: new Map([
['index.csr.html', {size: 16581, hash: '531db93ac6993ae3b93d928bc95f8b32eee28e1ac1a8cdcd7118ef495b78ee4d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 15196, hash: 'c797b4e0960b05935f9fa40ea938622126d0259992e551f4d8eff9cc127bb90c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 42378, hash: '281d8ba3374a22ff61051bffad25ffae4edba68eb3c7edc0b6f401b1822abf1c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-2SLQJJXX.css', {size: 15782, hash: 'IMCDvgWXslc', text: () => import('./assets-chunks/styles-2SLQJJXX_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
