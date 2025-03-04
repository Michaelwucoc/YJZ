// 书籍数据
const books = [
    "修真聊天群",
    "诡秘之主",
    "庆余年",
    "斗破苍穹"
];

// 动态添加书籍列表
function initializeBookList() {
    const readingList = document.getElementById('reading-list');
    books.forEach(book => {
        const li = document.createElement('li');
        li.textContent = book;
        readingList.appendChild(li);
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    initializeBookList();
});

// 添加平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});