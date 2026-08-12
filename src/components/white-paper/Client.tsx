//white paper client
import { cn } from '@/utils/cn';
import clientLogo1 from '@public/images/icons/client-logo-1.svg';
import clientLogo2 from '@public/images/icons/client-logo-2.svg';
import clientLogo3 from '@public/images/icons/client-logo-3.svg';
import clientLogo4 from '@public/images/icons/client-logo-4.svg';
import clientLogo5 from '@public/images/icons/client-logo-5.svg';
import clientLogo1Dark from '@public/images/icons/client-logo-dark-1.svg';
import clientLogo2Dark from '@public/images/icons/client-logo-dark-2.svg';
import clientLogo3Dark from '@public/images/icons/client-logo-dark-3.svg';
import clientLogo4Dark from '@public/images/icons/client-logo-dark-4.svg';
import clientLogo5Dark from '@public/images/icons/client-logo-dark-5.svg';
import Image, { StaticImageData } from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

interface ClientLogo {
  id: string;
  light: StaticImageData | string;
  dark: StaticImageData | string;
}

const clientLogos: ClientLogo[] = [
  {
    id: '1',
    light: clientLogo1,
    dark: clientLogo1Dark,
  },
  {
    id: '2',
    light: clientLogo2,
    dark: clientLogo2Dark,
  },
  {
    id: '3',
    light: clientLogo3,
    dark: clientLogo3Dark,
  },
  {
    id: '4',
    light: clientLogo4,
    dark: clientLogo4Dark,
  },
  {
    id: '5',
    light: clientLogo5,
    dark: clientLogo5Dark,
  },
];

const Clients = () => {
  return (
    <section className="py-16 lg:py-20 xl:py-28">
      <div className="main-container">
        <div className="text-center">
          <RevealAnimation delay={0.1}>
            <h2 className="text-heading-3">Transforming business success with NextSaaS</h2>
          </RevealAnimation>
        </div>
      </div>
      <div className="py-14">
        <RevealAnimation delay={0.2}>
          <Marquee autoFill speed={30}>
            <div className="flex items-center justify-center gap-8">
              {clientLogos.map((logo, index) => (
                <figure key={logo.id} className={cn('w-28 md:w-36', index === 0 && 'ml-8')}>
                  <Image src={logo.light} alt="Client logo" className="inline-block lg:w-auto dark:hidden" />
                  <Image src={logo.dark} alt="Client logo" className="hidden lg:w-auto dark:inline-block" />
                </figure>
              ))}
            </div>
          </Marquee>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Clients;
