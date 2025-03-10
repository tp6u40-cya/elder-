import React from 'react';
import ElderlyServedChart from '../components/ElderlyServedChart';
import { Typography, Box, Container, Accordion, AccordionSummary, AccordionDetails, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import MainLayout from '../components/Layout/MainLayout';
import { ScrollContainer } from '../styles/globalStyles';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HelpIcon from '@mui/icons-material/Help';
import SearchIcon from '@mui/icons-material/Search';
import SupportIcon from '@mui/icons-material/Support';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SecurityIcon from '@mui/icons-material/Security';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '../components/Layout/Footer';

const HeroBanner = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(8, 0),
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(6),
  width: '100%',
  height: '70vh',
  minHeight: '600px',
  maxHeight: '800px',
  overflow: 'hidden',
  borderRadius: theme.spacing(2),
  zIndex: 1,
  backgroundColor: '#1a1f25',
  borderBottom: '1px solid rgba(255,255,255,0.1)',
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
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle, rgba(120,255,205,0.03) 0%, rgba(0,0,0,0) 50%)',
    zIndex: 0
  }
}));

const BigCarouselContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  position: 'relative',
  zIndex: 1,
  padding: theme.spacing(4),
  '& .carousel': {
    height: '100%'
  },
  '& .carousel .slide': {
    height: '100%',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(3),
    padding: theme.spacing(2)
  },
  '& .carousel .slide img': {
    width: 'calc(50% - 24px)',
    height: '90%',
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: theme.spacing(2),
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
  },
  '& .carousel .control-dots': {
    bottom: '20px',
    zIndex: 2
  },
  '& .carousel .control-dot': {
    background: '#fff',
    opacity: 0.7,
    width: '12px',
    height: '12px',
    margin: '0 8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    '&.selected': {
      background: theme.palette.primary.main,
      opacity: 1
    }
  },
  '& .carousel .control-arrow': {
    fontSize: '24px',
    background: 'rgba(255, 255, 255, 0.15)',
    opacity: 0.8,
    width: '50px',
    height: '50px',
    top: '50%',
    transform: 'translateY(-50%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.25)',
      opacity: 1
    },
    '&:before': {
      content: "''",
      width: '15px',
      height: '15px',
      borderWidth: '3px 3px 0 0',
      borderStyle: 'solid',
      borderColor: '#fff',
      transform: 'rotate(45deg)',
      margin: '0 8px',
      position: 'absolute'
    },
    '&.control-prev:before': {
      transform: 'rotate(-135deg)',
      marginLeft: '12px'
    },
    '&.control-next:before': {
      transform: 'rotate(45deg)',
      marginRight: '12px'
    }
  }
}));
const StyledAccordion = styled(Accordion)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px !important',
  marginBottom: theme.spacing(2),
  border: '1px solid rgba(255, 255, 255, 0.1)',
  '&:before': {
    display: 'none',
  },
  '& .MuiAccordionSummary-root': {
    borderRadius: '16px',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.1)',
    },
  },
  '& .MuiAccordionSummary-content': {
    margin: theme.spacing(2, 0),
  },
  '& .MuiAccordionDetails-root': {
    padding: theme.spacing(3),
  },
}));

const CarouselContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'auto', // ✅ 確保高度根據內容調整
  position: 'relative',
  zIndex: 1,
  padding: theme.spacing(2),
  '& .carousel': {
    height: 'auto', // ✅ 讓輪播高度自適應
  },
  '& .carousel .slide': {
    height: 'auto', // ✅ 確保圖片不會被強制拉伸
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(1),
  },
  '& .carousel .slide img': {
    width: '100%', // ✅ 確保圖片佔滿輪播區域
    height: 'auto', // ✅ 保持圖片原始比例
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: theme.spacing(2),
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    margin: '0 auto',
  },
  '& .carousel .control-dots': {
    bottom: '10px',
    zIndex: 2,
  },
  '& .carousel .control-dot': {
    background: '#fff',
    opacity: 0.7,
    width: '8px',
    height: '8px',
    margin: '0 6px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    '&.selected': {
      background: theme.palette.primary.main,
      opacity: 1,
    },
  },
  '& .carousel .control-arrow': {
    fontSize: '20px',
    background: 'rgba(255, 255, 255, 0.15)',
    opacity: 0.8,
    width: '40px',
    height: '40px',
    top: '50%',
    transform: 'translateY(-50%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    [theme.breakpoints.down('sm')]: {
      width: '30px',
      height: '30px',
    },
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.25)',
      opacity: 1,
    },
  },
}));

