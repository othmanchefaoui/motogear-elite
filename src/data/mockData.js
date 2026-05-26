// Données structurées pour MotoGear

export const CATEGORIES = [
  { id: 'all', name: 'Tous les produits' },
  { id: 'casques', name: 'Casques' },
  { id: 'vestes', name: 'Vestes' },
  { id: 'gants', name: 'Gants' },
  { id: 'bottes', name: 'Bottes' },
  { id: 'accessoires', name: 'Accessoires' }
];

export const PRODUCTS = [
  // ==================== CASQUES ====================
  {
    id: 'casque-agv-pista',
    name: 'Pista GP RR Carbon',
    brand: 'AGV',
    category: 'casques',
    type: 'Intégral Racing · ECE 22.06',
    price: 13500,
    originalPrice: 15000,
    badge: 'PREMIUM',
    stock: 'ok',
    stockLabel: 'En stock · 24h',
    description: 'Le casque ultime de compétition développé pour le MotoGP. Coque 100% fibre de carbone, aérodynamisme poussé à l\'extrême en soufflerie et système d\'hydratation intégré pour des performances sans compromis.',
    image: 'https://img.freepik.com/photos-gratuite/fond-casque-moto-course-rendu-hd_1409-4939.jpg?w=1060&t=st=1696438122~exp=1696438722~hmac=c5b174cf39ae847fcd41585fe1f7be446496f1cc874af8690314c7c770292931',
    rating: 4.9,
    ref: 'AGV-PIST-GP',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    ceNorm: 'CE2',
    season: 'Toutes Saisons',
    specs: [
      { label: 'Matériau', value: '100% fibre de carbone haute résistance' },
      { label: 'Ventilation', value: 'Extracteurs aérodynamiques en métal Pro' },
      { label: 'Fermeture', value: 'Boucle double D en titane léger' },
      { label: 'Écran', value: 'Classe optique 1 avec Pinlock MaxVision 120' },
      { label: 'Poids', value: '1450g sur la première taille de calotte' }
    ],
    reviews: [
      { id: 1, author: 'Mehdi T.', rating: 5, date: '12 Janvier 2026', comment: 'Un chef-d\'œuvre absolu. Le champ de vision est incroyable sur circuit.' }
    ]
  },
  {
    id: 'casque-shoei-x-spr',
    name: 'X-SPR Pro Neo-Sport',
    brand: 'SHOEI',
    category: 'casques',
    type: 'Intégral Racing · FIM',
    price: 8900,
    originalPrice: 9800,
    badge: 'BESTSELLER',
    stock: 'ok',
    stockLabel: 'En stock · 24h',
    description: 'Le choix des champions du monde. Offre un ajustement parfait grâce à sa calotte modulable et une stabilité aérodynamique exceptionnelle même à plus de 300 km/h.',
    image: 'https://img.freepik.com/photos-gratuite/casque-moto-course-rendu-hd_1409-4940.jpg?w=1800&t=st=1696438122~exp=1696438722~hmac=9668c08d0ccbcfa069eca1c00821111b15dc67cc9a37c4a44b3e79b935530cde',
    rating: 4.8,
    ref: 'SH-XSPR-NEO',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    ceNorm: 'CE2',
    season: 'Toutes Saisons',
    specs: [
      { label: 'Structure', value: 'Fibres de verre et résines organiques AIM+' },
      { label: 'Intérieur', value: 'Mousses ajustables et entièrement lavables' },
      { label: 'Sécurité', value: 'Système d\'extraction d\'urgence E.Q.R.S.' },
      { label: 'Homologation', value: 'Certifié FIM Racing et ECE 22.06' }
    ],
    reviews: [
      { id: 1, author: 'Youssef B.', rating: 5, date: '28 Février 2026', comment: 'L\'insonorisation est folle pour un casque purement racing.' }
    ]
  },
  {
    id: 'casque-ilm-vintage',
    name: 'ILM 726X Vintage Cross',
    brand: 'ILM',
    category: 'casques',
    type: 'Rétro Cross / Enduro',
    price: 2450,
    originalPrice: 2900,
    badge: 'VINTAGE',
    stock: 'ok',
    stockLabel: 'En stock',
    description: 'Un look rétro inimitable allié au confort moderne. Idéal pour les possesseurs de Scrambler, Custom ou motos vintage à la recherche d\'un style affirmé en toute sécurité.',
    image: 'https://esprit-motard.fr/wp-content/uploads/2025/09/featured-test-casque-moto-cross-ilm-726x-vintage-retro-1024x1019.jpg',
    rating: 4.5,
    ref: 'ILM-726X-VIN',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    ceNorm: 'CE1',
    season: 'Mi-Saison',
    specs: [
      { label: 'Style', value: 'Nostalgic Off-Road / Scrambler' },
      { label: 'Visière', value: 'Casquette amovible 3 pressions incluse' },
      { label: 'Intérieur', value: 'Tissu hypoallergénique bordé de simili cuir' },
      { label: 'Fermeture', value: 'Boucle micrométrique rapide' }
    ],
    reviews: [
      { id: 1, author: 'Karim A.', rating: 4, date: '05 Mars 2026', comment: 'Look parfait avec mon Scrambler. Confortable et bien ventilé.' }
    ]
  },
  {
    id: 'casque-schuberth-c5',
    name: 'C5 Carbon Modulable',
    brand: 'Schuberth',
    category: 'casques',
    type: 'Modulable GT · P/J',
    price: 7600,
    originalPrice: 8500,
    badge: 'TOURING',
    stock: 'low',
    stockLabel: 'Stock faible',
    description: 'La référence mondiale des casques modulables de grand tourisme. Double homologation jet et intégral, isolation acoustique légendaire et pré-équipé pour le système de communication Mesh.',
    image: 'https://www.d-sarron.com/wp-content/uploads/2024/07/1720568682_choix-du-casque-moto-confort-et-adaptation-selon-le-type-jet-integral-ou-modulable.jpg',
    rating: 4.7,
    ref: 'SC-C5-MOD',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    ceNorm: 'CE2',
    season: 'Toutes Saisons',
    specs: [
      { label: 'Type', value: 'Modulable à mentonnière pivotante' },
      { label: 'Acoustique', value: 'Seulement 85 dB(A) à 100 km/h sur moto naked' },
      { label: 'Écran', value: 'Solaire interne rétractable traité anti-buée' },
      { label: 'Homologation', value: 'ECE 22.06 P/J (Jet et Intégral)' }
    ],
    reviews: [
      { id: 1, author: 'Anas M.', rating: 5, date: '19 Avril 2026', comment: 'Le roi de la route. Parfait pour les longs trajets Casa-Agadir.' }
    ]
  },
  {
    id: 'casque-scorpion-exo',
    name: 'Exo-1400 Air Evo',
    brand: 'Scorpion',
    category: 'casques',
    type: 'Intégral Sport-GT',
    price: 3900,
    originalPrice: 4400,
    badge: 'PROMO',
    stock: 'ok',
    stockLabel: 'En stock',
    description: 'Casque en fibre de carbone équipé du système de gonflage des mousses Airfit pour un maintien sur mesure évitant les mouvements à haute vitesse.',
    image: 'https://www.motodesinfo.fr/wp-content/uploads/2024/03/quelle-marque-de-casque-moto-choisir-jpg.webp',
    rating: 4.6,
    ref: 'SC-1400-EVO',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    ceNorm: 'CE2',
    season: 'Toutes Saisons',
    specs: [
      { label: 'Calotte', value: 'Fibre de carbone Ultra TCT légère' },
      { label: 'Système exclusif', value: 'Airfit Concept (pompe de gonflage des joues)' },
      { label: 'Lentille anti-buée', value: 'Pinlock MaxVision inclus d\'origine' }
    ],
    reviews: [
      { id: 1, author: 'Omar F.', rating: 4.5, date: '02 Mai 2026', comment: 'Le système de gonflage est génial pour ajuster le casque au fil du temps.' }
    ]
  },

  // ==================== VESTES ====================
  {
    id: 'veste-mr-biker-cuir',
    name: 'Veste Cuir Classic Biker',
    brand: 'Mr-Biker',
    category: 'vestes',
    type: 'Blouson cuir · Style Custom',
    price: 3400,
    originalPrice: 4200,
    badge: 'PROMO',
    stock: 'ok',
    stockLabel: 'En stock',
    description: 'Un magnifique blouson en cuir de vachette épais au look vintage affirmé. Conçu pour résister à l\'abrasion tout en offrant une coupe élégante, urbaine et décontractée.',
    image: 'https://mr-biker.fr/cdn/shop/products/mr-biker-veste-en-cuir-motard-4xl-28180334969027.jpg?v=1616777909',
    rating: 4.6,
    ref: 'MB-CUIR-CLS',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    ceNorm: 'CE1',
    season: 'Mi-Saison',
    specs: [
      { label: 'Matière', value: 'Cuir de vachette pleine fleur 1.3mm' },
      { label: 'Protections', value: 'Coques amovibles CE épaules et coudes' },
      { label: 'Poches', value: '4 poches externes zippées et 2 internes' }
    ],
    reviews: [
      { id: 1, author: 'Hamza K.', rating: 5, date: '10 Mars 2026', comment: 'Le cuir est super lourd et de très bonne facture. Style rétro parfait.' }
    ]
  },
  {
    id: 'veste-alpinestars-bionic',
    name: 'Gilet de Protection Bionic',
    brand: 'Alpinestars',
    category: 'vestes',
    type: 'Armure de protection Enduro / Cross',
    price: 2950,
    originalPrice: 3500,
    badge: 'NOUVEAUTÉ',
    stock: 'ok',
    stockLabel: 'En stock · 24h',
    description: 'Technologie de protection intégrale ultra-ventilée pour le cross et l\'enduro. Elle combine des protections de niveau 2 sur le torse et le dos pour une sécurité maximale en tout-terrain.',
    image: 'https://i.pinimg.com/originals/77/91/57/77915745acfa11759df51f9763c1106e.jpg',
    rating: 4.8,
    ref: 'AP-BION-V2',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    ceNorm: 'CE2',
    season: 'Toutes Saisons',
    specs: [
      { label: 'Dorsale', value: 'Technologie Cell certifiée CE Niveau 2' },
      { label: 'Plastron', value: 'Protection pectorale rigide CE Niveau 2' },
      { label: 'Confort', value: 'Châssis en mesh extensible hautement respirant' }
    ],
    reviews: [
      { id: 1, author: 'Adnane J.', rating: 5, date: '21 Avril 2026', comment: 'Idéal pour mes sorties enduro le week-end. Léger et hyper protecteur.' }
    ]
  },
  {
    id: 'veste-dainese-racing4',
    name: 'Racing 4 Perfore Leather',
    brand: 'Dainese',
    category: 'vestes',
    type: 'Blouson Cuir Sport · CE',
    price: 5900,
    originalPrice: 6800,
    badge: 'TOP VENTES',
    stock: 'ok',
    stockLabel: 'En stock · 24h',
    description: 'Le blouson de sport iconique de chez Dainese. Fabriqué en cuir de vachette de première qualité avec inserts en tissu extensible et plaques d\'aluminium amovibles sur les épaules.',
    image: 'https://esprit-motard.fr/wp-content/uploads/2025/02/featured-test-de-la-veste-moto-dainese-racing-4-en-cuir-968x1024.jpg',
    rating: 4.9,
    ref: 'DA-RACE4-PERF',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    ceNorm: 'CE2',
    season: 'Été',
    specs: [
      { label: 'Cuir', value: 'Cuir de vachette Tutu premium' },
      { label: 'Épaules', value: 'Inserts thermoformés avec plaques d\'aluminium' },
      { label: 'Ventilation', value: 'Zones perforées localisées pour l\'été' }
    ],
    reviews: [
      { id: 1, author: 'Amine R.', rating: 5, date: '04 Mai 2026', comment: 'Coupe près du corps magnifique. On se sent en totale sécurité.' }
    ]
  },
  {
    id: 'veste-ixon-vortex',
    name: 'Vortex 3 Sport Jacket',
    brand: 'Ixon',
    category: 'vestes',
    type: 'Blouson Cuir Racing',
    price: 4700,
    originalPrice: 5300,
    badge: 'RACING',
    stock: 'low',
    stockLabel: 'Derniers articles',
    description: 'Directement issu du développement en MotoGP. Ce blouson racing offre une liberté de mouvement exceptionnelle grâce à ses panneaux de stretch et intègre une bosse aérodynamique.',
    image: 'https://www.fc-moto.de/WebRoot/FCMotoDB/Shops/10207048/5AAF/8DF5/FB94/CB9F/9FA9/4DEB/AE6F/32D5/12975b21-4337-4fb6-9009-5da866656de7_ml.jpg',
    rating: 4.7,
    ref: 'IX-VORT3-R',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    ceNorm: 'CE2',
    season: 'Mi-Saison',
    specs: [
      { label: 'Matériau', value: 'Cuir de vachette flex haute résistance' },
      { label: 'Aérodynamisme', value: 'Bosse dorsale profilée MotoGP' },
      { label: 'Sécurité', value: 'Compatible avec les gilets airbag Ixon IX-Airbag' }
    ],
    reviews: [
      { id: 1, author: 'Saad P.', rating: 4.5, date: '11 Mai 2026', comment: 'Parfait pour s\'accorder avec un pantalon de piste. Qualité pro.' }
    ]
  },

  // ==================== BOTTES ====================
  {
    id: 'bottes-tcx-clima',
    name: 'Clima Surround Gore-Tex',
    brand: 'TCX',
    category: 'bottes',
    type: 'Bottes Touring Étanche · CE',
    price: 2800,
    originalPrice: 3400,
    badge: 'INNOVATION',
    stock: 'ok',
    stockLabel: 'En stock',
    description: 'Équipées de la technologie Gore-Tex Surround qui permet une évacuation de la chaleur et de l\'humidité par la semelle tout en garantissant une imperméabilité totale.',
    image: 'https://motard-adventure.com/wp-content/uploads/2019/09/DSCF6955.jpg',
    rating: 4.8,
    ref: 'TCX-CLIM-GTX',
    sizes: ['39', '40', '41', '42', '43', '44', '45', '46'],
    ceNorm: 'CE1',
    season: 'Hiver',
    specs: [
      { label: 'Membrane', value: 'Gore-Tex Extended Comfort respirante et étanche' },
      { label: 'Semelle', value: 'Technologie Gore-Tex Surround avec grille d\'aération' },
      { label: 'Protections', value: 'Malléoles, tibia, talon et sélecteur renforcés' }
    ],
    reviews: [
      { id: 1, author: 'Reda S.', rating: 5, date: '15 Février 2026', comment: 'Pieds totalement au sec même sous des pluies diluviennes. Incroyable.' }
    ]
  },
  {
    id: 'bottes-alpinestars-smx6',
    name: 'SMX-6 V2 Racing Boots',
    brand: 'Alpinestars',
    category: 'bottes',
    type: 'Bottes Sport / Racing · CE',
    price: 3150,
    originalPrice: 3700,
    badge: 'BESTSELLER',
    stock: 'ok',
    stockLabel: 'En stock · 24h',
    description: 'Une botte de course idéale pour la piste et la route. Elle intègre un système d\'articulation bio-mécanique de la cheville pour empêcher les torsions tout en gardant une excellente flexibilité.',
    image: 'https://i.ebayimg.com/images/g/Px0AAOSwAkZoK~Xu/s-l1600.jpg',
    rating: 4.7,
    ref: 'AP-SMX6-V2',
    sizes: ['39', '40', '41', '42', '43', '44', '45', '46'],
    ceNorm: 'CE2',
    season: 'Toutes Saisons',
    specs: [
      { label: 'Tige', value: 'Microfibre de haute technologie résistante' },
      { label: 'Protection latérale', value: 'Système d\'attelle de cheville TPU' },
      { label: 'Sliders', value: 'Sliders de bouts de pieds interchangeables' }
    ],
    reviews: [
      { id: 1, author: 'Yassine N.', rating: 5, date: '02 Mars 2026', comment: 'Maintien parfait de la cheville. Très confortable pour marcher un peu.' }
    ]
  },
  {
    id: 'bottes-dainese-nexus',
    name: 'Nexus 2 Sport Torques',
    brand: 'Dainese',
    category: 'bottes',
    type: 'Bottes Sport articulées',
    price: 3600,
    originalPrice: 4100,
    badge: 'HAUTE PROT',
    stock: 'low',
    stockLabel: 'Stock très limité',
    description: 'Bottes sportives haut de gamme dotées du système anti-torsion exclusif D-Axial en carbone et nylon pour guider la cheville lors des mouvements extrêmes.',
    image: 'https://tse2.mm.bing.net/th/id/OIP.17XPRkKs1X8-CHS6BlqouAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
    rating: 4.9,
    ref: 'DA-NEX2-BLK',
    sizes: ['39', '40', '41', '42', '43', '44', '45', '46'],
    ceNorm: 'CE2',
    season: 'Mi-Saison',
    specs: [
      { label: 'Système de sécurité', value: 'D-Axial anti-torsion de la cheville' },
      { label: 'Matériaux', value: 'Tissu D-Stone et microfibre supérieure' },
      { label: 'Sliders', value: 'Plastique amovible et remplaçable' }
    ],
    reviews: [
      { id: 1, author: 'Zouhair F.', rating: 5, date: '29 Avril 2026', comment: 'Le top de la sécurité. Dainese ne déçoit jamais sur les articulations.' }
    ]
  },

  // ==================== ACCESSOIRES ====================
  {
    id: 'acc-sacoche-xplor',
    name: 'Sacoches Latérales X-Plor 15L',
    brand: 'X-Plor',
    category: 'accessoires',
    type: 'Bagagerie Rigide Étanche',
    price: 1850,
    originalPrice: 2200,
    badge: 'AVENTURE',
    stock: 'ok',
    stockLabel: 'En stock',
    description: 'Sacoches cavalières d\'aventure 100% waterproof. Parfaites pour équiper les trails et motos de voyage lors de vos road-trips à travers le Maroc.',
    image: 'https://medias.la-becanerie.com/cache/images_articles/3840_2160/sacoches-laterales-x-plor-waterproof-15l-421502.jpg',
    rating: 4.6,
    ref: 'XP-SAC-15LW',
    sizes: [],
    ceNorm: 'Non',
    season: 'Toutes Saisons',
    specs: [
      { label: 'Capacité', value: '15 Litres par sacoche (30L au total)' },
      { label: 'Étanchéité', value: 'Fermeture par enroulement étanche IP66' },
      { label: 'Fixation', value: 'Sangles universelles renforcées en nylon' }
    ],
    reviews: [
      { id: 1, author: 'Othman C.', rating: 5, date: '14 Mai 2026', comment: 'Testées dans le désert et sous la boue, aucune infiltration.' }
    ]
  },
  {
    id: 'acc-support-tel',
    name: 'Support Téléphone Étanche Pro',
    brand: 'MotoArmor',
    category: 'accessoires',
    type: 'Support guidon High-Tech',
    price: 490,
    originalPrice: 650,
    badge: 'UTILE',
    stock: 'ok',
    stockLabel: 'En stock',
    description: 'Coque de protection rigide et étanche avec rotule orientable à 360° pour fixer votre smartphone en toute sécurité sur le guidon ou le rétroviseur.',
    image: 'https://m.media-amazon.com/images/I/71ClvNrwFjL._AC_SL1200_.jpg',
    rating: 4.5,
    ref: 'MA-SUP-PHONE',
    sizes: [],
    ceNorm: 'Non',
    season: 'Toutes Saisons',
    specs: [
      { label: 'Compatibilité', value: 'Smartphones jusqu\'à 6.7 pouces' },
      { label: 'Sécurité', value: 'Système de verrouillage magnétique anti-vibrations' },
      { label: 'Fenêtre', value: 'Film tactile transparent haute sensibilité' }
    ],
    reviews: [
      { id: 1, author: 'Tariq A.', rating: 4, date: '18 Mai 2026', comment: 'Le tactile répond super bien même à travers la vitre de protection.' }
    ]
  },
  {
    id: 'acc-support-gopro',
    name: 'Support Rétroviseur GoPro Premium',
    brand: 'Telesin',
    category: 'accessoires',
    type: 'Support Caméra Action',
    price: 320,
    originalPrice: 390,
    badge: 'MOTOVLOG',
    stock: 'ok',
    stockLabel: 'En stock',
    description: 'Fixation métallique ultra-stable conçue pour fixer une caméra GoPro ou DJI Action directement sur l\'axe de votre rétroviseur pour filmer vos plus belles trajectoires.',
    image: 'https://images.tcdn.com.br/img/img_prod/471823/suporte_retrovisor_moto_para_cameras_gopro_e_similares_telesin_3841_2_3a651af7445637f9a4837b453ccad264.jpg',
    rating: 4.7,
    ref: 'TL-SUP-GPRO',
    sizes: [],
    ceNorm: 'Non',
    season: 'Toutes Saisons',
    specs: [
      { label: 'Matériau', value: 'Aluminium de qualité aéronautique anodisé' },
      { label: 'Compatibilité', value: 'GoPro Hero 9/10/11/12 et caméras similaires' },
      { label: 'Ajustement', value: 'Double rotule pour un angle de vue parfait' }
    ],
    reviews: [
      { id: 1, author: 'Ilyas M.', rating: 5, date: '22 Mai 2026', comment: 'Zéro vibration sur l\'image, le métal est super résistant.' }
    ]
  },

  // ==================== GANTS ====================
  {
    id: 'gants-furygan-jet',
    name: 'Jet All Season D3O',
    brand: 'Furygan',
    category: 'gants',
    type: 'Gants mi-saison · CE',
    price: 850,
    originalPrice: 1100,
    badge: 'PRIX BAS',
    stock: 'ok',
    stockLabel: 'En stock',
    description: 'Gants légers et protecteurs intégrant la fameuse technologie intelligente D3O sur les métacarpes, souple au repos et durcissant instantanément à l\'impact.',
    image: 'https://d1kvfoyrif6wzg.cloudfront.net/assets/images/82/main/none_f84acf778b246263b5459a037ede7ea8_f84acf7.JPEG',
    rating: 4.4,
    ref: 'FU-JET-D3O',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    ceNorm: 'CE1',
    season: 'Mi-Saison',
    specs: [
      { label: 'Protection phalanges', value: 'Coques souples ergonomiques en D3O' },
      { label: 'Matière paume', value: '100% cuir de chèvre renforcé' },
      { label: 'Technologie', value: 'Insert Sensitive Science pour écrans tactiles' }
    ],
    reviews: [
      { id: 1, author: 'Walid S.', rating: 4, date: '11 Janvier 2026', comment: 'Très confortables au quotidien pour circuler en ville.' }
    ]
  },
  {
    id: 'gants-alpinestars-sp8',
    name: 'SP-8 V3 Air Gloves',
    brand: 'Alpinestars',
    category: 'gants',
    type: 'Gants sport en cuir · CE',
    price: 1390,
    originalPrice: 1600,
    badge: 'BESTSELLER',
    stock: 'ok',
    stockLabel: 'En stock · 24h',
    description: 'Gants de sport à manchette longue en cuir pleine fleur hautement résistant. Ils disposent d\'un pont de doigt breveté entre l\'annulaire et l\'auriculaire pour éviter la séparation en cas de glissade.',
    image: 'https://tse4.mm.bing.net/th/id/OIP.7cwWBEMIeQvPlmHQdn0HEwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
    rating: 4.8,
    ref: 'AP-SP8-V3',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    ceNorm: 'CE1',
    season: 'Été',
    specs: [
      { label: 'Cuir', value: 'Cuir de chèvre et de vache premium' },
      { label: 'Phalanges', value: 'Coque de protection SP double densité' },
      { label: 'Fermeture', value: 'Double manchette avec large bande velcro' }
    ],
    reviews: [
      { id: 1, author: 'Fouad B.', rating: 5, date: '09 Mars 2026', comment: 'Excellents gants, le grip sur les poignées de la moto est parfait.' }
    ]
  },
  {
    id: 'gants-helstons-sport',
    name: 'Helstons Sport Gold Carbon',
    brand: 'Helstons',
    category: 'gants',
    type: 'Gants Cuir Vintage Sport · CE',
    price: 1150,
    originalPrice: 1350,
    badge: 'VINTAGE',
    stock: 'low',
    stockLabel: 'Stock faible',
    description: 'Un magnifique cuir jaune or patiné de style néo-rétro combiné à une coque de protection en véritable fibre de carbone pour un style Café Racer assumé sans négliger la sécurité.',
    image: 'https://www.classicride.fr/cache/images/product/gants-helstons-sport-ete-cuir-gold-jaune-or-moto-coque-carbone-homme-34926.jpg',
    rating: 4.7,
    ref: 'HE-SPRT-GLD',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    ceNorm: 'CE1',
    season: 'Été',
    specs: [
      { label: 'Couleur / Style', value: 'Cuir Gold vieilli aspect vintage' },
      { label: 'Protection', value: 'Coque externe rigide en véritable Carbone' },
      { label: 'Paume', value: 'Renforcée en fibres d\'aramide DuPont Kevlar' }
    ],
    reviews: [
      { id: 1, author: 'Jalil V.', rating: 5, date: '14 Avril 2026', comment: 'La couleur or est tout simplement magnifique. Protection carbone au top.' }
    ]
  },
  {
    id: 'gants-dainese-carbon4',
    name: 'Carbon 4 Long Racing',
    brand: 'Dainese',
    category: 'gants',
    type: 'Gants de piste cuir · CE',
    price: 1950,
    originalPrice: 2200,
    badge: 'RACING',
    stock: 'ok',
    stockLabel: 'En stock',
    description: 'Gants longs de course offrant un toucher de commande chirurgical. Ils intègrent des inserts en fibre de carbone sur le dos de la main et le système DCP anti-torsion sur le petit doigt.',
    image: 'https://tse1.mm.bing.net/th/id/OIP.88qDsjxz_HS7H9gsQh_DygHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
    rating: 4.9,
    ref: 'DA-CARB4-LNG',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    ceNorm: 'CE2',
    season: 'Mi-Saison',
    specs: [
      { label: 'Matériau', value: 'Cuir de chèvre souple de première qualité' },
      { label: 'Articulations', value: 'Plaque ergonomique composite en fibre de carbone' },
      { label: 'Sécurité auriculaire', value: 'Système breveté Distortion Control (DCP)' }
    ],
    reviews: [
      { id: 1, author: 'Rachid L.', rating: 5, date: '01 Mai 2026', comment: 'Gants de piste exceptionnels. Souples dès la première utilisation.' }
    ]
  }
];

export const MOCK_REASSURANCES = [
  { icon: '🚚', title: 'Livraison express partout au Maroc', desc: 'Livré chez vous rapidement en 24/48h' },
  { icon: '↩', title: 'Échange de taille sous 14 jours', desc: 'Satisfait ou remboursé sous conditions' },
  { icon: '🔒', title: 'Paiement Sécurisé SSL / COD', desc: 'Payez par carte ou en espèces à la livraison' },
  { icon: '📞', title: 'Conseils de motards experts', desc: 'Une équipe de passionnés à votre écoute' }
];