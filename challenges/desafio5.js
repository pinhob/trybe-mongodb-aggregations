db.movies.aggregate([
  {
    $match: {
      awards: { $in: ["Won 1 Oscar"] },
    },
  },
]);
