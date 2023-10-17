# is-stricly-object

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]
[![Package Size][bundlephobia-img]][bundlephobia-url]

> Checks if a value is strictly an object, not array, null or also not a Date object

## Install

```bash
npm install is-stricly-object
```

## Usage

```ts
import { value isStrictlyObject } from 'is-stricly-object';

console.log(isStrictlyObject('bob!'));
// false

console.log(isStrictlyObject([1, '2']));
// false

console.log(isStrictlyObject(null));
// false

console.log(isStrictlyObject(new Date()));
// false

console.log(isStrictlyObject({ who: 'mom' }));
// true
```

## API

### isStrictlyObject(value)

#### value

Type: `any`

[build-img]: https://github.com/emekaorji/is-stricly-object/actions/workflows/release.yml/badge.svg
[build-url]: https://github.com/emekaorji/is-stricly-object/actions/workflows/release.yml
[downloads-img]: https://img.shields.io/npm/dt/is-stricly-object
[downloads-url]: https://www.npmtrends.com/is-stricly-object
[npm-img]: https://img.shields.io/npm/v/is-stricly-object
[npm-url]: https://www.npmjs.com/package/is-stricly-object
[issues-img]: https://img.shields.io/github/issues/emekaorji/is-stricly-object
[issues-url]: https://github.com/emekaorji/is-stricly-object/issues
[semantic-release-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
[bundlephobia-img]: https://flat.badgen.net/bundlephobia/minzip/is-stricly-object
[bundlephobia-url]: https://bundlephobia.com/package/is-stricly-object
