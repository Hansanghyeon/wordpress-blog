<?php

namespace App\View\Components;

use Roots\Acorn\View\Component;
use Smartcrawl_Canonical_Value_Helper;
use Smartcrawl_OpenGraph_Value_Helper;

class Share extends Component
{
    /**
     * 이미지 링크 배열 단일 링크로 변경
     *
     * @param array $images
     * @var string
     */
    public function get_imgurl($images)
    {
        $images = is_array($images) && !empty($images)
        ? array_values($images)[0][0]
        : '';
        return $images;
    }
    /**
     * share에 사용할 변수들
     *
     * @var string
     */
    public $title;
    public $description;
    public $img;
    public $link;

    /**
     * Create the component instance.
     *
     * @return void
     */
    public function __construct()
    {
        $value_helper = new Smartcrawl_OpenGraph_Value_Helper();
        $helper = new Smartcrawl_Canonical_Value_Helper();
        $this->title = $value_helper->get_title();
        $this->description = $value_helper->get_description();
        $this->link = $helper->get_canonical();
        $this->img = $this->get_imgurl($value_helper->get_images());
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return $this->view('components.share');
    }
}
