import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/f80ad5d1-4b7b-45bc-a846-3477e15ce588/files/34254547-5690-4753-b73a-d8a0249d1e08.jpg";
const PLAN_IMAGE = "https://cdn.poehali.dev/projects/f80ad5d1-4b7b-45bc-a846-3477e15ce588/files/3e87180a-8c93-4a0e-baeb-8a5651942f53.jpg";
const GALLERY_IMAGE = "https://cdn.poehali.dev/projects/f80ad5d1-4b7b-45bc-a846-3477e15ce588/files/7e17bbdd-c16f-4139-9586-20e86a8a194c.jpg";

const navItems = [
  { label: "Концепция", href: "#concept" },
  { label: "Визуализация", href: "#renders" },
  { label: "Планы", href: "#plans" },
  { label: "Материалы", href: "#materials" },
  { label: "Галерея", href: "#gallery" },
];

const materials = [
  { name: "Бетон", spec: "Архитектурный, класс B40", code: "MAT-001" },
  { name: "Металл", spec: "Кортеновская сталь, патинированная", code: "MAT-002" },
  { name: "Стекло", spec: "Триплекс 10+10 с тонировкой", code: "MAT-003" },
  { name: "Дерево", spec: "Термодревесина дуб, толщина 40мм", code: "MAT-004" },
  { name: "Камень", spec: "Гранит чёрный полированный", code: "MAT-005" },
  { name: "Медь", spec: "Листовая, патина Verdis", code: "MAT-006" },
];

