import { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Heart, 
  Shield, 
  Star, 
  Moon, 
  Sun, 
  ChevronDown,
  Quote,
  Menu,
  X,
  Users,
  Home,
  School,
  Award,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

function App() {
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'pergaulan-bebas', label: 'Pergaulan Bebas', icon: Shield },
    { id: 'cinta-allah', label: 'Cinta & Tawakal', icon: Heart },
    { id: 'akhlak-mahmudah', label: 'Akhlak Mahmudah', icon: Star },
    { id: 'kontrol-diri-lanjut', label: 'Kontrol Diri', icon: CheckCircle },
    { id: 'bela-kebenaran', label: 'Bel Kebenaran', icon: Award },
  ];

  return (
    <div className="min-h-screen bg-[#fafaf8] islamic-pattern">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full gradient-islamic flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg text-emerald-900">Materi PAI</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'text-emerald-700 hover:bg-emerald-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-emerald-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-emerald-100">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full px-4 py-3 text-left text-emerald-700 hover:bg-emerald-50 flex items-center gap-3"
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-islamic"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white/30 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 border-2 border-white/20 rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-white/20 rotate-45"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
              <Moon className="w-4 h-4 mr-1" /> Pendidikan Agama Islam
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Membangun Akhlak Mulia
              <span className="block text-amber-300">Menuju Kehidupan Islami</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Pelajari materi-materi penting tentang menjauhi pergaulan bebas, 
              mencintai Allah SWT, dan membiasakan akhlak mahmudah
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection('pergaulan-bebas')}
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg rounded-full"
              >
                Mulai Belajar
                <ChevronDown className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* Section 1: Menjauhi Pergaulan Bebas */}
      <section id="pergaulan-bebas" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800">
              <Shield className="w-4 h-4 mr-1" /> Materi 1
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
              Menjauhi Pergaulan Bebas dan Perbuatan Zina
            </h2>
            <p className="text-emerald-700 max-w-2xl mx-auto">
              Melindungi harkat dan martabat manusia melalui pemahaman ayat-ayat Al-Qur'an
            </p>
          </div>

          {/* QS. Al-Isra: 32 */}
          <Card className="glass-card hover-lift mb-8 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-emerald-50 to-emerald-100 border-b border-emerald-200">
              <CardTitle className="flex items-center gap-3 text-emerald-900">
                <Quote className="w-6 h-6 text-emerald-600" />
                QS. Al-Isra: 32
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <div className="verse-container p-6 rounded-xl mb-6">
                <p className="arabic-text text-2xl md:text-3xl text-emerald-900 text-center mb-4" dir="rtl">
                  وَلَا تَقْرَبُوا الزِّنَا إِنَّهُ كَانَ فَاحِشَةً وَسَاءَ سَبِيلًا
                </p>
                <p className="text-center text-emerald-700 italic">
                  "Dan janganlah kamu mendekati zina; sesungguhnya zina itu adalah suatu perbuatan yang keji dan suatu jalan yang buruk."
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-emerald-900 mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5" /> Arti Per Kata
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between py-2 border-b border-emerald-100">
                      <span className="arabic-text text-lg" dir="rtl">وَلَا</span>
                      <span className="text-emerald-700">dan janganlah</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-emerald-100">
                      <span className="arabic-text text-lg" dir="rtl">تَقْرَبُوا</span>
                      <span className="text-emerald-700">kamu mendekati</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-emerald-100">
                      <span className="arabic-text text-lg" dir="rtl">الزِّنَا</span>
                      <span className="text-emerald-700">zina (perzinahan)</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-emerald-100">
                      <span className="arabic-text text-lg" dir="rtl">إِنَّهُ</span>
                      <span className="text-emerald-700">sesungguhnya ia (zina)</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-emerald-100">
                      <span className="arabic-text text-lg" dir="rtl">كَانَ</span>
                      <span className="text-emerald-700">adalah</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-emerald-100">
                      <span className="arabic-text text-lg" dir="rtl">فَاحِشَةً</span>
                      <span className="text-emerald-700">perbuatan keji/buruk</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-emerald-100">
                      <span className="arabic-text text-lg" dir="rtl">وَسَاءَ</span>
                      <span className="text-emerald-700">dan adalah buruk</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="arabic-text text-lg" dir="rtl">سَبِيلًا</span>
                      <span className="text-emerald-700">jalan (yang ditempuh)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-emerald-900 mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5" /> Kandungan Ayat
                  </h4>
                  <ul className="space-y-3 text-emerald-800">
                    <li className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm flex-shrink-0">1</span>
                      <span>Larangan mendekati zina, bukan hanya melakukannya</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm flex-shrink-0">2</span>
                      <span>Zina adalah perbuatan fahisyah (keji dan tercela)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm flex-shrink-0">3</span>
                      <span>Zina adalah jalan yang buruk dan merusak</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm flex-shrink-0">4</span>
                      <span>Perlunya menjaga diri dari segala hal yang mengantar ke zina</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* QS. An-Nur: 2 */}
          <Card className="glass-card hover-lift overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100 border-b border-amber-200">
              <CardTitle className="flex items-center gap-3 text-amber-900">
                <Quote className="w-6 h-6 text-amber-600" />
                QS. An-Nur: 2
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <div className="verse-container p-6 rounded-xl mb-6 border-r-amber-500">
                <p className="arabic-text text-2xl md:text-3xl text-emerald-900 text-center mb-4" dir="rtl">
                  الزَّانِيَةُ وَالزَّانِي فَاجْلِدُوا كُلَّ وَاحِدٍ مِنْهُمَا مِائَةَ جَلْدَةٍ وَلَا تَأْخُذْكُمْ بِهِمَا رَأْفَةٌ فِي دِينِ اللَّهِ إِنْ كُنْتُمْ تُؤْمِنُونَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ وَلْيَشْهَدْ عَذَابَهُمَا طَائِفَةٌ مِنَ الْمُؤْمِنِينَ
                </p>
                <p className="text-center text-emerald-700 italic">
                  "Perempuan yang berzina dan laki-laki yang berzina, maka deralah tiap-tiap seorang dari keduanya seratus kali dera, dan janganlah belas kasihan kepada keduanya mencegah kamu untuk (menjalankan) agama Allah, jika kamu beriman kepada Allah, dan hari akhirat, dan hendaklah (pelaksanaan) hukuman mereka disaksikan oleh sekumpulan orang-orang yang beriman."
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-emerald-900 mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5" /> Arti Per Kata
                  </h4>
                  <ScrollArea className="h-80 rounded-lg border border-emerald-100 p-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between py-2 border-b border-emerald-100">
                        <span className="arabic-text text-lg" dir="rtl">الزَّانِيَةُ</span>
                        <span className="text-emerald-700">perempuan yang berzina</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-emerald-100">
                        <span className="arabic-text text-lg" dir="rtl">وَالزَّانِي</span>
                        <span className="text-emerald-700">dan laki-laki yang berzina</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-emerald-100">
                        <span className="arabic-text text-lg" dir="rtl">فَاجْلِدُوا</span>
                        <span className="text-emerald-700">maka deralah</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-emerald-100">
                        <span className="arabic-text text-lg" dir="rtl">كُلَّ وَاحِدٍ</span>
                        <span className="text-emerald-700">tiap-tiap seorang</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-emerald-100">
                        <span className="arabic-text text-lg" dir="rtl">مِنْهُمَا</span>
                        <span className="text-emerald-700">dari keduanya</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-emerald-100">
                        <span className="arabic-text text-lg" dir="rtl">مِائَةَ جَلْدَةٍ</span>
                        <span className="text-emerald-700">seratus dera</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-emerald-100">
                        <span className="arabic-text text-lg" dir="rtl">وَلَا تَأْخُذْكُمْ</span>
                        <span className="text-emerald-700">dan janganlah menimpa kalian</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-emerald-100">
                        <span className="arabic-text text-lg" dir="rtl">بِهِمَا</span>
                        <span className="text-emerald-700">terhadap keduanya</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-emerald-100">
                        <span className="arabic-text text-lg" dir="rtl">رَأْفَةٌ</span>
                        <span className="text-emerald-700">belas kasihan</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-emerald-100">
                        <span className="arabic-text text-lg" dir="rtl">فِي دِينِ اللَّهِ</span>
                        <span className="text-emerald-700">dalam agama Allah</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-emerald-100">
                        <span className="arabic-text text-lg" dir="rtl">إِنْ كُنْتُمْ</span>
                        <span className="text-emerald-700">jika kalian adalah</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-emerald-100">
                        <span className="arabic-text text-lg" dir="rtl">تُؤْمِنُونَ</span>
                        <span className="text-emerald-700">orang yang beriman</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-emerald-100">
                        <span className="arabic-text text-lg" dir="rtl">بِاللَّهِ</span>
                        <span className="text-emerald-700">kepada Allah</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-emerald-100">
                        <span className="arabic-text text-lg" dir="rtl">وَالْيَوْمِ الْآخِرِ</span>
                        <span className="text-emerald-700">dan hari akhir</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-emerald-100">
                        <span className="arabic-text text-lg" dir="rtl">وَلْيَشْهَدْ</span>
                        <span className="text-emerald-700">dan hendaklah menyaksikan</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-emerald-100">
                        <span className="arabic-text text-lg" dir="rtl">عَذَابَهُمَا</span>
                        <span className="text-emerald-700">hukuman mereka</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-emerald-100">
                        <span className="arabic-text text-lg" dir="rtl">طَائِفَةٌ</span>
                        <span className="text-emerald-700">sekumpulan</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="arabic-text text-lg" dir="rtl">مِنَ الْمُؤْمِنِينَ</span>
                        <span className="text-emerald-700">dari orang-orang beriman</span>
                      </div>
                    </div>
                  </ScrollArea>
                </div>
                <div>
                  <h4 className="font-bold text-emerald-900 mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5" /> Kandungan Ayat
                  </h4>
                  <ul className="space-y-3 text-emerald-800">
                    <li className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-sm flex-shrink-0">1</span>
                      <span>Hukuman bagi pelaku zina adalah 100 kali dera</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-sm flex-shrink-0">2</span>
                      <span>Hukuman berlaku sama untuk laki-laki dan perempuan</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-sm flex-shrink-0">3</span>
                      <span>Jangan ada belas kasihan yang menghalangi pelaksanaan hukum Allah</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-sm flex-shrink-0">4</span>
                      <span>Pelaksanaan hukum harus disaksikan oleh sekelompok mukmin</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-sm flex-shrink-0">5</span>
                      <span>Hukuman ini berlaku bagi orang yang beriman kepada Allah dan hari akhir</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto"></div>

      {/* Section 2: Cinta Allah, Khauf, Raja, Tawakal */}
      <section id="cinta-allah" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800">
              <Heart className="w-4 h-4 mr-1" /> Materi 2
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
              Mencintai Allah SWT, Khauf, Raja, dan Tawakal
            </h2>
            <p className="text-emerald-700 max-w-2xl mx-auto">
              Memahami hakikat kecintaan dan ketakwaan kepada Allah SWT
            </p>
          </div>

          {/* Hakikat Mencintai Allah */}
          <Card className="glass-card hover-lift mb-8">
            <CardHeader className="bg-gradient-to-r from-rose-50 to-rose-100">
              <CardTitle className="text-rose-900 flex items-center gap-2">
                <Heart className="w-6 h-6 text-rose-600" />
                Hakikat Mencintai Allah SWT
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-emerald-800 mb-6">
                Mencintai Allah SWT adalah rasa cinta yang mendalam dan tulus kepada Sang Pencipta, 
                yang tercermin dalam setiap aspek kehidupan seorang hamba.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: 'Mencintai Rasulullah SAW', desc: 'Mengikuti sunnah dan teladan beliau dalam kehidupan sehari-hari' },
                  { title: 'Mencintai Al-Qur\'an', desc: 'Membaca, memahami, dan mengamalkan isi Al-Qur\'an' },
                  { title: 'Menjauhi Perbuatan Dosa', desc: 'Berusaha keras menghindari segala larangan Allah' },
                  { title: 'Mendahulukan yang Dicintai Allah', desc: 'Mengutamakan perintah Allah atas keinginan diri' },
                  { title: 'Tak Gentar Menghadapi Hinaan', desc: 'Tetap istiqomah meski dihina karena agama' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-rose-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-rose-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-emerald-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Khauf dan Raja */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="glass-card hover-lift">
              <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100">
                <CardTitle className="text-slate-900 flex items-center gap-2">
                  <Moon className="w-6 h-6 text-slate-600" />
                  Hakikat Takut kepada Allah (Khauf)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-emerald-800">
                  <strong>Khauf</strong> adalah perasaan takut kepada Allah SWT yang mendorong seseorang 
                  untuk selalu taat dan menjauhi larangan-Nya. Khauf yang sehat membuat hamba selalu 
                  waspada dan berhati-hati dalam setiap perbuatan.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift">
              <CardHeader className="bg-gradient-to-r from-sky-50 to-sky-100">
                <CardTitle className="text-sky-900 flex items-center gap-2">
                  <Sun className="w-6 h-6 text-sky-600" />
                  Hakikat Berharap kepada Allah (Raja)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-emerald-800 mb-4">
                  <strong>Raja</strong> adalah perasaan berharap dan optimis akan rahmat, ampunan, 
                  dan karunia Allah SWT.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-sky-800">Tiga Bentuk Raja:</p>
                  <ul className="text-sm text-emerald-700 space-y-1">
                    <li>• Berharap akan pahala dari amal shaleh</li>
                    <li>• Berharap akan ampunan setelah bertobat</li>
                    <li>• Berharap akan kebaikan di dunia dan akhirat</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cara Menumbuhkan Raja */}
          <Card className="glass-card hover-lift mb-8">
            <CardHeader className="bg-gradient-to-r from-violet-50 to-violet-100">
              <CardTitle className="text-violet-900 flex items-center gap-2">
                <Star className="w-6 h-6 text-violet-600" />
                Cara Menumbuhkan Sifat Raja
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-violet-50 p-5 rounded-xl">
                  <div className="w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center mb-3 font-bold">A</div>
                  <h4 className="font-semibold text-violet-900 mb-2">Muhasabah Nikmat Allah</h4>
                  <p className="text-sm text-emerald-700">Selalu mengingat dan mensyukuri segala nikmat yang telah diberikan Allah SWT</p>
                </div>
                <div className="bg-violet-50 p-5 rounded-xl">
                  <div className="w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center mb-3 font-bold">B</div>
                  <h4 className="font-semibold text-violet-900 mb-2">Mempelajari Al-Qur'an</h4>
                  <p className="text-sm text-emerald-700">Memahami janji-janji Allah kepada hamba-hamba-Nya yang beriman</p>
                </div>
                <div className="bg-violet-50 p-5 rounded-xl">
                  <div className="w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center mb-3 font-bold">C</div>
                  <h4 className="font-semibold text-violet-900 mb-2">Menyakini Kesempurnaan Karunia</h4>
                  <p className="text-sm text-emerald-700">Yakin bahwa Allah memberikan yang terbaik bagi hamba-Nya</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ciri-ciri dan Cara Membiasakan Raja */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="glass-card hover-lift">
              <CardHeader>
                <CardTitle className="text-emerald-900 text-lg">Ciri-ciri Sifat Raja</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    { label: 'Optimis', desc: 'Selalu berpikir positif dan yakin dengan pertolongan Allah' },
                    { label: 'Dinamis', desc: 'Tidak mudah putus asa dan terus berusaha' },
                    { label: 'Berpikir Kritis', desc: 'Mencari solusi terbaik dengan tawakal' },
                    { label: 'Mengenali Diri', desc: 'Menghadap keridaan Allah dalam setiap tindakan' },
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs flex-shrink-0">
                        {String.fromCharCode(97 + idx)}
                      </span>
                      <div>
                        <span className="font-semibold text-emerald-900">{item.label}</span>
                        <p className="text-sm text-emerald-700">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift">
              <CardHeader>
                <CardTitle className="text-emerald-900 text-lg">Hikmah dan Keutamaan Raja</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-emerald-800">
                  <li className="flex gap-2">
                    <span className="text-amber-500">•</span>
                    <span>Memberikan semangat hidup dan motivasi</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-500">•</span>
                    <span>Menjauhkan dari sifat putus asa</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-500">•</span>
                    <span>Mendorong untuk terus beramal shaleh</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-500">•</span>
                    <span>Membuat hati tenang dan damai</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-500">•</span>
                    <span>Menguatkan iman dan keyakinan</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Tawakal */}
          <Card className="glass-card hover-lift">
            <CardHeader className="bg-gradient-to-r from-teal-50 to-teal-100">
              <CardTitle className="text-teal-900 flex items-center gap-2">
                <Shield className="w-6 h-6 text-teal-600" />
                Tawakal kepada Allah SWT
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-emerald-800 mb-4">
                <strong>Tawakal</strong> adalah menyerahkan segala urusan kepada Allah SWT setelah 
                berusaha dengan sungguh-sungguh, dengan keyakinan bahwa Allah akan memberikan 
                yang terbaik.
              </p>
              <div className="bg-teal-50 p-5 rounded-xl">
                <p className="text-emerald-800 italic text-center">
                  "Barang siapa bertawakal kepada Allah, niscaya Allah akan mencukupkan (keperluan)nya."
                  <span className="block mt-2 text-sm not-italic text-emerald-600">— QS. At-Talaq: 3</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto"></div>

      {/* Section 3: Akhlak Mahmudah */}
      <section id="akhlak-mahmudah" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800">
              <Star className="w-4 h-4 mr-1" /> Materi 3
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
              Menghindari Akhlak Mazmumah dan Membiasakan Akhlak Mahmudah
            </h2>
            <p className="text-emerald-700 max-w-2xl mx-auto">
              Agar hidup lebih nyaman, tenang, dan berkah
            </p>
          </div>

          {/* Menghindari Tempramental */}
          <Card className="glass-card hover-lift mb-8">
            <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50">
              <CardTitle className="text-red-900 flex items-center gap-2">
                <span className="text-2xl">😤</span>
                Menghindari Sifat Tempramental (Ghadab)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-emerald-800 mb-4">
                <strong>Ghadab</strong> atau kemarahan yang berlebihan adalah sifat tercela yang dapat 
                merusak hubungan sosial dan spiritual seseorang. Islam mengajarkan untuk mengendalikan 
                amarah dan tidak mudah terpancing emosi.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">Dampak Buruk Ghadab</h4>
                  <ul className="text-sm text-emerald-700 space-y-1">
                    <li>• Merusak hubungan dengan sesama</li>
                    <li>• Membuat keputusan yang tidak rasional</li>
                    <li>• Menimbulkan penyesalan di kemudian hari</li>
                    <li>• Mendatangkan dosa</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-emerald-900 mb-2">Hadits tentang Ghadab</h4>
                  <p className="text-sm text-emerald-700 italic">
                    "Sesungguhnya amarah itu menghancurkan iman sebagaimana garam menghancurkan madu."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Kontrol Diri */}
          <Card className="glass-card hover-lift">
            <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50">
              <CardTitle className="text-emerald-900 flex items-center gap-2">
                <span className="text-2xl">🧘</span>
                Membiasakan Perilaku Kontrol Diri
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-emerald-800 mb-6">
                <strong>Kontrol diri</strong> adalah kemampuan mengendalikan diri dari hal-hal yang 
                dapat merusak akhlak dan mendatangkan dosa. Berikut macam-macam kontrol diri:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* A. Menjaga Lisan */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">A</div>
                    <h4 className="font-semibold text-blue-900">Menjaga Lisan</h4>
                  </div>
                  <p className="text-sm text-emerald-700 mb-3">
                    Mengendalikan ucapan dari perkataan yang sia-sia, dusta, ghibah, dan fitnah.
                  </p>
                  <div className="bg-white/70 p-3 rounded-lg">
                    <p className="text-xs text-emerald-600 italic">
                      "Barang siapa yang beriman kepada Allah dan hari akhir, hendaklah dia berkata baik atau diam."
                      <span className="block mt-1 not-italic">— HR. Bukhari</span>
                    </p>
                  </div>
                </div>

                {/* B. Menjaga Nafsu Seksual */}
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold">B</div>
                    <h4 className="font-semibold text-rose-900">Menjaga Nafsu Seksual</h4>
                  </div>
                  <p className="text-sm text-emerald-700 mb-3">
                    Mengendalikan hasrat seksual sesuai syariat Islam, menjaga pandangan, dan menjauhi hal-hal yang membangkitkan syahwat.
                  </p>
                  <div className="bg-white/70 p-3 rounded-lg">
                    <p className="text-xs text-emerald-600">
                      Caranya: Menjaga pandangan, menikah, berpuasa, dan memperbanyak ibadah.
                    </p>
                  </div>
                </div>

                {/* C. Mengendalikan Nafsu Makan Minum */}
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">C</div>
                    <h4 className="font-semibold text-amber-900">Mengendalikan Nafsu Makan & Minum</h4>
                  </div>
                  <p className="text-sm text-emerald-700 mb-3">
                    Makan dan minum secukupnya, tidak berlebihan, dan memperhatikan halalnya makanan.
                  </p>
                  <div className="bg-white/70 p-3 rounded-lg">
                    <p className="text-xs text-emerald-600 italic">
                      "Hai anak Adam, sesungguhnya jika kamu bersyukur niscaya Aku akan menambah (nikmat) kepadamu."
                      <span className="block mt-1 not-italic">— QS. Ibrahim: 7</span>
                    </p>
                  </div>
                </div>

                {/* D. Mengendalikan Emosi */}
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">D</div>
                    <h4 className="font-semibold text-teal-900">Mengendalikan Emosi</h4>
                  </div>
                  <p className="text-sm text-emerald-700 mb-3">
                    Menjaga stabilitas emosi, tidak mudah marah, sedih berlebihan, atau gembira yang berlebihan.
                  </p>
                  <div className="bg-white/70 p-3 rounded-lg">
                    <p className="text-xs text-emerald-600">
                      Tips: Berwudhu, duduk jika sedang berdiri, dan berlindung kepada Allah dari setan.
                    </p>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="bg-emerald-50 p-5 rounded-xl">
                <h4 className="font-semibold text-emerald-900 mb-3 text-center">Manfaat Membiasakan Kontrol Diri</h4>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="bg-white p-4 rounded-lg">
                    <span className="text-3xl mb-2 block">😊</span>
                    <p className="text-sm text-emerald-700">Hidup lebih tenang dan damai</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <span className="text-3xl mb-2 block">🤝</span>
                    <p className="text-sm text-emerald-700">Hubungan sosial lebih harmonis</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <span className="text-3xl mb-2 block">🌟</span>
                    <p className="text-sm text-emerald-700">Mendapatkan ridha Allah SWT</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto"></div>

      {/* Section 4: Manfaat & Penerapan Kontrol Diri */}
      <section id="kontrol-diri-lanjut" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              <CheckCircle className="w-4 h-4 mr-1" /> Materi 4
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
              Manfaat dan Penerapan Kontrol Diri
            </h2>
            <p className="text-emerald-700 max-w-2xl mx-auto">
              Memahami hikmah kontrol diri dan menerapkannya dalam kehidupan sehari-hari
            </p>
          </div>

          {/* Manfaat dan Hikmah Kontrol Diri */}
          <Card className="glass-card hover-lift mb-8">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
              <CardTitle className="text-emerald-900 flex items-center gap-2">
                <Star className="w-6 h-6 text-emerald-600" />
                Manfaat dan Hikmah Kontrol Diri
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-emerald-800 mb-6">
                Kontrol diri memiliki banyak manfaat dan hikmah dalam kehidupan seorang Muslim. 
                Dengan mengendalikan diri, kita dapat mencapai keberkahan dan kesuksesan di dunia maupun akhirat.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: 'Terhindar dari Dosa', desc: 'Mencegah diri dari perbuatan-perbuatan yang dilarang Allah SWT', icon: '🛡️' },
                  { title: 'Hidup Lebih Tenteram', desc: 'Jiwa menjadi tenang dan tidak mudah gelisah', icon: '😌' },
                  { title: 'Disayangi Allah SWT', desc: 'Allah mencintai hamba-Nya yang sabar dan mengendalikan diri', icon: '💚' },
                  { title: 'Hubungan Sosial Baik', desc: 'Dihormati dan disukai oleh orang lain', icon: '🤝' },
                  { title: 'Keberhasilan Hidup', desc: 'Lebih fokus dalam mencapai tujuan dan cita-cita', icon: '🎯' },
                  { title: 'Pahala yang Besar', desc: 'Setiap usaha mengendalikan diri akan mendapatkan pahala', icon: '✨' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-emerald-50 to-green-50 p-5 rounded-xl border border-emerald-100">
                    <span className="text-3xl mb-3 block">{item.icon}</span>
                    <h4 className="font-semibold text-emerald-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-emerald-700">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-amber-50 p-5 rounded-xl border border-amber-200">
                <p className="text-emerald-800 italic text-center">
                  "Barang siapa yang berpegang teguh pada (agama) Allah, niscaya Allah memberinya petunjuk."
                  <span className="block mt-2 text-sm not-italic text-emerald-600">— QS. Al-Baqarah: 256</span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Penerapan dalam Kehidupan Sehari-hari */}
          <Card className="glass-card hover-lift">
            <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
              <CardTitle className="text-indigo-900 flex items-center gap-2">
                <Users className="w-6 h-6 text-indigo-600" />
                Menerapkan Perilaku Kontrol Diri dalam Kehidupan Sehari-hari
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-emerald-800 mb-6">
                Kontrol diri harus diterapkan dalam berbagai aspek kehidupan. Berikut contoh penerapannya:
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {/* A. Di Keluarga */}
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-5 rounded-xl border border-rose-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center">
                      <Home className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-rose-900">A. Di Keluarga</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-emerald-700">
                    <li className="flex gap-2">
                      <span className="text-rose-500">•</span>
                      <span>Menjaga adab kepada orang tua dan tidak membalas marah mereka</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-rose-500">•</span>
                      <span>Bersabar dalam mendidik adik atau anak</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-rose-500">•</span>
                      <span>Mengendalikan emosi saat ada masalah rumah tangga</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-rose-500">•</span>
                      <span>Tidak berkata kasar kepada anggota keluarga</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-rose-500">•</span>
                      <span>Menahan diri dari makanan yang haram atau berlebihan</span>
                    </li>
                  </ul>
                </div>

                {/* B. Di Masyarakat */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-blue-900">B. Di Masyarakat</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-emerald-700">
                    <li className="flex gap-2">
                      <span className="text-blue-500">•</span>
                      <span>Menjaga lisan dari ghibah dan fitnah tentang orang lain</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-500">•</span>
                      <span>Bersabar menghadapi perilaku buruk tetangga</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-500">•</span>
                      <span>Tidak mudah terpancing provokasi di media sosial</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-500">•</span>
                      <span>Menjaga pandangan dari hal-hal yang tidak halal</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-500">•</span>
                      <span>Mengendalikan amarah saat ada konflik dengan orang lain</span>
                    </li>
                  </ul>
                </div>

                {/* C. Di Lingkungan Sekolah */}
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-5 rounded-xl border border-amber-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center">
                      <School className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-amber-900">C. Di Lingkungan Sekolah</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-emerald-700">
                    <li className="flex gap-2">
                      <span className="text-amber-500">•</span>
                      <span>Menjaga sikap hormat kepada guru meski dimarahi</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500">•</span>
                      <span>Tidak bertengkar dengan teman saat ada perbedaan pendapat</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500">•</span>
                      <span>Mengendalikan diri dari bully atau ejekan kepada teman</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500">•</span>
                      <span>Fokus belajar tanpa tergoda main game atau media sosial</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500">•</span>
                      <span>Jujur dalam mengerjakan ujian tanpa menyontek</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto"></div>

      {/* Section 5: Berani Membela Kebenaran */}
      <section id="bela-kebenaran" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800">
              <Award className="w-4 h-4 mr-1" /> Materi 5
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
              Membiasakan Perilaku Berani Membela Kebenaran
            </h2>
            <p className="text-emerald-700 max-w-2xl mx-auto">
              Keberanian dalam Islam bukanlah keberanian yang sembarangan, melainkan keberanian yang terarah dan bertanggung jawab
            </p>
          </div>

          {/* Pengertian */}
          <Card className="glass-card hover-lift mb-8">
            <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
              <CardTitle className="text-amber-900 flex items-center gap-2">
                <Shield className="w-6 h-6 text-amber-600" />
                Pengertian Berani Membela Kebenaran
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-emerald-800 mb-4">
                <strong>Berani membela kebenaran</strong> adalah sikap teguh dan berani dalam mengamalkan 
                kebaikan serta melawan kemungkaran, meskipun harus menghadapi risiko dan tantangan. 
                Dalam Islam, ini dikenal dengan konsep <em>amar ma'ruf nahi munkar</em>.
              </p>
              <div className="bg-amber-50 p-5 rounded-xl border border-amber-200">
                <p className="text-emerald-800 italic text-center">
                  "Hendaklah ada di antara kamu segolongan umat yang menyeru kepada kebajikan, 
                  menyuruh (berbuat) yang ma'ruf dan mencegah dari yang munkar; 
                  dan merekalah orang-orang yang beruntung."
                  <span className="block mt-2 text-sm not-italic text-emerald-600">— QS. Ali Imran: 104</span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Ciri-ciri */}
          <Card className="glass-card hover-lift mb-8">
            <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50">
              <CardTitle className="text-emerald-900 flex items-center gap-2">
                <Star className="w-6 h-6 text-emerald-600" />
                Ciri-ciri Orang yang Berani Membela Kebenaran
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'Teguh pada Prinsip', desc: 'Tidak mudah goyah meski dihadapkan pada tekanan', icon: '📿' },
                  { title: 'Tidak Takut Dihina', desc: 'Tetap istiqomah meski dihina atau dicela orang', icon: '💪' },
                  { title: 'Berdasarkan Ilmu', desc: 'Membela kebenaran berdasarkan dalil Al-Qur\'an dan Sunnah', icon: '📚' },
                  { title: 'Santun dan Bijaksana', desc: 'Menyampaikan kebenaran dengan cara yang baik dan lemah lembut', icon: '🕊️' },
                  { title: 'Tidak Membeda-bedakan', desc: 'Membela kebenaran tanpa memandang status atau kedudukan', icon: '⚖️' },
                  { title: 'Ikhlas Karena Allah', desc: 'Berani membela kebenaran semata-mata karena Allah SWT', icon: '💚' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 bg-white p-4 rounded-xl border border-emerald-100">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-emerald-900">{item.title}</h4>
                      <p className="text-sm text-emerald-700">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contoh Penerapan */}
          <Card className="glass-card hover-lift mb-8">
            <CardHeader className="bg-gradient-to-r from-violet-50 to-purple-50">
              <CardTitle className="text-violet-900 flex items-center gap-2">
                <Users className="w-6 h-6 text-violet-600" />
                Contoh Penerapan dalam Kehidupan
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-rose-50 p-5 rounded-xl border border-rose-100">
                  <h4 className="font-bold text-rose-900 mb-3 flex items-center gap-2">
                    <Home className="w-5 h-5" /> Di Rumah
                  </h4>
                  <ul className="space-y-2 text-sm text-emerald-700">
                    <li>• Menegur adik yang tidak sholat dengan lemah lembut</li>
                    <li>• Mengingatkan orang tua jika ada yang keliru</li>
                    <li>• Menolak ajakan untuk berbohong</li>
                    <li>• Mengajak keluarga untuk mengaji bersama</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5" /> Di Masyarakat
                  </h4>
                  <ul className="space-y-2 text-sm text-emerald-700">
                    <li>• Menegur teman yang sedang bergosip</li>
                    <li>• Melaporkan tindak kejahatan yang dilihat</li>
                    <li>• Membela orang yang dizalimi</li>
                    <li>• Menolak ajakan untuk ikut-ikutan maksiat</li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
                  <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                    <School className="w-5 h-5" /> Di Sekolah
                  </h4>
                  <ul className="space-y-2 text-sm text-emerald-700">
                    <li>• Melaporkan teman yang menyontek</li>
                    <li>• Menolak ajakan bully kepada teman</li>
                    <li>• Membela teman yang diperlakukan tidak adil</li>
                    <li>• Mengingatkan teman untuk sholat berjamaah</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Hikmah */}
          <Card className="glass-card hover-lift">
            <CardHeader className="bg-gradient-to-r from-teal-50 to-cyan-50">
              <CardTitle className="text-teal-900 flex items-center gap-2">
                <Heart className="w-6 h-6 text-teal-600" />
                Hikmah dan Keutamaan Berani Membela Kebenaran
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-emerald-900">Mendapatkan Ridha Allah</h4>
                      <p className="text-sm text-emerald-700">Orang yang berani membela kebenaran akan dicintai dan diridhai oleh Allah SWT</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-emerald-900">Menjadi Pemimpin yang Baik</h4>
                      <p className="text-sm text-emerald-700">Keberanian membela kebenaran adalah ciri pemimpin yang amanah</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-emerald-900">Menjaga Kemaslahatan Umat</h4>
                      <p className="text-sm text-emerald-700">Dengan amar ma'ruf nahi munkar, masyarakat menjadi lebih baik</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                    <div>
                      <h4 className="font-semibold text-emerald-900">Mendapatkan Pahala Besar</h4>
                      <p className="text-sm text-emerald-700">Rasulullah SAW menyebutkan pahala besar bagi yang mengamalkan ini</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">5</div>
                    <div>
                      <h4 className="font-semibold text-emerald-900">Menjadi Teladan</h4>
                      <p className="text-sm text-emerald-700">Orang yang berani membela kebenaran akan menjadi inspirasi bagi orang lain</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">6</div>
                    <div>
                      <h4 className="font-semibold text-emerald-900">Keberkahan dalam Hidup</h4>
                      <p className="text-sm text-emerald-700">Kehidupan menjadi lebih berkah dan penuh keberhasilan</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-emerald-50 to-teal-50 p-5 rounded-xl border border-emerald-200">
                <p className="text-emerald-800 italic text-center">
                  "Sebaik-baik jihad adalah menyampaikan kebenaran di hadapan penguasa yang zalim."
                  <span className="block mt-2 text-sm not-italic text-emerald-600">— HR. Abu Dawud</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-islamic py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-white">Materi PAI</span>
          </div>
          <p className="text-white/80 max-w-xl mx-auto mb-6">
            "Sesungguhnya aku ini tidaklah menghilangkan kesalahan-kesalahan (orang lain) 
            dan aku bukanlah (pula) penentu antara kamu. Yang demikian itu hanyalah 
            kepunyaan Allah." (QS. Az-Zumar: 46)
          </p>
          <Separator className="bg-white/20 my-6" />
          <p className="text-white/60 text-sm">
            Dibuat dengan ❤️ untuk pembelajaran Pendidikan Agama Islam
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
