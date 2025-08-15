// script.js

// 페이지의 모든 HTML 요소가 로드된 후 스크립트 실행
document.addEventListener('DOMContentLoaded', () => {
    // languageSelect 드롭다운 메뉴 요소를 가져옵니다.
    const languageSelect = document.getElementById('languageSelect');
    
    // 번역 데이터를 JSON 객체로 정의합니다.
    const translations = {
        'ko': {
            'homepage-title': 'Neo Panama Maritime Service',
            'home': '홈',
            'about': '회사 소개',
            'services': '서비스',
            'contact': '문의하기',
            'hero-slogan': '파나마 해운의 심장부에서, 귀사의 선박에 신용과 믿음을 공급합니다.',
            'hero-tagline': '365일 신속하고 정확한 공급. 최고의 항해를 위한 귀사의 탁월한 선택.',
            'request-quote': '견적 요청',
            'explore-services': '서비스 둘러보기',
            'our-promise-title': '우리의 약속',
            'promise1-title': '신속 배달',
            'promise1-desc': '파나마 운하 및 주요 항만 어디든 최고급 신선 식자재를 24시간 배달합니다.',
            'promise2-title': '글로벌 표준 품질',
            'promise2-desc': 'HACCP 기준을 준수하는 엄격한 위생 및 품질 관리 시스템을 운영합니다.',
            'promise3-title': '맞춤형 솔루션',
            'promise3-desc': '다양한 국적 선원들의 식단에 맞춘 유연한 식자재 구성 및 식단 플랜을 제공합니다.',
            'services-preview-title': '우리의 서비스',
            'services-preview-desc': '파나마를 관통하는 중요한 교차로에서, 귀사의 모든 해운 운영을 원활하게 만듭니다.',
            'service1-title': '식자재 및 선용품 공급',
            'service1-desc': '신선하고 위생적인 식자재와 고품질의 선용품을 신속하게 공급합니다.',
            'service2-title': '선박 수리 및 용역',
            'service2-desc': '선박 유지보수를 위한 전문 수리 및 용역 서비스를 제공합니다.',
            'service3-title': '해양 컨설팅',
            'service3-desc': '파나마 해운 시장에 대한 심층적인 분석과 전문적인 컨설팅을 제공합니다.',
            'provisions-title': '신선 부식 공급',
            'provisions-desc': '신선하고 위생적인 식자재와 다양한 고품질 선용품을 신속하게 제공합니다.',
            'learn-more': '자세히 보기',
            'why-choose-us-title': '왜 Neo Panama Maritime Service인가?',
            'why-choose-us-desc': '파나마 해운의 중요한 교차로에서, 우리는 단순한 공급자를 넘어 귀사의 신뢰할 수 있는 파트너가 됩니다.',
            'about-us-btn': '회사 소개',
            'privacy-policy': '개인정보처리방침',
            'terms-of-service': '이용약관',
            'copyright': '© 2024 Neo Panama Maritime Service. All rights reserved.',

            'about-title': '네오 파나마 마리타임 서비스: 파나마 해운의 새로운 지평을 열다',
            'company-intro-desc': '파나마 해운의 심장부에서,<br>귀사의 선박에 신선함과 신뢰를 공급합니다.',
            'vision-title': '우리의 비전',
            'vision-desc': '파나마 운하의 관문에서 단순한 보급을 넘어 최고의 해운 공급 서비스를 제공하여, 고객의 성공적인 항해에 기여하는 **종합 해운 서비스 파트너**가 되는 것입니다.',
            'mission-title': '우리의 미션',
            'mission-desc': '최고 품질의 **신선한 보급품**을 바탕으로 고객의 요구에 맞는 혁신적이고 신뢰성 있는 솔루션을 제공하고, 지속 가능한 성장을 통해 파나마 해운 산업 발전에 기여합니다.',
            'values-title': '핵심 가치',
            'value1-title': '신뢰',
            'value1-desc': '투명하고 정직한 서비스로 고객과 강력한 관계를 구축합니다.',
            'value2-title': '혁신',
            'value2-desc': '변화하는 해운 시장에 맞춰 효율적이고 최적화된 서비스를 개발합니다.',
            'value3-title': '탁월함',
            'value3-desc': '모든 서비스와 제품에서 완벽함과 최고의 품질을 추구합니다.',
            'value4-title': '고객 중심',
            'value4-desc': '고객의 성공을 최우선으로 하여 맞춤형 솔루션을 제공합니다.',
            'value5-title': '지속 가능성',
            'value5-desc': '환경을 존중하고 사회적 책임을 다하여 지속 가능한 성장을 이룹니다.',
            'team-title': '우리 팀',
            'team-desc': '경험이 풍부한 우리 팀은 귀사의 성공적인 항해를 지원합니다.',
            'member1-name': '홍길동',
            'member1-title': 'CEO',
            'member1-desc': '글로벌 해운 및 물류 분야 20년 경력의 전문가.',
            'member2-name': '김철수',
            'member2-title': '운영 매니저',
            'member2-desc': '파나마 운하 지역 선박 보급 전문가.',

            'services-title': '서비스 - 네오 파나마 마리타임 서비스',
            'services-hero-title': '우리의 서비스',
            'services-intro-desc': '우리의 다양한 해운 솔루션을 확인해보세요.',
            'services-list-title': '주요 서비스',
            'service1-title': '선용품 공급',
            'service1-desc': '갑판, 기관, 선실 용품 등을 포함한 종합 선용품을 제공합니다.',
            'service2-title': '신선 부식 공급',
            'service2-desc': '신선한 식품 및 음료를 공급합니다.',
            'service3-title': '벙커 / 윤활유 공급',
            'service3-desc': '경쟁력 있는 가격으로 고품질 연료와 윤활유를 제공합니다.',
            'service4-title': '부가 서비스',
            'service4-desc': '선박 검사 보고서에 필요한 외판 사진 촬영 등.',
            
            'contact-title': '문의하기: 네오 파나마 마리타임 서비스와 함께하세요',
            'contact-details-title': '연락처 정보',
            'emergency-line-label': '365일 긴급 전화 :',
            'emergency-phone': '+507 6831-6708',
            'general-inquiry-label': '일반 문의(사무실) :',
            'general-phone': '+507 372-3929',
            'email-label': '이메일 :',
            'email-address': 'info@neopanama.com',
            'address-label': '사무실 주소 :',
            'full-address': 'Building A, Suite B, Av. Balboa, Panama City, Panama',
            'office-hours-label': '운영 시간 :',
            'office-hours-details': '월요일 - 금요일, 08:00 - 17:00 (파나마 시간)',
            'emergency-note': '신속하고 정확한 서비스 제공, 안전운항을 위한 최상의 선택',
            'form-title': '온라인 문의 양식',
            'label-company': '회사 / 선박명 :',
            'label-contact': '담당자명 :',
            'label-email': '이메일 :',
            'label-phone': '전화번호 :',
            'label-inquiry-type': '문의 유형 :',
            'select-option': '옵션 선택',
            'option-provisions': '식자재 견적',
            'option-chandling': '선용품 문의',
            'option-bunker': '벙커 / 윤활유 문의',
            'option-other': '기타',
            'label-message': '메시지 :',
            'label-file': '파일 첨부 (선택 사항) :',
            'submit-button': '메시지 보내기',
            'map-note': '위 지도는 대략적인 사무실 위치를 나타냅니다.',
        },
        'en': {
            'homepage-title': 'Neo Panama Maritime Service',
            'home': 'HOME',
            'about': 'ABOUT US',
            'services': 'SERVICES',
            'contact': 'CONTACT US',
            'hero-slogan': 'From the heart of Panama\'s shipping, we supply freshness and trust to your vessel.',
            'hero-tagline': 'Swift and accurate supply 365 days a year. Your excellent choice for the best voyage.',
            'request-quote': 'Request a Quote',
            'explore-services': 'Explore Services',
            'our-promise-title': 'Our Promise',
            'promise1-title': 'Swift Delivery',
            'promise1-desc': 'We deliver premium fresh provisions to the Panama Canal and major ports 24 hours a day.',
            'promise2-title': 'Global Standard Quality',
            'promise2-desc': 'We operate a strict hygiene and quality control system that complies with HACCP standards.',
            'promise3-title': 'Customized Solutions',
            'promise3-desc': 'We offer flexible provision configurations and meal plans tailored to the diets of sailors of various nationalities.',
            'services-preview-title': 'Our Services',
            'services-preview-desc': 'At the critical crossroads of Panama, we make all your shipping operations seamless.',
            'service1-title': 'Ship Chandling',
            'service1-desc': 'We supply fresh, hygienic provisions and high-quality ship chandlery swiftly.',
            'service2-title': 'Ship Repair & Services',
            'service2-desc': 'We provide professional repair and maintenance services for vessels.',
            'service3-title': 'Maritime Consulting',
            'service3-desc': 'We provide in-depth analysis and expert consulting on the Panama maritime market.',
            'provisions-title': 'Fresh Provisions Supply',
            'provisions-desc': 'We swiftly provide fresh, hygienic provisions and a variety of high-quality ship chandlery.',
            'learn-more': 'Learn More',
            'why-choose-us-title': 'Why Neo Panama Maritime Service?',
            'why-choose-us-desc': 'At the critical crossroads of Panama\'s shipping, we go beyond being a simple supplier to become your trusted partner.',
            'about-us-btn': 'About Us',
            'privacy-policy': 'Privacy Policy',
            'terms-of-service': 'Terms of Service',
            'copyright': '© 2024 Neo Panama Maritime Service. All rights reserved.',
            
            'about-title': 'Neo Panama Maritime Service: Pioneering Panama Maritime Solutions',
            'company-intro-desc': 'At the heart of Panama\'s shipping,<br>we supply freshness and trust to your vessel.',
            'vision-title': 'Our Vision',
            'vision-desc': 'To be the **comprehensive maritime service partner** contributing to the success of our clients\' voyages by providing top-tier marine supply services at the gateway of the Panama Canal, going beyond simple provisioning.',
            'mission-title': 'Our Mission',
            'mission-desc': 'We provide innovative and reliable solutions tailored to our clients\' needs, based on the highest quality **fresh provisions**, and contribute to the development of the Panama maritime industry through sustainable growth.',
            'values-title': 'Core Values',
            'value1-title': 'Trust',
            'value1-desc': 'Building strong relationships with clients through transparent and honest service.',
            'value2-title': 'Innovation',
            'value2-desc': 'Developing efficient and optimized services in line with the changing maritime market.',
            'value3-title': 'Excellence',
            'value3-desc': 'Striving for perfection and the highest quality in all services and products.',
            'value4-title': 'Customer Focus',
            'value4-desc': 'Providing customized solutions with our clients\' success as our top priority.',
            'value5-title': 'Sustainability',
            'value5-desc': 'Respecting the environment and fulfilling social responsibility for sustainable growth.',
            'team-title': 'Our Team',
            'team-desc': 'Our experienced team supports the successful voyage of your company.',
            'member1-name': 'John Doe',
            'member1-title': 'CEO',
            'member1-desc': 'A professional with 20 years of experience in global shipping and logistics.',
            'member2-name': 'Jane Smith',
            'member2-title': 'Operations Manager',
            'member2-desc': 'An expert in vessel provisioning in the Panama Canal area.',
            
            'services-title': 'Services - Neo Panama Maritime Service',
            'services-hero-title': 'Our Services',
            'services-intro-desc': 'Explore our wide range of maritime solutions.',
            'services-list-title': 'Our Main Services',
            'service1-title': 'Ship Chandling',
            'service1-desc': 'Deck, engine, cabin stores, and more.',
            'service2-title': 'Fresh Provisions Supply',
            'service2-desc': 'High-quality food and beverages.',
            'service3-title': 'Bunker & Lubricants',
            'service3-desc': 'Fuel and lubricants.',
            'service4-title': 'Auxiliary Services',
            'service4-desc': 'Specialized support tailored to your vessel\'s needs.',
            
            'contact-title': 'Contact Us: Partner with Neo Panama Maritime Service',
            'contact-details-title': 'Contact Information',
            'emergency-line-label': '365-Day Emergency Line:',
            'emergency-phone': '+507 12345678',
            'general-inquiry-label': 'General Inquiries (Office):',
            'general-phone': '+507 87654321',
            'email-label': 'Email:',
            'email-address': 'info@neopanama.com',
            'address-label': 'Office Address:',
            'full-address': 'Building A, Suite B, Av. Balboa, Panama City, Panama',
            'office-hours-label': 'Office Hours:',
            'office-hours-details': 'Monday - Friday, 08:00 - 17:00 (Panama Time)',
            'emergency-note': 'Providing fast and accurate service, the best choice for safe navigation.',
            'form-title': 'Online Inquiry Form',
            'label-company': 'Company / Vessel Name:',
            'label-contact': 'Contact Person Name:',
            'label-email': 'Email:',
            'label-phone': 'Phone Number:',
            'label-inquiry-type': 'Type of Inquiry:',
            'select-option': 'Select an option',
            'option-provisions': 'Provisions Quote',
            'option-chandling': 'Chandling Inquiry',
            'option-bunker': 'Bunker / Lubricants Inquiry',
            'option-other': 'Other',
            'label-message': 'Message:',
            'label-file': 'Attach File (Optional):',
            'submit-button': 'Send Message',
            'map-note': 'The map shows the approximate location of our office.',
        },
        'es': {
            'homepage-title': 'Neo Panama Maritime Service',
            'home': 'INICIO',
            'about': 'QUIÉNES SOMOS',
            'services': 'SERVICIOS',
            'contact': 'CONTÁCTENOS',
            'hero-slogan': 'Desde el corazón del transporte marítimo de Panamá, suministramos frescura y confianza a su embarcación.',
            'hero-tagline': 'Suministro rápido y preciso 365 días al año. Su excelente elección para el mejor viaje.',
            'request-quote': 'Solicitar una Cotización',
            'explore-services': 'Explorar Servicios',
            'our-promise-title': 'Nuestra Promesa',
            'promise1-title': 'Entrega Rápida',
            'promise1-desc': 'Entregamos provisiones frescas de primera calidad al Canal de Panamá y a los principales puertos las 24 horas del día.',
            'promise2-title': 'Calidad Estándar Global',
            'promise2-desc': 'Operamos un estricto sistema de control de higiene y calidad que cumple con los estándares HACCP.',
            'promise3-title': 'Soluciones Personalizadas',
            'promise3-desc': 'Ofrecemos configuraciones de provisiones flexibles y planes de comidas adaptados a las dietas de marineros de varias nacionalidades.',
            'services-preview-title': 'Nuestros Servicios',
            'services-preview-desc': 'En el cruce de caminos crítico de Panamá, hacemos que todas sus operaciones de envío sean fluidas.',
            'service1-title': 'Aprovisionamiento de Buques',
            'service1-desc': 'Suministramos provisiones frescas e higiénicas y provisiones de buques de alta calidad de forma rápida.',
            'service2-title': 'Reparación y Servicios de Buques',
            'service2-desc': 'Ofrecemos servicios profesionales de reparación y mantenimiento para buques.',
            'service3-title': 'Consultoría Marítima',
            'service3-desc': 'Ofrecemos análisis en profundidad y consultoría experta sobre el mercado marítimo de Panamá.',
            'provisions-title': 'Suministro de Víveres Frescos',
            'provisions-desc': 'Suministramos rápidamente víveres frescos e higiénicos y una variedad de provisiones de buques de alta calidad.',
            'learn-more': 'Saber más',
            'why-choose-us-title': '¿Por qué Neo Panama Maritime Service?',
            'why-choose-us-desc': 'En el cruce de caminos crítico del transporte marítimo de Panamá, vamos más allá de ser un simple proveedor para convertirnos en su socio de confianza.',
            'about-us-btn': 'Quiénes Somos',
            'privacy-policy': 'Política de Privacidad',
            'terms-of-service': 'Términos de Servicio',
            'copyright': '© 2024 Neo Panama Maritime Service. Todos los derechos reservados.',
            
            'about-title': 'Neo Panama Maritime Service: Pioneros en Soluciones Marítimas en Panamá',
            'company-intro-desc': 'En el corazón del transporte marítimo de Panamá,<br>suministramos frescura y confianza a su embarcación.',
            'vision-title': 'Nuestra Visión',
            'vision-desc': 'Ser el **socio de servicio marítimo integral** que contribuya al éxito de los viajes de nuestros clientes, proporcionando servicios de suministro marítimo de primer nivel en la puerta del Canal de Panamá, yendo más allá del simple aprovisionamiento.',
            'mission-title': 'Nuestra Misión',
            'mission-desc': 'Ofrecemos soluciones innovadoras y confiables adaptadas a las necesidades de nuestros clientes, basadas en **víveres frescos** de la más alta calidad, y contribuimos al desarrollo de la industria marítima panameña a través del crecimiento sostenible.',
            'values-title': 'Valores Fundamentales',
            'value1-title': 'Confianza',
            'value1-desc': 'Construir relaciones sólidas con los clientes a través de un servicio transparente y honesto.',
            'value2-title': 'Innovación',
            'value2-desc': 'Desarrollar servicios eficientes y optimizados en línea con el cambiante mercado marítimo.',
            'value3-title': 'Excelencia',
            'value3-desc': 'Buscar la perfección y la más alta calidad en todos los servicios y productos.',
            'value4-title': 'Enfoque en el Cliente',
            'value4-desc': 'Brindar soluciones personalizadas con el éxito de nuestros clientes como nuestra principal prioridad.',
            'value5-title': 'Sostenibilidad',
            'value5-desc': 'Respetar el medio ambiente y cumplir con la responsabilidad social para un crecimiento sostenible.',
            'team-title': 'Nuestro Equipo',
            'team-desc': 'Nuestro experimentado equipo apoya el éxito del viaje de su empresa.',
            'member1-name': 'John Doe',
            'member1-title': 'CEO',
            'member1-desc': 'Un profesional con 20 años de experiencia en transporte y logística global.',
            'member2-name': 'Jane Smith',
            'member2-title': 'Gerente de Operaciones',
            'member2-desc': 'Un experto en aprovisionamiento de buques en el área del Canal de Panamá.',
            
            'services-title': 'Servicios - Neo Panama Maritime Service',
            'services-hero-title': 'Nuestros Servicios',
            'services-intro-desc': 'Explore nuestra amplia gama de soluciones marítimas.',
            'services-list-title': 'Nuestros Servicios Principales',
            'service1-title': 'Suministro de Provisions',
            'service1-desc': 'Provisiones de cubierta, sala de máquinas, cabina y más.',
            'service2-title': 'Suministro de Víveres Frescos',
            'service2-desc': 'Alimentos y bebidas de alta calidad.',
            'service3-title': 'Búnker y Lubricantes',
            'service3-desc': 'Combustible y lubricantes.',
            'service4-title': 'Servicios Auxiliares',
            'service4-desc': 'Soporte especializado adaptado a las necesidades de su embarcación.',
            
            'contact-title': 'Contáctenos: Asóciese con Neo Panama Maritime Service',
            'contact-details-title': 'Información de Contacto',
            'emergency-line-label': 'Línea de Emergencia 365 días:',
            'emergency-phone': '+507 12345678',
            'general-inquiry-label': 'Consultas Generales (Oficina):',
            'general-phone': '+507 87654321',
            'email-label': 'Correo Electrónico:',
            'email-address': 'info@neopanama.com',
            'address-label': 'Dirección de la Oficina:',
            'full-address': 'Edificio A, Suite B, Av. Balboa, Ciudad de Panamá, Panamá',
            'office-hours-label': 'Horario de Oficina:',
            'office-hours-details': 'Lunes - Viernes, 08:00 – 17:00 (Hora de Panamá)',
            'emergency-note': 'Proporcionando un servicio rápido y preciso, la mejor opción para una navegación segura.',
            'form-title': 'Formulario de Consulta en Línea',
            'label-company': 'Nombre de la Empresa / Buque:',
            'label-contact': 'Nombre del Contacto:',
            'label-email': 'Correo Electrónico:',
            'label-phone': 'Número de Teléfono:',
            'label-inquiry-type': 'Tipo de Consulta:',
            'select-option': 'Seleccione una opción',
            'option-provisions': 'Cotización de Viveres',
            'option-chandling': 'Consulta de Provisionista',
            'option-bunker': 'Consulta de Búnker / Lubricantes',
            'option-other': 'Otros',
            'label-message': 'Mensaje:',
            'label-file': 'Adjuntar Archivo (Opcional):',
            'submit-button': 'Enviar Mensaje',
            'map-note': 'El mapa muestra la ubicación aproximada de nuestra oficina.',

        },
        'zh': {
            'homepage-title': 'Neo Panama Maritime Service',
            'home': '主页',
            'about': '关于我们',
            'services': '服务',
            'contact': '联系我们',
            'hero-slogan': '在巴拿马航运的核心地带，我们为您的船只提供新鲜和信赖。',
            'hero-tagline': '每年365天，快速准确地供应。您成功航行的卓越选择。',
            'request-quote': '索取报价',
            'explore-services': '探索服务',
            'our-promise-title': '我们的承诺',
            'promise1-title': '快速交货',
            'promise1-desc': '我们每天24小时向巴拿马运河和主要港口运送优质新鲜食品。',
            'promise2-title': '全球标准品质',
            'promise2-desc': '我们遵守HACCP标准，运营着严格的卫生和质量管理体系。',
            'promise3-title': '定制解决方案',
            'promise3-desc': '我们提供灵活的食品配置和膳食计划，以适应不同国籍海员的饮食需求。',
            'services-preview-title': '我们的服务',
            'services-preview-desc': '在巴拿马重要的十字路口，我们让您的所有航运业务顺畅无阻。',
            'service1-title': '船舶供应',
            'service1-desc': '我们迅速提供新鲜、卫生的食品和高质量的船舶用品。',
            'service2-title': '船舶修理及服务',
            'service2-desc': '我们提供专业的船舶维修和保养服务。',
            'service3-title': '海事咨询',
            'service3-desc': '我们提供对巴拿马海事市场的深入分析和专业咨询。',
            'provisions-title': '新鲜食品供应',
            'provisions-desc': '我们迅速提供新鲜、卫生的食品和各种高质量的船舶用品。',
            'learn-more': '了解更多',
            'why-choose-us-title': '为什么选择新巴拿马海事服务？',
            'why-choose-us-desc': '在巴拿马航运的重要十字路口，我们不仅仅是供应商，更是您值得信赖的合作伙伴。',
            'about-us-btn': '关于我们',
            'privacy-policy': '隐私政策',
            'terms-of-service': '服务条款',
            'copyright': '© 2024 Neo Panama Maritime Service. 版权所有.',
            
            'about-title': '新巴拿马海事服务：开创巴拿马海事新篇章',
            'company-intro-desc': '在巴拿马航运的核心地带，<br>我们为您的船只提供新鲜和信赖。',
            'vision-title': '我们的愿景',
            'vision-desc': '成为一个**全面的海事服务合作伙伴**，通过在巴拿马运河门户提供顶级的船舶供应服务，超越简单的补给，为客户的航行成功做出贡献。',
            'mission-title': '我们的使命',
            'mission-desc': '我们根据最高质量的**新鲜补给品**，提供创新且可靠的解决方案，以满足客户的需求，并通过可持续发展为巴拿马海事产业的发展做出贡献。',
            'values-title': '核心价值观',
            'value1-title': '信任',
            'value1-desc': '通过透明和诚实的服务与客户建立牢固的关系。',
            'value2-title': '创新',
            'value2-desc': '根据不断变化的海事市场开发高效和优化的服务。',
            'value3-title': '卓越',
            'value3-desc': '在所有服务和产品中追求完美和最高品质。',
            'value4-title': '以客户为中心',
            'value4-desc': '提供定制解决方案，将客户的成功作为我们的首要任务。',
            'value5-title': '可持续性',
            'value5-desc': '尊重环境并履行社会责任，以实现可持续增长。',
            'team-title': '我们的团队',
            'team-desc': '我们经验丰富的团队支持贵公司的成功航行。',
            'member1-name': '张三',
            'member1-title': '首席执行官',
            'member1-desc': '一位拥有20年全球航运和物流经验的专业人士。',
            'member2-name': '李四',
            'member2-title': '运营经理',
            'member2-desc': '巴拿马运河地区船舶补给专家。',
            
            'services-title': '服务 - 新巴拿马海事服务',
            'services-hero-title': '我们的服务',
            'services-intro-desc': '探索我们广泛的海事解决方案。',
            'services-list-title': '我们的主要服务',
            'service1-title': '船舶供应',
            'service1-desc': '甲板、发动机、客舱用品等。',
            'service2-title': '新鲜食品供应',
            'service2-desc': '高品质食品和饮料。',
            'service3-title': '燃油和润滑油',
            'service3-desc': '以有竞争力的价格提供高质量的燃油和润滑油。',
            'service4-title': '附加服务',
            'service4-desc': '根据您的船只需求量身定制的专业支持。',
            
            'contact-title': '联系我们：与新巴拿马海事服务公司合作',
            'contact-details-title': '联系方式',
            'emergency-line-label': '365天 紧急热线 :',
            'emergency-phone': '+507 12345678',
            'general-inquiry-label': '一般咨询 (办公室) :',
            'general-phone': '+507 87654321',
            'email-label': '电子邮件 :',
            'email-address': 'info@neopanama.com',
            'address-label': '办公室地址 :',
            'full-address': 'Building A, Suite B, Av. Balboa, Panama City, Panama',
            'office-hours-label': '办公时间 :',
            'office-hours-details': '周一至周五, 08:00 - 17:00 (巴拿马时间)',
            'emergency-note': '提供快速准确的服务，是安全航行的最佳选择。',
            'form-title': '在线咨询表',
            'label-company': '公司 / 船只名称 :',
            'label-contact': '联系人姓名 :',
            'label-email': '电子邮件 :',
            'label-phone': '电话号码 :',
            'label-inquiry-type': '咨询类型 :',
            'select-option': '选择一个选项',
            'option-provisions': '补给品报价',
            'option-chandling': '供应品咨询',
            'option-bunker': '燃油 / 润滑油咨询',
            'option-other': '其他',
            'label-message': '消息 :',
            'label-file': '附加文件 (可选) :',
            'submit-button': '发送消息',
            'map-note': '地图显示了我们办公室的大致位置。',
        },
    };
    
    // 언어 코드와 표시할 언어 이름 매핑
    const languageMap = {
        'en': 'EN',
        'es': 'ES',
        'ko': 'KO',
        'zh': 'ZH',
    };

    // 드롭다운 메뉴를 동적으로 생성합니다.
    const createLanguageDropdown = () => {
        languageSelect.innerHTML = ''; // 기존 옵션 제거
        for (const langCode in languageMap) {
            const option = document.createElement('option');
            option.value = langCode;
            option.textContent = languageMap[langCode];
            languageSelect.appendChild(option);
        }
    };
    
    // 페이지 로드 시 드롭다운 메뉴를 먼저 생성합니다.
    createLanguageDropdown();

    // 현재 선택된 언어를 확인하고, 없으면 기본값으로 'en'을 사용
    let currentLang = localStorage.getItem('lang') || 'ko';
    languageSelect.value = currentLang;

    // 페이지의 모든 요소를 순회하며 번역을 적용하는 함수
    const setLanguage = (lang) => {
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                const translation = translations[lang][key];
                // HTML 태그가 포함된 번역은 innerHTML 사용
                if (translation.includes('<strong>') || translation.includes('**') || translation.includes('<br>')) {
                    // Markdown 스타일의 볼드체(double asterisks)를 <strong> 태그로 변환
                    const formattedTranslation = translation.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                    element.innerHTML = formattedTranslation;
                } else {
                    element.textContent = translation;
                }
            }
        });
        
        // 페이지 제목(title)도 번역
        const pageTitleKey = getPageTitleKey();
        if (translations[lang][pageTitleKey]) {
            document.title = translations[lang][pageTitleKey];
        }
    };
    
    // 현재 페이지의 제목 키를 가져오는 헬퍼 함수
    const getPageTitleKey = () => {
        const path = window.location.pathname;
        if (path.includes('about.html')) {
            return 'about-title';
        }
        if (path.includes('services.html')) {
            return 'services-title';
        }
        if (path.includes('contact.html')) {
            return 'contact-title';
        }
        return 'homepage-title'; 
    };

    // 드롭다운 메뉴 변경 이벤트 리스너
    languageSelect.addEventListener('change', (event) => {
        currentLang = event.target.value;
        localStorage.setItem('lang', currentLang);
        setLanguage(currentLang);
    });

    // 페이지 로드 시 언어 설정
    setLanguage(currentLang);
});
