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
            <div className="mx-3 my-3">
                <div className="flex flex-col flex-wrap items-center gap-5 mt-5 lg:flex-row">
                    <div className="flex">
                        <iframe className="rounded-[12px]" src="https://open.spotify.com/embed/playlist/3ANX9HHM0aySWpZJlZ5ZA9?utm_source=generator&theme=0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                    <div className="flex">
                        <iframe className="rounded-[12px]" src="https://open.spotify.com/embed/playlist/69XppgozeMZvDOTNym5Uzp?utm_source=generator&theme=0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                    <div className="flex">
                        <iframe className="rounded-[12px]" src="https://open.spotify.com/embed/playlist/64JX1mlBqWDNIqdtQvNA3M?utm_source=generator&theme=0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                    <div className="flex">
                        <iframe className="rounded-[12px]" src="https://open.spotify.com/embed/playlist/5JhOT2EWqSXopxVPTZFArD?utm_source=generator&theme=0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                    <div className="flex">
                        <iframe className="rounded-[12px]" src="https://open.spotify.com/embed/playlist/4DbEXiJhACd5WTHE8qsIXI?utm_source=generator&theme=0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                    <div className="flex">
                        <iframe className="rounded-[12px]" src="https://open.spotify.com/embed/playlist/6Rc8DrjUVBxXlRmi0VxPyg?utm_source=generator&theme=0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center my-10">
                    <Link href={'https://open.spotify.com/user/jwcrgr6ig95alm0os9tuc9tq1?si=0cc2057d114c4ca0'}rel="noopener noreferrer" target="_blank">
                        <span className='justify-center px-6 py-2 m-2 font-extrabold rounded-l-full rounded-r-full text-black bg-[#a2ff9a] hover:bg-[#b9ffb4]'>See More...</span>
                    </Link>
                </div>
        </section>
            
    </div>
    )
}
