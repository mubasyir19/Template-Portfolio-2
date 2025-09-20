import { skills } from '@/utils/skills';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className=''>
      <section className='h-screen px-5 flex items-center justify-center'>
        <div className=''>
          <div className='mx-auto bg-linear-to-br from-[#FF8660] to-[#9A33FF] rounded-full size-36 lg:size-52 overflow-hidden'>
            <Image
              src={`/images/avatar2.png`}
              width={213}
              height={213}
              alt='avatar'
              className='size-40 lg:size-60 object-cover'
            />
          </div>
          <h1 className='mt-10 text-white text-center font-extrabold text-3xl lg:text-6xl'>
            I do code and <br /> make content{' '}
            <span className='bg-linear-to-br from-[#FF8660]  to-[#9A33FF] bg-clip-text text-transparent'>
              about it!
            </span>
          </h1>
          <p className='mt-10 text-[#C5C5C5] text-center w-full lg:w-1/2 mx-auto'>
            I am a seasoned full-stack software engineer with over 8 years of professional experience, specializing in
            backend development. My expertise lies in crafting robust and scalable SaaS-based architectures on the
            Amazon AWS platform.
          </p>
          <div className='mt-14 flex items-center justify-center gap-4'>
            <button className='bg-white rounded-full py-4 px-7 text-black font-semibold'>Get In Touch</button>
            <button className='border-2 border-white rounded-full py-4 px-7 text-white font-semibold'>
              Download CV
            </button>
          </div>
        </div>
      </section>
      <section className='py-20 px-5'>
        <h3 className='text-[#C5C5C5] font-semibold uppercase text-center text-xl'>Experience With</h3>
        <div className='flex flex-wrap items-center justify-center gap-14 mt-12'>
          {skills.map((sk, index) => (
            <Image key={index} src={sk.link} width={42} height={42} alt={sk.name} className='h-12 w-auto' />
          ))}
        </div>
      </section>
      <section className='py-12 px-5'>
        <h2 className='text-4xl font-extrabold text-center text-[#FF8660]'>Projects</h2>
        <div className='mt-7 grid grid-cols-1 md:grid-cols-2 w-full lg:w-3/5 mx-auto gap-7 justify-items-center'>
          <div id='project' className='w-fit'>
            <Image
              src={`/images/projects/project1.png`}
              width={390}
              height={235}
              alt='project'
              className='rounded-t-2xl'
            />
            <div className='bg-[#2A2A2A] py-3 px-6 rounded-b-2xl flex items-center justify-between'>
              <div className=''>
                <p className='uppercase font-extrabold text-xs text-secondary'>CLICK HERE TO VISIT</p>
                <h3 className='uppercase font-extrabold text-lg text-white'>HTML TUTORIAL</h3>
              </div>
              <div className=''>
                <Link href={`#`}>
                  <ArrowUpRight className='size-6 text-white' />
                </Link>
              </div>
            </div>
          </div>
          <div id='project' className='w-fit'>
            <Image
              src={`/images/projects/project2.png`}
              width={390}
              height={235}
              alt='project'
              className='rounded-t-2xl'
            />
            <div className='bg-[#2A2A2A] py-3 px-6 rounded-b-2xl flex items-center justify-between'>
              <div className=''>
                <p className='uppercase font-extrabold text-xs text-secondary'>CLICK HERE TO VISIT</p>
                <h3 className='uppercase font-extrabold text-lg text-white'>CSS TUTORIAL</h3>
              </div>
              <div className=''>
                <Link href={`#`}>
                  <ArrowUpRight className='size-6 text-white' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-12 px-5'>
        <h2 className='text-4xl font-extrabold text-center bg-linear-to-r from-[#5BFF9F] to-[#13D195] bg-clip-text text-transparent'>
          Education
        </h2>
        <div className='mt-14 w-full lg:w-3/5 mx-auto space-y-12'>
          <div id='experience' className=''>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3.5'>
                <Image src={`/images/gundar.png`} width={35} height={35} alt='logo' className='w-auto h-12' />
                <div className=''>
                  <h3 className='text-white font-bold text-xl'> Informatics Engineering</h3>
                  <p className='text-light-grey text-sm'>Gunadarma University</p>
                </div>
              </div>
              <div className=''>
                <p className='text-light-grey text-sm text-end'>Sep 2020 - Sep 2024</p>
              </div>
            </div>
            <div className='mt-6'>
              <p className='text-light-grey text-sm'>
                As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for
                Google&apos;s core search algorithms. Collaborating with a dynamic team of engineers, I contributed to
                the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users
                worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='py-12 px-5'>
        <h2 className='text-4xl font-extrabold text-center bg-linear-to-r from-[#5BADFF] to-[#1373D1] bg-clip-text text-transparent'>
          Experience
        </h2>
        <div id='list-experience' className='mt-14 w-full lg:w-3/5 mx-auto space-y-12'>
          <div id='experience' className=''>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2.5'>
                <Image src={`/images/logos/google-logo.png`} width={35} height={35} alt='logo' className='w-auto h-8' />
                <h3 className='text-white font-bold text-xl'>Lead Software Engineer at Google</h3>
              </div>
              <div className=''>
                <p className='text-light-grey text-sm text-end'>Nov 2019 - Present</p>
              </div>
            </div>
            <div className='mt-6'>
              <p className='text-light-grey text-sm'>
                As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for
                Google&apos;s core search algorithms. Collaborating with a dynamic team of engineers, I contributed to
                the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users
                worldwide.
              </p>
            </div>
          </div>
          <div id='experience' className=''>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2.5'>
                <Image src={`/images/logos/apple-logo.png`} width={35} height={35} alt='logo' className='w-auto h-8' />
                <h3 className='text-white font-bold text-xl'>Junior Software Engineer at Apple</h3>
              </div>
              <div className=''>
                <p className='text-light-grey text-sm text-end'>Jan 2016 - Dec 2017</p>
              </div>
            </div>
            <div className='mt-6'>
              <p className='text-light-grey text-sm'>
                During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping
                the architecture of mission-critical software projects. Responsible for designing scalable and efficient
                systems, I provided technical leadership to a cross-functional team.
              </p>
            </div>
          </div>
          <div id='experience' className=''>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2.5'>
                <Image src={`/images/logos/meta-logo.png`} width={35} height={35} alt='logo' className='w-auto h-8' />
                <h3 className='text-white font-bold text-xl'>Software Engineer at Meta</h3>
              </div>
              <div className=''>
                <p className='text-light-grey text-sm text-end'>Jan 2017 - Oct 2019</p>
              </div>
            </div>
            <div className='mt-6'>
              <p className='text-light-grey text-sm'>
                At Meta, I served as a Software Engineer, focusing on the design and implementation of backend systems
                for the social media giant&apos;s dynamic platform. Working on projects that involved large-scale data
                processing and user engagement features, I leveraged my expertise to ensure seamless functionality and
                scalability.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className='py-24 px-5 bg-[#191919]'>
        <div className='w-full lg:w-3/5 mx-auto'>
          <h3 className='text-white font-bold text-2xl'>Contact</h3>
          <p className='mt-9 w-full lg:w-3/4 text-light-grey text-sm'>
            Seasoned Full Stack Software Engineer with over 8 years of hands-on experience in designing and implementing
            robust, scalable, and innovative web solutions. Adept at leveraging a comprehensive skill set encompassing
            front-end and back-end technologies{' '}
          </p>
          <div className='mt-5 flex items-center gap-1'>
            <Image src={`/images/mail.svg`} width={16} height={16} alt='icon' />
            <p className='text-secondary font-semibold text-sm'>mhdy.dev@gmail.com</p>
          </div>
          <div className='mt-12 flex items-center gap-7'>
            <Link href={`#`}>
              <Image src={`/images/logos/instagram.png`} width={18} height={18} alt='icon' />
            </Link>
            <Link href={`#`}>
              <Image src={`/images/logos/x.png`} width={19} height={18} alt='icon' />
            </Link>
            <Link href={`#`}>
              <Image src={`/images/logos/youtube.png`} width={23} height={18} alt='icon' />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
