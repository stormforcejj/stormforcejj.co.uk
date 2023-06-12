import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Index() {
    return (
    <div className="">
        <Head>
            <title>• James</title>
            <meta name="" content="" />
            <link rel="icon" href="/favicon.svg" />
        </Head>
        <section className='max-w-[80%] ml-auto mr-auto'>
            <h1 className='text-[50px] font-extrabold'>About</h1>
            <p className='text-lg'>Hey, I'm James. I'm 17 years old and live in Wales. I am an aspiring developer, with a passion for music and photography. I'm currently dabbling in NextJS and React (what this site is coded in). Alongside experience in the frameworks this website is made with I also have experience in Java & Python among other things. </p>
            <h2 className='my-5 text-[35px] font-extrabold'>Playlists</h2>
            <div className="mx-10 my-3">
                <div className="flex flex-col flex-wrap items-center gap-5 mt-5 text-lg lg:flex-row">
                    <div className="flex p-3 m-3 rounded-md basis-1/3 justify-evenly bg-neutral-900">
                        <Image src="https://i.scdn.co/image/ab67706c0000da8470db048900ab42fe533d8692" alt={'Lofi Cover'} width='50' height='50' className='rounded-md' />
                        <p className='align-center'>Lofi</p>
                    </div>
                    <div className="flex p-3 m-3 rounded-md basis-1/3 justify-evenly bg-neutral-900">
                        <p>Hi</p>
                    </div>
                    <div className="flex p-3 m-3 rounded-md basis-1/3 justify-evenly bg-neutral-900">
                        <p>Hi</p>
                    </div>
                    <div className="flex p-3 m-3 rounded-md basis-1/3 justify-evenly bg-neutral-900">
                        <p>Hi</p>
                    </div>
                    <div className="flex p-3 m-3 rounded-md basis-1/3 justify-evenly bg-neutral-900">
                        <p>Hi</p>
                    </div>
                    <div className="flex p-3 m-3 rounded-md basis-1/3 justify-evenly bg-neutral-900">
                        <p>Hi</p>
                    </div>
                </div>
            </div>
        </section>
            
    </div>
    )
}
