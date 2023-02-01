const COLUMN_NAMES = ['applicant', 'address', 'cnn', 'locationid'];

const checkColumns = (body) => {
  for (const key in body) {
    if (!COLUMN_NAMES.includes(key.toLowerCase())) {
      return false;
    }
  }
  return true;
};

export {
  checkColumns,
};