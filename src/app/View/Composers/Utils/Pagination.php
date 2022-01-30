<?php

namespace WP\Archive\UI;

use function Roots\view;

class Pagination
{
    public function render($range = 2)
    {
        $showitems = ($range * 2) + 1;

        global $paged;
        if (empty($paged)) {
            $paged = 1;
        }

        global $wp_query;
        $pages = $wp_query->max_num_pages;
        if (!$pages) {
            $pages = 1;
        }

        if ($pages > 1) {
            $prevlink = $paged > 1 && $showitems < $pages ? get_pagenum_link($paged - 1) : '';
            $nextlink = $paged < $pages && $showitems < $pages ? get_pagenum_link($paged + 1) : '';
            $lastlink = get_pagenum_link($pages);
            $of = $paged + $showitems;

            return view('partials.pagination', [
                'pages' => $pages,
                'range' => $range,
                'of' => $of,
                'paged' => $paged,
                'prevlink' => $prevlink,
                'nextlink' => $nextlink,
                'lastlink' => $lastlink,
                'showitems' => $showitems,
            ]);
        }
    }
}
