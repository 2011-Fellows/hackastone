import React, { useRef } from 'react'
import EditorJS from 'react-editor-js'
import { EDITOR_JS_TOOLS } from '../../../utils/tools'
import styled from 'styled-components/macro'
import { SaveButton as Button } from './SaveButton'

export function EditBlog() {
  const instanceRef: any = useRef(null)

  async function handleSave() {
    const savedData = await instanceRef.current.save()
    console.log(savedData)
  }
  return (
    <EditorJS
      holder="hackastone"
      tools={EDITOR_JS_TOOLS}
      placeholder="Begin editing here..."
      instanceRef={(instance) => (instanceRef.current = instance)}
    >
      <Div id="hackastone" />
      <Button onClick={() => handleSave()}>Save Post</Button>
    </EditorJS>
  )
}

const Div = styled.div`
  width: 85%;
  background-color: #efefef;
  border: 1px solid #3e3e3e;
  border-radius: 10px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  margin: 6rem auto 2rem;
  position: relative;
`