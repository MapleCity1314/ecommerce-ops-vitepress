<script setup lang="ts">
import {
  AlertTriangle,
  ArrowRight,
  Bot,
  Brain,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  Film,
  Gauge,
  GitBranch,
  Layers3,
  MessageSquareText,
  PackageCheck,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap
} from '@lucide/vue'

const loopSteps = [
  {
    title: '情报池',
    subtitle: '竞品、热词、评论、投放痕迹',
    owner: '运营 + 情报 Agent',
    icon: Brain
  },
  {
    title: '假设池',
    subtitle: '人群、场景、钩子、卖点',
    owner: '运营负责人',
    icon: Target
  },
  {
    title: '组件库',
    subtitle: '工厂实拍、商品画面、话术、封面',
    owner: '工厂 + 设计 + 客服',
    icon: Layers3
  },
  {
    title: '生产池',
    subtitle: 'AI 草稿、真人拍摄、剪辑包装',
    owner: '内容组 + AI Agent',
    icon: Sparkles
  },
  {
    title: '审核池',
    subtitle: '事实、合规、库存、价格、品牌',
    owner: '人工卡点',
    icon: ShieldCheck
  },
  {
    title: '测试池',
    subtitle: '小预算、多版本、可归因',
    owner: '投放 + 运营',
    icon: Gauge
  },
  {
    title: '放量池',
    subtitle: '胜出素材二创、跨平台复用',
    owner: '投放 + 店铺运营',
    icon: Zap
  },
  {
    title: '复盘库',
    subtitle: '胜因、败因、素材寿命、下一轮规则',
    owner: '数据 Agent + 负责人',
    icon: RefreshCw
  }
]

const departments = [
  {
    name: '工厂/品控',
    icon: Factory,
    input: '生产线、原料、质检、打包、真实履约能力',
    output: '信任素材、产品事实、不可宣传边界',
    metric: '每日可用实拍素材数'
  },
  {
    name: '产品/供应链',
    icon: PackageCheck,
    input: 'SKU、口味、成本、库存、交期、活动价',
    output: '可卖组合、价格承诺、库存预警',
    metric: '素材承诺可兑现率'
  },
  {
    name: '运营',
    icon: ClipboardCheck,
    input: '目标、竞品、平台节奏、链接状态',
    output: '素材实验单、测款测图结论、放量决策',
    metric: '实验完成率'
  },
  {
    name: '客服',
    icon: MessageSquareText,
    input: '咨询、差评、好评、退款、买家原话',
    output: '痛点话术、异议处理、详情页补洞',
    metric: '用户原话沉淀数'
  },
  {
    name: '设计/剪辑',
    icon: Film,
    input: '分镜、参考、素材组件、品牌要求',
    output: '封面、短视频、主图、二创版本',
    metric: '合格交付速度'
  },
  {
    name: '投放/渠道',
    icon: Gauge,
    input: '素材版本、预算、平台、目标人群',
    output: '点击率、3秒留存、完播、成交、ROI',
    metric: '胜出素材发现率'
  }
]

const agents = [
  ['类目情报员', '抓竞品链接、热词、爆款视频和价格变化。'],
  ['用户洞察员', '从评论、客服、售后里提炼购买理由和犹豫点。'],
  ['脚本编导员', '把卖点生成钩子、口播、剧情、测评、工厂脚本。'],
  ['分镜导演员', '把脚本拆成镜头、道具、拍摄动作和画面节奏。'],
  ['封面生成员', '围绕点击假设生成封面标题、画面构图和多版本封面草稿。'],
  ['素材生成员', '生成商品图、数字人口播、视频草稿和二创版本。'],
  ['合规质检员', '检查食品宣传、价格承诺、极限词和事实一致性。'],
  ['投放分析员', '判断失败原因来自钩子、画面、卖点、承接或流量。'],
  ['知识库管理员', '把胜出规律和失败样本沉淀成下一轮规则。']
]

const fields = [
  '素材实验编号',
  'SKU/口味/组合',
  '目标平台',
  '目标人群',
  '消费场景',
  '核心痛点',
  '前3秒钩子',
  '封面版本',
  '封面标题',
  '封面构图',
  '主卖点',
  '画面组件',
  '脚本版本',
  '素材来源',
  '审核状态',
  '发布时间',
  '测试预算',
  '封面点击率',
  '点击率',
  '3秒留存',
  '完播率',
  '收藏加购',
  '成交/ROI',
  '评论反馈',
  '结论'
]

