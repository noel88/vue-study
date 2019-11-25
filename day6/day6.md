day6

- Vuex

애플리케이션의 상태관리를 돕는 라이브러리.

- 뷰의 반응성

뷰가 데이터 변화를 감지했을 때 자동으로 화면을 다시 갱신하는 특성. 

**Watcher**

모든 컴포넌트에 존재하는 속성. 화면을 다시 그리는데 중요한 역할을 함. 

**인스턴스 data 속성에 반응성이 언제 생기는가?**

인스턴스를 생성하는 시점.

- 서버 사이드 렌더링

**클라이언트 사이드 렌더링과 서버 사이드 렌더링의 차이**

1. 클라이언트 사이드 렌더링 강점 - 매끄러운 화면전환, 사용자 경험의 향상
2. 서버 사이드 렌더링 강점 - 검색 엔진 최적화, 초기 화면 렌더링 속도

- 웹팩

서로 연관이 있는 모듈 간의 관계를 해석하여 정적인 자원으로 변환해 주는 변환 도구

- 웹팩의 주요 속성

1. entry  : 웹팩으로 빌드할 대상 파일을 지정하는 속성. entry로 지정한 파일의 내용에는 전체 애플리케이션 로직과 필요 라이브러리를 로딩하는 로직이 들어감.
2. output : 웹팩으로 빌드한 결과물의 위치와 파일 이름 등 세부 옵션을 설정하는 속성.
3. loader: 웹팩으로 빌드할 때 HTML, CSS, PNG(이미지) 파일 등을 자바스크립트로 변환하기 위해 필요한 설정을 정의하는 속성
4. plugin: 웹팩으로 빌드하고 나온 결과물에 대해 추가 기능을 제공하는 속성
5. resolve: 웹팩으로 빌드할 때 해당 파일이 어떻게 해석되는지 정의하는 속성.

- 웹팩 데브 서버

웹팩 설정 파일의 변화를 감지하여 빠르게 웹팩을 빌드할 수 있도록 지원하는 유틸이자 서버.

- webpack-simple  프로젝트의 웹팩 설정 파일 분석

**파일 경로와 웹팩 라이브러리 로딩**

```javascript
var path = require('path')
var webpack = require('webpack')
```

**entry 속성**

```javascript
 entry: './src/main.js'
```

**output 속성**

```javascript
 output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  }
```

**module 속성**

```javascript
module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  }
```

**resolve 속성**

```javascript
resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  }
```

**devServer 속성**

```javascript
devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  }
```

**performance 속성**

```javascript
 performance: {
    hints: false
  }
```

**devtool 속성**

```javascript
devtool: '#eval-source-map'
```

**배포할 때 옵션**

```javascript
if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}

```

