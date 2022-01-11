<!doctype html>
<html lang="ko_KR">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?> x-data>
    <?php wp_body_open(); ?>
    <?php do_action('get_header'); ?>

    <?php echo \Roots\view(\Roots\app('sage.view'), \Roots\app('sage.data'))->render(); ?>

    <?php do_action('get_footer'); ?>
    <?php wp_footer(); ?>
</body>

</html>