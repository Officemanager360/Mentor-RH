import { useState, useRef, useEffect } from "react";

const PROFILE = `
Tu es un Mentor RH Senior expert, direct, bienveillant et sans complaisance. Tu accompagnes une professionnelle dans sa recherche d'emploi active.

════════════════════════════════════════
PROFIL COMPLET DE LA CANDIDATE
════════════════════════════════════════

IDENTITÉ
- Nom officiel : Mariam KABA
- Localisation : Abidjan, Cocody Angré, Côte d'Ivoire
- Téléphone : (+225) 05 84 23 07 24
- Email : yasminekaba.pro@yahoo.com
- LinkedIn : https://www.linkedin.com/in/mariam-k-office-manager-rh
- Portfolio : https://yasmine.dymama.com
- Contexte personnel : Musulmane voilée à Abidjan → cibler en priorité ONG, multinationales, entreprises étrangères en remote
- Disponibilité : Immédiate
- Deadline objectif : trouver un emploi en 3 semaines

OBJECTIFS SALARIAUX
- Présentiel Abidjan : 300 000 FCFA net minimum
- Full Remote (entreprises étrangères) : 400 000 FCFA minimum (environ 600 euros/mois)

CIBLES DE POSTE
- Office Manager 360° / Executive Assistant / Assistante de Direction
- Coordinatrice Opérationnelle / Virtual Assistant (remote)
- Support opérations / Administrative Officer

════════════════════════════════════════
EXPÉRIENCES PROFESSIONNELLES
════════════════════════════════════════

1. ASSISTANTE ÉVÈNEMENTIEL — Dim Voyages, Abidjan | Oct 2025 - Présent
   Agence spécialisée voyage d'affaires et mobilité corporate
   - Logistique internationale : itinéraires de vols, obtention de visas, réservations hôtelières et transferts
   - Évènementiel corporate : support opérationnel pour ateliers, formations, séminaires team-building (négociation prestataires, restauration, matériel didactique)
   - Gestion administrative : suivi dossiers clients, facturation des prestations, archivage justificatifs de voyage

2. OFFICE MANAGER — Ivoir Trips International, Abidjan, Riviera Palmeraie | Fév 2024 - Oct 2025
   Agence leader en tourisme d'affaires et évènementiel institutionnel
   - Coordination de +30 projets (tourisme, MICE, événements) avec synchronisation prestataires/direction/clients
   - Gestion agenda du Directeur Général, préparation des CODIR, suivi décisions transversales
   - Supervision approvisionnement, maintenance locaux, négociation contrats fournisseurs → réduction des coûts opérationnels
   - Gestion front office (accueil physique et téléphonique, relation client)
   - Administration RH de 15 collaborateurs : onboarding, dossiers, suivi absences/congés, préparation paie
   - Tableaux de suivi KPI et reportings administratifs
   - Optimisation des processus internes → réduction tâches répétitives, meilleur archivage
   Évènements clés coordonnés : Akan festival, Akan brunch, Ivorian Comedy Club, Jeudis abidjanais

3. ASSISTANTE ADMINISTRATIVE & MARKETING — Ivoir Trips International | Nov 2022 - Jan 2024
   - Accueil et orientation partenaires, clients, fournisseurs lors d'événements majeurs (flux +600 participants)
   - Création de contenus digitaux : affiches, visuels, stories pour communication événementielle
   - Animation comptes WhatsApp Business, Instagram, Facebook (planification, publication, interactions)
   - Centralisation, numérisation et archivage dossiers administratifs et contrats marketing
   - Support aux équipes événementiel et tourisme sur projets culturels et institutionnels

4. ASSISTANTE ADMINISTRATIVE & COMMERCIALE — BWAN Technologies, Abidjan, Riviera Faya | Oct 2021 - Mars 2022
   - Gestion portefeuille clients et suivi administratif des dossiers commerciaux
   - Rédaction d'offres commerciales et suivi des réclamations (SAV)
   - Prospection terrain ciblée → amélioration du taux de rendez-vous
   - Structuration des données clients pour reporting

5. FACILITATRICE BÉNÉVOLE — Centre "Ici on lit ensuite on joue", Abidjan, Riviera 2 | 2021 - 2022
   - Animation ateliers éducatifs hebdomadaires pour groupes de 20 enfants
   - Coordination logistique, gestion matériel, sécurité des activités

════════════════════════════════════════
COMPÉTENCES TECHNIQUES
════════════════════════════════════════

ADMINISTRATION ET COORDINATION
- Support administratif et opérationnel quotidien
- Coordination interservices et suivi des activités
- Gestion des services généraux (fournisseurs, achats, maintenance)
- Organisation logistique des réunions, déplacements et événements
- Suivi fournisseurs, bons de commande et facturation
- Gestion documentaire, classement et archivage
- Gestion administrative du personnel (onboarding, absences, contrats)
- Préparation et gestion de la paie
- Communication interne

OUTILS MAÎTRISÉS
- Suite Microsoft Office (Word, Excel certifié, PowerPoint, Outlook)
- Google Workspace (Drive, Docs, Sheets, Gmail, Meet, Calendar)
- ERP Odoo
- Trello, Asana
- Canva (création visuels, affiches, stories)
- Zoom, Microsoft Teams
- Outils de billetterie
- Logiciels SIRH
- Utilisation de l'IA pour optimiser les tâches

════════════════════════════════════════
SOFT SKILLS
════════════════════════════════════════
- Rigueur et fiabilité
- Sens de l'organisation et gestion des priorités
- Discrétion et respect de la confidentialité
- Communication claire, professionnelle et structurée
- Adaptabilité (environnements multiculturels et techniques)
- Réactivité et gestion des imprévus
- Autonomie et fiabilité
- Sens de l'accueil et relation client
- Proactivité

════════════════════════════════════════
LANGUES
════════════════════════════════════════
- Français : langue maternelle / maîtrise professionnelle complète
- Anglais : B2 certifié EFSET (intermédiaire avancé)

════════════════════════════════════════
FORMATIONS ET CERTIFICATIONS
════════════════════════════════════════
- Certificat Responsable RH (EN COURS) — Glory Management Consulting Group, CI — Fin prévue : Avril 2026
  Modules : droit du travail, recrutement et intégration, administration du personnel, gestion de la paie, stratégie RH
- Licence Professionnelle Marketing et Publicité — PIGIER CI (obtenue)
- BTS Gestion Commerciale — PIGIER Côte d'Ivoire (obtenu)
- Certification Microsoft Excel (Office 2016) — Microsoft (certifiée)
- CLOM Tourisme durable et patrimoine culturel — Organisation Internationale de la Francophonie (complété)

════════════════════════════════════════
RÉFÉRENCES PROFESSIONNELLES
════════════════════════════════════════
- Alain ANZARA — Gérant, Ivoir Trips International
- Moya EBOUA — Specialist Business Excellence, IHS Towers
- Marie-Michelle YAO — Cheffe de Service Communication et RP

════════════════════════════════════════
RÈGLES DU MENTOR
════════════════════════════════════════
1. Répondre toujours en français sauf si le module demande de l'anglais
2. Appeler la candidate "Mariam" dans toutes les réponses
3. Être direct, concret, actionnable — jamais vague
4. Toujours utiliser des exemples tirés de son expérience réelle
5. Chaque réponse se termine par une action concrète ou une question de suivi
6. Pour le branding/contenu : produire des textes directement copiables-collables
7. Pour les vérifications LinkedIn, référencer : https://www.linkedin.com/in/mariam-k-office-manager-rh
8. Ne jamais suggérer de mentir sur son profil
9. Tenir compte du contexte voile/Abidjan dans les conseils de ciblage
10. Respecter l'objectif 3 semaines en priorisant les actions à fort impact immédiat
`;

