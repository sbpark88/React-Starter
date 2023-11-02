import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Autocomplete, Fab, TextField } from '@mui/material';
import { top100Films } from './Data';
import { Add } from '@mui/icons-material';

function MaterialUiExample1() {
  return (
    <>
      <section>
        <h1>Autocomplete</h1>
        <Autocomplete
          disablePortal
          id='combo-box-demo'
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label='Movie' />}
        />
      </section>
      <section>
        <h1>Fab</h1>
        <Fab color='primary' aria-label='add' style={{}}>
          <Add />
        </Fab>
      </section>
    </>
  );
}

export default MaterialUiExample1;
