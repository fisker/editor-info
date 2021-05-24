const test = require('ava')
const importFresh = require('import-fresh')

test('main', (t) => {
  t.snapshot(importFresh('../index.js'))
})

test('vscode', (t) => {
  process.env.VSCODE_PORTABLE = ''
  t.snapshot(importFresh('../index.js'))
  delete process.env.VSCODE_PORTABLE
})
