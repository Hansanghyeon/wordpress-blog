<?php

/**
 * 단일 포스트 스타일 지정
 *
 * @author       Hansanghyeon
 * @copyright    Hansanghyeon <999@hyeon.pro>
 **/
define('F_DIR', str_replace("/var/www/html", "", plugin_dir_path(__FILE__)));

function content_page()
{
  wp_enqueue_style('content_page', F_DIR . 'style.css');
}
add_action('wp_enqueue_scripts', 'content_page');
