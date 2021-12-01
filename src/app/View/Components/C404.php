<?php

namespace App\View\Components;

use Roots\Acorn\View\Component;

class C404 extends Component
{
    public function __construct()
    {
    }

    public function render()
    {
        return $this->view('components.404');
    }
}
