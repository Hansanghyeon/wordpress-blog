<?php

/**
 * functions의 모든 wordpress hook 가져오기
 * 하위 폴더포함 모든 php hook!
 *
 * @author       Hansanghyeon
 * @copyright    Hansanghyeon <999@hyeon.pro>
 **/

// Relevanssi 멀티 검색
add_filter('relevanssi_modify_wp_query', 'rlv_set_orderby');
function rlv_set_orderby($query)
{
    $query->set('orderby', array(
        'relevance' => 'desc',
        'post_date' => 'desc',
    ));
    return $query;
}

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
