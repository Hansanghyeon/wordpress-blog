<!doctype html>
<html lang="ko_KR">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=East+Sea+Dokdo&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <!-- D2Codnig -->
    <link href="//cdn.jsdelivr.net/gh/wan2land/d2coding/d2coding-full.css" rel="stylesheet" />
    <link href="//cdn.jsdelivr.net/gh/wan2land/d2coding/d2coding-subset.css" rel="stylesheet" />
    <link href="//cdn.jsdelivr.net/gh/wan2land/d2coding/d2coding-ligature-full.css" rel="stylesheet" />
    <link href="//cdn.jsdelivr.net/gh/wan2land/d2coding/d2coding-ligature-subset.css" rel="stylesheet" />
    <!-- Kakao -->
    <script src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>
    <!-- Hansanghyeon Font -->
    <link rel="stylesheet" type="text/css" href="https://hansanghyeon.github.io/Arita/font.min.css">

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