import ArrowUpward from '~/components/arrow-upward';
import ButtonWithIcon from '~/components/button-with-icon';
import Image from '~/components/image';
import LayeredPinning from '~/components/layered-pinning';
import PinnedWithDifferentContent from '~/components/pinned-with-different-content';
import Reveal from '~/components/reveal';
import Toolbar from '~/components/toolbar';
import home from '~/images/01_HOME_CLEAN.jpg';
import kmbPattern from '~/images/KMB_PATTERN.png';

const icon = <ArrowUpward className="h-[1em] w-[1em] rotate-45 text-[1rem] xl:text-[1.375rem] 3xl:text-[1.75rem]" />;

export default function Index() {
  return (
    <>
      <LayeredPinning>
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
                    We break the project down into maths. We identify the immediate and future challenges and we
                    architect solutions that scale. We help our Client identify the development strategy that matches
                    their pace and serves their goals.
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
          <Reveal>
            <section className="h-screen">
              <div className="relative h-full">
                <Image
                  alt="Home"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/7AARRHVja3kAAQAEAAAASAAA/+EAGEV4aWYAAElJKgAIAAAAAAAAAAAAAAD/4QOBaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA3LjItYzAwMCA3OS4xYjY1YTc5YjQsIDIwMjIvMDYvMTMtMjI6MDE6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9IjczMjI0NjVCOEMyODMzQzgyNDFBQTQ4MjU0QkJBRTc1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM1MTNGOUEzNDkxMjExRUQ5RDFFRjRDNDM3QTA1NDE5IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM1MTNGOUEyNDkxMjExRUQ5RDFFRjRDNDM3QTA1NDE5IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjViNGY1NzkzLTc2NGMtYjM0OC05MThlLTIwZWNmNzEyNzc3NCIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmUwMDI5Yzg4LWY2OGUtNTc0YS05YzJhLTZkOGQ4OGEzZDQ3NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/bAEMAAwICAgICAwICAgMDAwMEBgQEBAQECAYGBQYJCAoKCQgJCQoMDwwKCw4LCQkNEQ0ODxAQERAKDBITEhATDxAQEP/AAAsIAAYACgEBEQD/xAAVAAEBAAAAAAAAAAAAAAAAAAAFB//EACMQAAEEAQMEAwAAAAAAAAAAAAECAwQRBQAGCBITFiEiUrH/2gAIAQEAAD8AF2zyix8PHvTtxQcs84mMypSI3RTkg3ftS/igpCLoE+jVanrHNPLymW5PiwHeSHKEhIqxf0P7r//Z"
                  className="absolute left-0 top-0 h-full w-full object-cover"
                  src={home}
                />
                <Image
                  alt="KMB Pattern"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAQAAABQ+cdNAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfnAgUNMhvlRiwGAAAAE0lEQVQI12M8w8mAAZgYGOgjCABragDhkJZgrwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wMi0wNVQxMzo1MDoxOSswMDowMDOpdOIAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDItMDVUMTM6NTA6MTkrMDA6MDBC9MxeAAAAAElFTkSuQmCC"
                  className="absolute left-0 top-0 h-full w-full object-cover"
                  src={kmbPattern}
                />
              </div>
            </section>
          </Reveal>
        </div>
        <div className="relative min-h-screen bg-black text-white">
          <span className="absolute bottom-full left-0 -mb-px h-6 w-full rounded-t-3xl bg-inherit" />
          <section className="p-6 xl:p-16">
            <Toolbar />
            <div className="xl:grid xl:grid-cols-12 xl:gap-x-16">
              <div className="max-xl:mb-16 xl:col-span-4">
                <h2 className="text-subheader">Selected Clients</h2>
              </div>
              <div className="xl:col-span-4 xl:col-start-9">
                <ul>
                  <li className="text-body">Hellenic Cardiological Society (GR, Athens)</li>
                  <li className="text-body">Hellenic Veterinary Medical Society (GR, Thessaloniki)</li>
                  <li className="text-body">JellNetworks (US, California)</li>
                  <li className="text-body">Municipality of Kalamaria (GR, Thessaloniki)</li>
                  <li className="text-body">Margaritidis A/V (GR, Thessaloniki)</li>
                  <li className="text-body">Monsoon Strategy (US, Phoenix)</li>
                  <li className="text-body">Moosend (UK, London)</li>
                  <li className="text-body">Neocles BV (NL, Amsterdam)</li>
                  <li className="text-body">Omilia (GR, Athens)</li>
                  <li className="text-body">PEVE (GR, Thessaloniki)</li>
                  <li className="text-body">Pureprofile (AU, Sydney)</li>
                  <li className="text-body">Ryver (US, Phoenix)</li>
                  <li className="text-body">ShopperTrack (US, Chicago)</li>
                  <li className="text-body">Twenty (SE, Stockholm)</li>
                  <li className="text-body">University of Zurich (CH, Zurich)</li>
                  <li className="text-body">vLine (US, California)</li>
                  <li className="text-body">VMware (US, California)</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </LayeredPinning>
    </>
  );
}
