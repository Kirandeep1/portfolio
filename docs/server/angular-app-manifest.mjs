
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
['index.csr.html', {size: 16389, hash: '683d4046d2ce19072680b6bd65ef7a657e1b0ef9596df98e75c99f9d9b8a0c3d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 15003, hash: '2964d5fdc4cc63e609984d1a9e3e1238c554c3d09b599e2e7dd60c04c1e7ccc5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 39569, hash: '6ee12ac51f1063cfcd265531a04125f481a8ceba854ac994a45a7d25650b8bbb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-5I3Y2AQJ.css', {size: 12936, hash: '1WIcWr+2MFw', text: () => import('./assets-chunks/styles-5I3Y2AQJ_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
