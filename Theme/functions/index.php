<?php

/**
 ** functions의 모든 wordpress hook 가져오기
 **
 ** @author       Hansanghyeon
 ** @copyright    Hansanghyeon <dandan9509@gmail.com>
 ***/

$fileinfos = new RecursiveIteratorIterator(
  new RecursiveDirectoryIterator(plugin_dir_path(__FILE__)),
  RecursiveIteratorIterator::LEAVES_ONLY,
  RecursiveIteratorIterator::CATCH_GET_CHILD
);


foreach ($fileinfos as $pathname => $fileinfo) {
  if (!$fileinfo->isFile()) continue;
  if (strpos($pathname, '.php') !== false) {
    include_once($pathname);
  }
}
