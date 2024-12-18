import React from 'react'
import { useState } from 'react'
import BotomNav from '../components/bottomnav';
import Wallet from '../components/wallet';
import Navbare from '../components/navbar';

const Deposit = () => {
  const [activestate, setActive] = useState("deposit");
  return (
    <div>
    <Navbare/>  
    <Wallet/>
    <div className='mt-16'>
      <div className='flex'>
        <div className='w-1/2 mx-2 h-32 flex flex-col justify-between rounded-lg shadow-lg'>
            <div className="flex items-center me-4 rounded-full">
              <input id="teal-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            </div>
          <img src="https://www.ethiotelecom.et/wp-content/uploads/2021/04/TeleBirr-Logo.svg" title="TeleBirr-Logo" alt="TeleBirr-Logo" />
        </div>
        <div className='w-1/2 mx-2 h-32 flex flex-col justify-between rounded-lg shadow-lg'>
            <div className="flex items-center me-4">
              <input id="teal-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            </div>
          <img alt="Workflow" src="https://combanketh.et/assets/static/logo2.a317524.582a952b08891175e981786ec3c017e5.webp"  data-src="https://combanketh.et/assets/static/logo2.a317524.582a952b08891175e981786ec3c017e5.webp" data-srcset="https://combanketh.et/assets/static/logo2.a317524.582a952b08891175e981786ec3c017e5.webp" srcset="https://combanketh.et/assets/static/logo2.a317524.582a952b08891175e981786ec3c017e5.webp" width="222" height="55"/>
        </div>
      </div>
      <div className='flex mt-10'>
        <div className='w-1/2 mx-2 h-32 flex flex-col justify-between rounded-lg shadow-lg'>
            <div className="flex items-center me-4">
              <input id="teal-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            </div>
            <img decoding="async" className="logo_retina lazyloaded" src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_222,h_55/https://www.bankofabyssinia.com/wp-content/uploads/2020/09/Asset-1@4x.png" data-src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_222,h_55/https://www.bankofabyssinia.com/wp-content/uploads/2020/09/Asset-1@4x.png" alt="Bank of Abyssinia" width="222" height="55"/>
        </div>
        <div className='w-1/2 mx-2 h-32 flex flex-col justify-between rounded-lg shadow-lg'>
            <div className="flex items-center me-4">
              <input id="teal-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            </div>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 167 63" xml:space="preserve" width="150"><path fill="#8dc63f" opacity="0.59" enable-background="new" d="M11.8,26.2h23.5l0,0l0,0c0,3.6-2.9,6.5-6.5,6.5c0,0,0,0,0,0h-17c-1.8,0-3.3-1.5-3.3-3.3l0,0l0,0
                                C8.6,27.7,10,26.2,11.8,26.2L11.8,26.2L11.8,26.2z"></path><path fill="#8dc63f" opacity="0.59" enable-background="new" d="M35.1,17.6l-4.7,6.5h6.2c3.6,0,6.5-2.9,6.5-6.5c0,0,0,0,0,0H35.1z"></path><path fill="#8dc63f" opacity="0.59" enable-background="new" d="M22.4,24l4.6-6.4H11.9C16.3,17.6,20.4,20.1,22.4,24z"></path><path fill="#7dc400" d="M22.4,24.1l0-0.1l-0.1,0.1H22.4z"></path><path fill="#7dc400" d="M27.2,17.4L27,17.6L22.4,24l0,0.1h-0.1l-1.5,2.1l-4.9,6.7c-1.9,2.2-5.3,2.5-7.5,0.6S5.9,28.2,7.8,26
                                c1-1.1,2.4-1.8,3.9-1.9h10.7l0.1-0.1c-2-3.9-6.1-6.4-10.5-6.4l0,0h-0.7C4.6,18-0.4,23.6,0,30.1s6,11.5,12.5,11.1
                                c3.4-0.2,6.6-1.9,8.6-4.5l0.4-0.6l0,0l7.2-9.9l1.5-2.1l4.7-6.5l1.2-1.6C33.4,13.9,29.3,14.5,27.2,17.4z"></path><path fill="#7dc400" d="M81.3,21.5v2.4c0.6-0.6,1.2-1,2-1.3c0.8-0.3,1.7-0.5,2.5-0.5c4.6,0,6.9,2.7,6.9,8.1v11l0,0
                                c-3.1,0-5.7-2.6-5.7-5.7v-4.9c0.1-0.9-0.2-1.8-0.8-2.5c-0.6-0.6-1.3-0.9-2.1-0.8c-0.8,0-1.5,0.3-2.1,0.8c-0.6,0.7-0.8,1.6-0.8,2.5
                                v10.6l0,0c-3.2,0-5.7-2.5-5.7-5.7c0,0,0,0,0,0V15.8l0,0C78.7,15.7,81.3,18.3,81.3,21.5C81.3,21.5,81.3,21.5,81.3,21.5z"></path><path fill="#7dc400" d="M116.1,31.9c0-1.8,0.5-3.5,1.5-4.9c1-1.5,2.3-2.7,3.9-3.5c2.8-1.5,6.2-1.7,9.2-0.6c1.3,0.5,2.4,1.2,3.4,2.1
                                c1,0.9,1.8,2,2.3,3.1c0.6,1.2,0.8,2.6,0.8,3.9c0,1.3-0.3,2.7-0.9,3.9c-0.5,1.2-1.3,2.3-2.3,3.1c-1,0.9-2.1,1.6-3.4,2.1
                                c-2.6,0.9-5.4,0.9-7.9,0l-0.4-0.2l-0.4-0.2v7.6l0,0c-3.2,0-5.7-2.6-5.7-5.7L116.1,31.9z M121.8,32c0,0.8,0.2,1.6,0.7,2.3
                                c0.4,0.7,1,1.3,1.8,1.7c0.7,0.4,1.5,0.6,2.3,0.6c0.8,0,1.7-0.2,2.4-0.6c0.7-0.4,1.3-1,1.8-1.7c0.4-0.7,0.7-1.5,0.7-2.3
                                c0-1.3-0.5-2.5-1.4-3.3c-1.9-1.8-4.9-1.8-6.7,0C122.4,29.6,121.8,30.7,121.8,32L121.8,32z"></path><path fill="#7dc400" d="M148.6,22.1c-5.4,0-9.8,4.4-9.8,9.8s4.4,9.8,9.8,9.8c2.1,0,4.1-0.7,5.8-1.9c1,1.2,2.4,1.9,4,1.9v-9.8
                                C158.4,26.5,154,22.1,148.6,22.1z M148.6,36.6c-2.6,0-4.6-2.1-4.6-4.7c0-2.6,2.1-4.6,4.7-4.6c2.6,0,4.6,2.1,4.6,4.7c0,0,0,0,0,0
                                C153.2,34.5,151.1,36.6,148.6,36.6C148.6,36.6,148.6,36.6,148.6,36.6z"></path><path fill="#7dc400" d="M104.4,22.1c-5.4,0-9.8,4.4-9.8,9.8c0,5.4,4.4,9.8,9.8,9.8c2.1,0,4.1-0.7,5.8-1.9c1,1.2,2.4,1.9,4,1.9v-9.8
                                C114.2,26.5,109.8,22.1,104.4,22.1z M104.4,36.6c-2.6,0-4.7-2.1-4.7-4.6s2.1-4.7,4.6-4.7c2.6,0,4.7,2.1,4.7,4.6c0,0,0,0,0,0
                                C109,34.5,107,36.6,104.4,36.6z"></path><path fill="#7dc400" d="M64.7,35.8c-3.9,0-7-3.2-7-7c0-3.9,3.2-7,7-7c1.9,0,3.6,0.8,4.9,2.1l4.1-4c-4.9-5-13-5.1-18-0.2s-5.1,13-0.2,18
                                s13,5.1,18,0.2c0,0,0.1-0.1,0.1-0.1l-4-4C68.4,35.1,66.6,35.8,64.7,35.8z"></path>
            </svg>
        </div>
      </div>

    </div>



    <BotomNav active={activestate} />
    </div>
  )
}

export default Deposit