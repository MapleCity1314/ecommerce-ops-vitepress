<script setup lang="ts">
const evidence = [
  {
    source: '巨量千川/巨量引擎短视频素材资料',
    use: '抖音电商优先时，素材研究不能只停留在通用短视频逻辑，应把商品展示、真实场景、字幕清晰、素材储备和评论管理纳入执行设计。',
    url: 'https://www.oceanengine.com/blog/juliang-qianchuan-baokuan-wenan.html'
  },
  {
    source: 'TikTok Ads Creative Best Practices',
    use: '短视频广告需要持续补充和焕新创意，素材系统应以多版本候选和持续复盘为基础，而不是追求一次性命中。',
    url: 'https://ads.tiktok.com/help/article/creative-best-practices'
  },
  {
    source: 'TikTok Ads Split Testing',
    use: 'A/B 或 split test 的关键是保持其他变量一致，并让不同受众只看到对应版本，因此第一轮必须压缩变量。',
    url: 'https://ads.tiktok.com/help/article/split-testing?lang=en'
  },
  {
    source: 'YouTube 缩略图与标题建议',
    use: '封面和标题必须准确代表内容；若入口承诺和内容承接不一致，后续观看表现会受影响。该原则可迁移为封面审核规则。',
    url: 'https://support.google.com/youtube/answer/12340300?hl=en'
  },
  {
    source: '飞书多维表格字段/工作流/权限文档',
    use: '多维表格字段、工作流和角色权限可承载实验主表、状态流转、数据回写、人审节点和部门权限边界。',
    url: 'https://www.feishu.cn/hc/zh-CN/articles/541575577400-%E4%BD%BF%E7%94%A8%E5%A4%9A%E7%BB%B4%E8%A1%A8%E6%A0%BC%E5%AD%97%E6%AE%B5'
  },
  {
    source: 'OpenAI Function Calling / Agents SDK',
    use: 'Agent 输出必须结构化，并保留 guardrails、handoff、tracing 和人工审核记录，不能让模型直接发布或放量。',
    url: 'https://developers.openai.com/api/docs/guides/function-calling'
  },
  {
    source: '食品广告与绝对化用语合规资料',
    use: '普通食品不得涉及疾病预防、治疗功能，不得虚假宣传；广告绝对化用语也需要纳入素材审核清单。',
    url: 'https://scjgj.beijing.gov.cn/zwxx/scjgdt/202510/t20251021_4234743.html'
  }
]

const repairMatrix = [
  ['实验范围过大', '第一轮从五组并行验证收缩为 1 个 SKU、2 类人群、2 类封面、2 类前 3 秒钩子的 2x2x2 最小实验。', '避免变量爆炸，让第一轮可以在真实团队里跑完并复盘。'],
  ['部门全参与容易空转', '把部门参与改为轻量、标准、高风险三级任务。非关键部门只在触发条件出现时介入。', '保留多部门协作，但减少不必要会议和等待。'],
  ['时间轴过于理想化', '拆成现有素材快测和新拍生产两种模式，同一张泳道图标出并行、等待和审核阻塞点。', '能看清一份工作启动后各小组如何推进。'],
  ['飞书只到表名层级', '补充字段字典、字段类型、必填性、责任人、更新时间、权限角色和状态流。', '可以直接按字段搭表，而不是停留在概念。'],
  ['Agent 边界不够可控', '每个 Agent 输出固定字段，必须带事实来源、风险标签和置信度；发布、价格、库存、合规、放量仍由人负责。', '降低幻觉、误导封面和错误承诺风险。'],
  ['封面生成有误导风险', '封面单独建表，记录入口承诺、内容兑现位置和误导风险；高点击低留存时优先判定承接失败。', '不把封面当截图，也不把高点击当胜出。'],
  ['指标缺少经营后果', '加入毛利、退款、投诉、客服压力、库存安全和供应链承接。', '防止短期 ROI 好但履约风险上升。'],
  ['缺少公司基线', '列出必须补齐的 SKU、价格、毛利、库存、历史素材、客诉、竞品和承接页事实包。', '不虚构数据，用事实包约束第一轮实验。']
]

