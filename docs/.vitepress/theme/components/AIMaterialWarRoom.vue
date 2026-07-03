<script setup lang="ts">
const researchEvidence = [
  {
    source: 'TikTok 创意最佳实践',
    finding: '平台建议以 TikTok 为先制作竖屏素材，在前 6 秒设置吸引点，并在前 3 秒抛出内容主张；同时建议每个广告组使用 3-5 个差异化创意，并持续焕新创意库。',
    implication: '昊七七烤冷面的素材系统不能只追求单条视频完成，而要把“钩子、画面、封面、CTA、二创版本”拆成可持续迭代的组件。',
    confidence: '外部依据支持',
    url: 'https://ads.tiktok.com/help/article/creative-best-practices?lang=zh'
  },
  {
    source: 'TikTok Split Testing',
    finding: 'TikTok Ads Manager 的 split testing 支持在保持其他变量一致的前提下，对受众进行拆分并比较广告版本表现。',
    implication: '实验分组必须避免一次改太多变量；封面、前 3 秒、视频叙事、承接链路应分开验证，减少误判。',
    confidence: '外部依据支持',
    url: 'https://ads.tiktok.com/help/article/split-testing?lang=en'
  },
  {
    source: 'YouTube 缩略图与标题建议',
    finding: '缩略图和标题通常是观众最先看到的信息，应准确表达内容、简洁易读，并在发布后结合数据评估。',
    implication: '封面不应是视频导出后的截图，而应作为“入口承诺”单独生成、审核和追踪。',
    confidence: '外部依据支持',
    url: 'https://support.google.com/youtube/answer/12340300?hl=en'
  },
  {
    source: 'YouTube CTR 解释',
    finding: 'CTR 需要结合曝光来源、样本量和观看时长判断；高 CTR 但低平均观看时长可能说明标题或封面存在点击诱导或承接不一致。',
    implication: '若封面点击率高但 3 秒留存低，优先检查视频开头是否兑现封面承诺，而不是直接判定封面有效。',
    confidence: '外部依据支持',
    url: 'https://support.google.com/youtube/answer/7628154?hl=en'
  },
  {
    source: '飞书多维表格与工作流',
    finding: '飞书多维表格可作为在线数据库管理记录，并可通过自动化/工作流实现数据变更后的指定动作。',
    implication: '素材实验主表适合承载任务流转、审核状态、素材资产、投放数据回写和复盘知识沉淀。',
    confidence: '外部依据支持',
    url: 'https://www.feishu.cn/hc/zh-CN/articles/697278684206-%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B%E5%A4%9A%E7%BB%B4%E8%A1%A8%E6%A0%BC'
  },
  {
    source: '飞书工作流 AI Agent 节点 / aily',
    finding: '飞书工作流可以使用 AI Agent 节点处理复杂业务场景，aily 强调为具体业务场景创建企业专属数字员工。',
    implication: 'AI 适合承担情报整理、评论洞察、脚本候选、封面候选、合规初筛和复盘摘要，但关键事实与发布权必须保留给人。',
    confidence: '外部依据支持',
    url: 'https://www.feishu.cn/hc/zh-CN/articles/643175485940-%E4%BD%BF%E7%94%A8%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%9A%84-ai-agent-%E8%8A%82%E7%82%B9'
  },
  {
    source: 'OpenAI Agents SDK / Function Calling',
    finding: 'Agents SDK 适合由运行时管理工具、handoff、guardrails、session 和多步骤协作；Function Calling 支持模型通过结构化工具调用连接业务系统。',
    implication: '如果后续做系统化落地，应把 Agent 输出约束成结构化字段，并通过人审节点进入飞书主表，而不是让模型自由发布。',
    confidence: '外部依据支持',
    url: 'https://openai.github.io/openai-agents-python/'
  },
  {
    source: '食品安全法相关条款',
    finding: '食品广告内容应真实合法，不得含有虚假内容，不得涉及疾病预防、治疗功能，食品生产经营者对真实性和合法性负责。',
    implication: '昊七七烤冷面作为普通食品，素材中禁止医疗化、功效化、治愈化表达；价格、库存、发货、规格和口味承诺必须被人工确认。',
    confidence: '强约束',
    url: 'https://www.customs.gov.cn/customs/2019-04/04/article_2025112022560135359.html'
  }
]

