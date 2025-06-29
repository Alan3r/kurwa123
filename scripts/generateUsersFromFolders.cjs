// Skrypt do automatycznego dopisywania nowych profili IG do users.ts (CommonJS)
// Uruchom: npm run generate-users
// UWAGA: Zmień w package.json:
// "generate-users": "node scripts/generateUsersFromFolders.cjs"
// (nie .js!)

const fs = require('fs');
const path = require('path');

const USERS_PATH = path.join(__dirname, '../src/data/users.ts');
const PROFILEIG_PATH = path.join(__dirname, '../public/img/profileig');

function getFolders(dir) {
  return fs.readdirSync(dir).filter(f => fs.statSync(path.join(dir, f)).isDirectory());
}

function getFirstImage(folderPath) {
  const files = fs.readdirSync(folderPath).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
  return files.length > 0 ? files[0] : null;
}

function parseUsers(content) {
  const match = content.match(/\[([\s\S]*)\]/);
  if (!match) return [];
  const arr = eval('[' + match[1] + ']');
  return arr;
}

function main() {
  const usersContent = fs.readFileSync(USERS_PATH, 'utf8');
  const usersArr = parseUsers(usersContent);
  const folders = getFolders(PROFILEIG_PATH);
  let maxId = usersArr.reduce((max, u) => Math.max(max, u.id), 0);
  let added = 0;

  folders.forEach(folder => {
    const already = usersArr.find(u => u.name.replace(/\s+/g, '-').toLowerCase() === folder.replace(/\s+/g, '-').toLowerCase());
    if (already) return;
    const firstImg = getFirstImage(path.join(PROFILEIG_PATH, folder));
    usersArr.push({
      id: ++maxId,
      name: folder,
      age: 22,
      image: firstImg ? `/img/profileig/${folder}/${firstImg}` : '',
      description: 'Nowy profil IG.',
      location: 'Instagram',
      interests: ['Instagram'],
      isOnline: false
    });
    added++;
  });

  // Uzupełnij domyślne opisy i pasje dla profili IG
  usersArr.forEach(u => {
    if (u.location === 'Instagram') {
      if (!u.description || u.description === 'Nowy profil IG.') {
        u.description = 'Cześć! Jestem ' + u.name + ' i zapraszam na mój profil IG. Lubię poznawać nowych ludzi i dzielić się swoją pasją!';
      }
      if (!u.interests || u.interests.length < 2 || (u.interests.length === 1 && u.interests[0] === 'Instagram')) {
        u.interests = [
          'Podróże',
          'Muzyka',
          'Sport',
          'Fotografia',
          'Moda',
          'Książki',
          'Kawa',
          'Przyjaciele'
        ].sort(() => 0.5 - Math.random()).slice(0, 3);
      }
    }
  });

  // Zapisz nową tablicę do users.ts
  const newContent = 'export const users = ' + JSON.stringify(usersArr, null, 2) + ';\n';
  fs.writeFileSync(USERS_PATH, newContent, 'utf8');
  console.log(`Dodano ${added} nowych profili.`);
}

main();
