import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Discord, Nextdotjs, Nodedotjs, ReactJs, Html5, CssThree, Javascript, Tailwindcss, Python, Git, Visualstudiocode } from '@icons-pack/react-simple-icons';
import {IoLocationSharp} from 'react-icons/io5';

export default function Index() {
    return (
    <div className="">
        <Head>
            <title>• Storm</title>
            <meta name="" content="" />
            <link rel="icon" href="/favicon.svg" />
        </Head>   
        <section className='max-w-[80%] ml-auto mr-auto'>
            <div className="links"> 
                <ul className='flex font-extrabold'>
                    <li><Link href={'https://github.com/stormforcejj'} rel="noopener noreferrer" target="_blank"><Github className="justify-center mx-2" color='#fff' size={30} /></Link></li>
                    <li className='py-1'>
                        <Link href={'https://goo.gl/maps/Vev1nLPSzN9ztcYG8'}rel="noopener noreferrer" target="_blank">
                            <span className='justify-center px-6 py-2 m-2 font-extrabold rounded-l-full rounded-r-full bg-neutral-900 hover:bg-neutral-800'>Wales</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <h1 className='text-[50px] font-extrabold'>Hi, I'm Storm 👋</h1>
            <p className='text-lg'>I'm a 17 year old aspiring developer and student from Wales. I primarily deal with web technologies, such as NextJS or React, however I am always willing to give something new a try!</p>
            <h2 className='text-[35px] font-extrabold pt-5'>What am I doing at the moment?</h2>
            <p className='text-lg'>Currently I'm having lots of fun learning Java for schoolwork</p>
            <h2 className='text-[35px] font-extrabold pt-5'>Experience</h2>
            <div className="mx-10 my-3">
                <div className="grid grid-cols-2 gap-4 text-lg md:grid-cols-5">
                    <div>
                        <span><Nextdotjs className='inline-flex align-center' color='#fff' size={20}/> NextJS</span>
                    </div>
                    <div>
                        <span><Nodedotjs className='inline-flex align-center' color='#fff' size={20}/> NodeJS</span>
                    </div>
                    <div>
                        <span><ReactJs className='inline-flex align-center' color='#fff' size={20}/> React</span>
                    </div>
                    <div>
                        <span><Javascript className='inline-flex align-center' color='#fff' size={20}/> JavaScript</span>
                    </div>
                    <div>
                        <span><Tailwindcss className='inline-flex align-center' color='#fff' size={20}/> Tailwind</span>
                    </div>
                    <div>
                        <span><Html5 className='inline-flex align-center' color='#fff' size={20}/> HTML</span>
                    </div>
                    <div>
                        <span><CssThree className='inline-flex align-center' color='#fff' size={20}/> CSS</span>
                    </div>
                    <div>
                        <span><Python className='inline-flex align-center' color='#fff' size={20}/> Python</span>
                    </div>
                    <div>
                        <span><Git className='inline-flex align-center' color='#fff' size={20}/> Git</span>
                    </div>
                    <div>
                        <span><Visualstudiocode className='inline-flex align-center' color='#fff' size={20}/> VS Code</span>
                    </div>
                </div>
            </div>
            <div className="my-7 text-neutral-600">
                <hr className='border-neutral-900' />
                <h2 className='text-[35px] font-extrabold pt-5'>Storm</h2>
                <p className='text-[20px]'>stormforcejj.co.uk • 2023</p>
            </div>
            

        </section>
    </div>
    )
}