const loopSteps = [
  ['情报进入', '抓取竞品、评论、热词、平台趋势、历史投放痕迹，形成待验证素材机会。', '情报 Agent + 运营研究组', '情报样本包'],
  ['问题定义', '明确本轮只验证一个主问题，例如封面利益点、前 3 秒钩子或工厂信任画面。', '运营负责人', '实验立项口径'],
  ['变量拆解', '确定固定变量、实验变量、排除变量和失败归因口径，避免混合测试。', '运营研究组 + 数据组', '实验设计单'],
  ['部门供料', '工厂、供应链、客服、品控分别提供真实画面、可卖承诺、用户原话和风险边界。', '各业务小组', '素材组件包'],
  ['AI 扩展', '由 Agent 批量生成脚本、分镜、封面、标题、评论区承接话术和二创方向。', 'AI 编队', '候选稿池'],
  ['人工收敛', '人负责事实、审美、品牌、合规、价格库存和发布权，把候选稿收敛为可测版本。', '运营 + 设计 + 合规', '可测素材'],
  ['小量测试', '小预算进入市场，按实验编号回收曝光、点击、留存、互动、加购、成交和评论反馈。', '投放/渠道组', '首轮数据'],
  ['归因复盘', '根据指标判断问题层级，沉淀胜因、败因、可复用素材组件和下一轮实验。', '数据组 + 知识库 Agent', '复盘规则']
]

const experimentGroups = [
  {
    group: 'A. 封面入口组',
    question: '在相同视频内容下，哪类封面更能让目标用户愿意点进来？',
    fixed: '视频正文、投放计划、目标人群、SKU、价格、发布时间段尽量保持一致。',
    variable: '封面画面、封面标题、主体大小、利益点、场景表达。',
    sample: '同一条核心视频至少配置 4 类封面：结果前置、价格利益、工厂信任、场景代入。',
    owner: '封面/设计组 + 运营研究组',
    metric: '封面点击率、点击后 3 秒留存、负反馈、评论质疑。',
    failure: '点击率低优先判定封面吸引不足；点击率高但留存低，判定封面承诺与视频开头不一致。'
  },
  {
    group: 'B. 前 3 秒钩子组',
    question: '用户是否愿意在信息流中停下来继续看？',
    fixed: '封面、后段视频结构、SKU、价格承诺、链接承接尽量保持一致。',
    variable: '开头 3 秒的第一画面、第一句话、字幕密度、动作强度、结果是否前置。',
    sample: '同一卖点生成 5 个钩子版本：成品先出、价格先出、痛点先出、工厂先出、反常识先出。',
    owner: '视频制作组 + 脚本 Agent',
    metric: '3 秒留存、5 秒留存、前段滑走率、评论是否复述钩子。',
    failure: '3 秒留存低说明开头没有足够强画面或强理由；若点击率也低，需回到封面组重新验证。'
  },
  {
    group: 'C. 视频叙事组',
    question: '用户看完后是否理解“为什么现在要买昊七七烤冷面”？',
    fixed: '封面方向、前 3 秒钩子、SKU、价格和投放设置尽量保持一致。',
    variable: '叙事顺序、镜头密度、制作过程、人物出镜、工厂画面、场景冲突。',
    sample: '同一钩子至少测试 3 种叙事：夜宵制作、家庭囤货、源头工厂。',
    owner: '视频制作组 + 工厂素材组 + 分镜 Agent',
    metric: '完播率、平均观看时长、互动率、收藏率、评论问题类型。',
    failure: '完播低优先检查节奏和信息顺序；互动高但加购低，说明内容有兴趣但购买理由不足。'
  },
  {
    group: 'D. 商品/链接承接组',
    question: '用户点击或看完后，是否被商品页、价格、评价、规格和客服话术承接住？',
    fixed: '素材版本和投放设置尽量保持一致。',
    variable: '商品标题、主图、详情页顺序、优惠表达、规格组合、客服快捷回复。',
    sample: '胜出素材对应至少 2 套承接链路：价格囤货型、品质信任型。',
    owner: '店铺运营 + 供应链 + 客服',
    metric: '收藏加购率、转化率、客服咨询率、退款/差评苗头、库存预警。',
    failure: '点击和留存正常但成交低，应优先检查链接承接，不直接否定素材本身。'
  },
  {
    group: 'E. 投放归因组',
    question: '结果差异到底来自素材，还是来自人群、预算、计划结构或平台流量波动？',
    fixed: '按实验要求控制计划结构、预算、定向、出价和投放周期。',
    variable: '仅在需要时单独测试人群、出价或预算策略，不与素材变量混杂。',
    sample: '每个素材实验编号映射到唯一投放记录，避免后续无法追溯。',
    owner: '投放/数据组',
    metric: '曝光、点击、CTR、CPM、CPC、3 秒留存、完播、加购、成交、ROI、显著性判断。',
    failure: '样本不足或流量来源差异过大时，只记录趋势，不下最终结论。'
  }
]

