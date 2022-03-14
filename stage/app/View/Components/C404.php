<?php

namespace App\View\Components;

use Roots\Acorn\View\Component;
use function Roots\asset;

class C404 extends Component
{
    public $bg;
    public function __construct()
    {
        $this->bg = asset('images/not-found.png')->uri();
    }

    public function render()
    {
        return $this->view('components.404');
    }
}
