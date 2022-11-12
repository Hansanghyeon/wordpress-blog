import React from "react";
import Link from "next/link";
import type { Post, Dev } from "~web/client";
import Url from 'url-parse'
import styles from "./Posts.module.scss";
import Heading, { HeadingProps } from "./Heading";

function Post({ post, postTitleLevel, readMoreText }) {
  const url = new Url(post.uri);
  return <div
    className={styles.single}
    key={post.id ?? ""}
    id={`post-${post.id}`}
  >
    <div>
      <Heading level={postTitleLevel} className={styles.title}>
        <Link href={`${url.pathname}`}>
          {post.title()}
        </Link>
      </Heading>
      <div
        className={styles.excerpt}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: post.excerpt() ?? "" }}
      />
      <Link href={`${url.pathname}`} aria-label={`Read more about ${post.title || "the post"}`}>
        {readMoreText}
      </Link>
    </div>
  </div>
}

interface Props {
  posts: Post[] | Dev[] | undefined;
  intro?: string;
  id?: string;
  heading?: string;
  headingLevel?: HeadingProps["level"];
  postTitleLevel?: HeadingProps["level"];
  readMoreText?: string;
}

function Posts({
  posts,
  intro,
  heading,
  id,
  headingLevel = "h1",
  postTitleLevel = "h2",
  readMoreText = "Read more",
}: Props): JSX.Element {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <section className={styles["posts-block"]} {...(id && { id })}>
      <div className="wrap">
        {heading && (
          <Heading level={headingLevel} className={styles.heading}>
            {heading}
          </Heading>
        )}
        {intro && <p className={styles.intro}>{intro}</p>}
        <div className="posts">
          {posts.map((post) => <Post post={post} postTitleLevel={postTitleLevel} readMoreText={readMoreText} />)}
          {posts && posts?.length < 1 && <p>No posts found.</p>}
        </div>
      </div>
    </section>
  );
}

export default Posts;