const metricMatrix = [
  ['曝光不足', '投放组', '样本量不够，不能判断素材优劣。', '延长测试或调整预算，不进入胜败结论。'],
  ['封面点击率低', '封面入口组', '入口承诺不清、主体不突出、利益点弱或场景偏差。', '改封面标题、主体构图、利益点和安全区。'],
  ['点击高但 3 秒留存低', '封面 + 钩子组', '封面吸引了点击，但视频开头没有兑现承诺。', '重写前 3 秒，让第一画面直接承接封面。'],
  ['3 秒留存高但完播低', '视频叙事组', '用户被开头吸引，但中段节奏、冲突或信息顺序不成立。', '重排镜头顺序，减少废话，增加制作过程或结果反馈。'],
  ['完播高但加购低', '商品/链接承接组', '内容有观看价值，但购买理由、价格、规格或信任证据不足。', '调整卖点、组合、价格锚点、详情页和评价露出。'],
  ['加购高但成交低', '供应链/店铺运营', '优惠、库存、发货、评价、客服或支付路径存在阻碍。', '复核活动价、库存、物流承诺和客服话术。'],
  ['评论质疑集中', '客服 + 品控', '素材引发事实、口味、规格、卫生、价格或发货疑问。', '回写评论问题，补充详情页和客服标准回复。'],
  ['ROI 短期高但投诉升高', '合规 + 品控', '素材可能过度承诺或链接承接失真。', '暂停放量，复核事实、价格、图片和履约边界。']
]

const feishuTables = [
  {
    table: '素材实验主表',
    purpose: '承载每一轮实验的唯一编号、状态、负责人和关键结论。',
    fields: '实验编号、实验组、目标平台、SKU、目标人群、核心假设、状态、当前责任人、阻塞原因、最终结论。',
    trigger: '新建记录后通知运营研究组；状态变为待审核时触发人审；投放完成后触发复盘任务。'
  },
  {
    table: '假设库',
    purpose: '沉淀人群、场景、痛点、钩子、封面和卖点假设。',
    fields: '假设类型、假设描述、证据来源、适用 SKU、优先级、验证次数、胜出次数、淘汰原因。',
    trigger: '情报 Agent 每日追加候选假设；运营负责人只把通过筛选的假设推入实验主表。'
  },
  {
    table: '素材资产库',
    purpose: '管理工厂实拍、商品图、封面、脚本、分镜、成片和二创素材。',
    fields: '资产编号、资产类型、来源部门、适用场景、版权/授权、可用状态、关联实验、文件链接。',
    trigger: '上传新资产后由合规初筛；被胜出素材使用的资产自动标记为高价值组件。'
  },
  {
    table: '审核记录表',
    purpose: '记录事实、价格、库存、食品宣传、品牌表达和售后承接的人工审核结果。',
    fields: '审核对象、审核类型、审核人、结论、修改意见、风险等级、复核时间。',
    trigger: '任一审核项未通过时，实验主表回退到修改状态，不允许投放发布。'
  },
  {
    table: '投放数据回写表',
    purpose: '按实验编号回收曝光、点击、留存、互动、加购、成交、ROI 和评论反馈。',
    fields: '实验编号、计划编号、素材编号、曝光、点击、CTR、3 秒留存、完播、加购、成交、ROI、评论摘要。',
    trigger: '每日固定时间回写；数据不足自动标记为观察中；异常指标触发归因 Agent。'
  },
  {
    table: '知识规则库',
    purpose: '把胜出规律、失败规律、禁用表达和高价值组件沉淀为下一轮生产规则。',
    fields: '规则编号、规则类型、适用场景、证据实验、规则内容、置信度、失效条件、维护人。',
    trigger: '复盘通过后生成规则草案，必须由运营负责人确认后进入正式规则。'
  }
]

const agentWorkflows = [
  {
    agent: '类目情报 Agent',
    input: '竞品链接、热词、平台趋势、历史投放数据。',
    output: '竞品素材拆解、爆点样本、可疑跟风风险、每日情报摘要。',
    human: '运营负责人决定哪些情报进入假设库。'
  },
  {
    agent: '评论洞察 Agent',
    input: '客服咨询、好评、差评、退款原因、评论区问题。',
    output: '用户原话聚类、购买理由、犹豫点、异议处理建议。',
    human: '客服主管确认话术是否真实、是否可承接。'
  },
  {
    agent: '脚本 Agent',
    input: '实验假设、SKU 信息、用户痛点、禁用表达。',
    output: '钩子、口播、剧情、测评、工厂信任脚本候选。',
    human: '运营和视频负责人筛选并改写为可拍版本。'
  },
  {
    agent: '封面 Agent',
    input: '视频主题、目标人群、封面协议、商品图和工厂图。',
    output: '封面标题、构图草案、主体说明、变体提示词。',
    human: '设计师精修画面，品控确认图片和文字不误导。'
  },
  {
    agent: '分镜 Agent',
    input: '脚本、素材资产、拍摄条件、平台安全区要求。',
    output: '镜头清单、拍摄动作、道具需求、补拍缺口。',
    human: '视频制作组决定实际拍摄和剪辑节奏。'
  },
  {
    agent: '合规 Agent',
    input: '封面、脚本、口播、商品承诺、详情页文案。',
    output: '风险提示、禁用表达、需人工复核项。',
    human: '合规/品控拥有最终否决权，AI 不直接放行。'
  },
  {
    agent: '投放分析 Agent',
    input: '投放回写数据、实验变量、评论反馈。',
    output: '胜败因初判、下一轮变量建议、样本不足提示。',
    human: '投放负责人决定是否放量、暂停或继续观察。'
  },
  {
    agent: '知识库 Agent',
    input: '复盘结论、审核意见、胜出素材、失败样本。',
    output: '规则草案、禁用清单、可复用组件索引。',
    human: '运营负责人确认后才写入正式知识规则库。'
  }
]

