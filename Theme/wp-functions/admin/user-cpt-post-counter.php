<?php

/**
 * Add Event Column
 *
 * @author       Hansanghyeon
 * @copyright    Hansanghyeon <999@hyeon.pro>
 **/

function users_events_column($cols)
{
    $cols['user_dev'] = '개발자의 하루';
    $cols['user_blog'] = '블로거의 하루';
    unset($cols['posts']);
    return $cols;
}

/*
 * Print Event Column Value
 */
function user_event_column_value($value, $column_name, $id)
{
    if ($column_name == 'user_dev') {
        global $wpdb;
        $count = (int) $wpdb->get_var($wpdb->prepare(
            "SELECT COUNT(ID) FROM $wpdb->posts WHERE 
       post_type = 'dev' AND post_status = 'publish' AND post_author = %d",
            $id
        ));
        return $count;
    } elseif ($column_name == 'user_blog') {
        global $wpdb;
        $count = (int) $wpdb->get_var($wpdb->prepare(
            "SELECT COUNT(ID) FROM $wpdb->posts WHERE 
       post_type = 'blog' AND post_status = 'publish' AND post_author = %d",
            $id
        ));
        return $count;
    }
}




add_filter('manage_users_custom_column', 'user_event_column_value', 10, 3);
add_filter('manage_users_columns', 'users_events_column');
