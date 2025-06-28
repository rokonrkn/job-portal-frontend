import React from 'react';

const footerData = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
    ],
  },
  {
    title: 'Job Seekers',
    links: [
      { name: 'Find Jobs', href: '/jobs' },
      { name: 'Career Advice', href: '/tips' },
      { name: 'Create Profile', href: '/profile' },
    ],
  },
  {
    title: 'Employers',
    links: [
      { name: 'Post a Job', href: '/post-job' },
      { name: 'Plans & Pricing', href: '/plans' },
      { name: 'Employer Login', href: '/login' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>JobFinder</h2>
          <p>Your dream job is just a click away.</p>
        </div>

        <div className="footer-links">
          {footerData.map((section, index) => (
            <div key={index}>
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} JobFinder. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
