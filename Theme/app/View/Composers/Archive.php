<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class Archive extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'header-archive',
        'archive',
        'archive-*',
        'partials.nav-side'
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    {
        return [
            'title' => $this->title(),
            'thumbnail' => $this->thumbnail(),
            'categories' => $this->categories(),
            'pagination' => $this->pagination(),
        ];
    }


    public function title()
    {
        return get_the_archive_title();
    }

    public function thumbnail()
    {
        $thumbnailDom = '';
        // def 모바일 사이즈
        $data = get_field(get_post_type(), 'option');

        if (!empty($data['def'])) {
            $thumbnailDom = "<img class=\"md:hidden mx-auto\" src=\"{$data['def']}\" alt=\"\">";
        }
        if (!empty($data['md'])) {
            $thumbnailDom .= "<img class=\"hidden md:block mx-auto\" src=\"{$data['md']}\" alt=\"\">";
        }

        return $thumbnailDom;
    }

    private function sort_terms_hierarchically(array &$cats, array &$into, $parentId = 0)
    {
        foreach ($cats as $i => $cat) {
            $cat->link = '/'. get_post_type() . '/category/' . $cat->slug;
            if ($cat->parent == $parentId) {
                $into[$cat->term_id] = $cat;
                unset($cats[$i]);
            }
        }
    
        foreach ($into as $topCat) {
            $topCat->children = array();
            $this->sort_terms_hierarchically($cats, $topCat->children, $topCat->term_id);
        }
    }

    public function categories()
    {
        $terms = get_terms(array(
          "taxonomy" => get_post_type() .'_category',
          "hide_empty" => false,
        ));

        $termsHierarchy = array();
        $this->sort_terms_hierarchically($terms, $termsHierarchy);
        return $termsHierarchy;
    }

    public function pagination($range = 4)
    {
        $showitems = ($range * 2) + 1;

        global $paged;
        if (empty($paged)) {
            $paged = 1;
        }

        global $wp_query;
        $pages = $wp_query->max_num_pages;
        if (!$pages) {
            $pages = 1;
        }

        $result = '';
        if ($pages > 1) {
            $prevlink = $paged > 1 && $showitems < $pages ? get_pagenum_link($paged - 1) : '';
            $nextlink = $paged < $pages && $showitems < $pages ? get_pagenum_link($paged + 1) : '';
            $lastlink = get_pagenum_link($pages);
            $of = $paged + $showitems;
            

            $result .= <<<HTML
            <div class="py-3 flex items-center justify-between border-t border-gray-200">
              <div class="flex-1 flex justify-between sm:hidden">
                <a href="{$prevlink}" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Previous
                </a>
                <a href="{$nextlink}" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Next
                </a>
              </div>
              <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p class="text-sm text-gray-700">
                    Showing
                    <span class="font-medium">{$paged}</span>
                    to
                    <span class="font-medium">{$of}</span>
                    of
                    <span class="font-medium">{$pages}</span>
                    results
                  </p>
                </div>
                <div>
                  <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <a href="{$prevlink}" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      <span class="sr-only">Previous</span>
                      <!-- Heroicon name: solid/chevron-left -->
                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </a>
HTML;
            for ($i=1; $i <= $pages; $i++) {
                if (1 != $pages && (!($i >= $paged + $range + 1 || $i <= $paged - $range - 1) || $pages <= $showitems)) {
                    if ($paged === $i) {
                        $result .= "<span class=\"z-10 bg-indigo-50 border-gray-300 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium\">{$i}</span>";
                    } else {
                        $link = get_pagenum_link($i);
                        $result .= "<a href=\"{$link}\" class=\"bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium\">{$i}</a>";
                    }
                }
            }
            $result .= <<<HTML
                    <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">...</span>
                    <a href="{$lastlink}" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">{$pages}</a>
                    <a href="{$nextlink}" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      <span class="sr-only">Next</span>
                      <!-- Heroicon name: solid/chevron-right -->
                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                      </svg>
                    </a>
                  </nav>
                </div>
HTML;
        }

        return $result;
    }
}
