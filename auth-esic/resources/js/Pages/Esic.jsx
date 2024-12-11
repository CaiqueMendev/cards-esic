import React from 'react';
import Card from '../Components/Card';

// Definir nome da Prefeitura
const PrefeituraName = "Prefeitura Municipal de Guanambi";

const Esic = () => {

  return (

    // body
    <div className='w-screen h-screen bg-[#f1f2f4]'>
    
      <div className='w-8/12 mx-auto flex flex-col'>

        <div className='w-full flex-col p-3 space-y-4'>

          <h1 className='text-2xl font-semibold'>Bem Vindo ao e-SIC</h1>

          <p className='text-lg opacity-80'>
            O e-SIC (Sistema Eletrônico do Serviço de Informação ao Cidadão) permite que qualquer pessoa encaminhe pedidos de à informação a {PrefeituraName}.
          </p>

        </div>

        <div className='w-full grid grid-cols-4 gap-6'>
          <Card cardType="login"/>
          <Card cardType="register"/>
          <Card cardType="forgetPassword"/>
          <Card cardType="askInfo"/>
          <Card cardType="returnDelay"/>
          <Card cardType="questions"/>
          <Card cardType="manual"/>
          <Card cardType="law"/>
        </div>

      </div>

    </div>
    
  );
};

export default Esic;
