# CV - 김신건

김신건 / **SW Engineer (SW 엔지니어)**

[보러가기](https://cv.shinkeonkim.com/)

A4 1장 분량의 CV. Vue 3 + TypeScript + Vite 기반.

학력·경력·프로젝트·자격증은 `my-resume/src/resume/base/`를 기준으로 요약합니다.

## Clotho

JSON 문서로 시각화 애니메이션을 정의하고 재생·편집·내보내기까지 연결하는 오픈소스 프로젝트입니다.

- **[Clotho](https://github.com/shinkeonkim/clotho)** — TypeScript 기반 엔진. 문서와 시각으로 화면을 계산하는 공통 scene graph를 React·Vue·DOM·SVG 어댑터에서 사용하며, 문서 검증과 GIF 내보내기를 제공합니다.
- **[Clotho Editor](https://github.com/shinkeonkim/clotho-editor)** — React 기반 시각 편집기. 키프레임·이펙트·챕터 편집과 JSON 입출력을 지원하고, 저장소와 이미지 업로드를 호스트 앱에서 연결할 수 있습니다.
- **[Clotho Docs](https://github.com/shinkeonkim/clotho-docs)** — Astro 기반 사용자 문서와 공개 npm 패키지를 사용하는 실행 예제입니다.

[문서 보기](https://clotho-docs.shinkeonkim.com/) · [에디터 실행](https://clotho-editor.shinkeonkim.com/)

## 파일 구조

- `src/App.vue` — 최상위 컴포넌트 (`PrintButton` + `CvPage`)
- `src/components/CvPage.vue` — `CvSidebar` + `CvMain` 페이지 레이아웃
- `src/components/CvSidebar.vue` — 좌측 사이드바 (Contact / Skills / Education / Certifications / Awards / Activities)
- `src/components/CvMain.vue` — 우측 메인 (Header / About / Work Experience / Projects)
- `src/components/sections/` — 각 섹션 컴포넌트
- `src/data/` — 섹션별 데이터 소스 (`profile`, `contact`, `skills`, `education`, `certifications`, `awards`, `activities`, `experiences`, `projects`)
- `src/types/cv.ts` — 데이터 타입 정의
- `src/assets/main.css` / `main-area.css` — 글로벌 스타일 (A4 레이아웃, print 규칙 포함)
- `cv-original.html` — 기존 HTML 원본 (참고용 백업)
- `CV.pdf` — PDF 출력본

## 개발

```sh
bun install
bun dev
bun run type-check
bun run lint
bun run build
```

## 배포

`main` 브랜치 push 시 `.github/workflows/deploy.yml` 워크플로가 GitHub Pages로 배포합니다.
