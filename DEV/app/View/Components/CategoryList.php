<?php

namespace App\View\Components;

use Roots\Acorn\View\Component;

class CategoryList extends Component
{
    /**
     * 리스트 타입
     *
     * @var string
     */
    public $type;

    /**
     * 결과값으로 내보낼 terms array 데이터
     *
     * @var array
     */
    public $terms = [];


    /**
     * notion list 데이터를 만들기 위한 함수
     *
     * @param  array  $terms
     * @return void
     */
    private function setNotionDomData($terms)
    {
        $result = [];
        foreach ($terms as $term) {
            $_ = [
              'name' => $term->name,
              'link' => '/'.get_post_type().'/category/'.$term->slug
          ];
            if (!empty($icon_field_data = get_field('icon', get_post_type(). '_category_'. $term->term_id))) {
                $_['icon'] = [
                'src' => $icon_field_data['url'],
                'alt' => $icon_field_data['title'],
            ];
            }
            array_push($result, $_);
        }
        return $result;
    }


    public function __construct($type = 'default')
    {
        $terms = wp_get_post_terms(get_the_ID(), get_post_type(). '_category');
        if (is_wp_error($terms)) {
            return;
        }
        
        if ($type === 'notion') {
            $this->terms = $this->setNotionDomData($terms);
        }
    }
    
    public function render()
    {
        // terms로 설정된게 1개라도 넘어야 component를 렌더링
        if (count($this->terms) >= 1) {
            return $this->view('components.list.notion');
        }
    }
}
