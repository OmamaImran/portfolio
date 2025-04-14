'use client'
import { useRouter } from "next/navigation";
import React from "react";
const AssociateList = ['Next.js', 'React Native', 'NestJS', 'PostgreSQL', 'Prisma', 'Stripe', 'Paytab', 'Zustand', 'React Hook Form', 'React Query', 'MUI']
const InternList = ['Next.js', 'Tailwind CSS', 'Stripe', 'Prisma', 'NextAuth', 'Zustand', 'React Hook Form', 'React Query', 'MUI', 'Twilio']
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
        <div onClick={()=> router.push('/repos/sabonnah-laundry-app')} className="bg-[#161b22] cursor-pointer p-5 rounded-lg border border-[#30363d] hover:border-[#58a6ff] transition-colors">
          <h3 className="text-lg font-bold text-[#58a6ff]">Sabonnah – Laundry App</h3>
          <p className="text-gray-400 text-sm mt-1 mb-2">React Native | NestJS | PostgreSQL | PayTabs</p>

          <ul className="mt-2 space-y-2 pl-5 list-disc text-gray-300 text-sm">
            <li>Developed customer, vendor, and rider apps using <span className="text-[#58a6ff]">React Native</span></li>
            <li>Implemented backend with <span className="text-[#58a6ff]">NestJS</span> and <span className="text-[#58a6ff]">PostgreSQL</span>, including voucher and tips features</li>
            <li>Integrated <span className="text-[#58a6ff]">PayTabs</span> for payments and handled state with <span className="text-[#58a6ff]">React Query</span></li>
          </ul>
        </div>


        {/* Project: MightyJoy */}
        <div onClick={()=> router.push('/repos/mightyjoy')} className="bg-[#161b22] cursor-pointer mt-5 p-5 rounded-lg border border-[#30363d] hover:border-[#58a6ff] transition-colors">
          <h3 className="text-lg font-bold text-[#58a6ff]">MightyJoy</h3>
          <p className="text-gray-400 text-sm mt-1 mb-2">Next.js | NestJS | Zustand</p>

          <ul className="mt-2 space-y-2 pl-5 list-disc text-gray-300 text-sm">
            <li>Built and integrated APIs using <span className="text-[#58a6ff]">React Query</span></li>
            <li>Handled OAuth integration with <span className="text-[#58a6ff]">Instagram</span> and <span className="text-[#58a6ff]">TikTok</span></li>
            <li>Implemented subscriptions, webhooks, and coupon systems with <span className="text-[#58a6ff]">Stripe</span></li>
          </ul>
        </div>

        {/* Project: Makery */}
        <div onClick={()=> router.push('/repos/makery')} className="bg-[#161b22] cursor-pointer mt-5 p-5 rounded-lg border border-[#30363d] hover:border-[#58a6ff] transition-colors">
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
        <div onClick={()=> router.push('/repos/apptycoons') } className="bg-[#161b22] cursor-pointer p-5 rounded-lg border border-[#30363d] hover:border-[#58a6ff] transition-colors">
          <h3 className="text-lg font-bold text-[#58a6ff]">AppTycoons Website</h3>
          <p className="text-gray-400 text-sm mt-1 mb-2">Next.js | Tailwind CSS</p>

          <ul className="mt-2 space-y-2 pl-5 list-disc text-gray-300 text-sm">
            <li>Created dynamic UI pages and optimized performance metrics (CLS, TBT)</li>
          </ul>
        </div>
      </div>
    </div >
  );
};

export default React.memo(ExperienceContent);
