<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class Archive extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'archive-*',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    {
        return [
            'title' => $this->title(),
            'description' => $this->description(),
        ];
    }


    public function title()
    {
        return get_the_archive_title();
    }

    public static function description()
    {
        return category_description();
    }
}
