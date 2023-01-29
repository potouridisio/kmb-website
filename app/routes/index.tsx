import ArrowUpward from '~/components/arrow-upward';
import ButtonWithIcon from '~/components/button-with-icon';

const icon = <ArrowUpward className="h-[1em] w-[1em] rotate-45 text-[1rem] xl:text-[1.375rem] 3xl:text-[1.75rem]" />;

export default function Index() {
  return (
    <div className="bg-white text-black">
      <section className="flex min-h-screen items-center p-6 xl:p-16">
        <div className="xl:grid xl:grid-cols-12 xl:gap-x-16">
          <div className="max-xl:mb-16 xl:col-span-7">
            <h1 className="text-header">Dedicated Software Boutique.</h1>
          </div>
          <div className="xl:col-span-5 xl:flex xl:flex-col xl:items-start xl:justify-end">
            <p className="text-body mb-16">
              We scale through the scaling of the projects we participate in and not by the quantity of them. That's the
              cornerstone of our business model. We invest more in relationships and less in google ads.
            </p>
            <ButtonWithIcon
              className="text-black shadow-black hover:bg-black hover:text-white"
              icon={icon}
              iconClassName="border-black after:bg-black"
            >
              Who we are
            </ButtonWithIcon>
          </div>
        </div>
      </section>
    </div>
  );
}
