import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  TextField, 
  InputAdornment, 
  CardActions,
  Chip, 
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  styled  // Add this import
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import MainLayout from '../components/Layout/MainLayout';
import { useNavigate } from 'react-router-dom';
import { ScrollContainer } from '../styles/globalStyles';  // 添加這行
// 將 mockInstruments 的聲明改為
export const mockInstruments = [
  {
    id: 1,
    name: '核磁共振光譜儀',
    image: `${process.env.PUBLIC_URL}/images/instruments/nmr.jpg`,
    description: '用於分子結構分析，透過核磁共振技術解析物質的化學組成。',
    status: '可預約',
    location: '醫學院 生醫實驗室',
    model: 'Bruker AVANCE NEO 600',
    department: '醫學院'
  },
  {
    id: 2,
    name: 'X光繞射儀',
    image: `${process.env.PUBLIC_URL}/images/instruments/xrd.jpg`,
    description: '用於晶體結構分析的高精度儀器，利用X光繞射技術解析材料結構。',
    status: '可預約',
    location: '工學院 材料科學實驗室',
    model: 'Bruker D8 Advance',
    department: '工學院'
  },
  {
    id: 3,
    name: '3D金屬列印機',
    image: `${process.env.PUBLIC_URL}/images/instruments/3d-printer.jpg`,
    description: '使用雷射燒結技術，打印高精度金屬零件，用於精密製造與工程應用。',
    status: '使用中',
    location: '工學院 機械工程實驗室',
    model: 'EOS M 290',
    department: '工學院'
  },
  {
    id: 4,
    name: '質譜儀',
    image: `${process.env.PUBLIC_URL}/images/instruments/mass-spec.jpg`,
    description: '用於分析化學物質的質量與成分，適用於生物技術與食品檢測。',
    status: '可預約',
    location: '生命科學院 生物技術實驗室',
    model: 'Thermo Fisher Orbitrap Exploris 480',
    department: '生命科學院'
  },
  {
    id: 5,
    name: 'MRI磁振造影儀',
    image: `${process.env.PUBLIC_URL}/images/instruments/mri.jpg`,
    description: '用於醫學影像診斷，利用磁場與射頻技術生成人體內部結構的高解析度影像。',
    status: '維護中',
    location: '醫學院 醫學影像中心',
    model: 'Siemens Magnetom Vida 3T',
    department: '醫學院'
  },
  {
    id: 6,
    name: '電子顯微鏡',
    image: `${process.env.PUBLIC_URL}/images/instruments/electron-microscope.jpg`,
    description: '超高解析度電子顯微鏡，可觀察奈米級結構與微觀材料分析。',
    status: '可預約',
    location: '工學院 材料科學實驗室',
    model: 'JEOL JEM-2100',
    department: '工學院'
  },
  {
    id: 7,
    name: '超導量子電腦',
    image: `${process.env.PUBLIC_URL}/images/instruments/quantum-computer.jpg`,
    description: '基於超導技術的量子運算設備，用於高速計算與人工智慧應用。',
    status: '維護中',
    location: '理學院 計算科學中心',
    model: 'IBM Q System One',
    department: '理學院'
  },
  {
    id: 8,
    name: '高效液相層析儀',
    image: `${process.env.PUBLIC_URL}/images/instruments/hplc.jpg`,
    description: '用於分離、分析與純化化學物質，廣泛應用於藥物、食品及環境分析。',
    status: '可預約',
    location: '理學院 化學分析實驗室',
    model: 'Agilent 1260 Infinity II',
    department: '理學院'
  },
  {
    id: 9,
    name: '太赫茲光譜儀',
    image: `${process.env.PUBLIC_URL}/images/instruments/thz.jpg`,
    description: '用於材料、藥物與生物樣品的光學分析，能探測奈米級結構與分子振動。',
    status: '可預約',
    location: '工學院 光電實驗室',
    model: 'Menlo Systems TERA K15',
    department: '工學院'
  },
  {
    id: 10,
    name: '核醫伽瑪相機',
    image: `${process.env.PUBLIC_URL}/images/instruments/gamma-camera.jpg`,
    description: '用於核醫學影像診斷，透過放射性同位素檢測人體內部代謝活動。',
    status: '使用中',
    location: '醫學院 核子醫學中心',
    model: 'Siemens Symbia Intevo',
    department: '醫學院'
  }
];

const InstrumentCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#1a1f25',
  borderRadius: '16px',
  border: '1px solid rgba(255,255,255,0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: 'var(--primary)',
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
  }
}));