const firstLoopCells = [
  ['A1', '家庭囤货', '价格利益封面', '成品先出钩子', '同一 SKU、同一视频主体、同一承接页、同一预算上限', '验证价格利益对家庭囤货人群的入口吸引。'],
  ['A2', '家庭囤货', '价格利益封面', '工厂信任钩子', '同上', '验证价格入口后是否需要信任开头承接。'],
  ['A3', '家庭囤货', '工厂信任封面', '成品先出钩子', '同上', '验证工厂入口与成品结果是否形成更稳妥承诺。'],
  ['A4', '家庭囤货', '工厂信任封面', '工厂信任钩子', '同上', '验证信任型入口和信任型开头是否过重或有效。'],
  ['B1', '夜宵/宿舍', '价格利益封面', '成品先出钩子', '同上', '验证低门槛消费场景是否更受价格和成品刺激。'],
  ['B2', '夜宵/宿舍', '价格利益封面', '工厂信任钩子', '同上', '验证年轻场景下信任信息是否拖慢前 3 秒。'],
  ['B3', '夜宵/宿舍', '工厂信任封面', '成品先出钩子', '同上', '验证工厂入口是否能提升食品安全信任。'],
  ['B4', '夜宵/宿舍', '工厂信任封面', '工厂信任钩子', '同上', '验证信任型完整链路是否适合夜宵/宿舍人群。']
]

const baselineFacts = [
  ['SKU 事实', '口味、规格、净含量、保质期、储存方式、生产资质、发货地', '供应链/品控', '无事实包不得生成脚本和封面'],
  ['价格事实', '日常价、活动价、券后价、组合装价、价格有效期、是否包邮', '店铺运营/财务', '所有价格文案必须与链接一致'],
  ['毛利事实', '单包成本、履约成本、平台扣点、投放可承受 CPA/ROI 底线', '财务/投放', '决定是否允许放量，不进入对外文案'],
  ['库存事实', '可售库存、日发货上限、补货周期、临期风险', '供应链/仓配', '库存不足时禁止放量'],
  ['历史素材', '过往封面、脚本、投放数据、评论、差评、退款原因', '运营/客服/数据', '用于避免重复踩坑'],
  ['竞品样本', '同类烤冷面价格、封面、开头、评论质疑、承接页结构', '运营研究', '仅做拆解，不照搬表达'],
  ['合规事实', '禁用词、可证明卖点、不可承诺项、平台审核记录', '合规/品控', '进入所有 Agent 的规则库']
]

const taskTiers = [
  ['轻量快测', '使用已有工厂图、商品图、历史视频片段，不新增拍摄。', '运营、设计、投放、数据、AI Agent', '工厂/供应链仅确认事实包；客服只补历史问题。', '适合 24-48 小时跑通闭环。'],
  ['标准生产', '需要补拍产品制作、包装、发货或使用场景。', '运营、工厂、供应链、设计、视频、合规、投放、数据、AI Agent', '客服提供评论原话；品控审核工厂画面。', '适合生成可复用素材资产。'],
  ['高风险实验', '涉及价格强承诺、生产资质、儿童/老人场景、健康暗示、极限利益点。', '运营、合规、法务/负责人、供应链、客服、投放、数据', 'AI 只能做初筛和风险标注，不能生成最终发布稿。', '未过审不得投放。']
]

const timelineScale = [
  { label: 'T0', note: '立项' },
  { label: 'T+2h', note: '事实锁定' },
  { label: 'T+6h', note: '候选生成' },
  { label: 'T+12h', note: '人审收敛' },
  { label: 'T+24h', note: '小量上线' },
  { label: 'T+36h', note: '观察回写' },
  { label: 'T+48h', note: '复盘决策' }
]