const departmentRaci = [
  ['运营研究组', 'A/R', '定义研究问题、实验变量、优先级和最终去留。', '不能跳过供应链、品控和投放口径直接发布。'],
  ['工厂/仓库素材组', 'R', '提供生产、质检、打包、发货等真实画面和补拍素材。', '不承担夸张卖点创造，不承诺超出生产事实的内容。'],
  ['产品/供应链组', 'A/R', '确认 SKU、规格、口味、库存、价格、交期、活动边界。', '价格、库存和发货承诺未确认时，素材不得发布。'],
  ['客服洞察组', 'R/C', '提供用户原话、异议、差评原因和评论区承接话术。', '不得把个别极端评论直接当成普遍结论。'],
  ['封面/设计组', 'R', '根据封面协议产出多版本封面，检查安全区和文字可读性。', '不得为了点击制造与视频或商品不一致的承诺。'],
  ['视频制作组', 'R', '完成分镜、拍摄、剪辑、二创和源文件归档。', '不得把未经确认的 AI 生成内容当成真实工厂或真实用户。'],
  ['品控/合规组', 'A/R', '审核食品宣传、产品事实、价格承诺、平台风险和禁用表达。', '拥有一票否决权；普通食品不得医疗化、功效化。'],
  ['投放/渠道组', 'R', '建立测试计划、控制变量、回收数据、判断样本是否足够。', '不得在样本不足时宣布爆款结论。'],
  ['数据/知识库组', 'R/C', '维护字段、归因规则、复盘报告和规则库。', '不得只记录结果，不记录变量和失败原因。'],
  ['AI Agent 编队', 'R', '放大候选数量、结构化信息、提出初步归因和复盘草案。', '只输出候选和分析，不拥有事实确认、发布和放量权。']
]

const timelineScale = [
  { label: 'T0', note: '实验启动' },
  { label: '0.5h', note: '变量锁定' },
  { label: '2h', note: '部门供料' },
  { label: '4h', note: 'AI 候选' },
  { label: '6h', note: '人工收敛' },
  { label: '8h', note: '审核发布' },
  { label: '24h', note: '首轮回收' },
  { label: '48h', note: '稳定观察' },
  { label: '72h', note: '复盘决策' },
  { label: 'T+4', note: '规则沉淀' }
]

