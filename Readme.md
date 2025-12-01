# Custom changes

## Building

### Why is "npm run build" modified?

The reason is, we need a special kind of result.
A UMD JS file: diamond_shader.umd.js

So we use vite.config.prod.js

### Why do we have a dev.ts?

We need a globally accessible CrystalCave object.

### Why do we have a fix_script_tag.js?

It's a way to add the styles.css
and we change the script src to be the UMD module.

# WebGi starter project
A template for a vanilla(no ui-framework) project with webgi engine in typescript using parcel bundler.

About webgi: [https://webgi.xyz/](https://webgi.xyz/)

## Running
First install the dependencies:
```bash
npm install
```

To run the project in development mode:
```bash
npm run dev
```
Then navigate to [http://localhost:5173/index.html](http://localhost:5173/index.html) in a web browser to see the default scene in a viewer.

The assets are stored in the `assets` directory.

To build the project for production:
```bash
npm run build
```

## Updates
Check the [webgi manual](https://webgi.xyz/docs/manual/#sdk-links) for the latest version.
To use the different version:
* Update the version number in `package.json` file for both `webgi` and `@types/webgi`.
* Run `npm install` to update the dependencies.
* Run `npm run dev` or `npm run build` to run or build the project.

## Documentation
For the latest version and documentation: [WebGi Docs](https://webgi.xyz/docs/).

## License 
For license and terms of use, see the [SDK License](https://webgi.xyz/docs/license).
