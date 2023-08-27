const agg = [
  {
    $match: {
      product: new ObjectId("64ea370699ed42b504ebb0e0"),
    },
  },
  {
    $group: {
      _id: null,
      averageRating: {
        $avg: "$rating",
      },
      numOfReviews: {
        $sum: 1,
      },
    },
  },
];