const expandedTimeline = [
  {
    phase: '生产推进',
    group: '运营研究组',
    duty: '把需求变成可验证实验',
    bars: [
      { start: 1, end: 3, label: '立项与变量锁定', type: 'decision', output: '实验设计单' },
      { start: 5, end: 6, label: '候选版本收敛', type: 'review', output: '可测清单' },
      { start: 9, end: 11, label: '复盘与下一轮立项', type: 'decision', output: '下一轮假设' }
    ]
  },
  {
    phase: '生产推进',
    group: '工厂/仓库素材组',
    duty: '交付真实画面证据',
    bars: [
      { start: 2, end: 4, label: '生产/质检/打包实拍', type: 'work', output: '真实素材包' },
      { start: 4, end: 5, label: '缺口补拍', type: 'work', output: '补充镜头' },
      { start: 5, end: 6, label: '事实复核', type: 'review', output: '事实确认' }
    ]
  },
  {
    phase: '生产推进',
    group: '供应链/产品组',
    duty: '确认能卖什么和能承诺什么',
    bars: [
      { start: 1, end: 3, label: 'SKU/规格/库存/价格确认', type: 'review', output: '承诺边界' },
      { start: 6, end: 7, label: '发布前库存复核', type: 'review', output: '可发布' },
      { start: 7, end: 9, label: '履约风险监测', type: 'data', output: '预警记录' }
    ]
  },
  {
    phase: '生产推进',
    group: '客服洞察组',
    duty: '把用户语言转成素材输入',
    bars: [
      { start: 1, end: 3, label: '咨询/差评/好评原话提取', type: 'work', output: '用户原话' },
      { start: 5, end: 6, label: '评论承接话术审核', type: 'review', output: '标准回复' },
      { start: 7, end: 10, label: '评论区新问题回收', type: 'data', output: '新痛点' }
    ]
  },
  {
    phase: '生产推进',
    group: 'AI Agent 编队',
    duty: '扩大候选空间并结构化输出',
    bars: [
      { start: 2, end: 4, label: '情报/评论/脚本/封面候选', type: 'ai', output: '候选池' },
      { start: 4, end: 5, label: '分镜与提示词整理', type: 'ai', output: '生产清单' },
      { start: 8, end: 10, label: '胜败因初判', type: 'ai', output: '归因草案' }
    ]
  },
  {
    phase: '生产推进',
    group: '封面/设计组',
    duty: '验证入口承诺',
    bars: [
      { start: 3, end: 5, label: '四类封面生成', type: 'ai', output: '封面候选' },
      { start: 5, end: 6, label: '精修与安全区检查', type: 'work', output: '可测封面' },
      { start: 7, end: 9, label: '封面 CTR 归因', type: 'data', output: '封面结论' }
    ]
  },
  {
    phase: '生产推进',
    group: '视频制作组',
    duty: '把假设变成可测视频',
    bars: [
      { start: 3, end: 4, label: '分镜和拍摄清单', type: 'work', output: '分镜稿' },
      { start: 4, end: 6, label: '拍摄/粗剪/二创', type: 'work', output: '视频版本' },
      { start: 6, end: 7, label: '源文件归档', type: 'work', output: '资产记录' }
    ]
  },
  {
    phase: '验证投放',
    group: '品控/合规组',
    duty: '保护事实和食品宣传边界',
    bars: [
      { start: 2, end: 3, label: '禁用表达预审', type: 'review', output: '风险边界' },
      { start: 5, end: 7, label: '视频/封面/话术终审', type: 'review', output: '审核结论' }
    ]
  },
  {
    phase: '验证投放',
    group: '投放/渠道组',
    duty: '控制变量并回收市场投票',
    bars: [
      { start: 5, end: 6, label: '计划映射实验编号', type: 'work', output: '投放计划' },
      { start: 6, end: 9, label: '小预算测试与观察', type: 'data', output: '首轮数据' },
      { start: 9, end: 10, label: '放量/暂停/继续观察', type: 'decision', output: '投放决策' }
    ]
  },
  {
    phase: '复盘迭代',
    group: '数据/知识库组',
    duty: '沉淀可复用规则',
    bars: [
      { start: 7, end: 9, label: '数据清洗与异常标记', type: 'data', output: '可用数据' },
      { start: 9, end: 10, label: '胜败因复盘会', type: 'decision', output: '复盘结论' },
      { start: 10, end: 11, label: '规则入库', type: 'data', output: '知识规则' }
    ]
  }
]

const coverProtocols = [
  {
    type: '结果前置型',
    hypothesis: '用户先看到成品状态，更容易判断是否值得点开。',
    prompt: '近景成品烤冷面，酱汁明亮，切面清楚，主体占画面 60% 以上，文字只写一个结果承诺。',
    fixed: '视频内容、SKU、价格和投放人群保持一致。',
    risk: '成品必须与真实可制作效果一致，不能用豪华加料伪装基础款。',
    metric: '封面 CTR、3 秒留存、评论是否质疑“图文不符”。'
  },
  {
    type: '价格利益型',
    hypothesis: '囤货和低单顿成本会降低决策门槛。',
    prompt: '多袋装平铺、冰箱或家庭餐桌场景、明确规格和活动利益，文字短而可核验。',
    fixed: '价格、规格、优惠时间必须与链接一致。',
    risk: '活动价结束后不能继续使用旧封面，避免价格误导。',
    metric: 'CTR、加购率、成交率、客服价格咨询量。'
  },
  {
    type: '工厂信任型',
    hypothesis: '食品用户对源头、卫生、发货稳定性有明显顾虑。',
    prompt: '生产线、质检、打包三段式画面，标题强调“工厂实拍”“配料可见”。',
    fixed: '所有画面来自真实工厂或经授权素材。',
    risk: '不得暗示超出资质范围的安全背书，不得使用绝对化安全承诺。',
    metric: 'CTR、完播、评论信任问题、转化率。'
  },
  {
    type: '场景代入型',
    hypothesis: '夜宵、宿舍、孩子加餐等具体场景比泛卖点更容易触发点击。',
    prompt: '人物手部动作、锅具或餐桌道具、明确场景短句，画面保留生活真实感。',
    fixed: '场景人群与投放人群保持一致。',
    risk: '避免过度摆拍，避免把个别场景包装成普遍承诺。',
    metric: 'CTR、3 秒留存、收藏率、评论自我代入表达。'
  }
]

