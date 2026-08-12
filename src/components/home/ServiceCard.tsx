import { cn } from '@/utils/cn';
import { ServiceData } from './Services';

interface ServiceCardProps {
  service: ServiceData;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <div
      className={cn(
        'border-stroke-1 col-span-12 flex w-full flex-col items-center gap-y-[22px] rounded-[20px] border px-8 py-10.5 md:col-span-4 md:max-w-[314px] md:items-start lg:col-span-3',
        index === 6 && 'col-start-auto md:col-start-3 lg:col-start-auto',
      )}>
      <span className="bg-ns-green flex size-14 items-center justify-center rounded-full p-3.5" aria-hidden="true">
        {service.icon}
      </span>
      <h3
        className="text-heading-6 max-w-[200px] text-center leading-[150%] font-normal text-[#12161F] md:text-left"
        itemProp="name">
        {service.title}
      </h3>
    </div>
  );
};

ServiceCard.displayName = 'ServiceCard';
export default ServiceCard;