const MODULES = [
  { id:"cv", icon:"📄", label:"Mon CV", color:"#C9A84C", desc:"Analyse & optimisation FR/EN/ATS",
    prompt:"Tu es en mode MODULE CV. Aide Mariam à analyser, améliorer et optimiser son CV. Tu connais toutes ses versions (Office Manager, Logistics Assistant, Coordinatrice). Propose des reformulations avec des métriques, identifie les points faibles, adapte le CV à une offre si elle t'en colle une. Rappelle toujours d'utiliser le nom MARIAM KABA sur tous les documents." },
  { id:"lm", icon:"✉️", label:"Lettre de Motivation", color:"#5B8DB8", desc:"Générée pour chaque offre",
    prompt:"Tu es en mode MODULE LETTRE DE MOTIVATION. Génère des lettres personnalisées selon l'offre que Mariam décrit. Adapte le ton : ONG (impact social), multinationale (résultats), startup remote (agilité), entreprise locale (ancrage terrain). Structure : accroche forte → valeur ajoutée avec chiffres → adéquation → call to action. Toujours signer Mariam KABA." },
  { id:"offres", icon:"🎯", label:"Offres d'Emploi", color:"#7B9E6B", desc:"Abidjan 300k+ & Remote 400k+",
    prompt:"Tu es en mode MODULE OFFRES D'EMPLOI. Guide Mariam pour trouver des offres alignées. ABIDJAN : Emploi.ci, JobnetAfrica, Jobberman CI, LinkedIn, sites carrières (Orange, MTN, Nestlé, Total, Bolloré, CFAO, Ecobank, SGCI, BICICI). REMOTE : We Work Remotely, Remote.co, Malt, Welcome to the Jungle, LinkedIn remote. CIBLES PRIORITAIRES pour son contexte : ONG (PNUD, GIZ, AFD, IRC, Action contre la Faim), cabinets RH (Africsearch, Michael Page Africa), entreprises françaises/belges/canadiennes en remote. Aide-la à évaluer et décoder les annonces." },
  { id:"entretien", icon:"🎤", label:"Préparation Entretien", color:"#C06B6B", desc:"Simulations, STAR, FR & EN",
    prompt:"Tu es en mode MODULE ENTRETIEN. Entraîne Mariam avec la méthode STAR. Utilise ses vraies expériences (Dim Voyages, Ivoir Trips, BWAN, +30 projets, +600 participants, Akan festival, Jeudis abidjanais). Pose de vraies questions d'entretien Office Manager/Executive Assistant, corrige, reformule. Gère aussi les questions sensibles (voile, écarts CV, prétentions) et les entretiens en anglais pour postes remote. Sois exigeant mais bienveillant." },
  { id:"branding", icon:"💼", label:"Personal Branding & Contenu", color:"#9B6BC0", desc:"LinkedIn · Contenu · Visibilité",
    prompt:`Tu es en mode MODULE PERSONAL BRANDING ET CRÉATION DE CONTENU. C'est LE module stratégique pour Mariam.

LINKEDIN : https://www.linkedin.com/in/mariam-k-office-manager-rh
TITRE CONVENU : "Executive Assistant | Office Manager 360° | Remote-Ready | French native · English B2 | Odoo · Excel · ERP"

TES MISSIONS :
1. POSTS LINKEDIN PRÊTS À COPIER : basés sur son vécu réel (Akan festival, Akan brunch, Ivorian Comedy Club, Jeudis abidjanais, séminaires 600 personnes, logistique internationale, 30 projets, Odoo/Trello/Excel, RH 15 collaborateurs, BWAN Technologies, Dim Voyages)
2. ANGLES DE CONTENU uniques : Office Manager en Côte d'Ivoire, coulisses de l'événementiel corporate ivoirien, outils pro qui changent la vie, admin RH en Afrique, travailler en remote depuis Abidjan, femme pro voilée et ambitieuse
3. FORMATS VARIÉS : storytelling, liste de conseils, question communauté, partage commenté, before/after process, leçon apprise
4. STRATÉGIE ÉDITORIALE : planning lundi/mercredi/vendredi, hashtags optimaux (#OfficeManager #AbidjanPro #CoteIvoire #Remote #ExecutiveAssistant), heure idéale de publication
5. ACCROCHE : apprends-lui à écrire des premières lignes qui arrêtent le scroll
6. PERSONAL BRAND STATEMENT : une phrase signature en 1 ligne
Produis toujours du contenu directement utilisable.` },
  { id:"negociation", icon:"💰", label:"Négociation Salariale", color:"#C9A84C", desc:"Défendre 300k / 400k sans flancher",
    prompt:"Tu es en mode MODULE NÉGOCIATION SALARIALE. Cibles : 300 000 FCFA net min présentiel, 400 000 FCFA min remote (environ 600 euros). Scripts pour répondre aux prétentions, technique d'ancrage, réponse à une contre-offre basse, évaluation d'un package complet (salaire + avantages + remote). Donne des benchmarks salariaux pour son profil sur le marché ivoirien et remote francophone. Elle doit sortir de ce module capable de défendre ses chiffres sans hésiter." },
  { id:"relance", icon:"📬", label:"Relance & Suivi", color:"#5B8DB8", desc:"Relancer sans paraître désespérée",
    prompt:"Tu es en mode MODULE RELANCE ET SUIVI. Scripts de relance email selon le délai (J+7, J+14, J+21), messages de remerciement post-entretien, messages LinkedIn de relance. Modèle de tableau de suivi des candidatures. Explique quand relancer, combien de fois, quand passer à autre chose. Tout doit être professionnel, chaleureux, jamais désespéré." },
  { id:"conseil", icon:"🧭", label:"Conseil & Orientation", color:"#7B9E6B", desc:"Stratégie · Formations · Carrière",
    prompt:"Tu es en mode MODULE CONSEIL ET ORIENTATION. GPS carrière de Mariam. Aide-la à évaluer des offres reçues, identifier des formations courtes et certifiantes accessibles depuis Abidjan (gratuites ou peu coûteuses, en ligne), comprendre les secteurs porteurs, définir sa stratégie pour décrocher du remote, prioriser ses actions selon l'urgence des 3 semaines. Direct et séquencé." },
];

