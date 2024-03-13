<?php

namespace App\View\Components;

use Honey;
use Roots\Acorn\View\Component;

class SnsNav extends Component
{
    public $nav_obj;
    public $class;
    /**
     * Create the component instance.
     *
     * @param  string  $type
     * @param  string  $message
     * @return void
     */
    public function __construct($class = '')
    {
        $this->nav_obj = (new Honey\Component\Navigation(307, array($this, 'set_icon')))->get_navigation();
        $this->class = $class;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return $this->view('components.sns-nav');
    }

    public function set_icon($menu_item)
    {
        if ($icon = get_field('light-icon', $menu_item)) {
            $menu_item->light_icon = $icon;
        }
        if ($icon = get_field('dark-icon', $menu_item)) {
            $menu_item->dark_icon = $icon;
        }
        return $menu_item;
    }
}
