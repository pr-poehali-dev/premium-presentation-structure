import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const IMG_HERO = "https://cdn.poehali.dev/projects/f80ad5d1-4b7b-45bc-a846-3477e15ce588/files/5de0fac3-d42a-4a1c-9628-3c64452a93e0.jpg";
const IMG_PLAN = "https://cdn.poehali.dev/projects/f80ad5d1-4b7b-45bc-a846-3477e15ce588/files/469eaa18-77d1-430f-bfa2-76ffec18543f.jpg";
const IMG_OLD = "https://cdn.poehali.dev/projects/f80ad5d1-4b7b-45bc-a846-3477e15ce588/files/34254547-5690-4753-b73a-d8a0249d1e08.jpg";

const navItems = [
  { label: "Концепция", href: "#concept" },
  { label: "Зонирование", href: "#zones" },
  { label: "Генплан", href: "#plan" },
  { label: "Визуализации", href: "#renders" },
  { label: "Материалы", href: "#materials" },
];

const zones = [
  {
    num: "01",
    icon: "Music",
    title: "Амфитеатр",
    desc: "Открытая сцена и зрительские ступени. Вместимость — до 200 человек. Используется для мероприятий, кино под открытым небом, концертов.",
  },
  {
    num: "02",
    icon: "Waves",
    title: "Открытый бассейн",
    desc: "Общественный купальный бассейн с зонами отдыха и шезлонгами вокруг. Система фильтрации и подогрева воды.",
  },
  {
    num: "03",
    icon: "Droplets",
    title: "Фонтанный комплекс",
    desc: "Декоративные фонтаны и сухой фонтан для детей. Интерактивный элемент пространства, работает в вечернее время с подсветкой.",
  },
  {
    num: "04",
    icon: "TreePine",
    title: "Прогулочные зоны",
    desc: "Разветвлённая сеть дорожек с озеленением, скамейками и освещением. Разделена на активную и тихую зоны.",
  },
  {
    num: "05",
    icon: "Sun",
    title: "Зона отдыха",
    desc: "Газонные поляны, перголы, теневые навесы. Площадки для пикника и детской активности.",
  },
  {
    num: "06",
    icon: "Zap",
    title: "Освещение",
    desc: "Архитектурная подсветка всех объектов. Умное управление светом — пешеходные, акцентные и декоративные сценарии.",
  },
];

