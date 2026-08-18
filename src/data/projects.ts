export interface Project {
  id: string
  name: string
  description: string
  longDescription: string
  url: string
  stars: number
  forks: number
  language: string
  category: 'ai' | 'automation' | 'data' | 'web' | 'learning'
  tags: string[]
  featured: boolean
  icon: string
  status: 'active' | 'archived' | 'learning'
}

export const projects: Project[] = [
  {
    id: 'a-share-daily-review',
    name: 'A-Share Daily Review',
    description: 'A股短线连板每日复盘：东方财富数据 + 情绪/题材/破局/龙虎榜指标 + DeepSeek LLM 七章日报 + 10日趋势看板',
    longDescription: '基于东方财富数据的A股短线复盘工具，集成DeepSeek大模型自动生成七章日报，包含情绪周期、题材分析、破局龙识别、龙虎榜追踪等核心指标，并生成10日趋势看板。',
    url: 'https://github.com/mowanyy/a-share-daily-review',
    stars: 0,
    forks: 0,
    language: 'Python',
    category: 'ai',
    tags: ['DeepSeek', 'LLM', '股票分析', '数据可视化', '东方财富'],
    featured: true,
    icon: '📈',
    status: 'active',
  },
  {
    id: 'boss-autosubmit',
    name: 'Boss Auto-Submit',
    description: 'Boss直聘自动投递工具，自动化求职流程',
    longDescription: '自动化Boss直聘平台的工作投递流程，支持批量投递、黑名单管理、定时任务等功能，提升求职效率。',
    url: 'https://github.com/mowanyy/boss-autosubmit',
    stars: 0,
    forks: 0,
    language: 'Python',
    category: 'automation',
    tags: ['自动化', '求职', '爬虫', 'GPL-3.0'],
    featured: true,
    icon: '🤖',
    status: 'active',
  },
  {
    id: 'tetuan-power-load',
    name: 'Tetuan Power Load Forecasting',
    description: '摩洛哥Tetuan城市电力负荷预测，基于时间序列分析的数据科学项目',
    longDescription: '使用Jupyter Notebook进行电力负荷预测分析，包括数据探索、特征工程、模型训练和评估等多个阶段，展示了完整的数据科学工作流程。',
    url: 'https://github.com/mowanyy/tetuan-power-load-forecasting',
    stars: 0,
    forks: 0,
    language: 'Jupyter Notebook',
    category: 'data',
    tags: ['数据科学', '时间序列', '预测', 'Jupyter'],
    featured: true,
    icon: '⚡',
    status: 'active',
  },
  {
    id: 'mowan-bookkeeping',
    name: 'MoWan 记账',
    description: '个人记账应用，管理日常收支',
    longDescription: '一个简洁的个人记账应用，支持收支记录、分类管理、数据统计等功能，帮助用户更好地管理财务。',
    url: 'https://github.com/mowanyy/mowan--',
    stars: 0,
    forks: 0,
    language: 'Python',
    category: 'web',
    tags: ['记账', 'Web', '个人工具'],
    featured: false,
    icon: '💰',
    status: 'archived',
  },
  {
    id: 'bill-book-pro',
    name: 'Bill Book Pro',
    description: '基于 Vue 3 的记账Web应用，完整的现代化前端项目',
    longDescription: '使用Vue 3 + Vite构建的现代化记账Web应用，包含账单管理、数据可视化、分类统计等功能，是学习Vue 3的实践项目。',
    url: 'https://github.com/mowanyy/mowan--',
    stars: 0,
    forks: 0,
    language: 'Vue',
    category: 'web',
    tags: ['Vue 3', 'Vite', '前端', 'TypeScript'],
    featured: false,
    icon: '📊',
    status: 'learning',
  },
  {
    id: 'llm-learning-roadmap',
    name: '大模型学习路线',
    description: '系统性的大模型学习路径：RAG → Agent → 微调与部署',
    longDescription: '从基础到进阶的大模型学习路线，涵盖RAG应用开发、Agent应用架构、模型微调与部署等核心主题，配套实战项目。',
    url: 'https://github.com/mowanyy',
    stars: 0,
    forks: 0,
    language: 'Python',
    category: 'learning',
    tags: ['LLM', 'RAG', 'Agent', '微调', '学习路径'],
    featured: false,
    icon: '🧠',
    status: 'learning',
  },
]

export const categories = [
  { id: 'all', label: '全部', icon: '📋' },
  { id: 'ai', label: 'AI', icon: '🤖' },
  { id: 'automation', label: '自动化', icon: '⚙️' },
  { id: 'data', label: '数据科学', icon: '📊' },
  { id: 'web', label: 'Web', icon: '🌐' },
  { id: 'learning', label: '学习', icon: '📚' },
] as const

export type CategoryId = (typeof categories)[number]['id']