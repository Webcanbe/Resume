import Heading from '@/components/glossary/Heading';
import ShowGlossary from '@/components/glossary/ShowGlossary';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Glossary - AI Resume Builder || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-2 dark:bg-background-7">
      <Heading />
      <ShowGlossary />
    </main>
  );
};

export default page;