const materials = [
  { name: "Натуральный камень", spec: "Гранит серый, брусчатка 10×20 см", zone: "Дорожки" },
  { name: "Дерево", spec: "Термодревесина лиственница, покрытие масло-воск", zone: "Настилы, скамьи" },
  { name: "Нержавеющая сталь", spec: "Матовая, AISI 316, атмосферостойкая", zone: "Фонтаны, ограждения" },
  { name: "Бетон", spec: "Архитектурный шлифованный, класс B30", zone: "Амфитеатр, бортики" },
  { name: "Растения", spec: "Многолетники, злаки, кустарники — посадочный план отдельно", zone: "Озеленение" },
  { name: "Освещение", spec: "LED, IP67, тёплый белый 2700K, управление DALI", zone: "Все зоны" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".section-fade").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#141414] text-[#EDE8DE] overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
        style={{ background: "linear-gradient(to bottom, rgba(20,20,20,0.97), transparent)" }}>
        <div>
          <span className="font-cormorant text-lg tracking-widest text-[#EDE8DE]">КЛОКШИНО</span>
          <span className="font-montserrat text-[0.55rem] tracking-[0.25em] text-[hsl(43,74%,66%)] ml-3 uppercase">Ландшафт</span>
        </div>
        <ul className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <li key={item.href}>
              <button onClick={() => scrollTo(item.href)} className="nav-link">{item.label}</button>
            </li>
          ))}
        </ul>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={20} />
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0d0d0d] flex flex-col items-center justify-center gap-10">
          {navItems.map((item) => (
            <button key={item.href} onClick={() => scrollTo(item.href)}
              className="font-cormorant text-4xl text-[#EDE8DE] hover:text-[hsl(43,74%,66%)] transition-colors">
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG_HERO} alt="Клокшино" className="w-full h-full object-cover" />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(160deg, rgba(14,14,14,0.9) 0%, rgba(14,14,14,0.3) 60%, rgba(14,14,14,0.75) 100%)" }} />
        </div>

        <div className="absolute left-8 top-1/4 bottom-1/4 w-px opacity-50"
          style={{ background: "linear-gradient(to bottom, transparent, hsl(43,74%,66%), transparent)" }} />

        <div className="relative z-10 px-8 md:px-20 pb-24 w-full">
          <div className="animate-hero-line gold-line mb-6" />
          <p className="animate-hero-sub font-montserrat text-[0.65rem] tracking-[0.35em] text-[hsl(43,74%,66%)] uppercase mb-5">
            Общественное пространство · Клокшино, Самарская область
          </p>
          <h1 className="animate-hero-title font-cormorant font-light leading-none tracking-tight text-[#EDE8DE]"
            style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}>
            Парк<br />
            <em className="text-[hsl(43,74%,66%)]">«Клокшино»</em>
          </h1>
          <p className="animate-hero-sub font-montserrat text-[0.65rem] tracking-[0.2em] text-[#9a9490] mt-6 uppercase">
            Илья Смирдин · Ландшафтный дизайнер
          </p>

          <div className="animate-hero-scroll absolute bottom-10 right-10 md:right-20 flex flex-col items-center gap-3">
            <span className="font-montserrat text-[0.55rem] tracking-[0.25em] text-[#9a9490] uppercase"
              style={{ writingMode: "vertical-rl" }}>Листать вниз</span>
            <Icon name="ArrowDown" size={14} className="text-[hsl(43,74%,66%)] animate-bounce" />
          </div>
        </div>
      </section>

      {/* CONCEPT */}
      <section id="concept" className="py-32 px-8 md:px-20 max-w-7xl mx-auto">
        <div className="section-fade grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-montserrat text-[0.6rem] tracking-[0.3em] text-[hsl(43,74%,66%)] uppercase mb-6">01 — Концепция</p>
            <h2 className="font-cormorant text-4xl md:text-6xl font-light leading-tight text-[#EDE8DE] mb-8">
              Пространство<br />
              <em className="text-[hsl(43,74%,66%)]">для людей</em>
            </h2>
            <div className="gold-line mb-8" />
            <p className="font-montserrat text-sm leading-relaxed text-[#9a9490] mb-6">
              Парк «Клокшино» — многофункциональное общественное пространство для жителей
              посёлка и гостей. Концепция объединяет активный отдых, культуру и природу
              в единой пешеходной среде.
            </p>
            <p className="font-montserrat text-sm leading-relaxed text-[#9a9490]">
              Центральная ось проходит от главного входа к амфитеатру. Водные объекты —
              бассейн и фонтаны — создают микроклимат и становятся визуальными акцентами.
              Все зоны связаны доступными маршрутами.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "MapPin", label: "Локация", val: "Клокшино" },
              { icon: "Maximize", label: "Площадь", val: "≈ 7 соток" },
              { icon: "Users", label: "Аудитория", val: "Все возрасты" },
              { icon: "Calendar", label: "Сезонность", val: "Круглый год" },
            ].map((item) => (
              <div key={item.label} className="material-card p-6 bg-[#1a1a1a]">
                <Icon name={item.icon} size={18} className="text-[hsl(43,74%,66%)] mb-4" fallback="Circle" />
                <p className="font-montserrat text-[0.6rem] tracking-widest text-[#9a9490] uppercase mb-1">{item.label}</p>
                <p className="font-cormorant text-xl text-[#EDE8DE]">{item.val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section id="zones" className="bg-[#0f0f0f] py-32 px-8 md:px-20">
        <div className="section-fade max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="font-montserrat text-[0.6rem] tracking-[0.3em] text-[hsl(43,74%,66%)] uppercase mb-4">02 — Зонирование</p>
            <h2 className="font-cormorant text-4xl md:text-6xl font-light text-[#EDE8DE]">
              Ключевые<br /><em className="text-[hsl(43,74%,66%)]">объекты</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {zones.map((z) => (
              <div key={z.num} className="material-card bg-[#141414] p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 border border-[hsl(43,74%,66%)] flex items-center justify-center">
                    <Icon name={z.icon} size={16} className="text-[hsl(43,74%,66%)]" fallback="Circle" />
                  </div>
                  <span className="font-montserrat text-[0.55rem] text-[#555] tracking-widest">{z.num}</span>
                </div>
                <h3 className="font-cormorant text-2xl text-[#EDE8DE] mb-3">{z.title}</h3>
                <p className="font-montserrat text-[0.65rem] text-[#9a9490] leading-relaxed">{z.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLAN */}
      <section id="plan" className="py-32 px-8 md:px-20 max-w-7xl mx-auto">
        <div className="section-fade">
          <div className="mb-16">
            <p className="font-montserrat text-[0.6rem] tracking-[0.3em] text-[hsl(43,74%,66%)] uppercase mb-4">03 — Генплан</p>
            <h2 className="font-cormorant text-4xl md:text-6xl font-light text-[#EDE8DE]">
              Планировочное<br /><em className="text-[hsl(43,74%,66%)]">решение</em>
            </h2>
          </div>

          <div className="relative border border-[#222] overflow-hidden" style={{ paddingBottom: "56.25%" }}>
            <img src={IMG_PLAN} alt="Генплан Клокшино"
              className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-6 flex gap-6 flex-wrap"
              style={{ background: "linear-gradient(to top, rgba(14,14,14,0.9), transparent)" }}>
              {["Амфитеатр", "Бассейн", "Фонтаны", "Прогулочные дорожки", "Зона отдыха"].map((label, i) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[hsl(43,74%,66%)]" />
                  <span className="font-montserrat text-[0.6rem] tracking-widest text-[#EDE8DE] uppercase">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="font-montserrat text-[0.65rem] text-[#555] tracking-widest mt-4 text-center uppercase">
            Генплан · Масштаб 1:500 · Версия для согласования
          </p>
        </div>
      </section>

      {/* RENDERS */}
      <section id="renders" className="bg-[#0f0f0f] py-32 px-8 md:px-20">
        <div className="section-fade max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="font-montserrat text-[0.6rem] tracking-[0.3em] text-[hsl(43,74%,66%)] uppercase mb-4">04 — Визуализации</p>
            <h2 className="font-cormorant text-4xl md:text-6xl font-light text-[#EDE8DE]">
              Как это будет<br /><em className="text-[hsl(43,74%,66%)]">выглядеть</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="gallery-item md:col-span-2 h-[420px]">
              <img src={IMG_HERO} alt="Общий вид" className="w-full h-full object-cover" />
              <div className="overlay flex items-end p-6">
                <div>
                  <p className="font-montserrat text-[0.6rem] tracking-widest text-[hsl(43,74%,66%)] uppercase">Вид сверху</p>
                  <p className="font-cormorant text-xl text-[#EDE8DE]">Общая панорама парка</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="gallery-item h-[200px]">
                <img src={IMG_OLD} alt="Амфитеатр" className="w-full h-full object-cover" />
                <div className="overlay flex items-end p-4">
                  <p className="font-montserrat text-[0.6rem] tracking-widest text-[hsl(43,74%,66%)] uppercase">Амфитеатр</p>
                </div>
              </div>
              <div className="gallery-item h-[200px]">
                <img src={IMG_PLAN} alt="Водные объекты" className="w-full h-full object-cover" />
                <div className="overlay flex items-end p-4">
                  <p className="font-montserrat text-[0.6rem] tracking-widest text-[hsl(43,74%,66%)] uppercase">Водные объекты</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 border border-dashed border-[#333] p-8 flex items-center justify-center gap-4 text-[#555]">
            <Icon name="ImagePlus" size={20} fallback="Plus" />
            <p className="font-montserrat text-[0.65rem] tracking-widest uppercase">Здесь будут ваши рендеры — добавьте позже</p>
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section id="materials" className="py-32 px-8 md:px-20 max-w-7xl mx-auto">
        <div className="section-fade">
          <div className="mb-16">
            <p className="font-montserrat text-[0.6rem] tracking-[0.3em] text-[hsl(43,74%,66%)] uppercase mb-4">05 — Материалы</p>
            <h2 className="font-cormorant text-4xl md:text-6xl font-light text-[#EDE8DE]">
              Материалы и<br /><em className="text-[hsl(43,74%,66%)]">спецификация</em>
            </h2>
          </div>

          <div className="divide-y divide-[#1e1e1e]">
            {materials.map((mat, i) => (
              <div key={mat.name} className="py-6 grid grid-cols-12 gap-4 items-center group hover:bg-[#1a1a1a] transition-colors px-4 -mx-4">
                <span className="col-span-1 font-montserrat text-[0.55rem] text-[#555] tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-4">
                  <p className="font-cormorant text-xl text-[#EDE8DE] group-hover:text-[hsl(43,74%,66%)] transition-colors">{mat.name}</p>
                </div>
                <div className="col-span-5">
                  <p className="font-montserrat text-[0.65rem] text-[#9a9490] leading-relaxed">{mat.spec}</p>
                </div>
                <div className="col-span-2 text-right">
                  <span className="font-montserrat text-[0.6rem] tracking-widest text-[hsl(43,74%,66%)] uppercase">{mat.zone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a0a0a] py-16 px-8 md:px-20 border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <p className="font-cormorant text-4xl text-[#EDE8DE] mb-1">Илья Смирдин</p>
            <p className="font-montserrat text-[0.6rem] tracking-[0.25em] text-[#9a9490] uppercase">Ландшафтный дизайнер</p>
          </div>
          <div className="text-center">
            <p className="font-cormorant text-2xl italic text-[hsl(43,74%,66%)] mb-1">Парк «Клокшино»</p>
            <p className="font-montserrat text-[0.6rem] tracking-widest text-[#555] uppercase">Клокшино, Самарская область · 2024</p>
          </div>
          <p className="font-montserrat text-[0.6rem] text-[#444] tracking-widest text-right">
            Проектная презентация<br />Версия для заказчика
          </p>
        </div>
      </footer>
    </div>
  );
}
