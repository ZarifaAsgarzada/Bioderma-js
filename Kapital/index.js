document.querySelectorAll('.dropdown').forEach(item => {
    item.addEventListener('click', event => {
        item.classList.toggle('dropdown-show');
    });
});
/*********************************** */
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
/*let currentIndex = 0; */
function showSlide(index) {
    if (index < 0) {
        currentIndex = slide.length - 1;
    } else if (index >= slide.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}
prev.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});
next.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});
/******************************* */
const cardsData = [
    {
        imgSrc: 'https://www.kapitalbank.az/images/micro_business.svg?v=1',
        title: 'Kredit',
        description: 'sifariş et'
    },
    {
        imgSrc: 'https://www.kapitalbank.az/images/home/birbank-karti.svg',
        title: 'Taksit kartı',
        description: 'sifariş et'
    },
    {
        imgSrc: 'https://www.kapitalbank.az/images/home/deposit.svg?v=2',
        title: 'Depozit',
        description: 'sifariş et'
    },
    {
        imgSrc: 'https://www.kapitalbank.az/images/micro_business.svg?v=1',
        title: 'Mikro kredit',
        description: 'sifariş et'
    },
    {
        imgSrc: 'https://www.kapitalbank.az/images/micro_business.svg?v=1',
        title: 'Kampaniyalara',
        description: 'bax'
    }
];
function createCards(cards) {
    const container = document.getElementById('card-container');
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        const imgElement = document.createElement('img');
        imgElement.src = card.imgSrc;
        cardElement.appendChild(imgElement);
        const titleElement = document.createElement('p');
        titleElement.innerHTML = `<span>${card.title}</span> ${card.description}`;
        cardElement.appendChild(titleElement);
        container.appendChild(cardElement);
    });
}
createCards(cardsData);
/********************************* */
const carouselItems = [
    {
        title: "Birbank Cashback",
        description: "30 000 ₼-dək kredit xətti olan yeni taksit kartımızda sadəlikdənrahatlığa, keşbeklərdən 2 qat ƏDV-yə qədər nə istəsəniz, var. Üstəlik...",
        features: [
            { title: "Bonus", description: "30 % dək keşbek və 2 qat ƏDV" },
            { title: "Kartın qiyməti", description: "pulsuz" },
            { title: "Güzəşt müddəti", description: "63 günədək" }
        ],
        imageSrc: "https://www.kapitalbank.az/images/cards/B/birbank-cashback-home.png?v=5"
    },
    {
        title: "Birbank Miles",
        description: "Kartla edilən nağdsız ödənişlərə 1 AZN-ə 1 mil bonus qazandıran,pulsuz səyahət, faizsiz və komissiyasız taksit imkanı verən unikal bir kartdır.",
        features: [
            { title: "1 AZN=1 Mil", description: "Millərin toplanması" },
            { title: "Kartın qiyməti", description: "pulsuz" },
            { title: "Güzəşt müddəti", description: "63 günədək" }
        ],
        imageSrc: "https://www.kapitalbank.az/images/cards/B/birbank-miles-home.png?v=5"
    },
    {
        title: "Birbank Umico",
        description: "Kapital Bank və Umiconun birgə təqdim etdiyi,gündəlik alış-veriş üçün nəzərdə tutulan,kredit və taksit kartı imkanlarını birləşdirən və hər yerdə əlavə Umico bonuslarını qazanma imkanını təqdim edən unikal bir kartdır.",
        features: [
            { title: "1.9%-dək başlayan", description: "Keşbek" },
            { title: "Kartın qiyməti", description: "pulsuz" },
            { title: "Güzəşt müddəti", description: "63 günədək" }
        ],
        imageSrc: "https://www.kapitalbank.az/images/cards/B/birbank-umico-premium-home.png?v=5"
    }
];
let currentIndex = 0;
function updateCarousel() {
    const carousel = document.getElementById('carousel');
    const item = carouselItems[currentIndex];
    carousel.innerHTML = `
        <div class="cashback-info">
            <h1>${item.title}</h1>
            <p>${item.description}</p>
            <div class="features">
                ${item.features.map(feature => `
                    <div class="feature">
                        <h3>${feature.title}</h3>
                        <p>${feature.description}</p>
                    </div>
                `).join('')}
            </div>
            <button class="order-button">Sifariş et</button>
        </div>
        <div class="cashback-card">
            <img src="${item.imageSrc}" alt="${item.title}">
        </div>
    `;
}
function nextItem() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
}
function prevItem() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
}
document.querySelector('.carousel-button.right').addEventListener('click', nextItem);
document.querySelector('.carousel-button.left').addEventListener('click', prevItem);
updateCarousel();
/*********************************/
document.getElementById('orderBtn').addEventListener('click', function() {
    alert('Sifarişiniz qəbul edildi! Sizə tezliklə geri dönəcəyik.');
});
/***************************/
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.style.backgroundColor = "#ccc";
}

