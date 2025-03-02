import React from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent,
  Container,
  styled,
  Fade
} from '@mui/material';
import MainLayout from '../components/Layout/MainLayout';
import { ScrollContainer } from '../styles/globalStyles';
import Footer from '../components/Layout/Footer';

const ContentCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'rgba(26, 31, 37, 0.8)',
  backdropFilter: 'blur(10px)',
  borderRadius: '20px',
  border: '1px solid rgba(255,255,255,0.1)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, var(--primary), transparent)',
    opacity: 0,
    transition: 'opacity 0.3s ease'
  },
  '&:hover': {
    transform: 'translateY(-8px)',
    borderColor: 'var(--primary)',
    boxShadow: '0 12px 28px rgba(0,0,0,0.3)',
    '&::before': {
      opacity: 1
    }
  }
}));

const HeroBanner = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(12, 0),
  backgroundColor: '#1a1f25',
  borderBottom: '1px solid rgba(255,255,255,0.1)',
  marginBottom: theme.spacing(6),
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(120,255,205,0.08) 0%, rgba(0,0,0,0) 100%)',
    zIndex: 0
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle, rgba(120,255,205,0.03) 0%, rgba(0,0,0,0) 50%)',
    animation: 'pulse 15s infinite',
    zIndex: 0
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'translate(-50%, -50%) scale(1)'
    },
    '50%': {
      transform: 'translate(-50%, -50%) scale(1.2)'
    },
    '100%': {
      transform: 'translate(-50%, -50%) scale(1)'
    }
  }
}));

const SlideInTitle = styled(Typography)(({ theme }) => ({
  animation: 'slideInFromLeft 1s ease-out',
  '@keyframes slideInFromLeft': {
    '0%': {
      transform: 'translateX(-100%)',
      opacity: 0
    },
    '100%': {
      transform: 'translateX(0)',
      opacity: 1
    }
  }
}));

