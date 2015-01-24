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
  '010': { icon: '/img/functions/010/010.svg',color: '#C75746', bcolor: '#935B3B' },
    //입법 및 선거 관리
    '011': { icon: '/img/functions/010/011.svg',color: '#C75746', bcolor: '#935B3B' },
    // 국정 운영
    '012': { icon: '/img/functions/010/012.svg',color: '#C75746', bcolor: '#935B3B' },
    // 지방 행정 및 재정 지원
    '013': { icon: '/img/functions/010/013.svg',color: '#C75746', bcolor: '#935B3B' },
    // 재정 및 금융
    '014': { icon: '/img/functions/010/014.svg',color: '#C75746', bcolor: '#935B3B' },
    // 정부 자원 관리
    '015': { icon: '/img/functions/010/015.svg',color: '#C75746', bcolor: '#935B3B' },
    // 일반 행정
    '016': { icon: '/img/functions/010/016.svg',color: '#C75746', bcolor: '#935B3B' },
  
  // 공공질서 및 안전
  '020': { icon: '/img/functions/020/020.svg', color: '#C75746', bcolor: '#0AB971' },
    // 법원 및 헌재
    '021': { icon: '/img/functions/020/021.svg', color: '#C75746', bcolor: '#0AB971' },
    // 법무 및 검찰
    '022': { icon: '/img/functions/020/022.svg', color: '#C75746', bcolor: '#0AB971' },
    // 경찰
    '023': { icon: '/img/functions/020/023.svg', color: '#C75746', bcolor: '#0AB971' },
    // 해경
    '024': { icon: '/img/functions/020/024.svg', color: '#C75746', bcolor: '#0AB971' },
    // 재난 방재 및 민방위
    '025': { icon: '/img/functions/020/025.svg', color: '#C75746', bcolor: '#0AB971' },
  
  //외교 및 통일
  '030': { icon: '/img/functions/030/030.svg' },
    // 통일
    '031': { icon: '/img/functions/030/031.svg'},
    // 외교 통상
    '032': { icon: '/img/functions/030/032.svg'},

  // 국방
  '040': { icon: '/img/functions/040/040.svg' },
    // 병력 운영
    '041': { icon: '/img/functions/040/041.svg' },
    // 전력 유지
    '042': { icon: '/img/functions/040/042.svg' },
    // 방위력 개선
    '043': { icon: '/img/functions/040/043.svg' },
    // 병무 행정
    '044': { icon: '/img/functions/040/044.svg' },

  // 교육
  '050': { icon: '/img/functions/050/050.svg', color: '#C75746', bcolor: '#4E6D00' },
    // 유아 및 초중등 교육
    '051': { icon: '/img/functions/050/051.svg', color: '#C75746', bcolor: '#4E6D00' },
    // 고등 교육
    '052': { icon: '/img/functions/050/052.svg', color: '#C75746', bcolor: '#4E6D00' },
    // 평생 및 직업교육
    '053': { icon: '/img/functions/050/053.svg', color: '#C75746', bcolor: '#4E6D00' },
    // 교육 일반
    '054': { icon: '/img/functions/050/053.svg', color: '#C75746', bcolor: '#4E6D00' },
  
  // 문화 및 관광
  '060': { icon: '/img/functions/060/060.svg', color: '#C75746', bcolor: '#ff6c00' },
    // 문화예술
    '061': { icon: '/img/functions/060/061.svg', color: '#C75746', bcolor: '#ff6c00' },
    // 관광
    '062': { icon: '/img/functions/060/062.svg', color: '#C75746', bcolor: '#ff6c00' },
    // 체육
    '063': { icon: '/img/functions/060/063.svg', color: '#C75746', bcolor: '#ff6c00' },
    // 문화재
    '064': { icon: '/img/functions/060/064.svg', color: '#C75746', bcolor: '#ff6c00' },
    // 문화 및 관광 일반
    '065': { icon: '/img/functions/060/065.svg', color: '#C75746', bcolor: '#ff6c00' },
    
  // 환경보호
  '070': { icon: '/img/functions/070/070.svg', color: '#C75746', bcolor: '#2A3A03' },
    // 상하수도 및 수질
    '071': { icon: '/img/functions/070/071.svg', color: '#C75746', bcolor: '#2A3A03' },
    // 폐기물
    '072': { icon: '/img/functions/070/072.svg', color: '#C75746', bcolor: '#2A3A03' },
    // 대기
    '073': { icon: '/img/functions/070/073.svg', color: '#C75746', bcolor: '#2A3A03' },
    // 자연
    '074': { icon: '/img/functions/070/074.svg', color: '#C75746', bcolor: '#2A3A03' },
    // 해양
    '075': { icon: '/img/functions/070/075.svg', color: '#C75746', bcolor: '#2A3A03' },
    // 환경보호 일반
    '076': { icon: '/img/functions/070/076.svg', color: '#C75746', bcolor: '#2A3A03' },
  
  // 사회복지
  '080': { icon: '/img/functions/080/080.svg', color: '#C75746', bcolor: '#EC2406' },
    // 기초 생활 보장
    '081': { icon: '/img/functions/080/081.svg', color: '#C75746', bcolor: '#EC2406' },
    // 취약 계층 지원
    '082': { icon: '/img/functions/080/082.svg', color: '#C75746', bcolor: '#EC2406' },
    // 공직 연금
    '083': { icon: '/img/functions/080/083.svg', color: '#C75746', bcolor: '#EC2406' },
    // 보육, 가족 및 여성
    '084': { icon: '/img/functions/080/084.svg', color: '#C75746', bcolor: '#EC2406' },
    // 노인 및 청소년
    '085': { icon: '/img/functions/080/085.svg', color: '#C75746', bcolor: '#EC2406' },
    // 노동
    '086': { icon: '/img/functions/080/086.svg', color: '#C75746', bcolor: '#EC2406' },
    // 보훈
    '087': { icon: '/img/functions/080/087.svg', color: '#C75746', bcolor: '#EC2406' },
    // 주택
    '088': { icon: '/img/functions/080/088.svg', color: '#C75746', bcolor: '#EC2406' },
    // 사회복지일반
    '089': { icon: '/img/functions/080/089.svg', color: '#C75746', bcolor: '#EC2406' },
  
  // 보건
  '090': { icon: '/img/functions/090/090.svg', color: '#C75746', bcolor: '#938626'},
    // 보건의료
    '091': { icon: '/img/functions/090/091.svg', color: '#C75746', bcolor: '#938626'},
    // 건강보험
    '092': { icon: '/img/functions/090/092.svg', color: '#C75746', bcolor: '#938626'},
    // 식품 의약 안전
    '093': { icon: '/img/functions/090/093.svg', color: '#C75746', bcolor: '#938626'},

  // 농림해양수산
  '100': { icon: '/img/functions/100/100.svg', color: '#C75746', bcolor: '#C75746'},
    // 농업 및 농촌
    '101': { icon: '/img/functions/100/101.svg', color: '#C75746', bcolor: '#C75746'},
    // 임업 및 산촌
    '102': { icon: '/img/functions/100/102.svg', color: '#C75746', bcolor: '#C75746'},
    // 해양수산 및 어촌
    '103': { icon: '/img/functions/100/103.svg', color: '#C75746', bcolor: '#C75746'},
    // 식품업
    '104': { icon: '/img/functions/100/104.svg', color: '#C75746', bcolor: '#C75746'},
  
  // 산업 및 중소기업
  '110': { icon: '/img/functions/110/110.svg', color: '#C75746', bcolor: '#0094b9'},
    // 산업 금융 지원
    '111': { icon: '/img/functions/110/111.svg', color: '#C75746', bcolor: '#0094b9'},
    // 산업 기술 지원
    '112': { icon: '/img/functions/110/112.svg', color: '#C75746', bcolor: '#0094b9'},
    // 무역 및 투자유치
    '113': { icon: '/img/functions/110/113.svg', color: '#C75746', bcolor: '#0094b9'},
    // 산업진흥 및 고도화
    '114': { icon: '/img/functions/110/114.svg', color: '#C75746', bcolor: '#0094b9'},
    // 에너지 및 자원개발
    '115': { icon: '/img/functions/110/115.svg', color: '#C75746', bcolor: '#0094b9'},
    // 산업 및 중소기업 일반   
    '116': { icon: '/img/functions/110/116.svg', color: '#C75746', bcolor: '#0094b9'},

  // 수송 및 교통
  '120': { icon: '/img/functions/120/120.svg', color: '#C75746', bcolor: '#0072ff'},
    // 도로
    '121': { icon: '/img/functions/120/121.svg', color: '#C75746', bcolor: '#0072ff'},
    // 철도
    '122': { icon: '/img/functions/120/122.svg', color: '#C75746', bcolor: '#0072ff'},
    // 도시 철도
    '123': { icon: '/img/functions/120/123.svg', color: '#C75746', bcolor: '#0072ff'},
    // 해운 및 항만
    '124': { icon: '/img/functions/120/124.svg', color: '#C75746', bcolor: '#0072ff'},
    // 항공 및 공항
    '125': { icon: '/img/functions/120/125.svg', color: '#C75746', bcolor: '#0072ff'},
    // 대중교통 및 물류 등 기타
    '126': { icon: '/img/functions/120/126.svg', color: '#C75746', bcolor: '#0072ff'},

  // 통신
  '130': {icon: '/img/functions/130/130.svg'},
    // 방송통신
    '131': {icon: '/img/functions/130/131.svg'},
    // 우정
    '132': {icon: '/img/functions/130/132.svg'},

  // 국토 및 지역개발
  '140': { icon: '/img/functions/140/140.svg', color: '#C75746', bcolor: '#ffc000'},
    // 수자원
    '141': { icon: '/img/functions/140/141.svg', color: '#C75746', bcolor: '#ffc000'},
    // 지역 및 도시
    '142': { icon: '/img/functions/140/142.svg', color: '#C75746', bcolor: '#ffc000'},
    // 산업단지
    '143': { icon: '/img/functions/140/143.svg', color: '#C75746', bcolor: '#ffc000'},

  // 과학기술
  '150': { icon: '/img/functions/150/150.svg', color: '#C75746', bcolor: '#ffc000'},
    // 기술개발
    '151': { icon: '/img/functions/150/151.svg', color: '#C75746', bcolor: '#ffc000'},
    // 과학기술및연구지원
    '152': { icon: '/img/functions/150/152.svg', color: '#C75746', bcolor: '#ffc000'},
    // 과학기술일반
    '153': { icon: '/img/functions/150/153.svg', color: '#C75746', bcolor: '#ffc000'},
    
  // 예비비
  '160': { icon: '/img/functions/160/160.svg', color: '#C75746', bcolor: '#790586' },
    '161': { icon: '/img/functions/160/161.svg', color: '#C75746', bcolor: '#790586' },

  // 기타
  '900': { icon: '/img/functions/900/900.svg', color: '#C75746', bcolor: '#4d4d4d' },
    '901': { icon: '/img/functions/900/901.svg', color: '#C75746', bcolor: '#4d4d4d' }
};