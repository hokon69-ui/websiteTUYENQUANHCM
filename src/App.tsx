/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Bell, 
  User, 
  LayoutDashboard, 
  CheckCircle2, 
  Medal, 
  ClipboardList,
  Search,
  ArrowRight,
  Info,
  Check,
  Plus,
  HelpCircle,
  Calendar,
  GraduationCap,
  Dumbbell,
  MapPin,
  Star,
  History,
  FileText,
  Download,
  Megaphone,
  Flame,
  Eye,
  Menu,
  Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Screen = 'home' | 'criteria' | 'benefits' | 'procedures' | 'checker';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeScreen]);

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home': return <HomeScreen onNavigate={setActiveScreen} />;
      case 'criteria': return <CriteriaScreen onNavigate={setActiveScreen} />;
      case 'benefits': return <BenefitsScreen />;
      case 'procedures': return <ProceduresScreen />;
      case 'checker': return <CheckerScreen />;
      default: return <HomeScreen onNavigate={setActiveScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans pb-24">
      {/* Top Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b-4 border-black z-50 flex items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2 sm:gap-3 cursor-pointer" onClick={() => setActiveScreen('home')}>
          <Shield className="w-5 h-5 sm:w-6 sm:h-6 fill-black shrink-0" />
          <h1 className="text-sm sm:text-lg font-black uppercase tracking-tighter">CÔNG AN THÀNH PHỐ HỒ CHÍ MINH</h1>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="https://notebooklm.google.com/notebook/dac7daac-fbbf-4b0d-84e1-37c333624bb4"
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-button py-1 px-3 text-[10px] bg-black text-white hover:bg-white hover:text-black"
          >
            HỎI AI
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 px-4 max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScreen}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-black z-50 flex justify-around items-center px-2 pt-3 pb-8">
        <NavButton 
          active={activeScreen === 'home'} 
          onClick={() => setActiveScreen('home')} 
          icon={<LayoutDashboard />} 
          label="TRANG CHỦ" 
        />
        <NavButton 
          active={activeScreen === 'criteria'} 
          onClick={() => setActiveScreen('criteria')} 
          icon={<CheckCircle2 />} 
          label="TIÊU CHUẨN" 
        />
        <NavButton 
          active={activeScreen === 'benefits'} 
          onClick={() => setActiveScreen('benefits')} 
          icon={<Medal />} 
          label="QUYỀN LỢI" 
        />
        <NavButton 
          active={activeScreen === 'procedures'} 
          onClick={() => setActiveScreen('procedures')} 
          icon={<ClipboardList />} 
          label="THỦ TỤC" 
        />
      </nav>
    </div>
  );
}

function NavButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1 transition-all ${active ? 'text-black' : 'text-zinc-400'}`}
    >
      <div className={`p-1 ${active ? 'bg-black text-white' : ''}`}>
        {icon}
      </div>
      <span className="text-[9px] font-black tracking-widest uppercase">{label}</span>
      {active && <div className="w-full h-0.5 bg-black mt-0.5" />}
    </button>
  );
}

// --- SCREENS ---

function HomeScreen({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="relative h-[400px] border-2 border-black overflow-hidden bg-zinc-100">
        <img 
          src="https://picsum.photos/seed/bitexco-hcm/1200/800" 
          alt="Hero" 
          className="w-full h-full object-cover opacity-60 grayscale contrast-150 brightness-75"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center bg-gradient-to-t from-white/80 to-transparent">
          <div className="-translate-y-8 flex flex-col items-center">
            <h2 className="text-4xl font-black leading-none tracking-tighter uppercase mb-4">
              TUYỂN CÔNG DÂN THỰC HIỆN NGHĨA VỤ THAM GIA CAND 2027
            </h2>
            <p className="text-zinc-600 font-medium leading-tight mb-6 max-w-md">
              Cơ hội rèn luyện, trưởng thành và cống hiến trong hàng ngũ lực lượng vũ trang.
            </p>
            <div className="flex gap-2 w-full max-w-xs">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSeCpBGokJYYxa5xgD8Apu1Mk72jLRwSka1_5dYPsVJlsamp-Q/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="brutal-button bg-black text-white flex-1 text-center"
              >
                ĐĂNG KÝ NGAY
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tasks Section */}
      <section className="space-y-6">
        <div className="border-l-4 border-black pl-4">
          <h3 className="text-3xl font-black uppercase tracking-tighter">Nhiệm vụ trọng tâm</h3>
        </div>
        <div className="grid gap-px bg-black border-2 border-black">
          <TaskCard 
            number="01" 
            title="Cơ động - Chiến đấu" 
            desc="Tham gia các hoạt động tuần tra, kiểm soát, bảo vệ an ninh trật tự và sẵn sàng chiến đấu."
            icon={<Medal />}
            onNavigate={() => onNavigate('criteria')}
          />
          <TaskCard 
            number="02" 
            title="Cứu hộ - Cứu nạn" 
            desc="Thực hiện công tác phòng cháy chữa cháy và cứu nạn, cứu hộ."
            icon={<Flame />}
            onNavigate={() => onNavigate('criteria')}
          />
          <TaskCard 
            number="03" 
            title="Bảo vệ mục tiêu" 
            desc="Canh gác, tuần tra bảo vệ các cơ quan trọng yếu của Đảng, Nhà nước và các cơ quan Công an."
            icon={<Shield />}
            onNavigate={() => onNavigate('criteria')}
          />
          <TaskCard 
            number="04" 
            title="Thông báo & Tuyên truyền" 
            desc="Cập nhật các thông tin mới nhất về tuyển quân và phổ biến pháp luật đến quần chúng nhân dân."
            icon={<Megaphone />}
            onNavigate={() => onNavigate('criteria')}
          />
        </div>
      </section>

      {/* Process Tracker */}
      <section className="bg-black text-white p-8 space-y-8">
        <h3 className="text-2xl font-black uppercase tracking-tighter">Quy trình tuyển chọn</h3>
        <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-white/20">
          <ProcessStep 
            step="1" 
            title="Đăng ký trực tuyến" 
            subtitle="Cổng dịch vụ công quốc gia" 
            completed 
          />
          <ProcessStep 
            step="2" 
            title="Sơ tuyển tại cơ sở" 
            subtitle="Kiểm tra sức khỏe & lý lịch" 
            active 
          />
          <ProcessStep 
            step="3" 
            title="Khám & Xét duyệt" 
            subtitle="Đánh giá hồ sơ cuối cùng" 
          />
        </div>
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSeCpBGokJYYxa5xgD8Apu1Mk72jLRwSka1_5dYPsVJlsamp-Q/viewform" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full bg-white text-black py-4 font-black uppercase tracking-widest text-center block"
        >
          BẮT ĐẦU NỘP HỒ SƠ
        </a>
      </section>
    </div>
  );
}

