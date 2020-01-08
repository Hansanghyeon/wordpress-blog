포럼형 게시판은 BBpress를 이용해서 구축했다.  
하지만 우리가 평범하게 사용하는 대부분의 게시판은 글쓴이 자신은 내가 작성한 글이나 질문등 모든거를 언제든지 수정하거나 지울 수 있다. 그런데 BBpress는 게시판 설정에 설정이 된 수정 시간이 정해져있는거다. 그 시간이내에만 수정하거나 삭제할 수 있도록 왜 그랬는지 의도는 알겠지만 댓글 수정잠금을 비활성화할 필요가 생겼다.

bbpress에서 다음 함수를 사용하면 글 수정 잠그기 기능을 비활성화 할 수 있습니다.
```php
/* bbpress 글수정 잠금해제 */
function no_edit_lock($retval, $cur_time, $lock_time, $post_date_gmt){
  return false;
}
add_filter( 'bbp_past_edit_lock', 'no_edit_lock', 1, 4);
```

추후 bbpress가 아닌 워드프레스 포스트에서 댓글을 수정하거나 제거 부분의 잠금 기능도 비활성화할때 아래 포스트를 읽고 정리하자.

출처 : [바로가기](https://www.thewordcracker.com/basic/allow-users-to-edit-comments-in-wordpress/)
