// Tento script vytvorí placeholder obrázky pre galériu
// Spustite: node scripts/setup-placeholders.js

const https = require('https');
const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '..', 'public', 'images', 'gallery');

// Vytvorenie priečinka ak neexistuje
if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

// Placeholder obrázky z Unsplash (dočasné, kým sa nenahrajú skutočné fotky)
const placeholders = {
  'client-relaxing-1.jpg': 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200',
  'laser-treatment-1.jpg': 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200',
  'lip-treatment-1.jpg': 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1200',
  'clinic-interior-1.jpg': 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200',
  'laser-treatment-2.jpg': 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200',
  'katarina-tools.jpg': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200',
  'lip-treatment-2.jpg': 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1200',
  'certificates.jpg': 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200',
  'client-relaxing-2.jpg': 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=1200',
  'facial-treatment.jpg': 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1200',
  'katarina-portrait.jpg': 'https://images.unsplash.com/photo-1524946461678-c0cce4ac8053?q=80&w=1200',
  'clinic-interior-2.jpg': 'https://images.unsplash.com/photo-1629909615284-b2783e62157d?q=80&w=1200',
};

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    // Kontrola či súbor už existuje
    if (fs.existsSync(filepath)) {
      console.log(`✓ ${path.basename(filepath)} už existuje, preskakujem...`);
      resolve();
      return;
    }

    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✓ Stiahnutý: ${path.basename(filepath)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      console.error(`✗ Chyba pri sťahovaní ${path.basename(filepath)}:`, err.message);
      reject(err);
    });
  });
}

async function setupPlaceholders() {
  console.log('🖼️  Nastavujem placeholder obrázky pre galériu...\n');
  
  const downloads = Object.entries(placeholders).map(([filename, url]) => {
    const filepath = path.join(galleryDir, filename);
    return downloadImage(url, filepath);
  });

  try {
    await Promise.all(downloads);
    console.log('\n✨ Hotovo! Placeholder obrázky sú pripravené.');
    console.log('💡 Tip: Nahraďte tieto obrázky vlastnými fotografiami v priečinku:');
    console.log(`   ${galleryDir}`);
  } catch (error) {
    console.error('\n❌ Niektoré obrázky sa nepodarilo stiahnuť.');
  }
}

setupPlaceholders();