function TaskCard({ number, title, desc, icon, onNavigate }: { number: string, title: string, desc: string, icon: React.ReactNode, onNavigate: () => void }) {
  return (
    <div className="bg-white p-8 group hover:bg-black hover:text-white transition-colors cursor-pointer">
      <h4 className="text-xl font-black uppercase mb-2">{number}. {title}</h4>
      <p className="text-base text-zinc-800 group-hover:text-zinc-200 font-bold mb-6">{desc}</p>
      <div 
        onClick={(e) => {
          e.stopPropagation();
          onNavigate();
        }}
        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:underline decoration-2 underline-offset-4"
      >
        Tiêu chuẩn <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  );
}

function ProcessStep({ step, title, subtitle, active, completed }: { step: string, title: string, subtitle: string, active?: boolean, completed?: boolean }) {
  return (
    <div className={`relative pl-12 ${!active && !completed ? 'opacity-30' : ''}`}>
      <div className={`absolute left-0 top-1 w-6 h-6 flex items-center justify-center border-2 ${completed ? 'bg-white text-black border-white' : 'bg-black text-white border-white'}`}>
        {completed ? <Check className="w-4 h-4" /> : <div className={`w-2 h-2 ${active ? 'bg-white' : 'bg-transparent'}`} />}
      </div>
      <h5 className="font-black uppercase text-sm">{title}</h5>
      <p className="text-xs uppercase font-black text-zinc-500">{subtitle}</p>
    </div>
  );
}

