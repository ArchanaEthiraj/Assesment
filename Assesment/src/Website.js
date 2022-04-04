import React from 'react';
import './Website.css';
import { ImMail2, ImPinterest2 } from "react-icons/im";
import { FiPhoneCall, FiRefreshCcw } from "react-icons/fi";
import { TiSocialTwitterCircular, TiSocialFacebookCircular, TiSocialGooglePlusCircular } from "react-icons/ti";
import { MdBedroomParent, MdOutlineSquareFoot } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { BsCurrencyDollar, BsInstagram, BsFillPlusCircleFill, BsDribbble } from "react-icons/bs";
import { VscHeart, VscDebugStackframeDot } from "react-icons/vsc";
import money from './asserets/money.jpg'
import liquid from './asserets/liquid.jpg'
import synertec from './asserets/synertec.jpg'
import dropawf from './asserets/dropawf.jpg'
import follow from './asserets/follow.jpg'
import build from './asserets/build.avif'
import building2 from './asserets/building2.jpg'
import building1 from './asserets/building1.jpeg'
import man from './asserets/man.jpeg'
import c1 from './asserets/c1.jpg'
import c2 from './asserets/c2.jpg'
import c3 from './asserets/c3.jpg'
import c4 from './asserets/c4.jpeg'
import c5 from './asserets/c5.jpeg'
import house1 from './asserets/house1.jpg'
import house2 from './asserets/house2.jpeg'
import house3 from './asserets/house3.jpeg'
import house4 from './asserets/house4.jpg'
import house5 from './asserets/house5.jpg'
import street from './asserets/street.jpg'
import { AiFillSetting, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import logo1 from './asserets/logo1.png'
import logo2 from './asserets/logo2.png'

function Website() {
    return (
        <div>
            <div className='bar d-flex'>
                <div className='mail'><ImMail2 size="20px" />&nbsp;&nbsp;sample@sample.com</div>
                <div className='phone'><FiPhoneCall size="20px" />&nbsp;&nbsp;00 1234 5678</div>
                <div className='google'><TiSocialGooglePlusCircular size="30px" /></div>
                <div className='pin'><ImPinterest2 size="20px" /></div>
                <div className='twitter'><TiSocialTwitterCircular size="30px" /></div>
                <div className='fb'><TiSocialFacebookCircular size="30px" /></div>
                <div className='dribble'><BsDribbble size="20px" /></div>
            </div>
            <div className='d-flex estate'>
                <div className='text d-flex'><span className='text-primary'><h2>wp/</h2></span>Real Estate</div>
                <div className='home text-muted'>HOME</div>
                <div className='about text-muted'>ABOUT</div>
                <div className='agents text-muted'>AGENTS</div>
                <div className='prop text-muted'>PROPERTIES</div>
                <div className='blog text-muted'>BLOG</div>
                <div className='contact text-muted'>CONTACT</div>
            </div>
            <div className='family'>
                <div className='content1'><h4>If you can dream, we can create it</h4></div>
                <div className='content2'><h1>Find your house without <br />any difficulties</h1></div>
                <button className='btn btn-outline-light'>Know More</button>
            </div>
            <div className='arrow'><label>01|05 . . . . . </label><AiOutlineLeft/><AiOutlineRight/></div>
            <div className='logo'>
                <div className='logo1'><img src={money} alt="money" height="100" width="210"></img></div>
                <div className='logo2'><img src={liquid} alt="liquid" height="100" width="200"></img></div>
                <div className='logo3'><img src={synertec} alt="synertec" height="100" width="200"></img></div>
                <div className='logo4'><img src={dropawf} alt="dropawf" height="100" width="200"></img></div>
                <div className='logo5'><img src={follow} alt="follow" height="100" width="200"></img></div>
            </div>
            <div className='wpr d-flex'><span className='text-primary'><h2>wp/</h2></span>Real Estate</div>
            <div className='properties'>Properties</div>
            <div className='sale'>HOME FOR SALE</div>
            <div className='builds'>            
          <div className='apart'>
          <div><label>Scandinavian style apartment</label></div>
          <div>< label>94-98 Ingraham St,Brooklyn, NY 11237,USA</label></div><br/><br></br>
         <div className='blue'>
          <div className='bed'><MdBedroomParent/><label> Beds: 3</label></div>
          <div className='Bath'><FaBath/><label>Baths: 2</label></div>
          <div><MdOutlineSquareFoot/><label>Sq Ft:900</label></div></div><hr></hr>
          <div><label> FOR RENT</label><br/>
            <BsCurrencyDollar size='20'/>
            <label className='font-monospace'><h5>54.000</h5></label>
            <div className='reff'>
            <div className='ics'><FiRefreshCcw size='20' />
            <div className='heart'><VscHeart size='20'/></div>
          </div>
          </div>
        </div>
         </div>
         </div>
        

            <div className='d-flex house'>
                <div><img src={build} alt="build" height="200" width="280"></img>
                    <div className='b1'><h6>Scandinavian style apartment</h6></div>
                    <div className='s1'>94-98 Ingraham St, Brooklyn, NY 11237, USA</div>
                </div>
                <div><img src={building2} alt="build" height="200" width="280"></img>
                    <div className='b1'><h6>Lovelace Road Greenfield</h6></div>
                    <div className='s1'>120 N St SW Thomaston, Georgia(GA), 30296</div>
                </div>
                <div><img src={building1} alt="build" height="200" width="280"></img>
                    <div className='b1'><h6>Building Complex Apartments</h6></div>
                    <div className='s1'>319 Brookmeade Way Lawrenceville, Georgia(GA), 30043</div>
                </div>
            </div>
            <hr className='text-muted line'></hr>
            <div className='add'><BsFillPlusCircleFill size="34" /></div>
            <div className='view text-muted'>VIEW MORE</div>
            <div className='d-flex'>
                <div>
                    <div className='text1'>Beautifully designed, inside <br />and out, Studio looks every bit <br />as powerful as it is.</div>
                    <div className='text2'>The Photoshop's version of Lorem ipsum Prom greide nit vel velit auctor ligist<br />
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem<br />
                        rabh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris</div>
                    <div className='sign'>signature</div></div>
                <img src={man} alt="man" height={"500"}></img>
            </div>
            <div className='client'>Our <b>Clients Review</b></div>
            <div className='client1'>Duane Neal<br />Product Designer, USA</div>
            <div className='client1'>"I'm a freelance fashion designer who specialises in print designs and combining fabrics. My designs have been sold all over Europe and<br />
                the USA and I have worked with some of the biggest designers in the industry. I'm also currently working with a big supermarket to<br />
                develop a gorgeous, yet affordabile</div>
            <div>
            <div className='d-flex image'>
                <div><img src={c1} alt="c1" className='rounded-circle' height="100"></img></div>
                <div><img src={c2} alt="c2" className='rounded-circle' height="100"></img></div>
                <div><img src={c3} alt="c3" className='rounded-circle' height="100"></img></div>
                <div><img src={c4} alt="c4" className='rounded-circle' height="100"></img></div>
                <div><img src={c5} alt="c5" className='rounded-circle' height="100"></img></div>
            </div><br />
            <div className='dots'>
                <span class="dot" onclick="currentSlide(1)"></span>
                <span class="dot" onclick="currentSlide(2)"></span>
                <span class="dot" onclick="currentSlide(3)"></span>
                <span class="dot" onclick="currentSlide(4)"></span>
                <span class="dot" onclick="currentSlide(5)"></span>
            </div></div>
            <div className='our'>Our <b>Blog</b></div>
            <div className='d-flex'>
            <div className='house1'><img src={house1} height="600" width="450" alt="house1"></img></div>           
            <div className='house2'><img src={house2} height="300" width="240" alt="house2"></img></div>
            <div className='house3'><img src={house3} height="300" width="240" alt="house3"></img></div>
            </div>
            <div className='d-flex'>
            <div className='house4'><img src={house4} height="290" width="240" alt="house4"></img></div>
            <div className='house5'><img src={house5} height="290" width="240" alt="house5"></img></div>
            </div>
            <div className='house1_1'>Loream ipsum is simply dummy text of <br/>the printing and typesetting</div>
            <hr className='house1_2'></hr>
            <div className='house1_3'>13 March,2020</div>
            <div className='house1_4'>Contrarty to popular belief, Loream ipsum is not simply random text.<br/>
            It has roots in a piece of classical latin literature from</div>
            <div className='house2_1'>There are many variations of<br/>passages of Loream ipsum</div>
            <hr  className='house2_2'></hr>
            <div className='house2_3'>13 March,2020</div>
            <div className='house3_1'>There are many variations of<br/>passages of Loream ipsum</div>
            <hr  className='house3_2'></hr>
            <div className='house3_3'>13 March,2020</div>
            <div className='house4_1'>There are many variations of<br/>passages of Loream ipsum</div>
            <hr  className='house4_2'></hr>
            <div className='house4_3'>13 March,2020</div>
            <div className='house5_1'>There are many variations of<br/>passages of Loream ipsum</div>
            <hr className='house5_2'></hr> 
            <div className='house5_3'>13 March,2020</div>
            <div className='text-light cl'>
            <div className='every'>Every thing is about to change.</div>
            <div className='ever'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore<br/>
             magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</div>
             <div className='d-flex box'>
             <div><input type="email" className='email_1' placeholder='Email Address'></input></div>&emsp;
             <div><button className='button'>SUBCRIBE</button></div></div>
            </div>
            <div className='street'><img src={street} alt="street" height="350" width="1520"></img></div>
            <div className='d-flex'><div className='wpl'>wp/</div><div className='real'>Real Estate</div></div>
            <div className='title'>
                <div className='homes'>HOME</div>
                <div className='abouts'>ABOUT</div>
                <div className='agentss'>AGENTS</div>
                <div className='props'> PROPERTIES</div>
                <div className='blogs'>BLOG</div>
                <div className='contacts'>CONTACT</div>
                </div>
            <div className='d-flex'>
                <div className='detail1'>
                <div className='font_size'><b>ABOUT</b></div>
                <div className='font_color'>
                <div>ABOUT STUDIO</div>&nbsp;
                <div>JOBS</div>&nbsp;
                <div>TEAMS</div>&nbsp;
                <div>SECURITY</div>
                </div></div>
                <div className='detail2'>
                <div className='font_size'><b>INFORMATION</b></div>
                <div className='font_color'>
                <div>CUSTOMER SERVICE</div>&nbsp;
                <div>LEGAL INFORMATION</div>&nbsp;
                <div>SUPPORT</div>&nbsp;
                <div>FAQ</div>
                </div></div>
                <div className='detail3'>
                <div className='font_size'><b>RECENT NEWS</b></div>
                <div className='font_color'>
                <div className='d-flex'><img src={logo1} height="60px" alt="logo1"></img>&nbsp;Proin eros nisl ornare sed<br/>&nbsp; vehicula sit amet, feugiat<br/>&nbsp;Aug 12 | 2017</div>&nbsp;
                <div className='d-flex'><img src={logo2} height="60px" alt="logo2"></img>&nbsp;Morbi placerat accumsan <br/>&nbsp;nunc, luctus lacinia nis <br/>&nbsp;Aug 12 | 2017</div>
                </div></div>
                <div className='detail4'>
                    <div className='font_size'><b>GET IN TOUCH</b></div>
                    <div className='font_color'>
                    <div><VscDebugStackframeDot/>&nbsp;San Fransisco, CA<br/>&nbsp;&nbsp;125, california, STP 2 Building</div>&nbsp;
                    <div><VscDebugStackframeDot/>&nbsp;www.studiotheme.com</div>&nbsp;
                    <div><VscDebugStackframeDot/>&nbsp;+123 5645 8934</div>
                </div></div>
            </div>
            <div className='bottom d-flex'>
                <div className='settings'><AiFillSetting size="30px"/></div>
                <div className='fb1'><TiSocialFacebookCircular size="30px"/></div>
                <div className='tw1'><TiSocialTwitterCircular size="32px"/></div>
                <div className='insta'><BsInstagram size="23px"/></div>
                <div className='privacy'>PRIVACY POLICY&nbsp;&nbsp;|&nbsp;&nbsp;TERMS AND CONDITIONS</div>
            </div>
        </div>
    )
} 

export default Website