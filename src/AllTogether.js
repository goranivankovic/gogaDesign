
import './App.css';

import React, { Component } from 'react'

import {Container,Row,Col,DropdownButton,Dropdown,Form,Button}from 'react-bootstrap'
import Anime from 'react-anime'
import {Link} from 'react-scroll'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Media from 'react-media'
import emailjs from 'emailjs-com'





import{BsCodeSlash} from 'react-icons/bs'
import {FiHexagon,FiShoppingCart} from 'react-icons/fi'
import{HiOutlineHome}from 'react-icons/hi'
import{FaHtml5,FaCss3,FaReact,FaEuroSign}from 'react-icons/fa'
import{SiJavascript,SiBootstrap}from 'react-icons/si'
import{DiNodejs,DiMongodb,DiGithubAlt} from 'react-icons/di'
import {ImCross} from 'react-icons/im'
import {VscThreeBars} from 'react-icons/vsc'
import{AiFillPhone,AiFillLinkedin,AiFillGithub,AiOutlineGoogle} from 'react-icons/ai'



import ReactCountryFlag from "react-country-flag"
import laptop from './images/laptop.jpg'
import stadium from './images/stadum.jpg'
import fashion from './images/fashion.jpg'
import coding from './images/coding.jpg'
import weather from './images/weather.jpeg'
import movies from './images/movies.jpeg'
import covid from './images/covid.jpeg'
import restoran from './images/restoran.jpeg'
import body from './images/body.jpeg'
import gmi from './images/gmi.jpg'







import navicStyles from './styles/Navic.module.css'
import imageStyles from './styles/Image.module.css'
import ukusoStyles from './styles/UkosoDiv.module.css'
import razvojStyles from './styles/Tehnlogije.module.css'
import projekatStyles from './styles/Projects.module.css'
import cenaStyles from './styles/Cena.module.css'
import kontatStyles from './styles/Kontakt.module.css'
import footerStyles from './styles/Footer.module.css'




