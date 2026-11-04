/**
 * Better Solutions - Real Estate Developers & Primary Projects Data Model
 */

const DEVELOPERS_DATA = [
  {
    "id": "tmg",
    "name": "مجموعة طلعت مصطفى (TMG)",
    "logoText": "TMG",
    "badge": "رائد التطوير العقاري في مصر",
    "founded": "1970",
    "experienceYears": "+50 عاماً",
    "deliveredUnits": "+140,000 وحدة",
    "rating": "4.9",
    "coverImage": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    "description": "أكبر وأعرق مجموعة تطوير عقاري في مصر والشرق الأوسط، صاحبة المشروعات العمرانية المتكاملة الشهيرة (مدينتي، الرحاب، مدينة نور، وسيليا). تتميز بتوفير أسلوب حياة استثنائي وخدمات ذاتية مكتفية وإدارة مجتمعية مستدامة بأعلى المعايير العالمية.",
    "projects": [
      {
        "id": "noor-city",
        "name": "مدينة نور (Noor City)",
        "location": "أمام العاصمة الإدارية وامتداد العبور والشروق",
        "status": "متاح وحدات - مراحل جديدة",
        "deliveryYear": "2026 - 2027",
        "type": "شقق وفيلات ذكية خضراء",
        "startPrice": 3100000,
        "downPayment": 155000,
        "downPaymentPercent": "5%",
        "installmentYears": "أقساط حتى 15 سنة",
        "overview": "أول مدينة ذكية صديقة للبيئة من الجيل الرابع في شرق القاهرة، توفر بنية تحتية رقمية متطورة، طاقة شمسية، وشبكة خدمات ذكية متكاملة.",
        "amenities": [
          "مدينة ذكية مستدامة 4G",
          "مدارس وجامعات دولية",
          "نوادي رياضية واجتماعية",
          "مواصلات داخلية وخارجية ذكية",
          "مولات ومراكز تسوق عالمية",
          "بحيرات صناعية ومساحات خضراء"
        ],
        "images": [
          "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80"
        ]
      },
      {
        "id": "madinaty",
        "name": "مشروع مدينتي (Madinaty)",
        "location": "شرق القاهرة - طريق السويس / الإسماعيلية",
        "status": "استلام فوري ومراحل مميزة",
        "deliveryYear": "استلام فوري",
        "type": "شقق سكنية وفيلات فاخرة",
        "startPrice": 4200000,
        "downPayment": 840000,
        "downPaymentPercent": "20%",
        "installmentYears": "تسهيلات سداد حتى 7 سنوات",
        "overview": "المدينة العالمية على أرض مصرية، تمتد على 8,000 فدان وتضم ملاعب جولف عالمية، أوبن إير مول، ومناطق ترفيهية متكاملة.",
        "amenities": [
          "أوبن إير مول ومراكز سينمائية",
          "نادي مدينتي الرياضي العالمي",
          "ملاعب جولف وبحيرات",
          "حراسة وأمن إلكتروني 24/7",
          "مراكز طبية ومستشفيات متخصصة",
          "خدمات بنكية وإدارية"
        ],
        "images": [
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80"
        ]
      },
      {
        "id": "al-rehab",
        "name": "مدينة الرحاب (Al Rehab City)",
        "location": "القاهرة الجديدة - محور السادات",
        "status": "ساكنة بالكامل - وحدات إعادة بيع واستلام فوري",
        "deliveryYear": "استلام فوري بالمفتاح",
        "type": "شقق، دوبلكس، وفيلات مستقلة",
        "startPrice": 3800000,
        "downPayment": 1200000,
        "downPaymentPercent": "30%",
        "installmentYears": "كاش وتسهيلات سداد ميسرة",
        "overview": "أول مجتمع سكني متكامل ومكتمل الخدمات في القاهرة الجديدة، يتميز بالهدوء والمساحات الخضراء والأسواق التجارية المتنوعة.",
        "amenities": [
          "سوق الرحاب التجاري المفتوح",
          "نوادي وبحيرات ترفيهية",
          "مجمع بنوك وخدمات حكومية",
          "أمن وبوابات إلكترونية",
          "مدارس لغات ودولية"
        ],
        "images": [
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1502005229762-ee1b2b8ab98f?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    ]
  },
  {
    "id": "el-batal",
    "name": "البطل جروب للتطوير العقاري (El Batal Group)",
    "logoText": "El Batal",
    "badge": "المطور الأبرز في العبور ومصر الجديدة",
    "founded": "1978",
    "experienceYears": "+45 عاماً",
    "deliveredUnits": "+20,000 وحدة",
    "rating": "4.8",
    "coverImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "description": "واحدة من أقدم شركات التطوير العقاري بالسوق المصري، نفذت سلسلة مشروعات 'روك' (Rock) المتميزة في مدينة العبور، التجمع الخامس، وأكتوبر، مع تاريخ حافل بالتسليم في المواعيد المحددة وجودة بناء تفوق التوقعات.",
    "projects": [
      {
        "id": "rock-eden",
        "name": "كمبوند روك إيدن (Rock Eden - El Obour)",
        "location": "مدينة العبور - الحي الخامس وامتداد المحور",
        "status": "متاح وحدات - استلام فوري وقريب",
        "deliveryYear": "استلام فوري / 2025",
        "type": "شقق فاخرة، بنتهاوس، وتاون هاوس",
        "startPrice": 2800000,
        "downPayment": 280000,
        "downPaymentPercent": "10%",
        "installmentYears": "أقساط متساوية على 7 سنوات",
        "overview": "أيقونة السكن الراقي في قلب مدينة العبور، يوفر بيئة استثنائية من الطبيعة والهدوء مع تصاميم معمارية أوروبية راقية ومساحات خضراء شاسعة.",
        "amenities": [
          "كلوب هاوس على أعلى مستوى",
          "حمامات سباحة متعددة",
          "كيدز اريا ومسارات دراجات",
          "مول تجاري وعيادات متخصصة",
          "أمن وحراسة بكاميرات مراقبة",
          "إطلالات بانورامية خضراء"
        ],
        "images": [
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80"
        ]
      },
      {
        "id": "rock-vera",
        "name": "كمبوند روك فيرا (Rock Vera)",
        "location": "القاهرة الجديدة - التجمع الخامس",
        "status": "جاهز للاستلام الفوري",
        "deliveryYear": "استلام فوري",
        "type": "شقق سكنية بطابع إيطالي كلاسيكي",
        "startPrice": 4600000,
        "downPayment": 690000,
        "downPaymentPercent": "15%",
        "installmentYears": "أقساط مريحة على 6 سنوات",
        "overview": "تصميم مستوحى من شوارع وميادين إيطاليا التراثية بلمسات معمارية إيطالية ساحرة وأقواس رخامية وشوارع مرصوفة بالحجر.",
        "amenities": [
          "طراز معماري إيطالي فريد",
          "كلوب هاوس مع حمام سباحة مغطى",
          "صالة بولينج ومسرح سينمائي",
          "سبا وجيم رياضي مجهز",
          "مكتبة ومساحات عمل مشتركة"
        ],
        "images": [
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    ]
  },
  {
    "id": "sabbour",
    "name": "الأهلي صبور للتطوير العقاري (Al Ahly Sabbour)",
    "logoText": "Sabbour",
    "badge": "شراكة الثقة والابتكار المعماري",
    "founded": "1994",
    "experienceYears": "+30 عاماً",
    "deliveredUnits": "+35,000 وحدة",
    "rating": "4.9",
    "coverImage": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    "description": "شراكة هندسية وتنموية رائدة بين البنك الأهلي المصري وعائلة صبور الهندسية، تميزت ببناء مجتمعات فاخرة في شرق القاهرة والساحل الشمالي وأكتوبر، مع التزام تام بمواصفات التشطيب الفاخر.",
    "projects": [
      {
        "id": "odyssia",
        "name": "ذا سيتي أوف أوديسيا (The City of Odyssia)",
        "location": "مدينة المستقبل - على بعد دقائق من العبور والشروق",
        "status": "متاح مراحل بيع حصرية",
        "deliveryYear": "2026",
        "type": "شقق فاخرة، تاون هاوس، ودوبلكس",
        "startPrice": 4200000,
        "downPayment": 420000,
        "downPaymentPercent": "10%",
        "installmentYears": "أقساط تصل حتى 10 سنوات",
        "overview": "مدينة متكاملة تحتضن أكبر مجمع تكنولوجي وثقافي وترفيهي في مدينة المستقبل، بالقرب من العاصمة الإدارية وطريق السويس.",
        "amenities": [
          "منطقة أعمال وتكنولوجيا متقدمة",
          "ممشى للمشاة والدراجات يمتد لكيلومترات",
          "نوادي وفنادق عالمية",
          "بحيرات صناعية وحدائق شاسعة",
          "مركز تجاري وترفيهي ضخم"
        ],
        "images": [
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1502005229762-ee1b2b8ab98f?auto=format&fit=crop&w=1000&q=80"
        ]
      },
      {
        "id": "l-avenir",
        "name": "كمبوند لافينير (L'Avenir)",
        "location": "مدينة المستقبل - محور الأمل",
        "status": "استلام فوري وقريب",
        "deliveryYear": "استلام فوري",
        "type": "شقق بطابع فرنسي ودوبلكس",
        "startPrice": 3900000,
        "downPayment": 585000,
        "downPaymentPercent": "15%",
        "installmentYears": "أقساط على 7 سنوات",
        "overview": "تصميم مستوحى من سحر العمارة الفرنسية الكلاسيكية مع لمسات عصرية ومساحات خضراء تغطي أكثر من 85% من مساحة المشروع.",
        "amenities": [
          "حمامات سباحة وبحيرات صناعية",
          "نادي صحي وجيم متكامل",
          "ملاعب تنس وكرة قدم",
          "ممشى رياضي ومناطق جلوس هادئة",
          "أمن وبوابات إلكترونية ذكية"
        ],
        "images": [
          "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    ]
  },
  {
    "id": "sodic",
    "name": "سوديك العقارية (SODIC Developments)",
    "logoText": "SODIC",
    "badge": "العلامة الرائدة للمجتمعات الراقية",
    "founded": "1996",
    "experienceYears": "+28 عاماً",
    "deliveredUnits": "+25,000 وحدة",
    "rating": "4.9",
    "coverImage": "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80",
    "description": "من أثقل الأسماء في قطاع العقارات الفاخرة بمصر، تشتهر بمشروعاتها التي تدمج التصميم المعماري الإبداعي بالاستدامة البيئية وإدارة المرافق المتفوقة.",
    "projects": [
      {
        "id": "sodic-east",
        "name": "سوديك إيست (SODIC East - El Shorouk / Obour)",
        "location": "بين الشروق وامتداد العبور - أمام المركز الطبي العالمي",
        "status": "متاح وحدات - تسليم فوري ومراحل جديدة",
        "deliveryYear": "استلام فوري / 2025",
        "type": "شقق فاخرة، تاون هاوس، وتوين هاوس",
        "startPrice": 5800000,
        "downPayment": 290000,
        "downPaymentPercent": "5%",
        "installmentYears": "أقساط متساوية على 8 سنوات",
        "overview": "أكبر كمبوند متكامل لسوديك في شرق القاهرة على مساحة 655 فداناً، يضم نادي كلوب إس الرياضي، مدارس دولية، ومحمية طبيعية خضراء.",
        "amenities": [
          "نادي Club S الرياضي على 40 فدان",
          "مدارس دولية معتمدة",
          "منطقة تخييم وأنشطة خارجية",
          "عيادات ومراكز طبية متطورة",
          "مول تجاري ومطاعم مفتوحة",
          "بنية تحتية ذكية وإدارة صديقة للبيئة"
        ],
        "images": [
          "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80"
        ]
      },
      {
        "id": "villette",
        "name": "فيليت سوديك (Villette SODIC)",
        "location": "التجمع الخامس - المربع الذهبي Golden Square",
        "status": "استلام فوري ووحدات حصرية",
        "deliveryYear": "استلام فوري",
        "type": "شقق فندقية وفيلات مستقلة",
        "startPrice": 7200000,
        "downPayment": 1440000,
        "downPaymentPercent": "20%",
        "installmentYears": "كاش وتسهيلات سداد مريحة",
        "overview": "كمبوند الفخامة والأناقة في قلب الجولدن سكوير، صُممت حدائقه بواسطة شركات عالمية ليوفر أسلوب حياة هادئ ومتميز.",
        "amenities": [
          "4 حدائق مركزية بمفاهيم مختلفة",
          "كلوب هاوس بمسبح أولمبي",
          "ملاعب رياضية ومسارات للجري",
          "أمن ذكي وحراسة 24 ساعة",
          "سبا ونادي صحي متطور"
        ],
        "images": [
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    ]
  },
  {
    "id": "misr-italia",
    "name": "مصر إيطاليا العقارية (Misr Italia Properties)",
    "logoText": "Misr Italia",
    "badge": "التصميم الإيطالي والابتكار العمراني",
    "founded": "1998",
    "experienceYears": "+25 عاماً",
    "deliveredUnits": "+18,000 وحدة",
    "rating": "4.8",
    "coverImage": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    "description": "شركة رائدة في تطوير المشروعات السكنية والسياحية بتصاميم مستوحاة من العمارة الإيطالية الحديثة، مع تقديم خطط سداد مرنة للغاية ومساحات خضراء واسعة.",
    "projects": [
      {
        "id": "il-bosco",
        "name": "كمبوند إل بوسكو (IL Bosco)",
        "location": "العاصمة الإدارية الجديدة - على النهر الأخضر مباشرة",
        "status": "متاح استلام فوري ومراحل تسليم قريبة",
        "deliveryYear": "استلام فوري / 2025",
        "type": "شقق في غابات رأسية، تاون هاوس، وفيلات",
        "startPrice": 4800000,
        "downPayment": 240000,
        "downPaymentPercent": "5%",
        "installmentYears": "أقساط تصل إلى 9 سنوات",
        "overview": "أول مشروع من نوعه في الشرق الأوسط يطبق مفهوم الغابات الرأسية مع النهر الأخضر، ويوفر بيئة صحية وطبيعية غير مسبوقة.",
        "amenities": [
          "غابات رأسية ونباتات استوائية نادرة",
          "النهر الأخضر والبحيرات المائية",
          "كلوب هاوس عالمي",
          "مول تجاري ومطاعم فندقية",
          "ملاعب رياضية ومسارات ركض"
        ],
        "images": [
          "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80"
        ]
      },
      {
        "id": "vinci",
        "name": "كمبوند فينشي (Vinci)",
        "location": "العاصمة الإدارية - الحي الدبلوماسي R7",
        "status": "متاح وحدات للتعاقد الفوري",
        "deliveryYear": "2025 - 2026",
        "type": "شقق فاخرة، دوبلكس، وفيلات",
        "startPrice": 4100000,
        "downPayment": 410000,
        "downPaymentPercent": "10%",
        "installmentYears": "أقساط متساوية على 8 سنوات",
        "overview": "مشروع فني مستوحى من الفنون التشكيلية العالمية بالتعاون مع مصممين عالميين، يوفر تجربة سكنية مميزة في أرقى أحياء العاصمة.",
        "amenities": [
          "تصميمات فنية مستوحاة من ليوناردو دافنشي",
          "ممشى تجاري Vin Commercial",
          "بحيرات صناعية وشلالات مائية",
          "كيدز اريا ونوادي صحية",
          "أمن ذكي وبوابات إلكترونية"
        ],
        "images": [
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1502005229762-ee1b2b8ab98f?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    ]
  },
  {
    "id": "tatweer-misr",
    "name": "تطوير مصر (Tatweer Misr)",
    "logoText": "Tatweer",
    "badge": "ريادة الاستثمار والتعليم المتكامل",
    "founded": "2014",
    "experienceYears": "+10 سنوات",
    "deliveredUnits": "+15,000 وحدة",
    "rating": "4.8",
    "coverImage": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    "description": "واحدة من أسرع شركات التطوير العقاري نمواً في مصر، تتميز بمشروعاتها التي تدمج الجانب التعليمي والجامعي الدولي داخل المجتمعات السكنية، مثل بلوم فيلدز وإلمونت جلالة وفوكا باي.",
    "projects": [
      {
        "id": "bloomfields",
        "name": "كمبوند بلوم فيلدز (Bloomfields)",
        "location": "مدينة المستقبل - بين القاهرة الجديدة والعاصمة والعين السخنة",
        "status": "متاح مراحل جديدة واستلام قريب",
        "deliveryYear": "2025 - 2026",
        "type": "شقق عصرية، دوبلكس، وتاون هاوس",
        "startPrice": 3600000,
        "downPayment": 180000,
        "downPaymentPercent": "5%",
        "installmentYears": "أقساط تصل حتى 9 سنوات",
        "overview": "أول مدينة تعليمية وسكنية متكاملة في مصر، تضم مجمعاً للجامعات والمدارس الدولية والشركات الناشئة مع وحدات سكنية متطورة.",
        "amenities": [
          "مجمع جامعات دولية ومدارس معتمدة",
          "أول مجمع لريادة الأعمال وحاضنات أعمال",
          "حمامات سباحة فوق الأسطح",
          "مساحات خضراء ومسارات رياضية",
          "مجمع تجاري وسينمات ومطاعم"
        ],
        "images": [
          "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    ]
  }
];

function getAllDevelopers() {
  return DEVELOPERS_DATA;
}

function getDeveloperById(id) {
  if (!id) return null;
  return DEVELOPERS_DATA.find(d => String(d.id).toLowerCase() === String(id).toLowerCase()) || null;
}

function getProjectById(developerId, projectId) {
  const dev = getDeveloperById(developerId);
  if (!dev || !dev.projects) return null;
  return dev.projects.find(p => String(p.id).toLowerCase() === String(projectId).toLowerCase()) || null;
}

if (typeof window !== 'undefined') {
  window.DEVELOPERS_DATA = DEVELOPERS_DATA;
  window.getAllDevelopers = getAllDevelopers;
  window.getDeveloperById = getDeveloperById;
  window.getProjectById = getProjectById;
}