function CriteriaScreen() {
  return (
    <div className="space-y-12 pb-12">
      <section className="relative h-48 border-2 border-black overflow-hidden bg-black">
        <img 
          src="https://picsum.photos/seed/criteria/800/400?grayscale" 
          alt="Criteria" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 p-8 flex flex-col justify-center">
          <span className="text-[10px] font-black tracking-[0.3em] uppercase mb-2 text-white border-l-2 border-white pl-3">Tuyển chọn 2027</span>
          <h2 className="text-3xl font-black tracking-tighter leading-none text-white uppercase">Tiêu Chuẩn Tuyển Chọn<br/>Công Dân Phục Vụ</h2>
        </div>
      </section>

      <section className="space-y-6">
        <div className="border-b-4 border-black pb-4">
          <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6" /> Điều kiện chung
          </h3>
          <p className="text-zinc-500 text-sm font-medium">Xác nhận các tiêu chuẩn pháp lý trước khi đăng ký.</p>
        </div>

        <div className="space-y-4">
          <CriteriaCard 
            icon={<Calendar />} 
            title="Độ tuổi" 
            desc="Từ đủ 18 tuổi đến hết 25 tuổi; Đến hết 27 tuổi đối với công dân tốt nghiệp Cao đẳng, Đại học." 
          />
          <CriteriaCard 
            icon={<GraduationCap />} 
            title="Trình độ học vấn" 
            desc="Tốt nghiệp THPT trở lên." 
          />
          <div className="brutal-card bg-white space-y-6 hover:bg-black hover:text-white group cursor-pointer transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border-2 border-black group-hover:border-white flex items-center justify-center shrink-0">
                <Dumbbell />
              </div>
              <div className="flex-1">
                <h4 className="font-black text-lg uppercase tracking-tighter">Thể hình & Sức khỏe (đối với NAM)</h4>
                <p className="text-zinc-800 group-hover:text-zinc-200 text-base font-bold mt-1">Tiêu chuẩn sức khỏe loại 1, loại 2.</p>
              </div>
              <CheckCircle2 className="w-6 h-6 fill-black text-white group-hover:fill-white group-hover:text-black" />
            </div>
            <div className="grid grid-cols-2 gap-4 pl-16">
              <div className="bg-zinc-100 group-hover:bg-zinc-900 p-4 border-2 border-black group-hover:border-white transition-colors">
                <span className="text-[10px] uppercase font-black block mb-1">Chiều cao</span>
                <span className="text-xl font-black">≥ 1m60</span>
              </div>
              <div className="bg-zinc-100 group-hover:bg-zinc-900 p-4 border-2 border-black group-hover:border-white transition-colors">
                <span className="text-[10px] uppercase font-black block mb-1">Cân nặng</span>
                <span className="text-xl font-black">≥ 48kg</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 border-4 border-black bg-white relative overflow-hidden group hover:bg-black hover:text-white transition-colors">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-5 h-5 fill-black group-hover:fill-white" />
              <span className="text-xs font-black uppercase tracking-widest">Địa điểm tiếp nhận</span>
            </div>
            <h3 className="text-2xl font-black mb-3 uppercase tracking-tighter">Đăng ký tại Công an cấp xã</h3>
            <p className="text-zinc-800 group-hover:text-zinc-200 text-base font-bold leading-relaxed max-w-md">
              Công dân nộp hồ sơ trực tiếp tại Công an xã, phường, đặc khu theo nơi thường trú để được hướng dẫn thủ tục.
            </p>
            <a 
              href="https://www.google.com/maps/search/Công+an+xã+phường+gần+nhất" 
              target="_blank" 
              rel="noopener noreferrer"
              className="brutal-button w-full mt-8 flex items-center justify-center gap-2 bg-black text-white group-hover:bg-white group-hover:text-black"
            >
              TÌM ĐỊA CHỈ GẦN NHẤT <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <Medal className="absolute -right-8 -bottom-8 w-48 h-48 opacity-5 group-hover:opacity-10" />
        </div>
      </section>
    </div>
  );
}

function CriteriaCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="brutal-card bg-white flex items-start gap-3 sm:gap-4 p-4 sm:p-6 hover:bg-black hover:text-white group cursor-pointer transition-colors">
      <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-black group-hover:border-white flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="font-black text-base sm:text-lg uppercase tracking-tighter">{title}</h4>
        <p className="text-zinc-800 group-hover:text-zinc-200 text-sm sm:text-base font-bold mt-1">{desc}</p>
      </div>
      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 fill-black text-white group-hover:fill-white group-hover:text-black" />
    </div>
  );
}

function BenefitsScreen() {
  return (
    <div className="space-y-12 pb-12">
      <section className="relative h-[280px] sm:h-[360px] border-2 border-black overflow-hidden flex items-center p-4 sm:p-8">
        <img 
          src="https://picsum.photos/seed/benefits/800/600?grayscale" 
          alt="Benefits" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 w-full text-center flex flex-col items-center">
          <div className="flex gap-2 mb-6">
            <span className="bg-white text-black px-3 py-1 text-[10px] font-black tracking-widest uppercase border border-black">Chính sách</span>
            <span className="bg-black text-white px-3 py-1 text-[10px] font-black tracking-widest uppercase border border-white">Thời hạn: 02 Năm</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight tracking-tighter mb-4 uppercase">QUYỀN LỢI & CHẾ ĐỘ CHÍNH SÁCH</h2>
          <p className="text-white/90 font-medium">Gia nhập lực lượng Công an nhân dân được hưởng nhiều chế độ chính sách</p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 brutal-card bg-white flex flex-col justify-between hover:bg-black hover:text-white group">
          <div className="p-4 border-2 border-black group-hover:border-white self-start">
            <Star className="w-8 h-8" />
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-black mb-2 uppercase">Chế độ Tiền lương & Phụ cấp</h3>
            <p className="text-zinc-500 group-hover:text-zinc-400 text-sm">Được hưởng lương và các khoản phụ cấp theo quy định hiện hành của Chính phủ và Bộ Công an.</p>
          </div>
        </div>

        <div className="brutal-card bg-white flex flex-col justify-between hover:bg-black hover:text-white group">
          <div className="p-4 border-2 border-black group-hover:border-white self-start">
            <Shield className="w-8 h-8" />
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-black mb-2 uppercase">An sinh gia đình</h3>
            <p className="text-zinc-500 group-hover:text-zinc-400 text-sm">Cấp thẻ BHYT miễn phí cho thân nhân theo quy định của Ngành.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <BenefitSmallCard icon={<Medal />} title="Điểm cộng các Trường CAND" desc="Cộng điểm ưu tiên khi xét tuyển vào các trường CAND." />
        <BenefitSmallCard icon={<Eye />} title="Hỗ trợ Phẫu thuật Mắt" desc="Hỗ trợ tối đa 25 triệu đồng chi phí điều trị tật khúc xạ theo NQ 34/2025/NQ-HĐND." />
        <BenefitSmallCard icon={<Dumbbell />} title="Huấn luyện Đặc thù" desc="Đào tạo bài bản về Võ thuật, Quân sự và Kỹ năng hiện đại." />
        <BenefitSmallCard icon={<History />} title={<>Hỗ trợ <br /> Việc làm</>} desc="Tư vấn hướng nghiệp và tạo điều kiện tìm việc sau xuất ngũ." />
      </div>

      <section className="space-y-6">
        <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-4">
          <div className="w-12 h-2 bg-black" /> Các chính sách bổ sung
        </h3>
        <div className="border-2 border-black divide-y-2 divide-black">
          <PolicyItem title="Chế độ dành cho cá nhân xuất sắc" desc="Ưu tiên xét chuyển chuyên nghiệp hoặc thăng quân hàm." />
          <PolicyItem title="Chính sách nghỉ phép" desc="Quy định nghỉ phép năm, nghỉ lễ minh bạch." />
          <PolicyItem title="Bồi dưỡng chính trị" desc="Cơ hội đứng vào hàng ngũ của Đảng." />
        </div>
      </section>

      <section className="bg-black text-white p-12 text-center space-y-8 border-2 border-black">
        <h4 className="text-3xl font-black uppercase tracking-tighter">Sẵn sàng để phục vụ Tổ quốc?</h4>
        <p className="text-white/60 font-medium max-w-md mx-auto">Gửi hồ sơ đăng ký ngay hôm nay để nhận được sự tư vấn chi tiết nhất.</p>
        <div className="flex flex-col gap-4">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSeCpBGokJYYxa5xgD8Apu1Mk72jLRwSka1_5dYPsVJlsamp-Q/viewform" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-black py-4 font-black uppercase tracking-widest text-center"
          >
            ĐĂNG KÝ DỰ TUYỂN
          </a>
          <button className="bg-transparent text-white border-2 border-white py-4 font-black uppercase tracking-widest flex items-center justify-center gap-2">
            <Download className="w-5 h-5" /> TẢI VỀ "TỜ KHAI ĐĂNG KÝ TUYỂN NGHĨA VỤ CAND"
          </button>
        </div>
      </section>
    </div>
  );
}

