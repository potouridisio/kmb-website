import ArrowUpward from '~/components/arrow-upward';
import ButtonWithIcon from '~/components/button-with-icon';
import PinnedWithDifferentContent from '~/components/pinned-with-different-content';
import Toolbar from '~/components/toolbar';

const icon = <ArrowUpward className="h-[1em] w-[1em] rotate-45 text-[1rem] xl:text-[1.375rem] 3xl:text-[1.75rem]" />;

export default function Index() {
  return (
    <>
      <div className="bg-white text-black">
        <section className="flex min-h-screen items-center p-6 xl:p-16">
          <div className="xl:grid xl:grid-cols-12 xl:gap-x-16">
            <div className="max-xl:mb-16 xl:col-span-7">
              <h1 className="text-header">Dedicated Software Boutique.</h1>
            </div>
            <div className="xl:col-span-5 xl:flex xl:flex-col xl:items-start xl:justify-end">
              <p className="text-body mb-16">
                We scale through the scaling of the projects we participate in and not by the quantity of them. That's
                the cornerstone of our business model. We invest more in relationships and less in google ads.
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
        <PinnedWithDifferentContent>
          <section className="min-h-screen p-6 xl:p-16">
            <Toolbar />
            <div className="xl:grid xl:grid-cols-12 xl:gap-x-16">
              <div className="xl:col-span-3">
                <h2 className="text-subheader mb-16">01 Define</h2>
                <p className="text-body">
                  We "suffer" the problem and we embrace the solution. We study our users in order to understand the
                  project's nature and appreciate the value it brings. We engage with the People behind it and listen
                  carefully to their goals, ideas and concerns.
                </p>
              </div>
            </div>
          </section>
          <section className="min-h-screen p-6 xl:p-16">
            <Toolbar />
            <div className="xl:grid xl:grid-cols-12 xl:gap-x-16">
              <div className="xl:col-span-3">
                <h2 className="text-subheader mb-16">02 Ideate</h2>
                <p className="text-body">
                  We break the project down into maths. We identify the immediate and future challenges and we architect
                  solutions that scale. We help our Client identify the development strategy that matches their pace and
                  serves their goals.
                </p>
              </div>
            </div>
          </section>
          <section className="min-h-screen p-6 xl:p-16">
            <Toolbar />
            <div className="xl:grid xl:grid-cols-12 xl:gap-x-16">
              <div className="xl:col-span-3">
                <h2 className="text-subheader mb-16">03 Thrive</h2>
                <p className="text-body mb-16">
                  We stick to the plan in order for you to stay true to your goals. We help your business thrive by
                  conducting your business idea, scale and adapt on an ever changing tech environment. We help you
                  contribute positively to the world.
                </p>
                <ButtonWithIcon
                  className="text-black shadow-black hover:bg-black hover:text-white"
                  icon={icon}
                  iconClassName="border-black after:bg-black"
                >
                  Our work
                </ButtonWithIcon>
              </div>
            </div>
          </section>
        </PinnedWithDifferentContent>
      </div>
    </>
  );
}
