if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,d)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let b={};const r=e=>a(e,i),f={module:{uri:i},exports:b,require:r};s[i]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(d(...e),b)))}}define(["./workbox-91fa23da"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/ FabricioLuisdeSousaSantos.html-9ee7384a.js",revision:"c314ead284b261725ff77372296116a1"},{url:"assets/ FabricioLuisdeSousaSantos.html-e124d9fc.js",revision:"178726d70703ab454719411f2077d642"},{url:"assets/ GabrielCoffee9.html-86bd8a31.js",revision:"348908a9f1bf8c76ab1fe59363e69612"},{url:"assets/ GabrielCoffee9.html-bbe70f12.js",revision:"12b882092304e9fa0f42fd6bf7083c74"},{url:"assets/00_links_uteis.html-16aa35ae.js",revision:"26b432d0bf715375aff9fdc40c2925f5"},{url:"assets/00_links_uteis.html-1997afea.js",revision:"131d7a23fb6d43941a1fb799194bba75"},{url:"assets/01_padroes_criacao.html-2dafb2fe.js",revision:"6887a776323d92a8b96ee5397441242b"},{url:"assets/01_padroes_criacao.html-34de56da.js",revision:"112dcd155d80a50cd93da8941c3c80cf"},{url:"assets/01_revisao_poo.html-87c0de29.js",revision:"e1e48b527a060217daadd8d3b66352f7"},{url:"assets/01_revisao_poo.html-e128dd7d.js",revision:"559909761a5123264577601dc4f3dc65"},{url:"assets/02_padroes_estruturais.html-30b64f9a.js",revision:"94667eb5680b9a44949e6883953ebb52"},{url:"assets/02_padroes_estruturais.html-39cc5fda.js",revision:"d9273072a65be61a0a93f7661f0b7271"},{url:"assets/02_revisao_poo2.html-bae69724.js",revision:"6342cabf9a508e737475125cf1d84a9c"},{url:"assets/02_revisao_poo2.html-c6beeb32.js",revision:"7bcd4132a2972b4a0d54e11575081946"},{url:"assets/03_framework.html-6b5a880e.js",revision:"b7fe9ee766c3cf71606e79738fc3c792"},{url:"assets/03_framework.html-feac15be.js",revision:"312ea34a49ad63ec67d6513b40758b6e"},{url:"assets/03_SOLID.html-10fad6dd.js",revision:"cc6d77ba756b3c2d98faf9676370aa6e"},{url:"assets/03_SOLID.html-cd111ae5.js",revision:"896a74e39e8bf0622d03609930806d73"},{url:"assets/04_Strategy.html-2840fc4b.js",revision:"db2bb5c53b4a0c69cdefe3aeeee7768c"},{url:"assets/04_Strategy.html-527362a7.js",revision:"7157cfafed9552086038aa1fb710c266"},{url:"assets/05_Builder.html-0aa06ded.js",revision:"bd2a752fb26928500c969c2395ab0835"},{url:"assets/05_Builder.html-c09a8a03.js",revision:"8a2f216e2c1f270aba8605f218066db1"},{url:"assets/06_Abstract_Factory.html-22edb73f.js",revision:"0accb2da578b794225e34f316e82159b"},{url:"assets/06_Abstract_Factory.html-9cc89dea.js",revision:"ea66e9eb9a5368dd98862a7312fb652c"},{url:"assets/07_ObjectPool.html-323cac22.js",revision:"5b2598a2dcd7182ee118c0c6b175196e"},{url:"assets/07_ObjectPool.html-dcade606.js",revision:"eeb8d4ab395fa5ca8060331e4ff0cec7"},{url:"assets/404.html-5dd27ae1.js",revision:"c72f1e16109eb03e2b2a0c828a3d1ba6"},{url:"assets/404.html-701a4f86.js",revision:"c29012dd8e0bc58f19910f31de179676"},{url:"assets/AmandaSerpa.html-33e5f86b.js",revision:"4b6b139aae5b3d64e80aa4ce8ca5dbe6"},{url:"assets/AmandaSerpa.html-abf6a973.js",revision:"7b4a5413f6e41bd68ea4d7b04e6db21a"},{url:"assets/app-1853e655.js",revision:"8b4acf20888093d28d582f5fa85df69c"},{url:"assets/bib.html-3dd75e30.js",revision:"206a3359a85ec7c4bddd48bfb8a2762c"},{url:"assets/bib.html-8b9c5946.js",revision:"a10120edebc465a39dd290e255e2b679"},{url:"assets/ementa.html-338da457.js",revision:"6357fd3a234d20a0c998ce984121f895"},{url:"assets/ementa.html-d4d941c0.js",revision:"83f52345f9a6673f35e3053c2819f78f"},{url:"assets/Factory Method.html-0cd0eeb8.js",revision:"6cecc2ce5f49af6a7de93922f58ace75"},{url:"assets/Factory Method.html-8cf20cbb.js",revision:"a9f82124887f654e173273c7f61f986f"},{url:"assets/highlight.esm-75b11b9d.js",revision:"5d33e8aa724e0f03a23564f7c03bc7f5"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-01aebe89.js",revision:"ebdeb4e73f9c5f51229c1713d239aa46"},{url:"assets/index.html-08f9372b.js",revision:"ccec4f4187403ef099ab07ceeb8d3baa"},{url:"assets/index.html-0d6288ca.js",revision:"ccec4f4187403ef099ab07ceeb8d3baa"},{url:"assets/index.html-0e7e2b7d.js",revision:"ccec4f4187403ef099ab07ceeb8d3baa"},{url:"assets/index.html-10a8c880.js",revision:"d9c0df5e8f28a19e54047ed7ea7f8a72"},{url:"assets/index.html-13bdc937.js",revision:"f2b4c47f4919d64416cb773dd85a2db0"},{url:"assets/index.html-14f35a07.js",revision:"4313a5a0748e26c7d697e1baeeb213e8"},{url:"assets/index.html-185493e9.js",revision:"1f84defbe30de260e75f11973696ec4d"},{url:"assets/index.html-1b72f8eb.js",revision:"ccec4f4187403ef099ab07ceeb8d3baa"},{url:"assets/index.html-1d36f331.js",revision:"b6d9105f7e7449be5caddcbdae1cf551"},{url:"assets/index.html-1e1f2f0d.js",revision:"c7d9792b95be3fd6f04c2598ec9d1742"},{url:"assets/index.html-23c41ed4.js",revision:"f43f7fd9da59f4b4ec98f007092bebac"},{url:"assets/index.html-27705aee.js",revision:"af673943bfc8eccb43dca4e6e2bbd354"},{url:"assets/index.html-2b710704.js",revision:"d7e8a65b141e5aacad7dc075760facaf"},{url:"assets/index.html-2d38061d.js",revision:"22d66a02a83a1506b763d1e73bd00b46"},{url:"assets/index.html-3009ba20.js",revision:"a62f4532ecc3693c92fdc8225bcfd876"},{url:"assets/index.html-3053c552.js",revision:"ccec4f4187403ef099ab07ceeb8d3baa"},{url:"assets/index.html-3251ff02.js",revision:"ccec4f4187403ef099ab07ceeb8d3baa"},{url:"assets/index.html-3b9dad23.js",revision:"d7e8a65b141e5aacad7dc075760facaf"},{url:"assets/index.html-3bbcd64f.js",revision:"ccec4f4187403ef099ab07ceeb8d3baa"},{url:"assets/index.html-45d17e96.js",revision:"93cae2fd877c480f9df6ba221befd737"},{url:"assets/index.html-4b73d0c1.js",revision:"ccec4f4187403ef099ab07ceeb8d3baa"},{url:"assets/index.html-4d502427.js",revision:"0782b471e5a96ad4dd27420d35a57c35"},{url:"assets/index.html-52544ed1.js",revision:"ccec4f4187403ef099ab07ceeb8d3baa"},{url:"assets/index.html-529e18a7.js",revision:"d7e8a65b141e5aacad7dc075760facaf"},{url:"assets/index.html-5445eaf8.js",revision:"e31bf8cbd362c77354d82560a3d3a1c8"},{url:"assets/index.html-556d28f9.js",revision:"eace697667537a8ed6e38b7a60ad736f"},{url:"assets/index.html-5689b013.js",revision:"e04c79a080e060679bad0efb0a00dfac"},{url:"assets/index.html-5e9223b4.js",revision:"ccec4f4187403ef099ab07ceeb8d3baa"},{url:"assets/index.html-65b916ab.js",revision:"d7e8a65b141e5aacad7dc075760facaf"},{url:"assets/index.html-65ba4bc2.js",revision:"475a9480b557837a87767722bc1c49fb"},{url:"assets/index.html-77de6a06.js",revision:"9571c16a0b6a6313da4e97e49054481f"},{url:"assets/index.html-7a887caf.js",revision:"ccec4f4187403ef099ab07ceeb8d3baa"},{url:"assets/index.html-7d5fb1a3.js",revision:"01a5230d4e89595ab80152bb584dc993"},{url:"assets/index.html-86c8c371.js",revision:"ccec4f4187403ef099ab07ceeb8d3baa"},{url:"assets/index.html-89c24816.js",revision:"ccec4f4187403ef099ab07ceeb8d3baa"},{url:"assets/index.html-8f8788f6.js",revision:"ccec4f4187403ef099ab07ceeb8d3baa"},{url:"assets/index.html-95413ac4.js",revision:"814bdc313fcb551173127bc4cc035dac"},{url:"assets/index.html-95af2aca.js",revision:"4cf0a5f37a030f8cbcbaa735cdc35520"},{url:"assets/index.html-97aa706e.js",revision:"3fc67ec3ce332e1143990e391541811d"},{url:"assets/index.html-a3bd0a75.js",revision:"ccec4f4187403ef099ab07ceeb8d3baa"},{url:"assets/index.html-a482f418.js",revision:"dfff6ea8e5f3db3ff111f6bc77ab6a71"},{url:"assets/index.html-a7629ffe.js",revision:"ccec4f4187403ef099ab07ceeb8d3baa"},{url:"assets/index.html-a7bd51ba.js",revision:"ccec4f4187403ef099ab07ceeb8d3baa"},{url:"assets/index.html-b4b08d78.js",revision:"ccec4f4187403ef099ab07ceeb8d3baa"},{url:"assets/index.html-b4c8d46f.js",revision:"2ec63c5d58b5b6f08aa762384deaea21"},{url:"assets/index.html-bb27d00e.js",revision:"69645bd18a50f5cd7850d078dea83371"},{url:"assets/index.html-c4841642.js",revision:"7bc1d2cb9c1c02feca66aad2bf56cb6a"},{url:"assets/index.html-c48b311e.js",revision:"ccec4f4187403ef099ab07ceeb8d3baa"},{url:"assets/index.html-c5ce0e18.js",revision:"c6b78524e8f7ab3a600bc18b1c1c83b8"},{url:"assets/index.html-c8413db5.js",revision:"ccec4f4187403ef099ab07ceeb8d3baa"},{url:"assets/index.html-d244fad2.js",revision:"ccec4f4187403ef099ab07ceeb8d3baa"},{url:"assets/index.html-d85089ac.js",revision:"bccc319d04da4fd4c3be3d971fc74b38"},{url:"assets/index.html-db711115.js",revision:"d7e8a65b141e5aacad7dc075760facaf"},{url:"assets/index.html-e435daa5.js",revision:"596f61114f460f835e41015c386baefa"},{url:"assets/index.html-e801f333.js",revision:"eee0380b6bee9796cc575b39d770479a"},{url:"assets/index.html-e8b9f714.js",revision:"ccec4f4187403ef099ab07ceeb8d3baa"},{url:"assets/index.html-e9678220.js",revision:"ccec4f4187403ef099ab07ceeb8d3baa"},{url:"assets/index.html-ea215669.js",revision:"ccec4f4187403ef099ab07ceeb8d3baa"},{url:"assets/index.html-ed0a115b.js",revision:"ccec4f4187403ef099ab07ceeb8d3baa"},{url:"assets/index.html-f6f19ca6.js",revision:"ccec4f4187403ef099ab07ceeb8d3baa"},{url:"assets/index.html-fb4c97a0.js",revision:"957f59d1795fa21fc7dc0ac019e42486"},{url:"assets/index.html-fcc130f2.js",revision:"17aaea8a9a61ca1de58454187b52916a"},{url:"assets/index.html-fef2f939.js",revision:"ccec4f4187403ef099ab07ceeb8d3baa"},{url:"assets/intro.html-c585f987.js",revision:"1cf7cb3fbe1934fd847d26f0a6d01480"},{url:"assets/intro.html-f8dd153b.js",revision:"5c55319f0e488176365d478e4fec4c1a"},{url:"assets/league-gothic-38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic-8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/LuisADS8.html-7c903a92.js",revision:"bd5b024ff0de6fb6b30e9acda46b0c78"},{url:"assets/LuisADS8.html-ce0bf021.js",revision:"1e50c936e65b66797d645e962bda2e99"},{url:"assets/markdown.esm-0191f9da.js",revision:"5e8c1ebb5afc5e81804eac9fe00a00c0"},{url:"assets/math.esm-70a288c8.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/NaoGOF.html-d2197db4.js",revision:"6bf45402307da57368dd21723a70ae66"},{url:"assets/NaoGOF.html-dfda1141.js",revision:"dffd77feb7c6f643a37392fd3c73130d"},{url:"assets/notes.esm-a106bb2c.js",revision:"7c95fadebe38cabad55423002748625b"},{url:"assets/photoswipe.esm-2450701e.js",revision:"55b8097e827163367e1bb02833c0acec"},{url:"assets/plugin-vue_export-helper-c27b6911.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/Prototype.html-1cdb3085.js",revision:"f498dc303c893f2cfc10099dbd47b116"},{url:"assets/Prototype.html-35a38c07.js",revision:"61df3645d3583e254416097fbf6ad5e7"},{url:"assets/reveal.esm-ec5549c1.js",revision:"40498a0448b327f408a5db6b67491b8a"},{url:"assets/SarahPithon.html-5c891cc1.js",revision:"eb012f06fc7ec2d1de10a9a63eb95880"},{url:"assets/SarahPithon.html-904fbe26.js",revision:"8f5c59c83932cc7ec729345755a730cd"},{url:"assets/search-0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/search.esm-7e6792e2.js",revision:"f1a5e92b2857fcc2c457f7dd03f762f3"},{url:"assets/Singleton.html-8729aff1.js",revision:"336f80d8ff742712525d7e03afb76d5b"},{url:"assets/Singleton.html-de262d41.js",revision:"71c98dec76cff12e83e959955f912b5e"},{url:"assets/source-sans-pro-italic-05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular-c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/style-a01bfef0.css",revision:"10608653f6fe8209068d887dc8cfae0e"},{url:"assets/TemplateSteps.html-27cbce69.js",revision:"57f26019432fae9fad3cbe16d83a33c3"},{url:"assets/TemplateSteps.html-4c76c0b9.js",revision:"42d51e7c3502b689c42fdbdfbda5f4ca"},{url:"assets/XX_Bridge.html-284fb2dd.js",revision:"93602865e965c1c9f537e14adb9fc95e"},{url:"assets/XX_Bridge.html-4b86c436.js",revision:"a23ab14edcd3bf2c0cf057ff122e4ad8"},{url:"assets/XX_Modelo.html-74b909ae.js",revision:"b1e637e64960e91dba6e67e4205217ae"},{url:"assets/XX_Modelo.html-ece55cc4.js",revision:"d5ba89f8acde89eb2337ad03228e4d60"},{url:"assets/zoom.esm-b83b91d0.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"logo.svg",revision:"d158cad89bd4ee16f84caad47d744e7f"},{url:"index.html",revision:"ddbba43efc7d7219410549279574662e"},{url:"404.html",revision:"e1c1ff3f3cfba7d67d5682c38ee82602"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
