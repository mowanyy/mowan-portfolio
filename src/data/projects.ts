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
    description: 'A股超短连板复盘系统：盘后复盘 / 隔夜预案 / 开盘策略三时段 + DeepSeek 七章日报 + RAG 问答 + 多 Agent 会诊 + 飞书定时推送',
    longDescription: '自动采集东方财富行情，计算情绪温度、连板梯队与晋级率、题材运行周期、炸板净流入、龙虎榜游资等指标，由 DeepSeek 生成七章 Markdown 复盘报告；覆盖「盘后复盘 → 隔夜预案 → 开盘策略」三时段，支持 RAG 知识库问答（13 个数据工具）、Web 工作台、个人战法注入、多 Agent 通信，并通过 GitHub Actions 与本机计划任务推送摘要到飞书。',
    url: 'https://github.com/mowanyy/a-share-daily-review',
    stars: 0,
    forks: 0,
    language: 'Python',
    category: 'ai',
    tags: ['DeepSeek', 'LLM', 'RAG', '多Agent', '数据可视化'],
    featured: true,
    icon: '📈',
    status: 'active',
  },
  {
    id: 'boss-autosubmit',
    name: 'Boss Auto-Submit',
    description: 'Boss直聘 AI 自动投递助手：JD 智能匹配评分 + 全自动/半自动双模式 + 岗位黑名单分级 + Web 控制面板',
    longDescription: '自动搜索 Boss 直聘岗位，基于个人简历按技术栈、经验、薪资等多维度加权评分；支持全自动投递与人工审核两种模式，内置低质量岗位分级黑名单（永久/短期/观察）与超预期岗位收藏，配套 Flask Web 控制面板管理简历、配置与实时日志，通过浏览器扩展 CDP 协议控制浏览器。',
    url: 'https://github.com/mowanyy/boss-autosubmit',
    stars: 0,
    forks: 0,
    language: 'Python',
    category: 'automation',
    tags: ['自动化', '求职', 'DeepSeek', 'Flask', 'SQLite'],
    featured: true,
    icon: '🤖',
    status: 'active',
  },
  {
    id: 'agent-team',
    name: 'Agent Team 多智能体群聊',
    description: '基于 codex exec 的多 Agent 群聊协作系统：管理者拆解任务 → 多角色 Worker 真实执行 → 群聊实时汇报讨论',
    longDescription: '统一调度本机 codex exec 的多智能体协作系统。管理者（纯 LLM）负责任务拆解与分配，多个 Worker Agent 使用不同角色 Prompt 与模型，真实读写文件、执行命令并在群聊中实时汇报；管理者汇总结果，Worker 之间可就彼此结果讨论。后端 FastAPI + WebSocket 管理 asyncio 子进程，前端 React + Vite + TypeScript。',
    url: 'https://github.com/mowanyy/agent-team',
    stars: 0,
    forks: 0,
    language: 'Python',
    category: 'ai',
    tags: ['Multi-Agent', 'FastAPI', 'WebSocket', 'React', 'codex'],
    featured: true,
    icon: '👥',
    status: 'active',
  },
  {
    id: 'job-autofill',
    name: '网申自动填表助手',
    description: 'Chrome/Edge 浏览器扩展：上传简历后在招聘网申页一键填写，未覆盖字段可保存为站点记忆、下次自动复用',
    longDescription: '简历驱动的网申自动填表浏览器扩展。支持 .txt / .md / .docx / .pdf 简历解析，自动提取姓名、联系方式、学历院校与网申高频字段；适配隐藏单选、Element / Ant Design 下拉、iframe 内表单等常见控件；未匹配字段可在悬浮球补全并保存到「项目学习记忆」，实现自我迭代。所有资料仅保存在本机 chrome.storage.local，不上传服务器。',
    url: 'https://github.com/mowanyy',
    stars: 0,
    forks: 0,
    language: 'JavaScript',
    category: 'automation',
    tags: ['浏览器扩展', '简历', '自动填表', 'chrome.storage'],
    featured: false,
    icon: '📝',
    status: 'active',
  },
  {
    id: 'ai-video-pipeline',
    name: 'AI 视频流水线',
    description: '本机半自动 AI 视频生产流水线：选题 → 脚本 → 配音 → 字幕 → ffmpeg 合成 → 封面，发布走官方一键通道',
    longDescription: '将 B 站 AI 视频工作流调研落地的本机半自动流水线：RSS 选题聚合 + LLM 脚本生成（无 key 时回退本地模板）→ edge-tts 配音 → 按配音时长对齐 SRT 字幕 → ffmpeg 合成片段、混音、烧字幕并生成封面卡。零第三方 Python 依赖；发布环节走剪映/必剪官方一键通道并勾选 AI 生成声明，不做 Cookie 模拟投稿。',
    url: 'https://github.com/mowanyy',
    stars: 0,
    forks: 0,
    language: 'Python',
    category: 'ai',
    tags: ['LLM', 'edge-tts', 'ffmpeg', '内容自动化'],
    featured: false,
    icon: '🎬',
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
    url: 'https://github.com/mowanyy',
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