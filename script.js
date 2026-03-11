// ─── DATA ────────────────────────────────────────────────────────────────────
const DB = [
  {id:1,title:"Grillowany łosoś z warzywami",cat:"obiad",type:"slone",time:25,diff:1,premium:false,tags:["wysokobialkowe","bezglutenowe"],kcal:380,protein:42,carbs:18,fat:14,fiber:5,sugar:6,img:"https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600",desc:"Soczysty łosoś atlantycki z kolorową mieszanką warzyw grillowanych. Szybki i pożywny obiad bogaty w kwasy omega-3.",ingredients:["400g filet z łososia","1 cukinia","1 papryka czerwona","200g fasolki szparagowej","2 łyżki oliwy","sok z cytryny","sól, pieprz","koper"],steps:["Łososia osusz, natryj solą, pieprzem i sokiem z cytryny.","Warzywa pokrój w plastry, skrop oliwą.","Rozgrzej patelnię grillową.","Grilluj łososia 4 min z każdej strony.","Na drugiej patelni podsmaż warzywa 8-10 min.","Podawaj z posiekanym koprem."]},
  {id:2,title:"Zupa krem z batatów i imbiru",cat:"obiad",type:"slone",time:35,diff:1,premium:false,tags:["wegetarianskie","lowcarb"],kcal:245,protein:6,carbs:38,fat:8,fiber:7,sugar:12,img:"https://images.unsplash.com/photo-1547592180-85f173990554?w=600",desc:"Kremowa rozgrzewająca zupa z pieczonych batatów z nutą imbiru i mleczka kokosowego.",ingredients:["600g batatów","400ml mleka kokosowego","3cm imbiru","1 cebula","3 ząbki czosnku","1 łyżka kurkumy","500ml bulionu warzywnego"],steps:["Bataty obierz i pokrój, imbir zetrzyj.","Cebulę i czosnek zeszklij na oliwie.","Dodaj bataty, przyprawy i bulion, gotuj 20 min.","Zblenduj na gładki krem.","Dodaj mleko kokosowe, podgrzej.","Podawaj z pestkami dyni."]},
  {id:3,title:"Kurczak tikka masala fit",cat:"obiad",type:"slone",time:45,diff:2,premium:false,tags:["wysokobialkowe"],kcal:420,protein:48,carbs:22,fat:12,fiber:4,sugar:8,img:"https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600",desc:"Klasyczne indyjskie danie w zdrowszej wersji z jogurtem zamiast śmietany.",ingredients:["500g piersi kurczaka","400g pomidorów","150g jogurtu greckiego","1 cebula","garam masala, kurkuma"],steps:["Kurczaka marynuj w jogurcie i przyprawach 30 min.","Cebulę, czosnek podsmaż.","Dodaj pomidory i kurczaka.","Gotuj 20 min.","Podawaj z ryżem basmati."]},
  {id:4,title:"Bowl z quinoa i awokado",cat:"obiad",type:"slone",time:20,diff:1,premium:false,tags:["wegetarianskie","bezglutenowe","wysokobialkowe"],kcal:490,protein:18,carbs:52,fat:22,fiber:12,sugar:4,img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",desc:"Sycący bowl z quinoa, dojrzałym awokado i dressingiem tahini.",ingredients:["200g quinoa","1 awokado","100g rukoli","pomidorki cherry","tahini, cytryna"],steps:["Quinoa ugotuj 15 min.","Awokado pokrój.","Wymieszaj tahini z cytryną.","Ułóż składniki w misce.","Skrop dressingiem, posyp sezamem."]},
  {id:5,title:"Omlet ze szpinakiem i fetą",cat:"kolacja",type:"slone",time:12,diff:1,premium:false,tags:["wegetarianskie","szybkie","bezglutenowe","lowcarb"],kcal:295,protein:22,carbs:5,fat:21,fiber:2,sugar:2,img:"https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600",desc:"Puszysty omlet bogaty w białko ze świeżym szpinakiem i kremową fetą.",ingredients:["3 jajka","80g szpinaku","50g fety","oliwa, tymianek"],steps:["Jajka roztrzep z solą.","Szpinak podsmaż na oliwie.","Wlej jajka na szpinak.","Posyp fetą, złóż na pół."]},
  {id:6,title:"Shakshuka",cat:"kolacja",type:"slone",time:25,diff:1,premium:false,tags:["wegetarianskie","szybkie"],kcal:280,protein:16,carbs:18,fat:16,fiber:5,sugar:10,img:"https://images.unsplash.com/photo-1590412200988-a436970781fa?w=600",desc:"Bliskowschodnia klasyka — jajka gotowane w aromatycznym sosie pomidorowym.",ingredients:["4 jajka","800g pomidorów","1 cebula","1 papryka","kumin, papryka wędzona"],steps:["Cebulę i paprykę podsmaż.","Dodaj pomidory i przyprawy, gotuj 10 min.","Wbij jajka w sos.","Gotuj przykryte 5-7 min.","Posyp fetą i pietruszką."]},
  {id:7,title:"Owsianka bananowa",cat:"sniadanie",type:"slodkie",time:10,diff:1,premium:false,tags:["wegetarianskie","szybkie"],kcal:385,protein:14,carbs:58,fat:12,fiber:8,sugar:22,img:"https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600",desc:"Kremowa owsianka z dojrzałym bananem i masłem orzechowym.",ingredients:["80g płatków owsianych","300ml mleka roślinnego","1 banan","2 łyżki masła orzechowego","cynamon"],steps:["Płatki gotuj z mlekiem 5 min.","Dodaj cynamon.","Na wierzchu ułóż banana.","Dodaj masło orzechowe."]},
  {id:8,title:"Pancakes proteinowe",cat:"sniadanie",type:"slodkie",time:20,diff:1,premium:false,tags:["wysokobialkowe","wegetarianskie"],kcal:340,protein:28,carbs:38,fat:8,fiber:4,sugar:16,img:"https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600",desc:"Puszyste naleśniki proteinowe z 3 składników.",ingredients:["2 banany","4 jajka","40g odżywki waniliowej","cynamon"],steps:["Banany zblenduj z jajkami.","Dodaj odżywkę i cynamon.","Smaż małe placuszki 2-3 min z każdej strony.","Podawaj z owocami."]},
  {id:9,title:"Tosty z awokado i jajkiem",cat:"sniadanie",type:"slone",time:12,diff:2,premium:false,tags:["szybkie","wegetarianskie"],kcal:410,protein:18,carbs:34,fat:23,fiber:8,sugar:3,img:"https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600",desc:"Tosty z kremowym awokado i jajkiem w koszulce.",ingredients:["2 kromki chleba na zakwasie","2 awokado","2 jajka","limonka, chili"],steps:["Opiecz chleb.","Awokado rozgnieć z solą.","Ugotuj jajko w koszulce.","Ułóż na chlebie, posyp chili."]},
  {id:10,title:"Energy balls daktylowe",cat:"przekaska",type:"slodkie",time:15,diff:1,premium:false,tags:["wegetarianskie","bezglutenowe","szybkie"],kcal:185,protein:5,carbs:28,fat:7,fiber:4,sugar:22,img:"https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600",desc:"Naturalne kulki energetyczne z daktyli i kakao bez cukru.",ingredients:["200g daktyli","100g orzechów nerkowca","3 łyżki kakao","masło migdałowe"],steps:["Zblenduj wszystkie składniki.","Wychłodź masę 30 min.","Formuj kulki.","Obtocz w wiórki kokosowe."]},
  {id:11,title:"Hummus z warzywami",cat:"przekaska",type:"slone",time:10,diff:1,premium:false,tags:["wegetarianskie","bezglutenowe","szybkie"],kcal:210,protein:9,carbs:24,fat:9,fiber:7,sugar:4,img:"https://images.unsplash.com/photo-1547592180-85f173990554?w=600",desc:"Kremowy domowy hummus z tahini i cytryną.",ingredients:["400g ciecierzycy","3 łyżki tahini","czosnek, cytryna","oliwa, kumin"],steps:["Zblenduj ciecierzycę z tahini i czosnkiem.","Dodaj oliwę, kumin, sok z cytryny.","Przełóż do miski.","Podawaj z marchewką i ogórkiem."]},
  {id:12,title:"Budyń chia z mango",cat:"deser",type:"slodkie",time:10,diff:1,premium:false,tags:["wegetarianskie","bezglutenowe","szybkie"],kcal:265,protein:8,carbs:32,fat:11,fiber:10,sugar:20,img:"https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600",desc:"Kremowy pudding chia z tropikalnym mango.",ingredients:["4 łyżki nasion chia","250ml mleka kokosowego","1 mango","wanilia, syrop klonowy"],steps:["Chia wymieszaj z mlekiem i wanilią.","Wstaw do lodówki na 4h lub przez noc.","Mango obierz i pokrój.","Ułóż w szklankach, dodaj mango."]},
  {id:13,title:"Ciasteczka owsiane czekoladowe",cat:"deser",type:"slodkie",time:25,diff:1,premium:false,tags:["wegetarianskie"],kcal:145,protein:4,carbs:18,fat:7,fiber:2,sugar:8,img:"https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600",desc:"Miękkie ciasteczka owsiane z gorzką czekoladą bez białego cukru.",ingredients:["200g płatków owsianych","2 banany","100g gorzkiej czekolady","masło orzechowe"],steps:["Banany rozgnieć.","Wymieszaj z płatkami i masłem.","Dodaj posiekaną czekoladę.","Piecz 175C przez 12-15 min."]},
  {id:14,title:"Sałatka niçoise z tuńczykiem",cat:"lunch",type:"slone",time:20,diff:1,premium:false,tags:["bezglutenowe","wysokobialkowe"],kcal:395,protein:32,carbs:22,fat:18,fiber:6,sugar:4,img:"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600",desc:"Klasyczna prowansalska sałatka niçoise pełna białka.",ingredients:["2 jajka","150g tuńczyka","100g fasolki","oliwki","pomidorki","ziemniaki"],steps:["Ziemniaki i jajka ugotuj.","Fasolkę zblanszuj.","Ułóż składniki na talerzu.","Skrop oliwą i octem."]},
  {id:15,title:"Zupa pomidorowa z soczewicą",cat:"lunch",type:"slone",time:30,diff:1,premium:false,tags:["wegetarianskie","bezglutenowe"],kcal:285,protein:16,carbs:42,fat:5,fiber:12,sugar:10,img:"https://images.unsplash.com/photo-1547592180-85f173990554?w=600",desc:"Gęsta i pożywna zupa pomidorowa z czerwoną soczewicą.",ingredients:["400g pomidorów z puszki","150g czerwonej soczewicy","cebula, czosnek","kumin, papryka","800ml bulionu"],steps:["Cebulę i czosnek zeszklij.","Dodaj pomidory, soczewicę i bulion.","Gotuj 20 min.","Zblenduj część, wymieszaj.","Podawaj z kolendrą."]},
  {id:16,title:"Tarta szparagowa z ricottą",cat:"obiad",type:"slone",time:55,diff:3,premium:true,tags:["wegetarianskie"],kcal:385,protein:18,carbs:30,fat:22,fiber:4,sugar:4,img:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600",desc:"Elegancka tarta z kremowym nadzieniem z ricotty i świeżymi szparagami.",ingredients:["200g mąki pełnoziarnistej","400g ricotty","4 jajka","300g szparagów"],steps:["Ciasto wstaw do lodówki 30 min.","Ricottę wymieszaj z jajkami.","Szparagi ułóż na nadzieniu.","Piecz 180C przez 35-40 min."]},
  {id:17,title:"Buddha bowl z tofu teriyaki",cat:"lunch",type:"slone",time:30,diff:2,premium:true,tags:["wegetarianskie","wysokobialkowe"],kcal:445,protein:24,carbs:58,fat:14,fiber:10,sugar:12,img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",desc:"Kolorowy bowl z chrupiącym tofu glazurowanym sosem teriyaki.",ingredients:["200g tofu","150g ryżu brązowego","marchewka, ogórek","edamame, nori","sos teriyaki"],steps:["Ryż ugotuj.","Tofu usmaż, glazuruj teriyaki.","Warzywa pokrój.","Ułóż w misce, posyp sezamem."]},
  {id:18,title:"Sernik na zimno bez pieczenia",cat:"deser",type:"slodkie",time:20,diff:2,premium:true,tags:["wegetarianskie"],kcal:295,protein:12,carbs:22,fat:18,fiber:2,sugar:16,img:"https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600",desc:"Pyszny sernik na zimno ze spodu daktylowego z kremem mascarpone.",ingredients:["200g daktyli","100g orzechów","300g mascarpone","200g twarożku 0%","cytryna, miód"],steps:["Daktyle z orzechami zblenduj na spód.","Mascarpone wymieszaj z twarożkiem i cytryną.","Wylej na spód.","Wstaw do lodówki na 4h."]},
  {id:19,title:"Muffiny malinowe owsiane",cat:"deser",type:"slodkie",time:30,diff:1,premium:false,tags:["wegetarianskie"],kcal:175,protein:5,carbs:26,fat:6,fiber:3,sugar:12,img:"https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600",desc:"Puszyste muffiny pełnoziarniste z soczystymi malinami.",ingredients:["200g mąki pełnoziarnistej","80g płatków owsianych","2 jajka","150ml mleka roślinnego","100g malin","miód"],steps:["Suche i mokre składniki wymieszaj osobno.","Połącz, dodaj maliny.","Piecz 180C przez 20-22 min."]},
  {id:20,title:"Wrapy z kurczakiem i guacamole",cat:"kolacja",type:"slone",time:20,diff:1,premium:false,tags:["szybkie","wysokobialkowe"],kcal:420,protein:36,carbs:38,fat:14,fiber:8,sugar:4,img:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600",desc:"Sycące wrapy z grillowanym kurczakiem i domowym guacamole.",ingredients:["300g piersi kurczaka","2 tortille pełnoziarniste","2 awokado","pomidor, cebula","kolendra, limonka"],steps:["Kurczaka ugotuj lub ugrilluj.","Avokado rozgnieć z pomidorem.","Podgrzej tortille.","Zawiń z sałatą i guacamole."]}
];

const CATS = [
  {k:"wszystkie",l:"Wszystkie",i:"🍽️"},
  {k:"obiad",l:"Obiady",i:"🥗"},
  {k:"kolacja",l:"Kolacje",i:"🌙"},
  {k:"sniadanie",l:"Śniadania",i:"☀️"},
  {k:"lunch",l:"Lunch",i:"🥙"},
  {k:"przekaska",l:"Przekąski",i:"🥕"},
  {k:"deser",l:"Desery",i:"🍓"}
];
const FILS = [
  {k:"all",l:"Wszystkie"},{k:"slone",l:"🧂 Słone"},{k:"slodkie",l:"🍯 Słodkie"},
  {k:"wegetarianskie",l:"🌿 Weget."},{k:"bezglutenowe",l:"🌾 Bez glutenu"},
  {k:"wysokobialkowe",l:"💪 Białkowe"},{k:"szybkie",l:"⚡ <30 min"},{k:"lowcarb",l:"📉 Low Carb"}
];
const PLANS = [
  {id:"basic",n:"FIT Basic",p:"9,99",per:"miesiąc",c:"#7a9e7e",i:"🥗",f:["Obiady i Kolacje Premium","Filtrowanie zaawansowane","Listy zakupów","200+ przepisów"]},
  {id:"pro",n:"FIT Pro",p:"19,99",per:"miesiąc",c:"#d4a843",i:"⭐",f:["WSZYSTKIE przepisy (4200+)","AI bez limitu","Planer tygodniowy","Kalkulator kalorii"],best:true},
  {id:"lifetime",n:"FIT Lifetime",p:"149",per:"jednorazowo",c:"#c4704f",i:"♾️",f:["Dożywotni dostęp","Wszystkie aktualizacje","Plan diety AI","Konsultacja dietetyka 1h"]}
];
const CC = {obiad:"#7a9e7e",kolacja:"#5a3d6e",sniadanie:"#d4a843",lunch:"#c4704f",przekaska:"#4a9e6e",deser:"#c4608e"};
const CI = {obiad:"🥗",kolacja:"🌙",sniadanie:"☀️",lunch:"🥙",przekaska:"🥕",deser:"🍓"};
const DL = ["","Łatwy","Średni","Trudny"];

// ─── STATE ───────────────────────────────────────────────────────────────────
const S = { cat:"wszystkie", fil:"all", q:"", isPrem:false, page:1, favs:new Set(), aiExtra:[], selPlan:"pro" };
const PER = 20;

// ─── API KEY ─────────────────────────────────────────────────────────────────
let API_KEY = localStorage.getItem("fk_api_key") || "";

function saveKey() {
  const val = document.getElementById("apiKeyInput").value.trim();
  if (!val.startsWith("sk-ant-")) {
    setKeyStatus("⚠️ Nieprawidłowy klucz (musi zaczynać się od sk-ant-)", "err");
    return;
  }
  API_KEY = val;
  localStorage.setItem("fk_api_key", val);
  setKeyStatus("✓ Zapisano", "ok");
}

function setKeyStatus(msg, cls) {
  const el = document.getElementById("keyStatus");
  el.textContent = msg;
  el.className = cls;
  if (cls === "ok") setTimeout(() => { el.textContent = ""; }, 3000);
}

// Wczytaj zapisany klucz przy starcie
window.addEventListener("DOMContentLoaded", () => {
  if (API_KEY) {
    document.getElementById("apiKeyInput").value = API_KEY;
    setKeyStatus("✓ Klucz wczytany", "ok");
  }
});

// ─── HELPERS ─────────────────────────────────────────────────────────────────
const esc = s => String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");

function mbar(r) {
  const t = (r.protein||0)*4+(r.carbs||0)*4+(r.fat||0)*9||1;
  const p = Math.round((r.protein||0)*4/t*100);
  const c = Math.round((r.carbs||0)*4/t*100);
  return `<div class="mbar">
    <div style="width:${p}%;background:#ef9a9a;height:100%"></div>
    <div style="width:${c}%;background:#ffe082;height:100%"></div>
    <div style="flex:1;background:#a5d6a7;height:100%"></div>
  </div>`;
}

function mmini(r) {
  return `<div class="mmini">${[
    {l:"kcal",v:r.kcal||0,c:"#e55d3a"},{l:"białko",v:`${r.protein||0}g`,c:"#e05252"},
    {l:"węgle",v:`${r.carbs||0}g`,c:"#e0a030"},{l:"tłuszcz",v:`${r.fat||0}g`,c:"#52b060"}
  ].map(m=>`<div class="mcell"><div class="mv" style="color:${m.c}">${esc(String(m.v))}</div><div class="ml">${m.l}</div></div>`).join("")}</div>`;
}

function cardH(r) {
  const lk = r.premium && !S.isPrem;
  const fv = S.favs.has(r.id);
  const cc = CC[r.cat]||"#888";
  const dd = [1,2,3].map(d=>`<div class="dd" style="background:${d<=(r.diff||1)?"#7a9e7e":"#e8e0d5"}"></div>`).join("");
  return `<div class="rc" onclick="${lk?`openPrem()`:`openR(${r.id})`}">
    <div class="cimg">
      <img src="${esc(r.img||"")}" alt="${esc(r.title)}" class="${lk?"lk":""}" loading="lazy"
        onerror="this.src='https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600'"/>
      <div class="cbadge" style="background:${cc}e5">${CI[r.cat]||"🍽️"} ${r.cat}</div>
      <button class="favb" onclick="event.stopPropagation();togFav(${r.id},this)">${fv?"❤️":"🤍"}</button>
      <div class="tbadge">⏱ ${r.time} min</div>
      ${r.source?`<div class="sbadge">🌐 Sieć</div>`:""}
      ${lk?`<div class="lkov"><div style="font-size:30px">🔒</div><div style="color:#fff;font-weight:700;font-size:13px">Premium</div></div>`:""}
    </div>
    <div class="cbody">
      <div class="ctitle">${esc(r.title)}</div>
      <div class="cdesc">${esc(r.desc)}</div>
      ${mbar(r)}${mmini(r)}
      <div class="cfoot">
        <div class="ddots">${dd}<span class="dtxt">${DL[r.diff||1]}</span></div>
        <button class="bview">${lk?"🔓 Odblokuj":"Zobacz →"}</button>
      </div>
    </div>
  </div>`;
}

// ─── FILTER / RENDER ─────────────────────────────────────────────────────────
function filtered() {
  return DB.filter(r => {
    if (S.cat !== "wszystkie" && r.cat !== S.cat) return false;
    if (S.fil === "slone" || S.fil === "slodkie") return r.type === S.fil;
    if (S.fil !== "all") return r.tags.includes(S.fil);
    if (S.q) return r.title.toLowerCase().includes(S.q) || r.desc.toLowerCase().includes(S.q);
    return true;
  });
}

function render() {
  const f = filtered();
  const tp = Math.ceil(f.length / PER);
  if (S.page > tp) S.page = 1;
  const pg = f.slice((S.page-1)*PER, S.page*PER);
  document.getElementById("stitle").textContent = S.cat === "wszystkie" ? "Wszystkie przepisy" : (CATS.find(c=>c.k===S.cat)?.l||"");
  document.getElementById("scnt").textContent = `${f.length} przepisów`;
  const g = document.getElementById("rgrid"), em = document.getElementById("empty");
  if (pg.length) { g.innerHTML = pg.map(r=>cardH(r)).join(""); em.style.display="none"; }
  else { g.innerHTML=""; em.style.display="block"; }
  renderPages(tp);
}

function renderPages(tp) {
  const el = document.getElementById("pages");
  if (tp <= 1) { el.innerHTML=""; return; }
  let h = `<button class="pbtn" onclick="goPage(${Math.max(1,S.page-1)})">←</button>`;
  for (let i=0; i<Math.min(7,tp); i++) {
    let p = tp<=7 ? i+1 : (S.page>4 ? S.page-3+i : i+1);
    if (p<1||p>tp) continue;
    h += `<button class="pbtn${S.page===p?" on":""}" onclick="goPage(${p})">${p}</button>`;
  }
  h += `<button class="pbtn" onclick="goPage(${Math.min(tp,S.page+1)})">→</button>`;
  el.innerHTML = h;
}

function goPage(p) { S.page=p; render(); window.scrollTo(0,0); }

function renderCats() {
  document.getElementById("catbar").innerHTML = CATS.map(c=>
    `<button class="catbtn${S.cat===c.k?" on":""}" onclick="setCat('${c.k}')">${c.i} ${c.l}</button>`
  ).join("");
}

function renderFils() {
  const lk = !S.isPrem
    ? `<div class="plock">🔒 ${DB.filter(r=>r.premium).length} premium <button class="bunlock" onclick="openPrem()">Odblokuj</button></div>`
    : "";
  document.getElementById("fbar").innerHTML =
    `<span class="flbl">Filtr:</span>` +
    FILS.map(f=>`<button class="fbtn${S.fil===f.k?" on":""}" onclick="setFil('${f.k}')">${esc(f.l)}</button>`).join("") + lk;
}

function setCat(k) { S.cat=k; S.page=1; renderCats(); render(); }
function setFil(k) { S.fil=k; S.page=1; renderFils(); render(); }

document.getElementById("si").addEventListener("keydown", ev => { if (ev.key==="Enter") doSearch(); });
document.getElementById("si").addEventListener("input", ev => { S.q=ev.target.value.toLowerCase(); S.page=1; render(); });
function tryEx() { document.getElementById("si").value="zdrowe naleśniki fit"; doSearch(); }

// ─── AI SEARCH ───────────────────────────────────────────────────────────────
async function doSearch() {
  const q = document.getElementById("si").value.trim();
  if (!q) return;

  if (!API_KEY) {
    showToast("⚠️ Wpisz najpierw klucz API Anthropic na górze strony!");
    document.getElementById("apiKeyInput").focus();
    return;
  }

  const aip = document.getElementById("aip");
  aip.classList.add("open");
  document.getElementById("ibar").style.display = "none";
  document.getElementById("aititle").textContent = `AI szuka w internecie: „${q}"`;
  document.getElementById("aisub").textContent = "🔍 Przeszukuję przepisy.pl, kwestiasmaku.com i inne...";
  document.getElementById("aiload").classList.add("on");
  document.getElementById("aigrid").innerHTML = "";

  try {
    const recipes = await searchWeb(q);
    S.aiExtra = recipes;
    document.getElementById("aisub").textContent = `✅ Znaleziono ${recipes.length} przepisów z internetu`;
    document.getElementById("aigrid").innerHTML = recipes.map(r=>cardH(r)).join("");
  } catch(err) {
    document.getElementById("aisub").textContent = "⚠️ " + err.message;
    document.getElementById("aigrid").innerHTML =
      `<div style="padding:20px;color:#888;font-size:13px">
        Błąd: <b>${esc(err.message)}</b><br><br>
        Sprawdź czy klucz API jest poprawny.
      </div>`;
  }
  document.getElementById("aiload").classList.remove("on");
}

async function searchWeb(query) {
  const system = `Jesteś asystentem kulinarnym FitKuchnia. Użyj web_search żeby znaleźć PRAWDZIWE przepisy z internetu (kwestiasmaku.com, przepisy.pl, aniagotuje.pl itp).

Zwróć WYŁĄCZNIE JSON array (bez tekstu, bez markdown):
[{"title":"nazwa","cat":"obiad","type":"slone","time":30,"diff":1,"premium":false,"tags":["wegetarianskie"],"kcal":350,"protein":20,"carbs":30,"fat":12,"fiber":5,"sugar":4,"img":"URL","desc":"Opis 2 zdania.","ingredients":["200g składnik"],"steps":["Krok 1."],"source":"https://url"}]

Dla img użyj:
ciasto/deser: https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600
zupa: https://images.unsplash.com/photo-1547592180-85f173990554?w=600
mięso/ryba: https://images.unsplash.com/photo-1432139509613-5c4255815697?w=600
sałatka/bowl: https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600
śniadanie: https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600
naleśniki: https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600
makaron: https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600
inne: https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600

Zwróć 3-4 przepisy. TYLKO JSON ARRAY.`;

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "anthropic-version": "2023-06-01",
      "x-api-key": API_KEY,
      "anthropic-dangerous-direct-browser-access": "true"
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4000,
      system,
      tools: [{ type: "web_search_20250305", name: "web_search" }],
      messages: [{ role: "user", content: `Znajdź przepisy na: ${query}` }]
    })
  });

  if (!res.ok) {
    const t = await res.text().catch(()=>"");
    let msg = "HTTP " + res.status;
    try { msg = JSON.parse(t)?.error?.message || msg; } catch(x) {}
    throw new Error(msg);
  }

  const data = await res.json();
  const text = (data.content||[]).filter(b=>b.type==="text").map(b=>b.text).join("\n");
  if (!text.trim()) throw new Error("Brak odpowiedzi od AI");

  const clean = text.replace(/```json|```/gi,"").trim();
  const si = clean.indexOf("["), ei = clean.lastIndexOf("]");
  if (si===-1||ei===-1) throw new Error("Brak JSON w odpowiedzi");
  let parsed;
  try { parsed = JSON.parse(clean.slice(si,ei+1)); }
  catch(x) { throw new Error("Błąd parsowania JSON"); }
  if (!Array.isArray(parsed)||!parsed.length) throw new Error("Pusta lista");

  return parsed.map((r,i) => ({
    ...r,
    id: Date.now()+i,
    diff: Number(r.diff)||1,
    tags: Array.isArray(r.tags)?r.tags:[],
    ingredients: Array.isArray(r.ingredients)?r.ingredients:[],
    steps: Array.isArray(r.steps)?r.steps:[],
    img: r.img&&r.img.startsWith("http")?r.img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",
    source: r.source||""
  }));
}

