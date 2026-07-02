---
title: AI 爆款素材工作流研究雏形
description: 面向昊七七烤冷面的 AI 爆款视频、封面与素材产出研究底稿
---

<AIMaterialWarRoom />

## 研究记录

这份文档不是展示用途，而是研究用途。当前版本只建立一个大目标：让公司围绕同一张素材作战台，把情报、脚本、封面、拍摄、AI 生成、人工审核、投放测试、复盘沉淀连成闭环。

后续研究需要优先验证四件事：

- 哪些部门输入不真实，或者漏了关键部门
- 哪些 Agent 应该合并、拆分或换成人负责
- 封面点击率能否被单独归因，而不是混在视频质量里
- 哪些数据指标才真正决定昊七七烤冷面的素材去留

## Deep Research 摘要

这轮调研吸收了四类外部信号。第一，短视频广告平台普遍强调前几秒钩子、多版本创意测试和持续迭代。第二，封面/缩略图和标题会影响用户是否进入内容，因此应作为独立素材变量。第三，电商投放工具正在把 AIGC、素材诊断、素材生命周期管理和批量创意生产结合起来。第四，飞书多维表格、工作流、机器人和 AI Agent 节点适合承担“任务流转 + 数据回写 + 人工审核”的素材中台角色。

因此，这套方案不把 AI 当成单点工具，而把 AI 放进组织流程：AI 负责放大产能和提炼信息，人负责事实、边界、审美、风险和放量决策。

## 封面研究口径

封面不能作为视频导出后的附属动作处理。建议把封面拆成独立实验对象：同一条视频可以对应多个封面版本，每个封面版本要记录标题、主体、构图、利益点、场景、审核人和封面点击率。

如果点击率低，先判断封面是否没说清楚、主体是否不突出、价格利益是否弱、场景是否偏离目标人群；如果封面点击率高但 3 秒留存低，再判断视频开头是否没有承接封面承诺。

## 多维时间轴口径

“每个部门都不闲着”不能理解为所有人同时做视频，也不是日程排班。这里采用多维进度时间轴：横轴是某一份素材实验启动后的推进时间，纵轴是各小组泳道。每个条块表示该小组在这一段时间内推进的任务、交付物、依赖和审核节点。

这个图的研究价值在于看清三件事：哪些工作可以并行，哪些工作必须等待前置输入，哪些审核点会影响后续小组开工。后续如果要落地到飞书多维表格，可以把每个条块转成任务记录，把交付物、责任人、状态和阻塞原因作为字段。

## 参考资料

- [TikTok Creative Best Practices](https://ads.tiktok.com/help/article/creative-best-practices)
- [TikTok Video Shopping Ads Creative Codes](https://ads.tiktok.com/business/creativecenter/playbook/creative-codes/video-shopping-ads/pc/en)
- [YouTube Thumbnail and Title Tips](https://support.google.com/youtube/answer/12340300)
- [飞书多维表格工作流介绍](https://www.feishu.cn/hc/zh-CN/articles/908751305974-%E5%A4%9A%E7%BB%B4%E8%A1%A8%E6%A0%BC%E5%B7%A5%E4%BD%9C%E6%B5%81%E4%BB%8B%E7%BB%8D)
- [飞书工作流 AI Agent 节点](https://www.feishu.cn/hc/zh-CN/articles/643175485940-%E4%BD%BF%E7%94%A8%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%9A%84-ai-agent-%E8%8A%82%E7%82%B9)
- [飞书 aily 数字员工](https://www.feishu.cn/content/article/7631864469689240764)
- [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/)
- [OpenAI Function Calling](https://platform.openai.com/docs/guides/function-calling)
- [阿里妈妈万相营造](https://agi.alimama.com/)