const hypotheses = [
  {
    hook: '东北夜市同款，在家 5 分钟开摊',
    scene: '夜宵/宅家',
    image: '铁板滋啦 + 酱料刷开 + 卷起咬开',
    test: '测钩子是否能带来高 3 秒留存'
  },
  {
    hook: '外卖一顿的钱，囤一箱烤冷面',
    scene: '家庭囤货',
    image: '冰箱抽屉 + 多袋装 + 快速出餐',
    test: '测价格利益对点击和加购的影响'
  },
  {
    hook: '工厂直接发，配料和打包给你看',
    scene: '信任背书',
    image: '生产线 + 质检 + 装箱发货',
    test: '测源头工厂画面对转化的影响'
  },
  {
    hook: '孩子放学饿了，不用点外卖',
    scene: '亲子加餐',
    image: '厨房制作 + 加蛋火腿 + 分食',
    test: '测家庭人群场景是否更稳定'
  }
]

const coverExperiments = [
  {
    title: '结果前置型',
    thesis: '用户先看到“做完是什么样”，再决定是否点开。',
    visual: '成品烤冷面近景、酱汁发亮、切面清楚，文字只保留一个结果承诺。',
    risk: '图片必须对应真实做法，不能把加料效果伪装成基础款。'
  },
  {
    title: '价格利益型',
    thesis: '低决策门槛人群可能先被囤货划算感吸引。',
    visual: '多袋装平铺 + 单顿成本表达 + 家庭冰箱场景。',
    risk: '价格、件数、优惠必须和实际链接同步，避免活动结束后继续误导。'
  },
  {
    title: '工厂信任型',
    thesis: '食品类用户对源头、卫生、发货稳定性有显性顾虑。',
    visual: '生产线、质检、装箱三宫格，标题强调“源头发货/配料可见”。',
    risk: '不能暗示超出资质范围的安全背书，必须由品控审核。'
  },
  {
    title: '场景代入型',
    thesis: '夜宵、宿舍、孩子加餐等场景可能比泛卖点更容易触发点击。',
    visual: '具体人物手部动作 + 明确场景道具 + 短句式标题。',
    risk: '人物场景不要过度摆拍，优先保留真实生活感。'
  }
]

const timeScale = [
  { label: 'T0', note: '任务开启' },
  { label: '0.5h', note: '口径锁定' },
  { label: '2h', note: '输入齐备' },
  { label: '4h', note: '草稿完成' },
  { label: '6h', note: '版本成型' },
  { label: '8h', note: '审核发布' },
  { label: '24h', note: '数据回收' },
  { label: 'T+1', note: '复盘迭代' }
]

