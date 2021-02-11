import React, { useRef } from 'react'
import EditorJS from 'react-editor-js'
import { EDITOR_JS_TOOLS } from '../../../utils/tools'
import styled from 'styled-components/macro'

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

const Button = styled.a`
  background-color: #4caf50;
  border: none;
  border-radius: 50px;
  color: #efefef;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  position: relative;
  font-size: 1rem;
  margin: 1rem auto;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
`
