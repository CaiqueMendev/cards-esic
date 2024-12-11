import React from 'react';
import CardButton from './CardButton';
import CardInput from './CardInput';

const Card = ({ cardType }) => {

    // Configurações específicas de cada Card
    const cardConfigs = {

        // Card Login
        login: {

            // Titulo
            tittle: "Acessar",

            // Conteúdo
            content:

                <div className='w-full gap-3 flex flex-col'>

                    <CardInput type={"email"}/>

                    <CardInput type={"password"}/>

                </div>,
            
            // Cor
            bg_color: "#B2EAD0",
            
            // Configurações específicas do Botão

                // Status
                buttonDisabled: "False",

                // Ação ao clicar
                onClickEvent: "",

                // Estilização
                buttonText: "Acessar",
                buttonType: "green",
                buttonClassName: "",

            // ------------------------------------
        },

        // Card Cadastro
        register: {

            // Titulo
            tittle: "Cadastre-se",

            // Conteúdo
            content: <p>para ter acesso ao sistema, é necessário que o requerente faça seu cadastro.</p>,

            // Cor
            bg_color: "#B2EAD0",
            
            // Configurações específicas do Botão

                // Status
                buttonDisabled: "False",

                // Ação ao clicar
                onClickEvent: "",

                // Estilização
                buttonText: "Cadastre-se",
                buttonType: "green",
                buttonClassName: "",

            // -----------------------------------

        },

        // Card Recuperação de Senha
        forgetPassword: {

            // Titulo
            tittle: "Esqueci a senha",

            // Conteúdo
            content: <p>As instruções para recuperação da senha serão enviadas para o  e-mail cadastrado no sistema.</p>,

            // Cor
            bg_color: "#B2EAD0",
            
            // Configurações específicas do Botão

                // Status
                buttonDisabled: "False",

                // Ação ao clicar
                onClickEvent: "",

                // Estilização
                buttonText: "Recuperar senha",
                buttonType: "green",
                buttonClassName: "",

            // ----------------------------------
        },

        // Card Pedido de Informação
        askInfo: {

            // Titulo
            tittle: "Como solicitar informações",

            // Conteúdo
            content: <p>Conheça o passo a passo para fazer o seu primeiro pedido de informação em apenas cinco etapas.</p>,

            // Cor
            bg_color: "#B2EAD0",
            
            // Configurações específicas do Botão

                // Status
                buttonDisabled: "False",

                // Ação ao clicar
                onClickEvent: "",

                // Estilização
                buttonText: "Passo a passo",
                buttonType: "green",
                buttonClassName: "",
            
            // -------------------------------------
        },

        // Card Prazo de Retorno
        returnDelay: {

            // Titulo
            tittle: "Prazo de retorno",

            // Conteúdo
            content: <p>O prazo de retorno de sua solicitação é de <span style={{ fontWeight: "bold"}} >20 dias, prorrogável por mais 10 dias</span> mediante justificativa expressa.</p>,
            
            // Cor
            bg_color: "#F8DD9F",
            
            // Configurações Específicas do Botão
                
                // Status
                buttonDisabled: "True",

                // Ação ao clicar
                onClickEvent: "",

                // Estilização
                buttonText: "",
                buttonType: "",            
                buttonDisabled: "True",
                buttonClassName: "",

            // ------------------------------------
        },

        // Card FAQ
        questions: {

            // Titulo
            tittle: "Qual a finalidade do e-SIC",

            // Conteúdo
            content: <p>Facilitar o acesso às informações públicas, cadastrar requerimentos, entrar com recursos e acompanhar o andamento de suas solicitações.</p>,
            
            // Cor
            bg_color: "#C3F2F3",
            
            // Configurações específicas do Botão

                // Status
                buttonDisabled: "False",

                // Ação ao clicar
                onClickEvent: "",

                // Estilização
                buttonText: "Dúvidas frequentes",
                buttonType: "blue",
                buttonClassName: "",

            // ------------------------------------
        },

        // Card do Manual
        manual: {

            // Titulo
            tittle: "Manual do usuário",

            // Conteúdo
            content: <p>Antes de solicitar informação, leia o Manual e conheça os procedimentos para fazer sua solicitação.</p>,

            // Cor
            bg_color: "#C3F2F3",

            // Configurações específicas do Botão

                // Status
                buttonDisabled: "False",
            
                // Ação ao clicar
                onClickEvent: "",

                // Estilização
                buttonText: "Abrir o manual",
                buttonType: "blue",
                buttonClassName: "",

            // -----------------------------------
        },

        // Card da Lei
        law: {

            // Titulo
            tittle: "Conheça a Lei 12.527",

            // Conteúdo
            content: <p>A Lei de Acesso à Informação (LAI), garante a qualquer cidadão o direito de acessar informações públicas, promovendo transparência e controle social.</p>,
            
            // Cor
            bg_color: "#C3F2F3",
            
            // Configurações específicas do Botão
                
                // Status
                buttonDisabled: "False",

                // Ação ao clicar
                onClickEvent: "",

                // Estilização
                buttonText: "Abrir a Lai",
                buttonType: "blue",
                buttonClassName: "",

            // -------------------------------------

        }
    };

    // --------------------------------------------------------------------------------

    // Configurações de Card Padrão 
    const cardConfig = cardConfigs[cardType] || {
        
        // Titulo
        tittle: "Default Card",

        // Conteúdo
        content: <p>Card Content</p>,

        // Cor
        bg_color: "#B2EAD0",

        // Configurações específicas do Botão

            // Status
            buttonDisabled: "False",

            // Ação ao clicar
            onClickEvent: "",

            // Estilização
            buttonText: "Button",
            buttonType: "green",
            buttonClassName: "",

        // --------------------------------------

    }

    // --------------------------------------------------------------------------------
    
    return (

        // Card
        <div className='container flex flex-col justify-between gap-12 p-4 h-auto rounded-lg shadow-md'
            style={{backgroundColor: cardConfig.bg_color}}
        >

            
            <div className='flex flex-col gap-9'>
                
                <div>
                    <img src={`/build/assets/buttonIcons/${cardType}.png`} alt="" className='h-10 w-10'/>
                </div>
                
                <div className='text-base text-[#3D3D3D] flex flex-col gap-5 tracking-tight leading-snug'>
                    <h1 className='text-lg font-semibold'>{cardConfig.tittle}</h1>
                    {cardConfig.content}
                </div>

            </div>

            <CardButton
                text={cardConfig.buttonText}
                type={cardConfig.buttonType}
                // onClick={() => /* definir ação onClick */}
                disabled={cardConfig.buttonDisabled === "True"}
                className={cardConfig.buttonClassName}
            />

        </div>

    );
};

export default Card;