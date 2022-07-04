import React from 'react';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

/**
 * @param {Object} props
 * @param {Object} props.categoryObject
 * @param {string} props.categoryObject.id
 * @param {Object} props.categoryObject.icon
 * @param {string} props.categoryObject.color
 */
const CategoryIcon = ({ categoryObject }) =>
  categoryObject?.icon ?? (
    <QuestionMarkIcon fontSize="large" sx={{ height: 50, width: 50 }} />
  );
export default CategoryIcon;
