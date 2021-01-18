<?php get_header(); ?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <div class="container py-5">
    <div class="row">
      <div class="col">
        <header class="entry-header">
          <?php the_title('<h1 class="entry-title">', '</h1>'); ?>
        </header><!-- .entry-header -->
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="entry-content">
          <?php
          the_content();
          ?>
        </div><!-- .entry-content -->
      </div>
    </div>
  </div>
</article><!-- #post-<?php the_ID(); ?> -->
<?php get_footer();
