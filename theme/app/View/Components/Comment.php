<?php

namespace App\View\Components;

use Roots\Acorn\View\Component;

class Comment extends Component
{
    public $id;

    public function __construct()
    {
        $this->id = get_the_ID();
    }

    public function render()
    {
        if (get_post_type() === 'dev') {
            return $this->view('components.giscus');
        }
        // return $this->view('components.comment');
    }
}
