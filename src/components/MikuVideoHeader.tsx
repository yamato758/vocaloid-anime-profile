import React from 'react';

// ローカル初音ミクダンス動画ヘッダーコンポーネント
export const MikuVideoHeader: React.FC = () => {
  return (
    <div className="relative h-64 overflow-hidden bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800">
      {/* フォールバック背景 */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800"></div>
      
      {/* 初音ミクダンス動画背景 */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-90"
        onError={(e) => {
          console.log('動画の読み込みに失敗しました。フォールバック背景を使用します。');
          e.currentTarget.style.display = 'none';
        }}
      >
        <source src="/social_u6455584253_Chibi_Hatsune_Miku_dancing_on_a_concert_stage_cut_bde5e43e-af9c-4a58-8758-5c2ab1af65a3_0.mp4" type="video/mp4" />
        {/* フォールバック用の静的背景 */}
      </video>

      {/* オーバーレイエフェクト - 動画を少し暗くして文字を見やすく */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* 装飾的な光の粒子 - ミクのダンスに合わせた演出 */}
      <div className="absolute top-4 left-4 w-20 h-20 bg-teal-400/15 rounded-full blur-sm animate-pulse"></div>
      <div className="absolute bottom-4 right-8 w-16 h-16 bg-cyan-400/20 rounded-full blur-sm animate-pulse"></div>
      <div className="absolute top-8 right-16 w-12 h-12 bg-emerald-400/15 rounded-full blur-sm animate-pulse"></div>
      <div className="absolute bottom-8 left-16 w-8 h-8 bg-teal-300/20 rounded-full blur-sm animate-pulse"></div>
      
      {/* 音符エフェクト - ダンスに合わせた音楽的演出 */}
      <div className="absolute top-6 left-1/4 text-teal-300/30 text-2xl animate-bounce">♪</div>
      <div className="absolute bottom-6 right-1/3 text-cyan-300/30 text-xl animate-pulse">♫</div>
      <div className="absolute top-1/2 right-1/4 text-emerald-300/30 text-lg animate-bounce" style={{animationDelay: '1s'}}>♪</div>
      
      {/* ステージライト風エフェクト */}
      <div className="absolute top-0 left-1/3 w-32 h-16 bg-gradient-to-b from-white/10 to-transparent blur-sm"></div>
      <div className="absolute top-0 right-1/3 w-24 h-12 bg-gradient-to-b from-cyan-300/10 to-transparent blur-sm"></div>
    </div>
  );
};