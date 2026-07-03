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
  <section class="ai-war-room report-layout">
    <header class="report-header">
      <p class="report-kicker">AI 爆款素材作战系统 / 研究报告雏形</p>
      <h1>研究目标：建立一套可被真实执行和复盘的素材实验系统</h1>
      <p>
        本报告用于研究昊七七烤冷面的视频、封面和素材生产机制，不承担展示宣传功能。当前结论均以“待验证假设”处理：即先定义素材实验应如何被组织、记录、生产、审核和复盘，再通过真实投放数据检验这套机制是否能提升胜出素材发现率。
      </p>
      <p>
        本报告将素材生产拆成三个对象：视频内容、封面入口、链接承接。视频负责说明产品和场景，封面负责争取点击，链接负责把点击转化成收藏、加购和成交。三者必须分别记录变量，否则复盘时无法判断问题发生在哪一层。
      </p>
    </header>

    <section class="report-section">
      <h2>一、研究判断摘要</h2>
      <table class="report-table">
        <thead>
          <tr>
            <th>研究判断</th>
            <th>原因</th>
            <th>验证方式</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in evidence" :key="item">
            <td>{{ item }}</td>
            <td>该判断影响素材系统的任务拆分和数据字段设计。</td>
            <td>通过素材实验台记录版本、投放结果和复盘结论。</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="report-section">
      <h2>二、素材实验闭环</h2>
      <p>
        素材生产不应以“做完一条视频”为终点，而应以“形成可解释的实验结论”为终点。一次完整实验需要从情报开始，经过假设、素材组件、生产、审核、测试、放量和复盘八个环节。每个环节都必须有明确负责人和可检查输出。
      </p>
      <table class="report-table">
        <thead>
          <tr>
            <th>序号</th>
            <th>环节</th>
            <th>研究目的</th>
            <th>负责人</th>
            <th>输出物</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(step, index) in loopSteps" :key="step.title">
            <td>{{ index + 1 }}</td>
            <td>{{ step.title }}</td>
            <td>{{ step.subtitle }}</td>
            <td>{{ step.owner }}</td>
            <td>进入下一环节的标准化输入</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="report-section">
      <h2>三、部门输入与输出定义</h2>
      <p>
        “每个部门都参与”不等于所有部门都做视频。更准确的定义是：每个部门都向素材实验贡献自己掌握的事实、数据或判断。工厂提供真实生产和履约证据，供应链确认可兑现承诺，客服提供用户原话，设计和剪辑把假设转成可测版本，投放用市场数据判断去留。
      </p>
      <table class="report-table">
        <thead>
          <tr>
            <th>部门/小组</th>
            <th>输入</th>
            <th>输出</th>
            <th>建议跟踪指标</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="dept in departments" :key="dept.name">
            <td>{{ dept.name }}</td>
            <td>{{ dept.input }}</td>
            <td>{{ dept.output }}</td>
            <td>{{ dept.metric }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="report-section">
      <h2>四、多维进度时间轴</h2>
      <p>
        下图采用泳道图表达一份素材实验启动后的推进关系。横轴为任务启动后的时间，纵轴为小组。每一条色块代表某个小组在该时间段推进的任务、交付物或审核节点。它的用途是识别并行关系、前置依赖和潜在等待，而不是做日程排班。
      </p>
      <div class="swimlane-board report-chart">
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

    <section class="report-section">
      <h2>五、Agent 编队与人工审核边界</h2>
      <p>
        AI Agent 的价值在于扩大候选方向、降低信息整理成本和提高复盘速度，但不能替代事实确认和风险判断。食品类电商尤其要保留人工审核：产品事实、价格库存、食品宣传边界、品牌表达和售后承接都必须由对应负责人确认。
      </p>
      <table class="report-table">
        <thead>
          <tr>
            <th>Agent/角色</th>
            <th>任务定义</th>
            <th>人工边界</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="agent in agents" :key="agent[0]">
            <td>{{ agent[0] }}</td>
            <td>{{ agent[1] }}</td>
            <td>仅产出建议或草稿，不直接发布、不直接承诺事实。</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="report-section">
      <h2>六、封面生成研究</h2>
      <p>
        封面不是视频截图，而是影响点击的独立变量。建议同一条核心视频至少配置三个封面方向，并分别记录封面标题、主体、构图、利益点、审核风险和封面点击率。若封面点击率低，应先判断标题是否清楚、主体是否突出、场景是否准确；若封面点击率高但 3 秒留存低，则说明视频开头没有承接封面承诺。
      </p>
      <table class="report-table">
        <thead>
          <tr>
            <th>封面方向</th>
            <th>研究假设</th>
            <th>生成方向</th>
            <th>审核风险</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in coverExperiments" :key="item.title">
            <td>{{ item.title }}</td>
            <td>{{ item.thesis }}</td>
            <td>{{ item.visual }}</td>
            <td>{{ item.risk }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="report-section">
      <h2>七、素材实验台字段</h2>
      <p>
        字段设计决定复盘质量。字段必须覆盖产品、目标人群、封面、脚本、画面、审核、投放和结论。字段越少，执行越轻；字段过少，复盘会失去归因能力。当前建议字段如下，后续应根据实际执行成本删减。
      </p>
      <div class="field-list">
        <span v-for="field in fields" :key="field">{{ field }}</span>
      </div>
    </section>

    <section class="report-section">
      <h2>八、昊七七烤冷面首批实验假设</h2>
      <table class="report-table">
        <thead>
          <tr>
            <th>钩子</th>
            <th>场景</th>
            <th>核心画面</th>
            <th>测试目的</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in hypotheses" :key="item.hook">
            <td>{{ item.hook }}</td>
            <td>{{ item.scene }}</td>
            <td>{{ item.image }}</td>
            <td>{{ item.test }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="report-section">
      <h2>九、数据决策规则</h2>
      <p>
        复盘时不应只判断“好不好”，而应判断问题发生在哪一层：封面、钩子、视频节奏、卖点、链接承接还是用户质疑。下表用于把异常指标转成下一步动作。
      </p>
      <table class="report-table">
        <thead>
          <tr>
            <th>观察到的问题</th>
            <th>优先判断方向</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="rule in dataRules" :key="rule[0]">
            <td>{{ rule[0] }}</td>
            <td>{{ rule[1] }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="report-section report-conclusion">
      <h2>十、当前研究结论</h2>
      <p>
        昊七七烤冷面的 AI 爆款素材工作流，本质是一套素材实验操作系统：用数据选题，用 AI 扩大候选空间，用部门事实补充真实性，用人工审核控制风险，用投放验证假设，用复盘沉淀规则。当前结论仍需真实投放验证；如果验证成立，公司获得的不是偶发爆款，而是持续制造、识别和复用爆款素材元素的能力。
      </p>
    </section>
  </section>
</template>
