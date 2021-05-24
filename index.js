const editors = [
  {
    name: 'Visual Studio Code',
    // https://github.com/microsoft/vscode/blob/949f60498aecf6f78f63aa587999589a8f65c3ac/src/vs/code/electron-main/main.ts#L194
    constant: 'VSCODE',
    environmentKey: 'VSCODE_PORTABLE',
  },
  {
    name: 'Atom',
    // https://flight-manual.atom.io/using-atom/sections/basic-customization/#custom-home-location-with-an-environment-variable
    constant: 'ATOM',
    environmentKey: 'ATOM_HOME',
  },
]

const info = {
  name: '',
  isEditor: false,
}

for (const editor of editors) {
  info[editor.constant] = false
}

const editor = editors.find(({environmentKey}) =>
  Reflect.has(process.env, environmentKey)
)

if (editor) {
  info.name = editor.name
  info.isEditor = true
  info[editor.constant] = true
}

module.exports = info
