<?php

/**
 * Theme setup.
 */

namespace App;

use function Roots\bundle;

/**
 * Register the theme assets.
 *
 * @return void
 */
add_action('wp_enqueue_scripts', function () {
    bundle('app')->enqueue();

    if (is_single() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }

    wp_enqueue_style('pretendard', asset('fonts/pretendard/web/static/pretendard.css')->uri(), false, null);
    wp_enqueue_style('fonts/독도폰트', 'https://fonts.googleapis.com/css2?family=East+Sea+Dokdo&display=swap', false, null);
    wp_enqueue_style('fonts/firacode', 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap', false, null);
    wp_enqueue_style('d2coding-01', '//cdn.jsdelivr.net/gh/wan2land/d2coding/d2coding-full.css', false, null);
    wp_enqueue_style('d2coding-02', '//cdn.jsdelivr.net/gh/wan2land/d2coding/d2coding-subset.css', false, null);
    wp_enqueue_style('d2coding-03', '//cdn.jsdelivr.net/gh/wan2land/d2coding/d2coding-ligature-full.css', false, null);
    wp_enqueue_style('d2coding-04', '//cdn.jsdelivr.net/gh/wan2land/d2coding/d2coding-ligature-subset.css', false, null);
    wp_enqueue_script('kakao', 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.0/kakao.min.js', false, null);
    wp_enqueue_style('Unicons-line', 'https://unicons.iconscout.com/release/v4.0.0/css/line.css', false, null);
    wp_enqueue_script('Unicons-monochrome', 'https://unicons.iconscout.com/release-pro/v4.0.0/script/monochrome/bundle.js?key=283fbb00-218c-11ec-92db-0242ac140003', false, null);
    wp_enqueue_style('Unicons-solid', 'https://unicons.iconscout.com/release-pro/v4.0.0/css/solid.css?key=283fbb00-218c-11ec-92db-0242ac140003', false, null);
    wp_enqueue_style('Unicons-thinline', 'https://unicons.iconscout.com/release-pro/v4.0.0/css/thinline.css?key=283fbb00-218c-11ec-92db-0242ac140003', false, null);

    if (
        is_single() && get_post_type() === 'dev' ||
        is_single() && get_post_type() === 'portfolio' ||
        is_single() && get_post_type() === 'gadget' ||
        is_single() && get_post_type() === 'selfhost'
    ) {
        wp_enqueue_style('syntaxhighlighter', 'https://hansanghyeon.github.io/highlight.js-custom/class.css', false, null);
    }
}, 100);

/**
 * Register the theme assets with the block editor.
 *
 * @return void
 */
add_action('enqueue_block_editor_assets', function () {
    bundle('editor')->enqueue();
}, 100);

/**
 * Register the initial theme setup.
 *
 * @return void
 */
add_action('after_setup_theme', function () {
    /**
     * Enable features from the Soil plugin if activated.
     *
     * @link https://roots.io/plugins/soil/
     */
    add_theme_support('soil', [
        'clean-up',
        'nav-walker',
        'nice-search',
        'relative-urls',
    ]);

    /**
     * Disable full-site editing support.
     *
     * @link https://wptavern.com/gutenberg-10-5-embeds-pdfs-adds-verse-block-color-options-and-introduces-new-patterns
     */
    remove_theme_support('block-templates');

    /**
     * Register the navigation menus.
     *
     * @link https://developer.wordpress.org/reference/functions/register_nav_menus/
     */
    register_nav_menus([
        'primary_navigation' => __('Primary Navigation', 'sage'),
    ]);

    /**
     * Disable the default block patterns.
     *
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#disabling-the-default-block-patterns
     */
    remove_theme_support('core-block-patterns');

    /**
     * Enable plugins to manage the document title.
     *
     * @link https://developer.wordpress.org/reference/functions/add_theme_support/#title-tag
     */
    add_theme_support('title-tag');

    /**
     * Enable post thumbnail support.
     *
     * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
     */
    add_theme_support('post-thumbnails');

    /**
     * Enable responsive embed support.
     *
     * @link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/#responsive-embedded-content
     */
    add_theme_support('responsive-embeds');

    /**
     * Enable HTML5 markup support.
     *
     * @link https://developer.wordpress.org/reference/functions/add_theme_support/#html5
     */
    add_theme_support('html5', [
        'caption',
        'comment-form',
        'comment-list',
        'gallery',
        'search-form',
        'script',
        'style',
    ]);

    /**
     * Enable selective refresh for widgets in customizer.
     *
     * @link https://developer.wordpress.org/reference/functions/add_theme_support/#customize-selective-refresh-widgets
     */
    add_theme_support('customize-selective-refresh-widgets');
}, 20);

/**
 * Register the theme sidebars.
 *
 * @return void
 */
add_action('widgets_init', function () {
    $config = [
        'before_widget' => '<section class="widget %1$s %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h3>',
        'after_title' => '</h3>',
    ];

    register_sidebar([
        'name' => __('Primary', 'sage'),
        'id' => 'sidebar-primary',
    ] + $config);

    register_sidebar([
        'name' => __('Footer', 'sage'),
        'id' => 'sidebar-footer',
    ] + $config);
});

add_action('wp_head', function () {
    // history 페이지
    if (get_the_ID() === 3707) {
        echo '<script type="module" crossorigin src="' . asset('dist/history/index.js')->uri() . '"></script>';
    }
});

// 작성자 페이지에서 메인쿼리를 포트폴리오로 변경
add_action('pre_get_posts', function ($query) {
    if (!is_author() || !$query->is_main_query())
        return;

    $query->set('posts_per_page', 9);
    $query->set('post_type', 'portfolio');
    // Include drafts for logged-in users with 'edit_posts' capability
    $current_user = wp_get_current_user();
    if (is_user_logged_in() && $current_user->has_cap('edit_posts')) {
        $query->set('post_status', array('publish', 'draft', 'private'));
    }
});


function debug_api($post_title, $content, $only_body = false)
{
    // API 호출을 수행합니다.
    $api_url = 'https://n8n.hyeon.pro/webhook/f54fb69c-2323-450f-aa9b-356a46e2ab6a';
    $api_data = array(
        'title' => $post_title,
        'content' => $content
    );

    $response = wp_safe_remote_post($api_url, array(
        'body' => json_encode($api_data),
        'headers' => array(
            'Content-Type' => 'application/json',
            'Authorization' => 'Basic ' . getenv_docker('N8N_WEBHOOK_AUTHENTICATION', '')
        ),
    ));

    // API 응답을 확인하고 필요한 작업을 수행합니다.
    if (is_wp_error($response)) {
        // API 호출이 실패한 경우 에러 처리를 수행합니다.
        error_log($response->get_error_message());
    } else {
        // API 호출이 성공한 경우 추가 작업을 수행합니다.
        // $response에서 응답 데이터를 확인할 수 있습니다.
    }
}
