import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import { useStore } from '../../store'

export default function Preview() {
  const currentBackground = useStore((store: any) => store.background)

  return currentBackground ? (
    <Card className="mt-8 w-fit">
      <CardContent className="w-fit max-h-[calc(100vh-8rem)] flex">
        <img src={currentBackground} />
      </CardContent>
    </Card>
  ) : (
    <h1 className="mt-6">Upload a background to start</h1>
  )
}