document.getElementById('amount').addEventListener('input', function () {
    document.getElementById('amountValue').textContent = this.value + "₼";
    updatePayment();
});
document.getElementById('duration').addEventListener('input', function () {
    document.getElementById('durationValue').textContent = this.value + " ay";
    updatePayment();
});
function updatePayment() {
    var amount = document.getElementById('amount').value;
    var duration = document.getElementById('duration').value;
    var payment = Math.round(amount / duration);
    document.getElementById('payment').textContent = payment + "₼";
}
document.getElementById('loanAmount').addEventListener('input', function () {
    document.getElementById('loanAmountValue').textContent = this.value + "₼";
    updateLoanPayment();
});
document.getElementById('interestRate').addEventListener('input', function () {
    document.getElementById('interestRateValue').textContent = this.value + "%";
    updateLoanPayment();
});
document.getElementById('loanDuration').addEventListener('input', function () {
    document.getElementById('loanDurationValue').textContent = this.value + " ay";
    updateLoanPayment();
});
function updateLoanPayment() {
    var amount = document.getElementById('loanAmount').value;
    var rate = document.getElementById('interestRate').value;
    var duration = document.getElementById('loanDuration').value;
    // ////////////////////////////////////
    var monthlyRate = (rate / 100) / 12;
    var payment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -duration));
    document.getElementById('loanPayment').textContent = payment.toFixed(2) + "₼";
}
document.getElementById('depositAmount').addEventListener('input', function () {
    document.getElementById('depositAmountValue').textContent = this.value + " AZN";
    updateDepositInterest();
});
document.getElementById('depositDuration').addEventListener('input', function () {
    document.getElementById('depositDurationValue').textContent = this.value + " ay";
    updateDepositInterest();
});
function updateDepositInterest() {
    var amount = document.getElementById('depositAmount').value;
    var duration = document.getElementById('depositDuration').value;
    var interestRate = 10;
    var totalInterest = (amount * (interestRate / 100) * (duration / 12)).toFixed(2);
    document.getElementById('interestRate').textContent = interestRate + " % *";
    document.getElementById('totalInterest').textContent = totalInterest + "₼";
}
/***************************** */
document.querySelector('.order-link').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = "https://ccl.kapitalbank.az/az/order/GTKR?t=kb&tvr_id=5f78889b-d506-464f-bdf8-45f548f11a97";
});
document.querySelector('.more-info-link').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = " https://hr.kapitalbank.az/";
   
});
/******************************** */
const newsData = [
    { date: '26', month: 'Avqust', description: 'Kapital Bank beynəlxalq maliyyə institutları ilə əlaqələrini genişləndirir' },
    { date: '19', month: 'Avqust', description: '"Trendyol"da milyonlarla müxtəlif məhsul indi 6 ayadək taksitlə' },
    { date: '12', month: 'Avqust', description: 'Xəzər Günündə “Sıfır Tullantı” həmrəylik marafonu baş tutdu' },
    { date: '05', month: 'Avqust', description: 'Kapital Bank yeni xidmətləri təqdim edir' },
    { date: '30', month: 'İyul', description: 'Yeni filialın açılışı oldu' }
];
const newsContainer = document.getElementById('newsItems');
const itemsPerSlide = 3;
let currentSlide = 0;
function renderNews() {
    newsContainer.innerHTML = '';
    const start = currentSlide * itemsPerSlide;
    const end = start + itemsPerSlide;
    newsData.slice(start, end).forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `
            <div class="date-circle">${news.date}</div>
            <div class="month">${news.month}</div>
            <div class="description">${news.description}</div>
        `;
        newsContainer.appendChild(newsItem);
    });
    updateButtons();
}
function updateButtons() {
    document.getElementById('prevBtn').disabled = currentSlide === 0;
    document.getElementById('nextBtn').disabled = (currentSlide + 1) * itemsPerSlide >= newsData.length;
}
function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        renderNews();
    }
}
function nextSlide() {
    if ((currentSlide + 1) * itemsPerSlide < newsData.length) {
        currentSlide++;
        renderNews();
    }
}
renderNews();
/*************************************** */
const rates = [
    { currency: 'USD', buy: 1.697, sell: 1.702 },
    { currency: 'EUR', buy: 1.8485, sell: 1.894 }
];
const tableBody = document.getElementById('currencyTable');
rates.forEach(rate => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${rate.currency}</td>
        <td>${rate.buy}</td>
        <td>${rate.sell.toFixed(3)}</td>
    `;
    tableBody.appendChild(row);
});
const conversionRates = {
    USD: { AZN: 1.702, EUR: 0.88 },
    EUR: { AZN: 1.894, USD: 1.14 },
    AZN: { USD: 0.588, EUR: 0.528 }
};
const amountInput = document.getElementById('amountInput');
const currencySelect = document.getElementById('currencySelect');
const sellButton = document.getElementById('sellButton');
const buyButton = document.getElementById('buyButton');

let operation = 'sell';
sellButton.addEventListener('click', () => {
    operation = 'sell';
    sellButton.classList.add('active');
    buyButton.classList.remove('active');
    calculate();
});

buyButton.addEventListener('click', () => {
    operation = 'buy';
    buyButton.classList.add('active');
    sellButton.classList.remove('active');
    calculate();
});
function calculate() {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = currencySelect.value;
    document.getElementById('usdRow').style.display = 'none';
    document.getElementById('eurRow').style.display = 'none';
    document.getElementById('aznRow').style.display = 'none';
    const availableRates = conversionRates[fromCurrency];
    for (const [toCurrency, rate] of Object.entries(availableRates)) {
        const resultElement = document.getElementById(`${toCurrency.toLowerCase()}Result`);
        resultElement.textContent = (amount * rate).toFixed(2);
        document.getElementById(`${toCurrency.toLowerCase()}Row`).style.display = 'flex';
    }
}
amountInput.addEventListener('input', calculate);
currencySelect.addEventListener('change', calculate);
calculate();
