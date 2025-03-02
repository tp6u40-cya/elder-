import { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import { BaseContainer, BaseTextField, BaseButton, BaseBox } from '../styles/globalStyles';
import { useNavigate } from 'react-router-dom';  // 添加這行
// 添加 Alert 相關組件導入
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Alert } from '@mui/material';
// Logo 組件
const Logo = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
    <svg viewBox="0 0 48 48" fill="none" width="16" height="16">
      <path
        d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
        fill="currentColor"
      />
    </svg>
    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
      輔仁大學
    </Typography>
  </Box>
);
// ... 其他樣式組件 ...

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: '#1a1f25',
    color: '#fff',
    borderRadius: '1.5em',
    border: '.15em solid var(--primary)',
    backdropFilter: 'blur(4px)',
    boxShadow: 'inset 1px 1px 6px rgba(255,255,255,0.3), 2px 2px 15px rgba(0,0,0,0.5)',
    padding: theme.spacing(2)
  }
}));
// 自定義樣式組件
const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#111418',
  color: '#fff',
  padding: theme.spacing(4)
}));

const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '512px',
  margin: '0 auto',
  padding: theme.spacing(3),
}));
// Add this with other styled components
// 修改 LoginBox 組件
const LoginBox = styled(BaseBox)(({ theme }) => ({
  maxWidth: '512px',
  margin: '0 auto',
  position: 'relative'  // 添加這行
}));
// 登入頁特有的容器樣式
const LoginContainer = styled(BaseContainer)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(4),
  position: 'relative',  // 添加這行
  minHeight: '100vh'     // 添加這行
}));

const LoginTextField = styled(BaseTextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    height: '56px',
    backgroundColor: '#293038',
    borderRadius: '12px',
    color: '#fff',
    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
    }
  }
}));

const LoginButton = styled(BaseButton)(({ theme }) => ({
  height: '48px',
  padding: '12px',
  '&.outlined': {
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'rgba(120, 255, 205, 0.1)'
    }
  }
}));
// 修改 BackgroundCircles 組件
const BackgroundCircles = styled(Box)(({ theme }) => ({
  position: 'absolute',  // 改回 absolute
  width: '100%',
  height: '100%',
  zIndex: 0,
  '& span': {
    position: 'absolute',
    borderRadius: '50%',
    opacity: 0,    // 移除 filter: 'blur(2px)'
    '&:nth-of-type(1)': {  // 蒂芬妮藍圓圈
      width: '180px',
      height: '180px',
      background: '#81D8D0',  // 修改顏色
      left: '-80px',
      top: '50px',
      animation: 'am2 ease-out 1s forwards, float 3s ease-in-out infinite alternate'
    },
    '&:nth-of-type(2)': {  //金黃色圓圈
      width: '100px',
      height: '100px',
      background: '#E6C786',  // 修改顏色
      right: '-10px',
      top: '20px',
      animation: 'am2 ease-out 1s 0.2s forwards, float 4s ease-in-out infinite alternate-reverse'
    },
    '&:nth-of-type(3)': {  // 灰藍色圓圈
      width: '220px',
      height: '220px',
      background: '#97A5C0',  // 修改顏色
      right: '-100px',
      bottom: '20px',
      animation: 'am2 ease-out 1s 0.4s forwards, float 3.5s ease-in-out infinite alternate'
    }
  },
  '@keyframes float': {
    '0%': { transform: 'translateY(0)' },
    '100%': { transform: 'translateY(-20px)' }
  },
  '@keyframes am2': {
    '0%': { 
      transform: 'scale(0) rotateZ(60deg)',
      opacity: 0
    },
    '100%': { 
      transform: 'scale(1) rotateZ(0)',
      opacity: 0.7
    }
  }
}));
// FormContainer 保持不變，因為它的 blur 效果會自動作用於下層元素
const BackgroundAnimation = styled(Box)({
  '.bg': {
    animation: 'am2 ease-out 1s'
  },
  '.glass': {
    animation: 'am3 ease-out 1s 0.2s backwards'
  },
  '@keyframes am1': {
    '0%': { transform: 'translateY(0)' },
    '100%': { transform: 'translateY(-30px)' }
  },
  '@keyframes am2': {
    '0%': { transform: 'scale(0, 0) rotateZ(60deg)' },
    '100%': { transform: 'scale(1, 1) rotateZ(0)' }
  },
  '@keyframes am3': {
    '0%': { 
      transform: 'translateY(8px)',
      opacity: 0
    },
    '100%': { 
      transform: 'translateY(0)',
      opacity: 1
    }
  }
});