const HomePage = () => {
  const services = [
    {
      title: '老人救援',
      content: '老人基金會自79年起設置救援組，廿四小時全年無休的協助需要緊急協助的老人；81年規劃製作「生命關懷、愛心連線」系統，連線及監控獨居老人緊急通報；83年配合無線電計程車聯誼會中七千輛駕駛成立救援大隊，並訓練五佰位救援隊員，機動救援散居各地獨居老人；86年成立「中途之家」安置受虐、迷途老人；88年921地震第二天趕赴災區，搜尋各處老人，並安置於中部地區各養護機構，設立災區各地服務中心，服務五年；89年協助台灣各地設置獨居老人緊急通報連線。\n\n基金會感謝各地勤務指揮中心和各地醫療機構熱心配合、也為曾經受救援、協助的老人，向救援隊員致上最高謝意。',
      images: Array.from({ length: 5 }, (_, i) => `${process.env.PUBLIC_URL}/images/services/rescue/elderly_rescue_${i + 1}.jpg`)
    },
    {
      title: '老人協尋',
      content: '老人基金會自87年起設置協尋組，萬分感謝中國電視、聯合報、警廣電台、東森電視義務免費報導老人走失個案，使得成功促成約二仟位老人回家團圓，其中走失最長老人為廿四年。\n\n當確定老人個案時，家屬緊張期待的心情和相見時歡樂情景，每逢令基金會工作人員感到充實和滿足。由於大家常視老人健忘為正常現象，可是當老人在外時，記憶中最重要的姓名、電話、地址卻從記憶中消失，加上台灣的後送作業，這位老人可能就在世上消失，其實大部份的老人是在某個單位收容，家屬四處尋找沒有結果，生要見人、死要見屍，總無法如願，心中焦急、徬徨、自責，可知，建議家中的老人衣服上寫上電話號碼。',
      images: Array.from({ length: 5 }, (_, i) => `${process.env.PUBLIC_URL}/images/services/search/elderly_search_${i + 1}.jpg`)
    },
    {
      title: '老人服務',
      content: '老人基金會自設立後，每年辦理寒冬送暖系列活動、望年餐會，母親節、父親節、端午節、中秋節、中元節、重陽節等各項活動；80年起製作金色年華、重陽節等電視節目；88年起為協助安養機構立案，規劃全國安養護會議系列活動；90年正式成立服務組；91年為鼓勵老年人搭乘捷運，辦理銀髮重陽列車活動，參加老人超過四十萬人次；91年起為鼓勵老年人運動，辦理銀髮運動研習營，93年起正式每年辦理台北老人運動會，參加人數均超過二萬位。由於老人活動需要有人帶領，基金會總是努力的辦理各項活動，服務老人，只是基金會自設立以來，從不向政府單位申請補助，完全仰賴社會贊助，僅此感謝所有曾經贊助老人活動的個人、單位，祝福您們!',
      images: Array.from({ length: 4 }, (_, i) => `${process.env.PUBLIC_URL}/images/services/service/elderly_service_${i + 1}.jpg`)
    },
    {
      title: '老人助養',
      content: '老人基金會自77年起，對散居各地的貧困無依老人展開關懷協助，二十餘年來協助個案累積逾數萬位，部分個案協助期約二十年。\n\n由於近期來社會福利制度已臻健全，低收入老人獲得政府生活補助，但仍有三種老人成為社會福利制度邊緣人：\n\n一：居住地點非戶籍所在地，無法獲得補助。\n二：已獲得補助，但不足以支付實際生活需求。\n三：子女未盡撫養義務，卻造成老人無法申請補助。\n\n由於助養工作係本會設立初衷，且許多老人多年來一直由本會照顧中，故助養組將堅定持續這項充滿愛心與感動的工作。',
      images: Array.from({ length: 10 }, (_, i) => `${process.env.PUBLIC_URL}/images/services/support/${i + 1}.jpg`)
    },
    {
      title: '老人防護',
      content: '老人基金會自81年起設置防護組，防制保護受虐老人。設立老人保護委員會，由五十八位立委和十七位學者擔任榮譽顧問，成立全省八處連絡處，與中央警察大學犯罪防治研究所合作「和諧專案」，以一萬五仟位勤區員警，運用戶口查察時機和平時對轄區瞭解，主動提報疑似受虐老人個案，每年均有二仟餘件。在媒體報導下，老人受虐逐漸受到重視，85年老人福利法修訂時，增加保護措施專章，以縣、市單位建立老人保護體系。中國人以敬老悌為傳統，對於子女無論身體、精神或經濟等方式的虐待，內心至為傷痛，常常自家人無法融和的事，基金會以第三者立場居中協調，卻出意外表的順利，主要在於大家仍然認為孝順父母是正確的事。',
      images: Array.from({ length: 10 }, (_, i) => `${process.env.PUBLIC_URL}/images/services/protection/${i + 1}.jpg`)
    },
    {
      title: '志工服務',
      content: '老人基金會自設立以來，許多工作均由志工共同執行，大家出錢出力，沒有任何要求，只想盡心盡力，服務老人。83年間，由於無線電計程車聯誼會的加入，志工人數曾超過三萬人。南山人壽總經理曾率員工參加關懷貧困無依老人一日志工，據稱所有同仁深感從此改變人生觀。\n\n每個人都會老，從老人身上可以看到自己的未來，也可以說是另一種愓勵，而關心老人，實際的協助老人，心中的充實和喜悅，非言語所能形容。\n\n基金會秘書長甘玉玦曾在91年5月25日辦理志工研習會，由於參與志工問題太多，而延誤赴香港會議，原所訂的飛機即為華航澎湖空難飛機。對於許許多多曾經參與基金會活動的社會志工，謝謝您們，祝大家平安、健康。',
      images: Array.from({ length: 7 }, (_, i) => `${process.env.PUBLIC_URL}/images/services/volunteer/${i + 1}.jpg`)
    }
  ];
  const ContentCard = styled(Box)(({ theme }) => ({
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
    border: '1px solid rgba(255, 255, 255, 0.1)'
  }));
  const carouselImages = [
    `${process.env.PUBLIC_URL}/images/home/home_1.jpg`,
    `${process.env.PUBLIC_URL}/images/home/home_5.jpg`,
    `${process.env.PUBLIC_URL}/images/home/home_2.jpg`,
    `${process.env.PUBLIC_URL}/images/home/home_3.jpg`,
    `${process.env.PUBLIC_URL}/images/home/home_4.jpg`,
    `${process.env.PUBLIC_URL}/images/home/home_6.jpg`, 
    `${process.env.PUBLIC_URL}/images/home/home_7.jpg`,
    `${process.env.PUBLIC_URL}/images/home/home_10.jpg`,
    `${process.env.PUBLIC_URL}/images/home/home_9.jpg`,
    `${process.env.PUBLIC_URL}/images/home/home_8.jpg`,
    
  ];
 
  return (
    <MainLayout>
      <ScrollContainer>
        <HeroBanner>
          <BigCarouselContainer>
            <Carousel
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
              transitionTime={500}
              dynamicHeight={true}
              centerMode={false}
              centerSlidePercentage={100}
            >
                {Array.from({ length: Math.ceil(carouselImages.length / 2) }, (_, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
                  <img src={carouselImages[index * 2]} alt={` ${index * 2 + 1}`} />
                  {carouselImages[index * 2 + 1] && (
                    <img src={carouselImages[index * 2 + 1]} alt={` ${index * 2 + 2}`} />
                  )}
                </div>
              ))}
            </Carousel>
          </BigCarouselContainer>
        </HeroBanner>
  
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            color: 'var(--primary)',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 6,
          }}
        >
          服務項目
        </Typography>
  
        <Container maxWidth={false} sx={{ maxWidth: '1600px', mx: 'auto', px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
            {services.map((service, index) => (
            <Grid item xs={12} sm={6} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box sx={{ width: '100%', maxWidth: '100%' }}>
                <StyledAccordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                    aria-controls={`panel${index}a-content`}
                    id={`panel${index}a-header`}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {service.title === '老人救援' && <HelpIcon sx={{ color: '#fff' }} />}
                      {service.title === '老人協尋' && <SearchIcon sx={{ color: '#fff' }} />}
                      {service.title === '老人服務' && <SupportIcon sx={{ color: '#fff' }} />}
                      {service.title === '老人助養' && <VolunteerActivismIcon sx={{ color: '#fff' }} />}
                      {service.title === '老人防護' && <SecurityIcon sx={{ color: '#fff' }} />}
                      {service.title === '志工服務' && <VolunteerActivismIcon sx={{ color: '#fff' }} />}
                      <Typography sx={{ color: '#fff', fontSize: '1.2rem' }}>{service.title}</Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box sx={{ mb: 4 }}>
                      <CarouselContainer>
                        <Carousel
                          showArrows={true}
                          showStatus={false}
                          showThumbs={false}
                          infiniteLoop={true}
                          autoPlay={true}
                          interval={3000}
                          transitionTime={500}
                          dynamicHeight={false}
                          centerMode={false}
                          centerSlidePercentage={100}
                        >
                          {service.images.map((image, index) => (
                            <div key={index}>
                              <img src={image} alt={`${service.title}圖片 ${index + 1}`} />
                            </div>
                          ))}
                        </Carousel>
                      </CarouselContainer>
                    </Box>
                    <Typography sx={{ color: '#fff', whiteSpace: 'pre-line' }}>{service.content}</Typography>
                  </AccordionDetails>
                </StyledAccordion>
              </Box>
            </Grid>
          ))}
        </Grid>
        </Container>

        
          <Grid container spacing={4} justifyContent="center" sx={{ mb: 6 }}>
            <Grid item xs={12} md={10}>
              <ContentCard>
                <Typography variant="h5" sx={{
                  color: 'var(--primary)',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginBottom: 2
                }}>
                  歷年服務累積人數
                </Typography>
                
        <ElderlyServedChart />
        </ContentCard>
            </Grid>
          </Grid>
        <Container maxWidth={false} sx={{ maxWidth: '1600px', mx: 'auto', px: { xs: 2, sm: 3, md: 4 }, mt: 6 }}>
    
        </Container>

        <Box sx={{
           mt: 8, 
           width: "100%",       // 設定寬度 100%
             }}>
          <Footer />
        </Box>
      </ScrollContainer>
    </MainLayout>
  );
};
export default HomePage;