const timeline = [
  {
    group: '运营研究',
    duty: '定义变量、锁定实验单',
    bars: [
      { start: 1, end: 2, type: 'work', label: '实验立项', output: '1SKU/2人群/2封面/2钩子' },
      { start: 6, end: 8, type: 'decision', label: '复盘决策', output: '淘汰/二创/放量' }
    ]
  },
  {
    group: '供应链/品控',
    duty: '确认事实和履约边界',
    bars: [
      { start: 1, end: 3, type: 'review', label: '事实包确认', output: '规格/库存/资质/发货' },
      { start: 4, end: 5, type: 'review', label: '素材复核', output: '画面和承诺一致' }
    ]
  },
  {
    group: '客服',
    duty: '提供用户原话和风险问题',
    bars: [
      { start: 2, end: 3, type: 'work', label: '评论归类', output: '购买理由/质疑点' },
      { start: 5, end: 7, type: 'data', label: '评论监控', output: '新增质疑回写' }
    ]
  },
  {
    group: 'AI Agent 编队',
    duty: '生成候选，不拥有发布权',
    bars: [
      { start: 2, end: 4, type: 'ai', label: '候选生成', output: '封面/钩子/脚本' },
      { start: 6, end: 7, type: 'ai', label: '归因草稿', output: '异常指标解释' }
    ]
  },
  {
    group: '设计/视频',
    duty: '收敛可投素材',
    bars: [
      { start: 3, end: 5, type: 'work', label: '制作 8 单元', output: '封面和开头版本' },
      { start: 6, end: 7, type: 'work', label: '二创准备', output: '胜出组件复用' }
    ]
  },
  {
    group: '合规/负责人',
    duty: '审核食品广告和经营承诺',
    bars: [
      { start: 4, end: 5, type: 'review', label: '发布前审核', output: '通过/退回/禁止' },
      { start: 6, end: 7, type: 'review', label: '风险复核', output: '投诉和负反馈判断' }
    ]
  },
  {
    group: '投放/渠道',
    duty: '小量测试和变量隔离',
    bars: [
      { start: 5, end: 7, type: 'work', label: '小量上线', output: '8 单元均衡投放' },
      { start: 6, end: 8, type: 'data', label: '数据回写', output: '按实验编号入表' }
    ]
  },
  {
    group: '数据/知识库',
    duty: '判断样本资格和沉淀规则',
    bars: [
      { start: 5, end: 7, type: 'data', label: '样本监控', output: '不足样本不下结论' },
      { start: 7, end: 8, type: 'decision', label: '规则入库', output: '胜因/败因/下轮假设' }
    ]
  }
]

const feishuFields = [
  ['实验编号', '自动编号/文本', '是', '运营研究', '新建时', 'HQ77-20260703-A1'],
  ['实验模式', '单选', '是', '运营研究', '新建时', '轻量快测/标准生产/高风险实验'],
  ['SKU', '关联记录', '是', '供应链', '立项前', '基础烤冷面组合装'],
  ['目标人群', '单选', '是', '运营研究', '立项时', '家庭囤货/夜宵宿舍'],
  ['封面类型', '单选', '是', '设计', '制作前', '价格利益/工厂信任'],
  ['钩子类型', '单选', '是', '视频', '制作前', '成品先出/工厂信任'],
  ['固定变量说明', '多行文本', '是', '运营研究', '立项时', '视频主体、承接页、预算上限一致'],
  ['事实包状态', '单选', '是', '供应链/品控', 'T+2h 前', '未确认/已确认/有风险'],
  ['合规状态', '单选', '是', '合规', '发布前', '待审/通过/退回/禁止'],
  ['素材资产链接', '附件/超链接', '是', '设计/视频', '发布前', '封面、开头、成片'],
  ['计划编号', '文本', '投放后必填', '投放', '上线后', '平台计划 ID'],
  ['曝光', '数字', '投放后必填', '数据', '每日回写', '按实验编号统计'],
  ['点击/进店', '数字', '投放后必填', '数据', '每日回写', '点击或商品点击口径需固定'],
  ['3 秒留存', '百分比', '投放后必填', '数据', '每日回写', '同平台同口径'],
  ['完播/平均观看', '百分比/数字', '建议', '数据', '每日回写', '用于判断叙事承接'],
  ['加购/成交/GMV', '数字/货币', '投放后必填', '数据/店铺运营', '每日回写', '承接链路指标'],
  ['花费/ROI', '货币/数字', '投放后必填', '投放/数据', '每日回写', '不单独作为放量依据'],
  ['毛利警戒', '公式/单选', '是', '财务/投放', '复盘前', '可放量/低毛利/亏损'],
  ['退款投诉信号', '多选/数字', '是', '客服/品控', '复盘前', '口味、发货、规格、误导'],
  ['结论', '单选', '是', '运营负责人', 'T+48h', '观察/淘汰/二创/放量/合规暂停'],
  ['下轮动作', '多行文本', '是', '运营负责人', '复盘时', '保留封面，重写开头']
]

