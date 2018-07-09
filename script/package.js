const path = require('path')
const packager = require('electron-packager')

const config = require(path.join(__dirname, "..", "package.json"))

const electronVersion = (str) => {
  return str.startsWith ?
    str.substring(1) :
    str
}

const options = {
  appVersion: config.version,
  arch: 'x64',
  asar: true,
  electronVersion: electronVersion(config.devDependencies.electron),
  // icon: path.join(__dirname, "..", "resources", "app.ico"),
  dir: path.join(__dirname, "..", "dist"),
  name: config.name[0].toUpperCase() + config.name.slice(1),
  out: path.join(__dirname, "..", "package"),
  overwrite: true,
  platform: process.platform,
  prune: true,
  win32metadata: {
    FileDescription: config.description,
    OriginalFilename: config.name,
    ProductName: config.name,
    InternalName: config.name
  }
}

packager(options).then((appPaths) => {
  console.log(`packaging successfully finished. written in ${appPaths}`)
}).catch((err) => {
  console.log('Error while packaging', err)
})
