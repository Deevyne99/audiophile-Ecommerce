import React from 'react'
import zx9 from '../../images/zx9-speaker.png'
import { Link } from 'react-router-dom'
import earPod from '../../images/ear-pod.png'
import earPodTab from '../../images/earpod-tablet.png'
import earPodMob from '../../images/earpod-mobile.png'
// import ovalImg from '../../images/oval-2.png'
// import ovalImage from '../../images/Oval-3.png'
const Introduction = () => {
  return (
    <section className='flex flex-col mx-4 md:mx-16 lg:mx-24 pb-8'>
      <div className='flex flex-col lg:flex-row bg-orange h-[550px] sm:h-[700px] lg:h-[400px]  justify-between rounded-md items-center '>
        <div className='relative mb-[-60px] w-full lg:w-1/2  flex flex-col justify-center   '>
          <div className='w-[320px] h-[320px] mt-[-40px] sm:w-[500px] sm:h-[500px] sm:mt-[-80px] xl:w-[700px] xl:h-[700px] lg:w-[650px] lg:h-[650px] xl:ml-[-20px] lg:ml-[-40px]  md:mt-[-90px] lg:mt-[100px] mx-auto   border-white border-[1px] border-b-0 opacity-25  rounded-full'>
            <div className='w-[250px] h-[250px] sm:h-[380px] sm:w-[380px] md:w-[380px] md:h-[380px]  mt-[20px] md:mt-[60px] lg:mt-48 mx-auto   border-white border-[1px] border-b-0   rounded-full   '>
              <div className='w-[220px] h-[220px] sm:h-[350px] sm:w-[350px] md:w-[350px] md:h-[350px] mt-4 mx-auto border-white border-[1px]   rounded-full   '></div>
            </div>
          </div>
          <img
            className='absolute w-36 mt-[-70px] sm:mt-[-160px] md:mt-[-120px] lg:mt-[-30px] sm:w-52 md:w-60 lg:w-80 mx-auto z-10 left-0 lg:left-20 right-0 '
            src={zx9}
            alt='speaker'
          />
        </div>
        <article className='flex relative lg:relative pb-36  flex-col space-y-6 text-white px-4 md:px-12 pt-16 lg:w-1/2 w-full md:mt-[-120px] md:pb-32 md:mx-auto mx-0 md:justify-center lg:mt-0 text-center lg:text-left lg:pb-0'>
          <h2 className='text-4xl font-bold uppercase'>zx9 speakers</h2>
          <p className='max-w-xs flex font-thin text-md opacity-75 mx-auto lg:mx-0'>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link className='p-2 uppercase bg-[#000000] w-[130px] text-center mx-auto lg:mx-0'>
            see product
          </Link>
        </article>
      </div>
      <div className='lg:bg-wideImage bg-smallImage  sm:bg-smallImage md:bg-mediumImage w-full mt-8 z-10  bg-cover   bg-center bg-no-repeat h-[400px] md:h-[300px] rounded-md'>
        <div className='flex flex-col mx-4 md:mx-24 mt-32 md:mt-16 space-y-8'>
          <h2 className='md:text-4xl text-3xl font-semibold uppercase '>
            zx7 speaker
          </h2>
          <Link className='p-2 uppercase bg-transparent hover:bg-[#000000] hover:text-white border-[2px] border-[#000000] w-[130px] text-center  text-[#000000]'>
            see product
          </Link>
        </div>
      </div>
      <div className='flex flex-col md:flex-row mx-auto justify-center md:items-stretch items-center mt-8 gap-6 w-full '>
        <img className='md:w-1/2 w-full' src={earPod} alt='ear pod' />

        <div className='bg-grayColor w-full  md:w-1/2 flex flex-col justify-center items-center  space-y-8 rounded-md py-12  px-4'>
          <h2 className='md:text-4xl text-3xl font-semibold uppercase '>
            YX1 EARPHONES
          </h2>
          <Link className='p-2 uppercase bg-transparent hover:bg-[#000000] hover:text-white border-[2px] border-[#000000] w-[130px] text-center  text-[#000000]'>
            see product
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Introduction
