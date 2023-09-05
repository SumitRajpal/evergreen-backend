const getPagination = (page, size) => {
      const limit = size ? +size : 10;
      const offset = page ? page * limit : 0;

      return { limit, offset };
};
const getPagingData = (data, page, limit) => {
      const { count: totalElements, rows:content } = data;
      const number = page ? +page : 0;
      const totalPages = Math.ceil(totalElements / limit);
      const last = (number+1 === totalPages)
      return { totalElements, totalPages, number, last,content };
};


module.exports = {
      getPagination,
      getPagingData
}