const statusFlow = [
  ['草稿', '实验单新建但事实包未锁定', '运营研究', '进入待事实确认'],
  ['待事实确认', 'SKU、价格、库存、发货、规格未确认', '供应链/品控/店铺运营', '缺任一关键事实不得进入制作'],
  ['待素材制作', '事实包已通过，进入封面和开头制作', '设计/视频/AI Agent', '产出 8 个实验单元'],
  ['待合规审核', '素材已完成但未过审', '合规/负责人', '未通过不得发布'],
  ['可投放', '素材、事实、承接页均已确认', '投放', '进入小量测试'],
  ['测试中', '计划已上线并回写数据', '投放/数据', '不足样本不得判断胜负'],
  ['复盘中', '达到观察窗口或预算上限', '数据/运营', '输出结论和下轮动作'],
  ['二创/放量/归档', '形成下一动作', '运营负责人', '放量必须再次确认库存、价格和客服承接']
]

const permissions = [
  ['运营负责人', '可编辑实验主表、结论和下轮动作', '不能绕过合规发布'],
  ['供应链/品控', '可编辑 SKU、库存、规格、生产事实和风险意见', '不能修改投放结论'],
  ['设计/视频', '可编辑素材资产链接、封面类型、钩子类型', '不能修改事实包和合规结论'],
  ['客服', '可编辑评论、质疑、退款投诉信号', '不能修改价格库存承诺'],
  ['投放/数据', '可编辑计划编号、花费、曝光、点击、留存、成交、ROI', '不能修改素材审核状态'],
  ['AI Agent', '只能写入候选字段和分析草稿', '不能改状态、不能发布、不能放量']
]

const agentSchemas = [
  ['评论洞察 Agent', '评论原文、客服咨询、差评、退款原因', '用户原话簇、购买理由、质疑点、可转化素材角度、证据链接', '不得编造用户评价；每条洞察必须引用原文或记录编号。'],
  ['脚本 Agent', '实验假设、事实包、禁用词、目标人群', '前 3 秒钩子、口播稿、镜头说明、承接页对应卖点、风险词标注', '不得写医疗化、功效化、绝对化、未确认价格库存。'],
  ['封面 Agent', '封面协议、商品图、工厂图、目标人群、视频承接点', '封面标题、画面构图、主体说明、入口承诺、视频兑现位置', '不得把 AI 生成画面伪装成真实工厂或真实用户反馈。'],
  ['合规初筛 Agent', '素材文本、画面描述、事实包、合规规则库', '风险等级、命中规则、修改建议、需人工复核项', '只做初筛，不拥有通过权。'],
  ['投放归因 Agent', '投放回写表、评论摘要、承接页变更记录', '样本资格判断、异常指标解释、下一轮实验建议', '不得把样本不足的数据写成确定结论。'],
  ['知识库 Agent', '复盘结论、胜出素材、失败原因、审核记录', '可复用规则草案、适用条件、失效条件、引用实验编号', '规则入库必须由运营负责人确认。']
]

const complianceChecklist = [
  ['禁止', '疾病预防、治疗、缓解症状、调理疾病、降尿酸、养胃、治胃病、改善三高等表述', '普通食品不能按药品或保健食品宣传。'],
  ['禁止', '最、第一、全网最低、行业唯一、永久有效、绝对安全等绝对化或无法证明表达', '除非有清晰合法证明并经过负责人复核，否则不进入素材。'],
  ['禁止', 'AI 生成的工厂、检测、证书、真实用户反馈画面冒充真实素材', '工厂、资质、用户原话必须来自真实资产或记录。'],
  ['需复核', '无添加、防腐剂、真材实料、工厂直发、源头价、儿童爱吃、老人适合', '必须由品控、供应链或合规确认可证明。'],
  ['需复核', '价格、券后价、包邮、发货时效、库存充足、组合规格', '必须与店铺链接和库存事实一致。'],
  ['允许', '口味、制作方式、食用场景、储存方式、烹饪便利性、真实包装展示', '仍需保证画面和文字与事实包一致。']
]

