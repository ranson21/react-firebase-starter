/**
 * Applies the a11y properties and sets the tab controls per index
 * @param {number} index -- Index of the tab to control
 */
export const a11yProps = index => ({
  id: `wrapped-tab-${index}`,
  'aria-controls': `wrapped-tabpanel-${index}`,
});

/**
 * Method to select the entire value of an input given an event
 * @param {Object} event -- JavaScript Event object containing the input to select
 */
export const selectInputValue = (target, range) => target.setSelectionRange(0, range || target.value.length);

export const formatDate = (dateString, format) => {
  // Convert the date string to a date object
  const date = new Date(dateString);

  // Parse the Date components
  const year = date.getFullYear();
  let day = date.getDate();
  let month = date.getMonth() + 1;

  switch (format) {
    case 'M/D/YYYY':
      return `${month}/${day}/${year}`;
    case 'MM/DD/YYYY':
      // Append 0 to single digit days and months
      month = month < 10 ? `0${month}` : month;
      day = day < 10 ? `0${day}` : day;

      return `${month}/${day}/${year}`;
    default:
      return date.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
  }
};

export const filterDirty = (dirtyFields, values) =>
  Object.keys(dirtyFields).reduce(
    (list, field) => ({
      ...list,
      [dirtyFields[field] && field]: values[field],
    }),
    {}
  );

/**
 * FormatDisplayName -- Converts a user display name to a URL friendly format
 * @param {string} name -- The unformatted user display name
 * @returns {string} -- Display Name lowercased and spaces replaced with `-`
 */
export const formatDisplayName = name => {
  return name.toString().toLowerCase().split(' ').join('-');
};