const InstrumentList = () => {  // 移除 open 屬性，因為 MainLayout 會自己處理
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('全部');
  const [departmentFilter, setDepartmentFilter] = useState('全部');
  const [filteredInstruments, setFilteredInstruments] = useState(mockInstruments);

  // Move getStatusColor inside the component
  const getStatusColor = (status) => {
    switch (status) {
      case '可預約':
        return '#4caf50';
      case '維護中':
        return '#ff9800';
      case '使用中':
        return '#f44336';
      default:
        return '#757575';
    }
  };

  // 獲取所有可能的部門列表
  const departments = ['全部', ...new Set(mockInstruments.map(item => item.department))];
  const statuses = ['全部', '可預約', '使用中', '維護中'];

  // 更新搜尋和篩選功能
  const filterInstruments = () => {
    let filtered = mockInstruments;
    
    // 搜尋詞篩選
    if (searchTerm) {
      filtered = filtered.filter(instrument => 
        instrument.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        instrument.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        instrument.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        instrument.model.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 狀態篩選
    if (statusFilter !== '全部') {
      filtered = filtered.filter(instrument => instrument.status === statusFilter);
    }

    // 部門篩選
    if (departmentFilter !== '全部') {
      filtered = filtered.filter(instrument => instrument.department === departmentFilter);
    }

    setFilteredInstruments(filtered);
  };

  // 處理搜尋
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // 當任何篩選條件改變時，更新結果
  React.useEffect(() => {
    filterInstruments();
  }, [searchTerm, statusFilter, departmentFilter]);

  return (
    <MainLayout>
      <ScrollContainer>
        <Box sx={{ p: 3 }}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', color: '#fff' }}>
            儀器列表
          </Typography>
          
          {/* 修改搜索和篩選控件的布局 */}
          <Box sx={{ 
            display: 'flex', 
            gap: 2, 
            mb: 4, 
            alignItems: 'center',  // 確保所有元素垂直居中對齊
            justifyContent: 'flex-end'  // 將元素靠右對齊
          }}>
            <TextField
              placeholder="搜尋儀器名稱、型號、描述或所屬單位..."
              value={searchTerm}
              onChange={handleSearch}
              sx={{ 
                width: '400px',  // 固定搜索框寬度
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#293038',
                  borderRadius: '12px',
                  color: '#fff',
                  height: '42px',  // 減小高度
                  '& fieldset': {
                    border: '1px solid rgba(255,255,255,0.1)'
                  },
                  '&:hover fieldset': {
                    borderColor: 'var(--primary)'
                  }
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '20px' }} />
                  </InputAdornment>
                ),
              }}
            />
            
            <FormControl sx={{ width: '120px' }}>  {/* 固定寬度 */}
              <InputLabel sx={{ 
                color: 'rgba(255,255,255,0.7)',
                '&.MuiInputLabel-shrink': {
                  transform: 'translate(14px, -9px) scale(0.75)'
                }
              }}>
                狀態
              </InputLabel>
              <Select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                label="狀態"  // 添加這行
                sx={{
                  backgroundColor: '#293038',
                  color: '#fff',
                  height: '42px',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255,255,255,0.1)'
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'var(--primary)'
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'var(--primary)'
                  }
                }}
              >
                {statuses.map(status => (
                  <MenuItem key={status} value={status}>{status}</MenuItem>
                ))}
              </Select>
            </FormControl>
          
            <FormControl sx={{ width: '120px' }}>  {/* 固定寬度 */}
              <InputLabel sx={{ 
                color: 'rgba(255,255,255,0.7)',
                '&.MuiInputLabel-shrink': {
                  transform: 'translate(14px, -9px) scale(0.75)'
                }
              }}>
                部門
              </InputLabel>
              <Select
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
                label="部門"  // 添加這行
                sx={{
                  backgroundColor: '#293038',
                  color: '#fff',
                  height: '42px',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255,255,255,0.1)'
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'var(--primary)'
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'var(--primary)'
                  }
                }}
              >
                {departments.map(dept => (
                  <MenuItem key={dept} value={dept}>{dept}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          {/* 添加儀器卡片網格 */}
          <Grid container spacing={3}>
            {filteredInstruments.map((instrument) => (
              <Grid item xs={12} sm={6} md={4} key={instrument.id}>
                <InstrumentCard>
                  <CardMedia
                    component="img"
                    height="200"
                    image={instrument.image}
                    alt={instrument.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" sx={{ fontWeight: 'bold' }}>
                      {instrument.name}
                    </Typography>
                    <Typography variant="body2" color="rgba(255,255,255,0.7)" sx={{ mb: 2 }}>
                      {instrument.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      <Typography variant="body2" color="rgba(255,255,255,0.7)">
                        型號：{instrument.model}
                      </Typography>
                      <Typography variant="body2" color="rgba(255,255,255,0.7)">
                        位置：{instrument.location}
                      </Typography>
                      <Typography variant="body2" color="rgba(255,255,255,0.7)">
                        所屬單位：{instrument.department}
                      </Typography>
                    </Box>
                  </CardContent>
                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                      <Chip 
                        label={instrument.status}
                        sx={{ 
                          backgroundColor: getStatusColor(instrument.status),
                          color: '#fff'
                        }}
                      />
                      <Button 
                        variant="contained"
                        onClick={() => navigate(`/instruments/${instrument.id}`)}
                        sx={{
                          backgroundColor: '#53565C',
                          '&:hover': {
                            backgroundColor: 'var(--primary-dark)'
                          }
                        }}
                      >
                        查看詳情
                      </Button>
                    </Box>
                  </CardActions>
                </InstrumentCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </ScrollContainer>
    </MainLayout>
  );
};

export default InstrumentList;