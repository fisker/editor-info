const process = require('node:process')

const editors = [
  {
    name: 'Visual Studio Code',
    constant: 'VSCODE',
    environmentKeys: [
      // https://github.com/microsoft/vscode/blob/949f60498aecf6f78f63aa587999589a8f65c3ac/src/vs/code/electron-main/main.ts#L194
      'VSCODE_PORTABLE',
      // https://github.com/microsoft/vscode/blob/b23e791eb5afbd95f05aa24da7693ce89344a079/src/cli.js#L36
      'VSCODE_CLI',
    ],
  },
  {
    name: 'Atom',
    // https://flight-manual.atom.io/using-atom/sections/basic-customization/#custom-home-location-with-an-environment-variable
    constant: 'ATOM',
    environmentKeys: ['ATOM_HOME'],
  },
]

const info = {
  name: '',
  isEditor: false,
}

for (const editor of editors) {
  info[editor.constant] = false
}

const editor = editors.find(({environmentKeys}) =>
  environmentKeys.some((environmentKey) =>
    Reflect.has(process.env, environmentKey),
  ),
)

if (editor) {
  info.name = editor.name
  info.isEditor = true
  info[editor.constant] = true
}

module.exports = info
