import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import parse from 'html-react-parser'

import { useStore } from '../../store'

export default function Preview() {
  const currentBackground = useStore((store: any) => store.background)
  const text = useStore((store: any) => store.text)

  return currentBackground ? (
    <Card className="mt-8 w-fit">
      <CardContent className="w-fit max-h-[calc(100vh-8rem)] flex relative justify-center items-center">
        <img src={currentBackground} />

        <div className="absolute max-w-[80%] text-right">{parse(text)}</div>
      </CardContent>
    </Card>
  ) : (
    <h1 className="mt-6 border-2 border-dashed p-8">Upload a background to start</h1>
  )
}
