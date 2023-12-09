<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;
use WP\Archive\UI;

class Homepage extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'home'
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    {
        return [
            'pagination' => (new UI\Pagination())->render(2, '#portfolio'),
            'description' => $this->getDescription(),
        ];
    }

    public function getDescription()
    {
        return do_shortcode('[insert page="5388" display="content"]');
    }
}
