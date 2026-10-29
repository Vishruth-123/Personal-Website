/*
 * YOUR CONTENT LIVES HERE.
 * Edit the text, arrays, and links below, then refresh index.html.
 * No build step, framework, or API keys are needed.
 * Add only projects and links you want visitors to see.
 */
window.PORTFOLIO = {
  profile: {
    firstName: 'Vishruth',
    lastName: 'Yakkanti',
    email: 'vishyakkanti@gmail.com',
    linkedin: 'https://www.linkedin.com/in/vishruth-yakkanti-819304324/',
    github: null, // Add your verified GitHub URL here to show a GitHub link.
    location: 'Aubrey, Texas',
    university: 'The University of Texas at Dallas',
    degree: 'B.S. in Computer Science',
    graduation: 'May 2030',
    resume: 'assets/vishruth-yakkanti-resume.pdf',
    intro: 'Computer science student exploring full-stack development, generative AI, and the things we can build when they come together.',
    about: [
      "I'm Vishruth, a Computer Science student at UT Dallas. I'm working toward a career in full-stack development, with a particular interest in bringing generative AI and machine learning into web experiences.",
      'That curiosity takes me from testing code on robots to researching how AI changes the way people work. I want to understand both how the technology works and where it can be useful.'
    ]
  },
  projects: [
    {
      id: 'ai-workforce',
      number: '01',
      title: 'AI & the future of work',
      category: 'Research',
      illustration: 'research',
      date: 'September 2026 — Present',
      status: 'In progress',
      summary: 'Investigating the trade-offs behind replacing routine tasks with AI, and what those decisions mean for productivity and employment.',
      tags: ['Artificial intelligence', 'Workforce', 'Research'],
      overview: 'A research paper exploring the future of AI and its effects on the job market. The project examines companies’ decisions to replace employees performing routine tasks with AI, with attention to the relationship between productivity gains and employment.',
      contributions: [
        'Initiated a research paper alongside a professor, intended for peer review.',
        'Investigated how organizations approach AI and routine work.',
        'Located credible data and evaluated sources to develop a supported argument.'
      ],
      takeaway: 'Building experience in professional research, evidence evaluation, and communicating a technical question with real human consequences.',
      url: null, // Add the paper or project URL when you are ready to share it.
      source: null // Optional repository URL.
    },
    {
      id: 'ml-robotics',
      number: '02',
      title: 'Machine learning meets robotics',
      category: 'Robotics',
      illustration: 'robotics',
      date: 'June — July 2025',
      status: 'Completed',
      summary: 'A hands-on exploration of robot behavior through repeated testing, data input, and changes to code at the University of North Texas.',
      tags: ['Machine learning', 'Robotics', 'Experimentation'],
      overview: 'A robotics and AI/ML learning experience led by a professor at the University of North Texas. The work involved testing robots, changing their code, and using data to work toward desired outcomes.',
      contributions: [
        'Conducted multiple tests by inputting data and modifying robot code.',
        'Observed how changes in code affected the outcomes of each trial.',
        'Learned about AI/ML applications and the opportunities emerging around generative AI.'
      ],
      takeaway: 'Connecting classroom ideas to physical systems through experimentation and iteration.',
      url: null,
      source: null
    }
  ],
  skillGroups: [
    { number: '01', title: 'Languages', caption: 'The foundations', icon: 'code', items: ['Java', 'Python', 'C++', 'Go'] },
    { number: '02', title: 'AI & data', caption: 'Exploring intelligence', icon: 'spark', items: ['PyTorch', 'TensorFlow', 'NumPy', 'Pandas'] },
    { number: '03', title: 'Development & design', caption: 'From idea to interface', icon: 'layers', items: ['React Native', 'Oracle', 'Git', 'GitHub', 'VS Code', 'Figma', 'Eclipse', 'Replit'] }
  ],
  journey: [
    { date: 'Expected May 2030', title: 'Computer Science', organization: 'The University of Texas at Dallas', description: 'Pursuing a Bachelor of Science in Computer Science.', type: 'Education', current: true },
    { date: 'September 2026 — Present', title: 'Member', organization: 'AIS', description: '', type: 'Community', current: true },
    { date: 'September 2026 — Present', title: 'Member', organization: 'Nebula Labs', description: '', type: 'Community', current: true },
    { date: '', title: 'President & Founder', organization: 'Artificial Intelligence Club', description: '', type: 'Leadership', current: false }
  ],
  credentials: [
    { title: 'AP Scholar', type: 'Recognition', year: '2025' },
    { title: 'President’s Volunteer Service Award', type: 'Recognition', year: '2025' },
    { title: 'Microsoft Office 2019', type: 'Credential', year: '2025' },
    { title: 'Generative AI', type: 'Credential', year: '2025' }
  ],
  // These are interests/areas listed in the résumé, not a claim that courses are completed.
  areasOfStudy: ['Data Structures & Algorithms', 'Computer Architecture', 'Machine Learning', 'Embedded Systems']
};
