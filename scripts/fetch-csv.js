import fs from 'fs';
import fetch from 'node-fetch';

const url =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSJNhppmQv3qIXUxg5m4OEVHPf2O_ubdw9H4pB1Gdw_7azEqiz6LMrq651CFA-nScB1Z7jGUL1gT8OQ/pub?output=csv';

async function fetchExpenseCsv() {
    const res = await fetch(url);
    if (!res.ok) throw new Error('读取文件失败');

    const text = await res.text();

    fs.writeFileSync('/public/data.csv', text);
}

fetchExpenseCsv();
