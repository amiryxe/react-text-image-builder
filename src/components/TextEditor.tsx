import Editor from 'react-simple-wysiwyg'

import { useStore } from '../store'

export default function TextEditor() {
  const text = useStore((store: any) => store.text)
  const updateText = useStore((store: any) => store.updateText)

  function onChange(e: any) {
    updateText(e.target.value)
  }

  return <Editor value={text} onChange={onChange} />
}
