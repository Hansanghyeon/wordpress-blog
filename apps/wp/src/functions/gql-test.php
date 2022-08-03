<?php

add_action( 'graphql_register_types', function() {
  register_graphql_field( 'RootQuery', 'allUrls', [
    'type' => [ 'list_of' => 'String' ],
    'description' => __( 'A list of all urls. Helpful for rendering sitemaps', 'your-textdomain' ),
    'resolve' => function() {

      // Start collecting all URLS
      $meta_urls = array( get_home_url() );

                        // Hardcoded array. You would need to fetch the URLs for all Posts
      $all_posts = [ 'site.com/post', 'site.com/post-2' ];

                        // Hardcoded array. You would need to fetch the URLs for all Terms
      $all_terms = [ 'site.com/tag', 'site.com/category' ];

      return array_merge($meta_urls, $all_posts, $all_terms);

    }
  ]  );
});
