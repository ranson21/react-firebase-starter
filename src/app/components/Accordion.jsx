// External Dependencies
import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Divider } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

// Create the section accordion stlyes
export const useStyles = makeStyles(theme => ({
  accordion: {
    backgroundColor: theme.palette.background.light,
  },
}));

/**
 * Seciton Accordion component renders a collapsable form section
 * @param {Object} props -- Contains the section name and children
 */
export const SectionAccordion = ({ label, children, ariaLabel, overrideClasses, ...props }) => {
  // Create the JSS Styles
  const classes = useStyles();

  // Setup the open state for each accordion
  const [open, setOpen] = useState(props.defaultExpanded);

  return (
    <Accordion classes={{ expanded: overrideClasses?.expanded, root: overrideClasses?.accordion || classes.accordion }} {...props}>
      <AccordionSummary
        classes={{
          root: overrideClasses?.summary,
          content: overrideClasses?.content,
          expanded: overrideClasses?.expanded,
        }}
        expandIcon={<ExpandMore />}
        aria-controls={`${ariaLabel || label}-content`}
        onClick={() => setOpen(!open)}
      >
        <Typography classes={{ root: overrideClasses?.typography }}>{label}</Typography>
      </AccordionSummary>
      <Divider />
      {open && <AccordionDetails classes={{ root: overrideClasses?.details }}>{children}</AccordionDetails>}
    </Accordion>
  );
};
