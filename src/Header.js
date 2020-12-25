import React from 'react'
import "./Header.css"
import logo from "./img/Zalando_logo.svg.png"

function Header() {
    return (
        <div className="header">
            <div className="top-header-info">
                <div>Alla Sveriges <font color="#FF6900">favoritmärken</font></div>
                <div> <font color="#FF6900">Fri frakt</font> och retur*</div>
                <div><font color="#FF6900">100 dagars</font> öppet köp</div>
            </div>

            <div className="logo-container">
            <div className="header-icons">
            <button>Kvinna</button>
            <button>Man</button>
            <button>Barn</button>
            </div>

            <img src={logo} alt="zalando logo"/>
            
            <div className="header-icons">
            <div className="login"></div>
            <div className="wishlist"></div>
            <div className="cart"></div>
            </div>
            </div>
            
            <div className="nav-bar">
                <ul>
                    <li><a href="">Get the Look</a></li>
                    <li><a href="">JUL🎄</a></li>
                    <li><a href="">Nytt</a></li>                 
                    <li><a href="">Kläder</a></li>                 
                    <li><a href="">Skor</a></li>                
                    <li><a href="">Accessoarer</a></li>                  
                    <li><a href="">Sport</a></li>                   
                    <li><a href="">Designermode</a></li>                   
                    <li><a href="">Beauty</a></li>                
                    <li><a href="">Märken</a></li>                
                    <li><a href="">Outlet</a></li>    
                    <form>
                    <input type="search" placeholder="Search"/>
                </form>              
                </ul>

                
            </div>
        </div>
    )
}

export default Header