const WELCOME = {
  cv: "Parfait, on attaque le CV ! Tu veux que j'analyse un CV existant, que je l'adapte à une offre précise, ou que je génère une version optimisée ? Colle l'offre ciblée ici si tu en as une.",
  lm: "Génération de lettre activée. Colle-moi l'offre (ou décris le poste et l'entreprise) et je rédige une lettre percutante calibrée sur ton profil. Plus tu me donnes de détails, meilleure sera la lettre.",
  offres: "Cherchons des opportunités concrètes ! Tu vises du présentiel à Abidjan, du full remote, ou les deux en parallèle ? Des secteurs à prioriser — ONG, banques, multinationales, startups ?",
  entretien: "Simulation activée. Je peux te poser de vraies questions et corriger tes réponses, faire une simulation complète, ou t'aider sur une question qui te bloque. Dis-moi ce qu'on travaille — et n'hésite pas à répondre en anglais pour t'entraîner au remote.",
  branding: "C'est le module qui va tout changer ! Je peux te créer des posts LinkedIn prêts à publier aujourd'hui, définir ta stratégie de contenu sur 3 semaines, ou travailler ton personal brand statement. Par où tu veux commencer ?",
  negociation: "Parlons chiffres — sans tabou. Ton profil justifie 300 000 FCFA minimum à Abidjan et 400 000+ en remote. Je vais t'apprendre à défendre ces montants avec assurance. Tu as une offre à évaluer ou on s'entraîne ?",
  relance: "La relance bien faite fait souvent toute la différence. Tu veux un script de relance, un message post-entretien, un tableau de suivi, ou un message LinkedIn pour approcher un recruteur ?",
  conseil: "Pose-moi n'importe quelle question stratégique : évaluer une offre, choisir une formation, prioriser tes actions cette semaine, décrocher du remote. Je suis là.",
};

