export type PostType = {
  node: {
    id: string;
    title: string;
    slug: string;
  };
};
type WpQueryType = {
  id: string;
  name: string;
  posts: {
    edges: [PostType];
  };
};

export type accPostType = {
  prev: PostType | null;
  next: PostType | null;
};

export type SeriesListType = {
  data: {
    currentPostId: string;
    query: WpQueryType;
  };
};
