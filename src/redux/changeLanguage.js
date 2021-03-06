import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
  name: 'lang',
  initialState: {
    value: 0,

    flag:"GB",
    home:"Home",
    serv:"Services",
    tech:"Technology",
    projects:"Projects",
    prices:"Prices",
    contact:"Contact",


    homeText:"Make your dreams come true",

    servicesHeadline:"Our Services",
    servicesText1:"Consultations for building and developing your profile on the Internet. We offer design and development services for your website, e-commerce stores, remodeling and modernization of older websites.",
    servicesText2:"Solutions for e-commerce sites for web sales. We offer integration with the most popular payment methods (PayPal and conventional payment types).",
    servicesText3:"Creating the best API (Application program interface) for your business. Make your business go to another level, stay up to date with the latest technologies. Creating an API tailored to your business: small, medium, professional business model.",
    servicesText4:"Development of full stack websites and e-commerce stores. With custom domain and ssl certificate. Integrate the database with the Log in and Sign up page with ssl certificate. Together to a solution in three steps: Planning, Design, Commissioning.",
 
    techText:"Keep up with the latest technologies its' up to you.",

    projectText:"Alone we can do so little, together we can do so much.",

    priceHeadline:"Production in three steps",
    priceText1:"Number of pages - up to 10 pages.Create CSS responsive sites, with contact form  Image gallery on each page Basic SEO optimization. Price: 150 $",
    priceText2:"Number of pages - up to 20 pages .Create CSS responsive sites with administration Upload system for images and documents Contact Form Online text editor Image gallery on each page Basic SEO optimization. Price: 250 $",
    priceText3:"Number of pages - up to 30 pages. Create CSS responsive sites with administration Upload system for images and documents Contact Form Online text editor Image gallery on each page Product catalog Unlimited number of categories Unlimited number of products Advanced SEO optimization. Price: 450 $",
    priceFooterText:"Opportunities don't happen, you create them.",

    contactHeadline:"Send us a message",
    contactMessage:"Messages can be related to general business inquiries and we will do our best to answer other types of inquiries as well. We are open to business proposals and we respect every idea.",
    contactNameLastname:"Name & Lastname",
    contactphone:"Phone"

  

  },
  reducers: {
    langSerb: state => {
      
      state.flag='RS'
      state.home ='Po??etna'
      state.serv='Usluge'
      state.tech='Tehnologije'
      state.projects ='Projekti'
      state.prices='Cene'
      state.contact='Kontakt'

      state.homeText='Ostvari svoje snove'

      state.servicesHeadline='Na??e Usluge'
      state.servicesText1='Konsultacije za izgradnju i razvoj Va??eg profila na internetu. Nudimo usluge dizajna i razvoja Va??ih internet stranica, e-commerce prodavnica, prepravke i modernizacija starijih internet stranica.'
      state.servicesText2='Re??enja za e-commerce sajtove za web prodaju. Mi nudimo integraciju sa najpopularnijim na??inima pla??anja (PayPal i konvecionalnu vrsta pla??anja).'
      state.servicesText3='Izrada najboljih API (Application program interface) za Va?? biznis. U??inite da Va?? biznis pre??e na drugi nivo, budite u toku sa najnovijim tehnologijama. Izrada API po meri Va??eg biznisa: mali, srednji, profesionalni biznis model.'
      state.servicesText4='Izrada full stack web sajtova i e-commerce prodavnica. Sa custom domain-om i ssl sertifikatom. Integrisanje data baze sa Log in i Sign up stranicom sa ssl sertifikatom. Zajedno do re??enja u tri koraka: Planiranje, Dizajn, Pu??tanje u rad.'

      state.techText="Budite u koraku sa vremenom i najnovijim tehnologijama. Izbor je na Vama."

      state.projectText="Sami mo??emo tako malo, zajedno mo??emo u??initi mnogo."

      state.priceHeadline="Proizvodnja u tri koraka"
      state.priceText1="Broj stranica - do 10 stranica. Kreirajte CSS responsive sajtove, sa kontakt formom Galerija slika na svakoj stranici Osnovna SEO optimizacija. Cena: 150 $"
      state.priceText2="Broj stranica - do 20 stranica .Kreirajte CSS responsive sajtove sa administracijom Sistem za otpremanje slika i dokumenata Kontakt obrazac Online ure??iva?? teksta Galerija slika na svakoj stranici Osnovna SEO optimizacija. Cena: 250 $"
      state.priceText3="Broj stranica - do 30 stranica. Kreirajte CSS responsive sajtove sa administracijom Sistem za otpremanje slika i dokumenata Kontakt obrazac Online editor teksta Galerija slika na svakoj stranici Katalog proizvoda Neograni??en broj kategorija Neograni??en broj proizvoda Napredna SEO optimizacija. Cena: 450 $"
      state.priceFooterText="Prilike se ne de??avaju, vi ih stvarate."

      state.contactHeadline="Po??aljite nam poruku"
      state.contactMessage="Poruke mogu biti vezane za generalne poslovne upite a mi ??emo se potruditi da odgovorimo i na druge vrste upita. Otvoreni smo za poslovne predloge i po??tujemo svaku ideju."
      state.contactNameLastname="Ime i Prezime"
      state.contactphone="Telefon"
    },
    langGer: state => {

      state.flag='DE'
      state.home ='Heim'
      state.serv='Dienstleistungen'
      state.tech='Technologie'
      state.projects ='Projekte'
      state.prices='Preise'
      state.contact='Kontakt'

      state.homeText='Machen Sie Ihre Tr??ume wahr'
      
      state.servicesHeadline='Unsere Dienstleistungen'
      state.servicesText1='Beratung zum Aufbau und zur Weiterentwicklung Ihres Profils im Internet. Wir bieten Design- und Entwicklungsdienste f??r Ihre Website, E-Commerce-Shops, Umbau und Modernisierung ??lterer Websites.'
      state.servicesText2='L??sungen f??r E-Commerce-Sites f??r Web-Verk??ufe. Wir bieten die Integration mit den g??ngigsten Zahlungsmethoden (PayPal und herk??mmliche Zahlungsarten).'
      state.servicesText3='Erstellung der besten API (Application Program Interface) f??r Ihr Unternehmen. Bringen Sie Ihr Unternehmen auf eine neue Ebene, bleiben Sie mit den neuesten Technologien auf dem Laufenden. Erstellen einer auf Ihr Unternehmen zugeschnittenen API: kleines, mittleres, professionelles Gesch??ftsmodell.'
      state.servicesText4='Entwicklung von Full-Stack-Websites und E-Commerce-Shops. Mit benutzerdefinierter Dom??ne und SSL-Zertifikat. Integrieren Sie die Datenbank mit der Seite Anmelden und Registrieren mit SSL-Zertifikat. Gemeinsam zur L??sung in drei Schritten: Planung, Konstruktion, Inbetriebnahme.'
      
      state.techText="Bleiben Sie mit den neuesten Technologien auf dem Laufenden, es liegt an Ihnen."

       state.projectText="Alleine k??nnen wir so wenig tun, gemeinsam k??nnen wir so viel erreichen."

       state.priceHeadline="Produktion in drei Schritten"
       state.priceText1="Anzahl der Seiten - bis zu 10 Seiten. Erstellen Sie CSS-responsive Websites mit Kontaktformular Bildergalerie auf jeder Seite Grundlegende SEO-Optimierung. Preis: 150 $"
       state.priceText2="Anzahl der Seiten - bis zu 20 Seiten. Erstellen Sie CSS-responsive Websites mit Verwaltung Upload-System f??r Bilder und Dokumente Kontaktformular Online-Texteditor Bildergalerie auf jeder Seite Grundlegende SEO-Optimierung. Preis: 250 $"
       state.priceText3="Anzahl der Seiten - bis zu 30 Seiten. Erstellen Sie CSS-responsive Websites mit Verwaltung Upload-System f??r Bilder und Dokumente Kontaktformular Online-Texteditor Bildergalerie auf jeder Seite Produktkatalog Unbegrenzte Anzahl von Kategorien Unbegrenzte Anzahl von Produkten Erweiterte SEO-Optimierung. Preis: 450 $"
       state.priceFooterText="Gelegenheiten passieren nicht, du schaffst sie."

       state.contactHeadline="Schick uns eine Nachricht"
       state.contactMessage="Nachrichten k??nnen sich auf allgemeine Gesch??ftsanfragen beziehen, und wir werden unser Bestes tun, um auch andere Arten von Anfragen zu beantworten. Wir sind offen f??r Gesch??ftsvorschl??ge und respektieren jede Idee."
       state.contactNameLastname="Name und Nachname"
       state.contactphone="Telefon"
    },

    langEng: state => {
      
      state.flag='GB'
      state.home ='Home'
      state.serv='Services'
      state.tech='Technology'
      state.projects ='Projects'
      state.prices='Prices'
      state.contact='Contact'
     
      state.homeText='Make your dreams come true'

      state.servicesHeadline='Our Services'
      state.servicesText1='Consultations for building and developing your profile on the Internet. We offer design and development services for your website, e-commerce stores, remodeling and modernization of older websites.'
      state.servicesText2='Solutions for e-commerce sites for web sales. We offer integration with the most popular payment methods (PayPal and conventional payment types).'
      state.servicesText3='Creating the best API (Application program interface) for your business. Make your business go to another level, stay up to date with the latest technologies. Creating an API tailored to your business: small, medium, professional business model.'
      state.servicesText4='Development of full stack websites and e-commerce stores. With custom domain and ssl certificate. Integrate the database with the Log in and Sign up page with ssl certificate. Together to a solution in three steps: Planning, Design, Commissioning.'

      state.techText="Keep up with the latest technologies its' up to you."

      state.projectText="Alone we can do so little, together we can do so much."

      state.priceHeadline="Production in three steps"
      state.priceText1="Number of pages - up to 10 pages.Create CSS responsive sites, with contact form  Image gallery on each page Basic SEO optimization. Price: 150 $"
      state.priceText2="Number of pages - up to 20 pages .Create CSS responsive sites with administration Upload system for images and documents Contact Form Online text editor Image gallery on each page Basic SEO optimization. Price: 250 $"
      state.priceText3="Number of pages - up to 30 pages. Create CSS responsive sites with administration Upload system for images and documents Contact Form Online text editor Image gallery on each page Product catalog Unlimited number of categories Unlimited number of products Advanced SEO optimization. Price: 450 $"
      state.priceFooterText="Opportunities don't happen, you create them."

      state.contactHeadline="Send us a message"
      state.contactMessage="Messages can be related to general business inquiries and we will do our best to answer other types of inquiries as well. We are open to business proposals and we respect every idea."
      state.contactNameLastname="Name & Lastname"
      state.contactphone="Phone"
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { langSerb, langGer,langEng, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer