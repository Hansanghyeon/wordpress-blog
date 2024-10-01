<?php

namespace Honey\WpFn;

/**
 * WordPress의 post excerpt가 없을 경우, post의 본문 내용을 가져와서 출력
 */
function get_the_custom_excerpt($length = 999, $isProps = false)
{
    global $post;
    $text = $post->post_excerpt;
    if (empty($text)) {
        $text = $post->post_content;
        $text = strip_shortcodes($text);
        $text = apply_filters('the_content', $text);
        $text = str_replace(']]>', ']]&gt;', $text);
        if ($isProps) {
            // "를 &quot;로 변경
            $text = str_replace('"', '&quot;', $text);
        }
    }
    $text = strip_tags($text);
    $excerpt_length = $length;
    $words = explode(' ', $text, $excerpt_length + 1);
    if (count($words) > $excerpt_length) :
        array_pop($words);
        array_push($words, '');
        $text = implode(' ', $words);
    endif;
    return $text;
}
