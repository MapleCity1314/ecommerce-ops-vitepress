import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const docsDir = path.join(root, 'docs');
const assetsDir = path.join(docsDir, 'public', 'assets');
const manualsDir = path.join(root, 'content', 'manuals');

const modules = [
  {
    id: 'product-test',
    title: '测款 SOP 流程搭建',
    sourceDir: '01-测款SOP流程搭建',
    out: 'sop/product-test.md',
    category: '选品测款',
    summary: '围绕新品测款的判断标准、数据评估和投放工具选择，形成可复制的测款作业流程。',
    tags: ['测款', '万相台', '数据评估', 'SOP'],
    flow: ['测款思路梳理', '数据评估体系', '工具选择', 'SOP 设置', '投放与复盘'],
    audience: '负责新品上架、付费测款和链接筛选的运营人员。',
    deliverables: ['测款计划', '关键词与出价记录', '测款数据复盘表'],
    checkpoints: ['预算是否能正常消耗', '点击和收藏加购是否达标', '是否明确继续放量或停止'],
    riskNotes: ['不要在样本量不足时下结论', '测款与测图目标要分开判断'],
    related: ['image-test', 'new-product']
  },
  {
    id: 'image-test',
    title: '测图 SOP 流程打造',
    sourceDir: '02-测图SOP流程打造',
    out: 'sop/image-test.md',
    category: '素材测试',
    summary: '把主图测试、点击率判断和工具选择沉淀为标准流程，降低素材测试的不确定性。',
    tags: ['测图', '点击率', '素材', 'SOP'],
    flow: ['测图思路梳理', '评估点击率', '工具选择', '测试设置', '结果归档'],
    audience: '负责主图测试、素材迭代和点击率优化的运营与美工。',
    deliverables: ['测图计划', '图片变量说明', '点击率对比表'],
    checkpoints: ['每张图是否获得足够点击', '是否只改变一个核心变量', '是否形成可复用素材结论'],
    riskNotes: ['不要把价格、标题和图片同时改变后归因', '低展现时优先排查出价和关键词'],
    related: ['click-rate', 'product-test']
  },
  {
    id: 'click-rate',
    title: '爆款点击率优化',
    sourceDir: '03-爆款点击率优化',
    out: 'growth/click-rate.md',
    category: '增长优化',
    summary: '从美工沟通、行业点击率参考、创意收集到付费测图，建立爆款主图优化闭环。',
    tags: ['点击率', '主图', '美工协同', '创意收集'],
    flow: ['明确提升目标', '参考行业点击率', '收集创意主图', '提炼文案构图', '对标设计', '付费测图'],
    audience: '需要把点击率提升转化为设计任务和测试闭环的运营负责人。',
    deliverables: ['点击率目标', '竞品创意库', '美工需求单', '测图复盘'],
    checkpoints: ['行业参考是否明确', '创意是否按构图和卖点分类', '美工需求是否可执行'],
    riskNotes: ['不要只说“做得更好看”', '对标不是照抄，需要拆解卖点与构图逻辑'],
    related: ['image-test', 'new-product']
  },
  {
    id: 'new-product',
    title: '新品快速打爆 SOP 流程',
    sourceDir: '04-新品快速打爆SOP流程',
    out: 'growth/new-product.md',
    category: '增长优化',
    summary: '将新品打爆的评估标准、递增方案和推荐流量入口整理为一套执行流程。',
    tags: ['新品', '打爆', '递增方案', '推荐流量'],
    flow: ['运营思路', '方案设计', '评估标准', '递增方案', '问题处理', '推荐流量入口'],
    audience: '负责新品冷启动、递增投放和爆款培育的运营人员。',
    deliverables: ['新品运营方案', '递增节奏表', '问题处理记录', '阶段复盘'],
    checkpoints: ['评估标准是否先于投放建立', '递增是否有节奏和停止条件', '免费与付费入口是否协同'],
    riskNotes: ['不要用预算掩盖产品承接问题', '拉升前先确认转化、评价和库存基础'],
    related: ['product-test', 'category-research']
  },
  {
    id: 'category-research',
    title: '快速调研类目玩法',
    sourceDir: '05-快速调研类目玩法',
    out: 'growth/category-research.md',
    category: '市场调研',
    summary: '通过行业榜单、潜力爆款、竞品监控和关键词数据，快速判断类目机会。',
    tags: ['类目调研', '竞品分析', '关键词', '增长机会'],
    flow: ['找到行业榜单', '识别潜力爆款', '分析 30 天数据', '监控竞品', '采集关键词', '查看付费推广'],
    audience: '负责选品前调研、竞品监控和新品机会判断的运营人员。',
    deliverables: ['类目机会清单', '竞品链接库', '关键词表', '付费推广观察记录'],
    checkpoints: ['竞品是否满足新链接和增长趋势', '是否采集成交关键词', '是否区分自然增长和付费拉动'],
    riskNotes: ['短期爆发链接要验证稳定性', '不要只看销量，需同时看流量结构和成交词'],
    related: ['new-product', 'click-rate']
  },
  {
    id: 'department-kb',
    title: '电商运营部门知识库',
    sourceDir: '06-电商运营部门知识库',
    out: 'team/department-kb.md',
    category: '团队管理',
    summary: '用于新人了解部门角色、业务资料、任务机制和常用协作入口。',
    tags: ['新人入职', '部门介绍', '知识库', '协作'],
    flow: ['了解业务', '阅读必读资料', '完成新人任务', '熟悉常用群组'],
    audience: '新入职运营、带教负责人和需要快速了解运营部门协作方式的成员。',
    deliverables: ['新人学习清单', '首周任务看板', '资料阅读记录', '协作入口清单'],
    checkpoints: ['是否理解部门目标', '是否知道日常输出物', '是否掌握请假、报销和协作入口'],
    riskNotes: ['知识库不是资料堆放，应对应新人任务', '外链资料失效时要及时替换'],
    related: ['operator-training', 'process-system']
  },
  {
    id: 'operator-training',
    title: '运营培育体系搭建',
    sourceDir: '07-运营培育体系搭建（岗位画像+招育留汰）',
    out: 'team/operator-training.md',
    category: '团队管理',
    summary: '围绕岗位画像、招聘流程、入职培训、试用期安排和晋升体系搭建运营人才梯队。',
    tags: ['岗位画像', '招聘', '培训', '晋升'],
    flow: ['岗位画像', '招聘前准备', '招人流程', '入职培训', '试用期安排', '晋升体系'],
    audience: '运营负责人、招聘协同人员、带教负责人和试用期管理者。',
    deliverables: ['岗位画像', '面试评估表', '入职培训计划', '试用期评估记录'],
    checkpoints: ['岗位能力是否拆清', '面试是否围绕实际任务', '试用期是否有阶段输出'],
    riskNotes: ['不要只看经验年限', '培养体系必须和业务目标及岗位产出绑定'],
    related: ['department-kb', 'process-system']
  },
  {
    id: 'process-system',
    title: '流程化组织学习资料参考',
    sourceDir: '08-流程化组织学习资料参考',
    out: 'org/process-system.md',
    category: '组织流程',
    summary: '沉淀电商流程化组织模型、六大保障体系、经营会议和岗位 SOP 参考资料。',
    tags: ['流程化组织', '经营会议', '岗位 SOP', '管理体系'],
    flow: ['组织自运行模型', '六大体系保障', '流程化组织框架', '年度经营会议', '月度计划', '岗位 SOP'],
    audience: '希望把电商运营从个人经验推进到团队复制的管理者。',
    deliverables: ['流程化组织诊断表', '年度经营会议材料', '月度计划模板', '岗位 SOP 清单'],
    checkpoints: ['目标是否能拆到人和动作', '流程是否有跟进机制', '激励是否和结果绑定'],
    riskNotes: ['流程化不是限制创造力', '没有目标和复盘的流程只会变成形式'],
    related: ['department-kb', 'operator-training']
  }
];