const decisionRules = [
  ['样本资格', '单个实验单元曝光达到 2000 且点击/进店达到 60，或运行满 24 小时且花费达到单元预算上限。', '不足样本只标记为观察中，不输出胜负结论。'],
  ['封面胜出', '同一人群和同一钩子下，某封面入口点击表现相对高出 20% 以上，且 3 秒留存没有明显下降。', '保留封面方向，进入二创；若点击高但留存低，判定入口承诺与开头承接不一致。'],
  ['钩子胜出', '同一人群和同一封面下，某钩子 3 秒留存相对高出 15% 以上，且后续加购不恶化。', '保留钩子结构，下一轮测试叙事主体。'],
  ['承接失败', '点击、3 秒留存正常，但加购、成交、咨询转化偏弱。', '优先检查商品页、价格、规格、评价、客服话术，不直接否定素材。'],
  ['经营暂停', 'ROI 短期较好但毛利不足、库存不足、退款投诉上升或客服压力异常。', '禁止放量，先修正履约和承接。'],
  ['合规暂停', '出现医疗化、功效化、绝对化、价格不一致、AI 伪真实画面等风险。', '立即下线或退回修改，复盘中单独记录合规失败。'],
  ['可放量', '入口、留存、加购/成交、毛利、库存、客服和合规同时通过。', '小幅递增预算，并同步生产二创版本，避免单条素材疲劳。']
]

const coverProtocol = [
  ['价格利益封面', '让用户一眼理解“这一份烤冷面购买门槛低/适合囤货”。', '真实产品成品或包装，突出规格和价格利益，但价格必须来自店铺事实包。', '文字不超过 2 行；不得写全网最低、亏本、清仓、永久有效。'],
  ['工厂信任封面', '降低食品类下单前的卫生、发货、真实性疑虑。', '真实工厂、打包、质检、仓库、发货画面，主体为真实资产。', 'AI 只能做排版和文案候选，不得伪造工厂照片、证书或检测过程。']
]

function barStyle(bar: { start: number; end: number }) {
  return {
    gridColumn: `${bar.start} / ${bar.end}`
  }
}
</script>

