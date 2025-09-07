import React from 'react';
import { Music, Calendar, Heart, Code, Monitor, Sparkles, Film, Star } from 'lucide-react';
import { BusinessCard } from './components/BusinessCard';
import { ProfileCard, Tag, TimelineItem } from './components/ProfileCard';
import { MikuVideoHeader } from './components/MikuVideoHeader';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50">
      {/* ヘッダー背景 */}
      <MikuVideoHeader />

      <div className="max-w-6xl mx-auto px-4 mt-8 relative z-10">
        {/* 名刺セクション */}
        <BusinessCard />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* ボカロとの出会い */}
          <ProfileCard
            title="ボカロとの出会い"
            icon={<Music className="w-5 h-5" />}
            className="lg:col-span-2"
            id="vocaloid-journey"
          >
            <div className="space-y-4">
              <TimelineItem
                year="2022春"
                title="運命の出会い"
                description="ランダムで音楽を流していた時に「初音ミクの消失」に出会い衝撃を受け、ミクファンに"
                highlight={true}
              />
              <TimelineItem
                year="2022夏"
                title="更なる深みへ"
                description="他の曲を探すと「ODDS&ENDS」に夢中になる"
              />
              <TimelineItem
                year="2022秋"
                title="ライブへの憧れ"
                description="YouTubeのライブ映像で「Hand in Hand」を見て「自分もその場にいたい」と決意し、ライブ参戦開始"
              />
              <TimelineItem
                year="2023"
                title="初ライブ参戦"
                description="ついに念願のライブデビュー！THUNDERBOLTとマジカルミライで感動の初体験"
              />
            </div>
          </ProfileCard>

          {/* ライブ参戦歴 */}
          <ProfileCard
            title="ライブ参戦歴"
            icon={<Calendar className="w-5 h-5" />}
            id="live-history"
          >
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg border border-teal-100">
                <h3 className="font-bold text-teal-700 mb-2">2023年</h3>
                <div className="space-y-1">
                  <Tag variant="secondary">THUNDERBOLT</Tag>
                  <Tag variant="secondary">マジカルミライ2023</Tag>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-50 to-emerald-50 p-4 rounded-lg border border-cyan-100">
                <h3 className="font-bold text-cyan-700 mb-2">2024年</h3>
                <div className="space-y-1">
                  <Tag variant="primary">MIKU FES '24（春）</Tag>
                  <Tag variant="primary">マジカルミライ2024</Tag>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-lg border border-emerald-100">
                <h3 className="font-bold text-emerald-700 mb-2">2025年</h3>
                <div className="space-y-1">
                  <Tag variant="accent">BLOOMING</Tag>
                  <Tag variant="accent">マジカルミライ2025</Tag>
                </div>
              </div>
            </div>
          </ProfileCard>

          {/* 好きなボカロP */}
          <ProfileCard
            title="好きなボカロP"
            icon={<Star className="w-5 h-5" />}
          >
            <div className="flex flex-wrap gap-2">
              {[
                'DIVELA', '南の南', 'デコ27', 'ryou', '暴走P', 'omoi',
                'せきこみごはん', 'かいりきベア', 'steaka', 'ピノキオピー',
                '柊まぐねたいと', 'いよわ', 'イルカアイス'
              ].map((producer, index) => (
                <Tag key={producer} variant={index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'accent'}>
                  {producer}
                </Tag>
              ))}
            </div>
          </ProfileCard>

          {/* アニメとの出会い */}
          <ProfileCard
            title="アニメとの出会い"
            icon={<Film className="w-5 h-5" />}
            className="lg:col-span-2"
          >
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg border-l-4 border-teal-500 shadow-sm">
                <p className="text-teal-700">
                  <strong className="text-teal-800">2015年『4月は君の嘘』</strong>がきっかけでアニメ視聴開始。
                  最終話で号泣し、それ以来ずっと元気をもらい続けている運命の作品。
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-teal-800 mb-2">好きなジャンル</h3>
                  <p className="text-teal-600 text-sm">異世界・チート系・ご都合主義アニメ。複雑な内容は苦手で、楽しく見られる作品が好み。</p>
                </div>
                <div>
                  <h3 className="font-semibold text-teal-800 mb-2">好きな作品（抜粋）</h3>
                  <div className="flex flex-wrap gap-1 text-xs">
                    {[
                      '4月は君の嘘', '花咲くいろは', 'SHIROBAKO', 'SAO', 'CLANNAD',
                      'NEW GAME', 'フェアリーテイル', 'イセスマ', 'Fate', '禁書目録',
                      '超電磁砲', 'はたらく魔王様', 'オーバーロード', '夏目友人帳', '盾の勇者',
                      'ヒロアカ', 'リゼロ', 'BLEACH', 'スライム転生', 'ノゲノラ',
                      'ワールドトリガー', 'ブラッククローバー', '精霊幻想記', '月が導く異世界道中', 'Vivy'
                    ].map((anime, index) => (
                      <span key={anime} className="bg-teal-100 text-teal-700 px-2 py-1 rounded text-xs hover:bg-teal-200 transition-colors duration-200">
                        {anime}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ProfileCard>

          {/* 技術・その他の趣味 */}
          <ProfileCard
            title="技術・その他の趣味"
            icon={<Code className="w-5 h-5" />}
            className="lg:col-span-2"
            id="tech-hobbies"
          >
            <div className="space-y-6">
              {/* 技術の変遷 */}
              <div>
                <h3 className="font-semibold text-teal-800 mb-3 flex items-center gap-2">
                  <Monitor className="w-4 h-4" />
                  テクノロジージャーニー
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Tag variant="primary">VBA</Tag>
                  <span className="text-gray-400">→</span>
                  <Tag variant="primary">Python</Tag>
                  <span className="text-gray-400">→</span>
                  <Tag variant="primary">PAD</Tag>
                  <span className="text-gray-400">→</span>
                  <Tag variant="primary">Power Platform</Tag>
                  <span className="text-gray-400">→</span>
                  <Tag variant="secondary">バイブコーディング</Tag>
                </div>
                <p className="text-sm text-teal-600 italic">趣味として楽しみながらアプリ制作を学習中</p>
              </div>

              {/* 愛用ツール */}
              <div>
                <h3 className="font-semibold text-teal-800 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Premium Tools Stack
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-teal-600 mb-2 uppercase tracking-wide">AI & Development</h4>
                    <div className="space-y-1 text-sm">
                      <Tag variant="accent">ChatGPT</Tag>
                      <Tag variant="accent">Claude</Tag>
                      <Tag variant="accent">Cursor</Tag>
                      <Tag variant="accent">bolt.new</Tag>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-teal-600 mb-2 uppercase tracking-wide">Creative Suite</h4>
                    <div className="space-y-1 text-sm">
                      <Tag variant="primary">Notion</Tag>
                      <Tag variant="primary">GitHub Copilot</Tag>
                      <Tag variant="primary">Midjourney</Tag>
                      <Tag variant="primary">SUNO AI</Tag>
                      <Tag variant="primary">genspark agents</Tag>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-teal-600 mb-2 uppercase tracking-wide">Infrastructure</h4>
                    <div className="space-y-1 text-sm">
                      <Tag variant="secondary">Heroku</Tag>
                      <Tag variant="secondary">Supabase</Tag>
                      <Tag variant="secondary">Domo AI</Tag>
                      <Tag variant="secondary">aquavoice</Tag>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ProfileCard>
        </div>

        {/* フッター */}
        <footer className="text-center py-8 text-teal-500 text-sm">
          <p>Created with ♪ by 玉木一彦 for Vocaloid & Anime Community</p>
        </footer>
      </div>
    </div>
  );
}

export default App;