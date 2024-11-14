class HeaderOmp extends HTMLElement {
    constructor() {
        super()
        this.build()
    }

    build() {
        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.styles());

        const header = this.createHeader();

        shadow.appendChild(header);

        window.addEventListener('resize', this.menuResponsive.bind(this));
        document.addEventListener('DOMContentLoaded', this.menuResponsive.bind(this));

    }

    createHeader() {
        const header = document.createElement('header');

        header.className = 'header';

        // Muda o caminho de acordo com a localização do chamado do script
        const basePath = window.location.pathname === '/oh-my-pet-website/index.html' ? './' : '../';

        header.innerHTML = `

           <div class="container-grid">
            <img id="icon-logo-compact" src="${basePath}images/logotipo/gatinho-icon.svg" alt="Versão compacta do Logotipo Oh My Pet">
            <div class="menu" id="menu">

                <div class="header-links">
                    <img id="icon-logo" src="${basePath}images/logotipo/logo-header.svg" alt="Logotipo OMP">

                    <nav class="header-nav">
                        <ul class="header-nav-lista">
                            <li>
                                <a class="link-omp" href="${basePath}index.html">Principal</a>
                            </li>
                            <li>
                                <a class="link-omp" href="${basePath}adocao/adocao.html">Adote</a>
                            </li>
                            <li>
                                <a class="link-omp" href="${basePath}/produtos/index.html">Produtos</a>
                            </li>
                            <li>
                                <a class="link-omp" href="${basePath}servicos/servicos.html">Serviços</a>
                            </li>
                        </ul>
                    </nav>

                    <div class="login-icons">
                        <a class="link-omp" href="${basePath}contato/contato.html">
                            <img src="${basePath}images/icons/contact-icon.svg" alt="">
                            Contato
                        </a>

                        <a class="link-omp" href="#">
                            <img src="${basePath}images/icons/login-icon.svg" alt="">
                            Entrar
                        </a>
                    </div>
                </div>

            </div>

            <button id="menu-button" class="menu-button">
                <svg id="icon-bars"  width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12.75C0 9.29297 2.80893 6.5 6.28571 6.5H81.7143C85.1911 6.5 88 9.29297 88 12.75C88 16.207 85.1911 19 81.7143 19H6.28571C2.80893 19 0 16.207 0 12.75ZM0 44C0 40.543 2.80893 37.75 6.28571 37.75H81.7143C85.1911 37.75 88 40.543 88 44C88 47.457 85.1911 50.25 81.7143 50.25H6.28571C2.80893 50.25 0 47.457 0 44ZM88 75.25C88 78.707 85.1911 81.5 81.7143 81.5H6.28571C2.80893 81.5 0 78.707 0 75.25C0 71.793 2.80893 69 6.28571 69H81.7143C85.1911 69 88 71.793 88 75.25Z" fill="#6460A7"/>
                </svg>

                <svg id="icon-x" width="88" height="118" viewBox="0 0 88 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M78.5125 34.5126C81.3771 31.648 81.3771 26.9959 78.5125 24.1313C75.6479 21.2668 70.9958 21.2668 68.1313 24.1313L44 48.2855L19.8458 24.1543C16.9813 21.2897 12.3292 21.2897 9.4646 24.1543C6.60002 27.0188 6.60002 31.6709 9.4646 34.5355L33.6188 58.6668L9.48752 82.8209C6.62293 85.6855 6.62293 90.3376 9.48752 93.2022C12.3521 96.0668 17.0042 96.0668 19.8688 93.2022L44 69.048L68.1542 93.1793C71.0188 96.0439 75.6709 96.0439 78.5354 93.1793C81.4 90.3147 81.4 85.6626 78.5354 82.798L54.3813 58.6668L78.5125 34.5126Z" fill="#6460A7"/>
                </svg>
            </button>
        </div>

        `;

        const menuButton = header.querySelector('#menu-button');
        menuButton.addEventListener('click', this.openCloseMenu.bind(this));
        return header;

    }

    openCloseMenu(event) {

        const menuButton = event.currentTarget;
        const menu = menuButton.parentElement.querySelector('#menu');
        const iconBars = menuButton.querySelector('#icon-bars');
        const iconX = menuButton.querySelector('#icon-x');
        // const iconBars = menu.getElementById('icon-bars');
        // const iconX = event.currentTarget.getElementById('icon-x');

        if ( menu.classList.contains("menu-closed") ) {
            menu.classList.remove("menu-closed");

            iconBars.style.display = "none";
            iconX.style.display = "inLine";
        }
        else {
            menu.classList.add("menu-closed");

            iconX.style.display = "none";

            iconBars.style.display = "inLine";
        }

    }

    menuResponsive(event) {
        const menu = this.shadowRoot.getElementById('menu');
        const iconBars = this.shadowRoot.getElementById('icon-bars');
        const iconX = this.shadowRoot.getElementById('icon-x');

        const mediaQuery = window.matchMedia('(max-width: 1350px)');
        if (mediaQuery.matches) {
            menu.classList.add("menu-closed");
            iconX.style.display = "none";
            iconBars.style.display = "inLine";
        }else {
            if(menu.classList.contains("menu-closed")){
                menu.classList.remove("menu-closed");
                iconX.style.display = "none";
                iconBars.style.display = "inLine";
            }
        }
    }

    styles() {
        const style = document.createElement('style');

        style.textContent = `

        :host {
            --laranja-claro-omp: #FBD4BA;
            --roxo-claro-omp: #CECCE7;
            --roxo-omp: #6460A7 ;
            --laranja-omp: #D65F36 ;
            --roxo-escuro-omp: #2A315B ;
            --laranja-escuro-omp: #753E2B;
            --bege-omp: #F4F3EE;
            --cinza-omp: #515151;
        }


        h1, h2, h3{
            font-family: 'Dosis';
            font-size: 1.5em;
            font-weight: 600;
            text-decoration-line: none;
        }

        .container-grid {
            max-width: 1620px;
            width: 80vw;
            margin: 0 auto;
        }

        .header {
            height: 149px;
            width: 100%;

            display: flex;
            align-items: center;

            background-color: var(--bege-omp);
        }

        #icon-logo {
        }

        #icon-logo-compact {
            display: none;
        }

        .menu {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .header-links {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .menu-closed {
            display: none;
        }

        #icon-bars {
            display: none;
        }

        .menu-button {
            display: none;
            border: none;
        }

        .header-nav {
            display: flex;
            justify-content: space-between;
        }

        .header-nav-lista{
            /* Preciso calcular em porcentagem*/
            width: 539px;

            display: flex;
            justify-content: space-between;
            gap: 24px;
            list-style-type: none;
            padding: 0;
        }

        .link-omp {
            color: var(--cinza-omp);
            font-family: 'Dosis';
            font-size: 1.5em;
            font-weight: 600;
            text-decoration-line: none;
            cursor: pointer;
        }

        .link-omp:hover {
            color: black;
        }

        .header .container-grid {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .login-icons {
            display: flex;
            gap: 24px;
        }

        .header .login-icons a{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 8px;
        }

        #icon-bars {
            width: 36px;
            height: 36px;
        }

        #icon-x {
            width: 36px;
            height: 48px;
        }


        @media screen and (max-width: 1350px){
            .header {
                height: 50px;
            }

            #icon-logo-compact {
                display: inline;
            }

            #icon-logo {
                display: none;
            }

            .menu-button {
                display: inline;
            }

            .header .container-grid {
                justify-content: space-between;
            }

            .menu {
                flex-direction: column;
                justify-content: center;

                width: 425px;
                height: calc(100vh - 50px);

                background-color: var(--bege-omp);

                position: absolute;
                z-index: 50;
                top: 50px;
                right: 0;

                padding: 24px 16px;
            }

            .header-links {
                width: 80%;
                flex-direction: column;
                gap: 62px;

                border: solid 2px var(--laranja-omp);
                border-radius: 35px;

                padding: 48px 0;
            }

            .header-nav-lista {
                width: 100%;
                flex-direction: column;
                align-items: center;
                gap: 48px;
            }

            .login-icons {
               flex-direction: column;
               align-items: center;
            }
        }

        @media screen and (max-width: 500px) {
            .menu {
                width: 100%;
            }
        }

        `
        return style
    }


}

customElements.define('header-omp', HeaderOmp);