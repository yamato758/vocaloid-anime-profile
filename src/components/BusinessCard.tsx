import React from 'react';
import { Music, Heart, Code, Sparkles } from 'lucide-react';

// スムーズスクロール関数
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

// 名刺用の簡潔なプロフィールカード
export const BusinessCard: React.FC = () => {
  return (
    <div className="max-w-md mx-auto mb-12">
      <div className="bg-gradient-to-br from-teal-500 via-cyan-600 to-emerald-600 p-8 rounded-2xl shadow-2xl text-white transform rotate-1 hover:rotate-0 transition-all duration-500 hover:shadow-teal-500/25 hover:shadow-3xl">
        <div className="text-center">
          {/* アバター部分 */}
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm overflow-hidden ring-4 ring-white/30 hover:ring-white/50 transition-all duration-300">
            <img 
              src="/u6455584253_a_cute_chubby_Japanese_middle-aged_man_with_a_sof_7b0687cf-ad0f-498c-bb11-4ff12bf03665_0.png" 
              alt="玉木一彦のプロフィール画像" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          
          {/* 名前・ハンドルネーム */}
          <h1 className="text-2xl font-bold mb-2">玉木一彦</h1>
          <p className="text-teal-100 mb-4 font-medium">ボカロ・アニメファン</p>
          
          {/* 簡潔な紹介 */}
          <div className="text-sm space-y-2 text-left bg-white/15 rounded-xl p-4 backdrop-blur-sm border border-white/20">
            <div 
              className="flex items-center gap-2 cursor-pointer hover:bg-white/20 rounded-lg p-2 -m-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => scrollToSection('vocaloid-journey')}
            >
              <Heart className="w-4 h-4 text-teal-200 hover:text-white transition-colors duration-200" />
              <span>2022年からのボカロファン</span>
            </div>
            <div 
              className="flex items-center gap-2 cursor-pointer hover:bg-white/20 rounded-lg p-2 -m-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => scrollToSection('live-history')}
            >
              <Sparkles className="w-4 h-4 text-cyan-200 hover:text-white transition-colors duration-200" />
              <span>マジカルミライ常連参戦</span>
            </div>
            <div 
              className="flex items-center gap-2 cursor-pointer hover:bg-white/20 rounded-lg p-2 -m-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => scrollToSection('tech-hobbies')}
            >
              <Code className="w-4 h-4 text-emerald-200 hover:text-white transition-colors duration-200" />
              <span>AIツール愛好家</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};