const laneGroups = [
  {
    group: '运营研究组',
    duty: '定义问题、锁定变量、决定去留',
    bars: [
      { start: 1, end: 3, label: '立项与实验口径', type: 'decision', output: '素材实验单' },
      { start: 3, end: 4, label: '人群/钩子/封面假设', type: 'work', output: '假设清单' },
      { start: 5, end: 6, label: '审核与发布决策', type: 'review', output: '可测版本' },
      { start: 7, end: 9, label: '归因复盘', type: 'data', output: '下一轮问题' }
    ]
  },
  {
    group: '类目情报/AI 组',
    duty: '给出外部样本、生成候选方向',
    bars: [
      { start: 1, end: 3, label: '竞品封面/脚本/评论采样', type: 'work', output: '样本库' },
      { start: 3, end: 5, label: '批量生成脚本与封面草案', type: 'ai', output: '候选草稿' },
      { start: 7, end: 9, label: '胜败因初判', type: 'data', output: '归因建议' }
    ]
  },
  {
    group: '产品/供应链组',
    duty: '确认能卖什么、能承诺什么',
    bars: [
      { start: 1, end: 2, label: 'SKU/价格/库存确认', type: 'review', output: '承诺边界' },
      { start: 5, end: 6, label: '活动价与库存复核', type: 'review', output: '发布许可' },
      { start: 6, end: 8, label: '履约风险监测', type: 'data', output: '预警' }
    ]
  },
  {
    group: '工厂/仓库素材组',
    duty: '提供真实画面与履约证据',
    bars: [
      { start: 2, end: 4, label: '生产/质检/打包实拍', type: 'work', output: '真实素材包' },
      { start: 4, end: 5, label: '补拍缺口镜头', type: 'work', output: '补充镜头' },
      { start: 5, end: 6, label: '事实确认', type: 'review', output: '事实审核' }
    ]
  },
  {
    group: '客服洞察组',
    duty: '把用户语言转成脚本和承接话术',
    bars: [
      { start: 1, end: 3, label: '咨询/差评/好评原话提取', type: 'work', output: '用户原话' },
      { start: 5, end: 6, label: '异议话术审核', type: 'review', output: '客服承接' },
      { start: 6, end: 8, label: '评论区质疑回收', type: 'data', output: '新痛点' }
    ]
  },
  {
    group: '封面/设计组',
    duty: '把点击假设变成封面和视觉版本',
    bars: [
      { start: 3, end: 5, label: '封面 3-5 版生成', type: 'ai', output: '封面候选' },
      { start: 5, end: 6, label: '封面精修与安全区检查', type: 'work', output: '可测封面' },
      { start: 7, end: 8, label: '封面点击率归因', type: 'data', output: '封面规则' }
    ]
  },
  {
    group: '视频制作组',
    duty: '把脚本和素材组件变成可测试视频',
    bars: [
      { start: 3, end: 4, label: '分镜与拍摄清单', type: 'work', output: '分镜稿' },
      { start: 4, end: 6, label: '粗剪/数字人/二创版本', type: 'ai', output: '视频版本' },
      { start: 6, end: 7, label: '源文件归档', type: 'work', output: '素材档案' }
    ]
  },
  {
    group: '品控/合规审核组',
    duty: '卡食品事实、价格、承诺与平台风险',
    bars: [
      { start: 2, end: 3, label: '宣传边界预审', type: 'review', output: '禁用表达' },
      { start: 5, end: 6, label: '视频/封面/话术终审', type: 'review', output: '审核结论' }
    ]
  },
  {
    group: '投放/数据组',
    duty: '让素材进入市场投票并回写结果',
    bars: [
      { start: 5, end: 6, label: '建计划与实验编号映射', type: 'work', output: '投放计划' },
      { start: 6, end: 8, label: '小预算测试', type: 'data', output: '首轮数据' },
      { start: 8, end: 9, label: '胜出/淘汰/二创建议', type: 'decision', output: '投放结论' }
    ]
  }
]

function barStyle(bar: { start: number; end: number }) {
  return {
    gridColumn: `${bar.start} / ${bar.end}`
  }
}

const dataRules = [
  ['点击率低', '优先改封面、前3秒钩子、价格锚点。'],
  ['封面点击率低', '先拆封面问题：标题不清、主体不突出、利益点弱或场景不准。'],
  ['3秒留存低', '开头废话太多，改成结果先出或强画面先出。'],
  ['完播低', '节奏、冲突、镜头密度或信息顺序要重排。'],
  ['收藏加购低', '卖点没有形成购买理由，检查价格、规格、场景。'],
  ['成交低', '回到链接承接：评价、详情页、客服、优惠、库存。'],
  ['评论质疑多', '交给客服和品控，补充事实说明和异议话术。']
]

const evidence = [
  '平台侧共识：短视频素材需要多版本持续测试，前几秒决定大量流失。',
  '封面/缩略图是进入内容前的第一层筛选，应独立记录假设、版本和点击反馈。',
  '电商投放侧正在把素材规模、素材质量、AIGC 生成和素材诊断合成闭环。',
  '飞书多维表格、工作流、机器人、AI Agent 节点适合作为素材任务中台。',
  'OpenAI Agents 思路适合把情报、脚本、质检、复盘拆成可协作的数字员工。',
  '食品电商必须保留人工审核点，尤其是事实、功效、价格、库存和售后承诺。'
]
</script>

