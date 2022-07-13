<?php

add_action( 'graphql_register_types', function() {
  register_graphql_field( 'ContentNode', 'blocks', [
    'type' => 'String',
    'description' => __( 'Link to edit the content', 'your-textdomain' ),
    'resolve' => function( \WPGraphQL\Model\Post $post, $args, $context, $info ) {
      $wPost = get_post($post->ID, null, 'raw');
      return $wPost->post_content;
    }
  ]);
} );