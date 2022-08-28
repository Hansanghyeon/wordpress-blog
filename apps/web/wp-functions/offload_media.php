<?php

function minio_s3_client_args( $args ) {
    $args['endpoint'] = 'http://minio:9000';
    $args['use_path_style_endpoint'] = true;
    return $args;
  }
  add_filter( 'as3cf_aws_s3_client_args', 'minio_s3_client_args' );

  add_filter( 'as3cf_aws_s3_url_domain', 'minio_s3_url_domain', 10, 2 );
  function minio_s3_url_domain( $domain, $bucket ) {
      return 'cdn.hyeon.pro/' . $bucket;
  }
