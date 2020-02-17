export const defaults = {
  notes: []
};
export const typeDefs = [
  `
    extend schema {
        query: Query
        mutation: Mutation
    }
    extend type Query {
        notes: [Note]!
        note(id: Int!): Note
    }
    type Mutation{
        createNote(title: String!, content: String!): Note
        editNote(id: String!, title: String!, content:String!) : Note
    }
    type Note{
        id: Int!
        title: String!
        content: String!
    }
    `
];
export const resolvers = {
  Query: {
    notes: () => []
  }
};
