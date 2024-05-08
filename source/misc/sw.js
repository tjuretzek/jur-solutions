if (location.hostname !== "localhost" ) {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

  workbox.precaching.precacheAndRoute([
  {
    "url": "assets/images/banner-jur-solutions.jpg",
    "revision": "dd97fb37e3d56a49b7be102b7b923f89"
  },
  {
    "url": "assets/images/chart.png",
    "revision": "9265cff4a7e76f6fbb0f6131f785af25"
  },
  {
    "url": "assets/images/chart.svg",
    "revision": "b19a9ba0f02be317aba5ec720c55949f"
  },
  {
    "url": "assets/images/cookie-free-darkmode.png",
    "revision": "276926ab9f4b3b2f4c65d03558872144"
  },
  {
    "url": "assets/images/cookie-free-darkmode.svg",
    "revision": "52836c2459e9611c83a0988c3ff653cd"
  },
  {
    "url": "assets/images/cookie-free.png",
    "revision": "4a3e9036097b2164a3a6a9ee0b8c48dd"
  },
  {
    "url": "assets/images/cookie-free.svg",
    "revision": "0b47a6c285fe8f5974f4be6c3200283e"
  },
  {
    "url": "assets/images/github.png",
    "revision": "de02e5b7a940434921cfd5a10d0f7741"
  },
  {
    "url": "assets/images/github.svg",
    "revision": "f8e00c865ed73c57d95bcb402213ca4a"
  },
  {
    "url": "assets/images/logo-small.png",
    "revision": "ac3c1c4a1eb47d27cf6de90eff38e4d1"
  },
  {
    "url": "assets/images/logo-small.svg",
    "revision": "a3f27b0995d2c197a4132493d140c8bb"
  },
  {
    "url": "assets/images/logo.png",
    "revision": "cf7ca9575a4ac7c4ac06d245abe77686"
  },
  {
    "url": "assets/images/logo.svg",
    "revision": "cbe61106579e0d0666b1bf14485ff0a8"
  },
  {
    "url": "assets/images/tim-juretzek-medium.jpg",
    "revision": "2b2f97bd1ad8de73d9fce29ce4d14a23"
  },
  {
    "url": "assets/images/tim-juretzek-medium.webp",
    "revision": "db7d99161cfa37cdc29b9516115bf4a8"
  },
  {
    "url": "assets/images/tim-juretzek-small.jpg",
    "revision": "da6443b123fbb56ccefb9464c984e64d"
  },
  {
    "url": "assets/images/tim-juretzek-small.webp",
    "revision": "586ea9a672cf8617f655d6414ded7361"
  },
  {
    "url": "assets/images/tim-juretzek.jpg",
    "revision": "e098740edc3f093a36c5f070dead065c"
  },
  {
    "url": "assets/images/tim-juretzek.webp",
    "revision": "bb82022f4082c7582ed8df5cf259ce43"
  },
  {
    "url": "assets/images/favicon/android-chrome-192x192.png",
    "revision": "5310ccdc43b9dc18ff8bfd5ab32fa65a"
  },
  {
    "url": "assets/images/favicon/android-chrome-512x512.png",
    "revision": "aca5528cbace29475a16853c85afa186"
  },
  {
    "url": "assets/images/favicon/apple-touch-icon.png",
    "revision": "d53848b8e4dd10adb13e967fbe47f146"
  },
  {
    "url": "assets/images/favicon/browserconfig.xml",
    "revision": "8c4787ca1cbfe530c46b171b0c896567"
  },
  {
    "url": "assets/images/favicon/favicon-16x16.png",
    "revision": "8c9f5b6ee59cbf3cf6cfa61b0c089b34"
  },
  {
    "url": "assets/images/favicon/favicon-32x32.png",
    "revision": "3864820328d55561c6349a064ce29a72"
  },
  {
    "url": "assets/images/favicon/maskable_icon.png",
    "revision": "5331485a2e6e9597cbf713f990b60346"
  },
  {
    "url": "assets/images/favicon/mstile-144x144.png",
    "revision": "233e5d9b271805917d9bea888dba64a6"
  },
  {
    "url": "assets/images/favicon/mstile-150x150.png",
    "revision": "95d86ac3de32c7707faf6074ec1c3f6b"
  },
  {
    "url": "assets/images/favicon/mstile-310x150.png",
    "revision": "8f7972e6e74c5c77e7ffeada5afc82f5"
  },
  {
    "url": "assets/images/favicon/mstile-310x310.png",
    "revision": "40e654bad9aa9e2c22c879a00a2c0977"
  },
  {
    "url": "assets/images/favicon/mstile-70x70.png",
    "revision": "3ff4e3ee1561dfece6ed0ccfe65bfa1a"
  },
  {
    "url": "assets/images/favicon/safari-pinned-tab.svg",
    "revision": "30ce7e58bf3652b4a1fcd07244ae04a8"
  },
  {
    "url": "assets/images/favicon/site.webmanifest",
    "revision": "2f17ec83da047d951708eeeb7df03419"
  },
  {
    "url": "assets/images/logos/adesso.svg",
    "revision": "36ea6767fd649877d1cc93f3faeae38f"
  },
  {
    "url": "assets/images/logos/alnatura.png",
    "revision": "0bfb507914feeb5bafee67e54e885cd2"
  },
  {
    "url": "assets/images/logos/alnatura.svg",
    "revision": "5ed79792d3ebe42db7226133d8ce5226"
  },
  {
    "url": "assets/images/logos/amp.png",
    "revision": "bc359c9a257a54f1da89bb4e33a01656"
  },
  {
    "url": "assets/images/logos/amp.svg",
    "revision": "2bad708698091ea78af24b8b0d7d069c"
  },
  {
    "url": "assets/images/logos/commarco.png",
    "revision": "1329c812c8a7ca1939bf192b1e4bda8b"
  },
  {
    "url": "assets/images/logos/commarco.svg",
    "revision": "7bc0f1af41e120ce891cd10afdc85976"
  },
  {
    "url": "assets/images/logos/craft.png",
    "revision": "ba05a0274cbc117b4651cf1e9d34801c"
  },
  {
    "url": "assets/images/logos/craft.svg",
    "revision": "63be17d21b4d1f667580dbc80be54278"
  },
  {
    "url": "assets/images/logos/css3.png",
    "revision": "b3fc50f44f609098550c5fb1c6df8e9a"
  },
  {
    "url": "assets/images/logos/css3.svg",
    "revision": "8a344821566a929efb7985ec05961807"
  },
  {
    "url": "assets/images/logos/deepblue.png",
    "revision": "8ce8da241d007edeb4fc666e6411454e"
  },
  {
    "url": "assets/images/logos/deepblue.svg",
    "revision": "727983dfef576a8cb9e6abe94f3f9258"
  },
  {
    "url": "assets/images/logos/dekra.png",
    "revision": "4442546441cf0302cea4bd2f46001596"
  },
  {
    "url": "assets/images/logos/dekra.svg",
    "revision": "1f355e1622cc1af0a1bf26dead463771"
  },
  {
    "url": "assets/images/logos/dmag.png",
    "revision": "46af646428592f8ecb11b196bfa47004"
  },
  {
    "url": "assets/images/logos/dmag.svg",
    "revision": "401bef672ceae42bbd8ef3a03e5fd384"
  },
  {
    "url": "assets/images/logos/foundation.png",
    "revision": "90e93123b87d84ee48423921f503571e"
  },
  {
    "url": "assets/images/logos/foundation.svg",
    "revision": "80ef1fa50cbd9c555af7b9bcebedd40b"
  },
  {
    "url": "assets/images/logos/greensock.png",
    "revision": "aca2cd4cc3486bd5da1aeb2e9f153f7f"
  },
  {
    "url": "assets/images/logos/greensock.svg",
    "revision": "ab9cf201c9583e13697c83d41dff8da9"
  },
  {
    "url": "assets/images/logos/gulp.png",
    "revision": "57550345df717578d9337e0540e23a56"
  },
  {
    "url": "assets/images/logos/gulp.svg",
    "revision": "fdf2dfdfb0c620605e96038a0bd074c0"
  },
  {
    "url": "assets/images/logos/herne.png",
    "revision": "d2750f6b062a39d81f56edb45144b213"
  },
  {
    "url": "assets/images/logos/herne.svg",
    "revision": "68959195d31647bd2186483f3b6e7ba7"
  },
  {
    "url": "assets/images/logos/html5.png",
    "revision": "4e99b72bf04fc6f264f1c6efd9704c1b"
  },
  {
    "url": "assets/images/logos/html5.svg",
    "revision": "578525e73afbdd7cf213517916a8bcb7"
  },
  {
    "url": "assets/images/logos/javascript.png",
    "revision": "9aef285ae6e28d0cdcaf5fb620405074"
  },
  {
    "url": "assets/images/logos/javascript.svg",
    "revision": "ef809f5a67343bea6ceb3e34a41fd5d0"
  },
  {
    "url": "assets/images/logos/jquery.png",
    "revision": "5d30b598fd327c459deeb8f427d16bf7"
  },
  {
    "url": "assets/images/logos/jquery.svg",
    "revision": "aa3d173862da6da841a06b93ef335df3"
  },
  {
    "url": "assets/images/logos/laravel.png",
    "revision": "4e75bce5d0406c9f5018bfce6fd736f1"
  },
  {
    "url": "assets/images/logos/laravel.svg",
    "revision": "0b292bd13708a5e10fcc4eb98570aef4"
  },
  {
    "url": "assets/images/logos/lidl.png",
    "revision": "6c3ab4b626d6cad304c09c4dc6d3651e"
  },
  {
    "url": "assets/images/logos/lidl.svg",
    "revision": "0ed13de2bc319ed960ce6baa897cc4af"
  },
  {
    "url": "assets/images/logos/lotto.png",
    "revision": "6e0e9b2f6060485d1d5b6c39024aea0d"
  },
  {
    "url": "assets/images/logos/lotto.svg",
    "revision": "65125efcb58e0e86fac8da0b193f6f06"
  },
  {
    "url": "assets/images/logos/maastricht-university.png",
    "revision": "89f160dfa6cdeaf00bc23734b05c0a68"
  },
  {
    "url": "assets/images/logos/maastricht-university.svg",
    "revision": "ac1b582308a39d958e02ea97d29b1643"
  },
  {
    "url": "assets/images/logos/mabach.png",
    "revision": "aa1d858c7704d538ed53f0bf42d5ff02"
  },
  {
    "url": "assets/images/logos/mabach.svg",
    "revision": "8f32ccb495ae8e441a959e9d88ba4e97"
  },
  {
    "url": "assets/images/logos/medion.png",
    "revision": "ced87e976c217c02bc1f1cd48a3a65d2"
  },
  {
    "url": "assets/images/logos/medion.svg",
    "revision": "bbb8249a32bc81fb4a03029e4c8f60e5"
  },
  {
    "url": "assets/images/logos/mmz.png",
    "revision": "1192dad115da8d2a715a5a4498c9a139"
  },
  {
    "url": "assets/images/logos/mmz.svg",
    "revision": "d171fba24496a50647b27b7bca3190dc"
  },
  {
    "url": "assets/images/logos/node-js.png",
    "revision": "314cb7e01cb901ed34f615ecce6ac4d8"
  },
  {
    "url": "assets/images/logos/node-js.svg",
    "revision": "0407e611cfd01b260635ddc3fa0f8c26"
  },
  {
    "url": "assets/images/logos/persil.png",
    "revision": "a250325c595c2c8be19c27a2daf3f7bf"
  },
  {
    "url": "assets/images/logos/persil.svg",
    "revision": "6fea6eaea9a53ed7e35b7d3d5ffc6c10"
  },
  {
    "url": "assets/images/logos/php.png",
    "revision": "9bf7262975d4d38bc970abb43588cbd4"
  },
  {
    "url": "assets/images/logos/php.svg",
    "revision": "45c9c78e4b3030975d1f61aba34e9660"
  },
  {
    "url": "assets/images/logos/playmobil.png",
    "revision": "c484a3ae373709b382af81273621f0ce"
  },
  {
    "url": "assets/images/logos/playmobil.svg",
    "revision": "a63bdd1ebd47ec414b8570a877f7f048"
  },
  {
    "url": "assets/images/logos/plesk.png",
    "revision": "409e37a014b5aea354bd4d47a8cb074e"
  },
  {
    "url": "assets/images/logos/plesk.svg",
    "revision": "d064e960ed4e631bad1f3ec67ee8bf6a"
  },
  {
    "url": "assets/images/logos/pwa.png",
    "revision": "d3c337b30a6e7da7ff282856169f35d1"
  },
  {
    "url": "assets/images/logos/pwa.svg",
    "revision": "a7bf35642efb8cd56e76d948906dd427"
  },
  {
    "url": "assets/images/logos/react.png",
    "revision": "c081310a6c28cb6de31c4f6f4f86090b"
  },
  {
    "url": "assets/images/logos/react.svg",
    "revision": "906ba89dd3f04c7b48c3c92442220727"
  },
  {
    "url": "assets/images/logos/sass.png",
    "revision": "5b5419578d74b5dfc0e9f05adf03b7cb"
  },
  {
    "url": "assets/images/logos/sass.svg",
    "revision": "39822fc9db68f26298955333de34d921"
  },
  {
    "url": "assets/images/logos/schule-mk.png",
    "revision": "81bef88861e7d5d9bec1a05c58984911"
  },
  {
    "url": "assets/images/logos/schule-mk.svg",
    "revision": "04562bca500b4c9281b43c6572cb45a5"
  },
  {
    "url": "assets/images/logos/schwarzkopf.png",
    "revision": "9a4499a8339c5c90ce553b46635281e8"
  },
  {
    "url": "assets/images/logos/schwarzkopf.svg",
    "revision": "8554126b54f4e6cded4830f905bf1e26"
  },
  {
    "url": "assets/images/logos/smk.png",
    "revision": "8646c06e8829bfe4d0600b66a7411239"
  },
  {
    "url": "assets/images/logos/smk.svg",
    "revision": "21965f875a9507911eb652d5fcdf59b5"
  },
  {
    "url": "assets/images/logos/statista.png",
    "revision": "46edb5f34606da27fd46d94a97a519a5"
  },
  {
    "url": "assets/images/logos/statista.svg",
    "revision": "91762cd6a31f030325684479020ade37"
  },
  {
    "url": "assets/images/logos/tefaf-maastricht.png",
    "revision": "bd2fdddaee0a040e26e51ce4e23f2faa"
  },
  {
    "url": "assets/images/logos/tefaf-maastricht.svg",
    "revision": "efc9648b46daaf51630459ca883cea2a"
  },
  {
    "url": "assets/images/logos/twig.png",
    "revision": "861e6810514f97fef6c808c17f0128d1"
  },
  {
    "url": "assets/images/logos/twig.svg",
    "revision": "df6dd611c90febd4ccb4d29536ddfa96"
  },
  {
    "url": "assets/images/logos/typescript.png",
    "revision": "7ccc65c9ba0b1f507868f02e8ac23fcb"
  },
  {
    "url": "assets/images/logos/typescript.svg",
    "revision": "dc9030b0fd99f108ce01f61b74d5b4b1"
  },
  {
    "url": "assets/images/logos/upljft.png",
    "revision": "46cf4b149959dc359f8a35eb3024895e"
  },
  {
    "url": "assets/images/logos/upljft.svg",
    "revision": "9172490a6f807411a4b0af5ac47a9ed6"
  },
  {
    "url": "assets/images/logos/vercel.png",
    "revision": "ddeaf6a2f3fc0bf958ffb623dd7a503a"
  },
  {
    "url": "assets/images/logos/vercel.svg",
    "revision": "8654ce1473a0bf4fc9833f9235b938e5"
  },
  {
    "url": "assets/images/logos/vue-js.png",
    "revision": "d3b894aa786a7a29aa1883d05a1971a5"
  },
  {
    "url": "assets/images/logos/vue-js.svg",
    "revision": "846ba0adf6c268af6a7ce4e29e732c48"
  },
  {
    "url": "assets/images/logos/webpack.png",
    "revision": "df9ece00f856b288a6b5cfd17dbeb9bf"
  },
  {
    "url": "assets/images/logos/webpack.svg",
    "revision": "cf933ab85c92a2945da6ee302ff45142"
  },
  {
    "url": "assets/images/logos/wordpress.png",
    "revision": "df30255421333325af620727c7a8dab5"
  },
  {
    "url": "assets/images/logos/wordpress.svg",
    "revision": "2bea64ac627c43fb73204ed7da803f4c"
  },
  {
    "url": "en.html",
    "revision": "ae9002928be938055b065ba06dd4d2aa"
  },
  {
    "url": "impressum.html",
    "revision": "5911c90a7c856d2851a06549c1be57ed"
  },
  {
    "url": "index.html",
    "revision": "886ae71b81a5fae04d551e79ff467c3f"
  },
  {
    "url": "install-service-worker.html",
    "revision": "07f25cfdf2f183a15b6786169ed765f8"
  }
]);

  self.addEventListener('install', event => {
    const urls = [
      'https://cdn.ampproject.org/v0.js',
      'https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js'
    ];
    const cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(urls)));
  });

  workbox.routing.registerRoute(/(.*)html|(.*)\/$/, workbox.strategies.networkFirst())
  workbox.routing.registerRoute(/\.(?:js|css|png|gif|jpg|webp|svg)$/,
    workbox.strategies.cacheFirst()
  );
  workbox.routing.registerRoute(/(.*)cdn\.ampproject\.org(.*)/,
    workbox.strategies.staleWhileRevalidate()
  );
}
