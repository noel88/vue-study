- 뷰 템플릿

HTML, CSS 등의 마크업 속성과 뷰 인스턴스에서 정의한 데이터 및 로직들을 연결하여 사용자가 브라우저에서 볼 수 있는 형태의 HTML로 변환해 주는 속성.

1. 뷰 인스턴스의 template속성을 활용하는 방법

```javascript
new Vue({
	template: '<p>Hello {{ message }}</p>'
})
```

2. 싱글 파일 컴포넌트의 체계의 template 코드를 활용하는 방법

```Vue
<template>
	<p>Hello! {{ message }}</p>
</template>
```

**데이터 바인딩**

HTML 화면 요소를 뷰 인스턴스의 데이터와 연결하는 것을 의미.

*1. {{ }} - 콧수염 괄호*

뷰 인스턴스의 데이터를 HTML 태그에 연결하는 가장 기본적인 텍스트 삽입 방식.

```html
<div id="app">
	{{ message }}
</div>

<script>
	new Vue({
		el: '#app',
		data : {
			message: 'Hello Vue.js!'
		}
	});
</script>

// 1회 바인딩
<div id="app" v-once>
  {{ message }}
</div>
```

*2. v-bind*

아이디, 클래스, 스타일 등의 HTML 속성값에 뷰 데이터 값을 연결할 때 사용하는 데이터 연결 방식.

<이미지1>--------

*3. 자바스크립트 표현식*

<이미지2>---------

*4. 디렉티브*

HTML태그 안에 v- 접두사를 가지는 모든 속성들을 의미

```vue
<a v-if="flag">두잇 Vue.js</a>
```

v-if: 지정한 뷰 데이터 값의 참, 거짓 여부에 따라 해당 HTML태그를 화면에 표시하거나 표시하지 않음.

v-for: 지정한 뷰 데이터의 개수만큼 해당 HTML태그를 반복.

v-show: css 효과만 주어 실제 태그는 남아있고 화면 상으로만 보이거나 보이지 않음.

v-bind: HTML 태그의 기본 속성과 뷰 데이터 속성을 연결.

v-on: 화면 요소의 이벤트를 감지하여 처리할때 사용.

v-model: 폼에서 주로 사용되는 속성. 폼에 입력한 값을 뷰 인스턴스의 데이터와 즉시 동기화 함.

<이미지3> --------

- 고급 템플릿 기법

**computed 속성**

데이터 연산들을 정의하는 영역.

**computed속성과 methods속성의 차이점**

methods 속성은 호출할 때만 해당 로직이 수행되고, computed 속성은 대상 데이터의 값이 변경되면 자동적으로 수행.

**watch 속성**

데이터 변화를 감지하여 자동으로 특정 로직을 수행.



