<a id="top"></a>
# Laravel Symbolic Links

This package allows the creation of symbolic links (files and folders) during the laravel-mix bundling.

The parameters to the function paths accept both windows & unix-style paths, relative and absolute paths as well as UNC network paths.

## Usage

1. Install the package with npm or yarn:
```js
npm install laravel-mix-symbolic-links --save-dev

yarn add laravel-mix-symbolic-links --dev
```

2. Require the extension in your Mix configuration:
 ```js
const mix = require('laravel-mix');
require('laravel-mix-symbolic-links');
```

3. Create symbolic link folders using the createSymbolicFolder method
 ```js
mix.createSymbolicFolder(path, target)
mix.createSymbolicFolder("dist/data", "src/data")
mix.createSymbolicFolder("dist/data", "//mnt/d/testdata")
mix.createSymbolicFolder("dist/data", "c:/windows/temp")
```

4. Create symbolic link files using the createSymbolicFile method
 ```js
mix.createSymbolicFolder(path, target)
mix.createSymbolicFolder("dist/data/data.json", "src/data/data.json")
mix.createSymbolicFolder("dist/data/data.json", "//mnt/d/testdata/data.json")
mix.createSymbolicFolder("dist/data/data.json", "c:/windows/temp/data.json")
```