# JS Submissions

Submission **Evaluasi Pembelajaran Akhir** kelas Belajar Dasar Pemrograman JavaScript (Dicoding).

Semua tugas ada di folder `final-assessment/`:

| Folder | Status |
| --- | --- |
| `01-writing-comments` | wajib |
| `02-code-style` | wajib |
| `03-writing-test` | wajib |
| `optional-04-oop` | opsional |
| `optional-05-recursive` | opsional |
| `optional-06-full-coverage-testing` | opsional |
| `optional-07-real-world-scenario` | opsional |

## Menjalankan

```bash
cd final-assessment
node 02-code-style/index.js
(cd 03-writing-test && node --test)
(cd optional-04-oop && node main.js)
(cd optional-05-recursive && node main.js)
(cd optional-06-full-coverage-testing && node --test --experimental-test-coverage)
(cd optional-07-real-world-scenario && node main.js)
```

## Membuat ZIP submission

Dicoding meminta ZIP dari folder `final-assessment` saja, tanpa `.git`, `.DS_Store`, atau `__MACOSX`:

```bash
zip -r final-assessment.zip final-assessment -x '*.DS_Store' -x '__MACOSX/*'
```
