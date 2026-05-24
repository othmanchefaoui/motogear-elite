// Données structurées pour MotoGear Elite

export const CATEGORIES = [
  { id: 'all', name: 'Tous les produits' },
  { id: 'casques', name: 'Casques' },
  { id: 'vestes', name: 'Vestes' },
  { id: 'gants', name: 'Gants' },
  { id: 'bottes', name: 'Bottes' },
  { id: 'accessoires', name: 'Accessoires' }
];

export const PRODUCTS = [
  {
    id: 'shoei-gt-air-ii',
    name: 'GT-Air II Panorama',
    brand: 'SHOEI',
    category: 'casques',
    type: 'Intégral touring · CE2',
    price: 5890,
    originalPrice: 7200,
    badge: 'BESTSELLER',
    stock: 'ok', // 'ok' = En stock, 'low' = Stock faible, 'out' = Rupture
    stockLabel: 'En stock · 24h',
    description: 'Le casque intégral de tourisme sportif par excellence avec écran solaire intégré et insonorisation de premier ordre. Conçu pour le motard exigeant à la recherche de confort aérodynamique, de silence et de sécurité maximale.',
    image: '/src/assets/helmet_shoei_gtair2.png',
    rating: 4.8,
    ref: 'SH-GTA2-PAN',
    specs: [
      { label: 'Type de calotte', value: 'AIM (fibres organiques et multi-composites)' },
      { label: 'Calotin', value: 'EPS double densité à absorption optimisée' },
      { label: 'Fermeture', value: 'Boucle micrométrique en acier inoxydable' },
      { label: 'Écran solaire', value: 'QSV-2 intégré (+5mm par rapport au GT-Air original)' },
      { label: 'Poids', value: '1450g (+/- 50g)' },
      { label: 'Homologation', value: 'ECE 22.05 (CE2)' }
    ],
    reviews: [
      {
        id: 1,
        author: 'Youssef K.',
        rating: 5,
        date: '12 Avril 2026',
        comment: 'Le meilleur casque de tourisme sportif que j\'ai possédé. Très silencieux sur autoroute et l\'écran solaire est parfaitement intégré et facile d\'utilisation.'
      },
      {
        id: 2,
        author: 'Amine M.',
        rating: 4.5,
        date: '01 Mai 2026',
        comment: 'Excellent aérodynamisme. On sent bien l\'ingénierie Shoei. Les aérations sont hyper efficaces, même sous le soleil de Marrakech !'
      }
    ]
  },
  {
    id: 'alpinestars-t-gp-plus',
    name: 'T-GP Plus R V3',
    brand: 'Alpinestars',
    category: 'vestes',
    type: 'Veste textile sport · CE1',
    price: 2890,
    originalPrice: 3400,
    badge: 'NOUVEAUTÉ',
    stock: 'ok',
    stockLabel: 'En stock · 24h',
    description: 'Veste textile de sport polyvalente et très résistante à l\'abrasion. Elle intègre des protections Nucleon Flex Plus certifiées CE sur les épaules et les coudes, alliées à des sliders externes pour une sécurité sportive absolue.',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=600&auto=format&fit=crop',
    rating: 4.6,
    ref: 'AP-TGP3-B',
    specs: [
      { label: 'Matière externe', value: 'Polyester 600D haute ténacité avec double revêtement PU' },
      { label: 'Protections', value: 'Coudes et épaules amovibles Nucleon Flex Plus (CE Niveau 1)' },
      { label: 'Doublure', value: 'Thermique amovible pour s\'adapter aux saisons' },
      { label: 'Ajustements', value: 'Taille et poignets par velcros de haute qualité' },
      { label: 'Visibilité', value: 'Détails réfléchissants pour une conduite nocturne sécurisée' }
    ],
    reviews: [
      {
        id: 1,
        author: 'Karim H.',
        rating: 5,
        date: '22 Mars 2026',
        comment: 'Superbe veste, coupe très sportive et près du corps. Les protections Nucleon Flex sont incroyablement souples. Très agréable à porter.'
      }
    ]
  },
  {
    id: 'dainese-carbon-3',
    name: 'Carbon 3 Long',
    brand: 'Dainese',
    category: 'gants',
    type: 'Gants racing cuir · CE',
    price: 1750,
    originalPrice: 1990,
    badge: 'PROMO',
    stock: 'low',
    stockLabel: 'Stock faible',
    description: 'Gants de course en cuir de chèvre offrant une sensibilité et un niveau de protection haut de gamme. Ils disposent d\'un insert en fibre de carbone sur les articulations et du système breveté DCP sur l\'auriculaire pour prévenir la distorsion.',
    image: 'https://images.unsplash.com/photo-1516246824905-2b4742a03cf8?q=80&w=600&auto=format&fit=crop',
    rating: 4.9,
    ref: 'DA-CARB3-L',
    specs: [
      { label: 'Matière', value: 'Cuir de chèvre de qualité supérieure ultra-souple' },
      { label: 'Protections phalanges', value: 'Coque ergonomique en fibre de carbone injecté' },
      { label: 'Sécurité auriculaire', value: 'Système DCP (Distortion Control) exclusif Dainese' },
      { label: 'Paume', value: 'Renforcée en cuir de chèvre et daim synthétique' },
      { label: 'Homologation', value: 'CE - Cat. II - Pr-EN 13594 Standard lev. 1' }
    ],
    reviews: [
      {
        id: 1,
        author: 'Adnane B.',
        rating: 5,
        date: '10 Mai 2026',
        comment: 'Gants racing incroyables. Le feeling des commandes est parfait et la protection en carbone rassure énormément. Je recommande sans hésiter.'
      }
    ]
  },
  {
    id: 'revit-discovery-h2o',
    name: 'Discovery H2O',
    brand: 'REV\'IT!',
    category: 'bottes',
    type: 'Bottes adventure · CE',
    price: 3200,
    originalPrice: 3800,
    badge: 'TOURING',
    stock: 'ok',
    stockLabel: 'En stock',
    description: 'Les bottes d\'aventure Discovery H2O offrent la stabilité et la sécurité d\'une botte tout-terrain, alliées au confort, à l\'étanchéité et à la respirabilité exceptionnels d\'une chaussure de randonnée haut de gamme.',
    image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=600&auto=format&fit=crop',
    rating: 4.7,
    ref: 'RV-DISC-H2O',
    specs: [
      { label: 'Imperméabilité', value: 'Membrane Hydratex|Sphere laminée 100% étanche' },
      { label: 'Fermeture', value: 'Boa® Fit System pour un ajustement rapide et millimétré' },
      { label: 'Semelle externe', value: 'Vibram® Apex développée pour l\'aventure moto' },
      { label: 'Protection', value: 'Coque de cheville, talon et pointe injectée à haute résistance' }
    ],
    reviews: [
      {
        id: 1,
        author: 'Mehdi S.',
        rating: 4.5,
        date: '05 Avril 2026',
        comment: 'Le système BOA est un vrai régal à utiliser. Les bottes sont hyper étanches, j\'ai roulé sous l\'orage pendant des heures, les pieds sont restés au sec.'
      }
    ]
  },
  {
    id: 'cardo-packtalk-edge',
    name: 'Packtalk Edge',
    brand: 'Cardo',
    category: 'accessoires',
    type: 'Intercom haut de gamme',
    price: 4100,
    originalPrice: 4500,
    badge: 'HIGH-TECH',
    stock: 'ok',
    stockLabel: 'En stock · 24h',
    description: 'Le nec plus ultra des intercoms pour motards. Doté de la technologie DMC de 2e génération, d\'un son JBL de 40mm d\'exception, et de la fixation magnétique Air Mount brevetée, il offre une imperméabilité et une commande vocale naturelles uniques.',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop',
    rating: 4.9,
    ref: 'CD-PT-EDGE',
    specs: [
      { label: 'Technologie de réseau', value: 'Dynamic Mesh Communication (DMC) de 2e génération' },
      { label: 'Portée de transmission', value: 'Jusqu\'à 1.6 km de moto à moto (8 km en groupe)' },
      { label: 'Qualité audio', value: 'Écouteurs JBL 40mm puissants avec profils sonores exclusifs' },
      { label: 'Autonomie batterie', value: '13 heures d\'autonomie avec charge rapide en USB-C' },
      { label: 'Fixation sur casque', value: 'Support magnétique Air Mount auto-alignant ultra-robuste' }
    ],
    reviews: [
      {
        id: 1,
        author: 'Sofia L.',
        rating: 5,
        date: '14 Mai 2026',
        comment: 'La fixation magnétique change la vie ! Le son JBL est incroyablement clair, même à 120 km/h avec les bruits de vent. Le réseau maillé se reconnecte tout seul.'
      }
    ]
  }
];

export const MOCK_REASSURANCES = [
  { icon: '🚚', title: 'Livraison gratuite dès 100 DH', desc: 'Livré chez vous rapidement' },
  { icon: '↩', title: 'Retour sous 30 jours', desc: 'Satisfait ou remboursé sous conditions' },
  { icon: '🔒', title: 'Paiement 100% sécurisé SSL', desc: 'Transactions cryptées et protégées' },
  { icon: '📞', title: 'Support motard expert', desc: 'Une équipe de motards à votre écoute' }
];
