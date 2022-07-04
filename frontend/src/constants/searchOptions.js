import { CATEGORIES } from './categories';

export const SEARH_OPTION_TYPES = {
  multiSelect: 'multiSelect',
};

export const SEARCH_OPTIONS = [
  {
    id: 'searchString',
    labelKey: 'searchString',
    visible: true,
  },
  {
    id: 'category',
    labelKey: 'category',
    type: SEARH_OPTION_TYPES.multiSelect,
    options: CATEGORIES.map((category) => {
      const { id } = category;
      return {
        value: id,
        labelKey: id,
      };
    }),
  },
  {
    id: 'summary',
    labelKey: 'summary',
  },
];

// export const SEARCH_OPTIONS_DEFAULT_VALUE = SEARCH_OPTIONS.reduce((acc, option) => {
//   const { id, visible } = option;
//   if (!visible) {
//     return acc;
//   }

//   return {
//     ...acc,
//     [id]: '',
//   };
// }, {});

export const SEARCH_OPTIONS_DEFAULT_VALUE = {
  searchString: JSON.stringify({
    visible: true,
    value: '',
  }),
  page: 0,
};