const decisionRules = [
  ['数据不足', '曝光、点击或转化样本太少。', '不做胜败结论，只记录趋势和继续观察条件。'],
  ['封面失败', '封面 CTR 明显低于同组其他版本，且视频后段数据无判断价值。', '保留视频，重做封面和标题。'],
  ['钩子失败', 'CTR 尚可但 3 秒留存低。', '重写第一画面、第一句话和字幕，不急着重剪全片。'],
  ['叙事失败', '3 秒留存正常但完播低。', '压缩中段、提高镜头密度、调整卖点顺序。'],
  ['购买理由失败', '完播或互动正常但收藏加购低。', '补价格锚点、规格解释、口味利益和家庭/夜宵场景。'],
  ['链接承接失败', '加购高但成交低，或客服咨询集中在规格、价格、发货。', '优化详情页、主图、优惠、客服话术和库存展示。'],
  ['合规风险', '出现医疗化、功效化、绝对化、价格不一致或图文不符。', '立即暂停，进入合规复核，不参与放量。'],
  ['可放量', '点击、留存、加购、成交和评论风险同时达标，且供应链可承接。', '增加预算，并同步启动二创和跨平台改写。']
]

const firstRoundHypotheses = [
  ['夜宵场景', '东北夜市同款，在家 5 分钟开摊', '铁板声、刷酱、卷起切开、热气近景。', '验证场景代入能否提升 3 秒留存和收藏。'],
  ['家庭囤货', '外卖一顿的钱，囤几顿烤冷面', '冰箱抽屉、多袋装、加蛋火腿快速出餐。', '验证价格利益能否提升加购和成交。'],
  ['工厂信任', '工厂实拍，配料和打包给你看', '生产、质检、装箱、发货连续镜头。', '验证真实生产证据是否提升转化和评论信任。'],
  ['孩子加餐', '放学饿了，几分钟做一份热乎的', '厨房制作、家长递餐、分食场景。', '验证家庭人群是否更稳定，但需避免营养功效化表达。'],
  ['宿舍/懒人', '不用大厨具，也能做一份烤冷面', '小锅、空气炸锅或电煎锅场景，操作步骤简短。', '验证低门槛制作是否提高完播和收藏。']
]

function barStyle(bar: { start: number; end: number }) {
  return {
    gridColumn: `${bar.start} / ${bar.end}`
  }
}
</script>

