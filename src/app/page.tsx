import Image from 'next/image';

import { Page } from "@/app/components/Page";

export default function HomePage() {
  return (
    <Page className='flex items-center laptop:justify-between desktop:justify-between wide:justify-between h-[100%] tablet:flex-col mobile:flex-col'>
      <section className='max-w-2xl tablet:hidden mobile:hidden'>
        <h1 className="text-7xl font-[600]">
          Bem-vindo ao <span className='font-extrabold text-green-600 transition-all hover:animate-pulse hover:text-8xl duration-[10]'>NutriPro</span>
        </h1>

        <p className='text-2xl mt-6'>Alcance suas metas de alimentação e saúde de maneira fácil e inteligente.</p>
      </section>

      <Image src="/images/healthy-meal.svg" alt="NutriPro" height={650} width={650} />
      <span className='laptop:hidden desktop:hidden wide:hidden text-7xl font-extrabold text-green-600 transition-all hover:animate-pulse hover:text-8xl duration-[10]'>NutriPro</span>
    </Page>
  );
}
