## Cafe24 ecommerce gtm setting

![md_tag](https://img.shields.io/badge/-GTM-gray.svg) 
![md_tag](https://img.shields.io/badge/-Cafe24-gray.svg)

1. 카테고리 meta data로 넣는 방법
  디자인센터 → 상품 → 상품분류(list.html)  
  분명히 상품의 리스트를 출력하는 부분이있을꺼다. 내가 작업한 곳은 첫번째 상품을 단독으로 불러오고 나머지 상품들을 루프문으로 불러오는 방식이었다.
  `<meta class="product_category_item" data-name=" {$product_name_tag}" data-price="{$product_price}">` 이런식으로 제작 상품정보쪽에 넣어준다.

처음 접근해서 작업할때는 위처럼 작성했는데 GTM코드를 작성하면서 보니까 CAFE24는 json형태로 상품의 정보들을 미리 불러와준다.

```js
// 기존 상품
JSON.parse(option_stock_data)
```

###운용중인 코드

####카테고리

공통적용가능

```js
function meta(name) {
  var target = $('meta[name=' + name + ']');
  var count = target.length;

  if (count == 1) {
    return $('meta[name='+name+']').data();
  } else if (count >= 1) {
    var cat_item_list = new Array;
    for (i = 0; i < count; i++) {
      cat_item_list[i] = target[i].dataset;
    }
    return cat_item_list;
  }
}
```

```js
// 페이지 구분자
var path_role = $('meta[name=path_role]')[0].content;

// 함수실행
$('document').ready(function () {
  switch (path_role) {
    // 카테고리
    case 'PRODUCT_LIST':
      console.log('there is PRODUCT_LIST page');

      window.dataLayer.push({
        'evet': 'eec.productImpression',
        'ecommerce': [{
          'currencyCode': 'KRW',
          'impressions': [meta('product_category_item')],
        }]
      })
      break;

    // 상세페이지
    case 'PRODUCT_DETAIL':
        console.log('there is PRODUCT_DETAIL page');
        window.dataLayer.push({
          'event': 'eec.productDetail',
          'ecommerce': {
            'products': [meta('product_data')]
          }
        });
        $('.add_to_cart').click(function(){
          // 옵션이 설정되었나 확인
          var origin_check = $('.option_product .option_box_id').length;
          var add_check = $('.add_product input[class*="option_add_box_"]').length;

          if(origin_check != 0 || add_check != 0){
            if(add_check != 0){
              var add_item = new Array;
              for(i=0; i< add_check; i++){
                // 상품정보
                var product_code = $('.add_product input[class*="option_add_box_"]')[i].classList.value;
                product_code = product_code.replace('option_add_box_','');
                p = JSON.parse(add_option_data)[product_code];
                // 상품갯수
                var product_count = $('.add_product input[class*="quantity"]')[i].value

                add_item[i] = {
                  'name' : p.product_name,
                  'id' : p.product_code,
                  'pridce' : p.product_price,
                  'quantity' : product_count
                }
              }
            }
            if(origin_check != 0 && add_check != 0){
              for(i= 0; i< origin_check; i++){
                var p_code = $('.option_product .option_box_id')[i].value;
                var p_option = JSON.parse(option_stock_data)[p_code].option_value;
                var p_data = meta('product_data');
                var p_count = $('.option_product input[class*="quantity"]')[i].value;

                p_data.id = $('.option_product .option_box_id')[i].value;
                p_data.variant = p_option;
                p_data.quantity = p_count;

                add_item[i+add_check] = p_data;
              }
            }else if(origin_check != 0 && add_check == 0){
              var add_item = new Array;
              for(i= 0; i< origin_check; i++){
                var p_code = $('.option_product .option_box_id')[i].value;
                var p_option = JSON.parse(option_stock_data)[p_code].option_value;
                var p_data = meta('product_data');
                var p_count = $('.option_product input[class*="quantity"]')[i].value;

                p_data.id = $('.option_product .option_box_id')[i].value;
                p_data.variant = p_option;
                p_data.quantity = p_count;

                add_item[i] = p_data;
              }
            }

            window.dataLayer.push({
              'event': 'eec.addToCart',
              'ecommerce': {
                'currencyCode': 'KRW',
                'add' : {
                  'products' : add_item
                }
              }
            })
          }
        });
        
        break;
  }
})
```
