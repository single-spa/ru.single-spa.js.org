---
id: create-single-spa
title: create-single-spa
sidebar_label: create-single-spa
---

Single-spa предлагает утилиту командной строки (CLI) для тех, кто предпочитает автогенерацию и управление конфигурациями webpack, babel, jest и т.д. Использование CLI для работы с single-spa необязательно.

Утилита командной строки называется `create-single-spa` ([ссылка на Github](https://github.com/single-spa/create-single-spa/)). Она в первую очередь предназначена для создания новых проектов, но также может быть полезна для миграции существующих проектов (особенно миграции CRA или проектов без фреймворков).

## Установка и использование

Если вы желаете иметь create-single-spa глобально доступным, запустите следующую команду в терминале:

```sh
npm install --global create-single-spa

# or
yarn global add create-single-spa
```

Затем запустите следующее:

```sh
create-single-spa
```

Альтернативно, вы можете использовать create-single-spa без глобальной установки:

```sh
npm init single-spa

# или
npx create-single-spa

<<<<<<< HEAD
# или
=======
# or
>>>>>>> 6abc5a78c336e192a695861bfa5fb00e78afcbbf
yarn create single-spa
```

Откроется диалоговое окно CLI, спрашивающее вас, какого типа проект вы хотите создать или обновить.

## CLI аргументы

Вы можете передать аргументы в create-single-spa, такие как:

```sh
# Разные пути для получения одного результата
create-single-spa --framework react
npm init single-spa --framework react
npx create-single-spa --framework react
yarn create single-spa --framework react
```

Ниже представлены доступные опции CLI:

### --dir

Вы можете указать, в каком каталоге запустить create-single-spa одним из следующих способов:

```sh
# Два пути для получения одного результата
create-single-spa my-dir
create-single-spa --dir my-dir
```

### --moduleType

Вы можете указать, какой тип микрофронтенда вы создаете с помощью CLI аргумента `--moduleType`:

```sh
create-single-spa --moduleType root-config
create-single-spa --moduleType app-parcel
create-single-spa --moduleType util-module
```

### --framework

Вы можете указать, какой фреймворк вы используете с помощью CLI аргумента `--framework`. Обратите внимание, что если вы укажете фреймворк, то можете опустить `--module Type`, так как предполагается, что это `app-parcel`.

```sh
create-single-spa --framework react
create-single-spa --framework vue
create-single-spa --framework angular
```

### --layout

При создании корневой конфигурации CLI аргумент `--layout ' указывает, что вы хотите использовать [single-spa-layout](/docs/layout-overview) в корневой конфигурации.

## Типы проектов

create-single-spa спрашивает вас, хотите ли вы создать single-spa приложение, служебный модуль или корневую конфигурацию. Все три типа модулей предполагают, что вы используете [рекомендуемую настройку](/docs/recommended-setup).

<<<<<<< HEAD
Если вы выберете, что хотите создать single-spa приложение, вам будет предложено выбрать фреймворк. React создается с предварительно сделанными настройками babel + webpack + jest. Angular создается с Angular CLI и [single-spa-angular](/docs/ecosystem-angular#angular-cli). Vue создается с Vue CLI и [vue-cli-plugin-single-spa](/docs/ecosystem-vue#vue-cli).
=======
If you select that you'd like to create a single-spa application, you will be prompted for which framework you'd like to choose. React is implemented with premade configurations for babel + webpack + jest. Angular is implemented with Angular CLI and [single-spa-angular](/docs/ecosystem-angular). Vue is implemented with Vue CLI and [vue-cli-plugin-single-spa](/docs/ecosystem-vue#vue-cli).
>>>>>>> 6abc5a78c336e192a695861bfa5fb00e78afcbbf

# NPM packages

В репозитории create-single-spa есть несколько пакетов NPM. В следующих разделах описывается каждый из пакетов:

## create-single-spa

[Github project](https://github.com/single-spa/create-single-spa/tree/master/packages/create-single-spa)

Корневой CLI, который вызывает [generator-single-spa](#generator-single-spa).

## generator-single-spa

[Github project](https://github.com/single-spa/create-single-spa/tree/master/packages/generator-single-spa)

[Yeoman generator](https://yeoman.io/) который спрашивает юзера и потом создает файлы. Это в первую очередь вызывается с create-single-spa CLI, но так же может быть [составлено](https://yeoman.io/authoring/composability.html) если вы хотите его настроить.

## webpack-config-single-spa

[Github project](https://github.com/single-spa/create-single-spa/tree/master/packages/webpack-config-single-spa)

Разделяемая, настраиваемая конфигурация webpack, которая используется для служебных модулей и single-spa приложений.

### Установка

```sh
npm install --save-dev webpack-config-single-spa webpack-merge

# или
yarn add --dev webpack-config-single-spa webpack-merge
```

### Использование

```js
const webpackMerge = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    // Имя организации, для которой написано приложение
    orgName: 'name-of-company',
    // Имя текущего проекта. Это обычно совпадает с именем git репозитория.
    projectName: 'name-of-project',
    // Смотреть https://webpack.js.org/guides/environment-variables/#root для объяснения webpackConfigEnv
    webpackConfigEnv,
<<<<<<< HEAD
    // Команды CLI в скрипте package.json, который вызвал эту сборку
    argv,
    // Опционально
    // Будут ли имена пакетов, начинающиеся с @имя-вашей-компании рассматриваться как внешние объекты иои нет. По умолчанию выставлено true
=======
    // The CLI commands in the package.json script that triggered this build
    argv,
    // optional
    // This changes whether package names that start with @your-org-name are
    // treated as webpack externals or not. Defaults to true
>>>>>>> 6abc5a78c336e192a695861bfa5fb00e78afcbbf
    orgPackagesAsExternal: true,

    // optional, defaults to 1
    // This is the rootDirectoryLevel that is passed to https://github.com/joeldenning/systemjs-webpack-interop
    rootDirectoryLevel: 1,
    
    // optional, defaults to false
    // Disable html-webpack-plugin (and standalone-single-spa-webpack-plugin) entirely
    // This is intended for root configs, but can be used in other cases, too
    disableHtmlGeneration: false
  });

  return webpackMerge.smart(defaultConfig, {
<<<<<<< HEAD
    // Если вы хотите модифицировать webpack конфиг, настройки добавлять к этому объекту
  })
}
=======
    // modify the webpack config however you'd like to by adding to this object
  });
};
>>>>>>> 6abc5a78c336e192a695861bfa5fb00e78afcbbf
```

## webpack-config-single-spa-react

[Github project](https://github.com/single-spa/create-single-spa/tree/master/packages/webpack-config-single-spa-react)

Разделяемая, настраиваемая конфигурация webpack которая добавляет react-специфичную конфигурацию к `webpack-config-single-spa`.

### Установка

```sh
npm install --save-dev webpack-config-single-spa-react webpack-merge

