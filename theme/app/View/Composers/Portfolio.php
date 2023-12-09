<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;
use Carbon\Carbon;

use function App\debug_api;

class Portfolio extends Composer
{

    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'partials.content-portfolio',
        'partials.content-single-portfolio',
        'partials.header-portfolio',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function override()
    {
        return [
            'filterDate' => $this->getDate(),
            'links' => $this->getLink(),
            'f_category' => $this->categories,
            'status' => $this->getStatus(),
        ];
    }

    public function __construct()
    {
        $this->getTaxonomy();
    }

    public function getDate()
    {
        $date = get_post_time('c', true);
        $date = new Carbon($date, 'Asia/Seoul');
        return $date->format('Y년 m월');
    }

    public function getLink()
    {
        $urlTable = get_field('url-table');
        if (!empty($urlTable)) return $urlTable;
    }

    public $categories;
    public function getTaxonomy($termName = 'category')
    {
        $terms = Post::getTaxonomy($termName, function ($term, $termName) {
            $termId = get_post_type() . '_' . $termName . '_' . $term->term_id;
            $term->homepage_url = get_field('homepage_url', $termId);
        });

        $this->categories = $terms;
    }

    public function getStatus()
    {
        return get_post_status(get_the_ID());
    }
}
