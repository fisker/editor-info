const editors = [
  {
    name: 'Visual Studio Code',
    // https://github.com/microsoft/vscode/blob/949f60498aecf6f78f63aa587999589a8f65c3ac/src/vs/code/electron-main/main.ts#L194
    constant: 'VSCODE',
    environmentKey: 'VSCODE_PORTABLE',
  },
]

const info = {
  name: '',
  isEditor: false,
}

for (const {environmentKey, constant: code, name: editorName} of editors) {
  if (Reflect.has(process.env, environmentKey)) {
    info[code] = true
    info.name = editorName
    info.isEditor = true
    break
  }
}

export default info
