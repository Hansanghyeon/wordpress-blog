<?php
function themeslug_enqueue()
{
  // style
  wp_enqueue_style('Font: FontAwesome         ', 'https://use.fontawesome.com/releases/v5.6.3/css/all.css', array(), null, false);
  wp_enqueue_style('Font: D2coding            ', 'https://cdn.jsdelivr.net/gh/joungkyun/font-d2coding/d2coding.css', array(), null, false);
  wp_enqueue_style('Font: Google Fonts        ', 'https://fonts.googleapis.com/css?family=Nanum+Gothic&Noto+Sans+KR&display=swap', array(), null, false);
  wp_enqueue_style('Font: Fira Fonts          ', 'https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.207/distr/fira_code.css', array(), null, false);
  wp_enqueue_style('Font: Bootstrap           ', 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css', array(), null, false);
  // script
  wp_enqueue_script('JS : Bootstrap 1         ', 'https://code.jquery.com/jquery-3.4.1.slim.min.js', array(), null, false);
  wp_enqueue_script('JS : Bootstrap 2         ', 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js', array(), null, false);
  wp_enqueue_script('JS : Bootstrap 3         ', 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js', array(), null, false);
}
add_action('wp_enqueue_scripts', 'themeslug_enqueue');
