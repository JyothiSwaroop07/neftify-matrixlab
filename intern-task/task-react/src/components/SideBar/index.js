import React from 'react';
import './index.css'
const SideBar = (props)=>{
    const {tokenfetch,pairfetch,active} = props
    const clicktoken = () =>{   
            tokenfetch()
    }
    const clikpair=()=>{
        pairfetch()
    }
return( 
  <div className="nav">
            <div className='nav-element nav-logo'>
              <figure className='nav-logo-fig'>
                <img className='nav-logo-img' src="https://res.cloudinary.com/dcqgdxcz3/image/upload/v1693049270/nav-logo_lhkncu.png" alt='logo'/>  
              </figure>
              <p className='logo-name' >NFTify</p>
            </div>
            <div className="nav-elements">
              <div className={active==="ta"?'nav-element nav-tokken hd':'nav-element nav-tokken'  }  >
                <div className='svg'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="M19.97 6.43L12 2L4.03 6.43L9.1 9.24C9.83 8.48 10.86 8 12 8C13.14 8 14.17 8.48 14.9 9.24L19.97 6.43ZM10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12ZM11 21.44L3 17V8.14L8.13 10.99C8.04 11.31 8 11.65 8 12C8 13.86 9.27 15.43 11 15.87V21.44ZM13 21.44V15.87C14.73 15.43 16 13.86 16 12C16 11.65 15.96 11.31 15.87 10.99L21 8.14V17L13 21.44Z" fill="white"/>
                  </svg>
                </div>
                <button className={active==="ta"?'sidebar-text hd': "sidebar-text"} type="button" onClick={clicktoken} >Token Address</button>
              </div>
              <div className={active==="pa"?'nav-element nav-tokken hd':'nav-element nav-tokken'  }    >
                <div className='svg'>
                  <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24" fill="none">
                    <path d="M18.268 21.001H11.732C11.5783 21.2662 11.3656 21.4926 11.1105 21.6625C10.8554 21.8325 10.5646 21.9416 10.2607 21.9813C9.95668 22.021 9.64765 21.9903 9.35743 21.8915C9.06721 21.7928 8.80357 21.6287 8.58688 21.4118C8.3702 21.195 8.20626 20.9312 8.10773 20.6409C8.0092 20.3506 7.97873 20.0416 8.01865 19.7376C8.05858 19.4337 8.16784 19.143 8.338 18.888C8.50816 18.633 8.73466 18.4205 9 18.267V15L5.73 15.001C5.56714 15.2829 5.3379 15.5209 5.0622 15.6941C4.78651 15.8673 4.47268 15.9706 4.148 15.995L4 16C3.55975 16 3.1318 15.8547 2.78253 15.5867C2.43326 15.3187 2.18218 14.9429 2.06824 14.5176C1.95429 14.0924 1.98384 13.6414 2.15231 13.2347C2.32077 12.8279 2.61874 12.4881 3 12.268V5.732C2.7343 5.57862 2.50745 5.36618 2.337 5.11111C2.16654 4.85603 2.05705 4.56516 2.017 4.261C1.97694 3.95684 2.0074 3.64754 2.10601 3.35703C2.20462 3.06652 2.36873 2.8026 2.58566 2.58566C2.8026 2.36873 3.06652 2.20462 3.35703 2.10601C3.64754 2.0074 3.95684 1.97694 4.261 2.017C4.56516 2.05705 4.85603 2.16654 5.11111 2.337C5.36618 2.50745 5.57862 2.7343 5.732 3H12.268C12.4214 2.7343 12.6338 2.50745 12.8889 2.337C13.144 2.16654 13.4348 2.05705 13.739 2.017C14.0432 1.97694 14.3525 2.0074 14.643 2.10601C14.9335 2.20462 15.1974 2.36873 15.4143 2.58566C15.6313 2.8026 15.7954 3.06652 15.894 3.35703C15.9926 3.64754 16.0231 3.95684 15.983 4.261C15.9429 4.56516 15.8335 4.85603 15.663 5.11111C15.4925 5.36618 15.2657 5.57862 15 5.732V9H18.268C18.4308 8.71774 18.6602 8.47954 18.9361 8.30612C19.212 8.13271 19.526 8.02934 19.851 8.005L20 8C20.4401 7.99996 20.8679 8.14509 21.2172 8.41289C21.5664 8.68069 21.8176 9.05622 21.9317 9.48126C22.0459 9.9063 22.0166 10.3571 21.8486 10.7639C21.6805 11.1706 21.3829 11.5105 21.002 11.731V18.269C21.2674 18.4226 21.4939 18.6353 21.664 18.8904C21.8342 19.1456 21.9433 19.4364 21.9831 19.7405C22.0229 20.0446 21.9922 20.3538 21.8934 20.6441C21.7946 20.9344 21.6304 21.1981 21.4134 21.4149C21.1965 21.6316 20.9325 21.7955 20.6421 21.894C20.3517 21.9925 20.0425 22.0228 19.7385 21.9827C19.4344 21.9426 19.1437 21.8331 18.8887 21.6627C18.6337 21.4923 18.4214 21.2666 18.268 21.001ZM18.268 11.001L15 11L15.001 12.268C15.2831 12.431 15.5211 12.6603 15.6943 12.9362C15.8675 13.2121 15.9708 13.5261 15.995 13.851L16 14C16.0002 14.4403 15.8551 14.8684 15.5871 15.2179C15.3192 15.5673 14.9434 15.8186 14.5181 15.9326C14.0928 16.0467 13.6418 16.0172 13.2349 15.8488C12.8281 15.6803 12.4882 15.3823 12.268 15.001L11.001 15L11.002 18.269C11.305 18.444 11.557 18.697 11.732 18.999H18.268C18.4442 18.6951 18.6969 18.4428 19.001 18.267V11.733C18.748 11.5867 18.53 11.3871 18.362 11.148L18.268 11.001ZM13 11L11.732 11.001C11.5564 11.3037 11.3047 11.5554 11.002 11.731L11.001 13H12.268C12.4439 12.6963 12.6963 12.4439 13 12.268V11ZM12.268 5.001H5.732C5.55637 5.30374 5.30474 5.55537 5.002 5.731V12.268C5.304 12.444 5.557 12.697 5.732 13H9.001V11.733C8.71842 11.5702 8.47994 11.3407 8.30634 11.0647C8.13274 10.7886 8.02929 10.4742 8.005 10.149L8 10C8.00002 9.55975 8.1453 9.1318 8.41332 8.78253C8.68133 8.43326 9.0571 8.18218 9.48235 8.06824C9.9076 7.95429 10.3586 7.98384 10.7653 8.15231C11.1721 8.32077 11.5119 8.61874 11.732 9H13V5.732C12.7475 5.58594 12.5298 5.38666 12.362 5.148L12.268 5.001Z" fill="white"/>
                  </svg>
                </div>
                <button className={active==="pa" ? 'sidebar-text hd': "sidebar-text"} type="button" onClick={clikpair} >Pair Address</button> 
              </div>
            </div>
            <div className='social-icons'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='s-icon' >
                    <g clip-path="url(#clip0_32_78)">
                        <path d="M17.981 0H6C2.70476 0 0 2.70476 0 6.01905V18C0 21.2952 2.70476 24 6 24H17.981C21.2952 24 24 21.2952 24 17.981V6.01905C24 2.70476 21.2952 0 17.981 0ZM15.219 12H12.9524V19.4286H10.0952V12H8.57143V8.95238H9.90476V7.65714C9.90476 6.4381 10.5143 4.51429 13.0857 4.51429H15.4286V7.04762H13.7714C13.5048 7.04762 13.1429 7.21905 13.1429 7.80952V8.95238H15.4857L15.219 12Z" fill="#F30050"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_32_78">
                        <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='s-icon' >
                    <g clip-path="url(#clip0_32_82)">
                        <path d="M17.9667 0.00952148H6.01427C2.70262 0.00952148 0 2.71214 0 6.0238V17.9952C0 21.2879 2.70262 23.9905 6.01427 23.9905H17.9857C21.2974 23.9905 24 21.2879 24 17.9762V6.0238C23.981 2.71214 21.2784 0.00952148 17.9667 0.00952148ZM7.99366 19.4227H4.5678V9.52578H7.99366V19.4227ZM6.2617 8.00318C5.29104 8.00318 4.51071 7.22284 4.51071 6.25219C4.51071 5.28153 5.29104 4.50119 6.2617 4.50119C7.23236 4.50119 8.01269 5.28153 8.01269 6.25219C7.99366 7.22284 7.21332 8.00318 6.2617 8.00318ZM19.4322 19.4227H19.4132H16.5583V14.6265C16.5583 13.4655 16.406 11.981 14.8263 11.981C13.2086 11.981 12.9421 13.2371 12.9421 14.5504V19.4227H10.0872V9.52578H12.7518V10.8581H12.8279C13.2466 10.0968 14.2173 9.50675 15.7399 9.50675C18.8803 9.50675 19.4322 11.3148 19.4322 13.9984V19.4227Z" fill="#F30050"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_32_82">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='s-icon' >
                    <g clip-path="url(#clip0_32_86)">
                        <path d="M17.9667 0.00952148H6.01427C2.70262 0.00952148 0 2.71214 0 6.0238V17.9952C0 21.2879 2.70262 23.9905 6.01427 23.9905H17.9857C21.2974 23.9905 24 21.2879 24 17.9762V6.0238C23.981 2.71214 21.2784 0.00952148 17.9667 0.00952148ZM17.9477 8.99287C17.9477 9.1261 17.9477 9.25932 17.9477 9.39255C17.9477 13.3894 14.8644 17.9952 9.21174 17.9952C7.47978 17.9952 5.86201 17.5004 4.51071 16.6439C4.75813 16.663 4.98652 16.682 5.23394 16.682C6.68041 16.682 7.99366 16.2062 9.04044 15.3878C7.68914 15.3688 6.56622 14.4933 6.16653 13.2942C6.35686 13.3323 6.54718 13.3513 6.73751 13.3513C7.023 13.3513 7.30849 13.3132 7.55591 13.2371C6.18557 12.9516 5.13878 11.7336 5.13878 10.268V10.23C5.51943 10.4584 6.01427 10.5916 6.50912 10.6106C5.69072 10.0777 5.13878 9.14513 5.13878 8.09834C5.13878 7.5464 5.29104 7.03252 5.55749 6.57574C7.0801 8.40286 9.32593 9.60191 11.8763 9.73514C11.8192 9.50675 11.8002 9.27836 11.8002 9.04997C11.8002 7.3751 13.1705 6.0238 14.8644 6.0238C15.7399 6.0238 16.5393 6.38541 17.1102 6.97542C17.8144 6.84219 18.4615 6.59477 19.0515 6.23315C18.8232 6.93736 18.3283 7.52736 17.7002 7.90801C18.3283 7.83188 18.9183 7.67962 19.4703 7.4322C19.0515 8.04124 18.5377 8.57415 17.9477 8.99287Z" fill="#F30050"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_32_86">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>          
          </div>

)
}


export default SideBar 