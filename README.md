# Serendip Website

A modern, responsive website for Serendip built with React 19 and Tailwind CSS.

## Overview

This project is a recreated version of the Serendip website featuring:
- Modern design using Serendip brand colors (Navy Blue and Yellow)
- Fully responsive layout for mobile, tablet, and desktop
- Smooth scrolling navigation
- Multiple sections: Hero, About, Programs, Teams, News, and Footer
- Built with React 19 (LTS) and Tailwind CSS

## Tech Stack

- **React 19.2.0** - Latest LTS version
- **Tailwind CSS 4.1.17** - For styling
- **Create React App** - Project setup and build tooling

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## News 콘텐츠 운영 가이드

Vercel에 배포된 현재 구조에서는 정적 파일만 수정하면 새 게시글이 반영되도록 구성되어 있습니다.

1. 이미지 준비  
   - 게시글마다 `public/news/{연도-월-슬러그}/` 폴더를 만든 뒤 1~5장의 이미지를 넣습니다.  
   - 예) `public/news/2024-11-conference/main.jpg`. 파일명/폴더명은 소문자와 하이픈을 권장합니다.
2. 뉴스 데이터 업데이트  
   - `src/data/newsData.js`에서 배열에 새 객체를 추가합니다.
   - 각 객체는 `id`, `date`, `title`, `summary`, `category`, `details`, `images`(배열) 필드를 가집니다.

```js
{
  id: '2024-12-demo-day',
  date: '2024년 12월',
  title: '연말 데모데이 개최',
  summary: '상위 10개 팀이 투자자 앞에서 피칭했습니다.',
  category: '이벤트',
  details: '행사 개요, 주요 수상 팀, 다음 일정 등을 서술하세요.',
  images: [
    { src: '/news/2024-12-demo-day/main.jpg', alt: '데모데이 메인 사진' },
    { src: '/news/2024-12-demo-day/team-a.jpg', alt: '팀 A 발표 모습' },
  ],
}
```

3. 저장 및 배포  
   - 변경 사항을 커밋 후 Git에 푸시하면 Vercel이 자동으로 재배포합니다.  
   - 이미지 경로(`/news/...`)는 `public` 폴더 기준이므로 추가 설정 없이 곧바로 접근 가능합니다.

필요 시 오래된 게시글은 배열에서 제거하거나 순서를 조정하면 됩니다.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
