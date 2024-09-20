import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import { useStore } from '../../store'

export default function Preview() {
  const currentBackground = useStore((store: any) => store.background)
  console.log(currentBackground)

  return (
    <Card className="mt-8">
      <CardContent>
        <p className="text-red-600">Card</p>
      </CardContent>
    </Card>
  )
}
