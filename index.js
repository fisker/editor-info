const editors = [
  {
    name: 'Visual Studio Code',
    // https://github.com/microsoft/vscode/blob/949f60498aecf6f78f63aa587999589a8f65c3ac/src/vs/code/electron-main/main.ts#L194
    constant: 'VSCODE',
    environmentKey: 'VSCODE_PORTABLE',
  },
]

const {name = '', constant: code} = {
  ...editors.find(({environmentKey}) =>
    Reflect.has(process.env, environmentKey)
  ),
}

const info = {
  name,
  isEditor: Boolean(name),
}

for (const {constant: editorCode} of editors) {
  info[editorCode] = editorCode === code
}

module.exports = info
