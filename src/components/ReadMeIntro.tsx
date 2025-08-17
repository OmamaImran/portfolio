import React from "react"

const ReadMeIntro = () => {
    return (
        <div className="bg-[#161b22] rounded-md border border-[#30363d] mb-6">
        <div className="p-4 border-b border-[#30363d] flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="text-sm font-semibold">README.md</span>
        </div>
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">👋 Hi, I&apos;m Omama Imran</h1>
          <p className="mb-4">🎯 A passionate full-stack developer with a design eye, turning ideas into smooth user experiences.</p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">🌱 Currently building with:</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="font-medium mb-2">Frontend:</h3>
              <ul className="text-sm text-gray-400 list-disc list-inside">
                <li>React Native</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>Zustand</li>
                <li>React Query</li>
                <li>MUI</li>
                <li>ShadCN</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Backend:</h3>
              <ul className="text-sm text-gray-400 list-disc list-inside">
                <li>NestJS</li>
                <li>Firebase</li>
                <li>PostgreSQL</li>
                <li>Prisma</li>
                <li>Supabase</li>
                <li>Docker</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Dev Tools:</h3>
              <ul className="text-sm text-gray-400 list-disc list-inside">
                <li>Stripe (subscriptions, coupons, webhooks)</li>
                <li>NextAuth</li>
                <li>Twilio</li>
                <li>Paytab</li>
                <li>Google Maps</li>
              </ul>
            </div>
          </div>

          <h2 className="text-xl font-semibold mt-6 mb-3">📦 Experience includes:</h2>
          <ul className="text-sm text-gray-400 list-disc list-inside space-y-1 mb-4">
            <li>✨ Marketplace & SaaS products</li>
            <li>🧾 Payment flows (Stripe: Connect, Coupons, Transfers, Paytabs)</li>
            {/* <li>🔐 Authentication (Magic Links, Email Verification, Middleware Auth)</li> */}
            <li>🎯 Performance optimization (TBT, CLS, Lighthouse)</li>
          </ul>
        </div>
      </div>
    )
}

export default React.memo(ReadMeIntro, () => true)