# 포스트 섬네일이 있을 경우 바디에 클래스 추가

문제발생  
Divi Library에서 각 포스트의 구성을 다음과 같이 구성했다 하지만 섬네일이 없는 포스트 경우 빈 여백만 나오는 문제가 생겼다.

>

![#imgSlick](https://dan4log.com/wp-content/uploads/posting/nothumbnail002.jpg)
![#imgSlick](https://dan4log.com/wp-content/uploads/posting/nothumbnail001.jpg)

>

해결방한 생각  
그러면 섬네일이 없는 포스트를 불러올때 바디태그에 no_thumbnail 클래스를 추가해서 아래 여백을 css로 조절이 가능할꺼같다!

진행하면서 wordpress 자체에서 포스트의 섬네일이 없는지 체크할수있는 함수가있었다.

```php
has_post_thumbnail()
```

하지만 이 함수하나만 가지고 function.php에서 어떻게 활용해야하나 고민이 생겼다... 그래서 구글링을 계속했다  
여기서 에제들을 찾아보다 [PHP Function has_post_thumbnail Code Examples](https://hotexamples.com/examples/-/-/has_post_thumbnail/php-has_post_thumbnail-function-examples.html) 여기서 has_post_thumbnail()을 계속 찾았다. 그러다 간단한 방법으로 구분해서 뿌려줄수 있겠다해서 기존의 각 포스트의 슬러그를 바디태그에 넣어줬던 코드를 활용해서 섬네일이 있는지 없는지를 추가해줬다.

참고했던 각 포스트의 슬러그를 바디태그에 넣어주었던 function.php에 코드

```php
//Page Slug Body Class
function add_slug_body_class( $classes ) {
    global $post;
  if ( isset( $post ) ) {
  $classes[] = $post-&gt;post_type . '-' . $post-&gt;post_name;
  }
  return $classes;
}
add_filter( 'body_class', 'add_slug_body_class' );
```

완성코드

```php
// 포트스트의 이미지가 없다면 바디에 nothumbnail 클리스를 부여한다
function check_thumbnail_add_body_class( $classes ) {
  if (!has_post_thumbnail()) {
    $classes[] = 'no_thumbnail';
        return $classes;
    }
}
add_filter( 'body_class', 'check_thumbnail_add_body_class' );
```