const categories = [...new Set(modules.map((item) => item.category))];

async function exists(file) {
  try {
    await fs.access(file);
    return true;
  } catch {
    return false;
  }
}

function normalizeHeading(text) {
  return text
    .replace(/<span[^>]*>/gi, '')
    .replace(/<\/span>/gi, '')
    .replace(/<u[^>]*>/gi, '')
    .replace(/<\/u>/gi, '')
    .replace(/&nbsp;|&#x20;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeMarkdown(text) {
  let output = text.replace(/\r\n/g, '\n');
  output = output.replace(/<span[^>]*>/gi, '');
  output = output.replace(/<\/span>/gi, '');
  output = output.replace(/<u[^>]*>/gi, '');
  output = output.replace(/<\/u>/gi, '');
  output = output.replace(/&nbsp;|&#x20;/gi, ' ');
  output = output.replace(/\[([^\]]+)\]\(\s*\)/g, '**附件：$1**');
  output = output.replace(/^#\s*-{6,}\s*$/gm, '---');
  output = output.replace(/\n{3,}/g, '\n\n');
  return output.trim();
}

function extractSections(markdown) {
  const sections = [];
  for (const match of markdown.matchAll(/^(#{1,3})\s+(.+)$/gm)) {
    const title = normalizeHeading(match[2]);
    if (!title || title === '---' || /^-+$/.test(title)) continue;
    sections.push({
      level: match[1].length,
      title
    });
  }
  return sections;
}

async function copyImages(markdown, mod) {
  const moduleAssetDir = path.join(assetsDir, mod.id);
  await fs.mkdir(moduleAssetDir, { recursive: true });
  const seen = new Map();
  let index = 1;

  return markdown.replace(/!\[([^\]]*)\]\((?:<)?images\/([^)>]+)(?:>)?\)/g, (full, alt, fileName) => {
    const cleanName = fileName.trim();
    if (!seen.has(cleanName)) {
      const ext = path.extname(cleanName).toLowerCase() || '.png';
      const targetName = `image-${String(index).padStart(2, '0')}${ext}`;
      seen.set(cleanName, `/assets/${mod.id}/${targetName}`);
      index += 1;
    }
    return `![${alt || mod.title}](${seen.get(cleanName)})`;
  });
}

async function materializeImages(markdown, mod) {
  const moduleAssetDir = path.join(assetsDir, mod.id);
  await fs.mkdir(moduleAssetDir, { recursive: true });
  const refs = [...markdown.matchAll(/!\[[^\]]*\]\((?:<)?images\/([^)>]+)(?:>)?\)/g)];
  const seen = new Map();
  const assets = [];
  let index = 1;

  for (const ref of refs) {
    const cleanName = ref[1].trim();
    if (seen.has(cleanName)) continue;
    const ext = path.extname(cleanName).toLowerCase() || '.png';
    const targetName = `image-${String(index).padStart(2, '0')}${ext}`;
    const source = path.join(root, mod.sourceDir, 'images', cleanName);
    const target = path.join(moduleAssetDir, targetName);
    if (!(await exists(source))) {
      console.warn(`Missing image: ${path.relative(root, source)}`);
    } else {
      await fs.copyFile(source, target);
    }
    const url = `/assets/${mod.id}/${targetName}`;
    seen.set(cleanName, targetName);
    assets.push({ source: cleanName, url });
    index += 1;
  }

  return assets;
}

