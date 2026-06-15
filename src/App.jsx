import React from 'react';

const CoffeeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 10h14l-1.5 10H7.5L6 10z" stroke="#C8924A" strokeWidth="1.5" fill="none"/>
    <path d="M20 12h2a2 2 0 0 1 0 4h-2" stroke="#C8924A" strokeWidth="1.5" fill="none"/>
    <path d="M10 7c0-2 2-2 2-4M14 7c0-2 2-2 2-4" stroke="#C8924A" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const Star = ({ filled }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill={filled ? "#C8924A" : "#EFE0CC"} xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z"/>
  </svg>
);

export default function DefamilieJansen() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const [sent, setSent] = React.useState(false);

  const nav = ['Welkom', 'Menu', 'Over ons', 'Openingstijden', 'Contact'];
  const handleSubmit = e => { e.preventDefault(); setSent(true); };

  return (
    <div className="bg-[#FAF6F1] text-[#2C1A0E]" style={{ fontFamily: "'Lato', sans-serif" }}>
      {/* Google Fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@400;600;700&display=swap');`}</style>

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-[#FFF8F0] border-b border-[#EFE0CC] shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-2xl text-[#6B3F2A]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>De Familie Jansen</span>
          <div className="hidden md:flex items-center gap-8">
            {nav.map(n => (
              <a key={n} href={`#${n.toLowerCase().replace(' ', '-')}`} className="text-[#2C1A0E] hover:text-[#C8924A] transition-colors duration-200 font-medium">{n}</a>
            ))}
            <a href="#menu" className="bg-[#6B3F2A] hover:bg-[#8B5A3A] text-[#FAF6F1] font-semibold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-sm tracking-wide">Bekijk ons menu</a>
          </div>
          <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={`block w-6 h-0.5 bg-[#6B3F2A] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}/>
            <span className={`block w-6 h-0.5 bg-[#6B3F2A] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}/>
            <span className={`block w-6 h-0.5 bg-[#6B3F2A] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#FFF8F0] border-t border-[#EFE0CC] px-6 py-4 flex flex-col gap-4">
            {nav.map(n => <a key={n} href={`#${n.toLowerCase().replace(' ', '-')}`} onClick={() => setMenuOpen(false)} className="text-[#2C1A0E] font-medium hover:text-[#C8924A]">{n}</a>)}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="welkom" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1920&q=85" alt="Koffiebar" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C1A0E]/75 via-[#2C1A0E]/35 to-transparent"/>
        <div className="relative z-10 max-w-2xl px-6 text-left">
          <h1 className="text-5xl md:text-6xl text-[#FAF6F1] mb-4 leading-tight" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Welkom thuis, <em style={{ fontStyle: 'italic', fontWeight: 400 }}>aan de kust</em></h1>
          <p className="text-lg text-[#FAF6F1]/90 mb-8 italic" style={{ fontFamily: "'Playfair Display', serif" }}>Verse koffie, zelfgemaakte taart en een warm plekje in Oostende — voor iedereen.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#menu" className="bg-[#6B3F2A] hover:bg-[#8B5A3A] text-[#FAF6F1] font-semibold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 tracking-wide hover:-translate-y-0.5">Bekijk ons menu</a>
            <a href="#locatie-openingstijden" className="border-2 border-[#FAF6F1] text-[#FAF6F1] hover:bg-[#FAF6F1] hover:text-[#6B3F2A] font-semibold px-8 py-3.5 rounded-full transition-all duration-300 tracking-wide hover:-translate-y-0.5">Plan je route</a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#FAF6F1]/60 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </div>
      </section>

      {/* WELKOM */}
      <section className="py-20 px-6 bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#C8924A] font-semibold uppercase tracking-widest text-sm mb-3">Kapucijnenstraat 2, Oostende</p>
            <h2 className="text-4xl mb-6 leading-snug" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Gewoon een fijn plekje <em style={{ fontStyle: 'italic', fontWeight: 400 }}>om bij te zitten</em></h2>
            <p className="text-[#2C1A0E] leading-relaxed mb-4">Bij De Familie Jansen ben je niet in een anoniem koffiehuis — je zit bij ons thuis. We zijn een kleine koffiebar in het hart van Oostende, waar we elke dag vers bakken en zetten wat we zelf ook graag drinken.</p>
            <p className="text-[#8C6B52] leading-relaxed mb-6">Van een zachte croissant bij je ochtendkoffie tot een licht middagmaal of een punt taart als beloning — er is altijd iets dat past. En als je haast hebt, neem je het gewoon mee.</p>
            <div className="flex items-center gap-3">
              {[1,2,3,4,5].map(i => <Star key={i} filled={i <= 4}/>)}
              <span className="text-[#8C6B52] text-sm">4.5 · 355 reviews</span>
            </div>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85" alt="Sfeer" className="rounded-2xl aspect-[4/3] object-cover shadow-lg w-full"/>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-20 px-6 bg-[#FAF6F1]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-3" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Wat we voor je hebben</h2>
            <p className="text-[#8C6B52]">Vers van de dag, gemaakt zoals het hoort.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '☕', title: 'Koffie & dranken', desc: 'Espresso, filter, cappuccino — gezet met zorg en goede bonen. Ook thee, limonade en wat er verder bij past.' },
              { icon: '🥐', title: 'Ontbijt & brunch', desc: 'Broodjes, croissants, verse jus en een warm ontbijt dat je de dag laat beginnen zoals het hoort.' },
              { icon: '🍰', title: 'Taarten & gebak', desc: 'Zelfgemaakt, van appeltaart tot chocolade. Elke dag iets anders uit de oven, warm en geurig.' },
              { icon: '🥗', title: 'Lichte maaltijden', desc: 'Soep, salades, gegrilde boterhammen — lekker en eerlijk. Niets te zwaar, alles vers.' },
            ].map(c => (
              <div key={c.title} className="bg-[#FFF8F0] rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-7 border border-[#EFE0CC] hover:scale-[1.02] group">
                <div className="text-3xl mb-4">{c.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-[#6B3F2A]" style={{ fontFamily: "'Playfair Display', serif" }}>{c.title}</h3>
                <p className="text-[#8C6B52] text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <span className="text-[#8C6B52] text-sm">Take-away altijd mogelijk · Vraag naar de dagkaart</span>
          </div>
        </div>
      </section>

      {/* SFEER QUOTE */}
      <section className="py-20 px-6 bg-[#6B3F2A]">
        <div className="max-w-3xl mx-auto text-center">
          <CoffeeIcon />
          <p className="text-3xl md:text-4xl text-[#FFF8F0] mt-6 mb-4 leading-snug" style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>"Het voelt meteen als thuis. De koffie is heerlijk, het gebak nog beter, maar het is vooral de warmte die je doet terugkomen."</p>
          <span className="text-[#C8924A] font-semibold tracking-wide text-sm">— Google Review · ★★★★★</span>
        </div>
      </section>

      {/* MENU HIGHLIGHT */}
      <section className="py-20 px-6 bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-2 text-center" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Vandaag in de kijker</h2>
          <p className="text-[#8C6B52] text-center mb-10">Wat er nu net uit de oven komt.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: 'Huisgemaakte appeltaart', img: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=600&q=80', desc: 'Met een vleugje kaneel, zoals oma het maakte.' },
              { label: 'Brunch voor twee', img: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=600&q=80', desc: 'Brood, beleg, verse jus en twee koffies. Simpel en goed.' },
              { label: 'Latte van de dag', img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80', desc: 'Wisselend seizoensaanbod — vraag ons wat er vandaag is.' },
            ].map(item => (
              <div key={item.label} className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] bg-[#FAF6F1] border border-[#EFE0CC]">
                <img src={item.img} alt={item.label} className="w-full aspect-[4/3] object-cover"/>
                <div className="p-5">
                  <h3 className="font-bold text-[#6B3F2A] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{item.label}</h3>
                  <p className="text-[#8C6B52] text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVER ONS */}
      <section id="over-ons" className="py-20 px-6 bg-[#FAF6F1]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=85" alt="Over ons" className="rounded-2xl aspect-[4/3] object-cover shadow-lg w-full order-2 md:order-1"/>
          <div className="order-1 md:order-2">
            <p className="text-[#C8924A] font-semibold text-sm uppercase tracking-widest mb-3">Ons verhaal</p>
            <h2 className="text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Gewoon de familie Jansen, <em style={{ fontStyle: 'italic', fontWeight: 400 }}>aan de Oostendse kust</em></h2>
            <p className="text-[#2C1A0E] leading-relaxed mb-4">We zijn geen keten en geen concept. We zijn een familie die graag goede koffie zet en lekker bakt — en daar anderen ook blij mee wil maken. De zaak begon klein, in een straatje vlak bij de zee, en is dat altijd gebleven.</p>
            <p className="text-[#8C6B52] leading-relaxed">Oostende heeft ons gevormd: eerlijk, nuchter, hartelijk. Dat proberen we elke dag terug te geven aan iedereen die bij ons binnenstapt. Of je nu een vaste komt of voor het eerst: je bent welkom. Kom erbij zitten.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-10 text-center" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Wat anderen zeggen</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Lies V.', text: 'De beste koffie van Oostende. En die appeltaart — ik droom ervan. Echt een aanrader voor een rustige ochtend.' },
              { name: 'Thomas D.', text: 'Zo gezellig en vriendelijk. Je zit er neer en je wil niet meer weg. De brunch is ook echt heerlijk.' },
              { name: 'Nathalie B.', text: 'Fijn plekje, goede prijzen, alles vers. We komen hier elke week. Het voelt echt als een vaste plek geworden.' },
            ].map(r => (
              <div key={r.name} className="bg-[#FAF6F1] rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-7 border border-[#EFE0CC] relative hover:scale-[1.02]">
                <span className="text-[#C8924A] text-4xl absolute top-4 right-6" style={{ fontFamily: "'Playfair Display', serif" }}>"</span>
                <div className="flex gap-1 mb-3">{[1,2,3,4,5].map(i => <Star key={i} filled/>)}</div>
                <p className="text-[#2C1A0E] leading-relaxed mb-4 text-sm">"{r.text}"</p>
                <span className="font-semibold text-[#6B3F2A] text-sm">— {r.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIE & OPENINGSTIJDEN */}
      <section id="locatie-openingstijden" className="py-20 px-6 bg-[#FAF6F1]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Kom langs <em style={{ fontStyle: 'italic', fontWeight: 400 }}>in Oostende</em></h2>
            <iframe title="Kaart" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.0!2d2.917!3d51.233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcba!2sKapucijnenstraat+2+Oostende!5e0!3m2!1snl!2sbe!4v1" className="w-full h-72 rounded-2xl shadow-lg border-0" allowFullScreen loading="lazy"/>
            <div className="mt-5 space-y-1 text-[#8C6B52] text-sm">
              <p className="font-semibold text-[#2C1A0E]">📍 Kapucijnenstraat 2, 8400 Oostende</p>
              <p>📞 <a href="tel:0495633334" className="hover:text-[#C8924A] transition-colors">0495 63 33 34</a></p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl mb-6" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Openingstijden</h3>
            <div className="space-y-3">
              {[
                ['Maandag', 'Gesloten'],
                ['Dinsdag – vrijdag', '8:00 – 18:00'],
                ['Zaterdag', '8:30 – 18:30'],
                ['Zondag', '9:00 – 17:00'],
              ].map(([dag, tijd]) => (
                <div key={dag} className="flex justify-between py-3 border-b border-[#EFE0CC]">
                  <span className="font-medium text-[#2C1A0E]">{dag}</span>
                  <span className={tijd === 'Gesloten' ? 'text-[#C8924A] font-semibold' : 'text-[#8C6B52]'}>{tijd}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-[#FFF8F0]">
        <div className="max-w-2xl mx-auto text-center">
          <CoffeeIcon />
          <h2 className="text-4xl mt-4 mb-3" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Een vraag of reservering?</h2>
          <p className="text-[#8C6B52] mb-10">Schrijf ons gerust. We reageren zo snel als de koffie gezet is.</p>
          {sent ? (
            <div className="bg-[#FAF6F1] rounded-2xl p-10 border border-[#EFE0CC]">
              <p className="text-2xl text-[#6B3F2A]" style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>Bedankt! We komen zo snel mogelijk bij je terug.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <input required placeholder="Je naam" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="bg-white border border-[#D4B99A] rounded-xl px-4 py-3 text-[#2C1A0E] placeholder-[#8C6B52] focus:outline-none focus:ring-2 focus:ring-[#C8924A] focus:border-transparent transition-all duration-200 w-full"/>
              <input required type="email" placeholder="Je e-mailadres" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="bg-white border border-[#D4B99A] rounded-xl px-4 py-3 text-[#2C1A0E] placeholder-[#8C6B52] focus:outline-none focus:ring-2 focus:ring-[#C8924A] focus:border-transparent transition-all duration-200 w-full"/>
              <textarea required rows={5} placeholder="Je bericht of vraag…" value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="bg-white border border-[#D4B99A] rounded-xl px-4 py-3 text-[#2C1A0E] placeholder-[#8C6B52] focus:outline-none focus:ring-2 focus:ring-[#C8924A] focus:border-transparent transition-all duration-200 w-full resize-none"/>
              <button type="submit" className="bg-[#6B3F2A] hover:bg-[#8B5A3A] text-[#FAF6F1] font-semibold text-base px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 tracking-wide hover:-translate-y-0.5 w-full">Verstuur je bericht</button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2C1A0E] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-[#FAF6F1]/80 text-sm">
          <div>
            <h3 className="text-xl text-[#FAF6F1] mb-3" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>De Familie Jansen</h3>
            <p className="italic text-[#C8924A] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Een kopje verder, aan de Oostendse kust.</p>
            <p>Kapucijnenstraat 2<br/>8400 Oostende<br/><a href="tel:0495633334" className="hover:text-[#C8924A] transition-colors">0495 63 33 34</a></p>
          </div>
          <div>
            <h4 className="text-[#FAF6F1] font-semibold mb-3">Openingstijden</h4>
            <p>Di – Vr: 8:00 – 18:00<br/>Za: 8:30 – 18:30<br/>Zo: 9:00 – 17:00<br/><span className="text-[#C8924A]">Ma: gesloten</span></p>
          </div>
          <div>
            <h4 className="text-[#FAF6F1] font-semibold mb-3">Volg ons</h4>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#C8924A] transition-colors">Facebook</a>
            <div className="mt-6 flex items-center gap-2 opacity-40">
              <CoffeeIcon /><span className="text-xs">Gemaakt met koffie & zorg</span>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-[#FAF6F1]/10 text-center text-[#FAF6F1]/40 text-xs">
          © {new Date().getFullYear()} De Familie Jansen · Oostende
        </div>
      </footer>
    </div>
  );
}