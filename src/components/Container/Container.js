import React from 'react';

// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function SimpleContainer({ children }) {
  return (
    <>
      <Container maxWidth="md">{children}</Container>
    </>
  );
}
