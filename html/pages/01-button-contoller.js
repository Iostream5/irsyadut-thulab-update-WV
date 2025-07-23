if (window.Capacitor?.isNativePlatform?.()) {
    window.Capacitor.Plugins.App.addListener('backButton', () => {
        const currentPage = window.location.pathname;
        const level1 = ['alquran.html', 'doa.html', 'hadist.html'];
        const level2 = ['lain_lain', 'terikat_waktu', 'umum'];
        const level3 = ['alquran', 'doa', 'hadist', 'maulid', 'praktek_ibadah', 'sholawat', 'sunnah'];
        if (level1.some(x => currentPage.includes(x))) {
            window.location.href = './dashboard.html';
        } else if (level2.some(x => currentPage.includes(x))) {
            window.location.href = '../../dashboard.html';
        } else if (level3.some(x => currentPage.includes(x))) {
            window.location.href = '../dashboard.html';
        } else {
            App.exitApp();
        }
    });
}
