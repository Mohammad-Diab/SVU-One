# سياسة الخصوصية — SVU One

آخر تحديث: 10 تشرين الثاني 2026

SVU One تطبيق مستقل لنظام Windows، وليس منتجاً رسمياً من الجامعة الافتراضية السورية ولا يتبع لها. يجمع ما يحتاجه الطالب من مواقع الجامعة في مكان واحد على جهازه.

## الخلاصة

- كل ما يقرؤه التطبيق يبقى على جهازك. ليس للتطبيق خادم خاص، ولا يجمع إحصاءات استخدام، ولا يعرض إعلانات، ولا يتتبّعك.
- كلمة المرور لا تُرسَل إلا إلى مواقع الجامعة عند تسجيل الدخول.
- الذكاء الاصطناعي في التطبيق يعمل على جهازك بالكامل، ولا يخرج منه صوت ولا صورة.

## ما الذي يحفظه التطبيق، وأين

- **اسم المستخدم وكلمة المرور** لحسابك الجامعي، لتسجيل الدخول التلقائي.
- **بياناتك الدراسية** التي يقرؤها من مواقع الجامعة باسمك: الصفوف والجدول والعلامات والمعدّل والامتحانات والرسوم والوظائف وبريد الجامعة وصورتك الشخصية، وما تضيفه أنت من مواعيد.
- **الإعدادات** وبعض المعلومات العامة (مثل أسماء البرامج والمقررات).

يُحفظ ذلك كله في مجلد التطبيق داخل حسابك على Windows‏ (`%LOCALAPPDATA%\SvuOne`). كلمة المرور والبيانات الدراسية والبريد تُحفظ مشفّرة بحماية Windows نفسها (DPAPI)، فلا تُقرأ إلا من حسابك على هذا الجهاز.

## إلى أين يتصل التطبيق

- **مواقع الجامعة** (`svuonline.org` ومواقعها الفرعية، وخوادم المحاضرات المباشرة): لتسجيل الدخول وقراءة بياناتك وبريدك، ولحضور المحاضرات. يقرأ التطبيق فقط، ولا يكتب في مواقع الجامعة شيئاً.
- **GitHub**: للتحقق من وجود تحديث للتطبيق وتنزيله، ولقراءة قائمة مجموعات الطلاب العامة. هذه طلبات عادية لا تحمل أي معلومة عنك.
- **Hugging Face**: لتنزيل نماذج الذكاء الاصطناعي، حين تختار تفعيل ميزة تحتاجها.
- **Microsoft Store**: نسخة المتجر تتحدّث عن طريقه.

## الكاميرا والميكروفون

لا يستعملهما التطبيق إلا في المحاضرة المباشرة، وحين تشغّلهما أنت بعد أن يسألك. يُرسَل الصوت والصورة إلى خوادم المحاضرات في الجامعة، كما في برنامج الجامعة الرسمي، ولا يسجّلهما التطبيق.

## سجل التطبيق والملاحظات

- يكتب التطبيق سجلاً على جهازك ليُعرف سبب أي مشكلة. لا يكتب فيه كلمة مرور ولا بيانات شخصية.
- لا يُرسَل السجل إلا إذا اخترت ذلك: يحفظه التطبيق ملفاً مضغوطاً في مجلد التنزيلات، ويفتح نموذج Google في المتصفح لترفقه أنت.
- نموذج الملاحظات ونموذج السجل من Google Forms، وتنطبق عليهما سياسة الخصوصية لدى Google. يملأ التطبيق فيهما رقم الإصدار والصفحة التي كنت فيها فقط.

## حذف بياناتك

- عند تسجيل الخروج اختر «احذف بياناتي» فتُحذف بيانات ذلك الحساب من الجهاز.
- إزالة التطبيق لا تحذف بياناتك، حتى لا تضيع إن أعدت تثبيته. لحذفها كلها احذف المجلد `%LOCALAPPDATA%\SvuOne`.

## التغييرات والتواصل

إن تغيّرت هذه السياسة نُشرت النسخة الجديدة هنا مع تاريخها. للأسئلة: نموذج الملاحظات في التطبيق (قائمة الحساب)، أو [صفحة المشكلات على GitHub](https://github.com/Mohammad-Diab/SVU-One/issues).

---

# Privacy Policy — SVU One

Last updated: 10 November 2026

SVU One is an independent Windows app. It is not an official product of the Syrian Virtual University and is not part of it. It brings what a student needs from the university's sites into one place on their PC.

## In short

- Everything the app reads stays on your PC. The app has no server of its own, collects no usage statistics, shows no ads and does not track you.
- Your password is sent only to the university's sites, when signing in.
- The app's AI runs entirely on your PC; no sound or picture leaves it.

## What the app keeps, and where

- **Your university username and password**, for automatic sign-in.
- **Your study data**, read from the university's sites in your name: classes, timetable, marks, average, exams, fees, assignments, university mail, your photo, and events you add yourself.
- **Settings** and some public information (such as program and course names).

All of it is kept in the app's folder in your Windows profile (`%LOCALAPPDATA%\SvuOne`). The password, the study data and the mail are encrypted with Windows' own protection (DPAPI), so only your Windows account on this PC can read them.

## What the app connects to

- **The university's sites** (`svuonline.org` and its subdomains, and the live-lecture servers): to sign in, read your data and mail, and attend lectures. The app only reads; it never writes anything to the university's sites.
- **GitHub**: to check for and download app updates, and to read the public list of students' groups. These are plain requests that carry nothing about you.
- **Hugging Face**: to download AI models, when you choose to turn on a feature that needs one.
- **Microsoft Store**: the Store copy is updated through it.

## Camera and microphone

The app uses them only in a live lecture, and only when you turn them on after it asks. Sound and video go to the university's lecture servers, as with the university's official client; the app does not record them.

## The app's log and feedback

- The app writes a log on your PC so the cause of a problem can be found. It never writes a password or personal data in it.
- The log is sent only if you choose: the app saves it as a zip file in your downloads folder and opens a Google form in your browser for you to attach it.
- The feedback form and the log form are Google Forms; Google's privacy policy applies to them. The app fills in only the version number and the page you were on.

## Deleting your data

- When signing out, choose «احذف بياناتي» (delete my data) to remove that account's data from the PC.
- Uninstalling keeps your data, so nothing is lost if you install again. To remove all of it, delete the folder `%LOCALAPPDATA%\SvuOne`.

## Changes and contact

If this policy changes, the new version is published here with its date. Questions: the feedback form in the app (account menu), or [the issues page on GitHub](https://github.com/Mohammad-Diab/SVU-One/issues).
