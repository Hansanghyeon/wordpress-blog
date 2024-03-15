<?php

namespace App\View\Components;

use Roots\Acorn\View\Component;

class Pagination extends Component
{
    public $pages;
    public $range;
    public $of;
    public $paged;
    public $prevlink;
    public $nextlink;
    public $lastlink;
    public $firstlink;
    public $showitems;
    public $anchor;
    public $startPage;
    public $endPage;

    /**
     * Create the component instance.
     *
     * @param  string  $class
     * @param  string  $type
     * @param  string  $openPopupDetail
     * @return void
     */
    public function __construct($range = 5, $anchor = '')
    {
        $showitems = $range;

        global $paged;
        if (empty($paged)) {
            $paged = 1;
        }

        // showItems를 기준으로 블럭을만든다.
        // showItems가 5라면
        // 1 2 3 4 5, 6 7 8 9 10, 11 12 13 14 15
        // paged가 3이라면 startPage는 1, endPage는 5
        // paged가 7이라면 startPage는 6, endPage는 10
        // paged가 13이라면 startPage는 11, endPage는 15
        $this->startPage = floor(($paged - 1) / $showitems) * $showitems + 1;
        $this->endPage = $this->startPage + $showitems - 1;

        global $wp_query;
        $pages = $wp_query->max_num_pages;
        if (!$pages) {
            $pages = 1;
        }

        if ($pages > 1) {
            $prevlink = $paged > 1 ? get_pagenum_link($paged - 1) : '';
            $nextlink = $paged < $pages ? get_pagenum_link($paged + 1) : '';
            $lastlink = [
                "link" => get_pagenum_link($pages),
                "paged" => $pages
            ];
            $firstlink = [
                "link" => get_pagenum_link(1),
                "paged" => 1
            ];
            $of = $paged + $showitems;

            // 맨마지막 페이지일때 비활성화
            if ($paged == $lastlink['paged']) {
                $nextlink = '';
                $lastlink["link"] = '';
            }

            $this->pages = $pages;
            $this->range = $range;
            $this->of = $of;
            $this->paged = $paged;
            $this->prevlink = $prevlink;
            $this->nextlink = $nextlink;
            $this->lastlink = $lastlink;
            $this->firstlink = $firstlink;
            $this->showitems = $showitems;
            $this->anchor = $anchor;
        }
    }


    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return $this->view('components.pagination');
    }
}
