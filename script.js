// تحميل القائمة الجانبية ديناميكيًا
fetch('sidebar.html')
  .then(response => {
    if (!response.ok) throw new Error('خطأ في تحميل القائمة الجانبية');
    return response.text();
  })
  .then(data => {
    document.getElementById('sidebar-container').innerHTML = data;
    initializeSidebar();
  })
  .catch(error => console.error('Error:', error));

function initializeSidebar() {
  const sidebarr = document.querySelector('.sidebarr');
  const overlayy = document.querySelector('.overlayy');
  const menuIcon = document.getElementById('menu-iconn');
  const sidebarLinks = document.querySelectorAll('.sidebarr ul li a');

  // التحكم في فتح/إغلاق القائمة الجانبية
  window.toggleMenuu = function() {
    sidebarr.classList.toggle('open');
    overlayy.classList.toggle('show');
    menuIcon.classList.toggle('hidden', sidebarr.classList.contains('open'));
  }

  // إضافة مستمع حدث لكل رابط
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // إزالة الفئة 'active' من جميع الروابط
      sidebarLinks.forEach(l => l.classList.remove('active'));

      // إضافة الفئة 'active' للرابط الذي تم النقر عليه
      this.classList.add('active');

      // تخزين معرف الرابط النشط ونص الرابط في localStorage
      localStorage.setItem('activeSidebarLink', this.id);
      localStorage.setItem('activePageTitle', this.textContent);

      // تحديث عنوان القائمة الجانبية
      updateSidebarTitle(this.textContent);
    });
  });

  // استعادة الرابط النشط وعنوان الصفحة عند تحميل الصفحة
  const activeLink = localStorage.getItem('activeSidebarLink');
  const activePageTitle = localStorage.getItem('activePageTitle');
  if (activeLink) {
    const link = document.getElementById(activeLink);
    if (link) {
      link.classList.add('active');
      updateSidebarTitle(activePageTitle || link.textContent);
    }
  } else {
    // إذا لم يكن هناك رابط نشط مخزن، استخدم عنوان الصفحة الحالية
    updateSidebarTitle(document.title);
  }
}

// دالة لتحديث عنوان القائمة الجانبية
function updateSidebarTitle(pageTitle) {
  const sidebarTitle = document.getElementById('sidebar-title');
  sidebarTitle.textContent = `أقسام مفيدة - ${pageTitle}`;
}

// تحديث عنوان القائمة الجانبية عند تغيير الصفحة
window.addEventListener('popstate', function() {
  const activePageTitle = localStorage.getItem('activePageTitle');
  updateSidebarTitle(activePageTitle || document.title);
});