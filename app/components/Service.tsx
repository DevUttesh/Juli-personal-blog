import React from 'react'

const Service = () => {
  return (
    <section className='h-max m-auto sm:px-10 p-5 sm:p-12 bg-gray-100 flex flex-col gap-5 ' >
      <div className='container flex flex-col sm:flex-row gap-5  ' >

        <div className='bg-white flex-1 flex flex-col justify-center items-center gap-5 hover:shadow-2xl group  transition ease-in-out duration-500 p-5' >
          <div className=" flex items-center justify-center w-full h-full">
            <svg className='fill-gray-100 group-hover:fill-blue-500 transition ease-in-out duration-500' width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
              <path stroke="none" strokeWidth="0" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
            </svg>
            <svg className="absolute w-6 h-6 text-gray-800 dark:text-white fill-blue-500 group-hover:fill-gray-200 transition ease-in-out duration-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className='font-bold text-xl' >Lorem Ipsum</h1>
          <p className='bg-white text-gray-500' >Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
        </div>

        <div className='bg-white flex-1 flex flex-col justify-center items-center gap-5 hover:shadow-2xl group  transition ease-in-out duration-500 p-5' >
          <div className=" flex items-center justify-center w-full h-full">
            <svg className='fill-gray-100 group-hover:fill-orange-400 transition ease-in-out duration-500' width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
              <path stroke="none" strokeWidth="0" d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"></path>
            </svg>
            <svg className="absolute w-6 h-6 text-orange-400 group-hover:text-gray-50 fill-transparent transition ease-in-out duration-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 20">
              <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M6 1v4a1 1 0 0 1-1 1H1m14-4v16a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2Z" />
            </svg>
          </div>
          <h1 className='font-bold text-xl' >Lorem Ipsum</h1>
          <p className='bg-white text-gray-500' >Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
        </div>

        <div className='bg-white flex-1 flex flex-col justify-center items-center gap-5 hover:shadow-2xl group  transition ease-in-out duration-500 p-5' >
          <div className=" flex items-center justify-center w-full h-full">
            <svg className='fill-gray-200 group-hover:fill-pink-500 transition ease-in-out duration-500' width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
              <path stroke="none" strokeWidth="0" d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"></path>
            </svg>
            <svg className="absolute w-6 h-6 fill-transparent group-hover:text-gray-50  dark:text-white text-pink-500 transition ease-in-out duration-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
            </svg>
          </div>
          <h1 className='font-bold text-xl' >Lorem Ipsum</h1>
          <p className='bg-white text-gray-500' >Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
        </div>

      </div>

      <div className='container flex flex-col sm:flex-row gap-5  ' >

        <div className='bg-white flex-1 flex flex-col justify-center items-center gap-5 hover:shadow-2xl group  transition ease-in-out duration-500 p-5' >
          <div className=" flex items-center justify-center w-full h-full">
            <svg className='fill-gray-200 group-hover:fill-yellow-300 transition ease-in-out duration-500' width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
              <path stroke="none" strokeWidth="0" d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"></path>
            </svg>
            <svg className="absolute w-6 h-6 text-yellow-300 dark:text-white fill-transparent group-hover:text-gray-200 transition ease-in-out duration-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 9.376v.786l8 3.925 8-3.925v-.786M1.994 14.191v.786l8 3.925 8-3.925v-.786M10 1.422 2 5.347l8 3.925 8-3.925-8-3.925Z" />
            </svg>
          </div>
          <h1 className='font-bold text-xl' >Lorem Ipsum</h1>
          <p className='bg-white text-gray-500' >Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
        </div>

        <div className='bg-white flex-1 flex flex-col justify-center items-center gap-5 hover:shadow-2xl group  transition ease-in-out duration-500 p-5' >
          <div className=" flex items-center justify-center w-full h-full">
            <svg className='fill-gray-200 group-hover:fill-green-500 transition ease-in-out duration-500' width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
              <path stroke="none" strokeWidth="0" d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572"></path>
            </svg>
            <svg className="absolute w-6 h-6 text-green-500 dark:text-white fill-blue-500 group-hover:text-gray-200 transition ease-in-out duration-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
            </svg>
          </div>
          <h1 className='font-bold text-xl' >Lorem Ipsum</h1>
          <p className='bg-white text-gray-500' >Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
        </div>

        <div className='bg-white flex-1 flex flex-col justify-center items-center gap-5 hover:shadow-2xl group  transition ease-in-out duration-500 p-5' >
          <div className=" flex items-center justify-center w-full h-full">
            <svg className='fill-gray-200 group-hover:fill-fuchsia-500 transition ease-in-out duration-500' width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
              <path stroke="none" strokeWidth="0" d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"></path>
            </svg>
            <svg className="absolute w-6 h-6 fill-transparent text-fuchsia-500 dark:text-white group-hover:text-gray-50 transition ease-in-out duration-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
            </svg>
          </div>
          <h1 className='font-bold text-xl' >Lorem Ipsum</h1>
          <p className='bg-white text-gray-500' >Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
        </div>

      </div>



    </section>
  )
}

export default Service