import * as React from 'react';
import EditorJS from 'react-editor-js';
import { EDITOR_JS_TOOLS } from '../../../utils/tools';

export function EditBlog() {
  return (
    <EditorJS holder="hackastone" tools={EDITOR_JS_TOOLS}>
      <div id="hackastone" />
    </EditorJS>
  );
}
