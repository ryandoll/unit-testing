module.exports = {
  sort: list => {
    let sorted = list.slice(0);
    sorted.sort();
    return sorted;
  },
  reverseSort: list => {
    let sorted = list.slice(0);
    sorted.sort(function(a, b) {
      if (a < b) return 1;
      if (a > b) return -1;
      return 0;
    });
    return sorted;
  }

  // Another test
};
