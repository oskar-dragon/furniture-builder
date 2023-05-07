import { PageWrapper } from '@/components/layout/PageWrapper';

export default function FurnitureBuilderPage() {
  return (
    <PageWrapper className="min-h-screen">
      <div className="flex flex-col shadow-sm lg:min-h-[calc(100vh-8.5rem)] lg:flex-row lg:bg-gray-100">
        <div className="bg-gray-100 shadow-sm lg:flex-1 lg:shadow-none">Furniture builder</div>
        <div className="bg-white lg:mb-8 lg:mr-8 lg:max-h-[calc(100%-8rem)] lg:basis-[360px]">Config</div>
      </div>
    </PageWrapper>
  );
}