function closeAip() {
  document.getElementById("aip").classList.remove("open");
  document.getElementById("ibar").style.display = "flex";
}

// ─── RECIPE MODAL ─────────────────────────────────────────────────────────────
function openR(id) {
  const r = [...DB,...S.aiExtra].find(x=>x.id===id);
  if (!r) return;
  document.getElementById("mimg").src = r.img||"";
  document.getElementById("mtitle").textContent = r.title;
  document.getElementById("mmeta").textContent = `⏱ ${r.time} min • ${DL[r.diff||1]}`;
  document.getElementById("mfull").innerHTML = [
    {l:"kcal",v:r.kcal||0,c:"#e55d3a"},{l:"Białko",v:`${r.protein||0}g`,c:"#e05252"},
    {l:"Węgle",v:`${r.carbs||0}g`,c:"#e0a030"},{l:"Tłuszcz",v:`${r.fat||0}g`,c:"#52b060"},
    {l:"Błonnik",v:`${r.fiber||0}g`,c:"#5db0c8"},{l:"Cukry",v:`${r.sugar||0}g`,c:"#c455b0"}
  ].map(m=>`<div class="mfc"><div style="font-family:monospace;font-size:12px;font-weight:700;color:${m.c}">${esc(String(m.v))}</div><div style="font-size:9px;color:#bbb;margin-top:1px">${m.l}</div></div>`).join("");
  document.getElementById("mdesc").textContent = r.desc||"";
  document.getElementById("ming").innerHTML = (r.ingredients||[]).map(x=>`<div class="ing"><span style="color:#7a9e7e">•</span>${esc(x)}</div>`).join("");
  document.getElementById("mstp").innerHTML = (r.steps||[]).map((s,i)=>`<div class="stp"><div class="snum">${i+1}</div><div style="font-size:13px;line-height:1.6;color:#444">${esc(s)}</div></div>`).join("");
  const src = document.getElementById("msrc");
  src.innerHTML = r.source ? `<div class="msrc">🌐 Źródło: <a href="${esc(r.source)}" target="_blank" rel="noreferrer">${esc(r.source)}</a></div>` : "";
  document.getElementById("mtags").innerHTML = (r.tags||[]).map(t=>`<span class="tag">#${esc(t)}</span>`).join("");
  document.getElementById("rmov").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeRM() { document.getElementById("rmov").classList.remove("open"); document.body.style.overflow=""; }

// ─── FAV ─────────────────────────────────────────────────────────────────────
function togFav(id,btn) { S.favs.has(id)?S.favs.delete(id):S.favs.add(id); btn.textContent=S.favs.has(id)?"❤️":"🤍"; }

// ─── PREMIUM MODAL ────────────────────────────────────────────────────────────
function openPrem() { renderPlans(); document.getElementById("pmov").classList.add("open"); document.body.style.overflow="hidden"; }
function closePM() { document.getElementById("pmov").classList.remove("open"); document.body.style.overflow=""; }

function renderPlans() {
  document.getElementById("pgrid").innerHTML = PLANS.map(p=>`
    <div class="pcard${p.best?" best":""}${S.selPlan===p.id?" selected":""}"
      style="border-color:${S.selPlan===p.id?p.c:"var(--border)"}" onclick="selPlan('${p.id}')">
      ${p.best?`<div class="pbest">NAJPOPULARNIEJSZY</div>`:""}
      <div style="font-size:22px;margin-bottom:4px">${p.i}</div>
      <div style="font-family:Georgia,serif;font-size:15px;font-weight:700;margin-bottom:3px">${p.n}</div>
      <div style="font-family:monospace;font-size:19px;font-weight:700;color:${p.c}">${p.p} zł</div>
      <div style="font-size:10px;color:#aaa;margin-bottom:10px">/${p.per}</div>
      <div style="border-top:1px solid #f0ebe4;padding-top:10px">
        ${p.f.map(f=>`<div style="font-size:11px;color:#666;margin-bottom:4px;display:flex;gap:5px"><span style="color:${p.c}">✓</span>${esc(f)}</div>`).join("")}
      </div>
    </div>`).join("");
  updBuy();
}

function selPlan(id) { S.selPlan=id; renderPlans(); }
function updBuy() { const p=PLANS.find(x=>x.id===S.selPlan); if(p) document.getElementById("bbuy").textContent=`Wybierz ${p.n} — ${p.p} zł/${p.per}`; }

function buy() {
  S.isPrem=true; closePM();
  const p=PLANS.find(x=>x.id===S.selPlan);
  showToast(`✅ ${p?.n} aktywowany! Dziękujemy!`);
  const pb=document.getElementById("premBtn"); pb.className="prem-act"; pb.textContent="✓ Premium"; pb.onclick=null;
  document.getElementById("ups").style.display="none";
  renderFils(); render();
}

// ─── TOAST ────────────────────────────────────────────────────────────────────
function showToast(msg) { const t=document.getElementById("toast"); t.textContent=msg; t.classList.add("show"); setTimeout(()=>t.classList.remove("show"),3200); }

// ─── ESC ──────────────────────────────────────────────────────────────────────
document.addEventListener("keydown", ev => { if(ev.key==="Escape"){closeRM();closePM();} });

// ─── INIT ─────────────────────────────────────────────────────────────────────
renderCats();
renderFils();
render();
async function searchWeb(query) {
  const system = `Jesteś ekspertem kulinarnym FitKuchnia. Twórz szczegółowe fit przepisy.

Zwróć WYŁĄCZNIE JSON array (bez tekstu, bez markdown):
[{"title":"nazwa","cat":"obiad","type":"slone","time":30,"diff":1,"premium":false,"tags":["wegetarianskie"],"kcal":350,"protein":20,"carbs":30,"fat":12,"fiber":5,"sugar":4,"img":"URL","desc":"Opis 2 zdania.","ingredients":["200g składnik"],"steps":["Krok 1."],"source":""}]

Dla img użyj:
ciasto/deser: https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600
zupa: https://images.unsplash.com/photo-1547592180-85f173990554?w=600
mięso/ryba: https://images.unsplash.com/photo-1432139509613-5c4255815697?w=600
sałatka/bowl: https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600
śniadanie: https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600
naleśniki: https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600
makaron: https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600
inne: https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600

Zwróć 4 przepisy. TYLKO JSON ARRAY.`;

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "anthropic-version": "2023-06-01",
      "x-api-key": API_KEY,
      "anthropic-dangerous-direct-browser-access": "true"
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 2000,
      system,
      messages: [{ role: "user", content: `Stwórz 4 fit przepisy na: ${query}` }]
    })
  });

  if (!res.ok) {
    const t = await res.text().catch(()=>"");
    let msg = "HTTP " + res.status;
    try { msg = JSON.parse(t)?.error?.message || msg; } catch(x) {}
    throw new Error(msg);
  }

  const data = await res.json();
  const text = (data.content||[]).filter(b=>b.type==="text").map(b=>b.text).join("\n");
  if (!text.trim()) throw new Error("Brak odpowiedzi od AI");

  const clean = text.replace(/```json|```/gi,"").trim();
  const si = clean.indexOf("["), ei = clean.lastIndexOf("]");
  if (si===-1||ei===-1) throw new Error("Brak JSON w odpowiedzi");
  let parsed;
  try { parsed = JSON.parse(clean.slice(si,ei+1)); }
  catch(x) { throw new Error("Błąd parsowania JSON"); }
  if (!Array.isArray(parsed)||!parsed.length) throw new Error("Pusta lista");

  return parsed.map((r,i) => ({
    ...r,
    id: Date.now()+i,
    diff: Number(r.diff)||1,
    tags: Array.isArray(r.tags)?r.tags:[],
    ingredients: Array.isArray(r.ingredients)?r.ingredients:[],
    steps: Array.isArray(r.steps)?r.steps:[],
    img: r.img&&r.img.startsWith("http")?r.img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",
    source: ""
  }));
}