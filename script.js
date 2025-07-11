const btnExplain = document.getElementById("btn-explain");
const btnStore = document.getElementById("btn-store");

const sectionExplain = document.getElementById("section-explain");
const sectionStore = document.getElementById("section-store");

btnExplain.onclick = () => {
  sectionExplain.classList.add("active");
  sectionStore.classList.remove("active");
};

btnStore.onclick = () => {
  sectionExplain.classList.remove("active");
  sectionStore.classList.add("active");
};

const productDetail = document.getElementById("product-detail");
const backToStoreBtn = document.getElementById("back-to-store");
const detailImage = document.getElementById("detail-image");
const detailTitle = document.getElementById("detail-title");
const detailDescription = document.getElementById("detail-description");

const products = document.querySelectorAll(".product");

const productData = [
  {
    title: "لوقو حرف $9",
    desc: "تصميم لوقو احترافي حسب طلبك.",
    img: "LOGO S.png",
    examples: ["logo-example1.png", "logo-example2.png"]
  },
  {
    title: "بنر $10",
    desc: "بنر مميز لتزيين ملفك أو قناتك.",
    img: "bnr.png",
    examples: ["bnr1.png", "bnr2.png", "bnr3.png" ]
  },
  {
    title: "خط $4",
    desc: "خط خاص أو مميز لإستخدامك الشخصي.",
    img: "خط.png",
    examples: ["font1.png", "font2.png"]
  },
  {
    title: "برمجة سيرفر $10",
    desc: "إعداد سيرفر ديسكورد كامل ومخصص.",
    img: "برمجه.png",
    examples: ["code1.png", "code2.png"]
  },
  {
    title: "بكج $17",
    desc: "عرض يشمل لوقو + بنر + برمجة.",
    img: "بكج.png",
    examples: ["pack1.png", "pack2.png"]
  },
  {
    title: "تطوير $8",
    desc: "تحسين وتطوير سيرفرك الحالي.",
    img: "تطوير.png",
    examples: ["dev1.png", "dev2.png"]
  },
  {
    title: "ثمبنيل $7",
    desc: "تصميم صورة مصغرة مميزة لفيديوهاتك.",
    img: "ثمبنيل.png",
    examples: ["thumb1.png", "thumb2.png"]
  }
];


products.forEach((product, index) => {
  product.addEventListener("click", () => {
    sectionStore.classList.remove("active");
    productDetail.classList.add("active");

    detailImage.src = productData[index].img;
    detailTitle.textContent = productData[index].title;
    detailDescription.textContent = productData[index].desc;
  });
});

backToStoreBtn.onclick = () => {
  productDetail.classList.remove("active");
  sectionStore.classList.add("active");
};
