/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "879c9c728601fc22c26f6cf6fbf9d841"
  },
  {
    "url": "about/index.html",
    "revision": "4daa5b123a6afb8bfce160d4f297a93b"
  },
  {
    "url": "assets/css/0.styles.b2d462f7.css",
    "revision": "8e7f46a01dab08b81f397bea9293769c"
  },
  {
    "url": "assets/fonts/FZZJ-LSSSTJW.0684cdae.woff2",
    "revision": "0684cdaea75587fe4ebc9bc87e830f3f"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/fonts/Kalam-Regular.9af695bd.woff2",
    "revision": "9af695bda9f23334112103791163cbb2"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/pika.e4a4d948.gif",
    "revision": "e4a4d948363e7ff0f9fe94758b66f2fd"
  },
  {
    "url": "assets/img/pikachu-running.c05c8686.gif",
    "revision": "c05c868695b8167c0eb12d0d2529a275"
  },
  {
    "url": "assets/img/sakura.5e4a2cfb.png",
    "revision": "5e4a2cfbc3aae83420146d71ee06ba17"
  },
  {
    "url": "assets/img/wait.8c3da546.jpg",
    "revision": "8c3da54686eb7f20967dd1c7603d55bd"
  },
  {
    "url": "assets/js/1.0976e6b6.js",
    "revision": "0e782f06d08ce6e493ca9820811dfe0a"
  },
  {
    "url": "assets/js/10.e4a160a0.js",
    "revision": "c2d3adff1cc52e9fc937971e7e436934"
  },
  {
    "url": "assets/js/11.5b36abae.js",
    "revision": "9799ea5248f55a10de2e04796f3f68e1"
  },
  {
    "url": "assets/js/12.116f564c.js",
    "revision": "5d3dd75234a87783bbd4b11be85ffd8c"
  },
  {
    "url": "assets/js/13.3ca2406e.js",
    "revision": "8f7fe438fec152810c3799c025e7985c"
  },
  {
    "url": "assets/js/14.2c456fe0.js",
    "revision": "abcba8448d4ef240550a4632c292e973"
  },
  {
    "url": "assets/js/15.a2d3249a.js",
    "revision": "28d7cd437974a613c25ce64a04aa6641"
  },
  {
    "url": "assets/js/16.b8430c5f.js",
    "revision": "f078203a6fc6de40f75ae5fc5b1e1f10"
  },
  {
    "url": "assets/js/17.60b7b9fe.js",
    "revision": "d00505a803a16ae99a31c73b660b1ff9"
  },
  {
    "url": "assets/js/18.e2a079ee.js",
    "revision": "d4ac13a1dc2425b033ab67c75223aef0"
  },
  {
    "url": "assets/js/19.ba10a952.js",
    "revision": "bf93c7d1e57a4e645e085111f68b41fa"
  },
  {
    "url": "assets/js/2.09e1c482.js",
    "revision": "c9384d3e1a2a5948b97bb873807db2c1"
  },
  {
    "url": "assets/js/20.dd1876ae.js",
    "revision": "3128827637cf830737db9e8fadfe3c99"
  },
  {
    "url": "assets/js/21.86b7dc47.js",
    "revision": "081ae11f688d06839e6aa1fea7c6d876"
  },
  {
    "url": "assets/js/22.d20a6515.js",
    "revision": "8dd0aaccd1958c2ac5930822c67502db"
  },
  {
    "url": "assets/js/23.de12f417.js",
    "revision": "8c029ea4701e9e5519997b86cd3b32bb"
  },
  {
    "url": "assets/js/24.c968462b.js",
    "revision": "e9fed71024309081a64fb499dad16f9b"
  },
  {
    "url": "assets/js/25.82d20d95.js",
    "revision": "e7e43c3f8f8edd0d331e13a2226df181"
  },
  {
    "url": "assets/js/26.f40cb151.js",
    "revision": "bb37498e96b3f2e7ba97770ccc78510e"
  },
  {
    "url": "assets/js/27.0607066f.js",
    "revision": "d5d4e50f88b2a4901c02aa5fe01eb09d"
  },
  {
    "url": "assets/js/28.1baedc6b.js",
    "revision": "484f41c6d56a51a4ab2c499438872297"
  },
  {
    "url": "assets/js/29.fadc1f7f.js",
    "revision": "40d38fad2e0c3c1a86328643baab7376"
  },
  {
    "url": "assets/js/3.6bbdefb8.js",
    "revision": "cc29edcc5354c47db7b8adeeb5dc50da"
  },
  {
    "url": "assets/js/5.7d7a23dd.js",
    "revision": "14b5e7c48b90c250e161d2633f117bfa"
  },
  {
    "url": "assets/js/6.84a570ca.js",
    "revision": "30f6a1fac5c679b0d12c944a7c03f37d"
  },
  {
    "url": "assets/js/7.f6d2c82d.js",
    "revision": "f5f7604a6b0dd6c9dd64153364fe2ea7"
  },
  {
    "url": "assets/js/8.37fde8cf.js",
    "revision": "22a43f38638e4e77f0414279cf00f59d"
  },
  {
    "url": "assets/js/9.e7a9b7c2.js",
    "revision": "4d61006dd49e44c45d9814a9a9623b1d"
  },
  {
    "url": "assets/js/app.63ebb374.js",
    "revision": "3fd02c65da1226c9f67976bc6e8f7bc2"
  },
  {
    "url": "audio/music/onlyMyRailgun/onlymyrailgunCover.jpg",
    "revision": "585b6a8c21fd4ae423aa547950ea192d"
  },
  {
    "url": "audio/music/sorrow/sorrowCover.jpg",
    "revision": "c11e386409628ed246faccce2f46f133"
  },
  {
    "url": "avatar.png",
    "revision": "53790c7ce5afc588319269b64d65cc7b"
  },
  {
    "url": "blogs/notes/ES5/ES5.html",
    "revision": "d8b6d707719da9dd7bacc4e07beb3ece"
  },
  {
    "url": "blogs/notes/HTTP/HttpProtocol.html",
    "revision": "a545af178735ce983277b6f6619c6442"
  },
  {
    "url": "blogs/notes/JS/JSnotes.html",
    "revision": "cc9eab30984907858b96550faa967a2b"
  },
  {
    "url": "blogs/notes/React/React.html",
    "revision": "a79b2966cad78c8986248ceeea016e92"
  },
  {
    "url": "blogs/notes/Router/RouterBasics.html",
    "revision": "13b28d210b6a85483424949fcc07415a"
  },
  {
    "url": "blogs/notes/TS/TSnotes.html",
    "revision": "331f913276727ce9de7e5a89d043f77a"
  },
  {
    "url": "blogs/notes/Vue/Vue2.html",
    "revision": "1159ff7064d43e0e8b55075edbaeb7cb"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "dc1f3f953453a14479b6db6080c4a0f1"
  },
  {
    "url": "categories/ES5/index.html",
    "revision": "2cd973f1b7cbb635ab77b81c53c9d176"
  },
  {
    "url": "categories/HTTP/index.html",
    "revision": "eb1e7777a2e98708c5a31d7c3fcf563f"
  },
  {
    "url": "categories/index.html",
    "revision": "001ffab6cd514c2586097d507b9da05f"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "34f1c6c0b2b3afdaa46ac8fd9784648a"
  },
  {
    "url": "categories/React/index.html",
    "revision": "fc6049ad259aea72674c4484b3db75d3"
  },
  {
    "url": "categories/Router/index.html",
    "revision": "8872521046f054596818ec451120d8db"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "87f5cd572b1c0c5e1304edd1088a7e1a"
  },
  {
    "url": "categories/Vue2/index.html",
    "revision": "75e6f4457943df938151ee348c2d296e"
  },
  {
    "url": "categories/网站搭建相关/index.html",
    "revision": "918d387ba58b6f695520faff6a536db7"
  },
  {
    "url": "docs/dailymotto.html",
    "revision": "e4018c7c95d1265fde65e5704c9ae803"
  },
  {
    "url": "docs/index.html",
    "revision": "283703cd3c5196e9235481ee0ec2b6ce"
  },
  {
    "url": "docs/markdown.html",
    "revision": "8126865d7b99c6b5748d643e702c9660"
  },
  {
    "url": "docs/theme.html",
    "revision": "7cede51458a994dc13b2d2118b586923"
  },
  {
    "url": "hero.jpg",
    "revision": "3070a09238225ca4ea3a130227a22a17"
  },
  {
    "url": "icons/logo-144.png",
    "revision": "5c7e5b0c590506a67dcc4d8fb6ff27ff"
  },
  {
    "url": "icons/logo-152.png",
    "revision": "1d9e3fb058fbdac3b73b71b6a45c9b3a"
  },
  {
    "url": "images/pika1.gif",
    "revision": "56ef7fa34d10a253efae46e85b97f2fe"
  },
  {
    "url": "images/pikachu-running.gif",
    "revision": "c05c868695b8167c0eb12d0d2529a275"
  },
  {
    "url": "index.html",
    "revision": "1871e84a860aa4b6ac15a77be150e637"
  },
  {
    "url": "logo.png",
    "revision": "7c365893f0158ef262013cc9cf1a1756"
  },
  {
    "url": "tag/ES5/index.html",
    "revision": "e323b4bd65fe46582e69776aedf3b3cf"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "15230cd6c270f084feab892a3656306b"
  },
  {
    "url": "tag/index.html",
    "revision": "a248933bd1fcad23125947f1c5320b33"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "88cb2b8753f969cb5aad63534b17c29c"
  },
  {
    "url": "tag/React/index.html",
    "revision": "a907b7ad4af4708f26cde29cd44f64b3"
  },
  {
    "url": "tag/Router/index.html",
    "revision": "38327ba15735bfa83bcfd0b543d0c1f8"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "92c7fb6bd34055ff94e5fa0944122d7c"
  },
  {
    "url": "tag/Vue2/index.html",
    "revision": "0e181177215c060a3945fec60cf00a81"
  },
  {
    "url": "tag/严格模式/index.html",
    "revision": "ff999d3fa1b0d936229cc2c74fb6d177"
  },
  {
    "url": "tag/技术笔记/index.html",
    "revision": "0eb49dac3cd08a3ddf6bea1294101161"
  },
  {
    "url": "tag/插件/index.html",
    "revision": "bfea8329fc7a1584b0eae0a3e084452a"
  },
  {
    "url": "timeline/index.html",
    "revision": "d21361918fc82e273bc58e2441ee023e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
