document.addEventListener('DOMContentLoaded', () => {
    const isIndexPage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';
    const headerContainer = document.getElementById('header-container');
    
    if (!isIndexPage) {
        headerContainer.innerHTML = `
            <nav>
                <ul>
                    <li><a href="about-us.html">About Us</a></li>
                    <li><a href="about-movement.html">About Movement</a></li>
                    <li><a href="about-nfts.html">About NFTs</a></li>
                    <li><a href="mint-page.html">Mint Page</a></li>
                    <li><a href="profile.html">Profile</a></li>
                </ul>
            </nav>
        `;
        headerContainer.style.display = 'block';
    }

    // Dönen madalyonu ekleyin
    const medallion = document.createElement('div');
    medallion.className = 'medallion';
    medallion.innerHTML = `
        <div class="face front"></div>
        <div class="face back"></div>
    `;
    document.body.appendChild(medallion);
    medallion.style.display = 'block';

    // Arka plan renginin sarı kalmasını sağlamak için connected sınıfını ekleyin
    if (!isIndexPage) {
        document.body.classList.add('connected');
    }
});
