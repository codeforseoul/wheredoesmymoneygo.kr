var OpenSpending = OpenSpending || {};

OpenSpending.localData = {
  'data': 'expenditure_of_southkorea',
  'title': 'local'
};
OpenSpending.centralData = {
  'data': 'central_expenditure_of_south_korea',
  'title': 'central'
};
OpenSpending.year = 2013;
OpenSpending.loderText = '데이터를 불러오는 중입니다.';

var OpenSpending = OpenSpending || {};
OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {
  // 일반공공행정
  '010. ': { icon: '/img/functions/5_admin/5.svg',color: '#C75746', bcolor: '#935B3B' },
    //입법 및 선거 관리
    '011. ': { icon: '/img/functions/5_admin/sub/vote.svg',color: '#C75746', bcolor: '#935B3B' },
    // 지방 행정 및 재정 지원
    '013. ': { icon: '/img/functions/5_admin/sub/local_support.svg',color: '#C75746', bcolor: '#935B3B' },
    // 재정 및 금융
    '014. ': { icon: '/img/functions/5_admin/sub/finance.svg',color: '#C75746', bcolor: '#935B3B' },
    // 일반 행정
    '016. ': { icon: '/img/functions/5_admin/sub/administration.svg',color: '#C75746', bcolor: '#935B3B' },
  
  // 공공질서 및 안전
  '020. ': { icon: '/img/functions/1_safety/1.svg', color: '#C75746', bcolor: '#0AB971' },
    // 경찰
    '023. ': { icon: '/img/functions/1_safety/sub/police.svg', color: '#C75746', bcolor: '#0AB971' },
    // 재난 방재 및 민방위
    '025. ': { icon: '/img/functions/1_safety/sub/disaster.svg', color: '#C75746', bcolor: '#0AB971' },
  
  // 교육
  '050. ': { icon: '/img/functions/8_edu/8.svg', color: '#C75746', bcolor: '#4E6D00' },
    // 유아 및 초중등 교육
    '051. ': { icon: '/img/functions/8_edu/sub/junior_education.svg', color: '#C75746', bcolor: '#4E6D00' },
    // 고등 교육
    '052. ': { icon: '/img/functions/8_edu/sub/high_education.svg', color: '#C75746', bcolor: '#4E6D00' },
    // 평생 및 직업교육
    '053. ': { icon: '/img/functions/8_edu/sub/job_education.svg', color: '#C75746', bcolor: '#4E6D00' },
  
  // 문화 및 관광
  '060. ': { icon: '/img/functions/12_culture/12.svg', color: '#C75746', bcolor: '#ff6c00' },
    // 문화예술
    '061. ': { icon: '/img/functions/12_culture/sub/art.svg', color: '#C75746', bcolor: '#ff6c00' },
    // 관광
    '062. ': { icon: '/img/functions/12_culture/sub/tourism.svg', color: '#C75746', bcolor: '#ff6c00' },
    // 체육
    '063. ': { icon: '/img/functions/12_culture/sub/physical.svg', color: '#C75746', bcolor: '#ff6c00' },
    // 문화재
    '064. ': { icon: '/img/functions/12_culture/sub/cultural_assets.svg', color: '#C75746', bcolor: '#ff6c00' },
    // 문화 및 관광 일반
    '065. ': { icon: '/img/functions/12_culture/sub/culture.svg', color: '#C75746', bcolor: '#ff6c00' },
    
  // 환경보호
  '070. ': { icon: '/img/functions/6_env/6.svg', color: '#C75746', bcolor: '#2A3A03' },
    // 상하수도 및 수질
    '071. ': { icon: '/img/functions/6_env/sub/water.svg', color: '#C75746', bcolor: '#2A3A03' },
    // 폐기물
    '072. ': { icon: '/img/functions/6_env/sub/trash.svg', color: '#C75746', bcolor: '#2A3A03' },
    // 대기
    '073. ': { icon: '/img/functions/6_env/sub/atmosphere.svg', color: '#C75746', bcolor: '#2A3A03' },
    // 자연
    '074. ': { icon: '/img/functions/6_env/sub/nature.svg', color: '#C75746', bcolor: '#2A3A03' },
    // 해양
    '075. ': { icon: '/img/functions/6_env/sub/sea.svg', color: '#C75746', bcolor: '#2A3A03' },
    // 환경보호 일반
    '076. ': { icon: '/img/functions/6_env/sub/protection_environment.svg', color: '#C75746', bcolor: '#2A3A03' },
  
  // 사회복지
  '080. ': { icon: '/img/functions/14_welfare/14.svg', color: '#C75746', bcolor: '#EC2406' },
    // 기초 생활 보장
    '081. ': { icon: '/img/functions/14_welfare/sub/basic_livelihood.svg', color: '#C75746', bcolor: '#EC2406' },
    // 취약 계층 지원
    '082. ': { icon: '/img/functions/14_welfare/sub/vulnerable_support.svg', color: '#C75746', bcolor: '#EC2406' },
    // 보육, 가족 및 여성
    '084. ': { icon: '/img/functions/14_welfare/sub/childcare_family.svg', color: '#C75746', bcolor: '#EC2406' },
    // 노인 및 청소년
    '085. ': { icon: '/img/functions/14_welfare/sub/teenager.svg', color: '#C75746', bcolor: '#EC2406' },
    // 노동
    '086. ': { icon: '/img/functions/14_welfare/sub/labor.svg', color: '#C75746', bcolor: '#EC2406' },
    // 보훈
    '087. ': { icon: '/img/functions/14_welfare/sub/veterans.svg', color: '#C75746', bcolor: '#EC2406' },
    // 주택
    '088. ': { icon: '/img/functions/14_welfare/sub/house.svg', color: '#C75746', bcolor: '#EC2406' },
    // 사회복지일반
    '089. ': { icon: '/img/functions/14_welfare/sub/welfare.svg', color: '#C75746', bcolor: '#EC2406' },
  
  // 보건
  '090. ': { icon: '/img/functions/13_health/13.svg', color: '#C75746', bcolor: '#938626'},
    // 보건의료
    '091. ': { icon: '/img/functions/13_health/sub/health.svg', color: '#C75746', bcolor: '#938626'},
    // 식품 의약 안전
    '093. ': { icon: '/img/functions/13_health/sub/food_safty.svg', color: '#C75746', bcolor: '#938626'},

  // 농림해양수산
  '100. ': { icon: '/img/functions/11_agri/11.svg', color: '#C75746', bcolor: '#C75746'},
    // 농업 및 농촌
    '101. ': { icon: '/img/functions/11_agri/sub/agriculture.svg', color: '#C75746', bcolor: '#C75746'},
    // 임업 및 산촌
    '102. ': { icon: '/img/functions/11_agri/sub/agri_and_fish.svg', color: '#C75746', bcolor: '#C75746'},
    // 해양수산 및 어촌
    '103. ': { icon: '/img/functions/11_agri/sub/fishing_industry.svg', color: '#C75746', bcolor: '#C75746'},
  
  // 산업 및 중소기업
  '110. ': { icon: '/img/functions/2_industry/2.svg', color: '#C75746', bcolor: '#0094b9'},
    // 산업 금융 지원
    '111. ': { icon: '/img/functions/2_industry/sub/industry_support.svg', color: '#C75746', bcolor: '#0094b9'},
    // 산업 기술 지원
    '112. ': { icon: '/img/functions/2_industry/sub/industry_tec_support.svg', color: '#C75746', bcolor: '#0094b9'},
    // 무역 및 투자유치
    '113. ': { icon: '/img/functions/2_industry/sub/trade.svg', color: '#C75746', bcolor: '#0094b9'},
    // 산업진흥 및 고도화
    '114. ': { icon: '/img/functions/2_industry/sub/industry_high.svg', color: '#C75746', bcolor: '#0094b9'},
    // 에너지 및 자원개발
    '115. ': { icon: '/img/functions/2_industry/sub/energy.svg', color: '#C75746', bcolor: '#0094b9'},
    // 산업 및 중소기업 일반   
    '116. ': { icon: '/img/functions/2_industry/sub/industry.svg', color: '#C75746', bcolor: '#0094b9'},

  // 수송 및 교통
  '120. ': { icon: '/img/functions/3_trans/3.svg', color: '#C75746', bcolor: '#0072ff'},
    // 도로
    '121. ': { icon: '/img/functions/3_trans/sub/way.svg', color: '#C75746', bcolor: '#0072ff'},
    // 도시 철도
    '123. ': { icon: '/img/functions/3_trans/sub/railway.svg', color: '#C75746', bcolor: '#0072ff'},
    // 해운 및 항만
    '124. ': { icon: '/img/functions/3_trans/sub/ship.svg', color: '#C75746', bcolor: '#0072ff'},
    // 항공 및 공항
    '125. ': { icon: '/img/functions/3_trans/sub/airplain.svg', color: '#C75746', bcolor: '#0072ff'},
    // 대중교통 및 물류 등 기타
    '126. ': { icon: '/img/functions/3_trans/sub/public_transport.svg', color: '#C75746', bcolor: '#0072ff'},

  // 국토 및 지역개발
  '140. ': { icon: '/img/functions/9_territory/9.svg', color: '#C75746', bcolor: '#ffc000'},
    // 수자원
    '141. ': { icon: '/img/functions/9_territory/sub/water_resources.svg', color: '#C75746', bcolor: '#ffc000'},
    // 지역 및 도시
    '142. ': { icon: '/img/functions/9_territory/sub/region_and_city.svg', color: '#C75746', bcolor: '#ffc000'},
    // 산업단지
    '143. ': { icon: '/img/functions/9_territory/sub/industrial_complex.svg', color: '#C75746', bcolor: '#ffc000'},

  // 과학기술
  '150. ': { icon: '/img/functions/7_sci/7.svg', color: '#C75746', bcolor: '#ffc000'},
    // 
    // '151. ': { icon: '/img/functions/7_sci/sub/', color: '#C75746', bcolor: '#ffc000'},
    // 과학기술및연구지원
    '152. ': { icon: '/img/functions/7_sci/sub/support_science.svg', color: '#C75746', bcolor: '#ffc000'},
    // 과학기술일반
    '153. ': { icon: '/img/functions/7_sci/sub/science.svg', color: '#C75746', bcolor: '#ffc000'},
    
  // 예비비
  '160. ': { icon: '/img/functions/4_reserve_fund/4.svg', color: '#C75746', bcolor: '#790586' },
    '161. ': { icon: '/img/functions/4_reserve_fund/sub/reserve_fund.svg', color: '#C75746', bcolor: '#790586' },

  // 기타
  '900. ': { icon: '/img/functions/10_others/10.svg', color: '#C75746', bcolor: '#4d4d4d' },
    '901. ': { icon: '/img/functions/10_others/sub/etc.svg', color: '#C75746', bcolor: '#4d4d4d' }


};