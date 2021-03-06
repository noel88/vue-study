**- Vue.js?** 

웹 페이지 화면을 개발하기 위한 프런트 엔드 프레임 워크.

**- Vue의 특징**

**MVVM 패턴** : 화면을 모델 - 뷰 - 뷰모델로 구조화하여 개발하는 방식. 이러한 방식으로 개발하는 이유는 화면의 요소들을 제어하는 코드와 데이터 제어 로직을 분리하여 코드를 더 직관적으로 이해할 수 있고, 추후 유지 보수가 편해지기 때문.

**컴포넌트 기반 프레임워크** : 뷰의 컴포넌트를 조합하여 화면을 구성할 수 있음.

**리액트와 앵귤러의 장점을 가진 프레임워크** : 앵귤러의 양방향 데이터 바인딩과 리액트의 단방향 데이터 흐름의 장점을 모두 결합.

**가상돔 렌더링 방식을 적용하여 사용자 인터랙션이 많은 요즘의 웹 화면에 적합한 동작 구조를 갖추고 있음.**



**- 뷰 인스턴스**

뷰 인스턴스는 뷰로 화면을 개발하기 위해 필수적으로 생성해야 하는 기본 단위

**- 뷰 인스턴스 생성자**

new Vue()로 인스턴스를 생성할 때 Vue를 생성자라고 함. 뷰 라이브러리를 로딩하고 나면 접근할수 있음.

**- 뷰 인스턴스 옵션 속성**

인스턴스를 생성할 때 재정의할 data, el, template 등의 속성을 의미. 이 외에도 methods, created 등 정의되어있는 속성을 사용할수 있음.

\- 뷰 인스턴스 유효 범위

뷰 인스턴스를 생성하면 HTML의 특정 범위 안에서만 옵션 속성이 적용되어 나타남.

**뷰 라이브러리 파일 로딩 -> 인스턴스 객체 생성 -> 특정 화면 요소에 인스턴스를 붙임 -> 인스턴스 내용이 화면 요소로 변환 -> 변환된 화면 요소를 사용자가 최종 확인**

**- 뷰 인스턴스 라이프 사이클**

인스턴스의 상태에 따라 호출할 수 있는 속성들. 각 라이프 사이클 속성에서 실행되는 커스텀 로직을 라이프 사이클 훅이라 함.

**beforeCreate**

인스턴스가 실행되고 나서 가장 처음으로 실행되는 라이프 사이클 단계. 이 단계에서는 data 속성과 methods 속성이 아직 인스턴스에 정의되어 있지 않고, 돔과 같은 화면 요소에도 접근할 수 없음.

**created**

data 속성과 methods속성에 정의된 값에 접근하여 로직을 실행 할 수 있다. 다만, 아직 인스턴스가 화면 요소에 부착되기 전이기 때문에 template 속성에 정의된 돔 요소로 접근할 수 없음. 서버에 데이터를 요청하여 받아오는 로직을 수행하기 좋음.

**beforeMount**

template 속성에 지정한 마크업 속성을 render() 함수로 변환한 후 el 속성에 지정한 화면 요소에 인스턴스를 부착하기 전에 호출되는 단계

**mounted**

el 속성에서 지정한 화면 요소에 인스턴스가 부착되고 나면 호출되는 단계, template 속성에 정의한 화면 요소에 접근할 수 있어 화면 요소를 제어하는 로직을 수행하기 좋은 단계

**beforeUpdate**

인스턴스에 정의한 속성들이 화면에 치환. 또한 관찰하고 있는 데이터가 변경되면 가상 돔으로 화면을 다시 그리기 전에 호출되는 단계

**updated**

데이터가 변경되고 나서 가상 돔으로 다시 화면을 그리고 나면 실행되는 단계. 데이터 변경으로 인한 화면 요소변경까지 완료된 시점이므로, 데이터 변경 후 화면 요소 제어와 관련된 로직을 추가하기 좋은 단계.

**beforeDestroy**

뷰 인스턴스가 파괴되기 직전에 호출되는 단계. 아직 인스턴스에 접근할수 있음.

**destroyed**

뷰 인스턴스가 파괴되고 나서 호출되는 단계. 뷰 인스턴스에 정의한 모든 속성이 제거되고 하위에 선언한 인스턴스들 또한 모두 파괴.