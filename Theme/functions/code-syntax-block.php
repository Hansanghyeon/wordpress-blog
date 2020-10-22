<?php

/**
 * 어드민 대쉬보드 설정
 *
 * @package      code-syntax-block-config
 * @author       Hansanghyeon
 * @copyright    Hansanghyeon <dandan9509@gmail.com>
 **/
define('DIR', str_replace("/var/www/html", "", plugin_dir_path(__FILE__)));

add_filter('mkaz_code_syntax_default_lang', function () {
  return 'typescript';
});
add_filter('mkaz_code_syntax_force_loading', '__return_true');
