import url from 'url'
import path from 'path'
import test from 'ava'
import editor from '../index.js'

test('main', (t) => {
  t.deepEqual(editor, {
    name: '',
    isEditor: false,
  })
})
