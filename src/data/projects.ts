import type { ProjectEntry } from '@/types/cv'

export const projects: readonly ProjectEntry[] = [
  {
    name: 'Clotho',
    period: '2026.08 ~',
    role: '기획·설계·단독 개발 · TypeScript, React, Vue, SVG, Astro',
    description: 'JSON 문서 하나로 여러 프레임워크에서 재생·편집·내보내기까지 지원하는 시각화 애니메이션 도구',
    bullets: [
      'JSON 문서 + 절대 시각으로 프레임을 계산하는 결정론적 scene graph 설계, React/Vue/DOM/SVG 어댑터에서 렌더링 규칙 공유',
      'Zod v1 스키마·참조 무결성 검증, legacy 마이그레이션, SVG·GIF·스토리보드 내보내기 구현 — core gzip 25KB의 @kokoa/clotho v0.5.0 공개',
      '저장소·이미지 업로드·import pipeline을 host에서 주입하는 React 편집기 개발, 독립형 앱과 기존 관리 화면에서 재사용 가능하도록 구성',
      '공개 npm 패키지를 직접 실행하는 React·Vue·Vanilla·MDX 예제와 JSON Schema 문서 구축, Cloudflare Workers 배포',
    ],
  },
  {
    name: 'meFit (미핏)',
    period: '2026.03 ~ 2026.06',
    role: '4인 팀 PM / Backend·Infra Lead / AI·Frontend · Django, DRF, Channels, k3s, AWS Lambda, pgvector, LiteLLM',
    description: '이력서·채용공고 기반 AI 가상 면접 훈련 플랫폼 (캡스톤 디자인 금상)',
    bullets: [
      'EC2 위 K3s 2노드 클러스터(nodepool 분리, RollingUpdate) 구성으로 EKS 대비 컨트롤 플레인 비용 절감',
      'S3 → SNS → SQS → Lambda 영상 분석, 이력서 병렬 분석 30~60초·개당 $0.006 및 SSE 진행 스트리밍',
      'RDS 커넥션 고갈 해결: Celery task 전후 연결 정리, SQLAlchemy 풀 제한, idle timeout 및 CloudWatch 알람',
      'pgvector 이중 임베딩(원문 청크 + 구조화 JSON) RAG 면접 질문 생성, Factory Boy + @patch 모킹 기반 테스트 커버리지 91%',
    ],
  },
  {
    name: '깜빡이 (Kkambbaki)',
    period: '2025.10 ~ 2025.11',
    role: 'BE / Infra · Django, Celery, Redis, K8s, ArgoCD, AWS',
    description: '아동 집중력 향상을 위한 AI 기반 게임형 에듀테크 플랫폼',
    bullets: [
      'Celery/Redis 비동기 AI 리포트 생성, LLM 연동 맞춤형 학습 조언 자동 생성',
      '홈랩 K8s + ArgoCD GitOps 배포 자동화(Alpha), AWS RDS-EC2 프로덕션 환경 구축',
      'GitHub Actions CI/CD 파이프라인, Swagger(OpenAPI 3.0) 문서 자동화',
    ],
  },
  {
    name: 'Athena',
    period: '2025.04 ~ 2025.06',
    role: '기획·단독 개발 · Django, Rust, Docker, gRPC, Celery, LLM',
    description: '인터랙티브 AI 알고리즘 학습 플랫폼 (크리에이터 경진대회 1등)',
    bullets: [
      'LLM 기반 소스 코드 분석 실시간 맞춤형 피드백 시스템 구현',
      'Docker 다중 언어(C++, Python, Ruby, Java) 격리 실행 환경 구축',
      'Celery 활용 solved.ac API 및 웹 파싱 기반 문제 수집 자동화 파이프라인',
      'MSA 설계 — Code Executor, Judger, Testcase Generator gRPC 기반 연동',
    ],
  },
  {
    name: 'Sellon',
    period: '2022.08',
    role: 'BE / Infra · Django, DRF, PostgreSQL, AWS EC2, Docker',
    description: '물건 경매 방식 교환 플랫폼 (멋쟁이사자처럼 10기 해커톤 동상)',
    bullets: [
      'Django/DRF API (user/product/auction/dealing 도메인), Signal 기반 counter cache로 N+1 제거',
      'docker-compose + nginx + AWS EC2 인프라, pipenv + pre-commit + ERD 자동 생성 협업 표준 수립',
    ],
  },
  {
    name: 'PeacePiece',
    period: '2022.07 ~ 2022.09',
    role: '팀리드 / 기획 / BE / FE / Infra · Django, DRF, React, AWS EC2/ELB',
    description: '환경 보호 활동 기반 가상 공간 꾸미기 게이미피케이션 플랫폼',
    bullets: [
      '6인 팀 리드, 기획·도메인 설계·API·인프라 전반 담당',
      'dj-rest-auth + simplejwt 인증, drf-yasg Swagger 자동 문서화, prefetch_related + annotate 리팩토링으로 글 목록 N+1 제거',
    ],
  },
]
