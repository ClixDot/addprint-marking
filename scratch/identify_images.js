import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function checkImage(filename) {
  const imgPath = path.join(__dirname, '../public/images', filename);
  const stats = await sharp(imgPath).stats();
  console.log(filename, 'Mean RGB:', stats.channels.slice(0, 3).map(c => Math.round(c.mean)));
}

async function run() {
  await checkImage('acc_temp1.png');
  await checkImage('acc_temp2.png');
  await checkImage('acc_temp3.png');
}

run();