<template>
  <section class="ai-war-room">
    <div class="war-hero">
      <div>
        <p class="war-eyebrow">AI 爆款素材作战系统 / 研究雏形</p>
        <h1>研究目标：建立一套可被真实执行和复盘的素材实验系统</h1>
        <p>
          本稿不是展示页，也不是最终 SOP。它是一份研究底稿：先提出一套可验证的组织与素材生产假设，再把每个部门的输入、封面生成、视频生成、人工审核和数据回写放到同一条工作链路里。
          对昊七七烤冷面来说，研究重点不是“能不能多做视频”，而是能否稳定制造可解释的素材实验，并把胜出规律沉淀下来。
        </p>
      </div>
      <aside class="war-command">
        <div>
          <Target :size="20" />
          <strong>研究主指标</strong>
          <span>每周稳定产出可测试素材，并持续提高胜出素材发现率</span>
        </div>
        <div>
          <Workflow :size="20" />
          <strong>核心载体</strong>
          <span>飞书多维表格 + 工作流 + Agent 编队 + 人工审核</span>
        </div>
        <div>
          <CheckCircle2 :size="20" />
          <strong>研究约束</strong>
          <span>数据只用于判断假设，人负责事实边界，AI 负责扩大候选空间</span>
        </div>
      </aside>
    </div>

    <div class="research-strip">
      <div v-for="item in evidence" :key="item">
        <CheckCircle2 :size="16" />
        <span>{{ item }}</span>
      </div>
    </div>

    <section class="war-section">
      <div class="war-heading">
        <p class="war-eyebrow">作战闭环</p>
        <h2>从爆款情报到放量复盘，形成一条不断自我进化的素材流水线</h2>
      </div>
      <div class="loop-grid">
        <article v-for="(step, index) in loopSteps" :key="step.title" class="loop-card">
          <div class="loop-index">{{ index + 1 }}</div>
          <component :is="step.icon" :size="22" />
          <h3>{{ step.title }}</h3>
          <p>{{ step.subtitle }}</p>
          <span>{{ step.owner }}</span>
        </article>
      </div>
    </section>

    <section class="war-section">
      <div class="war-heading split">
        <div>
          <p class="war-eyebrow">部门协同</p>
          <h2>部门不是等待派单，而是在固定时间点交付固定研究输入</h2>
        </div>
        <p>
          研究假设：如果工厂、供应链、客服、设计、投放都按时间轴交付，素材生产就不会挤压在剪辑端，也不会只依赖运营临时灵感。
        </p>
      </div>
      <div class="dept-grid">
        <article v-for="dept in departments" :key="dept.name" class="dept-card">
          <div class="dept-card__title">
            <component :is="dept.icon" :size="22" />
            <h3>{{ dept.name }}</h3>
          </div>
          <dl>
            <dt>输入</dt>
            <dd>{{ dept.input }}</dd>
            <dt>输出</dt>
            <dd>{{ dept.output }}</dd>
            <dt>看板指标</dt>
            <dd>{{ dept.metric }}</dd>
          </dl>
        </article>
      </div>
    </section>

    <section class="war-section timeline-section">
      <div class="war-heading split">
        <div>
          <p class="war-eyebrow">多维进度时间轴</p>
          <h2>一份素材实验开启后，各小组在同一时间轴上并行推进</h2>
        </div>
        <p>
          这张图用于研究协同关系，不是排班表。横轴表示任务启动后的推进时间，纵轴表示小组泳道，条块表示该小组正在推进的工作、交付物和依赖点。
        </p>
      </div>
      <div class="swimlane-board">
        <div class="time-ruler">
          <div class="lane-label ruler-label">小组</div>
          <div class="ruler-grid">
            <div v-for="tick in timeScale" :key="tick.label" class="time-tick">
              <strong>{{ tick.label }}</strong>
              <span>{{ tick.note }}</span>
            </div>
          </div>
        </div>
        <article v-for="lane in laneGroups" :key="lane.group" class="swimlane-row">
          <div class="lane-label">
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
        <span><i class="legend-work"></i>人工/部门推进</span>
        <span><i class="legend-ai"></i>AI 生成或辅助</span>
        <span><i class="legend-review"></i>审核/确认</span>
        <span><i class="legend-data"></i>投放数据/回收</span>
        <span><i class="legend-decision"></i>运营决策</span>
      </div>
    </section>

    <section class="war-section two-col">
      <div class="agent-panel">
        <div class="war-heading compact">
          <p class="war-eyebrow">Agent 编队</p>
          <h2>把复杂工作拆给一组数字员工</h2>
        </div>
        <div class="agent-list">
          <div v-for="agent in agents" :key="agent[0]">
            <Bot :size="18" />
            <strong>{{ agent[0] }}</strong>
            <span>{{ agent[1] }}</span>
          </div>
        </div>
      </div>
      <div class="human-panel">
        <div class="war-heading compact">
          <p class="war-eyebrow">Human in the loop</p>
          <h2>人工只卡关键风险点</h2>
        </div>
        <div class="gate-list">
          <div>
            <ShieldCheck :size="19" />
            <span>工厂/品控确认产品事实和食品宣传边界</span>
          </div>
          <div>
            <PackageCheck :size="19" />
            <span>供应链确认库存、价格、交期和活动承诺</span>
          </div>
          <div>
            <Users :size="19" />
            <span>负责人确认品牌表达和是否允许放量</span>
          </div>
          <div>
            <AlertTriangle :size="19" />
            <span>客服与售后处理异常评论、退款和质疑反馈</span>
          </div>
        </div>
      </div>
    </section>

    <section class="war-section cover-section">
      <div class="war-heading split">
        <div>
          <p class="war-eyebrow">封面生成研究</p>
          <h2>封面不是视频截图，而是独立影响点击的实验变量</h2>
        </div>
        <p>
          建议每条核心视频至少配置 3 个封面方向：结果、利益、信任或场景。封面字段必须和视频字段分开记录，否则点击率低时无法判断是封面问题还是内容问题。
        </p>
      </div>
      <div class="cover-grid">
        <article v-for="item in coverExperiments" :key="item.title" class="cover-card">
          <Layers3 :size="20" />
          <h3>{{ item.title }}</h3>
          <dl>
            <dt>研究假设</dt>
            <dd>{{ item.thesis }}</dd>
            <dt>生成方向</dt>
            <dd>{{ item.visual }}</dd>
            <dt>审核风险</dt>
            <dd>{{ item.risk }}</dd>
          </dl>
        </article>
      </div>
    </section>

    <section class="war-section">
      <div class="war-heading split">
        <div>
          <p class="war-eyebrow">素材实验台</p>
          <h2>所有视频和封面先变成一行实验记录，再进入生产和测试</h2>
        </div>
        <p>
          这一张表就是研究骨架。AI 可以填草稿，人负责审核，投放结果再回写。字段越清楚，复盘越能避免拍脑袋。
        </p>
      </div>
      <div class="field-board">
        <span v-for="field in fields" :key="field">{{ field }}</span>
      </div>
    </section>

    <section class="war-section">
      <div class="war-heading split">
        <div>
          <p class="war-eyebrow">昊七七烤冷面样例</p>
          <h2>第一批素材不追求完整包装，追求假设清楚、变量清楚、数据能解释</h2>
        </div>
      </div>
      <div class="hypothesis-grid">
        <article v-for="item in hypotheses" :key="item.hook" class="hypothesis-card">
          <h3>{{ item.hook }}</h3>
          <div>
            <span>场景</span>
            <p>{{ item.scene }}</p>
          </div>
          <div>
            <span>画面</span>
            <p>{{ item.image }}</p>
          </div>
          <div>
            <span>测试目的</span>
            <p>{{ item.test }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="war-section decision-section">
      <div class="war-heading compact">
        <p class="war-eyebrow">数据决策</p>
        <h2>不要只问“视频好不好”，要问它坏在哪个环节</h2>
      </div>
      <div class="decision-map">
        <div v-for="rule in dataRules" :key="rule[0]">
          <strong>{{ rule[0] }}</strong>
          <ArrowRight :size="16" />
          <span>{{ rule[1] }}</span>
        </div>
      </div>
    </section>

    <section class="war-section final-board">
      <div>
        <GitBranch :size="24" />
        <h2>最终雏形定义</h2>
        <p>
          昊七七烤冷面的 AI 爆款素材工作流，本质是一套“素材实验操作系统”：用数据选题，用 AI 扩量，用部门事实补真，用人工卡风险，用投放验证，用复盘沉淀规则。
          当前结论仍是研究假设，需要用真实投放和真实部门协同验证。若验证成立，公司不是偶尔出一条爆款视频，而是持续制造、识别、复用爆款素材元素。
        </p>
      </div>
    </section>
  </section>
</template>
