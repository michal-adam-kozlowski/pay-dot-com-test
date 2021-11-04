export const posts: Array<Post> = [
    {
        id: "1",
        name: 'Star Wars',
        description: 'Long time ago...',
        users: ["1"]
    },
    {
        id: "2",
        name: 'The Expanse',
        description: 'Jim Holden travels through galaxy...',
        users: ["1", "2"]
    },
    {
        id: "3",
        name: 'Game of Thrones',
        description: 'Winter can last a lifetime...',
        users: ["2"]
    },
  ];

  export type Post = {
      id: string,
      name: string,
      description: string,
      users: Array<string>
  }