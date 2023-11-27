export type RepositoriesDataType = {
  nodes: NodeType[];
};

export type NodeType = {
  id: string;
  name: string;
  forks: {
    totalCount: number;
  };
  stargazers: {
    totalCount: number;
  };
};
