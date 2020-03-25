const { gql } = require('apollo-server-lambda');

module.exports.typeDefs = gql`
  type Orders {
    id: String
    amount: Float
    tax: Float
    total: Float
  }

  type Query {
    getOrders: [Orders]
  }
`;
