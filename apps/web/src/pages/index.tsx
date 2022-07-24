import { getNextStaticProps } from '@faustjs/next';
import { v4 as uuid } from 'uuid';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { client, PageIdType } from '~web/client';
import { WPGBlocks } from '~web/lib';

export default function Page() {
  const { useQuery, usePage } = client;
  const generalSettings = useQuery().generalSettings;

  const page = usePage({
    id: '18',
    idType: PageIdType.DATABASE_ID,
  });

  const menuItems = useQuery().menuItems();

  return (
    <>
      <Head>
        <title>
          {generalSettings.title} - {generalSettings.description}
        </title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="https://fonts.gstatic.com"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=East+Sea+Dokdo&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="container pt-12 lg:max-w-screen-lg">
        <div className="font-dokdo mb-[45px] text-[48px] font-normal leading-[1]">
          <WPGBlocks blocks={page?.blocks ?? ''} />
        </div>
        <div className="w-full md:w-3/6 lg:w-full">
          <div className="content prose-lg">
            <h2 className="font-dokdo mb-4">#부캐</h2>
          </div>
          <ul className="flex">
            {menuItems.nodes.map((menuItem) => {
              const { uri, thumbnail, label } = menuItem;
              return (
                <li className="p-2" key={uuid()}>
                  <a href={uri}>
                    <div className="grid max-w-[125px] gap-y-[8px]">
                      <img
                        className="icon-card"
                        src={thumbnail()?.menu_icon}
                        alt={label}
                      />
                      <div className="justify-self-center">
                        <span
                          style={{
                            backgroundColor: thumbnail()?.label_color,
                          }}
                          className="rounded-[4px] border-[2px] border-[color:rgba(var(--RGB-gl4),0.125)] p-[0.075rem_0.5rem_0.125rem] text-black"
                        >
                          {label}
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
  });
}
