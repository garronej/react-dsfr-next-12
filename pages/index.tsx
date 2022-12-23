
import { Alert } from "@codegouvfr/react-dsfr/Alert";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function Home() {

  return (
    <>
      <Alert
        closable
        description="Everything went well"
        severity="success"
        title="Message successfully sent"
      />
      <Stack spacing={2} sx={{ mt: 5 }} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </>
  );

}