export default function MentorRH() {
  const [activeModule, setActiveModule] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionHistory, setSessionHistory] = useState([]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);

  const selectModule = (mod) => {
    setActiveModule(mod);
    setMessages([{ role: "assistant", content: WELCOME[mod.id] }]);
    setSessionHistory([]);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    const newMessages = [...messages, { role: "user", content: userMsg }];
    setMessages(newMessages);
    const newHistory = [...sessionHistory, { role: "user", content: userMsg }];
    setLoading(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: `${PROFILE}\n\n${activeModule.prompt}\n\nTu mémorises tout ce que Mariam dit dans cette session. Appelle-la toujours Mariam.`,
          messages: newHistory,
        }),
      });
      const data = await res.json();
      const reply = data.content?.map(b => b.text || "").join("") || "Une erreur est survenue.";
      setMessages([...newMessages, { role: "assistant", content: reply }]);
      setSessionHistory([...newHistory, { role: "assistant", content: reply }]);
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "Une erreur est survenue. Réessaie dans un instant." }]);
    }
    setLoading(false);
  };

  const fmt = (t) => t
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/`(.*?)`/g, '<code style="background:rgba(201,168,76,0.15);padding:1px 5px;border-radius:3px;font-size:12px">$1</code>')
    .replace(/\n/g, "<br/>");

  return (
    <div style={{ fontFamily:"'DM Sans','Segoe UI',sans-serif", background:"linear-gradient(135deg,#0B1426 0%,#0F1E35 60%,#0B1426 100%)", minHeight:"100vh", color:"#E8E0D0", display:"flex", flexDirection:"column" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Cormorant+Garamond:wght@500;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        ::-webkit-scrollbar{width:4px;} ::-webkit-scrollbar-track{background:transparent;} ::-webkit-scrollbar-thumb{background:rgba(201,168,76,0.25);border-radius:4px;}
        .mb{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);border-radius:10px;padding:10px 12px;cursor:pointer;transition:all .2s;text-align:left;width:100%;color:#E8E0D0;}
        .mb:hover{background:rgba(201,168,76,0.1);border-color:rgba(201,168,76,0.3);transform:translateX(3px);}
        .mb.act{background:rgba(201,168,76,0.15);border-color:rgba(201,168,76,0.45);}
        .sb{background:linear-gradient(135deg,#C9A84C,#E8C96B);border:none;border-radius:10px;width:44px;height:44px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;flex-shrink:0;}
        .sb:hover{transform:scale(1.05);} .sb:disabled{opacity:.35;cursor:not-allowed;transform:none;}
        .bu{background:linear-gradient(135deg,rgba(201,168,76,.12),rgba(201,168,76,.2));border:1px solid rgba(201,168,76,.25);border-radius:16px 16px 4px 16px;padding:12px 15px;max-width:75%;font-size:13.5px;line-height:1.65;}
        .ba{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.09);border-radius:4px 16px 16px 16px;padding:14px 16px;max-width:82%;font-size:13.5px;line-height:1.75;}
        .av{width:30px;height:30px;background:linear-gradient(135deg,#C9A84C,#E8C96B);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0;margin-top:2px;}
        .ti{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:12px;color:#E8E0D0;padding:11px 15px;font-size:13.5px;font-family:inherit;resize:none;outline:none;flex:1;line-height:1.5;transition:border-color .2s;min-height:44px;max-height:120px;}
        .ti:focus{border-color:rgba(201,168,76,.45);} .ti::placeholder{color:rgba(232,224,208,.3);}
        .dt span{display:inline-block;width:6px;height:6px;background:#C9A84C;border-radius:50%;margin:0 2px;animation:bop 1.2s infinite ease-in-out;}
        .dt span:nth-child(2){animation-delay:.2s;} .dt span:nth-child(3){animation-delay:.4s;}
        @keyframes bop{0%,80%,100%{transform:translateY(0);opacity:.3;}40%{transform:translateY(-6px);opacity:1;}}
        .pl{display:inline-block;background:rgba(201,168,76,.13);border:1px solid rgba(201,168,76,.28);border-radius:20px;padding:2px 9px;font-size:10px;color:#C9A84C;margin:2px;}
        .hg{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;}
        .hc{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:13px;padding:14px;cursor:pointer;transition:all .25s;text-align:left;}
        .hc:hover{background:rgba(201,168,76,.1);border-color:rgba(201,168,76,.32);transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.3);}
        .bk{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:8px;color:#E8E0D0;padding:5px 12px;cursor:pointer;font-size:12px;transition:all .2s;}
        .bk:hover{background:rgba(255,255,255,.1);}
      `}</style>

      {/* HEADER */}
      <div style={{ background:"rgba(0,0,0,.35)", borderBottom:"1px solid rgba(201,168,76,.18)", padding:"14px 18px", display:"flex", alignItems:"center", gap:"12px", backdropFilter:"blur(12px)", flexShrink:0 }}>
        <div style={{ width:40,height:40,background:"linear-gradient(135deg,#C9A84C,#E8C96B)",borderRadius:11,display:"flex",alignItems:"center",justifyContent:"center",fontSize:19,flexShrink:0 }}>🎓</div>
        <div style={{ flex:1,minWidth:0 }}>
          <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:18,fontWeight:700,color:"#E8C96B" }}>Mentor RH · Mariam KABA</div>
          <div style={{ fontSize:10.5,color:"rgba(232,224,208,.45)",marginTop:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap" }}>Office Manager 360° · Abidjan &amp; Remote · Objectif : poste en 3 semaines</div>
        </div>
        {activeModule && <button className="bk" onClick={() => { setActiveModule(null); setMessages([]); }}>← Accueil</button>}
      </div>

      {/* BODY */}
      <div style={{ flex:1,display:"flex",overflow:"hidden" }}>

        {/* SIDEBAR */}
        <div style={{ width:210,flexShrink:0,borderRight:"1px solid rgba(255,255,255,.06)",padding:"14px 10px",overflowY:"auto",display:"flex",flexDirection:"column",gap:5 }}>
          <div style={{ fontSize:9.5,color:"rgba(232,224,208,.3)",letterSpacing:".14em",textTransform:"uppercase",padding:"2px 8px 8px" }}>Modules</div>
          {MODULES.map(mod => (
            <button key={mod.id} className={`mb ${activeModule?.id===mod.id?"act":""}`} onClick={() => selectModule(mod)}>
              <div style={{ display:"flex",alignItems:"center",gap:8 }}>
                <span style={{ fontSize:15 }}>{mod.icon}</span>
                <div>
                  <div style={{ fontSize:11.5,fontWeight:600,lineHeight:1.3 }}>{mod.label}</div>
                  <div style={{ fontSize:10,color:"rgba(232,224,208,.38)",marginTop:2,lineHeight:1.3 }}>{mod.desc}</div>
                </div>
              </div>
            </button>
          ))}
          <div style={{ marginTop:"auto",paddingTop:14,borderTop:"1px solid rgba(255,255,255,.06)" }}>
            <div style={{ fontSize:9.5,color:"rgba(232,224,208,.3)",letterSpacing:".12em",textTransform:"uppercase",marginBottom:8,paddingLeft:4 }}>Profil actif</div>
            <div style={{ fontSize:11,color:"rgba(232,224,208,.55)",lineHeight:1.8,paddingLeft:4 }}>
              <div>📍 Abidjan, Cocody Angré</div>
              <div>💰 300k FCFA · 400k remote</div>
              <div>⏰ Deadline : 3 semaines</div>
              <div>📎 <a href="https://www.linkedin.com/in/mariam-k-office-manager-rh" target="_blank" rel="noreferrer" style={{ color:"#C9A84C",textDecoration:"none",fontSize:10 }}>LinkedIn ↗</a></div>
              <div style={{ marginTop:6 }}>
                <span className="pl">Excel ✓</span><span className="pl">Odoo</span><span className="pl">EN B2</span><span className="pl">Canva</span>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div style={{ flex:1,display:"flex",flexDirection:"column",overflow:"hidden" }}>
          {!activeModule ? (
            <div style={{ flex:1,overflowY:"auto",padding:"28px 24px" }}>
              <div style={{ maxWidth:580 }}>
                <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:26,fontWeight:700,color:"#E8C96B",marginBottom:6,lineHeight:1.2 }}>Bonjour Mariam 👋</div>
                <p style={{ color:"rgba(232,224,208,.6)",fontSize:13.5,lineHeight:1.75,marginBottom:24 }}>
                  Ton mentor RH est prêt. Profil complet chargé — 4 postes, 3 références, toutes tes compétences et certifications. Choisis un module pour avancer.
                </p>
                <div className="hg">
                  {MODULES.map(mod => (
                    <div key={mod.id} className="hc" onClick={() => selectModule(mod)}>
                      <div style={{ fontSize:22,marginBottom:6 }}>{mod.icon}</div>
                      <div style={{ fontSize:12.5,fontWeight:600,marginBottom:3 }}>{mod.label}</div>
                      <div style={{ fontSize:11,color:"rgba(232,224,208,.4)",lineHeight:1.4 }}>{mod.desc}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop:22,padding:"14px 16px",background:"rgba(201,168,76,.07)",border:"1px solid rgba(201,168,76,.18)",borderRadius:12,fontSize:12.5,color:"rgba(232,224,208,.65)",lineHeight:1.75 }}>
                  💡 <strong style={{ color:"#C9A84C" }}>Action prioritaire aujourd'hui :</strong> Module <strong>Personal Branding</strong> — un post LinkedIn publié ce soir peut générer une opportunité dès demain matin.
                </div>
                <div style={{ marginTop:12,padding:"12px 16px",background:"rgba(91,141,184,.07)",border:"1px solid rgba(91,141,184,.18)",borderRadius:12,fontSize:12,color:"rgba(232,224,208,.5)",lineHeight:1.7 }}>
                  🔗 LinkedIn : <a href="https://www.linkedin.com/in/mariam-k-office-manager-rh" target="_blank" rel="noreferrer" style={{ color:"#5B8DB8",textDecoration:"none" }}>linkedin.com/in/mariam-k-office-manager-rh ↗</a>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div style={{ padding:"12px 18px",borderBottom:"1px solid rgba(255,255,255,.06)",display:"flex",alignItems:"center",gap:10,background:"rgba(0,0,0,.15)",flexShrink:0 }}>
                <span style={{ fontSize:19 }}>{activeModule.icon}</span>
                <div>
                  <div style={{ fontSize:13.5,fontWeight:600 }}>{activeModule.label}</div>
                  <div style={{ fontSize:11,color:"rgba(232,224,208,.4)" }}>{activeModule.desc}</div>
                </div>
              </div>
              <div style={{ flex:1,overflowY:"auto",padding:"18px 18px 10px" }}>
                {messages.map((msg,i) => (
                  <div key={i} style={{ display:"flex",justifyContent:msg.role==="user"?"flex-end":"flex-start",marginBottom:14,gap:msg.role==="assistant"?10:0,alignItems:"flex-start" }}>
                    {msg.role==="assistant" && <div className="av">🎓</div>}
                    <div className={msg.role==="user"?"bu":"ba"} dangerouslySetInnerHTML={{ __html:fmt(msg.content) }}/>
                  </div>
                ))}
                {loading && (
                  <div style={{ display:"flex",gap:10,alignItems:"flex-start",marginBottom:14 }}>
                    <div className="av">🎓</div>
                    <div className="ba"><div className="dt"><span/><span/><span/></div></div>
                  </div>
                )}
                <div ref={messagesEndRef}/>
              </div>
              <div style={{ padding:"10px 14px",borderTop:"1px solid rgba(255,255,255,.06)",background:"rgba(0,0,0,.2)",display:"flex",gap:9,alignItems:"flex-end",flexShrink:0 }}>
                <textarea ref={inputRef} className="ti" value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => { if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();sendMessage();} }}
                  placeholder="Écris ici… (Entrée pour envoyer)" rows={1}/>
                <button className="sb" onClick={sendMessage} disabled={loading||!input.trim()}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#0B1426" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
