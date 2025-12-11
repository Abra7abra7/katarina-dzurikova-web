export interface Service {
    id: number;
    title: string;
    subtitle: string;
    duration: string;
    price: string;
    description: string;
    image: string;
    imagePosition?: string;
}

export const services: Service[] = [
    {
        id: 1,
        title: "Pleťové ošetrenia",
        subtitle: "Hydratácia, lifting a regenerácia",
        duration: "od 1 h",
        price: "od 30 €",
        description:
            "Široká škála pleťových ošetrení - od hydratačných cez liftingové až po čistiace. Každé ošetrenie prispôsobené vašej pleti.",
        image: "https://pub-ca9ca721368949e4a4793e9cf426e44e.r2.dev/gallery/01_Pletove_Osetrenia/pletove-osetrenie-shine-003.jpg",
    },
    {
        id: 2,
        title: "Permanentný make-up",
        subtitle: "Tetovanie pier a obočia",
        duration: "od 2 h",
        price: "od 30 €",
        description:
            "Perfect lips a púdrové obočie s profesionálnym prístupom. Prirodzený výsledok, ktorý vydrží roky.",
        image: "https://pub-ca9ca721368949e4a4793e9cf426e44e.r2.dev/gallery/02_Permanentny_Makeup/permanentny-makeup-liptov-006.jpg",
    },
    {
        id: 3,
        title: "Mihalnice",
        subtitle: "5D predĺženie a styling",
        duration: "od 30 min",
        price: "od 10 €",
        description:
            "Profesionálne predĺženie mihalníc 5D technikou pre dokonalý a prirodzený vzhľad vašich očí.",
        image: "https://pub-ca9ca721368949e4a4793e9cf426e44e.r2.dev/gallery/03_Mihalnice_Obocie/mihalnice-obocie-shine-003.jpg",
    },
    {
        id: 4,
        title: "Vizáž",
        subtitle: "Úprava a farbenie obočia",
        duration: "od 15 min",
        price: "od 5 €",
        description:
            "Kompletné služby pre dokonalý vzhľad - úprava obočia, farbenie mihalníc, laminácia a mapping obočia podľa proporcií tváre.",
        image: "https://pub-ca9ca721368949e4a4793e9cf426e44e.r2.dev/gallery/03_Mihalnice_Obocie/mihalnice-obocie-shine-022.jpg",
        imagePosition: "top",
    },
    {
        id: 5,
        title: "Doplnkové služby",
        subtitle: "Masáže a wellness procedúry",
        duration: "od 1 min",
        price: "od 2 €",
        description:
            "Masáž tváre, parafínový zábal rúk a ďalšie relaxačné procedúry pre kompletný zážitok starostlivosti.",
        image: "https://pub-ca9ca721368949e4a4793e9cf426e44e.r2.dev/gallery/04_Atmosfera_Priestory/salon-krasy-shine-interier-002.jpg",
        imagePosition: "top",
    },
];
