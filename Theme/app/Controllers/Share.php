<?php

namespace App\Controllers;

use Smartcrawl_Canonical_Value_Helper;
use Smartcrawl_OpenGraph_Value_Helper;
use Sober\Controller\Controller;

class Share extends Controller
{
    public static function get_imgurl($images)
    {
        $images = is_array($images) && !empty($images)
        ? array_values($images)[0][0]
        : '';
        return $images;
    }
    public static $title;
    public static $description;
    public static $link;
    public static $img;
    public static function init()
    {
        $value_helper = new Smartcrawl_OpenGraph_Value_Helper();
        $helper = new Smartcrawl_Canonical_Value_Helper();
        self::$title = $value_helper->get_title();
        self::$description = $value_helper->get_description();
        self::$link = $helper->get_canonical();
        self::$img = self::get_imgurl($value_helper->get_images());
    }
}
