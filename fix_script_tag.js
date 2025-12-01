import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const filePath = 'dist/index.html';

try {
    let data = fs.readFileSync(filePath, 'utf8');
    data = data.replace(
        '</head>',
        '<link rel="stylesheet" href="styles.css"></head>'
    );
    data = data.replace(
        '<script src="../src/dev.ts" type="module"></script>',
        '<script src="diamond_shader.umd.js" type="module"></script>'
    );
    fs.writeFileSync(filePath, data, 'utf8');
    console.log('File updated successfully.');
} catch (err) {
    console.error('Error:', err);
}
