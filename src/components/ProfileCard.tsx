import React from 'react';
import { Music, Calendar, Heart, Code, Sparkles } from 'lucide-react';

// プロフィールカードコンポーネント - 再利用可能なカード形式
interface ProfileCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ 
  title, 
  icon, 
  children, 
  className = '',
  id
}) => {
  return (
    <div 
      id={id}
      className={`bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 transform hover:-translate-y-1 scroll-mt-8 border border-teal-100/50 ${className}`}
    >
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-gradient-to-br from-teal-500 to-cyan-600 text-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            {icon}
          </div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-teal-700 to-cyan-700 bg-clip-text text-transparent">{title}</h2>
        </div>
        {children}
      </div>
    </div>
  );
};

// タグコンポーネント - アーティスト名や作品名用
interface TagProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
}

export const Tag: React.FC<TagProps> = ({ children, variant = 'primary' }) => {
  const variants = {
    primary: 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white',
    secondary: 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white',
    accent: 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white'
  };
  
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200`}>
      {children}
    </span>
  );
};

// タイムライン項目コンポーネント
interface TimelineItemProps {
  year: string;
  title: string;
  description?: string;
  highlight?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ 
  year, 
  title, 
  description, 
  highlight = false 
}) => {
  return (
    <div className={`flex gap-4 p-4 rounded-lg transition-colors duration-200 ${highlight ? 'bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-500 shadow-sm' : 'hover:bg-teal-50/50'}`}>
      <div className="flex-shrink-0">
        <div className={`w-16 h-8 rounded-md flex items-center justify-center text-sm font-bold ${highlight ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-md' : 'bg-teal-100 text-teal-700'}`}>
          {year}
        </div>
      </div>
      <div className="flex-grow">
        <h3 className="font-semibold text-teal-800 mb-1">{title}</h3>
        {description && <p className="text-teal-600 text-sm">{description}</p>}
      </div>
    </div>
  );
};