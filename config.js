// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Vital',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: true,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Layout
  bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: '801363391dc8d90282fb6bc6f24b37de', // Write here your API Key
  weatherIcons: 'Nord', // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '37.775',
  defaultLongitude: '-122.419',

  // Autochange
  autoChangeTheme: false,

  // Autochabge by OS
  changeThemeByOS: false,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: '18:30',
  hourDarkThemeInactive: '07:00',

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com',
    },
    {
      id: '3',
      name: 'Todoist',
      icon: 'trello',
      link: 'https://todoist.com',
    },
    {
      id: '4',
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://calendar.google.com/calendar/r',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'reddit',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'YouTube',
      icon: 'youtube',
      link: 'https://www.youtube.com/',
    },
  ],

  secondButtonsContainer: [
    {
      id: '1',
      name: 'Music',
      icon: 'headphones',
      link: 'https://open.spotify.com',
    },
    {
      id: '2',
      name: 'twitter',
      icon: 'twitter',
      link: 'https://twitter.com/',
    },
    {
      id: '3',
      name: 'bot',
      icon: 'bot',
      link: 'https://discord.com/app',
    },
    {
      id: '4',
      name: 'Amazon',
      icon: 'shopping-bag',
      link: 'https://amazon.com/',
    },
    {
      id: '5',
      name: 'Hashnode',
      icon: 'pen-tool',
      link: 'https://hashnode.com/',
    },
    {
      id: '6',
      name: 'Figma',
      icon: 'figma',
      link: 'https://figma.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  firstlistsContainer: [
    {
      icon: 'code',
      id: '1',
      links: [
        {
          name: 'HackTheBox',
          link: 'https://www.hackthebox.com/',
        },
        {
          name: 'LeetCode',
          link: 'https://leetcode.com/',
        },
        {
          name: 'TryHackMe',
          link: 'https://tryhackme.com/dashboard',
        },
        {
          name: 'CodeWars',
          link: 'https://codewars.com/',
        },
      ],
    },
    {
      icon: 'book',
      id: '2',
      links: [
        {
          name: 'C++ Reference',
          link: 'https://en.cppreference.com/w/',
        },
        {
          name: 'Django Docs',
          link: 'https://docs.djangoproject.com/en/4.0/',
        },
        {
          name: 'Oracle Java',
          link: 'https://docs.oracle.com/en/java/javase/17/',
        },
        {
          name: 'Mozilla MDN',
          link: 'https://developer.mozilla.org/en-US/',
        },
      ],
    }
  ],

  // Second Links Container
  secondListsContainer: [
    {
      icon: 'graduation-cap',
      id: '1',
      links: [
        {
          name: 'Modern Javascript',
          link: 'https://javascript.info/',
        },
        {
          name: 'Refactoring Guru',
          link: 'https://refactoring.guru',
        },
        {
          name: 'Learn OpenGL',
          link: 'https://learnopengl.com/',
        },
        {
          name: 'Kernel Programming',
          link: 'https://mwatler.github.io/unx511/The%20Linux%20Programming%20Interface%20-%20A%20Linux%20and%20UNIX%20System%20Programming%20Handbook.pdf',
        }
      ],
    },
    {
      icon: 'message-circle',
      id: '2',
      links: [
        {
          name: 'Github',
          link: 'https://github.com/',
        },
        {
          name: 'Gitlab',
          link: 'https://gitlab.informatics.ru/',
        },
        {
          name: 'YouTube',
          link: 'https://www.youtube.com/',
        },
        {
          name: 'Reddit',
          link: 'https://www.reddit.com/',
        },
      ],
    },
  ],
};
