import React from "react";

const EducationContent = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-lg font-semibold mb-4">Education</h2>
        {/* Add your education items here */}
        <div className="bg-[#161b22] p-4 rounded-md border border-[#30363d]">
          <h3 className="text-md font-semibold">BSCS</h3>
          <p className="text-gray-400 text-sm">NED University, 2020-2024</p>
          <p className="text-gray-400 text-sm mt-2">CGPA: 3.677</p>
        </div>
        <div className="bg-[#161b22] p-4 rounded-md border border-[#30363d]">
          <h3 className="text-md font-semibold">FSC - Pre-Engineering</h3>
          <p className="text-gray-400 text-sm">Commecs College, 2018-2020</p>
          <p className="text-gray-400 text-sm mt-2">Grade: A+</p>
        </div>
        <div className="bg-[#161b22] p-4 rounded-md border border-[#30363d]">
          <h3 className="text-md font-semibold">Matriculation</h3>
          <p className="text-gray-400 text-sm">Happy Home High School, 2018</p>
          <p className="text-gray-400 text-sm mt-2">Grade: A+</p>
        </div>
      </div>
    );
  };

export default React.memo(EducationContent, () => true);

