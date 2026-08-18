export interface RoadmapItem {
  id: string
  stage: number
  title: string
  subtitle: string
  period: string
  description: string
  details: string[]
  icon: string
  color: string
  status: 'completed' | 'in-progress' | 'planned'
}

export const roadmap: RoadmapItem[] = [
  {
    id: 'stage-1',
    stage: 1,
    title: '基础知识储备',
    subtitle: 'Python + 机器学习基础',
    period: '2026.06',
    description: '夯实AI开发所需的基础知识体系',
    details: [
      'Python 高级编程与最佳实践',
      '机器学习与深度学习基础',
      'NLP 自然语言处理入门',
      'Transformer 架构理解',
    ],
    icon: '📚',
    color: '#6c63ff',
    status: 'completed',
  },
  {
    id: 'stage-2',
    stage: 2,
    title: 'RAG 应用开发',
    subtitle: '检索增强生成',
    period: '2026.07',
    description: '掌握RAG技术栈，构建知识增强的AI应用',
    details: [
      '向量数据库（ChromaDB, FAISS）',
      '文档解析与文本分块',
      'Embedding 模型选择与使用',
      'Prompt 工程与检索优化',
      '构建完整 RAG 应用',
    ],
    icon: '🔍',
    color: '#e040fb',
    status: 'in-progress',
  },
  {
    id: 'stage-3',
    stage: 3,
    title: 'Agent 应用架构',
    subtitle: '智能体开发',
    period: '2026.08',
    description: '学习Agent架构，构建能自主决策的AI系统',
    details: [
      'Agent 核心概念与设计模式',
      '工具调用与函数调用',
      '多Agent协作系统',
      '记忆与规划机制',
      'Agent 安全与边界控制',
    ],
    icon: '🤖',
    color: '#00d4ff',
    status: 'in-progress',
  },
  {
    id: 'stage-4',
    stage: 4,
    title: '微调与部署',
    subtitle: '模型优化与上线',
    period: '2026.09',
    description: '学习模型微调技术，掌握AI应用部署',
    details: [
      'LoRA / QLoRA 高效微调',
      'RLHF 与偏好对齐',
      '模型量化与推理优化',
      'Docker 容器化部署',
      'API 服务与监控体系',
    ],
    icon: '🚀',
    color: '#ff6b6b',
    status: 'planned',
  },
]