function pagePreamble(mod, imageCount, sectionCount) {
  return [
    '---',
    `title: ${mod.title}`,
    `description: ${mod.summary}`,
    '---',
    '',
    `<DocHero module-id="${mod.id}" :image-count="${imageCount}" :section-count="${sectionCount}" />`,
    '',
    `<ModuleFlow module-id="${mod.id}" />`,
    '',
    `<RelatedDocs module-id="${mod.id}" />`,
    ''
  ].join('\n');
}

function expandImageShortcodes(markdown, mod, assets) {
  return markdown.replace(/\{\{image:(\d+)(?:\|([^}]+))?\}\}/g, (full, num, alt) => {
    const asset = assets[Number(num) - 1];
    if (!asset) return full;
    const label = alt?.trim() || mod.title;
    return `![${label}](${asset.url})`;
  });
}

function writeIndex() {
  return [
    '---',
    'layout: home',
    'title: 电商运营 SOP 作战台',
    'hero:',
    '  name: 电商运营 SOP 作战台',
    '  text: 从测款、测图到组织流程的内部知识库',
    '  tagline: 用结构化流程、资料地图和 Vue 可视化组件，把散落的运营经验变成可执行的团队资产。',
    '  actions:',
    '    - theme: brand',
    '      text: 第一轮执行闭环',
    '      link: /ai-material-execution-loop',
    '    - theme: alt',
    '      text: AI 研究草案',
    '      link: /ai-material-war-room',
    '    - theme: alt',
    '      text: 进入知识地图',
    '      link: /sop/product-test',
    '---',
    '',
    '<OpsDashboard />',
    '',
    '<KnowledgeMap />'
  ].join('\n');
}

function sidebarGroups(generated) {
  return [
    {
      text: 'AI 素材作战',
      items: [
        {
          text: '第一轮最小可执行闭环',
          link: '/ai-material-execution-loop'
        },
        {
          text: '爆款素材工作流雏形',
          link: '/ai-material-war-room'
        }
      ]
    },
    ...categories.map((category) => ({
      text: category,
      items: generated.filter((item) => item.category === category).map((item) => ({ text: item.title, link: item.route }))
    }))
  ];
}