# или
yarn add --dev webpack-config-single-spa-react webpack-merge
```

### Использование

```js
const webpackMerge = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    // Имя организации, для которой написано приложение
    orgName: 'name-of-company',
    // Имя текущего проекта. Это обычно совпадает с именем git репозитория.
    projectName: 'name-of-project',
    // Смотреть https://webpack.js.org/guides/environment-variables/#root для объяснения webpackConfigEnv
    webpackConfigEnv,
<<<<<<< HEAD
    // Команды CLI в скрипте package.json, который вызвал эту сборку
    argv,
    // Опционально
    // Будут ли имена пакетов, начинающиеся с @имя-вашей-компании рассматриваться как внешние объекты иои нет. По-умолчанию выставлено true
=======
    // The CLI commands in the package.json script that triggered this build
    argv,
    // optional
    // This changes whether package names that start with @your-org-name are
    // treated as webpack externals or not. Defaults to true
>>>>>>> 6abc5a78c336e192a695861bfa5fb00e78afcbbf
    orgPackagesAsExternal: true,

    // optional, defaults to 1
    // This is the rootDirectoryLevel that is passed to https://github.com/joeldenning/systemjs-webpack-interop
    rootDirectoryLevel: 1,
  });

  return webpackMerge.smart(defaultConfig, {
<<<<<<< HEAD
    // Если вы хотите модифицировать webpack конфиг, настройки добавлять к этому объекту
  })
}
=======
    // modify the webpack config however you'd like to by adding to this object
  });
};
>>>>>>> 6abc5a78c336e192a695861bfa5fb00e78afcbbf
```

## webpack-config-single-spa-ts

[Github project](https://github.com/single-spa/create-single-spa/tree/master/packages/webpack-config-single-spa-ts)

Разделяемая, настраиваемая конфигурация webpack которая добавляет typescript-специфичную конфигурацию к `webpack-config-single-spa`. Обратите внимание, что webpack-config-single-spa-ts имеет peerDependency от `typescript`.

### Установка

```sh
npm install --save-dev webpack-config-single-spa-ts webpack-merge