// FormContainer 添加玻璃效果和動畫
const FormContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(5),
  border: '.15em solid var(--primary)',
  borderRadius: '1.5em',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(4px)',
  boxShadow: 'inset 1px 1px 6px rgba(255, 255, 255, 0.3), 2px 2px 15px rgba(0, 0, 0, 0.5)',
  marginBottom: theme.spacing(3),
  zIndex: 10000,
  animation: 'am3 ease-out 1s 0.2s backwards'
}));

// 在 Login 組件中使用
// 添加測試用戶數據
const TEST_USER = {
  ldapAccount: "410012409",
  password: "123456"
};

const Login = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };
  const [formData, setFormData] = useState({
    ldapAccount: '',
    password: '',
  });
  
  const [openDialog, setOpenDialog] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault(); // 防止頁面刷新
  

  };
  // ... existing code ...

  const FloatingCircles = styled(Box)(({ theme }) => ({
    position: 'absolute',  // 改為 absolute
    width: '1920px',      // 設定固定寬度
    height: '1080px',     // 設定固定高度
    left: '50%',          // 水平置中
    top: '50%',           // 垂直置中
    transform: 'translate(-50%, -50%)',  // 確保完全置中
    zIndex: 9999,
    '@keyframes float': {
    '0%': { transform: 'translateY(0)' },
    '100%': { transform: 'translateY(-20px)' }
  },
  '@keyframes am2': {
    '0%': { 
      transform: 'scale(0) rotateZ(60deg)',
      opacity: 0
    },
    '100%': { 
      transform: 'scale(1) rotateZ(0)',
      opacity: 0.7
    }
  },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& button': {
    position: 'relative',
    background: 'rgba(0, 0, 0, 0.01)',
    border: '2px solid rgba(141, 140, 140, 0.62)',
    borderRadius: '15px',
    color: '#000000',
    fontSize: '24px',
    fontWeight: '500',
    padding: '15px 25px',
    cursor: 'pointer',
    backdropFilter: 'blur(8px)',
    transition: 'all 0.3s ease',
    boxShadow: 'inset 1px 1px 6px rgba(255,255,255,0.2)',
    zIndex: 1,
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      transform: 'translateY(-2px)',
      boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
      color: '#333'
    },
    '&:active': {
      transform: 'translateY(1px)',
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '4px',
      height: '4px',
      background: 'rgba(200, 200, 200, 0.5)',
      borderRadius: '50%',
      bottom: '8px',
      left: '50%',
      transform: 'translateX(-50%)',
      opacity: 0,
      transition: 'all 0.3s ease'
    },
    '&:hover::after': {
      opacity: 1,
      transform: 'translateX(-50%) scale(1.5)'
    }
  },
    '& span': {
      position: 'absolute',
      borderRadius: '50%',
      opacity: 0,
      display: 'flex',        
      justifyContent: 'center', // 水平置中
      alignItems: 'center',    
      '&:nth-of-type(1)': { //左上角
        width: '300px',
        height: '300px',
        background: '#EFD3AC',
        left: '300px',
        top: '150px',
        animation: 'am2 ease-out 1s forwards, float 4s ease-in-out infinite alternate'
      },
      '&:nth-of-type(2)': { //左中
        width: '280px',
        height: '280px',
        background: '#DCDDDF',
        left: '100px',
        top: '430px',
        animation: 'am2 ease-out 1s 0.2s forwards, float 3.5s ease-in-out infinite alternate-reverse'
      },
      '&:nth-of-type(3)': {//左下
        width: '350px',
        height: '350px',
        background: '#8D6A6E',
        left: '400px',
        bottom: '100px',
        animation: 'am2 ease-out 1s 0.4s forwards, float 5s ease-in-out infinite alternate'
      },
      '&:nth-of-type(4)': { //右上角
        width: '280px',
        height: '280px',
        background: '#DEA592',
        right: '280px',
        top: '120px',
        animation: 'am2 ease-out 1s 0.3s forwards, float 4.5s ease-in-out infinite alternate-reverse'
      },
      '&:nth-of-type(5)': {//右中
        width: '300px',
        height: '300px',
        background: '#ADAAA5',
        right: '100px',
        top: '370px',
        animation: 'am2 ease-out 1s 0.5s forwards, float 3.8s ease-in-out infinite alternate'
      },
      '&:nth-of-type(6)': { //右下角
        width: '300px',
        height: '300px',
        background: '#E2C6C4',
        right: '180px',
        bottom: '100px',
        animation: 'am2 ease-out 1s 0.6s forwards, float 4.2s ease-in-out infinite alternate-reverse'
      }
    }
    
  }));
 


  const handleLogin = (isAccessible) => {
    const { ldapAccount, password } = formData;
    
    if (!ldapAccount || !password) {
      alert("請輸入帳號和密碼");
      return;
    }
    
    if (ldapAccount === TEST_USER.ldapAccount && password === TEST_USER.password) {
      if (isAccessible) {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('userAccount', ldapAccount);
        navigate('/instruments');
      } else {
        const confirmLogin = window.confirm('確定登入一般版本，若您為視障生請選擇「登入無障礙版」？');
        if (confirmLogin) {
          sessionStorage.setItem('isLoggedIn', 'true');
          sessionStorage.setItem('userAccount', ldapAccount);
          navigate('/instruments');
        }
      }
    } else {
      alert("帳號或密碼錯誤");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLogin(false); // 按 Enter 鍵等同於點擊「登入系統」
    }
  };
  const StyledButton = styled(BaseButton)(({ theme }) => ({
    height: '48px',
    padding: '12px',
    cursor: 'pointer',
    position: 'relative',
    transition: 'all 0.3s ease',
    zIndex: 2,
    '&.outlined': {
      backgroundColor: 'transparent',
      border: '2px solid var(--primary)',
      '&:hover': {
        backgroundColor: 'rgba(120, 255, 205, 0.1)',
        transform: 'translateY(-2px)'
      }
    },
    '&:hover': {
      backgroundColor: 'rgba(120, 255, 205, 0.2)',
      transform: 'translateY(-2px)'
    },
    '&:active': {
      transform: 'translateY(1px)'
    }
  }));

  // 在 return 部分修改按鈕的使用方式
  <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
    <StyledButton 
      fullWidth 
      onClick={() => handleLogin(false)}
    >
      一般版本
      <span className="dot"></span>
    </StyledButton>
    <StyledButton 
      fullWidth 
      className="outlined"
      onClick={() => handleLogin(true)}
    >
      無障礙版
      <span className="dot"></span>
    </StyledButton>
  </Box>

  const handleConfirm = () => {
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('userAccount', formData.ldapAccount);
    setOpenDialog(false);
    navigate('/instruments');
  };

  return (
    <BackgroundAnimation>
      <FloatingCircles>
        <span>
          <button onClick={() => handleButtonClick('/elderly-support')}>老人助養</button>
        </span>
        <span>
          <button onClick={() => handleButtonClick('/elderly-protection')}>老人防護</button>
        </span>
        <span>
          <button onClick={() => handleButtonClick('/elderly-search')}>老人協尋</button>
        </span>
        <span>
          <button onClick={() => handleButtonClick('/elderly-rescue')}>老人救援</button>
        </span>
        <span>
          <button onClick={() => handleButtonClick('/elderly-service')}>老人服務</button>
        </span>
        <span>
          <button onClick={() => handleButtonClick('/volunteer')}>社會志工</button>
        </span>
      </FloatingCircles>
      <LoginContainer>
        <LoginBox>
          <BackgroundCircles className="bg">
            <span></span>
            <span></span>
            <span></span>
          </BackgroundCircles>
          
         
    <Box sx={{ 
        display: 'flex', 
        justifyContent: 'flex-end', 
        mb: 2,
        position: 'relative',
        zIndex: 100001
}}>
     
        </Box>


          <FormContainer>
            <Typography variant="h4" sx={{ 
              fontSize: '24px',
              fontWeight: 'bold',
              mb: 3,
              textAlign: 'center'
            }}>
              台北市老人基金會
            </Typography>
            
            <Typography sx={{ 
              mb: 3,
              textAlign: 'center',
              color: 'rgba(255,255,255,0.7)'
            }}>
              關懷長者 溫暖社會
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <StyledButton 
                fullWidth
                onClick={() => handleButtonClick('/about')}
              >
               關於本會
                <span className="dot"></span>
              </StyledButton>
              <StyledButton 
                fullWidth 
                className="outlined"
                onClick={() => handleButtonClick('/donation')}
              >
                社會捐款
                <span className="dot"></span>
              </StyledButton>
            </Box>

            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              gap: 2 
            }}>
              <Button 
                color="primary" 
                onClick={() => handleButtonClick('/contact')}
                sx={{ 
                  textDecoration: 'underline',
                  color: 'var(--primary)'
                }}
              >
                聯絡本會
              </Button>
              <Button 
                color="primary"
                onClick={() => window.open(`${process.env.PUBLIC_URL}/documents/financial_statements.pdf`, '_blank')}
                sx={{ 
                  textDecoration: 'underline',
                  color: 'var(--primary)'
                }}
              >
                財務報表
              </Button>
            </Box>
          </FormContainer>
        </LoginBox>
      </LoginContainer>
      {/* ... 其他原有內容 ... */}
    </BackgroundAnimation>
  );
};

export default Login;