const About = () => {
  const [showTitle, setShowTitle] = React.useState(false);
  const [showIntro, setShowIntro] = React.useState(false);
  const [showDivisionTitle, setShowDivisionTitle] = React.useState(false);
  const [showDivisionContent, setShowDivisionContent] = React.useState(false);

  React.useEffect(() => {
    // 標題動畫
    setShowTitle(true);

    // 簡介動畫 (1秒後)
    const introTimer = setTimeout(() => {
      setShowIntro(true);
    }, 1000);

    // 分組標題動畫 (1.5秒後)
    const divisionTitleTimer = setTimeout(() => {
      setShowDivisionTitle(true);
    }, 1500);

    // 分組內容動畫 (2秒後)
    const divisionContentTimer = setTimeout(() => {
      setShowDivisionContent(true);
    }, 2000);

    return () => {
      clearTimeout(introTimer);
      clearTimeout(divisionTitleTimer);
      clearTimeout(divisionContentTimer);
    };
  }, []);

  const articleData = [
    {
      title: '基金會簡介',
      content: '財團法人台北市老人基金會於民國76年(1987)7月20日經台北市政府社會局核准設立，以「老吾老以及人之老」為服務宗旨。在因應時代環境的老者需求下，陸續成立助養組、防護組、協尋祖、救援組，以貧困、孤苦、遭棄養的老人為主要協助對象，90年起成立服務組，使服務範疇擴及一般老人。老人基金會在台北立案，但服務範圍遍及台灣和正在進行的大陸，我們以犧牲、奉獻、卑微的心態，尊重、關懷老年人，期望竭盡所能的協助需要協助的老人。'
    },
    {
      title: '基金會分組',
      content: `●助養組　照顧貧苦無依老人\n助養老人：每月定期補助貧苦無依老人生活費用。\n急難救助：依個案狀況救助急難之貧苦無依老人。\n關懷訪視：每月定期依需要探望並致送食品物品。\n其他服務：環境整理、醫療轉介及其他困難事務。\n年度活動：辦理寒冬送暖等特定節日之關懷活動。\n\n●防護組　防制保護受虐老人\n防制\n宣導對老年人應有之respect與關懷。\n辦理老人保護義工之訓練、講習。\n法律及其他老人問題諮詢及協助。\n\n保護\n個案訪查、溝通、協談、調解。\n個案持續問安連繫、觀察保護。\n緊急個案立廿四時即救援庇護。\n\n●協尋組　協助尋找迷途老人\n預警：特徵建檔與比對，協助迷途老人後送。\n協尋：媒體宣導與訪查、協助老人返家善後。\n\n●救援組　機動救援急難老人\n監控獨居、病患老人求救訊號。\n二十四小時立即救援急難老人。\n老人居家問安及協助緊急事件。\n協助支援各公益團體緊急事項。\n\n●服務組　協助服務一般老人\n辦理老人健康活動。\n提供老人資訊諮詢。\n老人問題研究計劃。\n老人相關協助服務。`
    },
    {
      title: '基金會記事',
      content: `76.07 財團法人臺北市老人基金會經臺北市政府社會局登記設立，參與老人福利服務工作。

    76.12 設置老人諮詢中心，整合相關老人研究議題。
    77.04 設置助養組協助貧困無依老人。
    78.01 『寒冬送暖』系列活動包含望年餐會，致贈助養品、助養金，至今持續進行中。
    78.07 助養組推動會審會辦，個案管理制度。
    79.01 成立24小時全年無休老人救援中心。
    80.03 與中國老年基金會合作交流。
    80.12 製作金色年華、重陽節等老人福利電視節目。
    81.04 推動獨居老人居家保全『生命連線』系統。
    81.12 設置防護組，協助受虐老人。
    82.10 與中視聯合制作『養兒防老』節目報導獨居、失養之孤苦老人，使社會大眾正視獨居老人問題。
    83.03 『生命關懷愛心連線』召集北區無線電計程車聯誼會七仟輛車，成立獨居老人緊急救援系統。
    83.07 『老人保護委員會』由基金會邀集五十八位立委共同出席，達成老人福利相關法案之推動。
    84.02 協助14、15號公園拆遷戶老人尋找安置新家。
    84.06 與中央員警大學合辦『和諧專案』，配合全省一萬五仟位勤區員警，主動提報疑似受虐老人個案。
    85.06 推動修正老人福利法，確立老人為65歲以上，並增加老人保護專章。
    85.06 完成國內首冊老人保護計畫書。
    86.01 成立桃園、新竹、苗栗、台中、南投、嘉義、台南、高雄八處老人防護聯絡處。
    8.07 設置『老人中途之家』24小時緊急安置迷途、受虐老人。
    87.01 『希望之燈』寒冬送暖系列活動，發掘千餘位需協助個案。
    87.12 設置協尋組，協助迷途老人。
    88.01 與中視、聯合報、警廣製作『他在哪里?』迷途老人協尋專案，協助800位老人返家團圓。
    88.05 召開全國安養護會議，協助輔導七佰余家安養護機構合法立案。
    88.06 與東森s台聯合制作『老有所養』單元，報導獨居老人個案協尋迷途老人。
    88.07 一九九九年國際關懷年『我愛老人公益宣誓』十二位新聞主播以愛心手印，發起關懷獨居老人活動。
    88.09 『921震災黃菊花重生計畫』921地震後基金會緊急安置失能老人274位，關懷協助災區低收入戶及失依老人逾2000件個案，至今仍持續輔導中。
    88.11 與廣青合唱團共同舉辦『守護黃菊花音樂會』，以紀念921死難老人。
    89.01 『寒冬送暖』於臺北市內湖區團管司令部，宴請一仟名獨居老人春節圍爐並致贈紀念品及紅包。
    89.03 由本會及義工結合扶青團組成獨居老人在宅服務。
    89.05 『母親節愛心連線敬老活動』，致贈送500具聲控手機予貧苦獨居老人，使老人在危難時候能獲得及時幫助。
    89.06 與臺北縣警察局合作協尋老人資料比對及資源整合會議，期待協助更多迷途老人歸家。
    89.07 設立921災區中寮鄉、仁愛鄉重建委員會。
    89.07 與臺北市政府共同發表家庭暴力防治法推行宣導成立發表會，專案提出老人受虐個案研討及防治方法。
    89.08 『失蹤老人何處尋』公聽會，由本會甘秘書長及立法院張蔡美委員等共同主持，警政署、資策會等參與。
    89.08 農禪寺中元祭吊念本會四千位過世個案獨居老人，以慰其在天之靈。
    89.10 協助東森電視臺，探討社會獨居老人個案。並協助東森新聞協尋老人單元開播，促使社會大眾對迷途老人問題之關注。
    89.10 教育電臺『黃金歲月』節目播出，以老人生活及社會互動關係為主題，使老人在社會的參與協助下，有更優質的生活品質。
    89.11 臺北之音電臺現場節目播出，由本會甘秘書長及譚艾珍小姐共同主持，以有效宣導老人如何過生活為主題。
    89.12 協助全省二十一縣市設置獨居老人生命連線。
    89.12 『千山萬水總是情』敬老孝親陪老人走向戶外活動，在捷運淡園廣場，參與老人五千人。
    90.02 設置服務組，提供老人全方位的服務。
    90.03 與臺北市立體育場合辦『長青族運動研習營』活動，參與老人二萬人以上，成功推展銀髮族全民運動。
    90.05 與中天新聞台及中華電信共同舉辦『尋找臺灣關懷心』活動。
    90.05 母親節當天于立法院召開尋親記者會，發表協尋個案母親請求協尋失蹤父母。
    90.07 協助行政院國科會研究計畫『都市政策、政策網路與地方政府社會福利建構之研究』。
    90.07 本會甘秘書長受邀日本政府內政聽代表亞洲區研究老人福利政策及日本黃金法案政策階段執行成效討論會議。
    90.12 『2001銀髮嘉年華』于大安森林公園舉辦歡樂遊園會，邀請老人參與健康休閒活動，與會老人八仟人。
    91.03 獲頒總統褒獎全國十大優良基金會。
    91.08 『2002 銀髮運動研習營』活動，與會老人及民眾逾25000人。
    91.10 『銀髮重陽敬老列車』與臺北捷運公司共同發起于重陽節期間，鼓勵老人搭乘捷運活動，參與老人達四十萬人次。
    92.07 『銀髮奇機』與中華電信合作，推出適用于老人的行動電話，結合基地台定位等多項服務專案。
    93.06 『第一屆老人運動會』規劃健走、健跑、游泳、桌球、羽球、網球、籃球、木球、槌球、地面高球、歌唱、象棋、圍棋、麻將、攝影十五項競賽，參與老人二萬余人。
    94.10 『第二屆老人運動會』于臺北小巨蛋舉行，參與老人三萬余人。
    95.10 『第三屆老人運動會』于臺北田徑場舉行，新增鐵人賽項目，參與老人四萬余人。
    96.04 辦理老人助養總檢討，訂定會審會辦、個案管理方案，及三項特案老人補助辦法。
    97.05 邀請大陸各地老齡辦參觀訪問，討論兩岸老人福利服務辦法及建言。
    98.10 辦理第六屆臺北老人運動會，增加老齡橄欖球、足球競賽項目。
    99.07 辦理助防協三組個案總清查和檢討。
    100.03 建國百年慶助活動，帶領老人遊園踏青。
    101.02 風雲杯全國麻將比賽，由本會和臺北市老年運動協會共同舉辦。
    101.09 與中國國家康復輔具研究中心合作養老護理臺灣模式。
    102.06 辦理老年服務講習，培訓優秀服務人員。
    102.11 第十屆臺北老年運動會，百齡和九十歲以上高齡選手參加踴躿。
    103.07 兩岸老年產業研討會，於北京開幕。
    104.10 第十二屆台北老年運動會，九十歲以上選手超過三十位。
    105.08 老年90網站及呼叫中心啟動。
    105.08 老年生命年限網站及呼叫中心啟動。
    106.09 辦理台灣大學2017台北老年運動會。
    107.07 辦理養老照料中心。
    108.03 推動90乾糧專案。`
    }
  ];

  return (
    <MainLayout>
      <ScrollContainer>
        <HeroBanner>
          <Container maxWidth="lg">
            <Box sx={{ position: 'relative', zIndex: 1, py: 8 }}>
              <Fade in={showTitle} timeout={1000}>
                <SlideInTitle
                  variant="h3" 
                  sx={{ 
                    fontWeight: 'bold', 
                    color: '#fff',
                    textAlign: 'center',
                    mb: 3
                  }}
                >
                  關於本會
                </SlideInTitle>
              </Fade>
              <Fade in={showIntro} timeout={1000}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: 'rgba(255,255,255,0.7)',
                    textAlign: 'center',
                    maxWidth: '800px',
                    mx: 'auto',
                    lineHeight: 1.8
                  }}
                >
                  {articleData[0].content}
                </Typography>
              </Fade>
            </Box>
          </Container>
        </HeroBanner>

        <Container maxWidth="lg" sx={{ mb: 8 }}>
          <Box sx={{ mb: 6 }}>
            <Fade in={showDivisionTitle} timeout={1000}>
              <SlideInTitle variant="h4" sx={{ 
                fontWeight: 'bold',
                color: '#fff',
                mb: 4
              }}>
                {articleData[1].title}
              </SlideInTitle>
            </Fade>
            <Fade in={showDivisionContent} timeout={1000}>
              <Typography variant="body1" sx={{ 
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 2,
                fontSize: '1.1rem',
                whiteSpace: 'pre-line',
                pl: 3
              }}>
                {articleData[1].content}
              </Typography>
            </Fade>
          </Box>

          <Box sx={{ mb: 6 }}>
            <ContentCard sx={{ height: '500px', overflow: 'hidden' }}>
              <CardContent sx={{ p: 4, height: '100%', overflow: 'auto' }}>
                <Typography gutterBottom variant="h5" sx={{ 
                  fontWeight: 'bold',
                  color: 'var(--primary)',
                  mb: 3
                }}>
                  {articleData[2].title}
                </Typography>
                <Typography variant="body1" sx={{ 
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.8,
                  whiteSpace: 'pre-line'
                }}>
                  {articleData[2].content}
                </Typography>
              </CardContent>
            </ContentCard>
          </Box>
        </Container>
        <Box sx={{ mt: 8 }}>
          <Footer />
        </Box>
      </ScrollContainer>
    </MainLayout>
  );
};

export default About;