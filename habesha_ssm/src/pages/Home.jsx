import { useState } from 'react'
import Navbare from '../components/navbar'
import BotomNav from '../components/bottomnav'
import Wallet from '../components/wallet'


function Home() {
  const [activestate, setActive] = useState("services");
  return (
    <>
      <Navbare/>
      <Wallet/>

      <div>
        <h1 className='font-black text-5xl text-center mt-6'>Services</h1>
        <p className='text-center mx-6 my-5'>Extensive catalog of promotion services social profiles.</p>
      </div>



      <div className='overflow-hidden'>
        <div className='mx-4'> 
          
            <ul className="my-4 mx-0 space-y-3">
              <li>
                <a href="#" className="flex w-full items-center p-4 text-base font-bold text-gray-900 rounded-lg hover:bg-gray-100 group shadow-lg hover:shadow">
                <svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M34.3125 7.8125C35.0625 10.4375 35.0625 16.0625 35.0625 16.0625C35.0625 16.0625 35.0625 21.625 34.3125 24.3125C33.9375 25.8125 32.75 26.9375 31.3125 27.3125C28.625 28 18 28 18 28C18 28 7.3125 28 4.625 27.3125C3.1875 26.9375 2 25.8125 1.625 24.3125C0.875 21.625 0.875 16.0625 0.875 16.0625C0.875 16.0625 0.875 10.4375 1.625 7.8125C2 6.3125 3.1875 5.125 4.625 4.75C7.3125 4 18 4 18 4C18 4 28.625 4 31.3125 4.75C32.75 5.125 33.9375 6.3125 34.3125 7.8125ZM14.5 21.125L23.375 16.0625L14.5 11V21.125Z" fill="#EB5757"/>
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap text-[18px]">Youtube</span>
                  <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded">Popular</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-4 text-base font-bold text-gray-900 rounded-lg hover:bg-gray-100 group shadow-lg hover:shadow ">
                  <svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 13.125C27.1875 13.1875 24.5625 12.3125 22.3125 10.6875V21.875C22.3125 29.6875 13.8125 34.5625 7.0625 30.6875C0.3125 26.75 0.3125 17 7.0625 13.0625C9 11.9375 11.3125 11.5 13.5625 11.8125V17.4375C10.125 16.3125 6.8125 19.375 7.5625 22.875C8.375 26.375 12.625 27.75 15.3125 25.3125C16.25 24.4375 16.8125 23.1875 16.8125 21.875V0L22.3125 0C22.3125 0.5 22.3125 0.9375 22.4375 1.4375C22.8125 3.5 24 5.3125 25.8125 6.4375C27 7.25 28.5 7.6875 30 7.6875V13.125Z" fill="#020E21"/>
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap text-[18px]">TikTok</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-4 text-base font-bold text-gray-900 rounded-lg hover:bg-gray-100 group shadow-lg hover:shadow ">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M16 8.8125C19.9375 8.8125 23.1875 12.0625 23.1875 16C23.1875 20 19.9375 23.1875 16 23.1875C12 23.1875 8.8125 20 8.8125 16C8.8125 12.0625 12 8.8125 16 8.8125ZM16 20.6875C18.5625 20.6875 20.625 18.625 20.625 16C20.625 13.4375 18.5625 11.375 16 11.375C13.375 11.375 11.3125 13.4375 11.3125 16C11.3125 18.625 13.4375 20.6875 16 20.6875ZM25.125 8.5625C25.125 7.625 24.375 6.875 23.4375 6.875C22.5 6.875 21.75 7.625 21.75 8.5625C21.75 9.5 22.5 10.25 23.4375 10.25C24.375 10.25 25.125 9.5 25.125 8.5625ZM29.875 10.25C30 12.5625 30 19.5 29.875 21.8125C29.75 24.0625 29.25 26 27.625 27.6875C26 29.3125 24 29.8125 21.75 29.9375C19.4375 30.0625 12.5 30.0625 10.1875 29.9375C7.9375 29.8125 6 29.3125 4.3125 27.6875C2.6875 26 2.1875 24.0625 2.0625 21.8125C1.9375 19.5 1.9375 12.5625 2.0625 10.25C2.1875 8 2.6875 6 4.3125 4.375C6 2.75 7.9375 2.25 10.1875 2.125C12.5 2 19.4375 2 21.75 2.125C24 2.25 26 2.75 27.625 4.375C29.25 6 29.75 8 29.875 10.25ZM26.875 24.25C27.625 22.4375 27.4375 18.0625 27.4375 16C27.4375 14 27.625 9.625 26.875 7.75C26.375 6.5625 25.4375 5.5625 24.25 5.125C22.375 4.375 18 4.5625 16 4.5625C13.9375 4.5625 9.5625 4.375 7.75 5.125C6.5 5.625 5.5625 6.5625 5.0625 7.75C4.3125 9.625 4.5 14 4.5 16C4.5 18.0625 4.3125 22.4375 5.0625 24.25C5.5625 25.5 6.5 26.4375 7.75 26.9375C9.5625 27.6875 13.9375 27.5 16 27.5C18 27.5 22.375 27.6875 24.25 26.9375C25.4375 26.4375 26.4375 25.5 26.875 24.25Z" fill="#DA0DA0"/>
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap text-[18px]">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-4 text-base font-bold text-gray-900 rounded-lg hover:bg-gray-100 group shadow-lg hover:shadow ">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M31.5 16C31.5 23.75 25.8125 30.1875 18.375 31.3125V20.5H22L22.6875 16H18.375V13.125C18.375 11.875 19 10.6875 20.9375 10.6875H22.875V6.875C22.875 6.875 21.125 6.5625 19.375 6.5625C15.875 6.5625 13.5625 8.75 13.5625 12.625V16H9.625V20.5H13.5625V31.3125C6.125 30.1875 0.5 23.75 0.5 16C0.5 7.4375 7.4375 0.5 16 0.5C24.5625 0.5 31.5 7.4375 31.5 16Z" fill="#4D30FF"/>
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap text-[18px]">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-4 text-base font-bold text-gray-900 rounded-lg hover:bg-gray-100 group shadow-lg hover:shadow ">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M16 0.5C24.5 0.5 31.5 7.5 31.5 16C31.5 24.5625 24.5 31.5 16 31.5C7.4375 31.5 0.5 24.5625 0.5 16C0.5 7.5 7.4375 0.5 16 0.5ZM23.125 11.0625C23.1875 10.875 23.1875 10.6875 23.125 10.4375C23.125 10.3125 23 10.125 22.9375 10.0625C22.75 9.875 22.4375 9.875 22.3125 9.875C21.75 9.875 20.8125 10.1875 16.5 12C15 12.625 12 13.875 7.5 15.875C6.75 16.1875 6.375 16.4375 6.3125 16.75C6.25 17.25 7.0625 17.4375 8 17.75C8.8125 18 9.875 18.3125 10.4375 18.3125C10.9375 18.3125 11.5 18.125 12.125 17.6875C16.3125 14.8125 18.5 13.375 18.625 13.375C18.75 13.375 18.875 13.3125 18.9375 13.375C19.0625 13.5 19.0625 13.625 19 13.6875C18.9375 14 15 17.625 14.75 17.875C13.875 18.75 12.875 19.3125 14.4375 20.3125C15.75 21.1875 16.5 21.75 17.875 22.625C18.75 23.1875 19.4375 23.875 20.3125 23.8125C20.75 23.75 21.1875 23.375 21.375 22.1875C21.9375 19.5 22.9375 13.5 23.125 11.0625Z" fill="#3C8AFF"/>
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap text-[18px]">Telegram</span>
                </a>
              </li>
            </ul>

        </div>
      </div>
      <BotomNav active={activestate} />
    </>
  )
}

export default Home