function navItems() {
  return [
    { text: '作战台', link: '/' },
    { text: 'AI 执行闭环', link: '/ai-material-execution-loop' },
    { text: 'AI 研究草案', link: '/ai-material-war-room' },
    { text: '测款测图', link: '/sop/product-test' },
    { text: '增长优化', link: '/growth/click-rate' },
    { text: '团队体系', link: '/team/department-kb' },
    { text: '组织流程', link: '/org/process-system' }
  ];
}

function frontMatterSafe(value) {
  return String(value).replace(/"/g, '\\"');
}

async function main() {
  await fs.mkdir(docsDir, { recursive: true });
  await fs.rm(path.join(docsDir, 'sop'), { recursive: true, force: true });
  await fs.rm(path.join(docsDir, 'growth'), { recursive: true, force: true });
  await fs.rm(path.join(docsDir, 'team'), { recursive: true, force: true });
  await fs.rm(path.join(docsDir, 'org'), { recursive: true, force: true });
  await fs.rm(assetsDir, { recursive: true, force: true });
  await fs.mkdir(assetsDir, { recursive: true });

  const generated = [];

  for (const mod of modules) {
    const sourceMd = path.join(root, mod.sourceDir, `${mod.sourceDir}.md`);
    const manualMd = path.join(manualsDir, `${mod.id}.md`);
    const raw = await fs.readFile(sourceMd, 'utf8');
    const assets = await materializeImages(raw, mod);
    const imageCount = [...new Set([...raw.matchAll(/!\[[^\]]*\]\((?:<)?images\/([^)>]+)(?:>)?\)/g)].map((item) => item[1].trim()))].length;
    const sourceContent = (await exists(manualMd)) ? await fs.readFile(manualMd, 'utf8') : await copyImages(raw, mod);
    let content = normalizeMarkdown(expandImageShortcodes(sourceContent, mod, assets));
    const sections = extractSections(content);
    const outPath = path.join(docsDir, mod.out);
    await fs.mkdir(path.dirname(outPath), { recursive: true });
    await fs.writeFile(outPath, `${pagePreamble(mod, imageCount, sections.length)}\n${content}\n`, 'utf8');
    generated.push({
      ...mod,
      route: `/${mod.out.replace(/\.md$/, '')}`,
      imageCount,
      sectionCount: sections.length,
      sections: sections.slice(0, 12),
      assets
    });
  }

  await fs.writeFile(path.join(docsDir, 'index.md'), `${writeIndex()}\n`, 'utf8');
  const dataFile = path.join(docsDir, '.vitepress', 'theme', 'data', 'modules.ts');
  await fs.mkdir(path.dirname(dataFile), { recursive: true });
  await fs.writeFile(
    dataFile,
    `export type ModuleMeta = {
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

export const modules: ModuleMeta[] = ${JSON.stringify(generated, null, 2)}

export const categories = ${JSON.stringify(categories, null, 2)}

export const moduleMap = Object.fromEntries(modules.map((item) => [item.id, item])) as Record<string, ModuleMeta>

export const totals = {
  modules: modules.length,
  images: modules.reduce((sum, item) => sum + item.imageCount, 0),
  sections: modules.reduce((sum, item) => sum + item.sectionCount, 0),
  categories: categories.length
}
`,
    'utf8'
  );

  const sidebarFile = path.join(docsDir, '.vitepress', 'theme', 'data', 'sidebar.ts');
  await fs.writeFile(
    sidebarFile,
    `export const sidebar = ${JSON.stringify(sidebarGroups(generated), null, 2)}

export const nav = ${JSON.stringify(navItems(), null, 2)}
`,
    'utf8'
  );

  const manifestFile = path.join(docsDir, '.vitepress', 'theme', 'data', 'generated-manifest.json');
  await fs.writeFile(
    manifestFile,
    `${JSON.stringify({
      generatedAt: 'stable',
      modules: generated.map((item) => ({
        id: item.id,
        title: item.title,
        route: item.route,
        imageCount: item.imageCount,
        sectionCount: item.sectionCount
      }))
    }, null, 2)}\n`,
    'utf8'
  );

  console.log(`Generated ${generated.length} docs, ${generated.reduce((sum, item) => sum + item.imageCount, 0)} images.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
