<p align="center">
  <a href="https://decent.land">
    <img src="./src/utils/img/logo25.png" height="124">
  </a>
  <h3 align="center"><code>@decentdotland/weave-aggregator</code></h3>
  <p align="center">🐊 the alligator of the permaweb 🐊</p>
</p>

## Synopsis
The weave-alligator library aggregates data and feeds from the Permaweb, and make the access for it easier. The `weave-aggregator` aggregates especially public feeds from protocols that use Arweave as a storage solution.

The library will be under continious development mode to keep on track with the new & currently unsupported protocols that use Arweave. By aggregating data from different protocols, the `weave-aggregator` allows developers to create a frontend for the "timeline of the Permaweb".

## Install

`npm install weave-aggregator `

### Current Supported Protocols

| protocol name |   directory   | API ID | 
| :-----------: |:-------------:| :-------------: |
| [ArweaveSaves](https://arconnect)  | [arweave-saves](./src/arweave-saves)| `arweave-saves` |
| [Koii Network](https://koi.rocks)             | [koii](./src/koii)        | `koii` |
| [ardrive.io](https://ardrive.io)             |[ardrive](./src/ardrive)     | `ardrive` |
| [permacast.net](https://permacast.net)             | [permacast](./src/permacast)    | `permacast` |
| [argora.xyz](https://argora.xyz)             | [argora-xyz](./src/argora-xyz) | `argora-xyz` |
| [mirror.xyz](https://mirror.xyz)             | [mirror-xyz](./src/mirror-xyz)| `mirror-xyz` |
| [Pianity](https://pianity.com)             | [pianity](./src/pianity)| `pianity` |
| [Lens Protocol](https://lens.dev) | [lens-protocol](./src/lens-protocol) | `lens` |
| [Art By City](https://artby.city) | [art-by-city](./src/art-by-city) | `art-by-city` |
| [ANS](https://ar.page) | [safe-cache-api](./src/ans) | `ans-cache` |
| [Metaweave Permatweets](https://metaweave.xyz) | [metaweave-xyz](./src/metaweave-xyz) | `metaweave-permatweets` |
| [PermaPages IMG](https://img.arweave.dev/) | [permapages/img](./src/permapages/img) | `permapages-img` |
| [PermaPages Stamps](https://permapages.app/) | [permapages/stamps](./src/permapages/stamps) | `permapages-stamps` |


## Usage Example

### get permacast podcasts

```js
import { getWeaveAggregator } from "weave-aggregator";

async function podcasts() {
  const podcastsMetadata = await getWeaveAggregator("permacast");

  return podcastsMetadata;
}

```

### get Koii collectibles

```js
import { getWeaveAggregator } from "weave-aggregator";

const address = "...";

async function nftsOf(address) {
  const collectibles = await getWeaveAggregator("koii", address);

  return collectibles;

```
omiting the `address` parameter returns the recent feed of the requested network. The networks that support per address filtering are: ArweaveSaves, Koii, and Ardrive.


### get Stamps

``` js
import { getWeaveAggregator } from "weave-aggregator";

const address = "...";

async function stamps(address) {
  const stamps = await getWeaveAggregator("permapages-stamps", address);

  return stamps;
}

console.log(await stamps(address))
```

> For ReactJS usage:
>
> Modifying `utils/arweave/arweave.js` no longer required for ReactJS.

# License
This projects is licensed under the [MIT license](./LICENSE)