function BenefitSmallCard({ icon, title, desc }: { icon: React.ReactNode, title: React.ReactNode, desc: string }) {
  return (
    <div className="brutal-card bg-white hover:bg-black hover:text-white group">
      <div className="mb-6 group-hover:text-white">{icon}</div>
      <h3 className="text-lg font-black mb-2 uppercase leading-tight">{title}</h3>
      <p className="text-zinc-800 group-hover:text-zinc-200 text-sm font-bold">{desc}</p>
    </div>
  );
}

function PolicyItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="p-6 flex items-center justify-between hover:bg-black hover:text-white group cursor-pointer">
      <div>
        <p className="font-black uppercase text-sm">{title}</p>
        <p className="text-sm font-bold text-zinc-800 group-hover:text-zinc-200">{desc}</p>
      </div>
      <ArrowRight className="w-5 h-5" />
    </div>
  );
}

function ProceduresScreen() {
  return (
    <div className="space-y-12 pb-12">
      <section className="bg-black p-8 text-white relative overflow-hidden">
        <ClipboardList className="absolute top-0 right-0 w-32 h-32 opacity-10 transform translate-x-8 -translate-y-8" />
        <div className="relative z-10">
          <span className="inline-block px-3 py-1 bg-white/10 text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-4">HƯỚNG DẪN CHI TIẾT</span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter mb-2">THỦ TỤC ĐĂNG KÝ</h2>
          <p className="text-white/70 text-sm max-w-md font-medium">Vui lòng chuẩn bị đầy đủ các loại giấy tờ dưới đây để hoàn thiện hồ sơ.</p>
        </div>
      </section>

      <section className="space-y-6">
        <div className="border-l-4 border-black pl-4">
          <h3 className="text-2xl font-black uppercase tracking-tighter">Danh mục hồ sơ</h3>
        </div>
        <div className="bg-black p-6 flex items-center gap-4 border-l-8 border-white">
          <Info className="w-6 h-6 text-white shrink-0" />
          <p className="text-sm text-white font-black uppercase tracking-[0.1em]">Lưu ý: Chỉ cần bản sao y</p>
        </div>
        <div className="grid gap-px bg-black border-2 border-black">
          <ChecklistItem title="Bằng tốt nghiệp THPT/Giấy chứng nhận tạm thời" desc="Chỉ cần bản sao y, không cần công chứng" checked />
          <ChecklistItem title="Học bạ THPT" desc="Bản sao y toàn bộ các trang" checked />
          <ChecklistItem title="Giấy chứng nhận đăng ký nghĩa vụ quân sự" desc="Đối với nam thanh niên" checked />
          <ChecklistItem title="Thẻ Căn cước công dân (CCCD)" desc="Bản photo 2 mặt (Sao y)" checked />
          <ChecklistItem title="Giấy khai sinh" desc="Bản sao trích lục" checked />
          <ChecklistItem title="Nghị quyết kết nạp Đoàn/Đảng" desc="Kèm hồ sơ đảng viên hoặc sổ đoàn viên" checked />
          <div className="bg-white p-6 flex items-start gap-4 border-l-8 border-black">
            <div className="w-6 h-6 border-2 border-black flex items-center justify-center shrink-0">
              <Plus className="w-4 h-4" />
            </div>
            <div>
              <p className="font-black uppercase text-sm">Các văn bằng, chứng chỉ khác</p>
              <p className="text-xs text-zinc-400 italic font-bold">IELTS, TOEFL, Bằng nghề...</p>
            </div>
          </div>
        </div>
      </section>

      <section className="brutal-card bg-white space-y-8">
        <h3 className="text-2xl font-black uppercase tracking-tighter">Quy trình thực hiện</h3>
        <div className="space-y-0">
          <JourneyStep step="01" title="Chuẩn bị hồ sơ" desc="Hoàn thiện các loại giấy tờ theo danh mục checklist phía trên." />
          <JourneyStep step="02" title="Nộp hồ sơ sơ tuyển" desc="Trực tiếp đến cơ quan Công an cấp xã nơi thường trú để nộp." />
          <JourneyStep step="03" title="Khám & khám phúc tra" desc="Thực hiện kiểm tra tiêu chuẩn sức khỏe theo lịch của CATP." last />
        </div>
      </section>

      <section className="bg-black p-6 flex items-center gap-5 overflow-hidden">
        <div className="w-12 h-12 border-2 border-white flex items-center justify-center text-white shrink-0">
          <Phone className="w-6 h-6" />
        </div>
        <div className="min-w-0">
          <h4 className="font-black text-white uppercase text-sm">Hỗ trợ trực tiếp</h4>
          <p className="text-xs text-white/60 font-medium">Liên hệ Công an cấp xã tại nơi thường trú để được hướng dẫn.</p>
        </div>
      </section>

      <section className="relative h-64 border-2 border-black overflow-hidden">
        <img 
          src="https://picsum.photos/seed/docs/800/600?grayscale" 
          alt="Docs" 
          className="w-full h-full object-cover grayscale contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-8">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSeCpBGokJYYxa5xgD8Apu1Mk72jLRwSka1_5dYPsVJlsamp-Q/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-black text-xl uppercase tracking-tighter leading-tight hover:underline underline-offset-8 decoration-4 block"
          >
            ĐĂNG KÝ
          </a>
        </div>
      </section>
    </div>
  );
}

