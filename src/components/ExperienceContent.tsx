'use client'
import { useRouter } from "next/navigation";
import React from "react";
const AssociateList = ['Next.js', 'React Native', 'NestJS', 'PostgreSQL', 'Prisma', 'Stripe', 'Paytab', 'Zustand', 'React Hook Form', 'React Query', 'MUI']
const InternList = ['Next.js', 'Tailwind CSS', 'Stripe', 'Prisma', 'NextAuth', 'Zustand', 'React Hook Form', 'React Query', 'MUI', 'Twilio']
const DataJournalistList = ['Data Storytelling', 'Data Collection', 'Web Scraping', 'Twitter Open API', 'Python', 'Pandas', 'Data Cleaning', 'Power BI', 'Data Visualization', 'Concept Design', 'Social Media Content', 'Collaboration with Graphic Designers'];

const ExperienceContent = () => {
  const router = useRouter();
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-6 border-b border-[#30363d] pb-2">Work Experience</h2>

      {/* Associate Software Engineer */}
      <div className="bg-[#161b22] p-5 rounded-lg border border-[#30363d] hover:border-[#58a6ff] transition-colors">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-[#58a6ff]">Associate Software Engineer</h3>
            <h4 className="text-md font-medium">Apptycoons</h4>
            <p className="text-gray-400 text-sm mt-1">Feb 2024 – Present</p>
          </div>
          <span className="bg-[#238636] text-xs text-white px-2 py-1 rounded-full">Current</span>
        </div>

        <ul className="mt-4 space-y-2 pl-5 list-disc text-gray-300 text-sm">
          <li>Built and integrated full-stack features using <span className="text-[#58a6ff]">Next.js</span>, <span className="text-[#58a6ff]">NestJS</span>, and <span className="text-[#58a6ff]">React Query</span></li>
          <li>Integrated <span className="text-[#58a6ff]">Stripe</span> for coupons, checkout sessions, webhooks, and referral payments</li>
          <li>Worked with <span className="text-[#58a6ff]">Prisma</span> to manage database schemas and PostgreSQL relationships</li>
          <li>Created responsive UIs and optimized performance (CLS, TBT) for web apps using <span className="text-[#58a6ff]">Tailwind CSS</span></li>
          <li>Implemented subscriptions, webhooks, and coupon systems with <span className="text-[#58a6ff]">Stripe</span></li>
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {AssociateList.map((item, index) => (
            <span key={index} className="text-xs bg-[#1e60a3] text-white px-2 py-1 rounded-full">{item}</span>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-5 mb-2">Projects:</h2>

        {/* Project: Sabonnah */}
        <div onClick={() => router.push('/repos/sabonnah-laundry-app')} className="bg-[#161b22] cursor-pointer p-5 rounded-lg border border-[#30363d] hover:border-[#58a6ff] transition-colors">
          <h3 className="text-lg font-bold text-[#58a6ff]">Sabonnah – Laundry App</h3>
          <p className="text-gray-400 text-sm mt-1 mb-2">React Native | NestJS | PostgreSQL | PayTabs</p>

          <ul className="mt-2 space-y-2 pl-5 list-disc text-gray-300 text-sm">
            <li>Developed customer, vendor, and rider apps using <span className="text-[#58a6ff]">React Native</span></li>
            <li>Implemented backend with <span className="text-[#58a6ff]">NestJS</span> and <span className="text-[#58a6ff]">PostgreSQL</span>, including voucher and tips features</li>
            <li>Integrated <span className="text-[#58a6ff]">PayTabs</span> for payments and handled state with <span className="text-[#58a6ff]">React Query</span></li>
          </ul>
        </div>


        {/* Project: MightyJoy */}
        <div onClick={() => router.push('/repos/mightyjoy')} className="bg-[#161b22] cursor-pointer mt-5 p-5 rounded-lg border border-[#30363d] hover:border-[#58a6ff] transition-colors">
          <h3 className="text-lg font-bold text-[#58a6ff]">MightyJoy</h3>
          <p className="text-gray-400 text-sm mt-1 mb-2">Next.js | NestJS | Zustand</p>

          <ul className="mt-2 space-y-2 pl-5 list-disc text-gray-300 text-sm">
            <li>Built and integrated APIs using <span className="text-[#58a6ff]">React Query</span></li>
            <li>Handled OAuth integration with <span className="text-[#58a6ff]">Instagram</span> and <span className="text-[#58a6ff]">TikTok</span></li>
            <li>Implemented subscriptions, webhooks, and coupon systems with <span className="text-[#58a6ff]">Stripe</span></li>
          </ul>
        </div>

        {/* Project: Makery */}
        <div onClick={() => router.push('/repos/makery')} className="bg-[#161b22] cursor-pointer mt-5 p-5 rounded-lg border border-[#30363d] hover:border-[#58a6ff] transition-colors">
          <h3 className="text-lg font-bold text-[#58a6ff]">Makery</h3>
          <p className="text-gray-400 text-sm mt-1 mb-2">Next.js | Stripe | PostgreSQL</p>

          <ul className="mt-2 space-y-2 pl-5 list-disc text-gray-300 text-sm">
            <li>Implemented referral payments and enhanced Stripe checkout session flow</li>
            <li>Improved UI and business logic based on task requirements</li>
          </ul>
        </div>
      </div>

      {/* Intern */}
      <div className="bg-[#161b22] p-5 rounded-lg border border-[#30363d] hover:border-[#58a6ff] transition-colors">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-[#58a6ff]">Software Engineering Intern</h3>
            <h4 className="text-md font-medium">Apptycoons</h4>
            <p className="text-gray-400 text-sm mt-1">Dec 2023 – Feb 2024</p>
          </div>
        </div>

        <ul className="mt-4 space-y-2 pl-5 list-disc text-gray-300 text-sm">
          <li>Enhanced chat functionality using <span className="text-[#58a6ff]">Twilio</span>, improving performance and UX</li>

          <li>Contributed to production features across multiple apps built with <span className="text-[#58a6ff]">Next.js</span> and <span className="text-[#58a6ff]">Tailwind CSS</span></li>
          <li>Created dynamic pricing tables and integrated <span className="text-[#58a6ff]">Stripe subscriptions</span> and coupons</li>
          <li>Worked on user onboarding and email flows using <span className="text-[#58a6ff]">NextAuth</span> and <span className="text-[#58a6ff]">Mailgun</span></li>
          <li>Improved frontend performance through lazy loading, debouncing, and bundle optimization</li>
          <li>Collaborated with backend team on <span className="text-[#58a6ff]">Prisma schema design</span> and API integration</li>
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {InternList.map((item, index) => (
            <span key={index} className="text-xs bg-[#1e60a3] text-white px-2 py-1 rounded-full">{item}</span>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-5 mb-2">Projects:</h2>

        {/* Project: AppTycoons Website */}
        <div onClick={() => router.push('/repos/apptycoons')} className="bg-[#161b22] cursor-pointer p-5 rounded-lg border border-[#30363d] hover:border-[#58a6ff] transition-colors">
          <h3 className="text-lg font-bold text-[#58a6ff]">AppTycoons Website</h3>
          <p className="text-gray-400 text-sm mt-1 mb-2">Next.js | Tailwind CSS</p>

          <ul className="mt-2 space-y-2 pl-5 list-disc text-gray-300 text-sm">
            <li>Created dynamic UI pages and optimized performance metrics (CLS, TBT)</li>
          </ul>
        </div>
      </div>

      {/* Data Journalist */}
      <div className="bg-[#161b22] p-5 rounded-lg border border-[#30363d] hover:border-[#58a6ff] transition-colors">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-[#58a6ff]">Data Journalist</h3>
            <h4 className="text-md font-medium">Raftar</h4>
            <p className="text-gray-400 text-sm mt-1">Dec 2022 – Dec 2023</p>
          </div>
        </div>

        <ul className="mt-4 space-y-2 pl-5 list-disc text-gray-300 text-sm">
          <li>Analyzing <span className="text-[#58a6ff]">data</span> and generating <span className="text-[#58a6ff]">insights</span>, furthermore creating creative storytelling visuals for their corporate clients.</li>
          <li>Analyzed <span className="text-[#58a6ff]">Twitter trends</span> and their impacts, generating insights and <span className="text-[#58a6ff]">data stories</span>.</li>
          <li>Used <span className="text-[#58a6ff]">AI tools</span> to generate <span className="text-[#58a6ff]">talk shows word frequency</span> related insights.</li>
          <li>Analyzed tweets from a year of 150 prominent <span className="text-[#58a6ff]">journalists</span> and generated insights out of it. Furthermore, transformed them into understandable and eye-pleasing <span className="text-[#58a6ff]">infographics</span> for <span className="text-[#58a6ff]">Raftar</span> to post.</li>
          <li>Confirming <span className="text-[#58a6ff]">trends</span> on Twitter, determining whether they are genuinely viral or just hyped up by <span className="text-[#58a6ff]">bots</span>.</li>
          <li>Working on <span className="text-[#58a6ff]">HEC</span>, <span className="text-[#58a6ff]">PBS</span>, and other official datasets, extracting insights and transforming them into creative and visually appealing <span className="text-[#58a6ff]">infographics</span> for Raftar&apos;s segment: <span className="text-[#58a6ff]">DataKahani</span>.</li>
        </ul>


        <div className="mt-4 flex flex-wrap gap-2">
          {DataJournalistList.map((item, index) => (
            <span key={index} className="text-xs bg-[#1e60a3] text-white px-2 py-1 rounded-full">{item}</span>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-5 mb-2">Projects:</h2>

        {/* Project: No Comments, Zero Reach */}
        <div
          onClick={() =>
            window.open(
              'https://www.linkedin.com/posts/omama-imran_dataanalysis-visualization-datavisualization-activity-7060974537563156480-UeUJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC1P8U0Bq81JWg6T-vMOFXFc5oI8mYAVGL8',
              '_blank'
            )
          }
          className="bg-[#161b22] cursor-pointer p-5 mb-5 rounded-lg border border-[#30363d] hover:border-[#58a6ff] transition-colors"
        >
          <h3 className="text-lg font-bold text-[#58a6ff]">No Comments, Zero Reach</h3>
          <p className="text-gray-400 text-sm mt-1 mb-2">Twitter API | Python | Power BI</p>

          <ul className="mt-2 space-y-2 pl-5 list-disc text-gray-300 text-sm">
            <li>
              Conducted a data analysis on the impact of the political campaign <span className="text-[#58a6ff]">&apos;NoCommentZeroReach&apos;</span> launched by PTI, focusing on engagement metrics of tweets by prominent PMLN members including Maryam Nawaz, Maryam Aurangzeb, Bilawal, and Shehbaz Sharif.
            </li>
            <li>
              Collected and analyzed data from 10 days before and after the campaign to measure its effect on the <span className="text-[#58a6ff]">reach and engagement</span> of political figures on Twitter.
            </li>
            <li>
              Visualized key findings using <span className="text-[#58a6ff]">Power BI</span> and collaborated with a <span className="text-[#58a6ff]">graphic designer</span> to create easy-to-understand infographics.
            </li>
          </ul>
        </div>

        {/* Project: Aaj shahzaib khanziada k sath */}
        <div
          onClick={() =>
            window.open(
              'https://www.linkedin.com/posts/omama-imran_content-media-ai-activity-7049734703024680962-RnP-?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC1P8U0Bq81JWg6T-vMOFXFc5oI8mYAVGL8'
            )
          }
          className="bg-[#161b22] cursor-pointer mb-5 p-5 rounded-lg border border-[#30363d] hover:border-[#58a6ff] transition-colors"
        >
          <h3 className="text-lg font-bold text-[#58a6ff]">Aaj Shahzaib &apos;KHANZIADA&apos; ke saath</h3>
          <p className="text-gray-400 text-sm mt-1 mb-2">OPEN AI Whisper | Python | Data Analysis | Social Media Insights | MS Word</p>

          <ul className="mt-2 space-y-2 pl-5 list-disc text-gray-300 text-sm">
            <li>
              Transcribed 17 episodes of the talk show <span className="text-[#58a6ff]">&apos;Aaj Shahzeb Khanzada ke Saath&apos;</span> using <span className="text-[#58a6ff]">OpenAI Whisper</span>.
            </li>
            <li>
              Identified that <span className="text-[#58a6ff]">Imran Khan</span>&apos;s name was mentioned over 500 times in just 674 minutes of airtime — almost once per minute.
            </li>
            <li>
              Transformed this insight into a satirical narrative titled <span className="text-[#58a6ff]">&apos;Aaj Shahzaib Khanziada ke Saath&apos;</span> to highlight media focus bias.
            </li>
            <li>
              Designed and shared a visual summary of the findings with a graphic designer to emphasize political media trends.
            </li>
          </ul>
        </div>


        {/* Project: Toshakhana */}
        <div
          onClick={() =>
            window.open(
              'https://www.linkedin.com/posts/omama-imran_visualization-storytelling-datastorytelling-activity-7045421576418115584-rL4v?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC1P8U0Bq81JWg6T-vMOFXFc5oI8mYAVGL8'
            )
          }
          className="bg-[#161b22] cursor-pointer mb-5 p-5 rounded-lg border border-[#30363d] hover:border-[#58a6ff] transition-colors"
        >
          <h3 className="text-lg font-bold text-[#58a6ff]">The Hidden Wealth of Toshakhana: Assessed vs. Paid</h3>
          <p className="text-gray-400 text-sm mt-1 mb-2">Power BI | Data Cleaning | Kaggle Dataset | Political Insights</p>

          <ul className="mt-2 space-y-2 pl-5 list-disc text-gray-300 text-sm">
            <li>
              Pulled the Toshakhana dataset from <span className="text-[#58a6ff]">Kaggle</span> and conducted deep exploratory analysis.
            </li>
            <li>
              Used <span className="text-[#58a6ff]">Power BI</span> to clean, model, and visualize the assessed vs. retention cost data for political parties and institutions.
            </li>
            <li>
              Discovered how significantly the actual value of gifts remained <span className="text-[#58a6ff]">hidden beneath the surface</span>, visually represented through an iceberg metaphor.
            </li>
            <li>
              Designed the final infographic to communicate the disparity between reported and real value in an impactful, audience-friendly format.
            </li>
          </ul>
        </div>


        {/* Project: Twitter Data Scraping & Visualization */}
        <div
          onClick={() =>
            window.open(
              'https://www.linkedin.com/posts/omama-imran_dataanalysis-project-datavisualization-activity-7039279277422354432-fu7l?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC1P8U0Bq81JWg6T-vMOFXFc5oI8mYAVGL8'
            )
          }
          className="bg-[#161b22] cursor-pointer mb-5 p-5 rounded-lg border border-[#30363d] hover:border-[#58a6ff] transition-colors"
        >
          <h3 className="text-lg font-bold text-[#58a6ff]">Political Insights from Journalists&apos; Twitter Data</h3>
          <p className="text-gray-400 text-sm mt-1 mb-2">Python | Data Analysis | Power BI | Political Journalism</p>

          <ul className="mt-2 space-y-2 pl-5 list-disc text-gray-300 text-sm">
            <li>
              Scraped Twitter data from prominent 150 political journalists in Pakistan using <span className="text-[#58a6ff]">Python</span>.
            </li>
            <li>
              Conducted insightful analysis to uncover key political narratives and trends.
            </li>
            <li>
              Created interactive dashboards using <span className="text-[#58a6ff]">Power BI</span> to visualize the findings.
            </li>
            <li>
              Collaborated with graphic designers to turn the analysis into compelling visual stories, sharing ideas and reference pictures.
            </li>
            <li>
              Showcased the power of data visualization in transforming political data into impactful, accessible stories.
            </li>
          </ul>
        </div>


      </div>
    </div >
  );
};

export default React.memo(ExperienceContent);
