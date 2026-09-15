import type { ExperienceEntry } from '@/types/cv'

export const experiences: readonly ExperienceEntry[] = [
  {
    company: '(주) 그렙 (프로그래머스)',
    period: '2024.07 ~ 2025.03',
    role: '교육솔루션팀 / SW Engineer',
    tags: ['Ruby on Rails', 'ActiveAdmin', 'Sidekiq', 'PostgreSQL', 'Python', 'Django'],
    bullets: [
      '<strong>KDT 수강생 역량진단리포트 백엔드 단독 개발</strong> — 채점·정규화·리포트/알림 파이프라인, PostgreSQL 윈도우 함수 백분위 계산 및 배치 쿼리 인덱스 최적화',
      '<strong>원티드 KDT(wantedlms) 멀티 테넌트 분기</strong> — 환경별 YAML 설정으로 기능 분기, 공통 코드베이스 유지로 저장소 이원화 비용 회피',
      '<strong>프로그래머스 프로젝트 LMS V1 API + service object 분리</strong> — /api/school → /api/v1/lms 도메인별 신규 API, 에러 응답 통일, 수료증·재초대 service object화',
      '<strong>LMS 운영 이슈 해결</strong> — Sentry/Slack 기반 근본 원인 추적과 회귀 스펙 보강, alias_attribute로 검색 오류를 수정해 마이그레이션 다운타임 회피',
    ],
  },
  {
    company: '(주) 그렙 (프로그래머스)',
    period: '2020.12 ~ 2022.10',
    role: '채용서비스팀 / SW Engineer',
    tags: ['Ruby on Rails', 'Vue.js', 'TypeScript', 'Flask', 'AWS Lambda', 'Terraform'],
    bullets: [
      '<strong>이력서 모델 jsonb → 정규화 무중단 마이그레이션</strong> — 6개 도메인 정규화, ignored_columns → 컬럼 drop 4단계 playbook 확립',
      '<strong>전사 본인인증 서비스 신규 구축</strong> — Flask · AWS Lambda(Container Image) · DynamoDB(TTL) · Terraform 3환경 분리, ActionCable WebSocket 통합',
      '<strong>비즈니스 / 채용공고 SSR → SPA 전환</strong> — Vue Composition API + TypeScript, CoffeeScript 잔재 제거, 필터 시스템 컴포넌트화 (URL 동기화 · AutoComplete · sticky)',
      '<strong>GitHub 분석기 정밀도 개선</strong> — Rugged 정렬 명시 + 엣지 케이스 대응으로 미분석 커밋 0건, git:// → https:// 즉시 대응',
      '<strong>추천 채용공고 AWS Personalize 전환</strong> — 고정 ES 추천 → 개인화 Campaign, 클릭률 / 지원율 향상 확인',
      '<strong>비즈니스 신규 도메인 (코딩테스트 과제 / 대회) + V1 API</strong> — 회사 어드민, 대회 리더보드, bulk 어드민, 다국어 i18n 확장',
      '<strong>서비스 품질</strong> — 테스트 커버리지 70 → 80%, ActiveAdmin 쿼리 / N+1 최적화, 부서별 에러 Slack 채널 분리, 무중단 schema 정리 방법론 확립',
    ],
  },
  {
    company: '(주) 그렙 (프로그래머스)',
    period: '2019.06 ~ 2020.08 (인턴 3차)',
    role: '알고리즘 컨텐츠팀 / 알고리즘 컨텐츠 제작자 · C/C++, Python, Java',
    bullets: [
      '프로그래머스 서비스 알고리즘 문제 기획·출제·검수, 검수 워크플로 정착 및 자동화 도구 제작 (문제 템플릿 / 테스트 케이스 랜덤 생성)',
    ],
  },
  {
    company: '대한민국 육군 특전사령부 / 제11공수특전여단',
    period: '2022.11 ~ 2024.05',
    role: '정보체계운용정비병',
    bullets: ['인트라넷(NAC / 방화벽) 운영, 서버 / 부대 웹페이지 관리, 내부망 및 전산 장비 유지보수'],
  },
]
