<?php

namespace App\View\Components;

use App\View\Composers\Post;
use Roots\Acorn\View\Component;
use function Honey\WpFn\get_the_custom_excerpt;

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
        $this->title = get_the_title();
        $this->description = get_the_custom_excerpt();
        $this->link = get_the_permalink();

        $thumbnail_url = get_the_post_thumbnail_url();

        if (!empty($thumbnail_url) || get_the_ID() === 18) {
            $this->img = $thumbnail_url;
        } else {
            $this->img = (Post::get_menu())?->icon;
        }
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
