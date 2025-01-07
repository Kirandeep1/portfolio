
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
['index.csr.html', {size: 16389, hash: '4c1b041a08c6f40104ba2ad502199a07165f168ec326386bd8dab5cfdd791095', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 15003, hash: 'e0760e033d3b14b57d9b7f1d88b6321ff179a1bd071078234ab684e04dfb1f75', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 39568, hash: '41b6b7869633057fa2d68a755f5ac3dc5a6e9d26ad2133ffcdc2f46d8fe14673', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-5I3Y2AQJ.css', {size: 12936, hash: '1WIcWr+2MFw', text: () => import('./assets-chunks/styles-5I3Y2AQJ_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
