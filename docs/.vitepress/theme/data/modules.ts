export type ModuleMeta = {
  id: string
  title: string
  route: string
  category: string
  summary: string
  tags: string[]
  sourceDir: string
  audience: string
  deliverables: string[]
  checkpoints: string[]
  riskNotes: string[]
  imageCount: number
  sectionCount: number
  sections: Array<{ level: number; title: string }>
  flow: string[]
  related: string[]
  assets: Array<{ source: string; url: string }>
}

export const modules: ModuleMeta[] = [
  {
    "id": "product-test",
    "title": "测款 SOP 流程搭建",
    "sourceDir": "01-测款SOP流程搭建",
    "out": "sop/product-test.md",
    "category": "选品测款",
    "summary": "围绕新品测款的判断标准、数据评估和投放工具选择，形成可复制的测款作业流程。",
    "tags": [
      "测款",
      "万相台",
      "数据评估",
      "SOP"
    ],
    "flow": [
      "测款思路梳理",
      "数据评估体系",
      "工具选择",
      "SOP 设置",
      "投放与复盘"
    ],
    "audience": "负责新品上架、付费测款和链接筛选的运营人员。",
    "deliverables": [
      "测款计划",
      "关键词与出价记录",
      "测款数据复盘表"
    ],
    "checkpoints": [
      "预算是否能正常消耗",
      "点击和收藏加购是否达标",
      "是否明确继续放量或停止"
    ],
    "riskNotes": [
      "不要在样本量不足时下结论",
      "测款与测图目标要分开判断"
    ],
    "related": [
      "image-test",
      "new-product"
    ],
    "route": "/sop/product-test",
    "imageCount": 5,
    "sectionCount": 16,
    "sections": [
      {
        "level": 1,
        "title": "测款 SOP 流程搭建执行手册"
      },
      {
        "level": 2,
        "title": "模块定位"
      },
      {
        "level": 2,
        "title": "开始前准备"
      },
      {
        "level": 2,
        "title": "标准操作流程"
      },
      {
        "level": 3,
        "title": "1. 梳理测款思路"
      },
      {
        "level": 3,
        "title": "2. 建立数据评估体系"
      },
      {
        "level": 3,
        "title": "3. 选择工具和投放场景"
      },
      {
        "level": 3,
        "title": "4. 设置预算、排期和出价"
      },
      {
        "level": 3,
        "title": "5. 设置人群和创意"
      },
      {
        "level": 3,
        "title": "6. 观察并复盘"
      },
      {
        "level": 2,
        "title": "判断标准"
      },
      {
        "level": 2,
        "title": "常见问题"
      }
    ],
    "assets": [
      {
        "source": "01-测款SOP流程搭建-image-3.png",
        "url": "/assets/product-test/image-01.png"
      },
      {
        "source": "01-测款SOP流程搭建-image-4.png",
        "url": "/assets/product-test/image-02.png"
      },
      {
        "source": "01-测款SOP流程搭建-image.png",
        "url": "/assets/product-test/image-03.png"
      },
      {
        "source": "01-测款SOP流程搭建-image-1.png",
        "url": "/assets/product-test/image-04.png"
      },
      {
        "source": "01-测款SOP流程搭建-image-2.png",
        "url": "/assets/product-test/image-05.png"
      }
    ]
  },
  {
    "id": "image-test",
    "title": "测图 SOP 流程打造",
    "sourceDir": "02-测图SOP流程打造",
    "out": "sop/image-test.md",
    "category": "素材测试",
    "summary": "把主图测试、点击率判断和工具选择沉淀为标准流程，降低素材测试的不确定性。",
    "tags": [
      "测图",
      "点击率",
      "素材",
      "SOP"
    ],
    "flow": [
      "测图思路梳理",
      "评估点击率",
      "工具选择",
      "测试设置",
      "结果归档"
    ],
    "audience": "负责主图测试、素材迭代和点击率优化的运营与美工。",
    "deliverables": [
      "测图计划",
      "图片变量说明",
      "点击率对比表"
    ],
    "checkpoints": [
      "每张图是否获得足够点击",
      "是否只改变一个核心变量",
      "是否形成可复用素材结论"
    ],
    "riskNotes": [
      "不要把价格、标题和图片同时改变后归因",
      "低展现时优先排查出价和关键词"
    ],
    "related": [
      "click-rate",
      "product-test"
    ],
    "route": "/sop/image-test",
    "imageCount": 4,
    "sectionCount": 16,
    "sections": [
      {
        "level": 1,
        "title": "测图 SOP 流程打造执行手册"
      },
      {
        "level": 2,
        "title": "模块定位"
      },
      {
        "level": 2,
        "title": "开始前准备"
      },
      {
        "level": 2,
        "title": "标准操作流程"
      },
      {
        "level": 3,
        "title": "1. 明确测图思路"
      },
      {
        "level": 3,
        "title": "2. 设置预算和排期"
      },
      {
        "level": 3,
        "title": "3. 控制人群变量"
      },
      {
        "level": 3,
        "title": "4. 设置创意方式"
      },
      {
        "level": 3,
        "title": "5. 记录点击率和后续动作"
      },
      {
        "level": 2,
        "title": "数据判断标准"
      },
      {
        "level": 2,
        "title": "美工协作要求"
      },
      {
        "level": 2,
        "title": "常见问题"
      }
    ],
    "assets": [
      {
        "source": "02-测图SOP流程打造-image.png",
        "url": "/assets/image-test/image-01.png"
      },
      {
        "source": "02-测图SOP流程打造-image-1.png",
        "url": "/assets/image-test/image-02.png"
      },
      {
        "source": "02-测图SOP流程打造-image-2.png",
        "url": "/assets/image-test/image-03.png"
      },
      {
        "source": "02-测图SOP流程打造-image-3.png",
        "url": "/assets/image-test/image-04.png"
      }
    ]
  },
  {
    "id": "click-rate",
    "title": "爆款点击率优化",
    "sourceDir": "03-爆款点击率优化",
    "out": "growth/click-rate.md",
    "category": "增长优化",
    "summary": "从美工沟通、行业点击率参考、创意收集到付费测图，建立爆款主图优化闭环。",
    "tags": [
      "点击率",
      "主图",
      "美工协同",
      "创意收集"
    ],
    "flow": [
      "明确提升目标",
      "参考行业点击率",
      "收集创意主图",
      "提炼文案构图",
      "对标设计",
      "付费测图"
    ],
    "audience": "需要把点击率提升转化为设计任务和测试闭环的运营负责人。",
    "deliverables": [
      "点击率目标",
      "竞品创意库",
      "美工需求单",
      "测图复盘"
    ],
    "checkpoints": [
      "行业参考是否明确",
      "创意是否按构图和卖点分类",
      "美工需求是否可执行"
    ],
    "riskNotes": [
      "不要只说“做得更好看”",
      "对标不是照抄，需要拆解卖点与构图逻辑"
    ],
    "related": [
      "image-test",
      "new-product"
    ],
    "route": "/growth/click-rate",
    "imageCount": 13,
    "sectionCount": 13,
    "sections": [
      {
        "level": 1,
        "title": "爆款点击率优化执行手册"
      },
      {
        "level": 2,
        "title": "模块定位"
      },
      {
        "level": 2,
        "title": "点击率优化闭环"
      },
      {
        "level": 2,
        "title": "一、如何跟美工沟通点击率提升"
      },
      {
        "level": 2,
        "title": "二、行业点击率参考"
      },
      {
        "level": 2,
        "title": "三、收集行业创意主图"
      },
      {
        "level": 3,
        "title": "方案 1：用小旺神下载行业车图"
      },
      {
        "level": 3,
        "title": "方案 2：花瓣网搜索"
      },
      {
        "level": 3,
        "title": "方案 3：Pinterest 搜索"
      },
      {
        "level": 2,
        "title": "四、收集分类创意文案和构图"
      },
      {
        "level": 2,
        "title": "五、对标设计"
      },
      {
        "level": 2,
        "title": "六、上付费工具测图"
      }
    ],
    "assets": [
      {
        "source": "03-爆款点击率优化-image.png",
        "url": "/assets/click-rate/image-01.png"
      },
      {
        "source": "03-爆款点击率优化-image-1.png",
        "url": "/assets/click-rate/image-02.png"
      },
      {
        "source": "03-爆款点击率优化-image-2.png",
        "url": "/assets/click-rate/image-03.png"
      },
      {
        "source": "03-爆款点击率优化-image-3.png",
        "url": "/assets/click-rate/image-04.png"
      },
      {
        "source": "03-爆款点击率优化-image-4.png",
        "url": "/assets/click-rate/image-05.png"
      },
      {
        "source": "03-爆款点击率优化-image-5.png",
        "url": "/assets/click-rate/image-06.png"
      },
      {
        "source": "03-爆款点击率优化-image-6.png",
        "url": "/assets/click-rate/image-07.png"
      },
      {
        "source": "03-爆款点击率优化-image-7.png",
        "url": "/assets/click-rate/image-08.png"
      },
      {
        "source": "03-爆款点击率优化-image-8.png",
        "url": "/assets/click-rate/image-09.png"
      },
      {
        "source": "03-爆款点击率优化-image-11.png",
        "url": "/assets/click-rate/image-10.png"
      },
      {
        "source": "03-爆款点击率优化-image-12.png",
        "url": "/assets/click-rate/image-11.png"
      },
      {
        "source": "03-爆款点击率优化-image-10.png",
        "url": "/assets/click-rate/image-12.png"
      },
      {
        "source": "03-爆款点击率优化-image-9.png",
        "url": "/assets/click-rate/image-13.png"
      }
    ]
  },
  {
    "id": "new-product",
    "title": "新品快速打爆 SOP 流程",
    "sourceDir": "04-新品快速打爆SOP流程",
    "out": "growth/new-product.md",
    "category": "增长优化",
    "summary": "将新品打爆的评估标准、递增方案和推荐流量入口整理为一套执行流程。",
    "tags": [
      "新品",
      "打爆",
      "递增方案",
      "推荐流量"
    ],
    "flow": [
      "运营思路",
      "方案设计",
      "评估标准",
      "递增方案",
      "问题处理",
      "推荐流量入口"
    ],
    "audience": "负责新品冷启动、递增投放和爆款培育的运营人员。",
    "deliverables": [
      "新品运营方案",
      "递增节奏表",
      "问题处理记录",
      "阶段复盘"
    ],
    "checkpoints": [
      "评估标准是否先于投放建立",
      "递增是否有节奏和停止条件",
      "免费与付费入口是否协同"
    ],
    "riskNotes": [
      "不要用预算掩盖产品承接问题",
      "拉升前先确认转化、评价和库存基础"
    ],
    "related": [
      "product-test",
      "category-research"
    ],
    "route": "/growth/new-product",
    "imageCount": 9,
    "sectionCount": 13,
    "sections": [
      {
        "level": 1,
        "title": "新品快速打爆 SOP 流程执行手册"
      },
      {
        "level": 2,
        "title": "模块定位"
      },
      {
        "level": 2,
        "title": "一、新品打爆运营思路"
      },
      {
        "level": 2,
        "title": "二、新品运营方案设计"
      },
      {
        "level": 3,
        "title": "建立评估标准"
      },
      {
        "level": 2,
        "title": "三、递增方案设计"
      },
      {
        "level": 3,
        "title": "多工具递增"
      },
      {
        "level": 2,
        "title": "四、拉升会遇到的问题"
      },
      {
        "level": 3,
        "title": "预算增加后 ROI 下降"
      },
      {
        "level": 3,
        "title": "点击增加但转化没有跟上"
      },
      {
        "level": 3,
        "title": "数据波动太大"
      },
      {
        "level": 2,
        "title": "五、推荐流量发布入口"
      }
    ],
    "assets": [
      {
        "source": "04-新品快速打爆SOP流程-image.png",
        "url": "/assets/new-product/image-01.png"
      },
      {
        "source": "04-新品快速打爆SOP流程-image-1.png",
        "url": "/assets/new-product/image-02.png"
      },
      {
        "source": "04-新品快速打爆SOP流程-image-2.png",
        "url": "/assets/new-product/image-03.png"
      },
      {
        "source": "04-新品快速打爆SOP流程-image-3.png",
        "url": "/assets/new-product/image-04.png"
      },
      {
        "source": "04-新品快速打爆SOP流程-image-4.png",
        "url": "/assets/new-product/image-05.png"
      },
      {
        "source": "04-新品快速打爆SOP流程-image-5.png",
        "url": "/assets/new-product/image-06.png"
      },
      {
        "source": "04-新品快速打爆SOP流程-image-6.png",
        "url": "/assets/new-product/image-07.png"
      },
      {
        "source": "04-新品快速打爆SOP流程-image-7.png",
        "url": "/assets/new-product/image-08.png"
      },
      {
        "source": "04-新品快速打爆SOP流程-image-8.png",
        "url": "/assets/new-product/image-09.png"
      }
    ]
  },
  {
    "id": "category-research",
    "title": "快速调研类目玩法",
    "sourceDir": "05-快速调研类目玩法",
    "out": "growth/category-research.md",
    "category": "市场调研",
    "summary": "通过行业榜单、潜力爆款、竞品监控和关键词数据，快速判断类目机会。",
    "tags": [
      "类目调研",
      "竞品分析",
      "关键词",
      "增长机会"
    ],
    "flow": [
      "找到行业榜单",
      "识别潜力爆款",
      "分析 30 天数据",
      "监控竞品",
      "采集关键词",
      "查看付费推广"
    ],
    "audience": "负责选品前调研、竞品监控和新品机会判断的运营人员。",
    "deliverables": [
      "类目机会清单",
      "竞品链接库",
      "关键词表",
      "付费推广观察记录"
    ],
    "checkpoints": [
      "竞品是否满足新链接和增长趋势",
      "是否采集成交关键词",
      "是否区分自然增长和付费拉动"
    ],
    "riskNotes": [
      "短期爆发链接要验证稳定性",
      "不要只看销量，需同时看流量结构和成交词"
    ],
    "related": [
      "new-product",
      "click-rate"
    ],
    "route": "/growth/category-research",
    "imageCount": 10,
    "sectionCount": 17,
    "sections": [
      {
        "level": 1,
        "title": "快速调研类目玩法执行手册"
      },
      {
        "level": 2,
        "title": "模块定位"
      },
      {
        "level": 2,
        "title": "一、怎么找起来快的新链接"
      },
      {
        "level": 3,
        "title": "1. 找到行业榜单"
      },
      {
        "level": 3,
        "title": "2. 找出增长趋势好的潜力爆款"
      },
      {
        "level": 3,
        "title": "3. 分析最近 30 天数据"
      },
      {
        "level": 3,
        "title": "4. 重点分析关键数据"
      },
      {
        "level": 3,
        "title": "5. 监控值得分析的链接"
      },
      {
        "level": 3,
        "title": "6. 采集最近 30 天数据"
      },
      {
        "level": 3,
        "title": "7. 采集成交关键词"
      },
      {
        "level": 3,
        "title": "8. 采集付费推广数据"
      },
      {
        "level": 2,
        "title": "输出物模板"
      }
    ],
    "assets": [
      {
        "source": "05-快速调研类目玩法-image-9.png",
        "url": "/assets/category-research/image-01.png"
      },
      {
        "source": "05-快速调研类目玩法-image-8.png",
        "url": "/assets/category-research/image-02.png"
      },
      {
        "source": "05-快速调研类目玩法-image-7.png",
        "url": "/assets/category-research/image-03.png"
      },
      {
        "source": "05-快速调研类目玩法-image-5.png",
        "url": "/assets/category-research/image-04.png"
      },
      {
        "source": "05-快速调研类目玩法-image-6.png",
        "url": "/assets/category-research/image-05.png"
      },
      {
        "source": "05-快速调研类目玩法-image.png",
        "url": "/assets/category-research/image-06.png"
      },
      {
        "source": "05-快速调研类目玩法-image-1.png",
        "url": "/assets/category-research/image-07.png"
      },
      {
        "source": "05-快速调研类目玩法-image-2.png",
        "url": "/assets/category-research/image-08.png"
      },
      {
        "source": "05-快速调研类目玩法-image-3.png",
        "url": "/assets/category-research/image-09.png"
      },
      {
        "source": "05-快速调研类目玩法-image-4.png",
        "url": "/assets/category-research/image-10.png"
      }
    ]
  },
  {
    "id": "department-kb",
    "title": "电商运营部门知识库",
    "sourceDir": "06-电商运营部门知识库",
    "out": "team/department-kb.md",
    "category": "团队管理",
    "summary": "用于新人了解部门角色、业务资料、任务机制和常用协作入口。",
    "tags": [
      "新人入职",
      "部门介绍",
      "知识库",
      "协作"
    ],
    "flow": [
      "了解业务",
      "阅读必读资料",
      "完成新人任务",
      "熟悉常用群组"
    ],
    "audience": "新入职运营、带教负责人和需要快速了解运营部门协作方式的成员。",
    "deliverables": [
      "新人学习清单",
      "首周任务看板",
      "资料阅读记录",
      "协作入口清单"
    ],
    "checkpoints": [
      "是否理解部门目标",
      "是否知道日常输出物",
      "是否掌握请假、报销和协作入口"
    ],
    "riskNotes": [
      "知识库不是资料堆放，应对应新人任务",
      "外链资料失效时要及时替换"
    ],
    "related": [
      "operator-training",
      "process-system"
    ],
    "route": "/team/department-kb",
    "imageCount": 0,
    "sectionCount": 15,
    "sections": [
      {
        "level": 1,
        "title": "电商运营部门知识库执行手册"
      },
      {
        "level": 2,
        "title": "模块定位"
      },
      {
        "level": 2,
        "title": "一、部门介绍"
      },
      {
        "level": 3,
        "title": "1. 了解业务"
      },
      {
        "level": 3,
        "title": "2. 日常工作节奏"
      },
      {
        "level": 3,
        "title": "3. 组织架构"
      },
      {
        "level": 2,
        "title": "二、必读资料"
      },
      {
        "level": 3,
        "title": "1. 业务规划资料"
      },
      {
        "level": 3,
        "title": "2. 单品运营流程"
      },
      {
        "level": 3,
        "title": "3. 跟美工和客服沟通追结果"
      },
      {
        "level": 3,
        "title": "4. 经验分享"
      },
      {
        "level": 2,
        "title": "三、新人任务"
      }
    ],
    "assets": []
  },
  {
    "id": "operator-training",
    "title": "运营培育体系搭建",
    "sourceDir": "07-运营培育体系搭建（岗位画像+招育留汰）",
    "out": "team/operator-training.md",
    "category": "团队管理",
    "summary": "围绕岗位画像、招聘流程、入职培训、试用期安排和晋升体系搭建运营人才梯队。",
    "tags": [
      "岗位画像",
      "招聘",
      "培训",
      "晋升"
    ],
    "flow": [
      "岗位画像",
      "招聘前准备",
      "招人流程",
      "入职培训",
      "试用期安排",
      "晋升体系"
    ],
    "audience": "运营负责人、招聘协同人员、带教负责人和试用期管理者。",
    "deliverables": [
      "岗位画像",
      "面试评估表",
      "入职培训计划",
      "试用期评估记录"
    ],
    "checkpoints": [
      "岗位能力是否拆清",
      "面试是否围绕实际任务",
      "试用期是否有阶段输出"
    ],
    "riskNotes": [
      "不要只看经验年限",
      "培养体系必须和业务目标及岗位产出绑定"
    ],
    "related": [
      "department-kb",
      "process-system"
    ],
    "route": "/team/operator-training",
    "imageCount": 15,
    "sectionCount": 19,
    "sections": [
      {
        "level": 1,
        "title": "运营培育体系搭建执行手册"
      },
      {
        "level": 2,
        "title": "模块定位"
      },
      {
        "level": 2,
        "title": "一、岗位画像：筛选能打爆款的运营"
      },
      {
        "level": 2,
        "title": "二、招聘前的准备"
      },
      {
        "level": 3,
        "title": "1. 岗位能力划分"
      },
      {
        "level": 3,
        "title": "2. 岗位需求梳理"
      },
      {
        "level": 2,
        "title": "三、招人流程设计"
      },
      {
        "level": 3,
        "title": "1. 招聘流程图"
      },
      {
        "level": 3,
        "title": "2. 招聘相关文档"
      },
      {
        "level": 3,
        "title": "3. 面试评估方式"
      },
      {
        "level": 2,
        "title": "四、入职培训体系"
      },
      {
        "level": 3,
        "title": "1. 入职流程设计"
      }
    ],
    "assets": [
      {
        "source": "07-运营培育体系搭建（岗位画像+招育留汰）-image.png",
        "url": "/assets/operator-training/image-01.png"
      },
      {
        "source": "07-运营培育体系搭建（岗位画像+招育留汰）-diagram.png",
        "url": "/assets/operator-training/image-02.png"
      },
      {
        "source": "07-运营培育体系搭建（岗位画像+招育留汰）-diagram-1.png",
        "url": "/assets/operator-training/image-03.png"
      },
      {
        "source": "07-运营培育体系搭建（岗位画像+招育留汰）-image-1.png",
        "url": "/assets/operator-training/image-04.png"
      },
      {
        "source": "07-运营培育体系搭建（岗位画像+招育留汰）-image-2.png",
        "url": "/assets/operator-training/image-05.png"
      },
      {
        "source": "07-运营培育体系搭建（岗位画像+招育留汰）-image-3.png",
        "url": "/assets/operator-training/image-06.png"
      },
      {
        "source": "07-运营培育体系搭建（岗位画像+招育留汰）-image-4.png",
        "url": "/assets/operator-training/image-07.png"
      },
      {
        "source": "07-运营培育体系搭建（岗位画像+招育留汰）-image-5.png",
        "url": "/assets/operator-training/image-08.png"
      },
      {
        "source": "07-运营培育体系搭建（岗位画像+招育留汰）-image-6.png",
        "url": "/assets/operator-training/image-09.png"
      },
      {
        "source": "07-运营培育体系搭建（岗位画像+招育留汰）-image-7.png",
        "url": "/assets/operator-training/image-10.png"
      },
      {
        "source": "07-运营培育体系搭建（岗位画像+招育留汰）-image-8.png",
        "url": "/assets/operator-training/image-11.png"
      },
      {
        "source": "07-运营培育体系搭建（岗位画像+招育留汰）-image-9.png",
        "url": "/assets/operator-training/image-12.png"
      },
      {
        "source": "07-运营培育体系搭建（岗位画像+招育留汰）-image-10.png",
        "url": "/assets/operator-training/image-13.png"
      },
      {
        "source": "07-运营培育体系搭建（岗位画像+招育留汰）-image-11.png",
        "url": "/assets/operator-training/image-14.png"
      },
      {
        "source": "07-运营培育体系搭建（岗位画像+招育留汰）-image-12.png",
        "url": "/assets/operator-training/image-15.png"
      }
    ]
  },
  {
    "id": "process-system",
    "title": "流程化组织学习资料参考",
    "sourceDir": "08-流程化组织学习资料参考",
    "out": "org/process-system.md",
    "category": "组织流程",
    "summary": "沉淀电商流程化组织模型、六大保障体系、经营会议和岗位 SOP 参考资料。",
    "tags": [
      "流程化组织",
      "经营会议",
      "岗位 SOP",
      "管理体系"
    ],
    "flow": [
      "组织自运行模型",
      "六大体系保障",
      "流程化组织框架",
      "年度经营会议",
      "月度计划",
      "岗位 SOP"
    ],
    "audience": "希望把电商运营从个人经验推进到团队复制的管理者。",
    "deliverables": [
      "流程化组织诊断表",
      "年度经营会议材料",
      "月度计划模板",
      "岗位 SOP 清单"
    ],
    "checkpoints": [
      "目标是否能拆到人和动作",
      "流程是否有跟进机制",
      "激励是否和结果绑定"
    ],
    "riskNotes": [
      "流程化不是限制创造力",
      "没有目标和复盘的流程只会变成形式"
    ],
    "related": [
      "department-kb",
      "operator-training"
    ],
    "route": "/org/process-system",
    "imageCount": 70,
    "sectionCount": 17,
    "sections": [
      {
        "level": 1,
        "title": "流程化组织学习资料执行手册"
      },
      {
        "level": 2,
        "title": "模块定位"
      },
      {
        "level": 2,
        "title": "一、电商流程化组织自运行模型"
      },
      {
        "level": 3,
        "title": "电商流程化组织作战图"
      },
      {
        "level": 3,
        "title": "为什么流程化复制落地不下去"
      },
      {
        "level": 3,
        "title": "对流程化的误解"
      },
      {
        "level": 3,
        "title": "流程的好处"
      },
      {
        "level": 2,
        "title": "二、六大体系保障：流程化体系自动化"
      },
      {
        "level": 3,
        "title": "在线框选版本"
      },
      {
        "level": 3,
        "title": "打印版本和勾选版本"
      },
      {
        "level": 2,
        "title": "三、流程化组织框架"
      },
      {
        "level": 2,
        "title": "四、年度经营会议"
      }
    ],
    "assets": [
      {
        "source": "08-流程化组织学习资料参考-853113fd82c3e6792bfabad28a1c1b05_86d174b6-c8f2-4b5a-a986-3eb76a844578.png",
        "url": "/assets/process-system/image-01.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-10.png",
        "url": "/assets/process-system/image-02.png"
      },
      {
        "source": "08-流程化组织学习资料参考-d078c762ca24c724f8eb1b35557005a4__fallback_source=1&height=1280&mount_node_token=ChledHHOIoR2KtxuK5TcgkL4nZg&mount_point=docx_image&policy=equal&width=1280.png",
        "url": "/assets/process-system/image-03.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-9.png",
        "url": "/assets/process-system/image-04.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-7.png",
        "url": "/assets/process-system/image-05.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-3.png",
        "url": "/assets/process-system/image-06.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-8.png",
        "url": "/assets/process-system/image-07.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-5.png",
        "url": "/assets/process-system/image-08.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-6.png",
        "url": "/assets/process-system/image-09.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-4.png",
        "url": "/assets/process-system/image-10.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image.png",
        "url": "/assets/process-system/image-11.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-2.png",
        "url": "/assets/process-system/image-12.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-1.png",
        "url": "/assets/process-system/image-13.png"
      },
      {
        "source": "08-流程化组织学习资料参考-IMG_6366-opq3535101346.jpg",
        "url": "/assets/process-system/image-14.jpg"
      },
      {
        "source": "08-流程化组织学习资料参考-image-18.png",
        "url": "/assets/process-system/image-15.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-17.png",
        "url": "/assets/process-system/image-16.png"
      },
      {
        "source": "08-流程化组织学习资料参考-f70dd6c581b20ef86ad7c1a9eeafa579__fallback_source=1&height=1280&mount_node_token=CT88dYxnUorribxKfuFc0OtonNe&mount_point=docx_image&policy=equal&width=1280.png",
        "url": "/assets/process-system/image-17.png"
      },
      {
        "source": "08-流程化组织学习资料参考-7a00cc7c9a1e57375c9356512d5d7f5e__fallback_source=1&height=1280&mount_node_token=IsTldt7whoDWDUxzJGSc0d2bnql&mount_point=docx_image&policy=equal&width=1280.png",
        "url": "/assets/process-system/image-18.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-15.png",
        "url": "/assets/process-system/image-19.png"
      },
      {
        "source": "08-流程化组织学习资料参考-e76386b0b5db3342942d9fbf6e88f6ba__fallback_source=1&height=1280&mount_node_token=D13bdVTjboKnNDxws0IcJyMxnvg&mount_point=docx_image&policy=equal&width=1280.png",
        "url": "/assets/process-system/image-20.png"
      },
      {
        "source": "08-流程化组织学习资料参考-MEITU_20250628_150336871-opq3763812396.jpg",
        "url": "/assets/process-system/image-21.jpg"
      },
      {
        "source": "08-流程化组织学习资料参考-c37d677e814bb943f8df6213883bff93__preview_type=16.png",
        "url": "/assets/process-system/image-22.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-14.png",
        "url": "/assets/process-system/image-23.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-16.png",
        "url": "/assets/process-system/image-24.png"
      },
      {
        "source": "08-流程化组织学习资料参考-MEITU_20250628_195313718_batch_1_1751111688299-opq3765803207.jpg",
        "url": "/assets/process-system/image-25.jpg"
      },
      {
        "source": "08-流程化组织学习资料参考-image-12.png",
        "url": "/assets/process-system/image-26.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-11.png",
        "url": "/assets/process-system/image-27.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-13.png",
        "url": "/assets/process-system/image-28.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-31.png",
        "url": "/assets/process-system/image-29.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-32.png",
        "url": "/assets/process-system/image-30.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-29.png",
        "url": "/assets/process-system/image-31.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-30.png",
        "url": "/assets/process-system/image-32.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-26.png",
        "url": "/assets/process-system/image-33.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-27.png",
        "url": "/assets/process-system/image-34.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-25.png",
        "url": "/assets/process-system/image-35.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-28.png",
        "url": "/assets/process-system/image-36.png"
      },
      {
        "source": "08-流程化组织学习资料参考-6e9ead1020fdfcc6ddf73a68f58d01f6_75c044cd-28b8-45a0-9145-5d374597f04b.png",
        "url": "/assets/process-system/image-37.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-24.png",
        "url": "/assets/process-system/image-38.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-23.png",
        "url": "/assets/process-system/image-39.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-22.png",
        "url": "/assets/process-system/image-40.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-21.png",
        "url": "/assets/process-system/image-41.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-19.png",
        "url": "/assets/process-system/image-42.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-20.png",
        "url": "/assets/process-system/image-43.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-45.png",
        "url": "/assets/process-system/image-44.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-44.png",
        "url": "/assets/process-system/image-45.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-40.png",
        "url": "/assets/process-system/image-46.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-43.png",
        "url": "/assets/process-system/image-47.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-41.png",
        "url": "/assets/process-system/image-48.png"
      },
      {
        "source": "08-流程化组织学习资料参考-IMG_8362-opq3760820646.jpg",
        "url": "/assets/process-system/image-49.jpg"
      },
      {
        "source": "08-流程化组织学习资料参考-image-42.png",
        "url": "/assets/process-system/image-50.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-39.png",
        "url": "/assets/process-system/image-51.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-37.png",
        "url": "/assets/process-system/image-52.png"
      },
      {
        "source": "08-流程化组织学习资料参考-result-11-opq3534212108.jpg",
        "url": "/assets/process-system/image-53.jpg"
      },
      {
        "source": "08-流程化组织学习资料参考-image-36.png",
        "url": "/assets/process-system/image-54.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-38.png",
        "url": "/assets/process-system/image-55.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-34.png",
        "url": "/assets/process-system/image-56.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-33.png",
        "url": "/assets/process-system/image-57.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-35.png",
        "url": "/assets/process-system/image-58.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-55.png",
        "url": "/assets/process-system/image-59.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-51.png",
        "url": "/assets/process-system/image-60.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-52.png",
        "url": "/assets/process-system/image-61.png"
      },
      {
        "source": "08-流程化组织学习资料参考-7c49caafb2e35354a46e9471c4854ed3__fallback_source=1&height=1280&mount_node_token=doxcnVS1GpQGIYEpJhB9xUvLKXf&mount_point=docx_image&policy=equal&width=1280.png",
        "url": "/assets/process-system/image-62.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-54.png",
        "url": "/assets/process-system/image-63.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-53.png",
        "url": "/assets/process-system/image-64.png"
      },
      {
        "source": "08-流程化组织学习资料参考-result-2-opq3535267149.jpg",
        "url": "/assets/process-system/image-65.jpg"
      },
      {
        "source": "08-流程化组织学习资料参考-image-48.png",
        "url": "/assets/process-system/image-66.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-47.png",
        "url": "/assets/process-system/image-67.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-49.png",
        "url": "/assets/process-system/image-68.png"
      },
      {
        "source": "08-流程化组织学习资料参考-image-50.png",
        "url": "/assets/process-system/image-69.png"
      },
      {
        "source": "08-流程化组织学习资料参考-result-0-opq3532320393.jpg",
        "url": "/assets/process-system/image-70.jpg"
      }
    ]
  }
]

export const categories = [
  "选品测款",
  "素材测试",
  "增长优化",
  "市场调研",
  "团队管理",
  "组织流程"
]

export const moduleMap = Object.fromEntries(modules.map((item) => [item.id, item])) as Record<string, ModuleMeta>

export const totals = {
  modules: modules.length,
  images: modules.reduce((sum, item) => sum + item.imageCount, 0),
  sections: modules.reduce((sum, item) => sum + item.sectionCount, 0),
  categories: categories.length
}
