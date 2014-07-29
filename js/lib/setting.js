var OpenSpending = OpenSpending || {};

OpenSpending.data = 'tax_korea_updated';
OpenSpending.year = 2012;
OpenSpending.loderText = '데이터를 불러오는 중입니다.';

var OpenSpending = OpenSpending || {};
OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {
	// 일반공공행정
	'010. ': { icon: '5_admin/5.svg',color: '#C75746', bcolor: '#935B3B' },
	
	// 공공질서 및 안전
	'020. ': { icon: '1_safety/1.svg', color: '#C75746', bcolor: '#0AB971' },
	
	// 교육
	'050. ': { icon: '8_edu/8.svg', color: '#C75746', bcolor: '#4E6D00' },
	
	// 문화 및 관광
	'060. ': { icon: '12_culture/12.svg', color: '#C75746', bcolor: '#D33673' },
	
	// 환경보호
	'070. ': { icon: '6_env/6.svg', color: '#C75746', bcolor: '#2A3A03' },
	
	// 사회복지
	'080. ': { icon: '14_welfare/14.svg', color: '#C75746', bcolor: '#EC2406' },
	
	// 보건
	'090. ': { icon: '13_health/13.svg', color: '#C75746', bcolor: '#938626'  },

	// 농림해양수산
	'100. ': { icon: '11_agri/11.svg', color: '#C75746', bcolor: '#C75746'  },
	
	// 산업 및 중소기업
	'110. ': { icon: '2_industry/2.svg', color: '#C75746', bcolor: '#D33673'  },

	// 국토 및 지역개발
	'140. ': { icon: '9_territory/9.svg', color: '#C75746', bcolor: '#790586'  },

	// 예비비
	'160. ': { icon: '4_reserve_fund/4.svg' },

	// 기타
	'900. ': { icon: '10_others/10.svg' }


};