export default class AllTogether extends Component {
  constructor(){
    super()
    this.state={
        laz:true,
        navic1:'',
        navic2:'',
        navic3:'',
        navic4:'',
        navic5:'',
        navic6:'',
        ostvariSvojeSnove:'',
        uslugeNaslov:'',
        uslugeWeb:'',
        uslugeEcomm:'',
        uslugeApi:'',
        uslugeFull:'',
        tehnolgijeNaslov:'',
        tehnologije1:<FaHtml5  className={razvojStyles.slikeRazvoj}/>,
        tehnologije2:<FaCss3 className={razvojStyles.slikeRazvoj}/>,
        tehnologije3:<SiJavascript className={razvojStyles.slikeRazvoj}/>,
        tehnologije4:<SiBootstrap className={razvojStyles.slikeRazvoj}/>,
        tehnologije5:<FaReact className={razvojStyles.slikeRazvoj}/>,
        tehnologije6:<DiNodejs className={razvojStyles.slikeRazvoj}/>,
        tehnologije7:<DiMongodb className={razvojStyles.slikeRazvoj} />,
        tehnologije8:<DiGithubAlt className={razvojStyles.slikeRazvoj} />,
        tehnolgijeDonjText:'',
        projektiNaslov:'',
        tehnlogijeIzradaNaslov:'',
        tehnologijeIzrada1:'',
        tehnologijeIzrada2:'',
        tehnologijeIzrada3:'',
        tehnologijeCena1:'',
        konataktNaslov:'',
        nameLastname:'',  
        phoneNumber:'', 
        emailAdressa:"",  
        message:'',
        messageText:'',
        kontaktText:'',

        formIme:'',
        formTelephone:'',
        formEmail:'',
        formMessage:'',
    

    







    
    }
    this.englishLang=this.englishLang.bind(this)
    this.serbianLang=this.serbianLang.bind(this)

    this.skupiDiv=this.skupiDiv.bind(this)
    this.povecajDiv=this.povecajDiv.bind(this)


    this.sendEmailAndMessage=this.sendEmailAndMessage.bind(this)
 



}
componentDidMount(){
    this.setState({
        navic1:'Početna',
        navic2:'Tehnologije',
        navic3:'Projekti',
        navic4:'Cеnе',
        navic5:'Kontakt',
        laz:false,
        ostvariSvojeSnove:'Ostvari svoje snove',
        navic6:  <ReactCountryFlag countryCode="RS" svg />,
        uslugeNaslov:'Naše Usluge',
        uslugeWeb:"Konsultacije za izgradnju i razvoj Vašeg profila na internetu. Nudimo usluge dizajna i razvoja Vaših internet stranica, e-commerce prodavnica, prepravke i modernizacija starijih internet stranica.",
        uslugeEcomm:'Rešenja za e-commerce sajtove za web prodaju. Mi nudimo integraciju sa najpopularnijim načinima plaćanja (PayPal i konvecionalnu vrsta plaćanja).',
        uslugeApi:'Izrada najboljih API (Application program interface) za Vaš biznis. Učinite da Vaš biznis pređe na drugi nivo, budite u toku sa najnovijim tehnologijama. Izrada API po meri Vašeg biznisa: mali, srednji, profesionalni biznis model.',
        uslugeFull:'Izrada full stack web sajtova i e-commerce prodavnica. Sa custom domain-om i ssl sertifikatom. Integrisanje data baze sa Log in i Sign up stranicom sa ssl sertifikatom. Zajedno do rešenja u tri koraka: Planiranje, Dizajn, Puštanje u rad.',
        tehnolgijeNaslov:'Tehnologije',
        tehnolgijeDonjText:'Budite u koraku sa vremenom i najnovijim tehnologijama. Izbor je na Vama.',
        projektiNaslov:'Projekti',






        tehnlogijeIzradaNaslov:'Proizvodnja u tri koraka:',
        tehnologijeIzrada1:'Broj stranica - do 10 stranica CSS responsive originalan dizajn Administratorski deo sajta Upload sistem za slike i dokumenta Kontakt Forma Online text editor Galerija slika na svakoj stranici Osnovna SEO optimizacija.',
        tehnologijeIzrada2:'Broj stranica - do 20 stranica CSS responsive originalan dizajn Administratorski deo sajta Upload sistem za slike i dokumenta Kontakt Forma Online text editor Galerija slika na svakoj stranici Osnovna SEO optimizacija.',
        tehnologijeIzrada3:'Broj stranica - do 30 stranica CSS responsive originalan dizajn Administratorski deo sajta Upload sistem za slike i dokumenta Kontakt Forma Online text editor Galerija slika na svakoj stranici Katalog proizvoda Neograničen broj kategorija Neograničen broj proizvoda Napredna SEO optimizacija.',
        tehnologijeCena1:"Cena",


        konataktNaslov:'Pošaljite nam poruku',
        nameLastname:'Ime i prezime',
        phoneNumber:'Telefon', 
        emailAdressa:"E-mail",
        message:'Poruka',
        messageText:'Ostavite komentar ovde',
        kontaktText:'Poruke mogu biti vezane za generalne poslovne upite a mi ćemo se potruditi da odgovorimo i na druge vrste upita. Otvoreni smo za poslovne predloge i poštujemo svaku ideju. ',

    })


}
serbianLang(){
    this.setState({
        navic1:'Početna',
        navic2:'Tehnologije',
        navic3:'Projekti',
        navic4:'Cеnе',
        navic5:'Kontakt',
        ostvariSvojeSnove:'Ostvari svoje snove',
        navic6:<ReactCountryFlag countryCode="RS" svg />,
        uslugeNaslov:'Naše Usluge',
        uslugeWeb:"Konsultacije za izgradnju i razvoj Vašeg profila na internetu. Nudimo usluge dizajna i razvoja Vaših internet stranica, e-commerce prodavnica, prepravke i modernizacija starijih internet stranica.",
        uslugeEcomm:'Rešenja za e-commerce sajtove za web prodaju. Mi nudimo integraciju sa najpopularnijim načinima plaćanja (PayPal i konvecionalnu vrsta plaćanja).',
        uslugeApi:'Izrada najboljih API (Application program interface) za Vaš biznis. Učinite da Vaš biznis pređe na drugi nivo, budite u toku sa najnovijim tehnologijama. Izrada API po meri Vašeg biznisa: mali, srednji, profesionalni biznis model.',
        uslugeFull:'Izrada full stack web sajtova i e-commerce prodavnica. Sa custom domain-om i ssl sertifikatom. Integrisanje data baze sa Log in i Sign up stranicom sa ssl sertifikatom. Zajedno do rešenja u tri koraka: Planiranje, Dizajn, Puštanje u rad.',
        tehnolgijeNaslov:'Tehnlogije',
        tehnolgijeDonjText:'Budite u koraku sa vremenom i najnovijim tehnologijama. Izbor je na Vama.',
        projektiNaslov:'Projekti',






        tehnlogijeIzradaNaslov:'Proizvodnja u tri koraka:',
        tehnologijeIzrada1:'Broj stranica - do 10 stranica CSS responsive originalan dizajn Administratorski deo sajta Upload sistem za slike i dokumenta Kontakt Forma Online text editor Galerija slika na svakoj stranici Osnovna SEO optimizacija.',
        tehnologijeIzrada2:'Broj stranica - do 20 stranica CSS responsive originalan dizajn Administratorski deo sajta Upload sistem za slike i dokumenta Kontakt Forma Online text editor Galerija slika na svakoj stranici Osnovna SEO optimizacija.',
        tehnologijeIzrada3:'Broj stranica - do 30 stranica CSS responsive originalan dizajn Administratorski deo sajta Upload sistem za slike i dokumenta Kontakt Forma Online text editor Galerija slika na svakoj stranici Katalog proizvoda Neograničen broj kategorija Neograničen broj proizvoda Napredna SEO optimizacija.',
        tehnologijeCena1:"Cena",
        konataktNaslov:'Pošaljite nam poruku',
        nameLastname:'Ime i prezime',
        phoneNumber:'Telefon', 
        emailAdressa:"E-mail",
        message:'Poruka',
        messageText:'Ostavite komentar ovde',
        kontaktText:'Poruke mogu biti vezane za generalne poslovne upite a mi ćemo se potruditi da odgovorimo i na druge vrste upita. Otvoreni smo za poslovne predloge i poštujemo svaku ideju.',

    })
    let hex=document.querySelector('.hex')
    hex.style.transition='2200ms'
    hex.style.transform='rotate(-360deg)'

}


englishLang(){
    this.setState({
        navic1:'Home',
        navic2:'Technologies',
        navic3:'Projects',
        navic4:'Pricing',
        navic5:'Contact',
        ostvariSvojeSnove:'Make your dreams come true',
        navic6:<ReactCountryFlag countryCode="GB" svg />,
        uslugeNaslov:'Our Services',
        uslugeWeb:'Consultations for building and developing your profile on the Internet. We offer design and development services for your website, e-commerce stores, remodeling and modernization of older websites.',
        uslugeEcomm:'Solutions for e-commerce sites for web sales. We offer integration with the most popular payment methods (PayPal and conventional payment types).',
        uslugeApi:'Creating the best API (Application program interface) for your business. Make your business go to another level, stay up to date with the latest technologies. Creating an API tailored to your business: small, medium, professional business model.',
        uslugeFull:'Development of full stack websites and e-commerce stores. With custom domain and ssl certificate. Integrate the database with the Log in and Sign up page with ssl certificate. Together to a solution in three steps: Planning, Design, Commissioning.',
        tehnolgijeNaslov:'Technologies',
        tehnolgijeDonjText:"Keep up with the latest technologies its' up to you.",
        projektiNaslov:'Projects',






        tehnlogijeIzradaNaslov:'Production in three steps:',
        tehnologijeIzrada1:'Number of pages - up to 10 pages CSS responsive original design Site administration Upload system for images and documents Contact Form Online text editor Image gallery on each page Basic SEO optimization.',
        tehnologijeIzrada2:'Number of pages - up to 20 pages CSS responsive original design Site administration Upload system for images and documents Contact Form Online text editor Image gallery on each page Basic SEO optimization.',
       tehnologijeIzrada3:'Number of pages - up to 30 pages CSS responsive original design Site administration Upload system for images and documents Contact Form Online text editor Image gallery on each page Product catalog Unlimited number of categories Unlimited number of products Advanced SEO optimization.',
        tehnologijeCena1:"Price",
        konataktNaslov:'Send us a study',
        nameLastname:'Name & lastname',
        phoneNumber:'Phone', 
        emailAdressa:"E-mail",
        message:'Message',
        messageText:'Leave a comment here',
        kontaktText:'Messages can be related to general business inquiries and we will do our best to answer other types of inquiries as well. We are open to business proposals and we respect every idea.'

    })
    let hex=document.querySelector('.hex')
    hex.style.transition='2200ms'
    hex.style.transform='rotate(360deg)'


}

skupiDiv(a){
    a.target.style.transition='1200ms'
    a.target.style.transform='scale(0.95)'
}
povecajDiv(b){
    b.target.style.transition='600ms'
    b.target.style.transform='scale(1)'

}

sendEmailAndMessage(p){
  p.preventDefault();

  

  emailjs.sendForm('gmail', 'template_vs5t6sd',p.target,'user_CUPedB8OkkfuUfSRyzgAo')
  .then((result) => {
    console.log(result.text);
  }, (error) => {
    console.log(error.text);
  });
  p.target.reset()

}





render() {
    function scrollFunction(){
        let navicDiv=document.querySelector('.navic')
        if (window.scrollY >= 80) {
            navicDiv.style.backgroundColor='white'
            navicDiv.style.borderBottomLeftRadius='10px'
            navicDiv.style.borderBottomRightRadius='10px'
           
            
        }else{
      
            navicDiv.style.backgroundColor='transparent'

        }
 
    }

    if (window.matchMedia("(max-width: 768px)").matches) {
      console.log(' The viewport is less than, or equal to, 700 pixels wide');  
      } else {
       
             window.onscroll = function() {scrollFunction()}; 
       
        
       
      }


    
    

    AOS.init();
    return (
     <div> 

<Media query={{ maxWidth: 768 }}>
                    {matches =>
                      matches ? (
                     <div>
                                                      
           
            <div className={imageStyles.slika}>
             <img src={laptop} alt="" />
          </div> 

          <div className={navicStyles.bars}>
             {!this.state.laz ? <VscThreeBars className="bar h4" onClick={()=>{
             
              
                 let navic =document.getElementById('navic')
                 navic.style.display='block'
                
                 let bar =document.querySelector('.bar')
                 bar.style.transform='rotate(360deg)'
                 bar.style.transition='1200ms'
                 setTimeout(() => {
                    this.setState({
                        laz:true
                    })
                     
                 }, 1200);

        
             }} /> : <ImCross className="bar" onClick={()=>{

                let navic =document.getElementById('navic')
                navic.style.display='none'
                let bar =document.querySelector('.bar')
                bar.style.transform='rotate(-360deg)'
                bar.style.transition='1200ms'
                setTimeout(() => {
                   this.setState({
                       laz:false
                   })
                    
                }, 800);
            
             }} /> }

          </div>


          
<div className={navicStyles.navic2} id="navic">


      
      
<Container>
    <Row>
   
        <Col xs={5}>
        <br></br>
          gogaDesign<FiHexagon className="hex text-danger"/></Col>
        <Col xl={7} md={12} >
     

        
        <br></br>
    
            <ul>
<li className="text-warning"><Link to="pocetna"spy={true} smooth={true} hashSpy={true} offset={0} duration={1200} delay={200} isDynamic={true} onClick={()=>{
 


 let navic =document.getElementById('navic')
 navic.style.display='none'
 let bar =document.querySelector('.bar')
 bar.style.transform='rotate(-360deg)'
 bar.style.transition='1200ms'
 setTimeout(() => {
    this.setState({
        laz:false
    })
     
 }, 800);


           
       
       }}>  {this.state.navic1}</Link></li>
     <li><Link to="tehnologija"spy={true} smooth={true} hashSpy={true} offset={0} duration={1200} delay={200} isDynamic={true}  onClick={()=>{
 


 let navic =document.getElementById('navic')
 navic.style.display='none'
 let bar =document.querySelector('.bar')
 bar.style.transform='rotate(-360deg)'
 bar.style.transition='1200ms'
 setTimeout(() => {
    this.setState({
        laz:false
    })
     
 }, 800);


           
       
       }}> {this.state.navic2}</Link></li>
       <li><Link to="projekti"spy={true} smooth={true} hashSpy={true} offset={0} duration={1200} isDynamic={true} onClick={()=>{
 


 let navic =document.getElementById('navic')
 navic.style.display='none'
 let bar =document.querySelector('.bar')
 bar.style.transform='rotate(-360deg)'
 bar.style.transition='1200ms'
 setTimeout(() => {
    this.setState({
        laz:false
    })
     
 }, 800);


           
       
       }}>{this.state.navic3}</Link></li>
       <li><Link to="cene"spy={true} smooth={true} hashSpy={true} offset={0} duration={1200} delay={600} isDynamic={true} onClick={()=>{
 


 let navic =document.getElementById('navic')
 navic.style.display='none'
 let bar =document.querySelector('.bar')
 bar.style.transform='rotate(-360deg)'
 bar.style.transition='1200ms'
 setTimeout(() => {
    this.setState({
        laz:false
    })
     
 }, 800);


           
       
       }}>{this.state.navic4}</Link></li>
      <li><Link to="kontakt"spy={true} smooth={true} hashSpy={true} offset={0} duration={1200} delay={600} delay={2000} isDynamic={true} onClick={()=>{
 


 let navic =document.getElementById('navic')
 navic.style.display='none'
 let bar =document.querySelector('.bar')
 bar.style.transform='rotate(-360deg)'
 bar.style.transition='1200ms'
 setTimeout(() => {
    this.setState({
        laz:false
    })
     
 }, 800);


           
       
       }} >{this.state.navic5}</Link></li>

               
              <DropdownButton title={this.state.navic6}>
<Dropdown.Item className={navicStyles.drop} onClick={this.englishLang}>EN <ReactCountryFlag countryCode="GB" svg /></Dropdown.Item>
<Dropdown.Item  className={navicStyles.drop} onClick={this.serbianLang}>RS <ReactCountryFlag countryCode="RS" svg /></Dropdown.Item>


</DropdownButton> 

            </ul>

                   
      
        
          
              

                    </Col>

                </Row>
            </Container>
            </div>


          
      <div className="textKojisePojavljujeLevo">

                <div className="textSlide h3">
<Anime delay={1200} translateX={[-1200,0]}  duration={1600} easing={'easeOutQuint'} skewY={['-35deg','0deg']} >
                <div> gogaDesign<FiHexagon className="hex text-danger"/></div>    
                 </Anime>  
                 <Anime delay={2500} translateX={[-1200,0]}  duration={1600} easing={'easeOutQuint'} skewY={['35deg','0deg']} >
                <div className="textSlide h5">{this.state.ostvariSvojeSnove}</div> 
                </Anime>
                </div>


            </div> 





 
      

                  
          

        
       
     
 



                        <div className={ukusoStyles.ukoso} id="pocetna">
                          
                          <Container className={ukusoStyles.ravno}>
                            <Row>
                              <Col xs={12} className="text-center h4">
                              <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                                {this.state.uslugeNaslov}</Col>

                                <Col md={6} className="text-center">
                                <br></br>
                          <br></br>
                          <br></br>
                                <BsCodeSlash className="h2"/>
                                <br></br>
                          <br></br>
                     
                                <p
                                 data-aos="fade-down"
                                 data-aos-offset="200"
                                 data-aos-delay="50"
                                 data-aos-duration="1000"
                                 data-aos-easing="ease-in-out"
                                 data-aos-mirror="true"
                                 data-aos-once="false"
                                >
                                    {this.state.uslugeWeb}
                                    </p>
                              


                                </Col>

                                <Col md={6} className="text-center">
                                <br></br>
                          <br></br>
                          <br></br>
                                <FiShoppingCart className="h2"/>
                                <br></br>
                          <br></br>
                     
                                <p
                                 data-aos="fade-down"
                                 data-aos-offset="200"
                                 data-aos-delay="50"
                                 data-aos-duration="1000"
                                 data-aos-easing="ease-in-out"
                                 data-aos-mirror="true"
                                 data-aos-once="false"
                                >
                                    {this.state.uslugeEcomm}
                                    </p>
                              


                                </Col>
                  

                                <Col md={6} className="text-center">
                                <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                                <span className="h2">API</span>
                                <br></br>
                          <br></br>
                     
                                <p
                                 data-aos="fade-down"
                                 data-aos-offset="200"
                                 data-aos-delay="50"
                                 data-aos-duration="1000"
                                 data-aos-easing="ease-in-out"
                                 data-aos-mirror="true"
                                 data-aos-once="false"
                                >
                                    {this.state.uslugeApi}
                                    </p>
                              


                                </Col>

                                <Col md={6} className="text-center">
                                <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                                <span className="h2">Full Stack</span>
                                <br></br>
                          <br></br>
                     
                                <p
                                 data-aos="fade-down"
                                 data-aos-offset="200"
                                 data-aos-delay="50"
                                 data-aos-duration="1000"
                                 data-aos-easing="ease-in-out"
                                 data-aos-mirror="true"
                                 data-aos-once="false"
                                >
                                    {this.state.uslugeFull}
                                    </p>
                              


                                </Col>



                               
                            </Row>
                          </Container>

                        </div> 



 



                        
                        <div className={razvojStyles.razvoj} id="tehnologija" >
                    
                          
                          <Container className={razvojStyles.ravnoRazvoj}>
                            <Row>
                              <Col xs={12} className="text-center h4">
                              <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                              <span className="text-light h3">{this.state.tehnolgijeNaslov}</span> 
                                
                                </Col>

                                <Col md={3} className="text-center" 
                                 data-aos="fade-down"
                                 data-aos-offset="200"
                                 data-aos-delay="200"
                                 data-aos-duration="1000"
                                 data-aos-easing="ease-in-out"
                                 data-aos-mirror="true"
                                 data-aos-once="false"       
                          >
                        <br></br>
                          <br></br>
                          <br></br>

                     
                                    {this.state.tehnologije1}
                            
                                </Col>

                                <Col md={3} className="text-center"
                                  data-aos="fade-down"
                                  data-aos-offset="200"
                                  data-aos-delay="200"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-in-out"
                                  data-aos-mirror="true"
                                  data-aos-once="false"     
                                
                                >
                                
                          <br></br>
                          <br></br>
                          <br></br>
                       {this.state.tehnologije2}
                             
                                </Col>
                  

                                <Col md={3} className="text-center"
                                 data-aos="fade-down"
                                 data-aos-offset="200"
                                 data-aos-delay="200"
                                 data-aos-duration="1000"
                                 data-aos-easing="ease-in-out"
                                 data-aos-mirror="true"
                                 data-aos-once="false"     
                                
                                
                                >
                         <br></br>
                          <br></br>
                          <br></br>
                       
                       
                                    {this.state.tehnologije3}
                                 


                                </Col>

                                <Col md={3} className="text-center"
                                  data-aos="fade-down"
                                  data-aos-offset="200"
                                  data-aos-delay="200"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-in-out"
                                  data-aos-mirror="true"
                                  data-aos-once="false"     
                                >
                         <br></br>
                          <br></br>
                          <br></br>
                   
                                    {this.state.tehnologije4}
                              
                              


                                </Col>

                                <Col md={3} className="text-center"
                                    data-aos="fade-down"
                                    data-aos-offset="200"
                                    data-aos-delay="200"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-out"
                                    data-aos-mirror="true"
                                    data-aos-once="false"     
                                >
                         <br></br>
                          <br></br>
                          <br></br>
                   
                                    {this.state.tehnologije5}
                              
                              


                                </Col>

                                <Col md={3} className="text-center"
                                  data-aos="fade-down"
                                  data-aos-offset="200"
                                  data-aos-delay="200"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-in-out"
                                  data-aos-mirror="true"
                                  data-aos-once="false"     
                                >
                         <br></br>
                          <br></br>
                          <br></br>
                   
                                    {this.state.tehnologije6}
                              
                              


                                </Col>

                                <Col md={3} className="text-center"
                                  data-aos="fade-down"
                                  data-aos-offset="200"
                                  data-aos-delay="200"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-in-out"
                                  data-aos-mirror="true"
                                  data-aos-once="false"     
                                >
                         <br></br>
                          <br></br>
                          <br></br>
                   
                                    {this.state.tehnologije7}
                              
                              


                                </Col>
                                <Col md={3} className="text-center"
                                data-aos="fade-down"
                                data-aos-offset="200"
                                data-aos-delay="200"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"     
                                >
                         <br></br>
                          <br></br>
                          <br></br>
                   
                                    {this.state.tehnologije8}
                              
                              


                                </Col>

                                <Col>
                             

                                <p className="text-center h4 text-light">
                                <br></br>
                                <br></br>
                                <br></br>
                                {this.state.tehnolgijeDonjText}
                         
                                </p>
                                
                                </Col>

                            






                               
                            </Row>
                          </Container>

                        </div>








                        <div className={projekatStyles.projekat} id="projekti">
                    
                          
                          <Container className={projekatStyles.projekatRavno}>
                            <Row>
                              <Col xs={12} className="text-center h4">
                              <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                              <span className="text-dark h3">{this.state.projektiNaslov}</span> 
                                
                                </Col>
                                <Col xs={12} className="h5">Full Stack </Col>

                                <Col md={4} onMouseOver={this.skupiDiv} onMouseLeave={this.povecajDiv}
                                  data-aos="fade-down"
                                  data-aos-offset="200"
                                  data-aos-delay="200"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-in-out"
                                  data-aos-mirror="true"
                                  data-aos-once="false"     
                                
                                >
                                
                            
                                <br></br>
                             <a href ="http://www.football-api.uk/"  >  <img src={stadium} className={projekatStyles.slike} /> </a>
                
                     
                                    
                            
                                </Col>

                                <Col md={4} onMouseOver={this.skupiDiv} onMouseLeave={this.povecajDiv}
                                  data-aos="fade-down"
                                  data-aos-offset="200"
                                  data-aos-delay="200"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-in-out"
                                  data-aos-mirror="true"
                                  data-aos-once="false"     
                                 >
                               
                                
                          <br></br>
                          <a href ="http://goran-shop.herokuapp.com/" ><img src={fashion} className={projekatStyles.slike} /></a>
                             
                                </Col>
                  

                                <Col md={4} onMouseOver={this.skupiDiv} onMouseLeave={this.povecajDiv}
                                  data-aos="fade-down"
                                  data-aos-offset="200"
                                  data-aos-delay="200"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-in-out"
                                  data-aos-mirror="true"
                                  data-aos-once="false"     
                                >
                                
                                
                         <br></br>
                      <a href="https://mern-goga.herokuapp.com/"> <img src={coding} className={projekatStyles.slike} /></a>  


                                </Col>

                                <Col xs={12} className="h5">
                                <br></br>
                                    
                                    Web Apps</Col>

                                <Col md={4} onMouseOver={this.skupiDiv} onMouseLeave={this.povecajDiv}
                                  data-aos="fade-down"
                                  data-aos-offset="200"
                                  data-aos-delay="200"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-in-out"
                                  data-aos-mirror="true"
                                  data-aos-once="false"     
                                >
                                <br></br>
                        <a href="https://royal-weather.netlify.app/"><img src={weather} className={projekatStyles.slike} /></a>  
                              


                                </Col>

                                <Col md={4} onMouseOver={this.skupiDiv} onMouseLeave={this.povecajDiv}
                                  data-aos="fade-down"
                                  data-aos-offset="200"
                                  data-aos-delay="200"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-in-out"
                                  data-aos-mirror="true"
                                  data-aos-once="false"     
                                >
                                <br></br>
                                <a href="https://react-movie-app-goga.netlify.app/"><img src={movies} className={projekatStyles.slike} /></a>
                              


                                </Col>

                                <Col md={4} onMouseOver={this.skupiDiv} onMouseLeave={this.povecajDiv}
                                  data-aos="fade-down"
                                  data-aos-offset="200"
                                  data-aos-delay="200"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-in-out"
                                  data-aos-mirror="true"
                                  data-aos-once="false"     
                                >
                                <br></br>
                        <a href="https://covid19-app-react.netlify.app/"><img src={covid} className={projekatStyles.slike} /></a>  
                              



                                </Col>
                                <Col xs={12} className="h5">
                                <br></br>
                                    
                                    Web Sites</Col>

                                <Col md={4} onMouseOver={this.skupiDiv} onMouseLeave={this.povecajDiv}
                                  data-aos="fade-down"
                                  data-aos-offset="200"
                                  data-aos-delay="200"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-in-out"
                                  data-aos-mirror="true"
                                  data-aos-once="false"     
                                >
                                <br></br>
                        <a href="https://royal-food.netlify.app/"><img src={restoran} className={projekatStyles.slike} /></a>  
                              



                                </Col>
                                <Col md={4} onMouseOver={this.skupiDiv} onMouseLeave={this.povecajDiv}
                                  data-aos="fade-down"
                                  data-aos-offset="200"
                                  data-aos-delay="200"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-in-out"
                                  data-aos-mirror="true"
                                  data-aos-once="false"     
                                >
                                <br></br>
                        <a href="https://royal-fit.netlify.app/"><img src={body} className={projekatStyles.slike} /></a>  
                              



                                </Col>

                                <Col md={4} onMouseOver={this.skupiDiv} onMouseLeave={this.povecajDiv}
                                  data-aos="fade-down"
                                  data-aos-offset="200"
                                  data-aos-delay="200"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-in-out"
                                  data-aos-mirror="true"
                                  data-aos-once="false"     
                                >
                                <br></br>
                        <a href="https://gmi-computing.netlify.app/"> <img src={gmi} className={projekatStyles.slike} /></a> 
                              


                                </Col>

                            






                               
                            </Row>
                          </Container>

                        </div>


                        <div className={cenaStyles.cena} id="cene">
                    

                    <Container className={cenaStyles.ravnoCena}>
                      <Row>
                      <Col xs={12} className="text-center h4">
                              <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                          <span className="text-light">  {this.state.tehnlogijeIzradaNaslov}
                            <br></br>
                            <br></br>
                          </span>
                        
                                
                                </Col>

                             
                                <Col md={4} className="bg-light"
                                  data-aos="fade-down"
                                  data-aos-offset="200"
                                  data-aos-delay="200"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-in-out"
                                  data-aos-mirror="true"
                                  data-aos-once="false"     
                                >
                                    <br></br>
                            
                                    <div className="text-center h4 bg-primary text-light">Basic</div>
                                         <div className={cenaStyles.threSteps}>
                                
                                    <div>
                                  {this.state.tehnologijeIzrada1}
                                    
                                    <br></br>
                                       {this.state.tehnologijeCena1}:  <span className="h6">150 <FaEuroSign /> </span>
                                    
                                    </div>
                                </div>
                                </Col>


                                <Col md={4} className="bg-warning"
                                  data-aos="fade-down"
                                  data-aos-offset="200"
                                  data-aos-delay="200"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-in-out"
                                  data-aos-mirror="true"
                                  data-aos-once="false"     
                                >
                                    <br></br>
                            
                                    <div className="text-center h4 bg-primary text-light">Standard</div>
                                         <div className={cenaStyles.threSteps}>
                                
                                    <div>
                                  {this.state.tehnologijeIzrada2}
                                    
                                    <br></br>
                                       {this.state.tehnologijeCena1}:  <span className="h6">200evra <FaEuroSign /> </span>
                                    
                                    </div>
                                </div>
                                </Col>



                                <Col md={4} className="bg-light"
                                  data-aos="fade-down"
                                  data-aos-offset="200"
                                  data-aos-delay="200"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-in-out"
                                  data-aos-mirror="true"
                                  data-aos-once="false"     
                                >
                                    <br></br>
                            
                                    <div className="text-center h4 bg-primary text-light">Professional</div>
                                         <div className={cenaStyles.threSteps}>
                                
                                    <div>
                                  {this.state.tehnologijeIzrada3}
                                    
                                    <br></br>
                                       {this.state.tehnologijeCena1}:  <span className="h6">300evra <FaEuroSign /> </span>
                                    
                                    </div>
                                </div>
                                </Col>





                     </Row>
                </Container>

                          </div> 


                          
                        <div className={kontatStyles.kontakt} id="kontakt">
                    

                    <Container className={kontatStyles.ravnoKontakt}>
                      <Row>
                      <Col xs={12} className="text-center h4">
                              <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                          <span className="text-dark">  {this.state.konataktNaslov}
                            <br></br>
                            <br></br>
                          </span>
                        
                                
                                </Col>

                                <Col md={6}>
                                <br></br>
                                        <br></br>
                                    <p>
                                        
                                 {this.state.kontaktText}
                                    </p>
                                
                                </Col>


                                <Col md={6}>
                                <Form onSubmit={this.sendEmailAndMessage}>
                                  <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>{this.state.nameLastname}</Form.Label>
                                    <Form.Control type="text" placeholder='...' name="name" />
                                   </Form.Group>

                                   <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>{this.state.phoneNumber}</Form.Label>
                                    <Form.Control  type="tel" placeholder='...' name="telephone" />
                                  
                                   </Form.Group>

                                   <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>{this.state.emailAdressa}</Form.Label>
                                    <Form.Control  type="email" placeholder='...' name="email" required={true}/>
                                   </Form.Group>

                   <Form.Group className="mb-3" controlId="formBasicEmail">
                   <Form.Label>{this.state.message}</Form.Label>
                 <Form.Control as="textarea"placeholder={this.state.messageText} name="message" required={true} style={{ height: '100px' }}/>
                  </Form.Group>                              

                             
                             <Button variant="primary" type="submit">
                             Submit
                          </Button>
                            </Form>

                            


                                </Col>




                             

                     </Row>
                </Container>

                          </div> 



                          
                        <div className={footerStyles.footer}>

<Container className={footerStyles.ravnoFooter}>
  <Row>

    <Col xs={12} className="text-center h5">
      <br></br>
      <br></br>
 
      gogaDesign<FiHexagon className="hex text-danger"/> 2021 || All Rights Reserved
    </Col>

         
<Col sm={6} className="h6 text-center">
<br></br>
<br></br>


gogadesignweb@gmail.com

</Col>
<Col sm={6} className="h6 text-center">
<br></br>
<br></br>


<AiFillPhone />  +381 / 064-415-68-13

</Col>


<Col xs={4} className="h6  text-center">



<br></br>
<br></br>
<br></br>

  <a href="https://github.com/goranivankovic" className="h1 text-dark"><AiFillGithub/></a>

</Col>
<Col xs={4} className="h6 text-center">
<br></br>
<br></br>
<br></br>


  <a href="https://www.linkedin.com/in/goran-ivankovi%C4%87-86b19b1b9/" className="h1 text-dark"><AiFillLinkedin/></a>

</Col>
<Col xs={4} className="h6 text-center">
<br></br>
<br></br>
<br></br>


  <a href="https://www.google.com/" className="h1 text-dark"><AiOutlineGoogle /></a>

</Col>










  
  </Row>
</Container>
  


</div>




                          






                    







                         </div>



             







                         
        

                  
                        ) : (
                       
                                                             
           <div>
              <div className={imageStyles.slika}>
             <img src={laptop} alt="" />
          </div>

   

          
<div className={navicStyles.navic} id="navic">


      
      
<Container className="navic">
    <Row>
   
        <Col xs={5} className="h5">
        <br></br>
          gogaDesign<FiHexagon className="hex text-danger"/></Col>
        <Col xl={7} md={12} >
     

        
        <br></br>
    
            <ul >
<li className="text-warning"><Link to="pocetna"spy={true} smooth={true} hashSpy={true} offset={0} duration={1200} delay={200} isDynamic={true}>  {this.state.navic1}</Link></li>
       <li onClick={()=>{
           
       
       }}> <Link to="tehnologija"spy={true} smooth={true} hashSpy={true} offset={0} duration={1200} delay={200} isDynamic={true}> {this.state.navic2}</Link></li>
       <li><Link to="projekti"spy={true} smooth={true} hashSpy={true} offset={0} duration={1200}  isDynamic={true}>{this.state.navic3}</Link></li>
       <li><Link to="cene"spy={true} smooth={true} hashSpy={true} offset={0} duration={1200} delay={600} isDynamic={true}>{this.state.navic4}</Link></li>
      <li><Link to="kontakt"spy={true} smooth={true} hashSpy={true} offset={0} duration={1200} delay={600} delay={2000} isDynamic={true} >{this.state.navic5}</Link></li>

               
              <DropdownButton title={this.state.navic6}>
<Dropdown.Item className={navicStyles.drop} onClick={this.englishLang}>EN <ReactCountryFlag countryCode="GB" svg /></Dropdown.Item>
<Dropdown.Item  className={navicStyles.drop} onClick={this.serbianLang}>RS <ReactCountryFlag countryCode="RS" svg /></Dropdown.Item>


</DropdownButton> 

            </ul>

                   
      
        
          
              

                    </Col>

                </Row>
            </Container>
            </div>


            <div className="textKojisePojavljujeLevo">

                <div className="textSlide h3">
<Anime delay={1200} translateX={[-1200,0]}  duration={1600} easing={'easeOutQuint'} skewY={['-35deg','0deg']} >
                <div> gogaDesign<FiHexagon className="hex text-danger"/></div>    
                 </Anime>  
                 <Anime delay={2500} translateX={[-1200,0]}  duration={1600} easing={'easeOutQuint'} skewY={['35deg','0deg']} >
                <div className="textSlide h5">{this.state.ostvariSvojeSnove}</div> 
                </Anime>
                </div>


            </div>
          

                  
          

        
       
         
      



                        <div className={ukusoStyles.ukoso} id="pocetna">
                          
                          <Container className={ukusoStyles.ravno}>
                            <Row>
                              <Col xs={12} className="text-center h4">
                              <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                                {this.state.uslugeNaslov}</Col>

                                <Col md={6} className="text-center">
                                <br></br>
                          <br></br>
                          <br></br>
                                <BsCodeSlash className="h2"/>
                                <br></br>
                          <br></br>
                     
                                <p
                                 data-aos="zoom-in-left"
                                 data-aos-offset="200"
                                 data-aos-delay="50"
                                 data-aos-duration="1000"
                                 data-aos-easing="ease-in-out"
                                 data-aos-mirror="true"
                                 data-aos-once="false"
                                >
                                    {this.state.uslugeWeb}
                                    </p>
                              


                                </Col>

                                <Col md={6} className="text-center">
                                <br></br>
                          <br></br>
                          <br></br>
                                <FiShoppingCart className="h2"/>
                                <br></br>
                          <br></br>
                     
                                <p
                                      data-aos="zoom-in-right"
                                      data-aos-offset="200"
                                      data-aos-delay="500"
                                      data-aos-duration="1000"
                                      data-aos-easing="ease-in-out"
                                      data-aos-mirror="true"
                                      data-aos-once="false"
                                >
                                    {this.state.uslugeEcomm}
                                    </p>
                              


                                </Col>
                  

                                <Col md={6} className="text-center">
                                <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                                <span className="h2">API</span>
                                <br></br>
                          <br></br>
                     
                                <p
                                      data-aos="zoom-in-left"
                                      data-aos-offset="200"
                                      data-aos-delay="800"
                                      data-aos-duration="1000"
                                      data-aos-easing="ease-in-out"
                                      data-aos-mirror="true"
                                      data-aos-once="false"
                                
                                >
                                    {this.state.uslugeApi}
                                    </p>
                              


                                </Col>

                                <Col md={6} className="text-center">
                                <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                                <span className="h2">Full Stack</span>
                                <br></br>
                          <br></br>
                     
                                <p
                                      data-aos="zoom-in-right"
                                      data-aos-offset="200"
                                      data-aos-delay="1100"
                                      data-aos-duration="1000"
                                      data-aos-easing="ease-in-out"
                                      data-aos-mirror="true"
                                      data-aos-once="false"
                                >
                                    {this.state.uslugeFull}
                                    </p>
                              


                                </Col>



                               
                            </Row>
                          </Container>

                        </div>







                        
                        <div className={razvojStyles.razvoj} id="tehnologija" >
                    
                          
                          <Container className={razvojStyles.ravnoRazvoj}>
                            <Row>
                              <Col xs={12} className="text-center h4">
                              <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                              <span className="text-light h3">{this.state.tehnolgijeNaslov}</span> 
                                
                                </Col>

                                <Col md={3} className="text-center"        
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false">
                        <br></br>
                          <br></br>
                          <br></br>

                     
                                    {this.state.tehnologije1}
                            
                                </Col>

                                <Col md={3} className="text-center"
                                  data-aos="fade-up"
                                  data-aos-offset="200"
                                  data-aos-delay="50"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-in-out"
                                  data-aos-mirror="true"
                                  data-aos-once="false">
                                
                          <br></br>
                          <br></br>
                          <br></br>
                       {this.state.tehnologije2}
                             
                                </Col>
                  

                                <Col md={3} className="text-center"
                                  data-aos="fade-up"
                                  data-aos-offset="200"
                                  data-aos-delay="50"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-in-out"
                                  data-aos-mirror="true"
                                  data-aos-once="false">
                         <br></br>
                          <br></br>
                          <br></br>
                       
                       
                                    {this.state.tehnologije3}
                                 


                                </Col>

                                <Col md={3} className="text-center"
                                  data-aos="fade-up"
                                  data-aos-offset="200"
                                  data-aos-delay="50"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-in-out"
                                  data-aos-mirror="true"
                                  data-aos-once="false"
                                >
                         <br></br>
                          <br></br>
                          <br></br>
                   
                                    {this.state.tehnologije4}
                              
                              


                                </Col>

                                <Col md={3} className="text-center"
                                    data-aos="fade-down"
                                    data-aos-offset="200"
                                    data-aos-delay="50"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-out"
                                    data-aos-mirror="true"
                                    data-aos-once="false"
                                >
                         <br></br>
                          <br></br>
                          <br></br>
                   
                                    {this.state.tehnologije5}
                              
                              


                                </Col>

                                <Col md={3} className="text-center"
                                 data-aos="fade-down"
                                 data-aos-offset="200"
                                 data-aos-delay="50"
                                 data-aos-duration="1000"
                                 data-aos-easing="ease-in-out"
                                 data-aos-mirror="true"
                                 data-aos-once="false"
                                >
                         <br></br>
                          <br></br>
                          <br></br>
                   
                                    {this.state.tehnologije6}
                              
                              


                                </Col>

                                <Col md={3} className="text-center"
                                 data-aos="fade-down"
                                 data-aos-offset="200"
                                 data-aos-delay="50"
                                 data-aos-duration="1000"
                                 data-aos-easing="ease-in-out"
                                 data-aos-mirror="true"
                                 data-aos-once="false"
                                >
                         <br></br>
                          <br></br>
                          <br></br>
                   
                                    {this.state.tehnologije7}
                              
                              


                                </Col>
                                <Col md={3} className="text-center"
                                 data-aos="fade-down"
                                 data-aos-offset="200"
                                 data-aos-delay="50"
                                 data-aos-duration="1000"
                                 data-aos-easing="ease-in-out"
                                 data-aos-mirror="true"
                                 data-aos-once="false"
                                >
                         <br></br>
                          <br></br>
                          <br></br>
                   
                                    {this.state.tehnologije8}
                              
                              


                                </Col>

                                <Col>
                             

                                <p className="text-center h4 text-light">
                                <br></br>
                                <br></br>
                                <br></br>
                                {this.state.tehnolgijeDonjText}
                         
                                </p>
                                
                                </Col>

                            






                               
                            </Row>
                          </Container>

                        </div>








                        <div className={projekatStyles.projekat} id="projekti">
                    
                          
                          <Container className={projekatStyles.projekatRavno}>
                            <Row>
                              <Col xs={12} className="text-center h4">
                              <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                              <span className="text-dark h3">{this.state.projektiNaslov}</span> 
                                
                                </Col>
                                <Col xs={12} className="h5">Full Stack </Col>

                                <Col md={4} onMouseOver={this.skupiDiv} onMouseLeave={this.povecajDiv}
                                  data-aos="fade-down"
                                  data-aos-offset="200"
                                  data-aos-delay="200"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-in-out"
                                  data-aos-mirror="true"
                                  data-aos-once="false"     
                                
                                >
                                
                            
                                <br></br>
                             <a href ="http://www.football-api.uk/" >  <img src={stadium} className={projekatStyles.slike} /> </a>
                
                     
                                    
                            
                                </Col>

                                <Col md={4} onMouseOver={this.skupiDiv} onMouseLeave={this.povecajDiv} 
                                  data-aos="fade-down"
                                  data-aos-offset="200"
                                  data-aos-delay="600"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-in-out"
                                  data-aos-mirror="true"
                                  data-aos-once="false"     
                                
                                >
                               
                                
                          <br></br>
                          <a href ="http://goran-shop.herokuapp.com/" ><img src={fashion} className={projekatStyles.slike} /></a>
                             
                                </Col>
                  

                                <Col md={4} onMouseOver={this.skupiDiv} onMouseLeave={this.povecajDiv}
                                  data-aos="fade-down"
                                  data-aos-offset="200"
                                  data-aos-delay="1000"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-in-out"
                                  data-aos-mirror="true"
                                  data-aos-once="false"     
                                
                                >
                                
                                
                         <br></br>
                      <a href="https://mern-goga.herokuapp.com/"> <img src={coding} className={projekatStyles.slike} /></a>  


                                </Col>

                                <Col xs={12} className="h5">
                                <br></br>
                                    
                                    Web Apps</Col>

                                <Col md={4} onMouseOver={this.skupiDiv} onMouseLeave={this.povecajDiv}
                                  data-aos="fade-down"
                                  data-aos-offset="200"
                                  data-aos-delay="200"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-in-out"
                                  data-aos-mirror="true"
                                  data-aos-once="false"     
                                >
                                <br></br>
                        <a href="https://royal-weather.netlify.app/"><img src={weather} className={projekatStyles.slike} /></a>  
                              


                                </Col>

                                <Col md={4} onMouseOver={this.skupiDiv} onMouseLeave={this.povecajDiv}
                                  data-aos="fade-down"
                                  data-aos-offset="200"
                                  data-aos-delay="600"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-in-out"
                                  data-aos-mirror="true"
                                  data-aos-once="false"     
                                >
                                <br></br>
                                <a href="https://react-movie-app-goga.netlify.app/"><img src={movies} className={projekatStyles.slike} /></a>
                              


                                </Col>

                                <Col md={4} onMouseOver={this.skupiDiv} onMouseLeave={this.povecajDiv}
                                  data-aos="fade-down"
                                  data-aos-offset="200"
                                  data-aos-delay="1000"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-in-out"
                                  data-aos-mirror="true"
                                  data-aos-once="false"     
                                >
                                <br></br>
                        <a href="https://covid19-app-react.netlify.app/"><img src={covid} className={projekatStyles.slike} /></a>  
                              



                                </Col>
                                <Col xs={12} className="h5">
                                <br></br>
                                    
                                    Web Sites</Col>

                                <Col md={4} onMouseOver={this.skupiDiv} onMouseLeave={this.povecajDiv}
                                  data-aos="fade-down"
                                  data-aos-offset="200"
                                  data-aos-delay="200"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-in-out"
                                  data-aos-mirror="true"
                                  data-aos-once="false"     
                                >
                                <br></br>
                        <a href="https://royal-food.netlify.app/"><img src={restoran} className={projekatStyles.slike} /></a>  
                              



                                </Col>
                                <Col md={4} onMouseOver={this.skupiDiv} onMouseLeave={this.povecajDiv}
                                  data-aos="fade-down"
                                  data-aos-offset="200"
                                  data-aos-delay="600"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-in-out"
                                  data-aos-mirror="true"
                                  data-aos-once="false"     
                                >
                                <br></br>
                        <a href="https://royal-fit.netlify.app/"><img src={body} className={projekatStyles.slike} /></a>  
                              



                                </Col>

                                <Col md={4} onMouseOver={this.skupiDiv} onMouseLeave={this.povecajDiv}
                                  data-aos="fade-down"
                                  data-aos-offset="200"
                                  data-aos-delay="1000"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-in-out"
                                  data-aos-mirror="true"
                                  data-aos-once="false"     
                                >
                                <br></br>
                        <a href="https://gmi-computing.netlify.app/"> <img src={gmi} className={projekatStyles.slike} /></a> 
                              


                                </Col>

                            






                               
                            </Row>
                          </Container>

                        </div>


                        <div className={cenaStyles.cena} id="cene">
                    

                    <Container className={cenaStyles.ravnoCena}>
                      <Row>
                      <Col xs={12} className="text-center h4">
                              <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                          <span className="text-light">  {this.state.tehnlogijeIzradaNaslov}
                            <br></br>
                            <br></br>
                          </span>
                        
                                
                                </Col>

                             
                                <Col md={4} className="bg-light"
                                 data-aos="fade-down"
                                 data-aos-offset="200"
                                 data-aos-delay="200"
                                 data-aos-duration="1000"
                                 data-aos-easing="ease-in-out"
                                 data-aos-mirror="true"
                                 data-aos-once="false"   
                                >
                                    <br></br>
                            
                                    <div className="text-center h4 bg-primary text-light">Basic</div>
                                         <div className={cenaStyles.threSteps}>
                                
                                    <div>
                                  {this.state.tehnologijeIzrada1}
                                    
                                    <br></br>
                                       {this.state.tehnologijeCena1}:  <span className="h6">150 <FaEuroSign /> </span>
                                    
                                    </div>
                                </div>
                                </Col>


                                <Col md={4} className="bg-warning"
                                 data-aos="fade-down"
                                 data-aos-offset="200"
                                 data-aos-delay="600"
                                 data-aos-duration="1000"
                                 data-aos-easing="ease-in-out"
                                 data-aos-mirror="true"
                                 data-aos-once="false"   
                                >
                                    <br></br>
                            
                                    <div className="text-center h4 bg-primary text-light">Standard</div>
                                         <div className={cenaStyles.threSteps}>
                                
                                    <div>
                                  {this.state.tehnologijeIzrada2}
                                    
                                    <br></br>
                                       {this.state.tehnologijeCena1}:  <span className="h6">200evra <FaEuroSign /> </span>
                                    
                                    </div>
                                </div>
                                </Col>



                                <Col md={4} className="bg-light"
                                 data-aos="fade-down"
                                 data-aos-offset="200"
                                 data-aos-delay="1000"
                                 data-aos-duration="1000"
                                 data-aos-easing="ease-in-out"
                                 data-aos-mirror="true"
                                 data-aos-once="false"   
                                >
                                    <br></br>
                            
                                    <div className="text-center h4 bg-primary text-light">Professional</div>
                                         <div className={cenaStyles.threSteps}>
                                
                                    <div>
                                  {this.state.tehnologijeIzrada3}
                                    
                                    <br></br>
                                       {this.state.tehnologijeCena1}:  <span className="h6">300evra <FaEuroSign /> </span>
                                    
                                    </div>
                                </div>
                                </Col>





                     </Row>
                </Container>

                          </div> 


                          
                        <div className={kontatStyles.kontakt} id="kontakt">
                    

                    <Container className={kontatStyles.ravnoKontakt}>
                      <Row>
                      <Col xs={12} className="text-center h4">
                              <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                          <span className="text-dark">  {this.state.konataktNaslov}
                            <br></br>
                            <br></br>
                          </span>
                        
                                
                                </Col>

                                <Col md={6}>
                                <br></br>
                                        <br></br>
                                    <p>
                                        
                                 {this.state.kontaktText}
                                    </p>
                                
                                </Col>


                                <Col md={6}>
                                <Form onSubmit={this.sendEmailAndMessage}>
                                  <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>{this.state.nameLastname}</Form.Label>
                                    <Form.Control type="text" placeholder='...' name="name" />
                                   </Form.Group>

                                   <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>{this.state.phoneNumber}</Form.Label>
                                    <Form.Control  type="tel" placeholder='...' name="telephone" />
                                   </Form.Group>

                                   <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>{this.state.emailAdressa}</Form.Label>
                                    <Form.Control  type="email" placeholder='...' name="email" required={true}/>
                                   </Form.Group>

                   <Form.Group className="mb-3" controlId="formBasicEmail">
                   <Form.Label>{this.state.message}</Form.Label>
                 <Form.Control as="textarea"placeholder={this.state.messageText} name="message" required={true} style={{ height: '100px' }}/>
                  </Form.Group>                              

                             
                             <Button variant="primary" type="submit">
                             Submit
                          </Button>
                            </Form>


                                </Col>




                             

                     </Row>
                </Container>

                          </div> 





                        <div className={footerStyles.footer}>

                          <Container className={footerStyles.ravnoFooter}>
                            <Row>

                              <Col xs={12} className="text-center h4">
                                <br></br>
                                <br></br>
                           
                                gogaDesign<FiHexagon className="hex text-danger"/> 2021 || All Rights Reserved
                              </Col>

                                   
                         <Col sm={6} className="h5">
                         <br></br>
                         <br></br>
              

                         gogadesignweb@gmail.com

                         </Col>
                         <Col sm={6} className="h5">
                         <br></br>
                         <br></br>
                    

                          <AiFillPhone />  +381 / 064-415-68-13

                         </Col>


                         <Col xs={4} className="h5  text-center">

       

                         <br></br>
                         <br></br>
                         <br></br>

                            <a href="https://github.com/goranivankovic" className="h1 text-dark"><AiFillGithub/></a>

                         </Col>
                         <Col xs={4} className="h5 text-center">
                         <br></br>
                         <br></br>
                         <br></br>
                     

                            <a href="https://www.linkedin.com/in/goran-ivankovi%C4%87-86b19b1b9/" className="h1 text-dark"><AiFillLinkedin/></a>

                         </Col>
                         <Col xs={4} className="h5 text-center">
                         <br></br>
                         <br></br>
                         <br></br>
                   

                            <a href="https://www.google.com/" className="h1 text-dark"><AiOutlineGoogle /></a>

                         </Col>

                

              
                      
               
                   



                            
                            </Row>
                          </Container>
                            


                        </div>



                         </div>



             


                    
                       
                       )
                     }
                   </Media>


     
        </div>   
    )
}

}
