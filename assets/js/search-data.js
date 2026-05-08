// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "Below is a brief overview of my background. For detailed information, please refer to my CV.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-teachings",
              title: "teachings",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/teaching/";
              },
            },{id: "dropdown-pronounce-my-name",
              title: "pronounce my name",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/pronounce/";
              },
            },{id: "dropdown-中文",
              title: "中文",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/chinese/";
              },
            },{id: "news-b-a-in-public-finance-central-university-of-finance-and-economics",
          title: 'B.A. in Public Finance, Central University of Finance and Economics',
          description: "",section: "Education",},{id: "news-m-s-in-applied-economics-and-management-cornell-university",
          title: 'M.S. in Applied Economics and Management, Cornell University',
          description: "",section: "Education",},{id: "news-ph-d-in-finance-stockholm-school-of-economics",
          title: 'Ph.D. in Finance, Stockholm School of Economics',
          description: "",section: "Education",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%65.%79%75@%68%68%73.%73%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/geyu-hhs", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ge-yu-9a7752185", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/GYvious", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
