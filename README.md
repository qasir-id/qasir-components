<p align="center">
  <a href="https://www.qasir.id/">
    <img src="https://www.qasir.id/images/revamp-new-img/red.svg" alt="Qasir logo" width="170" height="170">
  </a>
</p>


## Table of contents

- [Quick start](#quick-start)
- [Status](#status)
- [Documentation](#documentation)
- [Copyright and license](#copyright-and-license)


## Quick start

Several quick start options are available:

- [Download the latest release.](https://github.com/QasirID/qasir-components/releases/tag/v1.0.5)
- Clone the repo: `git clone https://github.com/QasirID/qasir-components.git`
- Install with [npm](https://www.npmjs.com/): `npm install qasirc`
- Install with [yarn](https://yarnpkg.com/): `yarn add qasirc`

Read the [Getting started page](http://qasirid.github.io/qasir-components) for information on components, ui kit and more.

## Status
[![Build Status](https://travis-ci.org/QasirID/qasir-components.svg?branch=master)](https://travis-ci.org/QasirID/qasir-components)
[![Coverage Status](https://coveralls.io/repos/github/couds/react-bulma-components/badge.svg?branch=master)](https://coveralls.io/github/couds/react-bulma-components?branch=master)
[![Release Version](https://img.shields.io/github/release/couds/react-bulma-components.svg)](https://github.com/couds/react-bulma-components)
[![Npm Downloads](https://img.shields.io/npm/dm/react-bulma-components.svg)](https://www.npmjs.com/package/react-bulma-components)

## Documentation

You can find the documentation in http://qasirid.github.io/qasir-components

Each component use styled-component. Thus, you can reduce your css total file size by only including the styles that you will use. To enable this, please configure your [Webpack](https://webpack.github.io/) to handle sass files. You can use the webpack.config.js on the root folder of this repository.

Some components may vary the api/naming convention with the Bulma Docs. Please refer to each stories in the Storybook to see how each component could be used (you can find the source code of the story on the tab `Story` on the bottom panel

The following components were ported:

|Component|Storybook|Bulma docs|
|---|---|---|
|Box|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Box)|[Docs](http://bulma.io/documentation/elements/box/)|
|Breadcrumb|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Breadcrumb)|[Docs](http://bulma.io/documentation/components/breadcrumb/)|
|Button|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Button)|[Docs](http://bulma.io/documentation/elements/button/)|
|Card|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Card)|[Docs](http://bulma.io/documentation/components/card/)|
|Column|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Columns)|[Docs](http://bulma.io/documentation/columns/basics/)|
|Container |[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Container)|[Docs](http://bulma.io/documentation/layout/container/)|
|Content |[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Content)|[Docs](http://bulma.io/documentation/elements/content/)|
|Dropdown |[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Dropdown)|[Docs](http://bulma.io/documentation/components/dropdown/)|
|Footer |[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Footer)|[Docs](http://bulma.io/documentation/layout/footer/)|
|Form |[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Form)|[Docs](http://bulma.io/documentation/form/general/)|
|Heading |Title, Subtitle and heading on Bulma [Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Heading)|[Docs](http://bulma.io/documentation/elements/title/)|
|Hero|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Hero)|[Docs](http://bulma.io/documentation/layout/hero/)|
|Icon|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Icon)|[Docs](http://bulma.io/documentation/elements/icon/)|
|Image|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Image)|[Docs](http://bulma.io/documentation/elements/image/)|
|Level|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Level)|[Docs](http://bulma.io/documentation/layout/level/)|
|List|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=List)|[Docs](https://bulma.io/documentation/components/list/)|
|Loader|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Loader)| -- |
|Media|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Media)|[Docs](http://bulma.io/documentation/layout/media-object/)|
|Message|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Message)|[Docs](http://bulma.io/documentation/components/message/)|
|Menu|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Menu)|[Docs](http://bulma.io/documentation/components/menu/)|
|Modal|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Modal)|[Docs](http://bulma.io/documentation/components/modal/)|
|Navbar|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Navbar)|[Docs](https://bulma.io/documentation/components/navbar/)|
|Notification|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Notification)|[Docs](http://bulma.io/documentation/elements/notification/)|
|Pagination|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Pagination)|[Docs](https://bulma.io/documentation/components/pagination/)|
|Panel|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Panel)|[Docs](https://bulma.io/documentation/components/panel/)
|Progress|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Progress)|[Docs](http://bulma.io/documentation/elements/progress/)
|Section|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Section)|[Docs](http://bulma.io/documentation/layout/section/)
|Tabs|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Tabs)|[Docs](https://bulma.io/documentation/components/tabs/)
|Table|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Table)|[Docs](http://bulma.io/documentation/elements/table/)
|Tag|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Tag)|[Docs](http://bulma.io/documentation/elements/tag/)
|Tile|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Tile)|[Docs](http://bulma.io/documentation/layout/tiles/)


## Copyright and license

Code and documentation copyright 2019 the [Qasir Authors](https://github.com/QasirID/qasir-components/graphs/contributors) and [Qasir.id](https://www.qasir.id) Code released under the [MIT License](https://github.com/QasirID/qasir-components/blob/develop/LICENSE). Docs released under [Creative Commons](https://creativecommons.org/licenses/by/3.0/).
