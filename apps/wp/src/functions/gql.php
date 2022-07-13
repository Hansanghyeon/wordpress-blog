<?php

add_filter('preview_post_link', function () {
  return get_site_url() . '/preview/';
});