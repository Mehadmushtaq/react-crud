const addData = (req, res) => {
  res.end("ADD DATA OF NEW COMPANY");
};

const delData = (req, res) => {
  res.end("DELETE DATA OF A COMPANY");
};
const updateData = (req, res) => {
  res.end("UPDATE DATA OF A COMPANY");
};

module.exports = { addData, delData, updateData };
