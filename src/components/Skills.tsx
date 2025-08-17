import { createSkillBoxes } from "@/utils/createSkillBoxes"
import React from "react"

const Skills = () => {
    return (
        <div className="border border-[#30363d] rounded-md my-6">
            <div className="bg-[#161b22] border-b border-[#30363d] p-4">
                <h3 className="font-semibold">Skills & Expertise</h3>
            </div>
            <div className="p-4">
                <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Frontend Development</h4>
                    <div className="flex flex-wrap gap-1">
                        {createSkillBoxes('Next.js', 4)}
                        {createSkillBoxes('React', 4)}
                        {createSkillBoxes('TypeScript', 4)}
                        {createSkillBoxes('Tailwind CSS', 5)}
                        {createSkillBoxes('React Native', 3)}
                        {createSkillBoxes('Zustand', 4)}
                        {createSkillBoxes('React Query', 4)}
                        {createSkillBoxes('MUI', 3)}
                        {createSkillBoxes('React Hook Form', 4)}
                        
                    </div>
                </div>

                <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Backend Development</h4>
                    <div className="flex flex-wrap gap-1">
                        {createSkillBoxes('NestJS', 3)}
                        {createSkillBoxes('Firebase', 4)}
                        {createSkillBoxes('PostgreSQL', 4)}
                        {createSkillBoxes('Prisma', 3)}
                        {createSkillBoxes('Docker', 2)}
                    </div>
                </div>

                <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Other Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                        {createSkillBoxes('Stripe', 4)}
                        {createSkillBoxes('Paytabs', 4)}
                        {createSkillBoxes('Supabase', 3)}
                        {createSkillBoxes('Google Maps', 3)}
                        {createSkillBoxes('Twilio', 2)}
                        {createSkillBoxes('NextAuth', 4)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Skills, () => true)