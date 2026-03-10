export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const data: Project[] = [
  {
    title: '滴滴出行',
    subtitle: '策略运营/产品实习生',
    image: '/images/projects/harvest.jpg',
    date: '2025-09 - 2025-12',
    desc: '负责补贴策略优化、车主增长与活跃运营，通过AB测试动态调整新用户补贴力度，将首页弹窗转化率从1.39%提升至1.45%，日均七日订单从64提升至240；主导顺风车大首页智能卡片项目，覆盖日均50万潜在用户，成为业务增长新渠道；设计新车主"认证即发券"方案，日发券量达3万+，带动能源业务日均1000+订单、洗车业务200+订单，顺风车首单日均增量600+',
    tech: ['产品设计', '策略运营', 'AB测试', 'SQL', '用户增长', '数据复盘'],
    featured: true,
  },
  {
    title: '长桥',
    subtitle: '产品运营实习生',
    image: '/images/projects/nearestdollar.jpg',
    date: '2025-04 - 2025-09',
    desc: '独立负责"任务中心"体系产品设计与迭代，撰写完整PRD并跟进落地，核心用户参与率提升30%；主导策划抽奖运营活动，连续4周参与用户数周环比增幅超15%；设计上线新手成长任务体系，显著缩短新用户从注册到首次交易的转化路径；搭建活动数据监控看板，用户召回活动月环比召回率提升10%',
    tech: ['产品设计', 'PRD撰写', '活动策划', '用户生命周期管理', '数据驱动'],
    featured: true,
  },
  {
    title: '字节跳动',
    subtitle: '内容运营实习生',
    image: '/images/projects/spacepotato.jpg',
    date: '2025-01 - 2025-02',
    desc: '聚焦短剧赛道搭建"趋势-用户-内容"三维高潜话题挖掘机制，助力短剧内容爆款率提升15%；负责2000+条短视频标题与文案创作，推动标题点击率提升18%，完播率提升12%',
    tech: ['内容运营', '短视频策划', '爆款打造', '数据迭代'],
    featured: true,
  },
  {
    title: '新浪娱乐',
    subtitle: '内容运营实习生',
    image: '/images/projects/catdetector.jpg',
    date: '2023-03 - 2023-07',
    desc: '负责微博视频账号日常运营，日均产出5+条视频内容，多数视频播放量稳定在30万+，单周净增粉丝300+；独立策划"扫楼"线下互动活动，相关话题累计获得107+万阅读量，深度参与华表奖等大型盛典宣发，助推5支视频登上微博热门流',
    tech: ['内容运营', '活动策划', '热点运营', '新媒体运营'],
  },
];

export default data;
