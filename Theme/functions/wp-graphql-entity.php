<?php

/**
 * comment
 *
 * @author       Hansanghyeon
 * @copyright    Hansanghyeon <999@hyeon.pro>
 **/

add_filter('graphql_html_entity_decoding_enabled', function ($enabled, $string, $field_name, $model) {

  if ($model instanceof \WPGraphQL\Model\Post && 'contentRendered' === $field_name) {
    return true;
  }

  return $enabled;
}, 10, 4);