const galleryProjects = [
  { title: "Резиденция «Форест»", year: "2023", type: "Частный дом", img: HERO_IMAGE },
  { title: "Бизнес-центр «Апекс»", year: "2022", type: "Коммерческая", img: GALLERY_IMAGE },
  { title: "Студия «Минимал»", year: "2023", type: "Интерьер", img: PLAN_IMAGE },
  { title: "Вилла «Озёрная»", year: "2024", type: "Частный дом", img: HERO_IMAGE },
  { title: "Лофт «Граф»", year: "2022", type: "Реконструкция", img: GALLERY_IMAGE },
  { title: "Павильон «Ботаника»", year: "2024", type: "Общественный", img: PLAN_IMAGE },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
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

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6"
        style={{ background: "linear-gradient(to bottom, rgba(20,20,20,0.97), rgba(20,20,20,0))" }}>
        <div className="font-cormorant text-xl tracking-widest text-[#EDE8DE]">
          А·С <span className="text-[hsl(43,74%,66%)] text-xs font-montserrat tracking-widest ml-1">СТУДИЯ</span>
        </div>

        <ul className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <li key={item.href}>
              <button onClick={() => scrollTo(item.href)} className="nav-link">
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button className="md:hidden text-[#EDE8DE]" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={20} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0d0d0d] flex flex-col items-center justify-center gap-10">
          {navItems.map((item) => (
            <button key={item.href} onClick={() => scrollTo(item.href)}
              className="font-cormorant text-3xl text-[#EDE8DE] hover:text-[hsl(43,74%,66%)] transition-colors">
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Проект" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(135deg, rgba(14,14,14,0.88) 0%, rgba(14,14,14,0.35) 55%, rgba(14,14,14,0.72) 100%)"
          }} />
        </div>

        <div className="absolute left-8 top-1/4 bottom-1/4 w-px"
          style={{ background: "linear-gradient(to bottom, transparent, hsl(43,74%,66%), transparent)", opacity: 0.5 }} />

        <div className="relative z-10 px-8 md:px-20 pb-24 w-full">
          <div className="animate-hero-line gold-line mb-6" />
          <p className="animate-hero-sub font-montserrat text-xs tracking-[0.3em] text-[hsl(43,74%,66%)] mb-5 uppercase">
            Архитектурный проект · 2024
          </p>
          <h1 className="animate-hero-title font-cormorant text-6xl md:text-9xl font-light leading-none tracking-tight text-[#EDE8DE]">
            Резиденция<br />
            <span className="italic text-[hsl(43,74%,66%)]">«Горизонт»</span>
          </h1>
          <p className="animate-hero-sub font-montserrat text-xs tracking-[0.2em] text-[#9a9490] mt-6">
            Ваше имя · Архитектор
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
            <p className="font-montserrat text-[0.6rem] tracking-[0.3em] text-[hsl(43,74%,66%)] uppercase mb-6">
              01 — Концепция
            </p>
            <h2 className="font-cormorant text-4xl md:text-6xl font-light leading-tight mb-8 text-[#EDE8DE]">
              Диалог между<br />
              <em className="text-[hsl(43,74%,66%)]">природой и</em><br />
              архитектурой
            </h2>
            <div className="gold-line mb-8" />
            <p className="font-montserrat text-sm leading-relaxed text-[#9a9490] mb-6">
              Основная идея проекта — создание гармоничного диалога между рукотворной
              архитектурой и природным ландшафтом. Здание не противопоставляет себя среде,
              а органично вписывается в неё, сохраняя существующий рельеф.
            </p>
            <p className="font-montserrat text-sm leading-relaxed text-[#9a9490]">
              Горизонтальные плоскости кровли продолжают линию горизонта. Массивные
              консоли создают защищённые тени. Прозрачные фасады растворяют границу
              между интерьером и экстерьером.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "Compass", label: "Ориентация", val: "Юг–Запад" },
              { icon: "Layers", label: "Этажность", val: "3 этажа" },
              { icon: "Square", label: "Площадь", val: "1 240 м²" },
              { icon: "TreePine", label: "Озеленение", val: "35% участка" },
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

      {/* RENDERS */}
      <section id="renders" className="bg-[#0f0f0f] py-32 px-8 md:px-20">
        <div className="section-fade max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="font-montserrat text-[0.6rem] tracking-[0.3em] text-[hsl(43,74%,66%)] uppercase mb-4">
                02 — Визуализация
              </p>
              <h2 className="font-cormorant text-4xl md:text-6xl font-light text-[#EDE8DE]">
                3D-рендеры<br /><em className="text-[hsl(43,74%,66%)]">проекта</em>
              </h2>
            </div>
            <div className="hidden md:block text-right">
              <p className="font-montserrat text-[0.6rem] tracking-widest text-[#9a9490] uppercase leading-relaxed">
                Рендер · Реализм<br />Освещение · Вечер
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="gallery-item md:col-span-2 h-[420px] bg-[#1a1a1a]">
              <img src={HERO_IMAGE} alt="Рендер главный" className="w-full h-full object-cover" />
              <div className="overlay flex items-end p-6">
                <div>
                  <p className="font-montserrat text-[0.6rem] tracking-widest text-[hsl(43,74%,66%)] uppercase">Вид с улицы</p>
                  <p className="font-cormorant text-xl text-[#EDE8DE]">Главный фасад, вечернее освещение</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="gallery-item h-[200px] bg-[#1a1a1a]">
                <img src={GALLERY_IMAGE} alt="Рендер 2" className="w-full h-full object-cover" />
                <div className="overlay flex items-end p-4">
                  <p className="font-montserrat text-[0.6rem] tracking-widest text-[hsl(43,74%,66%)] uppercase">Атриум</p>
                </div>
              </div>
              <div className="gallery-item h-[200px] bg-[#1a1a1a]">
                <img src={PLAN_IMAGE} alt="Рендер 3" className="w-full h-full object-cover" />
                <div className="overlay flex items-end p-4">
                  <p className="font-montserrat text-[0.6rem] tracking-widest text-[hsl(43,74%,66%)] uppercase">Задний фасад</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="py-32 px-8 md:px-20 max-w-7xl mx-auto">
        <div className="section-fade">
          <div className="mb-16">
            <p className="font-montserrat text-[0.6rem] tracking-[0.3em] text-[hsl(43,74%,66%)] uppercase mb-4">
              03 — Архитектурные планы
            </p>
            <h2 className="font-cormorant text-4xl md:text-6xl font-light text-[#EDE8DE]">
              Чертежи и<br /><em className="text-[hsl(43,74%,66%)]">планировки</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3 gallery-item h-[480px] bg-[#0f0f0f] border border-[#222]">
              <img src={PLAN_IMAGE} alt="Архитектурный план" className="w-full h-full object-cover" />
            </div>

            <div className="md:col-span-2 space-y-10">
              {[
                { level: "Первый этаж", area: "420 м²", desc: "Входная группа, гостиная, кухня-столовая, гараж, технические помещения" },
                { level: "Второй этаж", area: "380 м²", desc: "Приватная зона: 4 спальни, кабинет, библиотека, открытые террасы" },
                { level: "Кровля", area: "440 м²", desc: "Эксплуатируемая зелёная кровля, площадка для отдыха, бассейн" },
              ].map((floor, i) => (
                <div key={floor.level} className="flex gap-6">
                  <div className="flex-shrink-0 w-8 h-8 border border-[hsl(43,74%,66%)] flex items-center justify-center">
                    <span className="font-montserrat text-[0.6rem] text-[hsl(43,74%,66%)]">{i + 1}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <p className="font-cormorant text-xl text-[#EDE8DE]">{floor.level}</p>
                      <span className="font-montserrat text-[0.6rem] text-[hsl(43,74%,66%)] tracking-widest">{floor.area}</span>
                    </div>
                    <p className="font-montserrat text-xs text-[#9a9490] leading-relaxed">{floor.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section id="materials" className="bg-[#0f0f0f] py-32 px-8 md:px-20">
        <div className="section-fade max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="font-montserrat text-[0.6rem] tracking-[0.3em] text-[hsl(43,74%,66%)] uppercase mb-4">
              04 — Материалы
            </p>
            <h2 className="font-cormorant text-4xl md:text-6xl font-light text-[#EDE8DE]">
              Технические<br /><em className="text-[hsl(43,74%,66%)]">характеристики</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {materials.map((mat) => (
              <div key={mat.code} className="material-card bg-[#141414] p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 border border-[hsl(43,74%,66%)] flex items-center justify-center">
                    <div className="w-2 h-2 bg-[hsl(43,74%,66%)]" />
                  </div>
                  <span className="font-montserrat text-[0.55rem] text-[#555] tracking-widest">{mat.code}</span>
                </div>
                <h3 className="font-cormorant text-2xl text-[#EDE8DE] mb-2">{mat.name}</h3>
                <p className="font-montserrat text-[0.65rem] text-[#9a9490] leading-relaxed">{mat.spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-32 px-8 md:px-20 max-w-7xl mx-auto">
        <div className="section-fade">
          <div className="mb-16">
            <p className="font-montserrat text-[0.6rem] tracking-[0.3em] text-[hsl(43,74%,66%)] uppercase mb-4">
              05 — Галерея проектов
            </p>
            <h2 className="font-cormorant text-4xl md:text-6xl font-light text-[#EDE8DE]">
              Реализованные<br /><em className="text-[hsl(43,74%,66%)]">работы</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryProjects.map((project) => (
              <div key={project.title} className="gallery-item group cursor-pointer">
                <div className="h-64 bg-[#1a1a1a] overflow-hidden">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                  <div className="overlay flex items-end p-6">
                    <div>
                      <p className="font-montserrat text-[0.6rem] tracking-widest text-[hsl(43,74%,66%)] uppercase mb-1">{project.type}</p>
                      <p className="font-cormorant text-xl text-[#EDE8DE]">{project.title}</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 pb-2 border-b border-[#222] flex items-center justify-between">
                  <div>
                    <p className="font-cormorant text-lg text-[#EDE8DE]">{project.title}</p>
                    <p className="font-montserrat text-[0.6rem] text-[#9a9490] tracking-widest uppercase">{project.type}</p>
                  </div>
                  <span className="font-montserrat text-[0.6rem] text-[hsl(43,74%,66%)]">{project.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a0a0a] py-16 px-8 md:px-20 border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-cormorant text-3xl text-[#EDE8DE] mb-2">Ваше имя</p>
            <p className="font-montserrat text-[0.6rem] tracking-[0.25em] text-[#9a9490] uppercase">Архитектор · Дизайнер</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-[0.65rem] font-montserrat text-[#9a9490] tracking-widest">
            <div>
              <p className="text-[hsl(43,74%,66%)] uppercase mb-2 tracking-widest">Контакты</p>
              <p>studio@example.com</p>
              <p>+7 (000) 000-00-00</p>
            </div>
            <div>
              <p className="text-[hsl(43,74%,66%)] uppercase mb-2 tracking-widest">Адрес</p>
              <p>Москва, ул. Примерная, 1</p>
            </div>
          </div>
          <p className="font-montserrat text-[0.6rem] text-[#444] tracking-widest">
            © 2024 Архитектурная студия
          </p>
        </div>
      </footer>
    </div>
  );
}