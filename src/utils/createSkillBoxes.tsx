export const createSkillBoxes = (skill: string, level: number) => {
  const boxes = [];
  const activeColor = 'bg-[#40c463]'; // GitHub's exact green color
  const inactiveColor = 'bg-[#EFF2F5]'; // GitHub's exact inactive color

  // GitHub's contribution graph uses exactly 5 boxes
  for (let i = 1; i <= 5; i++) {
    boxes.push(
      <div 
        key={`${skill}-${i}`}
        className={`w-3 h-3 rounded-sm ${i <= level ? activeColor : inactiveColor}`}
        title={`${skill}: ${level}/5`}
      />
    );
  }

  return (
    <div className="flex items-center mr-4 mb-2">
      <span className="text-xs text-gray-400 mr-2 w-24 truncate">{skill}</span>
      <div className="flex gap-[2px]"> {/* GitHub uses 2px gap between boxes */}
        {boxes}
      </div>
    </div>
  );
};