# or
yarn add --dev webpack-config-single-spa-ts webpack-merge
```

### Использование

```js
const webpackMerge = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-ts');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    // Имя организации, для которой написано приложение
    orgName: 'name-of-company',
    // Имя текущего проекта. Это обычно совпадает с именем git репозитория.
    projectName: 'name-of-project',
    // Смотреть https://webpack.js.org/guides/environment-variables/#root для объяснения webpackConfigEnv
    webpackConfigEnv,
    // Команды CLI в скрипте package.json, который вызвал эту сборку
    argv,
  });

  return webpackMerge.smart(defaultConfig, {
<<<<<<< HEAD
    // Если вы хотите модифицировать webpack конфиг, настройки добавлять к этому объекту
  })
}
=======
    // modify the webpack config however you'd like to by adding to this object
  });
};
>>>>>>> 6abc5a78c336e192a695861bfa5fb00e78afcbbf
```

```js
const singleSpaTs = require('webpack-config-single-spa-ts');

<<<<<<< HEAD
// Алтерьнативно, вы можете модифицировать webpack конфиг напрямую
const myOtherWebpackConfig = {/* ... */}
const finalConfig = singleSpaDefaults.modifyConfig(myOtherWebpackConfig)
=======
// Alternatively, you may modify a webpack config directly
const myOtherWebpackConfig = {
  /* ... */
};
const finalConfig = singleSpaDefaults.modifyConfig(myOtherWebpackConfig);
>>>>>>> 6abc5a78c336e192a695861bfa5fb00e78afcbbf
```

## webpack-config-single-spa-react-ts

[Github project](https://github.com/single-spa/create-single-spa/tree/master/packages/webpack-config-single-spa-react-ts)

Разделяемая, настраиваемая конфигурация webpack которая создает webpack конфиг, работающий с react и typescript. Обратите внимание, что webpack-config-single-spa-react-ts просто мержит конфиг из webpack-config-single-spa-react с webpack-config-single-spa-ts.

### Установка

```sh
npm install --save-dev webpack-config-single-spa-react-ts webpack-merge

# or
yarn add --dev webpack-config-single-spa-react-ts webpack-merge
```

### Использование

```js
const webpackMerge = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    // Имя организации, для которой написано приложение
    orgName: 'name-of-company',

<<<<<<< HEAD
    // Имя текущего проекта. Это обычно совпадает с именем git репозитория.
    projectName: 'name-of-project',

    // Смотреть https://webpack.js.org/guides/environment-variables/#root для объяснения webpackConfigEnv
    webpackConfigEnv,

    // Опционально
    // Будут ли имена пакетов, начинающиеся с @имя-вашей-компании рассматриваться как внешние объекты иои нет. По-умолчанию выставлено true
    orgPackagesAsExternal: true,

    // Команды CLI в скрипте package.json, который вызвал эту сборку
=======
    // The name of the current project. This usually matches the git repo's name
    projectName: 'name-of-project',

    // optional
    // This changes whether package names that start with @your-org-name are
    // treated as webpack externals or not. Defaults to true
    orgPackagesAsExternal: true,

    // See https://webpack.js.org/guides/environment-variables/#root for explanation of webpackConfigEnv
    webpackConfigEnv,

    // optional
    // This changes whether package names that start with @your-org-name are
    // treated as webpack externals or not. Defaults to true
    orgPackagesAsExternal: true,

    // The CLI commands in the package.json script that triggered this build
>>>>>>> 6abc5a78c336e192a695861bfa5fb00e78afcbbf
    argv,

    // optional, defaults to 1
    // This is the rootDirectoryLevel that is passed to https://github.com/joeldenning/systemjs-webpack-interop
    rootDirectoryLevel: 1

    // optional, defaults to false.
    // When true, this removes html-webpack-plugin and standalone-single-spa-webpack-plugin
    disableHtmlGeneration: false
  })

  return webpackMerge.smart(defaultConfig, {
    // Если вы хотите модифицировать webpack конфиг, настройки добавлять к этому объекту
  })
}
```

## single-spa-web-server-utils

Пакет `single-spa-web-server-utils` представляет собой набор функций, которые помогают при реализации веб-сервера для index.html файла. Этот пакет можно использовать для встроенного import maps в HTML, что помогает повысить производительность вашего приложения. Кроме того, он может быть использован для изменения import map браузера так, что он подходит для использования в NodeJS для динамической загрузки модулей и серверного рендеринга ([Динамическая загрузка модулей](/docs/ssr-overview#a-module-loading) и [Серверный рендеринг](https://single-spa.js.org/docs/ssr-overview#intro-to-ssr))).

Утилиты веб-сервера периодически запрашивают import map из URL и генерируют `browserImportMap` и `nodeImportMap` из ответа.

### Установка

```sh
npm install --save single-spa-web-server-utils

