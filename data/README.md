## Students' groups / مجموعات الطلاب (`data/groups.json`)

The app reads this file once a day and shows each course's groups on its card and page, and the general groups on the Links page.
يقرأ التطبيق هذا الملف مرة في اليوم، ويعرض مجموعات كل مقرر على بطاقته وصفحته، والمجموعات العامة في صفحة «البرامج والأدلة».

| Field / الحقل | Meaning / المعنى |
|---|---|
| `version` | Always `1` (another number: the app ignores the file). / دائماً `1`. |
| `updated` | The day you last changed it, `yyyy-MM-dd`. / تاريخ آخر تعديل. |
| `programs` | One entry per program code (`ITE`, `BIT`, …). / مدخل لكل برنامج برمزه. |
| `programs.X.specialties` | Specialty code → its Arabic name. Codes: `ML` `IS` `SD` `DS` `CS` `NS`. / رمز الاختصاص ← اسمه. |
| `programs.X.courses[]` | `code` (e.g. `BPG401`), optional `name`, optional `specialties` (list of codes; leave out = every student), optional `semester`, and `links[]`. / رمز المقرر، واسمه والاختصاصات والفصل اختيارية، ثم الروابط. |
| `links[]` | `kind` (`whatsapp` / `telegram` / `facebook`), `url`, optional `label` (e.g. «قناة المقرر»). / نوع الرابط وعنوانه واسم اختياري. |
| `programs.X.general[]` | The program's own groups (a cohort, a channel): `name`, `kind`, `url`, optional `label`. / مجموعات البرنامج العامة. |
| `general[]` | Groups for every student, any program: same fields. / مجموعات لكل الطلاب. |

Accepted links only (anything else is dropped) / الروابط المقبولة فقط:
`https://chat.whatsapp.com/…`, `https://whatsapp.com/channel/…`, `https://t.me/…`, `https://telegram.me/…`, `https://facebook.com/…` (also `www.`, `m.`), `https://fb.com/…`.

A course with a group per specialty: one entry per group, each with its `specialties`; a student sees only theirs (or all, labelled, when their specialty is unknown).
مقرر له مجموعة لكل اختصاص: مدخل لكل مجموعة مع `specialties`؛ يرى الطالب مجموعته فقط.

Example / مثال:

```json
{
  "version": 1,
  "updated": "2026-11-09",
  "programs": {
    "ITE": {
      "specialties": { "ML": "تعلم الآلة", "SD": "تطوير البرمجيات" },
      "courses": [
        { "code": "XYZ101", "name": "مثال", "semester": 1,
          "links": [ { "kind": "whatsapp", "url": "https://chat.whatsapp.com/XXXXXXXXXXXXXXXXXXXXXX" } ] },
        { "code": "XYZ601", "specialties": ["ML"],
          "links": [ { "kind": "telegram", "url": "https://t.me/example", "label": "قناة المقرر" } ] }
      ],
      "general": [ { "name": "دفعة 2024", "kind": "telegram", "url": "https://t.me/example_cohort" } ]
    }
  },
  "general": []
}
```

Students can suggest a link through an Issue or a Pull Request. / يمكن للطلاب اقتراح رابط عبر Issue أو Pull Request.