<template>
  <section class="execution-report">
    <header class="execution-header">
      <p class="execution-kicker">昊七七烤冷面 / AI 爆款素材 / 针对性修复版</p>
      <h1>第一轮最小可执行闭环：先跑通企业化实验系统，再追求规模化爆款</h1>
      <p>
        本文档是对上一版宏观方案的针对性修复。上一版适合作为企业化蓝图，但直接执行会出现变量过多、部门等待、字段不够细、Agent 难追责、封面误导风险和食品合规颗粒度不足等问题。因此本轮不继续做“大而全”的扩写，而是把第一轮压缩成可以真实启动、真实投放、真实复盘的最小闭环。
      </p>
      <p>
        当前所有指标阈值均为“第一轮操作阈值”，不是行业基准，也不是公司历史结论。真实跑完后，应把阈值改为昊七七烤冷面自己的基线。
      </p>
    </header>

    <section class="execution-section">
      <h2>一、修复结论总表</h2>
      <p>修复的核心不是减少野心，而是先降低第一轮复杂度。只要第一轮能把实验编号、事实包、素材、投放、客服反馈、毛利库存、复盘规则串起来，后续才能扩大到更多 SKU、更多人群和更多素材类型。</p>
      <table class="execution-table">
        <thead>
          <tr>
            <th>发现的问题</th>
            <th>修复动作</th>
            <th>预期效果</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in repairMatrix" :key="row[0]">
            <td>{{ row[0] }}</td>
            <td>{{ row[1] }}</td>
            <td>{{ row[2] }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="execution-section">
      <h2>二、外部依据如何被吸收</h2>
      <p>本轮只吸收能转成执行约束的外部资料。外部资料不直接证明昊七七烤冷面一定有效，只提供实验设计、创意迭代、封面审核、飞书落地、Agent 边界和食品广告合规的依据。</p>
      <table class="execution-table">
        <thead>
          <tr>
            <th>资料来源</th>
            <th>在本方案中的用途</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in evidence" :key="item.source">
            <td><a :href="item.url" target="_blank" rel="noreferrer">{{ item.source }}</a></td>
            <td>{{ item.use }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="execution-section">
      <h2>三、第一轮最小实验矩阵</h2>
      <p>
        第一轮只选择一个主 SKU。视频主体尽量固定，承接页尽量固定，预算上限尽量一致。真正变化的变量只有目标人群、封面类型和前 3 秒钩子。这样一轮共有 8 个实验单元，既能覆盖不同购买动机，又不至于把团队拖进无法归因的大规模混测。
      </p>
      <table class="execution-table execution-table--wide">
        <thead>
          <tr>
            <th>单元</th>
            <th>目标人群</th>
            <th>封面变量</th>
            <th>前 3 秒变量</th>
            <th>固定条件</th>
            <th>待验证问题</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in firstLoopCells" :key="row[0]">
            <td>{{ row[0] }}</td>
            <td>{{ row[1] }}</td>
            <td>{{ row[2] }}</td>
            <td>{{ row[3] }}</td>
            <td>{{ row[4] }}</td>
            <td>{{ row[5] }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="execution-section">
      <h2>四、启动前必须补齐的事实包</h2>
      <p>AI 不能替公司补事实。没有事实包，脚本、封面、客服话术和投放承接都会变成猜测。第一轮启动前，以下字段必须有责任部门确认。</p>
      <table class="execution-table">
        <thead>
          <tr>
            <th>事实包</th>
            <th>必须包含</th>
            <th>负责人</th>
            <th>阻塞规则</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in baselineFacts" :key="row[0]">
            <td>{{ row[0] }}</td>
            <td>{{ row[1] }}</td>
            <td>{{ row[2] }}</td>
            <td>{{ row[3] }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="execution-section">
      <h2>五、部门参与分级</h2>
      <p>“每个部门都不闲着”不等于每个部门都参加所有会议。正确方式是让每个部门在自己的事实、资产、审核和承接责任上不缺位，同时按实验风险调动不同参与强度。</p>
      <table class="execution-table">
        <thead>
          <tr>
            <th>任务级别</th>
            <th>适用情况</th>
            <th>必须参与</th>
            <th>按需参与</th>
            <th>执行目标</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in taskTiers" :key="row[0]">
            <td>{{ row[0] }}</td>
            <td>{{ row[1] }}</td>
            <td>{{ row[2] }}</td>
            <td>{{ row[3] }}</td>
            <td>{{ row[4] }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="execution-section">
      <h2>六、多维时间轴</h2>
      <p>下图表示单个实验启动后的相对时间，不是固定排班。它的价值在于显示并行关系和阻塞关系：AI 可以提前生成候选，但没有事实包不能进入制作；设计和视频可以并行产出，但没有合规审核不能发布；投放回写和客服监控必须同步发生。</p>
      <div class="execution-timeline">
        <div class="execution-ruler">
          <div class="execution-lane-label">小组</div>
          <div class="execution-ruler-grid">
            <div v-for="tick in timelineScale" :key="tick.label" class="execution-tick">
              <strong>{{ tick.label }}</strong>
              <span>{{ tick.note }}</span>
            </div>
          </div>
        </div>
        <article v-for="lane in timeline" :key="lane.group" class="execution-lane">
          <div class="execution-lane-label">
            <strong>{{ lane.group }}</strong>
            <span>{{ lane.duty }}</span>
          </div>
          <div class="execution-track">
            <div
              v-for="bar in lane.bars"
              :key="`${lane.group}-${bar.label}`"
              class="execution-bar"
              :class="`execution-bar--${bar.type}`"
              :style="barStyle(bar)"
            >
              <strong>{{ bar.label }}</strong>
              <span>{{ bar.output }}</span>
            </div>
          </div>
        </article>
      </div>
      <div class="execution-legend">
        <span><i class="legend-work"></i>部门执行</span>
        <span><i class="legend-ai"></i>AI 辅助</span>
        <span><i class="legend-review"></i>人工审核</span>
        <span><i class="legend-data"></i>数据回写</span>
        <span><i class="legend-decision"></i>经营决策</span>
      </div>
    </section>

    <section class="execution-section">
      <h2>七、飞书实验主表字段字典</h2>
      <p>这张表可以直接转成飞书多维表格字段。第一轮不要先搭复杂系统，先让每一条素材实验都有唯一编号、清晰状态、明确责任人、可追踪素材和可回写数据。</p>
      <table class="execution-table execution-table--wide">
        <thead>
          <tr>
            <th>字段</th>
            <th>类型</th>
            <th>必填</th>
            <th>责任人</th>
            <th>更新时间</th>
            <th>示例/说明</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in feishuFields" :key="row[0]">
            <td>{{ row[0] }}</td>
            <td>{{ row[1] }}</td>
            <td>{{ row[2] }}</td>
            <td>{{ row[3] }}</td>
            <td>{{ row[4] }}</td>
            <td>{{ row[5] }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="execution-section">
      <h2>八、状态流与权限</h2>
      <p>状态流的目的不是让流程复杂，而是防止没有事实包就创作、没有合规就发布、没有样本就下结论、没有库存就放量。</p>
      <table class="execution-table">
        <thead>
          <tr>
            <th>状态</th>
            <th>定义</th>
            <th>责任人</th>
            <th>流转条件</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in statusFlow" :key="row[0]">
            <td>{{ row[0] }}</td>
            <td>{{ row[1] }}</td>
            <td>{{ row[2] }}</td>
            <td>{{ row[3] }}</td>
          </tr>
        </tbody>
      </table>
      <table class="execution-table">
        <thead>
          <tr>
            <th>角色</th>
            <th>可编辑范围</th>
            <th>禁止越权</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in permissions" :key="row[0]">
            <td>{{ row[0] }}</td>
            <td>{{ row[1] }}</td>
            <td>{{ row[2] }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="execution-section">
      <h2>九、封面生成协议</h2>
      <p>第一轮只测两类封面。先不同时加入结果前置、场景代入等更多方向，因为那会让变量膨胀。封面的核心不是好看，而是入口承诺可被视频开头兑现。</p>
      <table class="execution-table">
        <thead>
          <tr>
            <th>封面类型</th>
            <th>待验证假设</th>
            <th>生成方向</th>
            <th>审核要点</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in coverProtocol" :key="row[0]">
            <td>{{ row[0] }}</td>
            <td>{{ row[1] }}</td>
            <td>{{ row[2] }}</td>
            <td>{{ row[3] }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="execution-section">
      <h2>十、AI Agent 输出约束</h2>
      <p>Agent 的价值是扩展候选和整理证据，不是替代责任。每个 Agent 都必须输出结构化字段，并把来源、风险和置信度写入飞书。没有来源的内容只能进候选池，不能进发布稿。</p>
      <table class="execution-table execution-table--wide">
        <thead>
          <tr>
            <th>Agent</th>
            <th>输入</th>
            <th>必须输出字段</th>
            <th>护栏</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in agentSchemas" :key="row[0]">
            <td>{{ row[0] }}</td>
            <td>{{ row[1] }}</td>
            <td>{{ row[2] }}</td>
            <td>{{ row[3] }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="execution-section">
      <h2>十一、普通食品素材合规清单</h2>
      <p>昊七七烤冷面是普通食品，素材表达应集中在味道、场景、便利、真实生产和购买承接，不应借健康、疾病、疗效、绝对化承诺制造点击。</p>
      <table class="execution-table">
        <thead>
          <tr>
            <th>等级</th>
            <th>表达/内容</th>
            <th>处理原则</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in complianceChecklist" :key="`${row[0]}-${row[1]}`">
            <td>{{ row[0] }}</td>
            <td>{{ row[1] }}</td>
            <td>{{ row[2] }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="execution-section">
      <h2>十二、第一轮数据决策规则</h2>
      <p>第一轮最容易犯的错，是看到一个指标好就宣布胜利。本方案要求同时看入口、留存、承接、毛利、库存、客服和合规。只要其中一个关键环节失败，就不能直接放量。</p>
      <table class="execution-table execution-table--wide">
        <thead>
          <tr>
            <th>规则</th>
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
      <p class="execution-note">
        本轮阈值只用于建立第一版企业化判断秩序。真实跑完 3-5 轮后，应按昊七七烤冷面的历史曝光、点击、留存、转化、毛利和投诉数据重新校准。
      </p>
    </section>
  </section>
</template>
