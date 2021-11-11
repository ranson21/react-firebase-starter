// External Dependencies
import { omitBy, isEmpty } from 'lodash';

/**
 * Method to search an array for a search string
 * @param {array} list -- The input list to search
 */
export const search = (list, options) => {
  // Apply a key-based filter if the list is full of objects
  if (typeof list[0] === 'object') {
    return list.filter(item => item[options.key]?.includes(options.value));
  }

  // Apply a fuzzy string match filter if the list type is strings
  if (typeof list[0] === 'string') {
    return list.filter(item => item.toLowerCase().includes(options.value.toLowerCase()));
  }

  // Handle search object of arrays
  if (typeof list === 'object') {
    return omitBy(
      Object.keys(list).reduce(
        (result, key) => ({
          ...result,
          [key]: list[key]?.filter(item => item[options.key]?.toLowerCase()?.includes(options.value.toLowerCase())),
        }),
        {}
      ),
      isEmpty
    );
  }

  // Default to filter based on item inclusion
  return list.filter(item => item === options.value);
};
