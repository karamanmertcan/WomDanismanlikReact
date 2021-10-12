import React from 'react';

const accordionInfo = [
  {
    id: 1,
    title: 'Hangi Pazar Yerinde Satış Yapmalıyım?',
    desc: `
    Burada karar verirken ilk etapta yurt içi pazaryerlerinde mi yoksa yurt dışı pazaryerlerinde mi satış yapmalıyım kararını vermek lazım. Her platformun birbirlerine göre farklı avantajları ve dezavantajları bulunmaktadır. 
    Örneğin yurt içinde trendyol ve hepsiburada da satış yaparken kargo anlaşmalarında belli miktarlardaki ürün satışlarında 3,99+kdv gibi kargo ödeyebilirsiniz. Ancak çiçeksepetinde kargo tamamen fiyattan bağımsız olarak ürün desisine bağlıdır. Daha detaylı bilgiler için bizimle iletişime geçebilirsiniz.

    `,
    collapseName: 'collapseOne',
    headingName: 'headingOne'
  },
  {
    id: 2,
    title: ' Neden Trendyol’da Satış Yapmayı Tercih Etmeliyim ? ',
    desc: `
    Trendyol çok trafik alan bir pazaryeridir. Özellikle kadınlara hitap eden ürünlerde satış hacmi çok fazladır. Kargo anlaşması noktasında Trendyol kendi kargo markası olan Trendyol Express ile kapınızdan ürünleri almaktadır. Üstelik Trendyol Express kargo fiyatları uygundur. Ürünlerde kırılma oranı diğer kargo firmalarına göre çok düşüktür. Trendyolda satış kampanyalarına katılımlar çok kolaydır. Tekliflerim kısmı ile satışlarınız artan ürünlerde daha düşük komisyonlar ödersiniz. Görsellerde arka fon beyaz olma zorunluluğu yoktur. Reklam maliyetlerini siz belirlersiniz. Günlük 10 TL ile de reklam verebilirsiniz. Daha detaylı bilgiler için bizimle iletişime geçebilirsiniz. 

    `,
    collapseName: 'collapseTwo',
    headingName: 'headingTwo'
  },
  {
    id: 3,
    title: '  Neden Amazon’da Satış Yapmayı Tercih Etmeliyim ?  ',
    desc: `
    Amazon çok trafik alan bir pazar yeridir. Global pazarda başarısını kanıtlamış bir platform olan amazon ülkemizde de Pazar payını ele almaya başlamıştır. Amazon’da kendiniz kargo göndermek istediğinizde MNG Kargo ile anlaşmalıdır ve kargo fiyatları desiye göre belirlenmektedir. Amazon FBA modeli ile kargo maliyetinizi yarı fiyatına düşürebilir ayrıca ürünün depolanması, hazırlanması, kutulanması gibi tüm iş ve maliyetten kurtulabilirsiniz. Daha detaylı bilgiler için bizimle iletişime geçebilirsiniz. 

    `,
    collapseName: 'collapseThree',
    headingName: 'headingThree'
  },
  {
    id: 4,
    title: '   Neden Hepsiburada’da Satış Yapmayı Tercih Etmeliyim ?   ',
    desc: `
    Hepsiburada çok trafik alan bir pazar yeridir.Özellikle elektronik ürün kategorisinde satış hacmi çok fazladır. Kargo anlaşması noktasında Hepsijet ile kapınızdan ürünleri almaktadır. Üstelik Hepsijet kargo fiyatları uygundur. Ürünlerde kırılma oranı diğer kargo firmalarına göre çok düşüktür. Kadın girişimcilere düşük komsiyon avantajları, fotoğraf çekim desteği gibi farklı destekler bulunmaktadır. Daha detaylı bilgiler için bizimle iletişime geçebilirsiniz.  

    `,
    collapseName: 'collapseFour',
    headingName: 'headingFive'
  },
  {
    id: 5,
    title: '    Neden N11’de Satış Yapmayı Tercih Etmeliyim ?    ',
    desc: `
    
N11 çok trafik alan bir pazar yeridir. N11 özellikle yapı market, kendin yap kitleri gibi kategorilerde satış hacmi çok fazla olan bir platformdur. N11’de ürünlerde varyant belirlemek çok daha verimlidir. N11 ‘de kargonun ücretli ve ücretsiz olmasındaki o belirli fiyatı satıcı belirleyebilir. Reklam yönetimi için ekstra bir paneli bulunmaktadır. Daha detaylı bilgiler için bizimle iletişime geçebilirsiniz.
  

    `,
    collapseName: 'collapseFive',
    headingName: 'headingSix'
  },
  {
    id: 6,
    title: 'Neden Çiçeksepetinde Satıcı Olmalıyım ? ',
    desc: `Çiçeksepeti çok trafik alan bir pazar yeridir. Çiçeksepetinde özellikle hediye kategorisinde satış hacmi çok fazladır. Daha detaylı bilgiler için bizimle iletişime geçebilirsiniz. 

    `,
    collapseName: 'collapseSix',
    headingName: 'headingSix'
  },

  {
    id: 7,
    title: 'Neden Kendi Websitemden Satış Yapmalıyım?',
    desc: `Kendi web sitenizde trafik çekmeyi başarırsanız komisyon oranlarınız e-ticaret pazaryerlerine göre çok daha düşük olur. Sisteme ürün yüklediğiniz de pazaryerlerindeki gibi onay sürecine gitmez ve websitenizde anında yayınlanır. Kampanyaları, kategorileri, ürün ismini açıklamasını vb. istediğiniz gibi düzenleyebilirsiniz. Daha detaylı bilgiler için bizimle iletişime geçebilirsiniz.  

    `,
    collapseName: 'collapseSeven',
    headingName: 'headingSeven'
  },
  {
    id: 8,
    title: 'Neden ETSY’de Satış Yapmalıyım ?  ',
    desc: `ETSY tamamen el yapımı ürünler satışı üzerine odaklanan bir platformdur. ETSY’de satış yapmanın en iyi sebebi döviz kuru ile kazanabiliyor olmaktır. Ayrıca ihracat yaptığınız için KDV ödemezsiniz. ETSY ‘de minimum 2 dolar maliyetle reklam verebilirsiniz. Reklam bütçesinde maksimum 25 dolar verilebilmektedir. Bu sebeple çok büyük firmalar ETSY’de satış yapmayı tercih etmemektedir. ETSY’de Türkiye’deki pazaryerlerindeki gibi (Amazon hariç) ürün yükleyip yüksek reklam bütçesi harca ve ürünü sat mantığından ziyade iyi ve etkili SEO yapmanın önemi ortaya çıkmaktadır. ETSY reklamları yine tüm pazaryerlerinden farklı işlemektedir. Önce reklam harcaması yapılır ve ay sonunda ödemesi yapılır. ETSY’de sizin ürünlerinizi hangi kelimelerle aratılıp bulunduğunu görebilirsiniz. Bu sayede yeni ürünlerde daha etkili SEO yapabilirsiniz. ETSY mağazaların tek bir motto üzerinde olmasını tercih etmektedir. Daha detaylı bilgiler için bizimle iletişime geçebilirsiniz.   

    `,
    collapseName: 'collapseEight',
    headingName: 'headingEight'
  },
  {
    id: 9,
    title: 'ETSY’de Yüksek Kargo Maliyetleri Nasıl Düşürülür ?  ',
    desc: `ETSY’de satış yaparken döviz kuru ile kar marjı artmaktadır. Bununla beraber kargo maliyetleri de döviz kuru ile olduğu için yüksektir. WOMDanışmanlık anlaşmalı olduğu kargo firmalarından WOMDanışmanlık bünyesinde bulunan firmalara 6 dolardan başlayan kargo fiyatları sunmaktadır. Daha detaylı bilgiler için bizimle iletişime geçebilirsiniz.    

    `,
    collapseName: 'collapseNine',
    headingName: 'headingNine'
  },
  {
    id: 10,
    title: 'ETSY Mağazası Suspend Sorunu ?',
    desc: `ETSY de satış yapmak çok keyifli ve kur farkından dolayı avantajlıdır. Ancak bir çok satıcı mağaza kurarken veya belli bir satış hacmine ulaştıktan sonra suspend (mağaza kapanması veya kısıtlanması) sorunu yaşamaktadır. Suspend olmamak için doğru ve titiz başlanıp ilerlenmelidir. Suspend sebepleri eski kimlikle ETSY hesabı açmaktan kaynaklı da olabilir, birbirinden çok farklı ürünleri mağazanızda bulundurmaktan kaynaklı da olabilir, ETSY hesabınızı birkaç farklı bilgisayardan açmış olmanızdan da olabilir. Başka bir çok sebeple daha suspend sorunu yaşayabilirsiniz. Suspend sorunu yaşamak istemiyorsanız veya yaşadıysanız çözmek için ve daha detaylı bilgiler için bizimle iletişime geçebilirsiniz     
    `,
    collapseName: 'collapseTen',
    headingName: 'headingTen'
  },
  {
    id: 11,
    title: 'Neden LetWOM’da Satış Yapmalıyım ?   ',
    desc: `LetWOM’da komisyon oranları sabit ve %10’dur. LetWOM’da panel yönetimi yapmanıza gerek yoktur. LetWOM bir abonelik platformu olması sayesinde satış sürekliliği yakalamanızı sağlar. Daha detaylı bilgiler için bizimle iletişime geçebilirsiniz.      
    `,
    collapseName: 'collapseEleven',
    headingName: 'headingEleven'
  }
];

const Accordion = () => {
  return (
    <div>
      <div className="accordion" id="accordionExample">
        {accordionInfo.map((item) => (
          <div key={item.id} className="accordion-item">
            <h2 className="accordion-header" id={`${item.headingName}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${item.collapseName}`}
                aria-expanded="false"
                aria-controls={`#${item.collapseName}`}>
                {item.title}
              </button>
            </h2>
            <div
              id={`${item.collapseName}`}
              className="accordion-collapse collapse"
              aria-labelledby={`${item.headingName}`}
              data-bs-parent="#accordionExample">
              <div className="accordion-body">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
