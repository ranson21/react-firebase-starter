// External Depedencies
import React from 'react';
import { Button } from '@material-ui/core';

// Component Dependencies
import { EmptyContainer } from 'app/components/shared/EmptyContainer';

/**
 * Error Handling Component Component
 */
export const SomethingWentWrong = props => {
  return (
    <EmptyContainer
      height={550}
      width={750}
      image="img/something-went-wrong.png"
      label={
        <Button variant="contained" color="secondary" onClick={() => window.location.reload()}>
          Reload Page
        </Button>
      }
    />
  );
};
