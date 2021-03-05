<?php

/**
 * comment
 *
 * @author       Hansanghyeon
 * @copyright    Hansanghyeon <999@hyeon.pro>
 **/

add_filter('mkaz_code_syntax_language_list', function () {
  return  array(
    "bash" => "Bash / Shell",
    "html" => "HTML",
    "javascript" => "JavaScript",
    "json" => "JSON",
    "php" => "PHP",
    "jsx " => "React JSX ",
    "sass" => "Sass",
    "typescript" => "typescript",
    "vim" => "vim",
  );
});
