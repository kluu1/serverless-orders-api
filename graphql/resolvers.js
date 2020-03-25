module.exports.resolvers = {
  Query: {
    getOrders: (_, args) => {
      const Orders = [
        {
          id: '1977',
          amount: 10.00,
          tax: 0.50,
          total: 10.50
        },
        {
          id: '1978',
          amount: 20.00,
          tax: 1.00,
          total: 21.00
        },
        {
          id: '1979',
          amount: 30.00,
          tax: 1.50,
          total: 31.50
        }
      ];

      return Orders;
    }
  }
};