import { PageWrapper } from '@/components/layout/PageWrapper';
import { Button, Divider } from '@/components/ui';
import { DesktopConfigurator, FurnitureHeader } from '@/feature/furniture-builder';

export default function FurnitureBuilderPage() {
  return (
    <PageWrapper className="min-h-screen">
      <div className="flex flex-col shadow-sm lg:min-h-[calc(100vh-8.5rem)] lg:flex-row lg:bg-gray-100">
        <FurnitureHeader name="Test" price={1199} className="bg-gray-100 pt-2 lg:hidden" />
        <div className="bg-gray-100 shadow-sm lg:flex-1 lg:shadow-none">Furniture builder</div>
        <div className="rounded-b-lg bg-white p-4 shadow lg:mb-8 lg:mr-8 lg:basis-[430px]">
          <FurnitureHeader name="Test" price={1199} className="hidden lg:block" />
          <Divider className="my-2" />
          <DesktopConfigurator />
        </div>
      </div>
    </PageWrapper>
  );
}
