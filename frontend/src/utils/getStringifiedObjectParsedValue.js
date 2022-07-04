export const getStringifiedObjectParsedValue = (stringifedObject, defaultValue = {}) => {
  try {
    const parsedValue = JSON.parse(stringifedObject);
    return parsedValue;
  } catch (error) {
    return defaultValue;
  }
};
