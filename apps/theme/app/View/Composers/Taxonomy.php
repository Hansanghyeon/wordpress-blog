<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class Taxonomy extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'header-taxonomy',
        'taxonomy',
        'taxonomy-*',
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
            'icon' => $this->icon(),
            'description' => $this->description(),
        ];
    }


    public function icon()
    {
        $icon = get_field('icon', get_post_type().'_category_'.get_queried_object_id());
        if (!is_array($icon)) {
            $icon = acf_get_attachment($icon);
        }
        return $icon;
    }

    public function title()
    {
        return !empty($title = get_the_archive_title()) ? $title : '';
    }

    public function description()
    {
        return !empty($desc = get_the_archive_description()) ? $desc : '';
    }
}
