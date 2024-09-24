window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY || window.pageYOffset;
  // console.log(scrollTop)
  if (scrollTop >= 200) {
    document.querySelector('.lnb').classList.add('scroll');
  } else {
    document.querySelector('.lnb').classList.remove('scroll');
  }
});



// SVG 요소 클릭 이벤트 처리
const chevronIcon = document.querySelector('[data-chevron-icon]');

chevronIcon.addEventListener('click', () => {
  const polyline = chevronIcon.querySelector('polyline');
  const expandAnimation = polyline.querySelector('[data-chevron-animate="expand"]');
  const collapseAnimation = polyline.querySelector('[data-chevron-animate="collapse"]');
  
  // 현재 상태에 따라 애니메이션 실행
  const currentState = polyline.getAttribute('data-chevron-animate');

  if (currentState === 'expand') {
    collapseAnimation.beginElement();  // collapse 애니메이션 실행
    polyline.setAttribute('data-chevron-animate', 'collapse');  // 상태 변경
  } else {
    expandAnimation.beginElement();  // expand 애니메이션 실행
    polyline.setAttribute('data-chevron-animate', 'expand');  // 상태 변경
  }
});

// fetch('../asset/json/footer.json')
// .then((res) => res.json())
// .then((json) => {
// let html = ``;

// // 각 heading과 그에 따른 items 처리
// json.forEach((section) => {
// html += `<div class="directory-area">`;
// html += `<strong class="title">${section.heading}</strong>`;
// html += `<ul class="directory-list">`;

// // 각 section의 items 처리
// section.items.forEach((item) => {
// html += `<li class="directory-item"><a href="#">${item}</a></li>`;
// });

// html += `</ul>`;
// html += `</div>`;
// });

// const container = document.querySelector('.nav-directory');
// container.innerHTML = html;
// })
// .catch((error) => {
// console.error('FOOTER JSON ERROR:', error);
// });