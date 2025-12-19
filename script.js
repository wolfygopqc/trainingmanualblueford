function showSection(id, el) {
    document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.ledger-menu li').forEach(l => l.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    el.classList.add('active');
    document.querySelector('.ledger-page').scrollTop = 0;
}

function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('sheriffTheme', isDark ? 'dark' : 'light');
    updateThemeLabel(isDark);
}

function updateThemeLabel(isDark) {
    const label = document.getElementById('theme-label');
    if (label) label.innerText = isDark ? "MODE JOUR" : "MODE NUIT";
}

window.onload = () => {
    const savedTheme = localStorage.getItem('sheriffTheme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        updateThemeLabel(true);
    }
};