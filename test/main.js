const process = require('node:process')
const test = require('ava')
const importFresh = require('import-fresh')

test('main', (t) => {
  t.snapshot(importFresh('../index.js'))
})

test('vscode', (t) => {
  process.env.VSCODE_PORTABLE = '/code'
  t.snapshot(importFresh('../index.js'))
  delete process.env.VSCODE_PORTABLE
})

test('both vscode and atom environment are set', (t) => {
  process.env.VSCODE_PORTABLE = '/code'
  process.env.ATOM_HOME = '/atom'
  t.snapshot(importFresh('../index.js'))
  delete process.env.VSCODE_PORTABLE
  delete process.env.ATOM_HOME
})
