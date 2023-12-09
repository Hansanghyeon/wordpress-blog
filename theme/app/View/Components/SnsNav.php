<?php

namespace App\View\Components;

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
        $this->nav_obj = $this->get_primary_navigation();
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

    // get primary_navigation
    public function get_primary_navigation()
    {
        $locations = get_nav_menu_locations();
        // get primary_navigation id
        $primary_navigation_id = 82; // $locations['sns'];
        // Get hte primary menu object
        $menu_object = wp_get_nav_menu_object($primary_navigation_id);
        if ($menu_object) {
            // Now you have the menu object, and you can manipulate it as needed
            // For example, you can access the menu properties like this:
            $menu_id = $menu_object->term_id;
            $menu_name = $menu_object->name;
            $menu_description = $menu_object->description;

            // Get the menu items for this menu
            $menu_items = wp_get_nav_menu_items($menu_id);

            // $menu_items의 각각 item은 id가있고 parent_id가있다.
            // 부모자식 tree로 만들어야한다.
            $menu_items = $this->get_menu_tree($menu_items);

            return $menu_items;
        } else {
            return null;
        }
    }

    private function set_icon($menu_item)
    {
        if ($icon = get_field('light-icon', $menu_item)) {
            $menu_item->light_icon = $icon;
        }
        if ($icon = get_field('dark-icon', $menu_item)) {
            $menu_item->dark_icon = $icon;
        }
        return $menu_item;
    }
    // $menu_items의 각각 item은 id가있고 menu_item_parent가있다.
    // 부모자식 tree로 만들어야한다.
    private function get_menu_tree($menu_items)
    {
        $menu_tree = array();
        foreach ($menu_items as $menu_item) {
            $menu_tree[$menu_item->ID] = $this->set_icon($menu_item);
        }
        foreach ($menu_tree as $menu_item) {
            if ($menu_item->menu_item_parent && isset($menu_tree[$menu_item->menu_item_parent])) {
                // WP_Post Object
                // 해당 Object의 children method가 없다.
                if (!isset($menu_tree[$menu_item->menu_item_parent]->children)) {
                    $menu_tree[$menu_item->menu_item_parent]->children = array();
                }
                $menu_tree[$menu_item->menu_item_parent]->children[] = $menu_item;
            }
        }
        // children으로 들어간 아이템은 menu_tree 1depth에서 제거한다.
        foreach ($menu_tree as $key => $menu_item) {
            if ($menu_item->menu_item_parent) {
                unset($menu_tree[$key]);
            }
        }
        return $menu_tree;
    }
}
