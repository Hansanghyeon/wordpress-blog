<?php

/**
 * 어드민 대쉬보드 설정
 *
 * @package      AdminAwesome
 * @author       Hansanghyeon
 * @copyright    Hansanghyeon <dandan9509@gmail.com>
 **/
define('ADMIN_DIR', str_replace("/var/www/html", "", plugin_dir_path(__FILE__)));

function admin_style()
{
  wp_enqueue_style('WP_list_table', ADMIN_DIR .'style.css');
  wp_enqueue_style('WP_bootstrap_custom', ADMIN_DIR . 'snippet.css');
  wp_enqueue_style('FontAwesome', 'https://use.fontawesome.com/releases/v5.6.3/css/all.css', false);
  wp_enqueue_script('admin-media', ADMIN_DIR . 'index.js', null, null, true);
}
add_action('admin_enqueue_scripts', 'admin_style');
