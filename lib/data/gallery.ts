export interface GalleryImage {
    src: string;
    alt: string;
    category: string;
}

const R2_BASE = "https://pub-ca9ca721368949e4a4793e9cf426e44e.r2.dev/gallery";

const generateImages = (folder: string, prefix: string, count: number, category: string, altBase: string) => {
    return Array.from({ length: count }, (_, i) => ({
        src: `${R2_BASE}/${folder}/${prefix}-${String(i + 1).padStart(3, "0")}.jpg`,
        alt: `${altBase} ${i + 1}`,
        category: category,
    }));
};

// Counts based on local files
export const galleryImages: { [key: string]: GalleryImage[] } = {
    pletove: generateImages("01_Pletove_Osetrenia", "pletove-osetrenie-shine", 24, "Pleťové ošetrenia", "Pleťové ošetrenie Liptov"),
    permanent: generateImages("02_Permanentny_Makeup", "permanentny-makeup-liptov", 9, "Permanentný make-up", "Permanentný make-up obočie a pery"),
    mihalnice: generateImages("03_Mihalnice_Obocie", "mihalnice-obocie-shine", 26, "Mihalnice a Obočie", "Laminácia a úprava obočia/mihalníc"),
    priestory: generateImages("04_Atmosfera_Priestory", "salon-krasy-shine-interier", 5, "Priestory", "Interiér salónu SHINE"),
    skolenie: generateImages("05_Skolenie", "skolenie-kozmetika-katarina-dzurikova", 11, "Školenia", "Kozmetické školenie"),
    katarina: generateImages("06_Katarina", "katarina-dzurikova-kozmeticka", 9, "O mne", "Katarína Dzuriková"),
    ostatne: generateImages("07_Ostatne", "shine-studio-ine", 23, "Ostatné", "SHINE Štúdio momentky"),
};

export const allImages: GalleryImage[] = [
    ...galleryImages.pletove,
    ...galleryImages.permanent,
    ...galleryImages.mihalnice,
    ...galleryImages.katarina,
    ...galleryImages.priestory,
    ...galleryImages.skolenie,
    ...galleryImages.ostatne,
];
