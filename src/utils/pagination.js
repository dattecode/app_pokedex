const pagination = (currentPage, items) => {
  const itemsPerPage = 5;

  const sliceEnd = currentPage * itemsPerPage;
  const sliceStart = sliceEnd - itemsPerPage;
  const itemsInPage = items.slice(sliceStart, sliceEnd);

  const lastPage = Math.ceil(items.length / itemsPerPage);

  const blockInPage = 4;
  const currentBlock = Math.ceil(currentPage / blockInPage);

  const pagesCurrentBlock = [];
  const maxPage = currentBlock * blockInPage;
  const minPage = maxPage - blockInPage + 1;

  for (let i = minPage; i <= maxPage; i++) {
    if (i <= lastPage) {
      pagesCurrentBlock.push(i);
    }
  }

  return {
    itemsInPage,
    lastPage,
    pagesCurrentBlock,
  };
};

export default pagination;
