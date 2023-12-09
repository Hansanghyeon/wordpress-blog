<?php

namespace Honey\Component;

class Navigation
{
    private $nav_id;
    private $menu_item_callback;

    public function __construct($id = null, $menu_item_callback = null)
    {
        if ($id) {
            $this->nav_id = $id;
        } else {
            $this->set_default_nav_id();
        }

        if ($menu_item_callback) {
            $this->menu_item_callback = $menu_item_callback;
        }
    }
    private function set_default_nav_id()
    {
        $locations = get_nav_menu_locations();
        $this->nav_id = $locations['primary_navigation'];
    }

    // $menu_items에서 $menu_item에 callback을 적용한다
    private function set_menu_items_to_item($menu_items, $callback)
    {
        // $menu_items에서 $menu_item에 callback을 적용한다
        foreach ($menu_items as $menu_item) {
            $menu_item = call_user_func($callback, $menu_item);
        }
        // 적용된 $menu_item를 포함한 $menu_items를 반환한다.
        return $menu_items;
    }


    // menu_item에 acf 필드를 추가해준 예제.
    private function menu_item_advance($menu_item)
    {
        // $menu_item에는 advance가 없다. 추가해줘야한다.
        $menu_item->advance = array();
        // advacne에 attribute를 추가한다. attribute는 array이다.
        $menu_item->advance['attribute'] = array();

        // attribute에 ACF필드의 값을 넣어준다.
        // $menu_item->advance['attribute']['@click'] = get_field('alpine_click', $menu_item);

        return $menu_item;
    }

    // get primary_navigation
    public function get_navigation()
    {
        // Get hte primary menu object
        $menu_object = wp_get_nav_menu_object($this->nav_id);
        if ($menu_object) {
            // Now you have the menu object, and you can manipulate it as needed
            // For example, you can access the menu properties like this:
            $menu_id = $menu_object->term_id;
            $menu_name = $menu_object->name;
            $menu_description = $menu_object->description;

            // Get the menu items for this menu
            $menu_items = wp_get_nav_menu_items($menu_id);

            // $menu_items에 advance를 추가한다.
            // $this->menu_item_advance를 콜백함수로 넣는다.
            $menu_items = $this->set_menu_items_to_item($menu_items, array($this, 'menu_item_advance'));

            // 아이템에 무언가를하는 콜백함수를 받는다?
            $menu_items = $this->set_menu_items_to_item($menu_items, $this->menu_item_callback);

            // $menu_items의 각각 item은 id가있고 parent_id가있다.
            // 부모자식 tree로 만들어야한다.
            $menu_items = $this->get_menu_tree($menu_items);

            return $menu_items;
        } else {
            return null;
        }
    }

    // $menu_items의 각각 item은 id가있고 menu_item_parent가있다.
    // 부모자식 tree로 만들어야한다.
    private function get_menu_tree($menu_items)
    {
        $menu_tree = array();
        foreach ($menu_items as $menu_item) {
            $menu_tree[$menu_item->ID] = $menu_item;
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
