import Preview from './components/Preview'
import Upload from './components/Upload'
import Grid from '@mui/material/Grid2'

import './App.css'

function App() {
  return (
    <div className="container mx-auto py-8">
      <Grid container spacing={2}>
        <Grid size={8}>
          <Preview />
        </Grid>

        <Grid size={4}>
          <Upload />
        </Grid>
      </Grid>
    </div>
  )
}

export default App
