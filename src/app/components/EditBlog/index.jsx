import * as React from 'react'
import EditorJS from 'react-editor-js'
import { EDITOR_JS_TOOLS } from '../../../utils/tools'
import styled from 'styled-components/macro'

export function EditBlog() {
  return (
    <Editor holder="hackastone" tools={EDITOR_JS_TOOLS}>
      <div id="hackastone" />
    </Editor>
  )
}

const Editor = styled(EditorJS)`
  background-color: blue;
`
