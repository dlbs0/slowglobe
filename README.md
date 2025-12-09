# slowglobe

A map and photo based blogging engine. Check out the demo at [slowglobetemplatedemo.pages.dev](https://slowglobetemplatedemo.pages.dev/)

## Requirements

[VSCode](https://code.visualstudio.com/) + Nodejs + npm.

Using Eslint with prettier as formatter.

ffmpeg is required if using the video optimisation tools.
To install this, open a cmd prompt and type 'winget install ffmpeg'

## Project Setup

The engine folder is the backend of this project, and will be cloned as a submodule, but your content lives in the separate `trips` folder.
There are scripts to generate trips. `npm run create-trip` will generate a new trip, just follow the prompts.

### Install and Start

Fork your own copy of this template repo, clone it, and then run the following commands.

```sh
git submodule init
git submodule update

npm install
npm run dev
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Images and Videos

Images are stored in the `images` folder of the relevant trip. They are compressed with vite-imagetools, and on build, two versions are created, the thumbnail and original.

Videos are stored in the `videos` folder of the relevant trip. We need to both compress and create a thumbnail for the video, and vite cannot do this natively, so we use the `encode-video` script to do this.

To use, place videos into the `videos` folder in the trip, and run `npm run encode-video`. It will move the original files to the `source_files` folder (not committed), and create the new files with the prefix `o_` (optimised). If you want to crop the video, you should do that before optimising.

## Updating

When changes are made to the template project, you can integrate them by running `git pull https://github.com/SlowGlobe/slowglobeTemplate.git main` in your fork. You can also update the 'engine' backend code independently, but there is no guarantee of backwards compatibility that way.
