import { getMirror } from "./mirror-xyz/api.js";
import { getArgora } from "./argora-xyz/api.js";
import { getArweaveSaves } from "./arweave-saves/api.js";
import { getPublicDrives } from "./ardrive/api.js";
import { getKoii } from "./koii/api.js";
import { getPianitySongs } from "./pianity/api.js";
import { getUaRuPdf } from "./politics-archive/russo-ukrainian-conflict/pdf-api.js";
import { getUaRuTweets } from "./politics-archive/russo-ukrainian-conflict/tweets-api.js";
import { getUaRuReddit } from "./politics-archive/russo-ukrainian-conflict/reddit-api.js";
import { getUaRuArticles } from "./politics-archive/russo-ukrainian-conflict/articles-api.js";
import {
  getPermacast,
  getTotalPermacastSize,
  getEpisodesOf,
} from "./permacast/api.js";
import { getLensFeed } from "./lens-protocol/api.js";
import { getArtByCity } from "./art-by-city/api.js";
import { getAnsSafeCache } from "./ans/safe-cache-api.js";
import { getPermaTweets } from "./metaweave-xyz/api.js";
import { getPermaPagesImg } from "./permapages/img/api.js";
import { getStamps } from "./permapages/img/stamps/api.js";

export async function getWeaveAggregator(network, option) {
  switch (network) {
    case "mirror-xyz":
      return await getMirror();

    case "argora-xyz":
      return await getArgora();

    case "arweave-saves":
      return await getArweaveSaves(option);

    case "ardrive":
      return await getPublicDrives(option);

    case "koii":
      return await getKoii(option);

    case "permacast":
      return await getPermacast();

    case "permacast-size":
      return await getTotalPermacastSize();

    case "permacast-episode":
      return await getEpisodesOf(option);

    case "pianity":
      return await getPianitySongs();

    case "uaru-pdf":
      return await getUkRuPdf();

    case "uaru-tweets":
      return await getUaRuTweets();

    case "uaru-reddit":
      return await getUaRuReddit();

    case "uaru-articles":
      return await getUaRuArticles();

    case "lens":
      return await getLensFeed();

    case "art-by-city":
      return await getArtByCity();

    case "ans-cache":
      return await getAnsSafeCache();

    case "metaweave-permatweets":
      return await getPermaTweets();

    case "permapages-img":
      return await getPermaPagesImg(option);

    case "permapages-stamps":
      return await getStamps(option);
  }
}
