import Preview from './components/Preview'
import Upload from './components/Upload'
import Grid from '@mui/material/Grid2'

import './App.css'
import TextEditor from './components/TextEditor'

function App() {
  return (
    <div className="container mx-auto py-8">
      <Grid container spacing={4}>
        <Grid size={6}>
          <Preview />
        </Grid>

        <Grid size={6}>
          <div className="flex flex-col gap-6">
            <Upload />
            <TextEditor />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default App