# или
yarn add single-spa-web-server-utils
```

### getImportMaps

Функция `getImportMaps` принимает в параметр объект и возвращает промис, который завершается объектом с двумя import maps: `browserImportMap` и `nodeImportMap`.

```js
const { getImportMaps } = require('single-spa-web-server-utils');
const http = require('http');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const htmlTemplate = ejs.compile(
  fs.readFileSync(path.resolve(process.cwd(), 'views/index.html'), 'utf-8'),
);

http.createServer((req, res) => {
  getImportMaps({
    // Обязательно
    // URL на котором расположен сервер
    url: 'https://my-cdn.com/live.importmap',

    // Опционально - по-умолчанию 30000
    // Задержка опроса сервером import map в миллисекундах
    pollInterval: 30000,

    // Опционально - по-умолчанию false
    // Следует ли разрешить import-map-overrides с помощью файлов cookie, отправленных в запросе.
    // Больше деталей о переопределении с cookie здесь:
    // https://github.com/joeldenning/import-map-overrides/blob/master/docs/api.md#node
    allowOverrides: true,

    // Опционально - необходимо только тогда, когда allowOverrides true
    // Входящее сообщение от http-сервера. Используется, чтобы собрать cookies для import-map-overrides
    req,

    // Опционально
    // Это позволяет удалить записи из загруженной import map из возвращенной "nodeImportMap".
    // Это полезно для настройки import map, используемой в браузере,
    // чтобы ее можно было использовать для динамической загрузки модуля NodeJS.
    // Каждый ключ представляет собой заданную строку импорта.
    // Ключи, для которых вы возвращаете `true`, сохраняются в nodeImportMap.
    nodeKeyFilter(key) {
      return true;
    },
  }).then(({ browserImportMap, nodeImportMap }) => {
    console.log(browserImportMap, nodeImportMap);

<<<<<<< HEAD
    // Пример того, как встроить import map браузера
    const htmlWithInlinedImportMap = htmlTemplate({importMap: browserImportMap});
=======
    // Example of how to inline a browser import map
    const htmlWithInlinedImportMap = htmlTemplate({
      importMap: browserImportMap,
    });
>>>>>>> 6abc5a78c336e192a695861bfa5fb00e78afcbbf
    res.setResponseHeader('Content-Type', 'text/html');
    res.status(200).send(htmlWithInlinedImportMap);

    // Пример того, как применить NodeJS import map
    // Больше информации тут: https://github.com/node-loader/node-loader-import-maps
    global.nodeLoader.setImportMapPromise(Promise.resolve(nodeImportMap));
    import('module-in-import-map');
  });
});
```

## Customizing Webpack

The create-single-spa CLI internally uses [webpack-merge](https://github.com/survivejs/webpack-merge) to merge together webpack configs. Additionally, the CLI generates a `webpack.config.js` file in each project where you can customize the webpack config further via `webpack-merge`.

### Merging rules

When merging [webpack rules](https://webpack.js.org/configuration/module/#modulerules), use webpack-merge's [`mergeWithRules`](https://github.com/survivejs/webpack-merge#mergewithrules) function to avoid duplicate rules.

[Example](https://github.com/react-microfrontends/styleguide/blob/504c8516e30274fc0e3221a719d5355b14af9500/webpack.config.js#L11)

### Loaders

`webpack-config-single-spa` and its variants often depend on webpack [loaders](https://webpack.js.org/loaders/#root). Because webpack loaders are loaded via file path, it's possible to accidentally have duplicate copies of the same loader, if the same loader is also installed in both webpack-config-single-spa and in your project. This can result in errors.

To avoid duplicate copies of loaders, first check whether it is already installed by wepback-config-single-spa before adding it to your own project ([see package.json](https://unpkg.com/webpack-config-single-spa@2.0.0/package.json)). If the loader is listed there, then **do not install it into your project, too**. If you already have the loader installed in your project, uninstall it.

When referencing a loader that is installed as a dependency of webpack-config-single-spa, use [require.resolve](https://nodejs.org/api/modules.html#modules_require_resolve_request_options) to ensure the loader is imported from the correct path:

```js
const { mergeWithRules } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa');

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "react-mf",
    projectName: "styleguide",
    webpackConfigEnv,
  });
  
  return mergeWithRules({
    module: {
      rules: {
        test: "match",
        use: "replace",
      },
    },
  })(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            // Use require.resolve to ensure the correct loader is used
            require.resolve("style-loader", {
              paths: [require.resolve("webpack-config-single-spa")],
            }),
            require.resolve("css-loader", {
              paths: [require.resolve("webpack-config-single-spa")],
            }),
            "postcss-loader",
          ],
        },
      ],
    },
  })
}
```
