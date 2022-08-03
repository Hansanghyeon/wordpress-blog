<?php

add_action('graphql_register_types', function () {
    register_graphql_object_type('ArchiveSeoObj', [
        'description' => '아카이브 페이지의 SEO',
        'fields' => [
            'description' => [
                'type' => 'String',
                'description' => 'SEO 페이지 설명'
            ],
            
        ]
    ]);

    register_graphql_field('WPPageInfo', 'seo', [
        'type' => 'Number',
        'description' => '아카이브 페이지의 SEO',
        'resolve' => function ( $test ) {
            graphql_debug($test, ['type' => 'test']);
            return 300;
        }
    ]);
});
