<?php

/**
 * 각 포스트타입 단일 포스트 상세페이지 템플릿 설정
 *
 * @author       Hansanghyeon
 * @copyright    Hansanghyeon <999@hyeon.pro>
 **/

function get_custom_single_template($single_template)
{
  global $post;
  if ('page' === $post->post_type) {
    $single_template = get_stylesheet_directory() . '/template-single/content-page.php';
  } else {
    $single_template = get_stylesheet_directory() . '/template-single/content-single.php';
  }
  return $single_template;
}
add_filter('single_template', 'get_custom_single_template');