function ChecklistItem({ title, desc, checked }: { title: string, desc: string, checked?: boolean }) {
  return (
    <div className="bg-white p-6 flex items-start gap-4">
      <div className={`w-6 h-6 border-2 border-black flex items-center justify-center shrink-0 ${checked ? 'bg-black text-white' : ''}`}>
        {checked && <Check className="w-4 h-4" />}
      </div>
      <div>
        <p className="font-black uppercase text-sm">{title}</p>
        <p className="text-sm text-zinc-800 font-bold italic">{desc}</p>
      </div>
    </div>
  );
}

function JourneyStep({ step, title, desc, last }: { step: string, title: string, desc: string, last?: boolean }) {
  return (
    <div className={`relative pl-10 pb-10 ${!last ? 'border-l-4 border-black' : ''}`}>
      <div className="absolute -left-[14px] top-0 w-6 h-6 bg-black border-4 border-white" />
      <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">Bước {step}</p>
      <h4 className="font-black text-black uppercase text-lg leading-none">{title}</h4>
      <p className="text-base text-zinc-800 mt-2 font-bold">{desc}</p>
    </div>
  );
}

function CheckerScreen() {
  return (
    <div className="space-y-8 pb-12">
      <section className="bg-white p-8 border-4 border-black brutal-shadow">
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Kiểm tra tiêu chuẩn</h2>
        <p className="text-zinc-600 font-bold">Tự đánh giá khả năng đáp ứng các tiêu chuẩn tuyển chọn.</p>
      </section>
      <div className="brutal-card bg-zinc-100 min-h-[300px] flex flex-col items-center justify-center text-center p-8">
        <CheckCircle2 className="w-16 h-16 mb-4 opacity-20" />
        <p className="font-black uppercase tracking-widest text-zinc-400">Tính năng đang được cập nhật...</p>
      </div>
    </div>
  );
}

