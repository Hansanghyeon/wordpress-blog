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
        'archive',
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
            'thumbnail' => $this->thumbnail(),
        ];
    }


    public function title()
    {
        return get_the_archive_title();
    }

    public function thumbnail()
    {
        $thumbnailDom = '';
        // def 모바일 사이즈
        $data = get_field(get_post_type(), 'option');
        if (!empty($data['def'])) {
            $thumbnailDom = "<img class=\"md:hidden mx-auto\" src=\"{$data['def']}\" alt=\"\">";
        }
        if (!empty($data['md'])) {
            $thumbnailDom .= "<img class=\"hidden md:block mx-auto\" src=\"{$data['md']}\" alt=\"\">";
        }

        return $thumbnailDom;
    }
}
