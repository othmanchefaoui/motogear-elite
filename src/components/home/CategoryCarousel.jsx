import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
    {
        name: 'CASQUES',
        // Utilisation d'une image de casque Freepik
        image: 'https://img.freepik.com/photos-gratuite/fond-casque-moto-course-rendu-hd_1409-4939.jpg?w=600',
        path: '/catalog?category=casques'
    },
    {
        name: 'VESTES',
        // Utilisation d'une image de veste de ton catalogue
        image: 'https://esprit-motard.fr/wp-content/uploads/2025/02/featured-test-de-la-veste-moto-dainese-racing-4-en-cuir-968x1024.jpg',
        path: '/catalog?category=vestes'
    },
    {
        name: 'GANTS',
        // Utilisation d'une image de gants de ton catalogue
        image: 'https://www.classicride.fr/cache/images/product/gants-helstons-sport-ete-cuir-gold-jaune-or-moto-coque-carbone-homme-34926.jpg',
        path: '/catalog?category=gants'
    },
    {
        name: 'BOTTES',
        // Utilisation d'une image de bottes Freepik/Unsplash
        image: 'https://i.ebayimg.com/images/g/Px0AAOSwAkZoK~Xu/s-l600.jpg',
        path: '/catalog?category=bottes'
    },
    {
        name: 'ACCESSOIRES',
        // Utilisation d'une image d'accessoire Freepik/Unsplash
        image: 'https://medias.la-becanerie.com/cache/images_articles/3840_2160/sacoches-laterales-x-plor-waterproof-15l-421502.jpg',
        path: '/catalog?category=accessoires'
    }
];

export default function CategoryCarousel() {
    const carouselRef = useRef(null);

    const scroll = (direction) => {
        if (carouselRef.current) {
            const { scrollLeft, clientWidth } = carouselRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            carouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Titre de section */}
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-4xl font-premium uppercase tracking-wider text-black">
                        Parcourir par <span className="text-gold">catégorie</span>
                    </h2>
                    <div className="flex gap-2">
                        <button onClick={() => scroll('left')} className="p-2.5 rounded-full border border-gray-300 text-black hover:bg-gold hover:border-gold hover:text-black transition-all">
                            <ChevronLeft size={20} />
                        </button>
                        <button onClick={() => scroll('right')} className="p-2.5 rounded-full border border-gray-300 text-black hover:bg-gold hover:border-gold hover:text-black transition-all">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Carrousel */}
                <div
                    ref={carouselRef}
                    className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {categories.map((category) => (
                        <Link
                            key={category.name}
                            to={category.path}
                            className="flex-none w-[280px] h-[350px] relative rounded-sm overflow-hidden group snap-start shadow-xl"
                        >
                            <img
                                src={category.image}
                                alt={category.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-300" />

                            <div className="absolute bottom-0 left-0 right-0 p-6 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-3xl font-premium uppercase tracking-widest text-white mb-2 group-hover:text-gold transition-colors">
                                    {category.name}
                                </h3>
                                <span className="inline-block text-xs font-barlow font-bold uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Voir les produits
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
}