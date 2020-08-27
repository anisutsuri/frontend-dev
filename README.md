<div align="center">
  <img src="https://svgshare.com/i/LTM.svg" alt="Frontend development" width="400">
</div>

<div align="center">
<img src="https://img.shields.io/github/last-commit/anisutsuri/frontend-dev?color=orange&style=flat-square" alt="Last commit">
<img src="https://img.shields.io/github/package-json/v/anisutsuri/frontend-dev?color=orange&style=flat-square" alt="Version">
<img src="https://img.shields.io/github/license/anisutsuri/frontend-dev?color=orange&style=flat-square" alt="License MIT">
</div>

## Content
* [Project Structure](#project-structure)
* [Directory constants](#directory-constants)
* [Initialize page](#initialize-page)
* [Installing fonts for production](#installing-fonts)
* [Contacts](#contacts)

## Project structure <a id="project-structure"></a>
* `src/index.js` - main file for index.html, into which all necessary libraries and the initialization application are imported.
* `src/pages` - folder for HTML files.
* `src/js` - folder custom application scripts.
* `src/assets/scss` - folder custom application SCSS styles.
* `src/assets/css` - folder custom application CSS styles.
* `src/assets/img` - folder for images.
* `src/assets/fonts` - folder for fonts (for development only).
* `static/` - folder with extra static assets that will be copied into output folder.

## Directory constants <a id="directory-constants"></a>
If you are not satisfied with the paths, just change them in `config/paths.js`.
### Default:
``` js
const PATHS = {
  // Path to main application directory
  src: path.join(__dirname, "../src"),
  // Path to output directory
  dist: path.join(__dirname, "../dist"),
  // Path to second output directory (js/css/fonts etc folder)
  assets: "assets/"
};

// HTML files directory path
const PAGES_DIR = `${PATHS.src}/pages`;
```
### Customize:
``` js
const PATHS = {
  // src must be src
  src: path.join(__dirname, '../src'),
  // dist to public
  dist: path.join(__dirname, '../public'),
  // assets to static
  assets: 'static/'
};

// 'src/pages' to 'src'
const PAGES_DIR = PATHS.src;
```

## Initialize page <a id="initialize-page"></a>
To initialize a new HTML page, need:
1. Create executable file by path `src/`, with the prefix `module` (optional).
2. Add an `entry` point with a specific name and path to the executable:
``` js
entry: {
  app: PATHS.src,
  about: `${PATHS.src}/about-module.js`
}
```
3. Initialize the page to `config/webpack.common.js` using `pages.page()`.
4. Create a file with the name that was specified in `entry`. Directly in it, connect the files (js/scss/etc files) necessary for the operation of the HTML page.

## Installing fonts for production <a id="installing-fonts"></a>
To download fonts for production, need to set the parameters in `config/webpack.prod.js`.<br>
Information about the plugin used is [here](https://www.npmjs.com/package/@beyonk/google-fonts-webpack-plugin).

## Contacts <a id="contacts"></a>
If you have suggestions for improvement, write to the vadim27pa@gmail.com email indicating the `frontend-dev` theme.
