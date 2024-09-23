import { FC, ReactNode } from 'react';

interface SummaryCardProps {
  icon: ReactNode;
  number: number;
  label: string;
  color: string;
}

const SummaryCard: FC<SummaryCardProps> = ({ icon, number, label, color }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6 w-48">
      <div className={`${color} text-4xl mb-2`}>{icon}</div>
      <div className="text-3xl font-semibold">{number}</div>
      <div className="text-gray-500">{label}</div>
    </div>
  );
};

export default SummaryCard;
