import NewsBlock from '../NewsBlock/NewsBlock';

import styles from './NewsContainer.module.scss';

const NewsContainer = () => {
  const NEWS_DATA = [
    {
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/23d8/9735/7e5d84a18640ba953bb085dcdbfcadea?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HKVFd6Ngk4QSWQ8Y~4JF0kSHFB3eEPC9F-JgJmPFeMbqRrTFJQvJQCWhqxRmuf0zNeQgv0dJOeVHHiF9QHZGlb1g1TL5SmTOLfEF14l701jW-v4ZLwL922bKpsUjcKPd-ChtYcfaUbEdRjznMFhOfFhr4UZVvNkQpfZGAzkZ5ReY-Wh~Yo5JOVNbPlu8guV0Ow7-KHVH1y73-L6Tbbc67ceGMMtp3p8tpkmQWfJwA01IRN5VirFEdJ8hw6bHui4ZuxkA7N8ZpcGLzb4Lf3NNN70zXfG0H~KMrcHeoKkyJxldRvLfwuT6IBPCFEy8Eejt8izW53Sfxv6hDkNp8B3FNw__',
      date: '22 июля 2022 года',
      title:
        'Consequat consequat augue quis urna arcu scelerisque ac montes, sed. Arcu orci quam lectus orci in.',
    },
    {
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/bacb/1dff/ab5986e44d18b8a50889a860a739e899?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C9YrDQqPE8o9jNbxYa~cX-s4flcuOzT7HgaZ60lPXKHEPixyk111F1WxtubsSWJyoRuBxQvAvjHwAqFhZO0gTORo6Co8BFm4fXbsy4m6ZLb2L6ThVxqrLSGKc0n-S1rXiVH3uTO-mAmtaa62QEQoXFfj8nyiTJRAz92WTKwoJ3y02~6hAX6CrQOOsMOOOypzP4tMeNpr~M9PdZmp0GjcT2n2gCKEWyIinUw-LQaQXUlLgfqgpy-4fmYwpuV~Yzt1lHWNHXgnUCnMzRPqPn~bs~s11BIzuCfA4ghp5JMCTDfe0WnVJUhTa4y-xsCo6fKuTkm2Nsc37odd3ACLzYKHEg__',
      date: '4 апреля 2022 года',
      title: 'Suspendisse orci fermentum congue enim risus velit neque. Mi.',
    },
    {
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/46a3/8a90/497769068963f75bbc3ea9401f3189d6?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hpwYdI-pAwMJzvSlFroGH-7Fcw9eaA8tQhfqf6I3exqEDBBcmF73VFcQuR3PHK~RDkpkfcQTT0EdewxDytfLzRrgzVfpKeBJTybZd3tfrLt1yem1rN-DlsErGAOqRB1I2zTK~tgyNB7vaSJuqvv7eL6FPP6kFpOxxCeWQDDPeRBHOoLFUzvhqwOw46sigvYkgHHAFg1Qsa3NgxNDSXrGrYT81D37mtuzAJhVczupB1qCiKlH6HkCLHEo~BdJs~5vl2oe-2IeMwQ3inci28s0EgGdYskQ9634BFTyUUNU5-PI19-Jge~9OiGM1mCa89OcEbL3-~WFIsDp55PGzPkikA__',
      date: '30 ноября 2021 года',
      title:
        'Interdum proin amet nibh tortor sed vulputate mattis. Ridiculus porta ipsum neque ut vel vitae et.',
    },
    {
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/9e08/8224/05be2b039dbaebe061c80bfd1deac931?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j0bDqbTDK2DgIIox1sl12AZRlJIKc6r8tNy5SLw1O8McBh4hJCWQA5JIkIidN6X2hFvmlTly7wqg2wnTIcnIWG20sZUrYgEFQQiRLL7B7DPZP8KLWY6BKF3jnslNAsPMq2~HlNnw-Wjogv1rZVXTZRoNM-GmukZp5oTrumZRoM7BK41HonY7pmTxtz2PHaSKJhvQEO6P-DAKBFfg4rydF29kMOrNIEzo-qL1athsii6Ud1B16Yu01TqV7S9muY27T6K9e2-DxrtUJl43RMTlMX5dm9Eo5xv4TP-lTRaHH~p-3RVmiP6CBfxM9-lPekNsOHgcmRdEVzD2T8rv9D0kJw__',
      date: '19 августа 2022 года',
      title:
        'Nisl tempor vel tempor adipiscing id nulla magnis ut ultrices. Malesuada metus et in blandit.',
    },
    {
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/a43d/0345/2a3cf51c4eac576cf661565d7bc03bb6?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q~hJQ65QmNnGKPpBN65a1Yv0EupbQ1~~M9xmMgqY6HNGE9K41pa8tY4pUpaY0sbPQ6CzTb6F-pf47gUO2~xowWou4lVZKu87sij0s5vFlQWqE9nQh9IX-3Ei1w5gu-AEG9LL0WAS8s4tBD4gmjYgJYsiaxpUYSelEN-wYBMQ0xYLWhr5DY1mkHgJ-V-m-r3pm3qLijsseQ5F5Ssvyg9Te1SQM6NmtvVSn5~OadUQ4hwIDeH-S7bcE82Z83zlB6qOGLqVstf49JdEHlxGC6iH8GnNCXcgzsoifMvmHKsrOOPHKMHT8J2LbOH3x0XG~CtoRf4N8Zif5ldglyu2ZMvEtw__',
      date: '22 июля 2022 года',
      title:
        'Libero fermentum pretium sed orci nunc, sagittis mollis lacus dolor. Tincidunt et enim sed ac faucibus.',
    },
    {
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/f1e8/6f14/450f4ac005867169e369d025a429b071?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ntbqoDYGotLGgejdpBcIn34co73~ZjEUQTtdgzQbuGOfG8lUBhsYyWZFOb-X7r1xZZoDdbX0i3WBGLgXBpqmGV7E9uVwkkK58Ymfp-U6C4n-LSch~4P8ved3sKiAK3xj1O5DeoX9HnOQFHetgKKCWPAua8EdkQerwNSdRfTnfZ-qbBMOIhJlYTr~Csw6ZzRfsiCYeUPqhcK1Qk9X9GfHKtXQaAQs7sezzms~5WJP5lHI3ZzIkwYe8gbtKY4BH283uzxomlpZ~fROda2MMeEvCdOsHNYgnG3GlydcBtTJZUBD0dN3icdGayVhSGyHc2eC6dqYk-7RhodJRaHpmYU6pA__',
      date: '22 июля 2022 года',
      title:
        'Netus hendrerit tortor laoreet duis proin nulla faucibus ultricies. Et urna fringilla nunc, metus nec. ',
    },
  ];

  return (
    <div className={styles.wrapper}>
      {NEWS_DATA.map((item, id) => (
        <NewsBlock key={id} imageUrl={item.imageUrl} date={item.date} title={item.title} />
      ))}
    </div>
  );
};

export default NewsContainer;
