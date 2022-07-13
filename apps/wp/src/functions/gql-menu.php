<?php

add_action( 'graphql_register_types', function() {
    register_graphql_object_type( 'MenuItemThumbnail', [
      'description' => __( "Man's best friend", 'your-textdomain' ),
      'fields' => [
        'menu_icon' => [
            'type' => 'String',
            'description' => '메뉴 아이콘 URL',
        ],
        'label_color' => [
            'type' => 'String',
            'description' => '메뉴 라벨 색상',
        ],
      ],
    ] );
  
    register_graphql_field( 'MenuItem', 'thumbnail', [
      'type' => 'MenuItemThumbnail',
      'args' => [ 'test' => [ 'type' => 'boolean' ] ],
      'description' => __( 'Link to edit the content', 'your-textdomain' ),
      'resolve' => function( \WPGraphQL\Model\MenuItem $menuItem, $args, $context, $info ) {
        return [
          'menu_icon' => get_field('menu_icon', $menuItem->databaseId),
          'label_color' => get_field('label_color', $menuItem->databaseId),
        ];
      }
    ]);
  } );