<template>
  <section class="ai-war-room report-layout">
    <header class="report-header">
      <p class="report-kicker">昊七七烤冷面 / AI 爆款素材企业化工作流 / 研究报告草案</p>
      <h1>建立一套可执行、可追踪、可复盘的爆款素材生产系统</h1>
      <p>
        本报告不是展示页，也不是宣传文案，而是一份内部研究底稿。当前目标只有一个：围绕昊七七烤冷面建立一套多部门协同的素材实验系统，让公司可以持续提出假设、批量生产候选素材、用真实投放验证、用复盘沉淀规则，并逐步提高胜出素材发现率。
      </p>
      <p>
        本稿的所有经营判断均按“待验证假设”处理；外部平台和工具资料只作为方法依据，不代表昊七七烤冷面已经获得相同结果。所谓“完美”，在这里不指承诺每条视频都爆，而是指组织流程足够严谨：部门不空转、变量可归因、风险可审核、数据可回写、经验可复用。
      </p>
      <dl class="report-method">
        <div>
          <dt>主战场</dt>
          <dd>抖音电商/短视频带货优先，淘系和其他平台作为扩展参考。</dd>
        </div>
        <div>
          <dt>研究对象</dt>
          <dd>视频内容、封面入口、商品链接承接、投放归因、部门协作机制。</dd>
        </div>
        <div>
          <dt>核心原则</dt>
          <dd>AI 负责扩大候选空间和结构化信息，人负责事实、合规、价格、库存、发布和放量。</dd>
        </div>
      </dl>
    </header>

    <section class="report-section">
      <h2>一、研究依据与可采纳结论</h2>
      <p>
        当前阶段不使用“经验判断”直接替代研究结论。下表把外部资料拆成可采纳的方法依据，并明确它们对昊七七烤冷面素材系统的影响。后续真实投放数据回收后，应把这些外部依据降级为背景，把公司自有实验结果升级为主证据。
      </p>
      <table class="report-table">
        <thead>
          <tr>
            <th>资料来源</th>
            <th>可采纳发现</th>
            <th>对本方案的影响</th>
            <th>证据等级</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in researchEvidence" :key="item.source">
            <td><a :href="item.url" target="_blank" rel="noreferrer">{{ item.source }}</a></td>
            <td>{{ item.finding }}</td>
            <td>{{ item.implication }}</td>
            <td>{{ item.confidence }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="report-section">
      <h2>二、素材实验闭环</h2>
      <p>
        企业化素材生产不应以“今天做了几条视频”为核心指标，而应以“今天验证了哪些假设，并沉淀了哪些可复用规则”为核心指标。一条素材从情报到复盘至少需要八个环节，每个环节必须有负责人、输入、输出和可检查状态。
      </p>
      <table class="report-table">
        <thead>
          <tr>
            <th>环节</th>
            <th>研究目的</th>
            <th>责任主体</th>
            <th>交付物</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="step in loopSteps" :key="step[0]">
            <td>{{ step[0] }}</td>
            <td>{{ step[1] }}</td>
            <td>{{ step[2] }}</td>
            <td>{{ step[3] }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="report-section">
      <h2>三、分组验证实验矩阵</h2>
      <p>
        第一轮不追求一次性证明所有方向，而是把素材结果拆成五组并行实验。每组只回答一个问题，尽量固定其他变量。这样做的意义是：当结果不好时，公司知道应该改封面、改钩子、改视频、改链接，还是改投放结构。
      </p>
      <table class="report-table experiment-table">
        <thead>
          <tr>
            <th>实验组</th>
            <th>核心问题</th>
            <th>固定变量</th>
            <th>实验变量</th>
            <th>样本要求</th>
            <th>负责人</th>
            <th>主指标</th>
            <th>失败归因</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in experimentGroups" :key="item.group">
            <td>{{ item.group }}</td>
            <td>{{ item.question }}</td>
            <td>{{ item.fixed }}</td>
            <td>{{ item.variable }}</td>
            <td>{{ item.sample }}</td>
            <td>{{ item.owner }}</td>
            <td>{{ item.metric }}</td>
            <td>{{ item.failure }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="report-section">
      <h2>四、指标归因规则</h2>
      <p>
        数据复盘不能只写“好”或“不好”。真正有用的复盘必须把异常指标定位到具体层级。下表用于把投放结果转化为下一步动作，避免素材团队、投放团队和店铺运营互相甩锅。
      </p>
      <table class="report-table">
        <thead>
          <tr>
            <th>观察信号</th>
            <th>优先归因对象</th>
            <th>初步解释</th>
            <th>下一步动作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in metricMatrix" :key="row[0]">
            <td>{{ row[0] }}</td>
            <td>{{ row[1] }}</td>
            <td>{{ row[2] }}</td>
            <td>{{ row[3] }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="report-section">
      <h2>五、多部门责任矩阵</h2>
      <p>
        “每个部门都不闲着”不等于每个部门都去做视频。更准确的组织方式是：每个部门在自己掌握事实的地方承担责任。工厂负责真实画面，供应链负责可兑现承诺，客服负责用户原话，设计负责入口表达，视频负责内容承接，投放负责市场验证，数据负责复盘结构，AI 负责放大候选但不拥有发布权。
      </p>
      <table class="report-table">
        <thead>
          <tr>
            <th>部门/角色</th>
            <th>RACI</th>
            <th>必须贡献</th>
            <th>不可越界</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in departmentRaci" :key="row[0]">
            <td>{{ row[0] }}</td>
            <td>{{ row[1] }}</td>
            <td>{{ row[2] }}</td>
            <td>{{ row[3] }}</td>
          </tr>
        </tbody>
      </table>
      <p class="report-note">
        R 表示 Responsible，负责具体执行；A 表示 Accountable，对结果负责；C 表示 Consulted，提供咨询或审核意见。素材发布前至少需要运营、供应链、品控/合规三类 A/R 角色闭环。
      </p>
    </section>

    <section class="report-section">
      <h2>六、多维时间轴：生产推进、投放验证、复盘迭代</h2>
      <p>
        下图不是日程排班，而是单个素材实验启动后的多维推进关系。横轴为任务启动后的相对时间，纵轴为部门或小组泳道。图中可以看到哪些工作能够并行，哪些工作必须等待前置输入，哪些审核点会阻塞后续发布。
      </p>
      <div class="swimlane-board swimlane-board--expanded report-chart">
        <div class="time-ruler">
          <div class="lane-label ruler-label">小组</div>
          <div class="ruler-grid">
            <div v-for="tick in timelineScale" :key="tick.label" class="time-tick">
              <strong>{{ tick.label }}</strong>
              <span>{{ tick.note }}</span>
            </div>
          </div>
        </div>
        <article v-for="lane in expandedTimeline" :key="`${lane.phase}-${lane.group}`" class="swimlane-row">
          <div class="lane-label">
            <em>{{ lane.phase }}</em>
            <strong>{{ lane.group }}</strong>
            <span>{{ lane.duty }}</span>
          </div>
          <div class="lane-track">
            <div
              v-for="bar in lane.bars"
              :key="`${lane.group}-${bar.label}`"
              class="lane-bar"
              :class="`lane-bar--${bar.type}`"
              :style="barStyle(bar)"
            >
              <strong>{{ bar.label }}</strong>
              <span>{{ bar.output }}</span>
            </div>
          </div>
        </article>
      </div>
      <div class="swimlane-legend">
        <span><i class="legend-work"></i>部门执行</span>
        <span><i class="legend-ai"></i>AI 辅助</span>
        <span><i class="legend-review"></i>人工审核</span>
        <span><i class="legend-data"></i>数据回收</span>
        <span><i class="legend-decision"></i>经营决策</span>
      </div>
    </section>

    <section class="report-section">
      <h2>七、封面生成协议</h2>
      <p>
        封面必须被视为独立实验变量。它的任务不是“好看”，而是在不误导的前提下准确表达入口承诺。同一条核心视频至少应同时测试四类封面，且每个封面版本都要记录标题、主体、构图、利益点、审核风险和封面点击率。
      </p>
      <table class="report-table">
        <thead>
          <tr>
            <th>封面类型</th>
            <th>待验证假设</th>
            <th>生成方向</th>
            <th>固定条件</th>
            <th>审核风险</th>
            <th>指标</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in coverProtocols" :key="item.type">
            <td>{{ item.type }}</td>
            <td>{{ item.hypothesis }}</td>
            <td>{{ item.prompt }}</td>
            <td>{{ item.fixed }}</td>
            <td>{{ item.risk }}</td>
            <td>{{ item.metric }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="report-section">
      <h2>八、AI Agent 编队与人审边界</h2>
      <p>
        AI 在这套系统里不是“代替部门的人”，而是“放大部门输入的候选空间”。所有 Agent 必须输出结构化字段，进入飞书表后再由对应人工节点确认。对于食品类电商，事实确认、合规判断、价格库存、售后承诺、发布和放量必须由人负责。
      </p>
      <table class="report-table">
        <thead>
          <tr>
            <th>Agent</th>
            <th>输入</th>
            <th>输出</th>
            <th>人工边界</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="agent in agentWorkflows" :key="agent.agent">
            <td>{{ agent.agent }}</td>
            <td>{{ agent.input }}</td>
            <td>{{ agent.output }}</td>
            <td>{{ agent.human }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="report-section">
      <h2>九、飞书企业化落地表结构</h2>
      <p>
        飞书落地不应只建一个“素材表”。更合理的做法是把素材实验拆成主表、假设库、资产库、审核记录、数据回写和知识规则库。这样任务流转、人工审核、AI 生成、投放数据和复盘知识才能互相引用。
      </p>
      <table class="report-table">
        <thead>
          <tr>
            <th>数据表</th>
            <th>用途</th>
            <th>核心字段</th>
            <th>工作流触发</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in feishuTables" :key="item.table">
            <td>{{ item.table }}</td>
            <td>{{ item.purpose }}</td>
            <td>{{ item.fields }}</td>
            <td>{{ item.trigger }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="report-section">
      <h2>十、昊七七烤冷面首轮实验假设</h2>
      <p>
        首轮假设应选择能覆盖不同购买动机的方向，而不是只围绕同一种卖点反复改文案。以下假设均需通过真实投放验证，不能在验证前写成确定结论。
      </p>
      <table class="report-table">
        <thead>
          <tr>
            <th>方向</th>
            <th>钩子</th>
            <th>核心画面</th>
            <th>测试目的</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in firstRoundHypotheses" :key="row[0]">
            <td>{{ row[0] }}</td>
            <td>{{ row[1] }}</td>
            <td>{{ row[2] }}</td>
            <td>{{ row[3] }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="report-section">
      <h2>十一、数据决策规则</h2>
      <p>
        素材复盘会只允许输出四类结论：继续观察、淘汰、二创、放量。任何结论都必须绑定实验编号、变量、样本量、指标和下一步动作。不能只凭主观感受说“这条有爆款感”。
      </p>
      <table class="report-table">
        <thead>
          <tr>
            <th>决策状态</th>
            <th>触发条件</th>
            <th>动作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in decisionRules" :key="row[0]">
            <td>{{ row[0] }}</td>
            <td>{{ row[1] }}</td>
            <td>{{ row[2] }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="report-section report-conclusion">
      <h2>十二、当前研究结论</h2>
      <p>
        当前最重要的结论是：昊七七烤冷面的爆款素材能力，不应被理解为“找到一个万能脚本”，而应被理解为“搭建一套持续发现有效素材元素的组织系统”。AI 的价值是扩展候选方向、提高信息整理速度和降低二创成本；部门协作的价值是把真实生产、供应链承诺、用户反馈、食品合规和市场数据接入同一张实验台。
      </p>
      <p>
        下一步进入真实执行时，应先用少量预算跑通一轮完整闭环：一轮实验、五个分组、四类封面、多个钩子、明确人审、数据回写、复盘入库。只有当这条链路跑通，公司才真正拥有可企业化复制的爆款素材生产能力。
      </p>
    </section>
  </section>
</template>
